/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const plans = [
  {
    title: "Formule avec entraînement",
    price: "140 €",
    features: [
      { label: "Licence FFBad", included: true },
      { label: "Jeu libre", included: true },
      {
        label: "Entraînement avec un professionnel",
        included: true,
        detail:
          "Groupe 1 : 16 places — mercredis 19h–20h30 (hors vacances scolaires)\nGroupe 2 : 20 places — samedis 12h–13h30 (hors vacances scolaires)\nAu moins 1 entraînement toutes les 3 semaines en début de saison.",
      },
      { label: "Accès aux stages encadrés", included: true },
      {
        label: "Interclubs",
        included: true,
        detail: "+25 € IC Mixte · +15 € IC Masculin",
      },
    ],
    highlight: true,
  },
  {
    title: "Formule sans entraînement",
    price: "105 €",
    features: [
      { label: "Licence FFBad", included: true },
      { label: "Jeu libre", included: true },
      { label: "Entraînement avec un professionnel", included: false },
      { label: "Accès aux stages encadrés", included: false },
      {
        label: "Interclubs",
        included: true,
        detail: "+25 € IC Mixte · +15 € IC Masculin",
      },
    ],
    highlight: false,
  },
];

const Formules = () => {
  return (
    <>
      {/* HERO BANNER */}
      <section className="about-hero">
        <motion.p
          className="section-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos formules & tarifs
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tarifs 2026 / 2027
        </motion.h1>
      </section>

      {/* PRICING CARDS */}
      <section className="pricing-section">
        <div className="pricing-inner">

          <motion.p
            className="section-text"
            style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 3rem" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Le paiement via le dispositif <strong>Pass'Sport</strong> est accepté.
          </motion.p>

          <div className="pricing-cards">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -8, boxShadow: "0 20px 45px rgba(0,0,0,0.12)" }}
              >
                <h3>{plan.title}</h3>
                <div className="pricing-price">{plan.price}</div>
                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j} className={f.included ? "included" : "excluded"}>
                      <span className="pricing-check">{f.included ? "✔" : "✖"}</span>
                      <span>
                        <strong>{f.label}</strong>
                        {f.detail && (
                          <span className="pricing-detail"> — {f.detail}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Formules;