import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from "react-icons/fa";
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
      <div className="cart-page cart-empty-page">
        <div className="cart-bg-orb cart-bg-orb-one"></div>
        <div className="cart-bg-orb cart-bg-orb-two"></div>
        <div className="cart-grid"></div>

        <div className="cart-empty-container">
          <div className="cart-empty-icon">
            <FaShoppingBag />
          </div>

          <span className="cart-eyebrow">YOUR SHOPPING BAG</span>

          <h2>Your cart is empty</h2>

          <p>
            Add some products to get started.
          </p>

          <Link to="/products" className="cart-shop-btn">
            <span>Browse Products</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-bg-orb cart-bg-orb-one"></div>
      <div className="cart-bg-orb cart-bg-orb-two"></div>
      <div className="cart-bg-orb cart-bg-orb-three"></div>
      <div className="cart-grid"></div>

      <div className="cart-container">
        <div className="cart-header">
          <div>
            <span className="cart-eyebrow">PREMIUM COLLECTION</span>
            <h2>Your Cart</h2>
            <p>Review your selected products before checkout.</p>
          </div>

          <div className="cart-count">
            <FaShoppingBag />
            <span>{items.length} {items.length === 1 ? "Item" : "Items"}</span>
          </div>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item-card" key={item.productId}>
                <div className="cart-product-image-wrap">
                  <div className="cart-product-glow"></div>

                  <img
                    src={getImageUrl(item.thumbnail)}
                    alt={item.name}
                    className="cart-product-image"
                  />
                </div>

                <div className="cart-product-info">
                  <span className="cart-product-label">FROZEN FRESH</span>

                  <h4>{item.name}</h4>

                  <p>
                    ₹{item.price} / {item.unit}
                  </p>
                </div>

                <div className="cart-quantity-area">
                  <span className="cart-control-label">QUANTITY</span>

                  <div className="cart-quantity-control">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.productId))}
                      aria-label="Decrease quantity"
                    >
                      <FaMinus size={10} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.productId))}
                      aria-label="Increase quantity"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <span>SUBTOTAL</span>
                  <strong>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </strong>
                </div>

                <button
                  className="cart-remove-btn"
                  onClick={() => dispatch(removeFromCart(item.productId))}
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-top">
              <span className="cart-eyebrow">ORDER SUMMARY</span>
              <h3>Cart Total</h3>
            </div>

            <div className="cart-summary-line">
              <span>Products</span>
              <span>{items.length}</span>
            </div>

            <div className="cart-summary-line">
              <span>Quantity</span>
              <span>
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="cart-summary-divider"></div>

            <div className="cart-total-row">
              <div>
                <span>Total Amount</span>
                <small>Inclusive of selected products</small>
              </div>

              <strong>₹{total.toFixed(2)}</strong>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="cart-checkout-btn"
            >
              <span>Proceed to Checkout</span>
              <FaArrowRight />
            </button>

            <div className="cart-secure-note">
              <span className="cart-secure-dot"></span>
              <span>Secure &amp; seamless checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;