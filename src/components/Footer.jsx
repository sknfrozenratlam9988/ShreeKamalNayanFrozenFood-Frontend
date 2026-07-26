import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer style={{ background: "var(--teal-deep)", color: "var(--frost)", paddingTop: 64 }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40 }} id="footer-grid">
        <div>
          <img src={logo} alt="Shree Kamal Nayan Frozen Food LLP" style={{ height: 64, marginBottom: 16, filter: "brightness(1.15)" }} />
          <p style={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 320, fontSize: 14.5 }}>
            Bringing farm-fresh vegetables and fruits to your kitchen, flash-frozen at peak
            ripeness — pure, natural, and ready whenever you are.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {[FaFacebookF, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "var(--gold-soft)", fontSize: 16, marginBottom: 18 }}>Explore</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--gold-soft)", fontSize: 16, marginBottom: 18 }}>Categories</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5 }}>
            <li><Link to="/products?category=Frozen Vegetables">Frozen Vegetables</Link></li>
            <li><Link to="/products?category=Frozen Fruits">Frozen Fruits</Link></li>
            <li><Link to="/products?category=Frozen Mix">Ready To Eat</Link></li>
            <li><Link to="/admin/login">Admin Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "var(--gold-soft)", fontSize: 16, marginBottom: 18 }}>Get in Touch</h4>
          <ul
  style={{
    display: "flex",
    flexDirection: "column",
    gap: 14,
    fontSize: 14.5,
  }}
>
  {/* Address */}
  <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
    <FaMapMarkerAlt
      style={{ marginTop: 3, color: "var(--gold-soft)" }}
    />
    <a
      href="https://www.google.com/maps/search/?api=1&query=Survey+No.143/2/2+Village+Bhaisa+Dabar+Sailana+Ratlam+457001"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Survey No.143/2/2 Village Bhaisa Dabar, Sailana, Ratlam 457001
    </a>
  </li>

  {/* Phone */}
  <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
    <FaPhoneAlt style={{ color: "var(--gold-soft)" }} />
    <a
      href="tel:+919329847964"
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      +91 9329847964
    </a>
  </li>

  {/* Email */}
  <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
    <FaEnvelope style={{ color: "var(--gold-soft)" }} />
    <a
      href="mailto:shreekamalnayanfrozen@gmail.com"
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      shreekamalnayanfrozen@gmail.com
    </a>
  </li>
</ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 48, padding: "22px 0", textAlign: "center", fontSize: 13, opacity: 0.75 }}>
        © {new Date().getFullYear()} Shree Kamal Nayan Frozen Food LLP. All rights reserved.
      </div>

      <style>{`
        @media (max-width: 860px) {
          #footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          #footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
