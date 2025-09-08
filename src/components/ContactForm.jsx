// src/components/ContactForm.jsx

import React from "react"; // essentiel pour que react reconnaissent JSX.
import { useState } from "react";

// Définir un composant fonctionnel.
function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // état pour les messages de succès/erreur

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    // Explication de e.preventDefault() :
    // Par défaut, un formulaire HTML tente de recharger la page et d'envoyer les données à une URL spécifiée (celle de l'attribut action).
    // Dans une application React (SPA - Single Page Application), nous ne voulons pas recharger la page.
    // e.preventDefault() arrête ce comportement par défaut, nous permettant de gérer la soumission avec JavaScript.
    e.preventDefault();

    setStatusMessage(""); // Réinitialise le message de statut à chaque soumission

    // const formData = { nom, email, message }; :
    // C'est une syntaxe raccourcie (shorthand property names) de JavaScript pour { nom: nom, email: email, message: message }.
    // Très pratique quand le nom de la propriété est le même que le nom de la variable.
    const formData = {
      nom,
      email,
      message,
    };

    console.log("Données du formulaire à envoyer :", formData);

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.text();
        console.log("Message de succès du serveur :", data);

        setStatusMessage(data);

        // Réinitialise les champs du formulaire après envoi (optionnel, pour montrer que ça a bien fonctionné)
        setNom("");
        setEmail("");
        setMessage("");
      } else {
        const errorDetails = await response.text();

        console.error(
          "Erreur du serveur (code:",
          response.status,
          ") :",
          errorDetails
        );

        setStatusMessage(
          "Erreur : Une erreur est survenue lors de l'envoi du message."
        );
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire : ", error);
      setStatusMessage("Erreur de connexion au serveur ou problème inattendu.");
    }
  };

  // Retourner du JSX, qui ressemble à du HTML, mais ce n'en est pas.
  return (
    // htmlFor au lieu de for:
    // En JSX, for est un mot-clé JavaScript réservé, donc on utilise htmlFor pour associer un label à un input.
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Votre nom"
          required
          value={nom} // Liaison de la valeur de l'input à l'état 'nom'
          onChange={(e) => setNom(e.target.value)} // Mise à jour de l'état 'nom' quant l'input change.
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Votre message..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">🚀 Envoyer</button>

        {/* Affichage du message de statut */}
        {statusMessage && (
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              color: statusMessage.startsWith("Erreur") ? "red" : "green",
            }}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
}

// permet à d'autres fichiers comme App.jsx d'importer est d'utiliser ce composant.
export default ContactForm; // Exporte le composant pour qu'il puisse être importé ailleurs.
