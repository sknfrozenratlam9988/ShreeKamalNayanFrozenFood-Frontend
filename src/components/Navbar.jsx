import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: scrolled ? "rgba(251,247,238,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(11,79,86,0.08)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "var(--header-h)",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logo} alt="Shree Kamal Nayan Frozen Food LLP logo" style={{ height: 58 }} />
        </Link>

        <nav style={{ display: "flex", gap: 34 }} className="nav-desktop">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={({ isActive }) => ({
                fontWeight: 700,
                fontSize: 15,
                color: isActive ? "var(--red)" : "var(--teal-deep)",
                position: "relative",
                paddingBottom: 4,
                borderBottom: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                transition: "color 0.25s ease, border-color 0.25s ease",
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-desktop">
          <Link to="/products" className="btn btn-primary">
            Order Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 28,
            color: "var(--teal-deep)",
          }}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", background: "var(--cream)" }}
          >
            <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4, paddingBottom: 24 }}>
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  style={({ isActive }) => ({
                    padding: "14px 4px",
                    borderBottom: "1px solid rgba(11,79,86,0.1)",
                    fontWeight: 700,
                    color: isActive ? "var(--red)" : "var(--teal-deep)",
                  })}
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/products" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16 }}>
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
