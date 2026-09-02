import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { getImageUrl } from "../utils/image";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
        <FaShoppingBag size={48} color="var(--teal)" />
        <h2 style={{ marginTop: 20, fontSize: 24 }}>Your cart is empty</h2>
        <p style={{ color: "var(--ink-soft)", marginTop: 8 }}>
          Add some products to get started.
        </p>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "50px 0 80px" }}>
      <h2 style={{ fontSize: 26, marginBottom: 30 }}>Your Cart</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((item) => (
          <div
            key={item.productId}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "var(--white)",
              borderRadius: "var(--radius-md)",
              padding: 16,
              boxShadow: "var(--shadow-sm)",
              flexWrap: "wrap",
            }}
          >
            <img
              src={getImageUrl(item.thumbnail)}
              alt={item.name}
              style={{ width: 72, height: 72, borderRadius: 10, objectFit: "cover" }}
            />

            <div style={{ flex: 1, minWidth: 140 }}>
              <h4 style={{ fontSize: 16 }}>{item.name}</h4>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>
                ₹{item.price} / {item.unit}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                onClick={() => dispatch(decreaseQuantity(item.productId))}
                style={qtyBtnStyle}
                aria-label="Decrease quantity"
              >
                <FaMinus size={11} />
              </button>
              <span style={{ minWidth: 20, textAlign: "center", fontWeight: 700 }}>
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(increaseQuantity(item.productId))}
                style={qtyBtnStyle}
                aria-label="Increase quantity"
              >
                <FaPlus size={11} />
              </button>
            </div>

            <div style={{ minWidth: 80, textAlign: "right", fontWeight: 800, color: "var(--red)" }}>
              ₹{(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.productId))}
              style={{
                background: "none",
                border: "none",
                color: "var(--red)",
                cursor: "pointer",
                padding: 8,
              }}
              aria-label="Remove item"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 30,
          background: "var(--white)",
          borderRadius: "var(--radius-md)",
          padding: 24,
          boxShadow: "var(--shadow-sm)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)" }}>Total Amount</p>
          <p style={{ fontSize: 26, fontWeight: 800, color: "var(--teal-deep)" }}>
            ₹{total.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="btn btn-primary"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const qtyBtnStyle = {
  width: 28,
  height: 28,
  borderRadius: 8,
  border: "1px solid rgba(11,79,86,0.18)",
  background: "var(--frost)",
  color: "var(--teal-deep)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export default CartPage;