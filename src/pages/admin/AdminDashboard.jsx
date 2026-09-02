import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaBoxOpen, FaClipboardList } from "react-icons/fa";
import { useGetAdminProductsQuery, useDeleteProductMutation, useLogoutMutation , useGetPendingOrdersCountQuery  } from "../../store/apiSlice";
import { logout } from "../../store/authSlice";
import Loader from "../../components/Loader";
import logo from "../../assets/logo.png";
import { getImageUrl } from "../../utils/image";

const AdminDashboard = () => {
  const { data: products, isLoading } = useGetAdminProductsQuery();
  const { data: pendingData } = useGetPendingOrdersCountQuery(undefined, {
  pollingInterval: 30000,
});
const pendingCount = pendingData?.count || 0;
  const [deleteProduct] = useDeleteProductMutation();
  const [logoutApi] = useLogoutMutation();
  const [confirmId, setConfirmId] = useState(null);
  const [toast, setToast] = useState("");
  const { adminInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
      setToast("Product deleted successfully");
      setConfirmId(null);
      setTimeout(() => setToast(""), 3000);
    } catch (err) {
      setToast(err?.data?.message || "Failed to delete product");
    }
  };

const handleLogout = async () => {
  try {
    await logoutApi().unwrap();
  } catch (err) {
    console.error("Logout API error:", err);
  } finally {
    dispatch(logout());
    navigate("/admin/login");
  }
};

  return (
    <div style={{ minHeight: "calc(100vh - var(--header-h))", background: "var(--frost)", paddingBottom: 60 }}>
      <div style={{ background: "var(--teal-deep)", padding: "22px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={logo} alt="Logo" style={{ height: 44 }} />
            <div>
              <h3 style={{ color: "var(--white)", fontSize: 18 }}>Admin Dashboard</h3>
              <p style={{ color: "var(--teal-light)", fontSize: 12.5, margin: 0 }}>Welcome, {adminInfo?.name}</p>
            </div>
          </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              to="/admin/orders"
              className="btn btn-outline"
              style={{ borderColor: "var(--gold-soft)", color: "var(--gold-soft)", position: "relative" }}
            >
              <FaClipboardList /> Orders
              {pendingCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "var(--red)",
                    color: "var(--white)",
                    fontSize: 11,
                    fontWeight: 800,
                    borderRadius: 999,
                    minWidth: 18,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 4px",
                  }}
                >
                  {pendingCount}
                </span>
              )}
            </Link>

            <button onClick={handleLogout} className="btn btn-outline" style={{ borderColor: "var(--gold-soft)", color: "var(--gold-soft)" }}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 14 }}>
          <div>
            <h2 style={{ fontSize: 24 }}>Manage Product</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 4 }}>
              {products?.length || 0} product{products?.length === 1 ? "" : "s"} in catalogue
            </p>
          </div>
          <Link to="/admin/products/new" className="btn btn-primary">
            <FaPlus /> Add New Product
          </Link>
        </div>

        {isLoading ? (
          <Loader />
        ) : products?.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--ink-soft)" }}>
            <FaBoxOpen size={40} color="var(--teal)" />
            <p style={{ marginTop: 16, fontWeight: 700, color: "var(--teal-deep)" }}>No products yet</p>
            <p style={{ marginTop: 6 }}>Click "Add New Product" to create your first listing.</p>
          </div>
        ) : (
          <div style={{ background: "var(--white)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "var(--frost)", textAlign: "left" }}>
                    {["Image", "Name", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                      <th key={h} style={{ padding: "14px 18px", fontSize: 12.5, fontWeight: 800, color: "var(--teal-deep)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products?.map((p) => (
                    <tr key={p._id} style={{ borderTop: "1px solid rgba(11,79,86,0.08)" }}>
                      <td style={{ padding: "12px 18px" }}>
                        <img src={getImageUrl(p.thumbnail)} alt={p.name} style={{ width: 48, height: 48, borderRadius: 10, objectFit: "cover" }} />
                      </td>
                      <td style={{ padding: "12px 18px", fontWeight: 700, fontSize: 14 }}>{p.name}</td>
                      <td style={{ padding: "12px 18px", fontSize: 13.5, color: "var(--ink-soft)" }}>{p.category}</td>
                      <td style={{ padding: "12px 18px", fontSize: 13.5 }}>₹{p.price}</td>
                      <td style={{ padding: "12px 18px", fontSize: 13.5 }}>{p.stock}</td>
                      <td style={{ padding: "12px 18px" }}>
                        <span
                          style={{
                            fontSize: 11.5,
                            fontWeight: 800,
                            padding: "4px 10px",
                            borderRadius: 999,
                            background: p.isActive ? "rgba(46,125,79,0.12)" : "rgba(200,39,43,0.1)",
                            color: p.isActive ? "var(--peacock)" : "var(--red)",
                          }}
                        >
                          {p.isActive ? "Active" : "Hidden"}
                        </span>
                      </td>
                      <td style={{ padding: "12px 18px" }}>
                        <div style={{ display: "flex", gap: 10 }}>
                          <Link to={`/admin/products/${p._id}/edit`} style={actionBtn("var(--teal)")}>
                            <FaEdit />
                          </Link>
                          <button onClick={() => setConfirmId(p._id)} style={actionBtn("var(--red)")}>
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {confirmId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(20,37,36,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 500,
              padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ background: "var(--white)", borderRadius: "var(--radius-md)", padding: 30, maxWidth: 380, textAlign: "center" }}
            >
              <h3 style={{ fontSize: 18 }}>Delete this product?</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 10 }}>
                This action cannot be undone. The product will be permanently removed.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 24, justifyContent: "center" }}>
                <button onClick={() => setConfirmId(null)} className="btn btn-outline">Cancel</button>
                <button onClick={() => handleDelete(confirmId)} className="btn btn-primary">Delete</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

const actionBtn = (color) => ({
  width: 34,
  height: 34,
  borderRadius: 8,
  border: "none",
  background: `${color}15`,
  color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default AdminDashboard;
