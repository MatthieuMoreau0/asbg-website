/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

import peng from "../Images/Peng.jpg";
import caro from "../Images/Caro.jpg";
import dara from "../Images/Dara.png";

import didier from "../Images/Didier.png";
import flo from "../Images/Flo.jpg";
import hyacinthe from "../Images/Hyacinthe.jpg";

import jeanne from "../Images/Jeanne.jpg";
import jordan from "../Images/Jordan.jpg";
import matthieu from "../Images/Matthieu.jpg";

import melanie from "../Images/Melanie.jpg";
import myriam from "../Images/Myriam.jpg";
import raph from "../Images/Raph.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
};

const highlights = [
    { icon: "🏸", text: "Entraînements réguliers" },
    { icon: "📈", text: "Stages de perfectionnement" },
    { icon: "🏆", text: "Interclubs (mixtes, masculins vétérans, coupe féminine)" },
    { icon: "🎽", text: "Tournois fédéraux" },
    { icon: "🌍", text: "Compétitions LGBT+ en France et à l'étranger" },
];

const values = [
    { emoji: "🤝", label: "Tolérance" },
    { emoji: "💛", label: "Respect" },
    { emoji: "🌈", label: "Solidarité" },
    { emoji: "✊", label: "Fierté" },
    { emoji: "🚀", label: "Dépassement de soi" },
];

const councilMembers = [
    { name: "Peng", role: "Président", image: peng },
    { name: "Dara", role: "Secrétaire", image: dara },
    { name: "Raphael", role: "Trésorier", image: raph },

    { name: "Myriam", role: "Vice-Présidente", image: myriam },
    { name: "Hyacinthe", role: "Vice-Secrétaire", image: hyacinthe },
    { name: "Jordan", role: "Vice-Trésorier", image: jordan },
    { name: "Caroline", role: "Administrateur", image: caro },
    { name: "Didier", role: "Administrateur", image: didier },
    { name: "Flo", role: "Administratrice", image: flo },
    { name: "Jeanne", role: "Administratrice", image: jeanne },

    { name: "Matthieu", role: "Administrateur", image: matthieu },
    { name: "Mélanie", role: "Administratrice", image: melanie },
];

const About = () => {
    return (
        <>
            {/* HERO BANNER */}
            <section className="about-hero">
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    🌈 ASBG : Du badminton inclusif, engagé… et compétitif !
                </motion.h1>
            </section>

            {/* MAIN CONTENT */}
            <section className="about-section">
                <div className="about-inner">

                    {/* INTRO */}
                    <motion.p
                        className="section-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                    >
                        Créée le <strong>14 mars 2017</strong>, l'Association Sportive des Badistes Givrés (ASBG) est une association <strong>LGBT+ de badminton</strong>, affiliée à la <strong>Fédération Française de Badminton (FFBaD)</strong>. Elle a été fondée par des badistes LGBT+ souhaitant créer un espace où l'on puisse jouer, progresser et porter fièrement les couleurs du rainbow flag dans le paysage fédéral. Aujourd'hui, nous sommes <strong>plus de 160 joueuses et joueurs</strong> à représenter notre association !
                    </motion.p>

                    <motion.p
                        className="section-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                    >
                        🏸 ASBG, c'est un cadre <strong>bienveillant, respectueux et motivant</strong>. Nos terrains sont ouverts à toutes et à tous — peu importe votre genre, votre origine sociale ou la couleur de vos amours. Ce qui nous rassemble, ce sont les valeurs fortes que nous défendons.
                    </motion.p>

                    {/* VALUES */}
                    <motion.h2
                        className="section-heading"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Nos valeurs
                    </motion.h2>
                    <div className="about-values">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                className="about-value-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.5}
                                whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.10)" }}
                            >
                                <span className="about-value-emoji">{v.emoji}</span>
                                <p>{v.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* ACTIVITIES */}
                    <motion.h2
                        className="section-heading"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Nos activités
                    </motion.h2>
                    <ul className="about-highlights">
                        {highlights.map((h, i) => (
                            <motion.li
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.5}
                            >
                                <span>{h.icon}</span> {h.text}
                            </motion.li>
                        ))}
                    </ul>

                    {/* OBJECTIVE */}
                    <motion.div
                        className="about-objective"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p>
                            🌈 Notre objectif est double : créer un <strong>espace sportif inclusif</strong> pour les personnes LGBT+, tout en favorisant l'accès à la <strong>compétition et à la performance</strong> dans un environnement respectueux et bienveillant.
                        </p>
                    </motion.div>

                    {/* ADMINISTRATIVE COUNCIL */}
                    <motion.h2
                        className="section-heading"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Conseil d'administration
                    </motion.h2>
                    <motion.p
                        className="section-text"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.5}
                    >
                        <strong>Élu par les membres </strong> lors de l’Assemblée Générale chaque année, le CA travaille de manière <strong>collégiale</strong> pour faire vivre et grandir le club. 
                        <br /> Il définit les orientations de l'association, assure la gestion au quotidien et la représente auprès des institutions, clubs partenaires et fédérations.
                    </motion.p>
                    <div className="about-council-grid">
                        {councilMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                className="about-council-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.1}
                            >
                                <img src={member.image} alt={member.name} className="about-council-image" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;