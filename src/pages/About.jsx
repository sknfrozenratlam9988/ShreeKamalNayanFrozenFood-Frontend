import { motion } from "framer-motion";
import { FaSeedling, FaSnowflake, FaTruck, FaHandsHelping } from "react-icons/fa";
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
      {/* About Hero */}
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
            <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)", marginTop: 14 }}>
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
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={logo}
              alt="Shree Kamal Nayan Frozen Food LLP"
              style={{ maxWidth: 340, width: "100%" }}
              className="float"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: "rgba(28,140,147,0.06)" }}>
        <div className="container">
          <div className="section-head">
            <span
              className="eyebrow"
              style={{ justifyContent: "center", display: "flex" }}
            >
              What we stand for
            </span>
            <h2>Our values</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            id="values-grid"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  padding: 28,
                  boxShadow: "var(--shadow-sm)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--teal-light), var(--frost))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <v.icon color="var(--teal-deep)" size={22} />
                </div>
                <h4 style={{ fontSize: 16 }}>{v.title}</h4>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--ink-soft)",
                    marginTop: 10,
                    lineHeight: 1.6,
                  }}
                >
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span
              className="eyebrow"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Our purpose
            </span>
            <h2>Vision & Mission</h2>
            <p>
              Guided by quality, trust, and innovation, we work every day to
              bring nutritious frozen food products to homes and businesses.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              marginTop: 20,
            }}
            id="vision-mission-grid"
          >
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                boxShadow: "var(--shadow-md)",
                borderLeft: "5px solid var(--teal)",
              }}
            >
              <h3 style={{ fontSize: 24, color: "var(--teal-deep)", marginBottom: 18 }}>
                Our Vision
              </h3>
              <ul
                style={{
                  paddingLeft: 18,
                  color: "var(--ink-soft)",
                  lineHeight: 1.8,
                  display: "grid",
                  gap: 10,
                }}
              >
                <li>Commitment to Quality – Providing the highest quality frozen food products.</li>
                <li>Innovation & Taste – Offering innovative and delicious products to meet customer needs.</li>
                <li>Food Safety Standards – Ensuring products reflect the highest standards of food safety.</li>
                <li>Affordability – Bringing the best quality products at affordable prices.</li>
                <li>Professional Team – Dedicated professionals focused on quality customer service.</li>
                <li>Market Leadership – Aiming to become the leading supplier of frozen food products.</li>
                <li>Continuous Improvement – Enhancing products and services for maximum customer satisfaction.</li>
              </ul>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                boxShadow: "var(--shadow-md)",
                borderLeft: "5px solid var(--teal)",
              }}
            >
              <h3 style={{ fontSize: 24, color: "var(--teal-deep)", marginBottom: 18 }}>
                Our Mission
              </h3>
              <ul
                style={{
                  paddingLeft: 18,
                  color: "var(--ink-soft)",
                  lineHeight: 1.8,
                  display: "grid",
                  gap: 10,
                }}
              >
                <li>Authentic Taste – Bringing the genuine taste of Indian delicacies and other cuisines through convenient frozen foods.</li>
                <li>Fresh Ingredients – Using only the freshest ingredients to ensure rich flavors.</li>
                <li>Support to Local Farmers – Sourcing ingredients directly from local farmers for authenticity and sustainability.</li>
                <li>Trust & Quality – Building trust with farmers, who act as stewards of quality standards.</li>
                <li>Operate with transparency and ethics.</li>
                <li>Invest in cutting-edge freezing and packaging technology.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          #about-hero { grid-template-columns: 1fr !important; }
          #values-grid { grid-template-columns: 1fr 1fr !important; }
          #vision-mission-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 560px) {
          #values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default About;