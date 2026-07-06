/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

const steps = [
    {
        emoji: "🔄",
        title: "Je souhaite me réinscrire",
        status: "Inscriptions en cours",
        deadline: "jusqu'au 31 juillet 2026",
        note: null,
    },
    {
        emoji: "🤝",
        title: "Je suis adhérent·e d'une association sœur",
        status: "Inscriptions du 4 au 10 août",
        deadline: null,
        note: "Dans la limite des places disponibles",
    },
    {
        emoji: "🆕",
        title: "Je souhaite m'inscrire",
        status: "Inscriptions à partir du 11 août",
        deadline: null,
        note: "Dans la limite des places disponibles",
    },
    {
        emoji: "🏸",
        title: "J'ai déjà une licence dans un autre club",
        subtitle: "Inscription \"extérieur\"",
        status: "Inscriptions à venir",
        deadline: null,
        note: "Dans la limite des places disponibles",
    },
];

const Inscriptions = () => {
    return (
        <>
            {/* HERO */}
            <section className="about-hero">
                <motion.p
                    className="section-subheading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Saison 2026 / 2027
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Inscriptions
                </motion.h1>
            </section>

            {/* GUIDE LINK */}
            <section style={{ padding: "3rem 2rem 0", textAlign: "center" }}>
                <motion.a
                    href="https://drive.google.com/file/d/1VLp0QBisausmn8_0Vu0T2kW5yaDeq8cq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                    style={{ display: "inline-block", textDecoration: "none" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    📋 Livret pas à pas — Guide d'inscription
                </motion.a>
                <motion.p
                    className="section-text"
                    style={{ marginTop: "1rem", color: "#888", fontSize: "0.9rem" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    Suivez notre guide pour vous inscrire étape par étape.
                </motion.p>
            </section>

            {/* INSCRIPTION CARDS */}
            <section className="pricing-section">
                <div className="pricing-inner">
                    <div className="inscription-cards">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="inscription-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                            >
                                <span className="inscription-emoji">{step.emoji}</span>
                                <h3>{step.title}</h3>
                                {step.subtitle && <p className="inscription-subtitle">{step.subtitle}</p>}
                                <div className="inscription-status">{step.status}</div>
                                {step.deadline && <p className="inscription-deadline">{step.deadline}</p>}
                                {step.note && <p className="inscription-note">{step.note}</p>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Inscriptions;