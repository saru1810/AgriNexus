import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const BuyerLayout = () => {
  const location = useLocation();
  const [hasAlert, setHasAlert] = useState(false);

  useEffect(() => {
    const isRead = localStorage.getItem("risk_alert_read") === "true";
    setHasAlert(!isRead);
  }, [location]);

  const handleResetDemo = () => {
    localStorage.removeItem("risk_alert_read");
    setHasAlert(true);
    alert("🔄 Demo System Reset: Alert notification is now active.");
    window.location.reload(); 
  };

  return (
    <div style={layout}>
      <div style={sidebar}>
        <h2 style={{ ...logo, cursor: 'pointer' }} onClick={handleResetDemo}>AgriNexus</h2>
        
        <Link style={navStyle("register", location)} to="/buyer/register">📝 Registration</Link>
        <hr style={separator} />
        <Link style={navStyle("dashboard", location)} to="/buyer/dashboard">📊 Dashboard</Link>
        <Link style={navStyle("create-demand", location)} to="/buyer/create-demand">📦 Create Demand</Link>
        <Link style={navStyle("supply-demand", location)} to="/buyer/supply-demand">
          🤝 Supply Demand {hasAlert && <span style={notificationBadge}>1</span>}
        </Link>
        <Link style={navStyle("my-demands", location)} to="/buyer/my-demands">📋 My Demands</Link>
      </div>

      <div style={contentWrapper}>
        <div style={content}>
          <Outlet context={{ setHasAlert }} />
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const navStyle = (path, location) => ({
  ...link,
  ...(location.pathname.includes(path) ? activeLink : {}),
});

const layout = { display: "flex", width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#f5f7fa" };
const sidebar = { width: "260px", background: "#1b5e20", padding: "30px 20px", display: "flex", flexDirection: "column", gap: "8px", color: "white" };
const logo = { color: "white", fontSize: "24px", marginBottom: "30px", fontWeight: "bold" };
const separator = { border: "0", borderTop: "1px solid rgba(255,255,255,0.15)", margin: "15px 0" };
const link = { color: "white", textDecoration: "none", padding: "12px 16px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" };
const activeLink = { background: "rgba(255,255,255,0.15)", fontWeight: "600" };
const notificationBadge = { background: "#e53e3e", color: "white", fontSize: "10px", padding: "2px 8px", borderRadius: "10px" };
const contentWrapper = { flex: 1, overflowY: "auto", padding: "40px 20px" };
const content = { width: "100%", maxWidth: "1000px", margin: "0 auto" };

export default BuyerLayout;