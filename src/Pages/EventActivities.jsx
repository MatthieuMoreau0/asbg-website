import React from "react";
import asbg1 from "../Images/asbg1.avif";
import asbg2 from "../Images/asbg2.avif";
import asbg3 from "../Images/asbg3.avif";
import asbg4 from "../Images/asbg4.avif";
import asbg6 from "../Images/asbg6.jpg";

const EventCard = ({ title, date, description, image }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "16px",
      padding: "1rem",
      boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
    }}
  >
    <div style={{ marginBottom: "0.75rem" }}>
      <h3 style={{ margin: "0 0 0.25rem", color: "#222" }}>{title}</h3>
      <p style={{ margin: "0 0 0.35rem", color: "#CDAB00", fontWeight: 600 }}>{date}</p>
      <p style={{ margin: 0, color: "#4d5765", lineHeight: 1.6 }}>{description}</p>
    </div>
    <img
      src={image}
      alt={title}
      style={{ width: "100%", maxHeight: "260px", objectFit: "contain", borderRadius: "12px", background: "#f7f7f7" }}
    />
  </div>
);

const sections = [
  {
    title: "Tournois",
    items: [
      {
        title: "Tournoi des plumes givrées",
        date: "04-05 Juillet 2026",
        description: "Tournoi fédéral organisé par l'ASBG.",
        image: asbg1,
      },
    ],
  },
  {
    title: "Convivialité",
    items: [
      {
        title: "Accueil des nouveaux membres",
        date: "Septembre",
        description: "Une rencontre pour bien accueillir les nouveaux membres.",
        image: asbg2,
      },
      {
        title: "Soirée de Noel",
        date: "Décembre",
        description: "Une soirée chaleureuse et conviviale pour toute l'association.",
        image: asbg6,
      },
      {
        title: "Soirée de fin d'année",
        date: "Juillet",
        description: "Une soirée pour clôturer l'année entre sportifs et amis.",
        image: asbg4,
      },
    ],
  },
];

const EventActivities = () => {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem", color: "#CDAB00" }}>Événements</h1>

      {sections.map((section) => (
        <div key={section.title} style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem", color: "#4400CD" }}>{section.title}</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {section.items.map((item) => (
              <EventCard
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventActivities;
