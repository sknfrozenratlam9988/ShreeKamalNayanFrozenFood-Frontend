import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", phone: "", email: "", message: "" });
      e.target.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>Get in touch</span>
          <h2>We'd love to hear from you</h2>
          <p>Questions about bulk orders, distribution, or our products? Reach out anytime.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 48 }} id="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Visit Us",
                text: "Survey No.143/2/2 Village Bhaisa Dabar Sailana Ratlam 457001",
                link: "https://www.google.com/maps/search/?api=1&query=Survey+No.143/2/2+Village+Bhaisa+Dabar+Sailana+Ratlam+457001",
                external: true,
              },
              {
                icon: FaPhoneAlt,
                title: "Call Us",
                text: "+91 9329847964",
                link: "tel:+919329847964",
                external: false,
              },
              {
                icon: FaEnvelope,
                title: "Email Us",
                text: "shreekamalnayanfrozen@gmail.com",
                link: "mailto:shreekamalnayanfrozen@gmail.com",
                external: false,
              },
            ].map((c) => {
              const LinkTag = "a";
              return (
                <LinkTag
                  key={c.title}
                  href={c.link}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      background: "var(--white)",
                      borderRadius: "var(--radius-md)",
                      padding: 24,
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      boxShadow: "var(--shadow-sm)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 28px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        background: "var(--frost)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <c.icon color="var(--teal)" size={18} />
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: 16,
                          margin: 0,
                          color: "var(--teal)",
                          fontWeight: 700,
                        }}
                      >
                        {c.title}
                      </h4>

                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--ink-soft)",
                          marginTop: 6,
                          marginBottom: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        {c.text}
                      </p>
                    </div>
                  </div>
                </LinkTag>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              padding: 36,
              boxShadow: "var(--shadow-md)",
              display: "grid",
              gap: 18,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} id="form-row">
              <Field
                label="Full Name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Phone Number"
                name="phone"
                placeholder="+91"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <Field
              label="Email Address"
              name="email"
              placeholder="you@example.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            {error && (
              <p style={{ color: "#c0392b", fontSize: 13, margin: 0 }}>{error}</p>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ justifySelf: "flex-start", opacity: loading ? 0.7 : 1 }}
            >
              <FaPaperPlane /> {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      {sent && <div className="toast">Message sent! We'll get back to you shortly.</div>}

      <style>{`
        @media (max-width: 900px) {
          #contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          #form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

const labelStyle = { display: "block", fontSize: 13, fontWeight: 700, color: "var(--teal-deep)", marginBottom: 8 };
const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 12,
  border: "1.5px solid rgba(11,79,86,0.18)",
  fontSize: 14,
  fontFamily: "var(--font-body)",
  outline: "none",
};

const Field = ({ label, ...props }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <input style={inputStyle} {...props} />
  </div>
);

export default Contact;
