import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaSnowflake, FaCheckCircle, FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGetProductBySlugQuery, useGetProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { getImageUrl } from "../utils/image";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { slug } = useParams();
  const { data: product, isLoading, isError } = useGetProductBySlugQuery(slug);
  const { data: related } = useGetProductsQuery(
    { category: product?.category },
    { skip: !product }
  );
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  useEffect(() => {
    setActiveImg(0);
    setQty(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

   const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      dispatch(addToCart(product));
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (isLoading) return <Loader label="Fetching product details..." />;
  if (isError || !product)
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
          Back to Products
        </Link>
      </div>
    );

  const images = (
  product.images?.length
    ? product.images
    : [product.thumbnail]
).map(getImageUrl);
  const relatedProducts = related?.filter((p) => p._id !== product._id).slice(0, 4);

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div style={{ fontSize: 13.5, color: "var(--ink-soft)", marginBottom: 28 }}>
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
          <span style={{ color: "var(--teal-deep)", fontWeight: 700 }}>{product.name}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} id="pd-grid">
          {/* GALLERY */}
          <div>
            <motion.div
              key={activeImg}
              initial={{ opacity: 0.4, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "1/1",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <img src={images[activeImg]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1))}
                    className="gallery-nav"
                    style={{ left: 14 }}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1))}
                    className="gallery-nav"
                    style={{ right: 14 }}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </motion.div>

            {images.length > 1 && (
              <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: 12,
                      overflow: "hidden",
                      border: activeImg === i ? "3px solid var(--teal)" : "3px solid transparent",
                      padding: 0,
                      opacity: activeImg === i ? 1 : 0.65,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DETAILS */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">{product.category}</span>
            <h1 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", marginTop: 12 }}>{product.name}</h1>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 14 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5, fontWeight: 700, color: "var(--teal-deep)" }}>
                <FaStar color="var(--gold)" /> {product.rating} / 5
              </span>
              <span style={{ color: product.stock > 0 ? "var(--peacock)" : "var(--red)", fontWeight: 700, fontSize: 13.5 }}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <p style={{ marginTop: 20, color: "var(--ink-soft)", lineHeight: 1.8, fontSize: 15.5 }}>
              {product.description}
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 24 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, color: "var(--red)" }}>
                ₹{product.price}
              </span>
              <span style={{ color: "var(--ink-soft)" }}>/ {product.unit}</span>
            </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid rgba(11,79,86,0.2)",
                  borderRadius: 999,
                  overflow: "hidden",
                }}
              >
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} style={qtyBtnStyle}>−</button>
                <span style={{ padding: "0 18px", fontWeight: 700 }}>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} style={qtyBtnStyle}>+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 18px", fontSize: 14 }}
              >
                <FaCartPlus size={14} /> {added ? "Added!" : "Add to Cart"}
              </button>
              <a
              
                href={`https://wa.me/919617420222?text=${encodeURIComponent(
                  `Hi! I would like to order ${qty} x ${product.name} (${product.unit}) from Shree Kamal Nayan Frozen Food LLP.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", fontSize: 14 }}
              >
                <FaWhatsapp size={26} />
              </a>
            </div>

            {product.features?.length > 0 && (
              <div style={{ marginTop: 34 }}>
                <h4 style={{ fontSize: 16, marginBottom: 14 }}>Why you'll love it</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {product.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                      <FaCheckCircle color="var(--peacock)" size={13} /> {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                marginTop: 34,
                background: "var(--frost)",
                borderRadius: "var(--radius-md)",
                padding: 22,
              }}
            >
              <h4 style={{ fontSize: 15, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <FaSnowflake color="var(--teal)" /> Nutrition (per 100g)
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }} id="nutri-grid">
                {Object.entries(product.nutrition || {}).map(([k, v]) => (
                  v ? (
                    <div key={k} style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 800, color: "var(--teal-deep)", fontSize: 14 }}>{v}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-soft)", textTransform: "capitalize" }}>{k}</div>
                    </div>
                  ) : null
                ))}
              </div>
              <p style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 16, borderTop: "1px solid rgba(11,79,86,0.1)", paddingTop: 14 }}>
                <strong>Storage:</strong> {product.storageInstructions}
              </p>
            </div>
          </motion.div>
        </div>

        {relatedProducts?.length > 0 && (
          <div style={{ marginTop: 96 }}>
            <div className="section-head" style={{ marginBottom: 40 }}>
              <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>You may also like</span>
              <h2>More from {product.category}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} id="related-grid">
              {relatedProducts.map((p, i) => (
                <ProductCard product={p} key={p._id} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .gallery-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%; border: none;
          background: rgba(255,255,255,0.9); color: var(--teal-deep);
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm); transition: transform 0.2s ease;
        }
        .gallery-nav:hover { transform: translateY(-50%) scale(1.1); }
        @media (max-width: 900px) {
          #pd-grid { grid-template-columns: 1fr !important; }
          #related-grid { grid-template-columns: 1fr 1fr !important; }
          #nutri-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 560px) {
          #related-grid { grid-template-columns: 1fr !important; }
          #nutri-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
};

const qtyBtnStyle = {
  width: 40,
  height: 40,
  border: "none",
  background: "transparent",
  fontSize: 18,
  fontWeight: 700,
  color: "var(--teal-deep)",
};

export default ProductDetail;
