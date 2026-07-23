import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useLoginMutation } from "../../store/apiSlice";
import { setCredentials } from "../../store/authSlice";
import logo from "../../assets/logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await login({ email, password }).unwrap();
      dispatch(setCredentials(data));
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - var(--header-h))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "radial-gradient(circle at 20% 20%, rgba(28,140,147,0.1), transparent 50%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "var(--white)",
          padding: "44px 38px",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <img src={logo} alt="Logo" style={{ height: 64, margin: "0 auto 12px" }} />
          <h2 style={{ fontSize: 22 }}>Admin Login</h2>
          <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginTop: 6 }}>
            Sign in to manage your product catalogue
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 18 }}>
          <div style={{ position: "relative" }}>
            <FaEnvelope style={iconStyle} />
            <input
              type="email"
              placeholder="Admin email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ position: "relative" }}>
            <FaLock style={iconStyle} />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          {error && <p style={{ color: "var(--red)", fontSize: 13.5, margin: 0 }}>{error}</p>}

          <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: "100%", marginTop: 6 }}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const iconStyle = { position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--teal)" };
const inputStyle = {
  width: "100%",
  padding: "13px 16px 13px 44px",
  borderRadius: 12,
  border: "1.5px solid rgba(11,79,86,0.18)",
  fontSize: 14,
  outline: "none",
};

export default AdminLogin;
