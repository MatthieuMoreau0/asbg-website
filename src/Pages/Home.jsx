/**CORE LIBRARIES IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import Information from "../Components/Information";


/**IMAGES IMPORT */
import WelcomeImg from '../Images/asbg4.avif';
import heroImg from "../Images/asbg5.jpg";
import galleryImg1 from "../Images/asbg1.avif";
import galleryImg2 from "../Images/blackminton.jpg";
import galleryImg3 from "../Images/asbg3.avif";
import galleryImg4 from "../Images/finAnnee.jpg";


/**DATA IMPORT */
import { approachCards } from "../Data";



const Home = () => {

  const floating = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>

      {/**HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          {/* LEFT */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1>
              <span>ASBG</span> — Badminton inclusif,<br />engagé & compétitif 🏸
            </h1>
            <p>
              Association LGBT+ de badminton parisienne, affiliée à la FFBaD depuis 2017, ASBG rassemble aujourd'hui plus de 160 membres autour d'une passion commune : le badminton.
              <br />Notre association propose des créneaux pour tous les niveaux, du débutant au compétiteur confirmé.
              <br />Nous participons chaque saison aux interclubs fédéraux, aux tournois nationaux LGBT+ et aux Gay Games. Rejoignez une communauté bienveillante, engagée et qui gagne !
            </p>

            <div className="hero-buttons">
              <Link to='/inscription'>
                <motion.button
                  className="primary-btn"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  S'inscrire
                </motion.button>
              </Link>
              <Link to='/about-us'>
                <motion.button
                  className="secondary-btn"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  En savoir plus
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="hero-image-wrapper">
            {/* Rotating uneven circle */}
            <motion.div
              className="uneven-circle"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />


            <motion.img
              src={heroImg}
              alt="ASBG — badminton inclusif à Paris"
              className="hero-image"
              {...floating}
            />
          </div>
        </div>
      </section>

      {/**APPROACH CARDS SECTION */}
      <section className="approach-section">
        <div className="approach-inner">

          {/* HEADING */}
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nos valeurs
          </motion.h2>

          {/* TEXT */}
          <motion.p
            className="section-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            L'ASBG c'est un projet sportif ambitieux dans un cadre inclusif et chaleureux. Ici, tout le monde trouve sa place — que vous visiez le podium ou simplement une bonne suée entre amis.
          </motion.p>

          {/* CARDS */}
          <div className="approach-cards">
            {approachCards.map((item, i) => (
              <motion.div
                className="approach-card"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                }}
              >
                <motion.div
                  className="approach-img"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={item.img} alt={item.title} />
                </motion.div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/**PHOTO GALLERY SECTION */}
      <section className="gallery-section">
        <div className="approach-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            En images
          </motion.h2>

          <div className="gallery-grid">
            {[
              { src: galleryImg1, alt: "Joueurs ASBG sur le terrain" },
              { src: galleryImg2, alt: "Tournoi ASBG" },
              { src: galleryImg3, alt: "Entraînement ASBG" },
              { src: galleryImg4, alt: "Équipe ASBG" },
            ].map((photo, i) => (
              <motion.div
                className="gallery-item"
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={photo.src} alt={photo.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;