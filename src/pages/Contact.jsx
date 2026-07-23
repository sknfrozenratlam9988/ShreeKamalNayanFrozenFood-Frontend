import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
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
              { icon: FaMapMarkerAlt, title: "Visit Us", text: "Ratlam, Madhya Pradesh, India" },
              { icon: FaPhoneAlt, title: "Call Us", text: "+91 9617420222" },
              { icon: FaEnvelope, title: "Email Us", text: "shreekamalnayanfrozen@gmail.com" },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-md)",
                  padding: 24,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  boxShadow: "var(--shadow-sm)",
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
                  <h4 style={{ fontSize: 15 }}>{c.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 4 }}>{c.text}</p>
                </div>
              </div>
            ))}
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
              <Field label="Full Name" placeholder="Your name" required />
              <Field label="Phone Number" placeholder="+91" required />
            </div>
            <Field label="Email Address" placeholder="you@example.com" type="email" required />
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us how we can help..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifySelf: "flex-start" }}>
              <FaPaperPlane /> Send Message
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
