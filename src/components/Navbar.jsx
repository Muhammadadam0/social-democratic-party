// src/components/Navbar.jsx
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "Vision", id: "vision" },
    { name: "Team", id: "team" },
    { name: "Join Us", id: "join" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
      style={{ backgroundColor: "#006400" }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        {/* Logo */}
        <motion.div
          className="navbar-brand fw-bold d-flex align-items-center"
          style={{ cursor: "pointer" }}
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          <img
            src={logo}
            alt="Party Logo"
            className="me-2 rounded-circle border border-white"
            style={{ height: "40px", width: "40px", objectFit: "cover" }}
          />
          Social Democratic Party
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
