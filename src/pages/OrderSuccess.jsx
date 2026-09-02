import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div
      className="container"
      style={{
        padding: "100px 20px",
        textAlign: "center",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <FaCheckCircle size={64} color="var(--peacock)" />
      <h2 style={{ fontSize: 26, marginTop: 20 }}>Order Placed Successfully!</h2>
      <p style={{ color: "var(--ink-soft)", marginTop: 10, lineHeight: 1.6 }}>
        Thank you for your order. We'll contact you shortly to confirm delivery details.
        Payment will be collected on delivery.
      </p>
      <Link to="/products" className="btn btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;