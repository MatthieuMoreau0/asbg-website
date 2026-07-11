import React, { useEffect } from "react";

const Donation = () => {
    useEffect(() => {
        const newWindow = window.open(
            "https://www.helloasso.com/associations/association-sportive-des-badistes-givres/formulaires/1",
            "_blank",
            "noopener,noreferrer"
        );

        if (newWindow) {
            newWindow.opener = null;
        }
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <p>Ouverture de HelloAsso dans un nouvel onglet…</p>
        </div>
    );
};

export default Donation;