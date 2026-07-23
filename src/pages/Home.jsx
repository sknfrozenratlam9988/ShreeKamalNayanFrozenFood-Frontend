import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSnowflake, FaLeaf, FaShippingFast, FaAward } from "react-icons/fa";
import { useGetFeaturedProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import logo from "../assets/logo.png";


import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";



// Replace these with your own images
import vegetableImg from "../assets/Mix-veg.png";
import fruitImg from "../assets/Mango.png";
import readyImg from "../assets/ready-to-eat.png";
const fadeUp = {

  
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const categories = [
  { name: "Frozen Vegetables", tagline: "Corn, spinach, beans & more", emoji: "🥦" },
  { name: "Frozen Fruits", tagline: "Mango, strawberry & more", emoji: "🥭" },
  { name: "Ready-to-Eat", tagline: "Ready-to-cook vegetable blends", emoji: "🥗" },
];

const stats = [
  { icon: FaSnowflake, value: "-18°C", label: "Flash-frozen for freshness" },
  { icon: FaLeaf, value: "100%", label: "Natural, no preservatives" },
  { icon: FaShippingFast, value: "24 hrs", label: "From farm to freezer" },
  { icon: FaAward, value: "FSSAI", label: "Certified quality" },
];


const slides = [
  {
    id: 1,
    badge: "SHREE KAMAL NAYAN FROZEN FOOD LLP",
    title1: "Farm Fresh",
    title2: "Frozen Vegetables",
    description:
      "Premium quality vegetables harvested fresh and frozen instantly to preserve nutrition, freshness and natural taste.",

    button: "Shop Vegetables",
    link: "/products?category=Frozen Vegetables",
    image: vegetableImg,
    color: "#0b4f56",
  },

  {
    id: 2,
    badge: "100% NATURAL FRUITS",

    title1: "Sweetness",
    title2: "Frozen Forever Fresh",

    description:
      "Delicious frozen fruits packed with vitamins and freshness. Perfect for smoothies, desserts and healthy meals.",

    button: "Shop Fruits",
    link: "/products?category=Frozen Fruits",
    image: fruitImg,
    color: "#d32f2f",
  },

  {
    id: 3,
    badge: "READY TO EAT",

    title1: "Quick Meals",
    title2: "Ready In Minutes",

    description:
      "Tasty frozen ready-to-eat products prepared with premium ingredients. Heat, serve and enjoy anytime.",

    button: "Explore Products",
    link: "/products?category=Ready To Eat",
    image: readyImg,
    color: "#f57c00",
  },
];

const Home = () => {
  const { data: featured, isLoading } = useGetFeaturedProductsQuery();

  return (
    <div>
      { /* ================ Slider ==================*/ }
        <section className="hero-slider">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        // effect="slide"
        loop={true}
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">

              <div className="hero-left">

                <span className="hero-badge">
                  {slide.badge}
                </span>

                <h1>
                  {slide.title1}
                  <br />
                  <span
                    style={{
                      color: slide.color,
                    }}
                  >
                    {slide.title2}
                  </span>
                </h1>

                <p>{slide.description}</p>

                <div className="hero-buttons">

                  <Link
                    className="btn-primary"
                    to={slide.link}
                  >
                    {slide.button}
                  </Link>

                  <Link
                    className="btn-outline"
                    to="/about"
                  >
                    Our Story
                  </Link>

                </div>

              </div>

              <div className="hero-right">

                <img
                  src={slide.image}
                  alt={slide.title2}
                />

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>


      {/* ================= HERO ================= */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 80% 10%, rgba(28,140,147,0.14), transparent 55%), linear-gradient(180deg, var(--cream) 0%, #f2ede0 100%)",
          paddingTop: 72,
          paddingBottom: 72,
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
          }}
          id="hero-grid"
        >
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <span className="eyebrow">Shree Kamal Nayan Frozen Food LLP</span>
            <h1 style={{ fontSize: "clamp(34px, 5.2vw, 58px)", lineHeight: 1.08, marginTop: 16 }}>
              Farm-fresh vegetables,{" "}
              <span style={{ color: "var(--red)" }}>frozen</span> the moment
              they're at their best.
            </h1>
            <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", maxWidth: 520 }}>
              We harvest, clean, and flash-freeze premium vegetables and fruits within
              hours — so every pack you open tastes as fresh as the day it was picked.
              No shortcuts, no preservatives, just pure goodness.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/products" className="btn btn-primary">Shop Frozen Range</Link>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>

            <div style={{ display: "flex", gap: 28, marginTop: 48, flexWrap: "wrap" }} id="hero-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <s.icon color="var(--teal)" size={20} />
                  <div>
                    <div style={{ fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--teal-deep)", fontSize: 18 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            <div
              className="float"
              style={{
                position: "absolute",
                width: 340,
                height: 340,
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--teal-light) 0%, transparent 70%)",
                filter: "blur(10px)",
                zIndex: 0,
              }}
            />
            <img
              src={logo}
              alt="Shree Kamal Nayan logo"
              style={{ maxWidth: 420, width: "100%", position: "relative", zIndex: 1 }}
              className="float"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="feather-divider"><span className="line" /><FaSnowflake color="var(--gold)" /><span className="line" /></div>
            <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>What we freeze</span>
            <h2>Explore our categories</h2>
            <p>From everyday vegetables to seasonal fruit, every product is IQF (individually quick-frozen) for the best texture and taste.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} id="cat-grid">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(c.name)}`}
                  style={{
                    display: "block",
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    padding: "40px 28px",
                    textAlign: "center",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid rgba(11,79,86,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  className="cat-card"
                >
                  <div style={{ fontSize: 46, marginBottom: 14 }}>{c.emoji}</div>
                  <h3 style={{ fontSize: 21 }}>{c.name}</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 8 }}>{c.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section" style={{ background: "linear-gradient(180deg, transparent, rgba(28,140,147,0.05))" }}>
        <div className="container">
          <div className="section-head">
            <div className="feather-divider"><span className="line" /><FaLeaf color="var(--peacock)" /><span className="line" /></div>
            <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Customer favourites</span>
            <h2>Best-selling frozen picks</h2>
            <p>Handpicked, best-rated products loved by home cooks across the country.</p>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 }} id="featured-grid">
              {featured?.slice(0, 8).map((p, i) => (
                <ProductCard product={p} key={p._id} index={i} />
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/products" className="btn btn-gold">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="section-tight" style={{ background: "var(--teal-deep)", color: "var(--frost)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} id="why-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>Why choose us</span>
            <h2 style={{ color: "var(--white)", marginTop: 14, fontSize: "clamp(26px, 3.5vw, 36px)" }}>
              Quality you can taste, trust you can rely on
            </h2>
            <p style={{ marginTop: 16, opacity: 0.85, lineHeight: 1.75 }}>
              Every vegetable is sourced from trusted local farms and processed in our
              FSSAI-certified facility. We follow strict cold-chain protocols from
              harvest to your doorstep, ensuring nutrition, texture, and taste are never
              compromised.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { t: "Hygienically Processed", d: "Cleaned & blanched in a certified facility" },
              { t: "Zero Preservatives", d: "Nothing artificial, ever added" },
              { t: "Consistent Cold Chain", d: "Maintained at -18°C throughout" },
              { t: "Nationwide Delivery", d: "Reaching kitchens across India" },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-md)", padding: 22 }}
              >
                <h4 style={{ color: "var(--gold-soft)", fontSize: 16 }}>{f.t}</h4>
                <p style={{ fontSize: 13, opacity: 0.8, marginTop: 8, lineHeight: 1.5 }}>{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .cat-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
        @media (max-width: 960px) {
          #hero-grid { grid-template-columns: 1fr !important; }
          #hero-stats { justify-content: center; }
          #cat-grid { grid-template-columns: 1fr 1fr !important; }
          #featured-grid { grid-template-columns: 1fr 1fr !important; }
          #why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          #cat-grid { grid-template-columns: 1fr !important; }
          #featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
