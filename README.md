# Formulaire de Contact - Frontend (Application React.js)

Ce dépôt contient le code source de l'application frontend pour le formulaire de contact. Développé avec React.js et Vite, il permet aux utilisateurs de soumettre des messages et d'afficher la liste des messages existants en interagissant avec une API RESTful backend.

## Technologies Utilisées

*   **React.js** (Bibliothèque JavaScript pour la construction d'interfaces utilisateur)
*   **Vite** (Outil de build rapide pour le développement frontend)
*   **HTML5**
*   **CSS3** (Stylisation personnalisée)
*   **JavaScript (ES6+)**

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine de développement :

*   **Node.js** (version 18 ou supérieure recommandée)
*   **npm** (Node Package Manager, généralement inclus avec Node.js)
*   **Serveur Backend opérationnel :** Cette application frontend nécessite que l'API backend soit en cours d'exécution.

## Installation

Suivez ces étapes pour configurer et lancer le projet frontend :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/MChaker01/formulaire-contact-frontend.git
    cd formulaire_contact_frontend
    ```    

2.  **Installez les dépendances npm :**
    ```bash
    npm install
    ```

## Démarrage de l'Application Frontend

Pour lancer l'application React en mode développement :

```bash
npm run dev
```

L'application démarrera généralement sur http://localhost:5173/ (ou un autre port libre). Vous devriez voir le formulaire de contact et la liste des messages s'afficher dans votre navigateur.

## Intégration Backend

Cette application frontend communique avec une API RESTful pour la soumission et la récupération des messages.
* URL de l'API Backend : http://localhost:3000 (adresse par défaut pour le développement local)
* Dépôt GitHub du Backend : Vous pouvez trouver le code source de l'API backend ici :

https://github.com/MChaker01/formulaire_contact_backend.git


## Fonctionnalités

* Soumission de messages de contact via un formulaire interactif.
* Validation des entrées côté backend (avec retour d'erreurs au frontend).
* Affichage en temps réel des messages de succès ou d'erreur.
* Récupération et affichage de tous les messages de contact depuis la base de données.
