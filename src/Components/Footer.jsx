import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "À propos de nous", link: "/about-us" },
    { name: "Infos pratiques", link: "/infos-pratiques" },
    { name: "Nos créneaux", link: "/skill-development" },
    { name: "S'inscrire", link: "/health-wellness" },
    { name: "Faire un don", link: "/donation" },
    { name: "Politique de confidentialité", link: "/privacy-policy" },
    { name: "CGU", link: "/terms-conditions" },
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
            Association Sportive des Badistes Givrés — association LGBT+ de badminton affiliée à la Fédération Française de Badminton (FFBaD). Fondée en 2017, plus de 160 membres.
          </p>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.a href="https://www.facebook.com/ASBGParis"
              target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaFacebookF />
            </motion.a>
            <motion.a href="https://www.youtube.com"
              target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaYoutube />
            </motion.a>
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
          <h3>Useful Links</h3>
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
            <li>
              <FiMapPin className="location-icon" />
              <span>Paris, France</span>
            </li>
            <a href="mailto:contact@asbg75.com">
              <li>
                <FiMail /> contact@asbg75.com
              </li>
            </a>
          </ul>
        </motion.div>

        {/* COLUMN 4 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>Nous retrouver</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83999.06346827001!2d2.2769952!3d48.8588897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            loading="lazy"
          ></iframe>
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

      {/* CLOUD SHAPES */}
      <motion.div
        className="footer-cloud cloud-left"
        animate={{ x: [0, 20, 0], y: [0, -5, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M160 180 C90 180 70 135 110 110 C90 55 160 25 225 55 C260 10 345 10 380 60 C450 45 495 120 450 165 C510 210 445 250 370 230 C330 265 220 265 190 230 C150 250 95 230 115 190 C80 195 90 160 160 180 Z"
            fill="#ffffff"
            stroke="#91adc6"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      <motion.div
        className="footer-cloud cloud-right"
        animate={{ x: [0, -20, 0], y: [0, 5, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M120 150 C70 150 50 110 80 90 C65 45 125 20 170 45 C200 10 270 10 300 45 C360 30 395 90 360 125 C400 160 350 205 290 190 C260 220 170 220 140 190 C105 205 70 185 85 155 C60 160 65 130 120 150 Z"
            fill="#ffffff"
            stroke="#91adc6"
            strokeWidth="3"
          />
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;
