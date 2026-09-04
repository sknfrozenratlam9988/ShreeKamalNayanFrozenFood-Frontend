import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSnowflake,
  FaLeaf,
  FaShippingFast,
  FaAward,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { useGetFeaturedProductsQuery } from "../store/apiSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import logo from "../assets/logo.webp";


import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import vegetableImg from "../assets/Mix-veg.webp";
import fruitImg from "../assets/Mango.webp";
import readyImg from "../assets/ready-to-eat.webp";
import vegetableImg1 from "../assets/mix_boul.webp";
import fruitImg1 from "../assets/cut_boul.webp";
import readyImg1 from "../assets/green_boul.webp";
import vegetableImg2 from "../assets/Frozen_Samosa.webp";
import fruitImg2 from "../assets/Frozen_Kachori.webp";
import readyImg2 from "../assets/Cheese_Corn_Momos.webp";
import vegetableImg3 from "../assets/Frozen_Mangoes.webp";
import fruitImg3 from "../assets/Black_Berry.webp";
import readyImg3 from "../assets/Custard_Apple.webp";
import readyImg4 from "../assets/Strawberry.webp";
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

const showcaseProducts = [
  {
    image: vegetableImg1,
    cutout: vegetableImg1,
    title: "Frozen Mix Vegetables",
    features: ["Green Peas • Green beans", "Carrots cube • Sweetcorn", "Cauliflower"],
  },
  {
    image: fruitImg1,
    cutout: fruitImg1,
    title: "Frozen Cut Beans",
    features: ["No added preservatives", "Natural pulp", "Acidity & brix maintained"],
  },
  {
    image: readyImg1,
    cutout: readyImg1,
    title: "Frozen green peas",
    features: ["Heat & serve", "No added preservatives", "Restaurant-style taste"],
  },
  {
    image: vegetableImg2,
    cutout: vegetableImg2,
    title: "Frozen Samosa",
    features: ["Hygienically packed", "No chemicals", "No added preservatives"],
  },
  {
    image: fruitImg2,
    cutout: fruitImg2,
    title: "Frozen Kachori",
    features: ["No added preservatives", "Natural pulp", "Acidity & brix maintained"],
  },
  {
    image: readyImg2,
    cutout: readyImg2 ,
    title: "Frozen Cheese Corn Momos",
    features: ["Hygienically packed", "Pesticide free", "No artificial colour"],
  },
  {
    image: vegetableImg3,
    cutout: vegetableImg3,
    title: "Frozen Mangoes",
    features: ["Hygienically packed", "No chemicals", "No added preservatives"],
  },
  {
    image: fruitImg3,
    cutout: fruitImg3,
    title: "Frozen Blackberry",
    features: ["No added preservatives", "Natural pulp", "Acidity & brix maintained"],
  },
  {
    image: readyImg3,
    cutout: readyImg3,
    title: "Frozen Custard Apple",
    features: ["Hygienically packed", "Pesticide free", "No artificial colour"],
  },
  {
    image: readyImg4,
    cutout: readyImg4,
    title: "Frozen Strawberry",
    features: ["Hygienically packed", "Pesticide free", "No artificial colour"],
  },
];

  const clientReviews = [
  {
    name: "Rohit Sharma",
    role: "Home Chef",
    initials: "RS",
    rating: 5,
    review:
      "The frozen vegetables are really fresh and convenient. The taste stays close to freshly picked produce.",
  },
  {
    name: "Priya Patel",
    role: "Regular Customer",
    initials: "PP",
    rating: 5,
    review:
      "I loved the strawberries and custard apples. Great quality, clean packaging and very easy to use.",
  },
  {
    name: "Amit Verma",
    role: "Restaurant Owner",
    initials: "AV",
    rating: 5,
    review:
      "Consistent quality every time. The products save a lot of preparation time without compromising taste.",
  },
  {
    name: "Neha Jain",
    role: "Home Cook",
    initials: "NJ",
    rating: 5,
    review:
      "The ready-to-cook range is perfect for busy days. Everything tastes fresh and cooks beautifully.",
  },
  {
    name: "Vikas Gupta",
    role: "Food Enthusiast",
    initials: "VG",
    rating: 5,
    review:
      "Excellent frozen range with natural taste. The fruits are especially good for smoothies and desserts.",
  },
  {
    name: "Kavita Mehta",
    role: "Regular Customer",
    initials: "KM",
    rating: 5,
    review:
      "Very happy with the quality and hygiene. These products have become a regular part of my kitchen.",
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
                    className="btn-primary btn btn-primary"
                    to={slide.link}
                  >
                    {slide.button}
                  </Link>

                  <Link
                    className="btn-outline btn btn-primary"
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

      {/* ================= PRODUCT SHOWCASE (image-overlay cards) ================= */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="feather-divider"><span className="line" /><FaLeaf color="var(--peacock)" /><span className="line" /></div>
            <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Our range</span>
            <h2>Popular frozen picks</h2>
            <p>A closer look at the products our customers reach for most.</p>
          </div>

          <div className="showcase-grid" id="showcase-grid">
            {showcaseProducts.map((p, i) => (
              <motion.div
                className="showcase-card"
                key={`${p.title}-${i}`}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <img className="showcase-card-bg" src={p.image} alt={p.title} loading="lazy" />
                <div className="showcase-card-overlay" />
                {p.cutout && (
                  <img
                    className="showcase-card-cutout"
                    src={p.cutout}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                )}
                <div className="showcase-card-content">
                  <h4>{p.title}</h4>
                  <span className="showcase-features-label">Features:</span>
                  <ul>
                    {p.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </div>
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

{/* ================= CLIENT REVIEWS ================= */}
<section className="section client-reviews-section">
  <div className="container">

    <div className="section-head">

      <div className="feather-divider">
        <span className="line" />
        <FaLeaf color="var(--peacock)" />
        <span className="line" />
      </div>

      <span
        className="eyebrow"
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        What our customers say
      </span>

      <h2>Loved by our customers</h2>

      <p>
        Real experiences from people who enjoy the freshness,
        quality and convenience of our frozen range.
      </p>

    </div>


    <div className="reviews-slider-wrap">

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectCoverflow,
        ]}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        speed={750}

        slidesPerView={1}
        spaceBetween={24}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        pagination={{
          clickable: true,
        }}

        navigation

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.15,
          slideShadows: true,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}

        className="client-reviews-swiper"
      >

        {clientReviews.map((review, i) => (

          <SwiperSlide key={`${review.name}-${i}`}>

            <article className="client-review-card">

              {/* TOP */}
              <div
                className={`review-card-top review-color-${(i % 6) + 1}`}
              >

                <div className="review-avatar">
                  {review.initials}
                </div>

                <FaQuoteLeft className="review-quote-icon" />

              </div>


              {/* BODY */}
              <div className="review-card-body">

                <div
                  className="review-stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >

                  {Array.from({
                    length: review.rating,
                  }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}

                </div>


                <h3>
                  {review.name}
                </h3>


                <span className="review-role">
                  {review.role}
                </span>


                <p>
                  "{review.review}"
                </p>

              </div>


              <div className="review-card-corner" />

            </article>

          </SwiperSlide>

        ))}

      </Swiper>

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

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .showcase-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 16 / 9;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .showcase-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg, 0 18px 34px rgba(0,0,0,0.22));
        }

        .showcase-card-bg {
          position: absolute;
          inset: -8px;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          object-fit: cover;

          filter: blur(3px);

          transform: scale(0.9);

          transition: transform 0.6s ease, filter 0.4s ease;

          pointer-events: none;
        }

        .showcase-card-cutout {
          position: absolute;
          right: -6%;
          bottom: -8%;
          width: 62%;
          height: auto;
          max-height: 92%;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(0,0,0,0.35));
          transition: transform 0.6s ease;
          z-index: 1;
          pointer-events: none;
        }

        .showcase-card:hover .showcase-card-bg,
        .showcase-card:hover .showcase-card-cutout {
          transform: scale(1.05);
        }

        .showcase-card-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(209, 196, 76, 0.54) 0%,
            rgba(36, 36, 36, 0.38) 32%,
            rgba(5, 13, 14, 0.1) 62%,
            rgba(6, 25, 27, 0) 80%
          );
          transition: background 0.35s ease;
        }

        .showcase-card-content {
          position: relative;
          z-index: 1;
          height: 100%;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 68%;
          color: #f3f1f1;
        }

        .showcase-card-content h4 {
        color: #490229b7;
          margin: 0 0 8px;
          font-size: 25px;
          line-height: 1.5;
          font-weight: 700;
        }

        .showcase-features-label {
          font-size: 20px;
          font-weight: 900;
          opacity: 0.85;
          margin-bottom: 4px;
          display: block;
        }

        .showcase-card-content ul {
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.6;
          opacity: 0.92;
        }

        .showcase-card-content ul li::before {
          content: "- ";
        }

        /* ================= CLIENT REVIEWS ================= */

.client-reviews-section {
  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(28, 140, 147, 0.08),
      transparent 34%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(212, 169, 60, 0.09),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      var(--cream) 0%,
      #f8f5ec 100%
    );
}


.reviews-slider-wrap {
  position: relative;
  padding: 18px 42px 58px;
  perspective: 1200px;
}


.client-reviews-swiper {
  width: 100%;
  overflow: visible;
  padding: 28px 0 54px;
}


.client-reviews-swiper .swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;

  transition:
    transform 0.45s ease,
    opacity 0.45s ease;
}


.client-reviews-swiper
.swiper-slide:not(.swiper-slide-active) {
  opacity: 0.72;
}


/* CARD */

.client-review-card {
  position: relative;

  width: 100%;
  min-height: 390px;

  overflow: hidden;

  background: var(--white);

  border-radius: 26px 26px 20px 20px;

  border: 1px solid rgba(11, 79, 86, 0.08);

  box-shadow:
    0 18px 45px rgba(11, 79, 86, 0.13);

  transform-style: preserve-3d;

  transition:
    transform 0.45s ease,
    box-shadow 0.45s ease;
}


.swiper-slide-active
.client-review-card {
  box-shadow:
    0 25px 60px rgba(11, 79, 86, 0.20);
}


.client-review-card:hover {
  transform:
    translateY(-8px)
    rotateX(1deg);

  box-shadow:
    0 30px 65px rgba(11, 79, 86, 0.22);
}


/* TOP AREA */

.review-card-top {
  position: relative;

  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  border-radius: 26px 26px 0 0;
}


.review-card-top::before,
.review-card-top::after {
  content: "";

  position: absolute;

  border-radius: 50%;

  background: rgba(
    255,
    255,
    255,
    0.13
  );
}


.review-card-top::before {
  width: 190px;
  height: 190px;

  top: -110px;
  left: -30px;
}


.review-card-top::after {
  width: 140px;
  height: 140px;

  right: -45px;
  bottom: -80px;
}


/* DIFFERENT CARD COLORS */

.review-color-1 {
  background: linear-gradient(
    135deg,
    #1598c0,
    #087f9c
  );
}

.review-color-2 {
  background: linear-gradient(
    135deg,
    #f2ad35,
    #e78c19
  );
}

.review-color-3 {
  background: linear-gradient(
    135deg,
    #a64c9d,
    #8b3284
  );
}

.review-color-4 {
  background: linear-gradient(
    135deg,
    #1c9b72,
    #08795a
  );
}

.review-color-5 {
  background: linear-gradient(
    135deg,
    #e66b4b,
    #c94c32
  );
}

.review-color-6 {
  background: linear-gradient(
    135deg,
    #5269bd,
    #354ca1
  );
}


/* CUSTOMER AVATAR */

.review-avatar {
  position: relative;
  z-index: 2;

  width: 108px;
  height: 108px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: rgba(
    255,
    255,
    255,
    0.96
  );

  border: 7px solid rgba(
    255,
    255,
    255,
    0.35
  );

  box-shadow:
    0 12px 28px rgba(
      0,
      0,
      0,
      0.16
    );

  color: var(--teal-deep);

  font-family: var(--font-display);

  font-size: 28px;

  font-weight: 900;
}


/* QUOTE ICON */

.review-quote-icon {
  position: absolute;

  right: 22px;
  top: 20px;

  z-index: 2;

  color: rgba(
    255,
    255,
    255,
    0.55
  );

  font-size: 32px;
}


/* CARD CONTENT */

.review-card-body {
  position: relative;

  padding: 25px 24px 30px;

  text-align: center;
}


/* STARS */

.review-stars {
  display: flex;

  justify-content: center;

  gap: 5px;

  margin-bottom: 12px;

  color: var(--gold);

  font-size: 16px;
}


/* NAME */

.review-card-body h3 {
  margin: 0;

  color: var(--teal-deep);

  font-family: var(--font-display);

  font-size: 21px;

  font-weight: 800;
}


/* ROLE */

.review-role {
  display: block;

  margin-top: 3px;

  color: var(--ink-soft);

  font-size: 12px;

  font-weight: 600;
}


/* REVIEW TEXT */

.review-card-body p {
  margin: 17px auto 0;

  max-width: 330px;

  color: var(--ink-soft);

  font-size: 14px;

  line-height: 1.7;

  font-style: italic;
}


/* CORNER */

.review-card-corner {
  position: absolute;

  right: 0;
  bottom: 0;

  width: 42px;
  height: 42px;

  background: var(--teal);

  clip-path: polygon(
    100% 0,
    100% 100%,
    0 100%
  );

  opacity: 0.9;
}


/* SWIPER ARROWS */

.client-reviews-swiper
.swiper-button-next,

.client-reviews-swiper
.swiper-button-prev {
  display: none;
  width: 42px;
  height: 42px;

  border-radius: 50%;

  background: var(--white);

  box-shadow:
    0 8px 22px rgba(
      0,
      0,
      0,
      0.12
    );

  color: var(--teal-deep);
}


.client-reviews-swiper
.swiper-button-next::after,

.client-reviews-swiper
.swiper-button-prev::after {
  font-size: 16px;

  font-weight: 900;
}


/* PAGINATION */

.client-reviews-swiper
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;

  opacity: 0.35;

  background: var(--teal);

  transition:
    width 0.25s ease,
    opacity 0.25s ease;
}


.client-reviews-swiper
.swiper-pagination-bullet-active {
  width: 24px;

  border-radius: 10px;

  opacity: 1;
}

        @media (max-width: 960px) {
          #hero-grid { grid-template-columns: 1fr !important; }
          #hero-stats { justify-content: center; }
          #cat-grid { grid-template-columns: 1fr 1fr !important; }
          #featured-grid { grid-template-columns: 1fr 1fr !important; }
          #why-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          .showcase-grid { grid-template-columns: 1fr !important; }
          .showcase-card { aspect-ratio: 4 / 3; }
          .showcase-card-content { max-width: 78%; }
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
