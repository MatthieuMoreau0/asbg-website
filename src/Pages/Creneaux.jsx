/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
};

// SVG icons available in /public (filename without extension)
const metroSvg = {
    "6": "6",
    "7": "7",
    "10": "10",
    "RER C": "C",
    "5": "5",
    "14": "14",
};

// Fallback colors for lines without SVG
const metroColors = {
};

const categories = [
    { key: "entrainement", label: "Entraînement" },
    { key: "jeu-libre", label: "Jeu libre" },
];

const gymnases = [
    {
        name: "Gymnase Patriarches",
        activite: "Entraînement — Intermédiaire & Avancé",
        horaire: "Mercredi de 19h à 20h30",
        metro: [{ line: "7", station: "Censier-Daubenton" }],
        tags: ["entrainement"],
    },
    {
        name: "Gymnase Jean Prévost",
        activite: "Jeu libre & Interclubs",
        horaire: "Jeudi de 20h à 22h30\nInterclubs de 22h30 à minuit (créneau autonome)",
        metro: [{ line: "6", station: "Glacière" }],
        tags: ["jeu-libre", "interclubs"],
    },
    {
        name: "Gymnase Château des Rentiers",
        activite: "Entraînement — Débutant & Intermédiaire",
        horaire: "Samedi de 12h à 13h30",
        metro: [{ line: "6", station: "Nationale" }],
        tags: ["entrainement"],
    },
    {
        name: "Gymnase Buffon",
        activite: "Jeu libre & Interclubs",
        horaire: "Dimanche de 9h30 à 13h",
        metro: [
            { line: "5", station: "Gare d'Austerlitz" },
            { line: "10", station: "Gare d'Austerlitz" },
            { line: "RER C", station: "Gare d'Austerlitz" },
        ],
        tags: ["jeu-libre"],
    },
    {
        name: "Gymnase Charcot",
        activite: "Jeu libre",
        horaire: "Dimanche de 18h à 20h (créneau autonome)",
        metro: [
            { line: "6", station: "Chevaleret" },
            { line: "14", station: "Bibliothèque François Mitterrand" },
        ],
        tags: ["jeu-libre"],
    },
];

const Creneaux = () => {
    return (
        <>
            {/* HERO */}

            <section className="about-hero">
                <motion.h1
                    className="section-subheading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Nos créneaux & gymnases
                </motion.h1>
            </section>

            {/* CARDS */}
            <section className="pricing-section">
                <div className="pricing-inner" style={{ maxWidth: 1000 }}>
                    {categories.map((category) => {
                        const categoryGymnases = gymnases.filter((g) => g.tags.includes(category.key));
                        if (!categoryGymnases.length) return null;

                        return (
                            <div key={category.key} style={{ marginBottom: "3rem" }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="section-heading">{category.label}</h2>
                                </motion.div>

                                <div className="creneaux-grid">
                                    {categoryGymnases.map((g, i) => (
                                        <motion.div
                                            key={`${category.key}-${i}`}
                                            className="creneau-card"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={i}
                                            whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.10)" }}
                                        >
                                            <h3>{g.name}</h3>

                                            <div className="creneau-row">
                                                <span className="creneau-label">Activité</span>
                                                <span>{g.activite}</span>
                                            </div>

                                            <div className="creneau-row">
                                                <span className="creneau-label">Horaire</span>
                                                <span style={{ whiteSpace: "pre-line" }}>{g.horaire}</span>
                                            </div>

                                            <div className="creneau-row">
                                                <span className="creneau-label">Accès</span>
                                                <div className="creneau-metro">
                                                    {g.metro.map((m, j) => {
                                                        const svgFile = metroSvg[m.line];
                                                        return (
                                                            <span key={j} className="metro-badge">
                                                                {svgFile ? (
                                                                    <img
                                                                        src={`${process.env.PUBLIC_URL}/${svgFile}.svg`}
                                                                        alt={`Ligne ${m.line}`}
                                                                        className="metro-svg"
                                                                    />
                                                                ) : (
                                                                    <span
                                                                        className="metro-line"
                                                                        style={{ background: metroColors[m.line] || "#444" }}
                                                                    >
                                                                        <span className="metro-prefix">M</span>
                                                                        {m.line}
                                                                    </span>
                                                                )}
                                                                {m.station}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* MAP */}
            <section className="pricing-section" style={{ paddingTop: 0 }}>
                <div className="pricing-inner" style={{ maxWidth: 1000 }}>
                    <motion.h2
                        className="section-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Retrouvez-nous sur la carte
                    </motion.h2>
                    <motion.div
                        className="creneaux-map"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <iframe
                            title="Gymnases ASBG"
                            src="https://www.google.com/maps/d/embed?mid=1ut1lQgyQ2Hv9uyYRZW4fEE7aP2VXMyk&ehbc=2E312F&noprof=1"
                            loading="lazy"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Creneaux;