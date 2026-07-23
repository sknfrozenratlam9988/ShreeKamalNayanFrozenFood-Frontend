import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUpload, FaTimes, FaSave } from "react-icons/fa";
import {
  useGetAdminProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadImagesMutation,
} from "../../store/apiSlice";
import { getImageUrl } from "../../utils/image";

const emptyForm = {
  name: "",
  category: "Frozen Vegetables",
  shortDescription: "",
  description: "",
  price: "",
  unit: "500 g pack",
  stock: 100,
  images: [],
  thumbnail: "",
  storageInstructions: "Keep frozen at -18°C. Do not refreeze after thawing.",
  features: "",
  isFeatured: false,
  isActive: true,
  nutrition: { calories: "", protein: "", carbs: "", fat: "", fiber: "" },
};

const ProductForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const { data: products } = useGetAdminProductsQuery(undefined, { skip: !isEdit });
  const [createProduct, { isLoading: creating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();
  const [uploadImages, { isLoading: uploading }] = useUploadImagesMutation();

  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (isEdit && products) {
      const existing = products.find((p) => p._id === id);
      if (existing) {
        setForm({
          ...emptyForm,
          ...existing,
          features: existing.features?.join(", ") || "",
          nutrition: existing.nutrition || emptyForm.nutrition,
        });
      }
    }
  }, [isEdit, products, id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleNutritionChange = (key, value) => {
    setForm((f) => ({ ...f, nutrition: { ...f.nutrition, [key]: value } }));
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // keep in sync with backend limit

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    const oversized = Array.from(files).filter((f) => f.size > MAX_FILE_SIZE);
    if (oversized.length) {
      setError(
        `${oversized.map((f) => f.name).join(", ")} is larger than ${MAX_FILE_SIZE / (1024 * 1024)}MB. Please compress the image (PNG files are often much larger than JPG/WEBP) and try again.`
      );
      e.target.value = ""; // reset input so the same file can be reselected after fixing
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach((f) => formData.append("images", f));
    try {
      const res = await uploadImages(formData).unwrap();
      setForm((f) => ({
        ...f,
        images: [...f.images, ...res.urls],
        thumbnail: f.thumbnail || res.urls[0],
      }));
    } catch (err) {
      setError(err?.data?.message || "Image upload failed");
    }
  };

  const removeImage = (url) => {
    setForm((f) => ({
      ...f,
      images: f.images.filter((i) => i !== url),
      thumbnail: f.thumbnail === url ? f.images.filter((i) => i !== url)[0] || "" : f.thumbnail,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.thumbnail && form.images.length === 0) {
      setError("Please add at least one product image (upload a file or use an image URL).");
      return;
    }

    const payload = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      thumbnail: form.thumbnail || form.images[0],
      features: form.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
    };

    try {
      if (isEdit) {
        await updateProduct({ id, ...payload }).unwrap();
        setToast("Product updated successfully");
      } else {
        await createProduct(payload).unwrap();
        setToast("Product created successfully");
      }
      setTimeout(() => navigate("/admin/dashboard"), 900);
    } catch (err) {
      setError(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - var(--header-h))", background: "var(--frost)", padding: "40px 0 80px" }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <Link to="/admin/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--teal-deep)", fontWeight: 700, marginBottom: 20 }}>
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: 36, boxShadow: "var(--shadow-md)", display: "grid", gap: 22 }}
        >
          <h2 style={{ fontSize: 24 }}>{isEdit ? "Edit Product" : "Add New Product"}</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} id="grid-2">
            <Field label="Product Name" name="name" value={form.name} onChange={handleChange} required />
            <div>
              <label style={labelStyle}>Category</label>
              <select name="category" value={form.category} onChange={handleChange} style={inputStyle}>
                <option>Frozen Vegetables</option>
                <option>Frozen Fruits</option>
                <option>Ready To Eat</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <Field label="Short Description" name="shortDescription" value={form.shortDescription} onChange={handleChange} required />

          <div>
            <label style={labelStyle}>Full Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} required style={{ ...inputStyle, resize: "vertical" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }} id="grid-3">
            <Field label="Price (₹)" name="price" type="number" value={form.price} onChange={handleChange} required />
            <Field label="Unit" name="unit" value={form.unit} onChange={handleChange} required />
            <Field label="Stock" name="stock" type="number" value={form.stock} onChange={handleChange} required />
          </div>

          <div>
            <label style={labelStyle}>Product Images</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
              {form.images.map((img) => (
                <div key={img} style={{ position: "relative", width: 84, height: 84 }}>
                  <img src={getImageUrl(img)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10, border: form.thumbnail === img ? "3px solid var(--teal)" : "1px solid rgba(11,79,86,0.15)" }} />
                  <button type="button" onClick={() => removeImage(img)} style={removeBtnStyle}>
                    <FaTimes size={10} />
                  </button>
                </div>
              ))}
              <label style={uploadBoxStyle}>
                <FaUpload color="var(--teal)" />
                <span style={{ fontSize: 11, marginTop: 4 }}>{uploading ? "Uploading..." : "Upload"}</span>
                <input type="file" multiple accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
              </label>
            </div>
            <p style={{ fontSize: 12, color: "var(--ink-soft)" }}>
              Or paste an image URL and press Enter:
            </p>
            <input
              type="text"
              placeholder="https://images.example.com/photo.jpg"
              style={inputStyle}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const url = e.target.value.trim();
                  if (url) {
                    setForm((f) => ({ ...f, images: [...f.images, url], thumbnail: f.thumbnail || url }));
                    e.target.value = "";
                  }
                }
              }}
            />
          </div>

          <Field label="Features (comma separated)" name="features" value={form.features} onChange={handleChange} placeholder="No preservatives, Ready in 3 minutes" />

          <div>
            <label style={labelStyle}>Nutrition (per 100g)</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }} id="grid-5">
              {["calories", "protein", "carbs", "fat", "fiber"].map((k) => (
                <input
                  key={k}
                  placeholder={k}
                  value={form.nutrition[k]}
                  onChange={(e) => handleNutritionChange(k, e.target.value)}
                  style={{ ...inputStyle, textTransform: "capitalize" }}
                />
              ))}
            </div>
          </div>

          <Field label="Storage Instructions" name="storageInstructions" value={form.storageInstructions} onChange={handleChange} />

          <div style={{ display: "flex", gap: 30 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
              <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} /> Featured Product
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
              <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} /> Active (visible on site)
            </label>
          </div>

          {error && <p style={{ color: "var(--red)", fontSize: 13.5 }}>{error}</p>}

          <button type="submit" className="btn btn-primary" disabled={creating || updating} style={{ justifySelf: "flex-start" }}>
            <FaSave /> {isEdit ? "Update Product" : "Create Product"}
          </button>
        </motion.form>
      </div>

      {toast && <div className="toast">{toast}</div>}

      <style>{`
        @media (max-width: 700px) {
          #grid-2, #grid-3 { grid-template-columns: 1fr !important; }
          #grid-5 { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
};

const labelStyle = { display: "block", fontSize: 13, fontWeight: 700, color: "var(--teal-deep)", marginBottom: 8 };
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1.5px solid rgba(11,79,86,0.18)",
  fontSize: 14,
  fontFamily: "var(--font-body)",
  outline: "none",
};
const uploadBoxStyle = {
  width: 84,
  height: 84,
  borderRadius: 10,
  border: "2px dashed var(--teal)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "var(--teal-deep)",
};
const removeBtnStyle = {
  position: "absolute",
  top: -6,
  right: -6,
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "none",
  background: "var(--red)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Field = ({ label, ...props }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <input style={inputStyle} {...props} />
  </div>
);

export default ProductForm;
