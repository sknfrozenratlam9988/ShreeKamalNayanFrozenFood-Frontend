import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaSnowflake } from "react-icons/fa";
import { useGetProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const categories = ["All", "Frozen Vegetables", "Frozen Fruits", "Ready To Eat", "Other"];

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");

  const { data: products, isLoading, isError } = useGetProductsQuery({
    category: activeCategory,
    search,
  });

  const handleCategory = (cat) => {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  };

  return (
    <div className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="feather-divider"><span className="line" /><FaSnowflake color="var(--gold)" /><span className="line" /></div>
          <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Full range</span>
          <h2>All Frozen Products</h2>
          <p>Naturally grown, expertly frozen — pick your favourites below.</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: activeCategory === cat ? "none" : "1.5px solid rgba(11,79,86,0.25)",
                  background: activeCategory === cat ? "linear-gradient(135deg, var(--teal), var(--teal-deep))" : "transparent",
                  color: activeCategory === cat ? "var(--white)" : "var(--teal-deep)",
                  fontWeight: 700,
                  fontSize: 13.5,
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "var(--white)",
              border: "1.5px solid rgba(11,79,86,0.15)",
              borderRadius: 999,
              padding: "10px 18px",
              minWidth: 240,
            }}
          >
            <FaSearch color="var(--teal)" size={14} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              style={{ border: "none", outline: "none", flex: 1, fontSize: 14, background: "transparent" }}
            />
          </div>
        </div>

        {isLoading && <Loader />}
        {isError && (
          <p style={{ textAlign: "center", color: "var(--red)", padding: "40px 0" }}>
            Couldn't load products. Please check your connection and try again.
          </p>
        )}
        {!isLoading && !isError && products?.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--ink-soft)" }}>
            <p style={{ fontSize: 18, fontWeight: 700, color: "var(--teal-deep)" }}>No products found</p>
            <p style={{ marginTop: 8 }}>Try a different category or search term.</p>
          </div>
        )}

        <motion.div
          layout
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }}
          id="products-grid"
        >
          {products?.map((p, i) => (
            <ProductCard product={p} key={p._id} index={i} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #products-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          #products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AllProducts;
