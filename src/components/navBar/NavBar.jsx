import "./NavBar.css";
import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => false;
  console.log("close");
  return (
    <nav className="nav">
      <Link to="/" className="site-title" onClick={closeMobileMenu}>
        👨‍🍳 Cooking Code
      </Link>
      <div className="menu-icon"></div>
      <ul className={click ? "nav-menu activated" : "nav-menu deactivated"}>
        <CustomLink to="About">About</CustomLink>
        <CustomLink to="Skills">Skills</CustomLink>
        <CustomLink to="ContentStrategies">Content Strategies</CustomLink>
        <CustomLink to="Services">Services</CustomLink>
        <CustomLink to="Projects">Projects</CustomLink>
        <CustomLink to="Contact">Contact</CustomLink>
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
