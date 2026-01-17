import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="brand">
          <span className="brand-name">Deepak Rao Gaikwad</span>
          <span className="brand-title">Principal Engineer</span>
        </div>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/devflux">DevFlux x Utilix</NavLink>
        </nav>
      </div>
    </header>
  );
}
