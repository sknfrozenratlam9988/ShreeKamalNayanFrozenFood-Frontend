import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaUserTie,
  FaUsers,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

import clientImg from "../assets/ceo.png";
import member1Img from "../assets/ceo.png";
import member2Img from "../assets/ceo.png";
import member3Img from "../assets/ceo.png";
import member4Img from "../assets/ceo.png";

const founder = {
  name: "Mr. Client Name",
  role: "Founder / Managing Director",
  image: clientImg,
  phone: "+91 9617420222",
  email: "shreekamalnayanfrozen@gmail.com",
  linkedin: "#",
  bio: `With a strong vision for delivering premium frozen food products, our founder has played a key role in building Shree Kamal Nayan Frozen Food LLP with a focus on quality, consistency, hygiene, and long-term customer trust. From sourcing the freshest produce to ensuring efficient cold-chain delivery, the mission has always been to serve households, retailers, and food businesses with products they can rely on every day.`,
};

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Operations Manager",
    image: member1Img,
    phone: "+91 9876543210",
    email: "member1@example.com",
    bio: "Oversees daily plant operations, production scheduling, and process efficiency to ensure timely delivery and smooth workflow.",
  },
  {
    name: "Team Member 2",
    role: "Quality Control Head",
    image: member2Img,
    phone: "+91 9876543211",
    email: "member2@example.com",
    bio: "Ensures every batch meets strict food safety and quality standards with a strong focus on hygiene and consistency.",
  },
  {
    name: "Team Member 3",
    role: "Sales & Distribution Manager",
    image: member3Img,
    phone: "+91 9876543212",
    email: "member3@example.com",
    bio: "Handles distributor relationships, customer support, and order coordination across retail and wholesale channels.",
  },
  {
    name: "Team Member 4",
    role: "Procurement & Sourcing Lead",
    image: member4Img,
    phone: "+91 9876543213",
    email: "member4@example.com",
    bio: "Works closely with farmers and suppliers to source fresh raw materials while maintaining cost and quality balance.",
  },
];

const highlights = [
  {
    icon: FaLeaf,
    title: "Fresh Sourcing",
    text: "Our team works directly with trusted farmers and suppliers to ensure high-quality raw ingredients.",
  },
  {
    icon: FaShieldAlt,
    title: "Food Safety Focus",
    text: "We follow strict hygiene and handling standards to deliver safe and dependable frozen food products.",
  },
  {
    icon: FaUsers,
    title: "Customer-Centric Service",
    text: "From product support to order management, our team is committed to building long-term relationships.",
  },
  {
    icon: FaUserTie,
    title: "Experienced Leadership",
    text: "Our leadership team combines operational knowledge, market understanding, and a quality-first mindset.",
  },
];

const Team = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="section-head" style={{ maxWidth: 850, margin: "0 auto 24px" }}>
            <span
              className="eyebrow"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Meet the people behind the brand
            </span>
            <h1 style={{ textAlign: "center" }}>Our Leadership & Team</h1>
            <p style={{ textAlign: "center" }}>
              At Shree Kamal Nayan Frozen Food LLP, our strength lies in the
              people who bring dedication, discipline, and care to every stage
              of the journey — from sourcing and production to packaging,
              quality control, and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER / CLIENT SECTION */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "360px 1fr",
              alignItems: "stretch",
            }}
            id="founder-card"
          >
            {/* Left Image */}
            <div style={{ minHeight: 420 }}>
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Right Content */}
            <div style={{ padding: "34px 34px 30px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(28,140,147,0.08)",
                  color: "var(--teal-deep)",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 12.5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                <FaUserTie /> Leadership Spotlight
              </span>

              <h2 style={{ marginTop: 18, marginBottom: 8 }}>{founder.name}</h2>
              <p
                style={{
                  color: "var(--peacock)",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 18,
                }}
              >
                {founder.role}
              </p>

              <p
                style={{
                  color: "var(--ink-soft)",
                  lineHeight: 1.9,
                  fontSize: 15.5,
                  marginBottom: 22,
                }}
              >
                {founder.bio}
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                <div style={infoRow}>
                  <FaPhoneAlt color="var(--teal)" />
                  <span>{founder.phone}</span>
                </div>
                <div style={infoRow}>
                  <FaEnvelope color="var(--teal)" />
                  <span>{founder.email}</span>
                </div>
                {founder.linkedin && founder.linkedin !== "#" && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ ...infoRow, textDecoration: "none", color: "inherit" }}
                  >
                    <FaLinkedin color="var(--teal)" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span
              className="eyebrow"
              style={{ justifyContent: "center", display: "flex" }}
            >
              Core people
            </span>
            <h2>Meet Our Team Members</h2>
            <p>
              A passionate team working together to maintain quality, trust, and
              excellence across every product we deliver.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            id="team-grid"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid rgba(11,79,86,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 6 }}>{member.name}</h3>
                  <p
                    style={{
                      color: "var(--peacock)",
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 12,
                    }}
                  >
                    {member.role}
                  </p>

                  <p
                    style={{
                      color: "var(--ink-soft)",
                      lineHeight: 1.7,
                      fontSize: 14,
                      marginBottom: 16,
                    }}
                  >
                    {member.bio}
                  </p>

                  <div style={{ marginTop: "auto", display: "grid", gap: 10 }}>
                    {member.phone && (
                      <div style={miniInfo}>
                        <FaPhoneAlt color="var(--teal)" size={13} />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    {member.email && (
                      <div style={miniInfo}>
                        <FaEnvelope color="var(--teal)" size={13} />
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM HIGHLIGHTS */}
      <section className="section" style={{ background: "rgba(28,140,147,0.06)" }}>
        <div className="container">
          <div className="section-head">
            <span
              className="eyebrow"
              style={{ justifyContent: "center", display: "flex" }}
            >
              What defines us
            </span>
            <h2>Why Our Team Stands Out</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
            id="highlight-grid"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  padding: 26,
                  boxShadow: "var(--shadow-sm)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--teal-light), var(--frost))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <item.icon color="var(--teal-deep)" size={22} />
                </div>
                <h4 style={{ marginBottom: 10 }}>{item.title}</h4>
                <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          #team-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          #highlight-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 900px) {
          #founder-card {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 560px) {
          #team-grid {
            grid-template-columns: 1fr !important;
          }
          #highlight-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

const infoRow = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 14.5,
  color: "var(--ink-soft)",
};

const miniInfo = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 13.5,
  color: "var(--ink-soft)",
};

export default Team;