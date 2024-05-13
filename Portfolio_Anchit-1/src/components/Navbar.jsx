import { NavLink,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link  active"  >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/resume"  className="navbar-link"  >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio"  className="navbar-link"  >
            Portfolio
          </Link>
        </li>
        {/* <li class="navbar-item">
      <button class="navbar-link" data-nav-link>Blog</button>
    </li> */}
        <li className="navbar-item">
          <Link to="/contact"  className="navbar-link"  >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
