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
  name: "Hemant Patidar",
  role: "Co-Founder & Partner",
  image: clientImg,
  phone: "+91 9617420222",
  email: "shreekamalnayanfrozen@gmail.com",
  linkedin: "#",
  bio: `As a Partner at Shree Kamalnayan Frozen Food LLP, Hemant Patidar leads the company’s mission to deliver top-tier frozen food products. With 5 years of hands-on expertise in the frozen food sector, he combines strong market insights with operational excellence. Under his leadership, the company continues to expand its footprint while building reliable, long-term corporate relationships.`,
};

const teamMembers = [
  {
    name: "Gulshan Patidar",
    role: "Associate Director",
    image: member3Img,
    phone: "+91 9876543212",
    email: "member3@example.com",
    bio: "As Associate Director, Gulshan Patidar steers the market growth and strategic partnerships at Shree Kamalnayan Frozen Food LLP. With 8 years of dedicated expertise in the frozen food sector, he possesses a powerful market network that bridges the gap between production and widespread distribution. Gulshan’s sharp business acumen, combined with his ability to cultivate long-term corporate alliances, makes him a key driver in maximizing the company’s market share and operational success.",
  },
  {
    name: "Madan Patidar",
    role: "Chief Executive Officer (CEO)",
    image: member4Img,
    phone: "+91 9876543213",
    email: "member4@example.com",
    bio: "As the CEO of Shree Kamalnayan Frozen Food LLP, Madan Patidar commands the overarching corporate vision, global strategy, and financial growth of the enterprise. He combines sharp commercial foresight with a passion for sustainable manufacturing practices and premium supply chain solutions. Under his executive leadership, the company consistently hits major milestones, strengthens high-level stakeholder relations, and maintains its solid reputation for excellence and reliability in the marketplace.",
  },
  {
    name: "Deepika Patidar",
    role: "Partner",
    image: member1Img,
    phone: "+91 9876543210",
    email: "member1@example.com",
    bio: "As a Partner at Shree Kamalnayan Frozen Food LLP, Deepika Patidar anchors the company’s commitment to premium quality and client satisfaction. She brings fresh perspectives to business development, streamlining internal processes and strengthening stakeholder relationships. Her collaborative leadership style and detail-oriented approach are key drivers in expanding the brand’s market presence and operational efficiency.",
  },
  {
    name: "Ritu Patidar ",
    role: "Partner",
    image: member2Img,
    phone: "+91 9876543211",
    email: "member2@example.com",
    bio: "As a Partner at Shree Kamalnayan Frozen Food LLP, Ritu Patidar infuses forward-thinking strategies into the company's long-term growth plans. She closely monitors modern business development initiatives and internal efficiencies to keep the company agile and competitive. Her collaborative spirit and focus on sustainable business practices play a vital role in taking the brand to new heights in the frozen food industry.",
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
    <div className="team-page">
      <div className="team-bg-glow team-bg-glow-one" />
      <div className="team-bg-glow team-bg-glow-two" />
      <div className="team-bg-grid" />

      <section className="team-hero">
        <div className="container team-container">
          <motion.div
            className="team-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="team-eyebrow">
              <span className="team-eyebrow-line" />
              Meet the people behind the brand
              <span className="team-eyebrow-line" />
            </span>

            <h1>
              Our Leadership <span>&amp;</span> Team
            </h1>

            <p>
              At Shree Kamal Nayan Frozen Food LLP, our strength lies in the
              people who bring dedication, discipline, and care to every stage
              of the journey — from sourcing and production to packaging,
              quality control, and delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="team-leadership-section">
        <div className="container team-container">
          <motion.div
            className="team-founder-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="team-founder-image-wrap">
              <img
                src={founder.image}
                alt={founder.name}
                className="team-founder-image"
              />

              <div className="team-founder-image-overlay" />

              <div className="team-founder-image-badge">
                <FaUserTie />
                <span>Leadership</span>
              </div>
            </div>

            <div className="team-founder-content">
              <div className="team-card-label">
                <span className="team-card-label-icon">
                  <FaUserTie />
                </span>
                Leadership Spotlight
              </div>

              <h2>{founder.name}</h2>

              <div className="team-founder-role">{founder.role}</div>

              <div className="team-gold-line" />

              <p className="team-founder-bio">{founder.bio}</p>

              <div className="team-founder-contact">
                <div className="team-contact-item">
                  <span className="team-contact-icon">
                    <FaPhoneAlt />
                  </span>
                  <span>{founder.phone}</span>
                </div>

                <div className="team-contact-item">
                  <span className="team-contact-icon">
                    <FaEnvelope />
                  </span>
                  <span>{founder.email}</span>
                </div>

                {founder.linkedin && founder.linkedin !== "#" && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="team-contact-item team-contact-link"
                  >
                    <span className="team-contact-icon">
                      <FaLinkedin />
                    </span>
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-members-section">
        <div className="container team-container">
          <motion.div
            className="team-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="team-eyebrow">
              <span className="team-eyebrow-line" />
              Core people
              <span className="team-eyebrow-line" />
            </span>

            <h2>Meet Our Team Members</h2>

            <p>
              A passionate team working together to maintain quality, trust,
              and excellence across every product we deliver.
            </p>
          </motion.div>

          <div className="team-grid" id="team-grid">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.name}
                className="team-member-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="team-member-image-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-member-image"
                  />

                  <div className="team-member-image-overlay" />

                  <div className="team-member-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="team-member-image-bottom">
                    <span>{member.role}</span>
                  </div>
                </div>

                <div className="team-member-content">
                  <div className="team-member-heading">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                  <div className="team-small-line" />

                  <p className="team-member-bio">{member.bio}</p>

                  <div className="team-member-contact">
                    {member.phone && (
                      <div className="team-mini-info">
                        <span className="team-mini-icon">
                          <FaPhoneAlt />
                        </span>
                        <span>{member.phone}</span>
                      </div>
                    )}

                    {member.email && (
                      <div className="team-mini-info">
                        <span className="team-mini-icon">
                          <FaEnvelope />
                        </span>
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-highlights-section">
        <div className="team-highlight-glow" />

        <div className="container team-container">
          <motion.div
            className="team-section-heading team-highlight-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="team-eyebrow">
              <span className="team-eyebrow-line" />
              What defines us
              <span className="team-eyebrow-line" />
            </span>

            <h2>Why Our Team Stands Out</h2>

            <p>
              Strong people, reliable processes, and a shared commitment to
              quality.
            </p>
          </motion.div>

          <div className="team-highlight-grid" id="highlight-grid">
            {highlights.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="team-highlight-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className="team-highlight-icon">
                    <Icon />
                  </div>

                  <div className="team-highlight-index">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="team-highlight-bottom-line" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;