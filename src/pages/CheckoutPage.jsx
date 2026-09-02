import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { usePlaceOrderMutation } from "../store/apiSlice";
import { clearCart } from "../store/cartSlice";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder, { isLoading }] = usePlaceOrderMutation();

  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    customerAddress: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
        <FaShoppingBag size={48} color="var(--teal)" />
        <h2 style={{ marginTop: 20, fontSize: 24 }}>Your cart is empty</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
          Browse Products
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const orderData = {
        ...form,
        items: items.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      await placeOrder(orderData).unwrap();
      dispatch(clearCart());
      navigate("/order-success");
    } catch (err) {
      setError(err?.data?.message || "Could not place order. Please try again.");
    }
  };

  return (
    <div className="container" style={{ padding: "50px 0 80px", maxWidth: 640 }}>
      <h2 style={{ fontSize: 26, marginBottom: 30 }}>Checkout</h2>

      <div
        style={{
          background: "var(--white)",
          borderRadius: "var(--radius-md)",
          padding: 20,
          boxShadow: "var(--shadow-sm)",
          marginBottom: 24,
        }}
      >
        <h4 style={{ fontSize: 15, marginBottom: 12 }}>Order Summary</h4>
        {items.map((item) => (
          <div
            key={item.productId}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              padding: "6px 0",
              color: "var(--ink-soft)",
            }}
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 800,
            fontSize: 17,
            marginTop: 12,
            paddingTop: 12,
            borderTop: "1px solid rgba(11,79,86,0.1)",
            color: "var(--teal-deep)",
          }}
        >
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "var(--white)",
          borderRadius: "var(--radius-md)",
          padding: 24,
          boxShadow: "var(--shadow-sm)",
          display: "grid",
          gap: 16,
        }}
      >
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            name="customerName"
            required
            minLength={2}
            maxLength={100}
            value={form.customerName}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Your name"
          />
        </div>

        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="customerPhone"
            required
            value={form.customerPhone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="e.g. 9876543210"
          />
        </div>

        <div>
          <label style={labelStyle}>Delivery Address</label>
          <textarea
            name="customerAddress"
            required
            minLength={5}
            maxLength={500}
            rows={3}
            value={form.customerAddress}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="House no, street, city, pincode"
          />
        </div>

        <div>
          <label style={labelStyle}>Order Notes (optional)</label>
          <textarea
            name="notes"
            maxLength={500}
            rows={2}
            value={form.notes}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "vertical" }}
            placeholder="Any special instructions"
          />
        </div>

        <div
          style={{
            background: "var(--frost)",
            borderRadius: 10,
            padding: "12px 16px",
            fontSize: 13.5,
            color: "var(--teal-deep)",
            fontWeight: 700,
          }}
        >
          Payment Method: Cash on Delivery
        </div>

        {error && <p style={{ color: "var(--red)", fontSize: 13.5, margin: 0 }}>{error}</p>}

        <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: "100%" }}>
          {isLoading ? "Placing Order..." : `Place Order — ₹${total.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "var(--teal-deep)",
  marginBottom: 6,
};

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "1.5px solid rgba(11,79,86,0.18)",
  fontSize: 14,
  outline: "none",
  fontFamily: "inherit",
};

export default CheckoutPage;