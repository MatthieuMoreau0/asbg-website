import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "À propos de nous", link: "/about-us" },
    { name: "Infos pratiques", link: "/infos-pratiques" },
    { name: "Nos créneaux", link: "/creneaux-gymnases" },
    { name: "S'inscrire", link: "/inscription" },
    { name: "Faire un don", link: "/donation" },
  ];
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* COLUMN 1 */}
        <motion.div
          className="footer-col footer-about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={`${process.env.PUBLIC_URL}/asbg_logo.png`}
            alt="ASBG Logo"
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p>
            Association Sportive des Badistes Givrés<br />
            Association LGBT+ de badminton affiliée à la Fédération Française de Badminton (FFBaD). <br /> 
            Fondée en 2017, + de 160 membres.
          </p>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
          </motion.div>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3>Liens utiles</h3>
          <ul>
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  → {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Contact</h3>
          <ul className="footer-contact">
            <a href="mailto:contact@asbg75.com">
              <li>
                <FiMail /> contact@asbg75.com
              </li>
            </a>
            <a
              href="https://www.instagram.com/asbg75/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaInstagram /> Instagram ASBG
              </li>
            </a>
          </ul>
        </motion.div>
      </div>

      {/* BOTTOM STRIP */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>Copyright © 2025 ASBG — Association Sportive des Badistes Givrés. Tous droits réservés.</p>
      </motion.div>


      
    </footer>
  );
};

export default Footer;
