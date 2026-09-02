import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBoxOpen } from "react-icons/fa";
import {
  useGetAdminOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../store/apiSlice";
import Loader from "../components/Loader";

const STATUS_OPTIONS = ["Pending", "Confirmed", "Out for Delivery", "Delivered", "Cancelled"];

const statusColor = (status) => {
  switch (status) {
    case "Pending":
      return { bg: "rgba(200,39,43,0.1)", color: "var(--red)" };
    case "Confirmed":
      return { bg: "rgba(28,140,147,0.12)", color: "var(--teal)" };
    case "Out for Delivery":
      return { bg: "rgba(200,150,20,0.12)", color: "#a67c00" };
    case "Delivered":
      return { bg: "rgba(46,125,79,0.12)", color: "var(--peacock)" };
    case "Cancelled":
      return { bg: "rgba(100,100,100,0.12)", color: "#666" };
    default:
      return { bg: "rgba(0,0,0,0.05)", color: "#333" };
  }
};

const AdminOrders = () => {
  const { data: orders, isLoading, isError } = useGetAdminOrdersQuery(undefined, {
    pollingInterval: 30000,
  });
  const [updateStatus] = useUpdateOrderStatusMutation();
  const [expandedId, setExpandedId] = useState(null);
  const [toast, setToast] = useState("");

  const handleStatusChange = async (id, status) => {
    try {
      await updateStatus({ id, status }).unwrap();
      setToast("Order status updated");
      setTimeout(() => setToast(""), 2500);
    } catch (err) {
      setToast(err?.data?.message || "Failed to update status");
      setTimeout(() => setToast(""), 2500);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - var(--header-h))", background: "var(--frost)", paddingBottom: 60 }}>
      <div style={{ background: "var(--teal-deep)", padding: "22px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link to="/admin/dashboard" style={{ color: "var(--white)", fontSize: 20, display: "flex" }}>
            <FaArrowLeft />
          </Link>
          <h3 style={{ color: "var(--white)", fontSize: 18 }}>Orders</h3>
        </div>
      </div>

      <div className="container" style={{ marginTop: 40 }}>
        <p style={{ color: "var(--ink-soft)", fontSize: 14, marginBottom: 24 }}>
          {orders?.length || 0} order{orders?.length === 1 ? "" : "s"} total
        </p>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p style={{ textAlign: "center", color: "var(--red)", padding: "40px 0" }}>
            Couldn't load orders. Please try again.
          </p>
        ) : orders?.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--ink-soft)" }}>
            <FaBoxOpen size={40} color="var(--teal)" />
            <p style={{ marginTop: 16, fontWeight: 700, color: "var(--teal-deep)" }}>No orders yet</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {orders.map((order) => {
              const colors = statusColor(order.status);
              const isOpen = expandedId === order._id;

              return (
                <div
                  key={order._id}
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-sm)",
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 12,
                      cursor: "pointer",
                    }}
                    onClick={() => setExpandedId(isOpen ? null : order._id)}
                  >
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 15 }}>
                        {order.customerName}{" "}
                        <span style={{ color: "var(--ink-soft)", fontWeight: 500, fontSize: 13 }}>
                          · {order.customerPhone}
                        </span>
                      </p>
                      <p style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 4 }}>
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontWeight: 800, color: "var(--red)", fontSize: 16 }}>
                        ₹{order.totalAmount}
                      </span>
                      <span
                        style={{
                          fontSize: 11.5,
                          fontWeight: 800,
                          padding: "5px 12px",
                          borderRadius: 999,
                          background: colors.bg,
                          color: colors.color,
                        }}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid rgba(11,79,86,0.08)" }}>
                      <p style={{ fontSize: 13.5, marginBottom: 10 }}>
                        <strong>Address:</strong> {order.customerAddress}
                      </p>
                      {order.notes && (
                        <p style={{ fontSize: 13.5, marginBottom: 10 }}>
                          <strong>Notes:</strong> {order.notes}
                        </p>
                      )}

                      <div style={{ marginTop: 12 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: "var(--teal-deep)" }}>
                          Items
                        </p>
                        {order.items?.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontSize: 13.5,
                              padding: "5px 0",
                              color: "var(--ink-soft)",
                            }}
                          >
                            <span>
                              {item.name} × {item.quantity}
                            </span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 10 }}>
                        <label style={{ fontSize: 13, fontWeight: 700, color: "var(--teal-deep)" }}>
                          Update Status:
                        </label>
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            padding: "8px 14px",
                            borderRadius: 8,
                            border: "1.5px solid rgba(11,79,86,0.18)",
                            fontSize: 13.5,
                            outline: "none",
                          }}
                        >
                          {STATUS_OPTIONS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default AdminOrders;