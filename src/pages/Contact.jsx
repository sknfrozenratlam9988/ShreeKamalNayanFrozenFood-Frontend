import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      e.target.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      text: "Survey No.143/2/2 Village Bhaisa Dabar Sailana Ratlam 457001",
      link:
        "https://www.google.com/maps/search/?api=1&query=Survey+No.143/2/2+Village+Bhaisa+Dabar+Sailana+Ratlam+457001",
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
  ];

  return (
    <div className="section contact-page">
      <div className="contact-bg-orb contact-bg-orb-one"></div>
      <div className="contact-bg-orb contact-bg-orb-two"></div>
      <div className="contact-grid-pattern"></div>

      <div className="container contact-container">
        <motion.div
          className="section-head contact-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow contact-eyebrow">Get in touch</span>

          <h2>We'd love to hear from you</h2>

          <p>
            Questions about bulk orders, distribution, or our products? Reach
            out anytime.
          </p>
        </motion.div>

        <div className="contact-layout" id="contact-grid">
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="contact-info-card"
                >
                  <div className="contact-card-number">
                    0{index + 1}
                  </div>

                  <div className="contact-icon-wrap">
                    <div className="contact-icon-ring"></div>

                    <div className="contact-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="contact-info-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>

                  <div className="contact-card-line"></div>
                </a>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-glow"></div>

            <div className="contact-form-top">
              <div className="contact-form-dot"></div>
              <span>CONTACT</span>
            </div>

            <div className="contact-form-row" id="form-row">
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

            <div className="contact-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us how we can help..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {error && <p className="contact-error">{error}</p>}

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              <span className="contact-submit-icon">
                <FaPaperPlane />
              </span>

              <span>{loading ? "Sending..." : "Send Message"}</span>

              <span className="contact-submit-glow"></span>
            </button>
          </motion.form>
        </div>
      </div>

      {sent && (
        <div className="toast">
          Message sent! We'll get back to you shortly.
        </div>
      )}
    </div>
  );
};

const Field = ({ label, ...props }) => (
  <div className="contact-field">
    <label htmlFor={props.name}>{label}</label>
    <input id={props.name} {...props} />
  </div>
);

export default Contact;