import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook } from "react-icons/fa";


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setSidebarOpen(false);
  };

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "A propos de nous", path: "/about-us" },
    { name: "Créneaux et gymnases", path: "/creneaux-gymnases" },
    { name: "Formules et tarifs", path: "/formules-tarifs" },
    { name: "S'inscrire", path: "/inscription" },
    { name: "Evénements", path: "/event-activities" },
    { name: "Nous contacter", path: "/contact" },
    { name: "Faire un don", path: "/don" },
  ];


  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/">
            <motion.img
              src={`${process.env.PUBLIC_URL}/asbg_logo.png`}
              alt="ASBG Logo"
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/">Accueil</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/about-us">A propos de nous</Link>
            </motion.div>

            {/* Dropdown */}
            <div
              className={`dropdown ${openDropdown === "approach" ? "show" : ""}`}
              onMouseEnter={() =>
                window.innerWidth > 992 && setOpenDropdown("approach")
              }
              onMouseLeave={() =>
                window.innerWidth > 992 && setOpenDropdown(null)
              }
            >
              <button onClick={() => toggleDropdown("approach")}>
                Infos pratiques ▾
              </button>

              <AnimatePresence>
                {openDropdown === "approach" && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <motion.p
                      whileHover={{ x: 5 }}
                      onClick={() => handleNavigate("/creneaux-gymnases")}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <FaBook size={16} color="#FEEB0A" /> Créneaux et gymnases
                    </motion.p>

                    <motion.p
                      whileHover={{ x: 5 }}
                      onClick={() => handleNavigate("/formules-tarifs")}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <FaBook size={16} color="#FEEB0A" /> Formules et tarifs
                    </motion.p>

                    {/* <motion.p
                      whileHover={{ x: 5 }}
                      onClick={() => handleNavigate("/health-wellness")}
                      style={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      <FaBook size={16} color="#FEEB0A" /> Nous contacter
                    </motion.p> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/inscription">S'inscrire</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/event-activities">Evénements</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/contact">Nous contacter</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="nav-item">
              <Link to="/don">Faire un don</Link>
            </motion.div>
          </nav>

          {/* Hamburger Button (Mobile / Tablet ≤992px) */}
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {/* Sidebar (fixed, sibling to header container) */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              className="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/">
                <motion.img
                  src={`${process.env.PUBLIC_URL}/asbg_logo.png`}
                  alt="ASBG Logo"
                  className="logo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </Link>
              <nav className="nav-links">
                {navItems.map((item, i) => (
                  <motion.p
                    key={i}
                    whileHover={{ x: 5 }}
                    onClick={() => handleNavigate(item.path)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </motion.p>
                ))}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>
      </header>
      <div className="margin-div"></div>
    </>

  );
};

export default Header;
