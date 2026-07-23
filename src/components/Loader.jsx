const Loader = ({ label = "Loading fresh goodness..." }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      gap: 16,
    }}
  >
    <div
      className="spin-slow"
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: "4px solid var(--teal-light)",
        borderTopColor: "var(--teal)",
      }}
    />
    <p style={{ color: "var(--ink-soft)", fontWeight: 600, fontSize: 14 }}>{label}</p>
  </div>
);

export default Loader;
