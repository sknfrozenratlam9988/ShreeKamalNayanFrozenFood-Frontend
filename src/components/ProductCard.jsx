import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaSnowflake } from "react-icons/fa";
import { getImageUrl } from "../utils/image";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, index = 0 }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    navigate("/checkout");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="product-card"
        style={{
          background: "var(--white)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-sm)",
          border: "1px solid rgba(11,79,86,0.06)",
          position: "relative",
          transition: "transform 0.35s ease, box-shadow 0.35s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3.1" }}>
          {!imgLoaded && (
            <div
              className="pc-skeleton"
              style={{
                position: "absolute",
                inset: 0,
              }}
            />
          )}

          <img
            src={getImageUrl(product.thumbnail)}
            alt={product.name}
            loading="lazy"
            className="pc-img"
            onLoad={() => setImgLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease, opacity 0.4s ease",
              opacity: imgLoaded ? 1 : 0,
              visibility: imgLoaded ? "visible" : "hidden",
              position: imgLoaded ? "static" : "absolute",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(11,79,86,0) 55%, rgba(11,79,86,0.35) 100%)",
            }}
          />

          {product.isFeatured && (
            <span
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "linear-gradient(135deg, var(--gold-soft), var(--gold))",
                color: "var(--maroon)",
                fontSize: 11.5,
                fontWeight: 800,
                letterSpacing: "0.05em",
                padding: "5px 11px",
                borderRadius: 999,
                display: "flex",
                alignItems: "center",
                gap: 5,
                textTransform: "uppercase",
              }}
            >
              <FaSnowflake size={11} /> Featured
            </span>
          )}

          <span
            style={{
              position: "absolute",
              bottom: 12,
              right: 12,
              background: "rgba(255,255,255,0.92)",
              color: "var(--teal-deep)",
              fontSize: 12.5,
              fontWeight: 800,
              padding: "5px 10px",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <FaStar color="var(--gold)" size={11} /> {product.rating}
          </span>
        </div>

        <div
          style={{
            padding: "18px 20px 22px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              color: "var(--peacock)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {product.category}
          </span>

          <h3 style={{ fontSize: 19, margin: "6px 0 8px" }}>{product.name}</h3>

          <p
            className="product-desc"
            style={{
              fontSize: 13.5,
              color: "var(--ink-soft)",
              margin: 0,
              lineHeight: 1.6,
              minHeight: "90px",
            }}
          >
            {product.shortDescription}
          </p>

          <div style={{ marginTop: "auto", paddingTop: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--red)",
                }}
              >
                ₹{product.price}
              </span>
              <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>
                {" "}
                / {product.unit}
              </span>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: "var(--teal-deep)",
                  background: "transparent",
                  border: "1.5px solid var(--teal)",
                  borderRadius: 999,
                  padding: "9px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  cursor: "pointer",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
                className="pc-add-btn"
              >
                <FaCartPlus size={12} /> Add
              </button>

              <button
                onClick={handleBuyNow}
                style={{
                  flex: 1,
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: "var(--white)",
                  background: "var(--teal)",
                  border: "none",
                  borderRadius: 999,
                  padding: "9px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  cursor: "pointer",
                  transition: "background 0.25s ease",
                }}
                className="pc-buy-btn"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>

      <style>{`
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .product-card:hover .pc-img {
          transform: scale(1.08);
        }

        .product-desc {
          display: -webkit-box;
          -webkit-line-clamp: 4;   /* show only 4 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pc-skeleton {
          background: linear-gradient(
            90deg,
            rgba(11, 79, 86, 0.08) 25%,
            rgba(11, 79, 86, 0.15) 50%,
            rgba(11, 79, 86, 0.08) 75%
          );
          background-size: 200% 100%;
          animation: pc-shimmer 1.4s ease-in-out infinite;
        }

        @keyframes pc-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default ProductCard;