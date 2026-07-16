import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  return (
    <nav className="site-nav">
      <Link to="/" className="nav-brand" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="nav-diamond" />
        <span>SOLUSITE MEDIA</span>
        <span style={{ color: "var(--fg-faint)" }}>— Ian Spies</span>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link to="/referral" className="nav-cta">Refer & Earn</Link>
        <a href={onHome ? "#contact" : "/#contact"} className="nav-cta">Get in touch</a>
      </div>
    </nav>
  );
};

export default Nav;
