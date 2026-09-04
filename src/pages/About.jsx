import { motion } from "framer-motion";
import {
  FaSeedling,
  FaSnowflake,
  FaTruck,
  FaHandsHelping,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const values = [
  {
    icon: FaSeedling,
    title: "Sourced with Care",
    text: "We partner directly with local farmers to bring in the freshest produce, harvested at peak ripeness.",
  },
  {
    icon: FaSnowflake,
    title: "Flash-Frozen Fast",
    text: "Vegetables and fruits are cleaned and frozen within hours, locking in nutrients, colour, and taste.",
  },
  {
    icon: FaTruck,
    title: "Unbroken Cold Chain",
    text: "From our facility to your kitchen, every pack stays at -18°C, guaranteeing consistent quality.",
  },
  {
    icon: FaHandsHelping,
    title: "Trusted by Families",
    text: "Thousands of households and restaurants rely on us for convenient, healthy, ready-to-cook produce.",
  },
];

const About = () => {
  return (
    <div>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          id="about-hero"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Our story</span>

            <h1
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                marginTop: 14,
              }}
            >
              From farmland to freezer, with care at every step
            </h1>

            <p
              style={{
                marginTop: 20,
                color: "var(--ink-soft)",
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              We have been working on job work in a manufacturing plant since
              2018. While working, we collaborated on a contract basis with
              corporate industries in the market, with whom our annual
              production was 5 thousand metric tons. With transparency in our
              work and customer satisfaction, and with the blessings of all of
              you, we are setting up our own manufacturing plant.
            </p>

            <p
              style={{
                marginTop: 16,
                color: "var(--ink-soft)",
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              Today, our FSSAI-certified facility serves households, hotels, and
              restaurants with a growing range of frozen vegetables, fruits, and
              ready-to-cook mixes — all without preservatives or artificial colours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="Shree Kamal Nayan Frozen Food LLP"
              style={{
                maxWidth: 340,
                width: "100%",
              }}
              className="float"
            />
          </motion.div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-glow about-values-glow-one"></div>
        <div className="about-values-glow about-values-glow-two"></div>
        <div className="about-values-grid-bg"></div>

        <div className="container about-values-container">
          <motion.div
            className="about-values-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-values-eyebrow">
              <span></span>
              What we stand for
              <span></span>
            </span>

            <h2>Our values</h2>

            <div className="about-values-heading-line"></div>
          </motion.div>

          <div className="about-values-grid" id="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;

              return (
                <motion.div
                  className="about-value-card"
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.1,
                  }}
                >
                  <div className="about-value-number">
                    0{i + 1}
                  </div>

                  <div className="about-value-icon-wrap">
                    <div className="about-value-icon-ring"></div>

                    <div className="about-value-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="about-value-content">
                    <span className="about-value-label">
                      OUR PROMISE
                    </span>

                    <h4>{v.title}</h4>

                    <p>{v.text}</p>
                  </div>

                  <div className="about-value-bottom">
                    <span></span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vision-mission-section">
        <div className="vision-mission-glow vision-mission-glow-one"></div>
        <div className="vision-mission-glow vision-mission-glow-two"></div>
        <div className="vision-mission-grid-bg"></div>

        <div className="container vision-mission-container">
          <motion.div
            className="vision-mission-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="vision-mission-eyebrow">
              <span></span>
              Our purpose
              <span></span>
            </span>

            <h2>Vision & Mission</h2>

            <p>
              Guided by quality, trust, and innovation, we work every day to
              bring nutritious frozen food products to homes and businesses.
            </p>

            <div className="vision-mission-heading-line"></div>
          </motion.div>

          <div className="vision-mission-grid" id="vision-mission-grid">
            <motion.div
              className="vision-mission-card vision-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Our Vision</h3>

              <div className="vision-mission-card-line"></div>

              <ul>
                <li>
                  Commitment to Quality – Providing the highest quality frozen
                  food products.
                </li>

                <li>
                  Innovation & Taste – Offering innovative and delicious
                  products to meet customer needs.
                </li>

                <li>
                  Food Safety Standards – Ensuring products reflect the
                  highest standards of food safety.
                </li>

                <li>
                  Affordability – Bringing the best quality products at
                  affordable prices.
                </li>

                <li>
                  Professional Team – Dedicated professionals focused on
                  quality customer service.
                </li>

                <li>
                  Market Leadership – Aiming to become the leading supplier of
                  frozen food products.
                </li>

                <li>
                  Continuous Improvement – Enhancing products and services for
                  maximum customer satisfaction.
                </li>
              </ul>

              <div className="vision-mission-card-footer">
                <span></span>
                <span>QUALITY • GROWTH • EXCELLENCE</span>
              </div>
            </motion.div>

            <motion.div
              className="vision-mission-card mission-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
           

              <h3>Our Mission</h3>

              <div className="vision-mission-card-line"></div>

              <ul>
                <li>
                  Authentic Taste – Bringing the genuine taste of Indian
                  delicacies and other cuisines through convenient frozen foods.
                </li>

                <li>
                  Fresh Ingredients – Using only the freshest ingredients to
                  ensure rich flavors.
                </li>

                <li>
                  Support to Local Farmers – Sourcing ingredients directly from
                  local farmers for authenticity and sustainability.
                </li>

                <li>
                  Trust & Quality – Building trust with farmers, who act as
                  stewards of quality standards.
                </li>

                <li>
                  Operate with transparency and ethics.
                </li>

                <li>
                  Invest in cutting-edge freezing and packaging technology.
                </li>
              </ul>

              <div className="vision-mission-card-footer">
                <span></span>
                <span>TRUST • QUALITY • INNOVATION</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;