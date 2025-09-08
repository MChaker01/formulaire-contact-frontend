import React, { useState, useEffect } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 3. Faire la requête fetch vers http://localhost:3000/messages
        const response = await fetch("http://localhost:3000/messages");

        // 4. Gérer la réponse (response.ok, lire le JSON)
        if (!response.ok) {
          console.error(
            `un erreur serveur est survenue. Statut : , ${response.status}`
          );
          setError("Erreur est servenu lors de la récupération des messages");

          return;
        }

        // On lit le JSON.
        const result = await response.json();

        // 5. Mettre à jour l'état 'messages' (setMessages)
        setMessages(result);
      } catch (error) {
        // 6. Gérer l'erreur réseau (setError)
        console.error("Erreur réseau est survenue : ", error);
        setError("Erreur de connexion au serveur ou problème inattendu.");
      } finally {
        // c'est la première fois que je vois ce mot clé finally.
        // 7. Mettre isLoading à false (toujours, après succès ou erreur)
        setIsLoading(false);
      }
    };

    fetchData(); // Appel de la fonction asynchrone
  }, []); // <-- Tableau de dépendances : vide pour un seul déclenchement au montage

  return (
    <div className="messages-section">
      <h1>Liste des Messages</h1>
      {
        /* 1. Afficher l'état de chargement */
        isLoading === true && <p>Chargement des données ...</p>
      }

      {
        /* 2. Afficher l'état d'erreur */
        !isLoading && error && <p className="error-message">{error}</p>
      }

      {
        /* 3. Afficher un message si aucun message n'est trouvé */
        !isLoading && !error && messages.length === 0 && (
          <p>La liste des messages est vide.</p>
        )
      }

      <div className="cards-container">
        {
          /* 4. Afficher la liste des messages s'il y en a */
          !isLoading &&
            !error &&
            messages.length > 0 &&
            messages.map(({ _id, nom, email, message, date }) => (
              <div className="message-card" key={_id}>
                <p className="message-name">Nom : {nom}</p>
                <p className="message-email">Email : {email}</p>
                <p className="message-content">Message : {message}</p>
                <p className="message-date">
                  Date : {new Date(date).toLocaleDateString()}
                </p>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default Messages;
