import { Link, Outlet, useLocation } from "react-router-dom";

const BuyerLayout = () => {
  const location = useLocation();

  return (
    <div style={layout}>
      {/* Sidebar */}
      <div style={sidebar}>
        <h2 style={logo}>AgriNexus</h2>

        <Link style={navStyle("dashboard", location)} to="/buyer/dashboard">
          Dashboard
        </Link>

        <Link style={navStyle("create-demand", location)} to="/buyer/create-demand">
          Create Demand
        </Link>

        <Link style={navStyle("supply-demand", location)} to="/buyer/supply-demand">
          Supply Demand
        </Link>

        <Link style={navStyle("my-demands", location)} to="/buyer/my-demands">
          My Demands
        </Link>
      </div>

      {/* Main Content */}
      <div style={contentWrapper}>
        <div style={content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const navStyle = (path, location) => ({
  ...link,
  ...(location.pathname.includes(path) ? activeLink : {}),
});

// ✅ Layout Styles
const layout = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
};

// ✅ Sidebar Styles
const sidebar = {
  width: "240px",
  background: "#1b5e20",
  padding: "25px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  color: "white",
};

// ✅ Logo
const logo = {
  color: "white",
  fontSize: "22px",
  marginBottom: "25px",
  fontWeight: "bold",
};

// ✅ Links
const link = {
  color: "white",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: "8px",
  fontSize: "15px",
  transition: "0.2s",
};

const activeLink = {
  background: "rgba(255,255,255,0.25)",
  fontWeight: "bold",
};

// ✅ Content Wrapper (important for alignment)
const contentWrapper = {
  flex: 1,
  background: "#f5f7fa",
  overflowY: "auto",
  display: "flex",
  justifyContent: "center",   // center horizontally
  alignItems: "flex-start",    // start from top
  padding: "40px 20px",
};

// ✅ Actual Content Area
const content = {
  width: "100%",
  maxWidth: "1200px",   // keeps page centered & not too wide
};

export default BuyerLayout;
