# 🍴 FlavorHub

> Application web de découverte de recettes — réalisée dans le cadre d’un projet universitaire (*Projet fédéré — méthode Agile*).

---

## 📖 À propos du projet

FlavorHub est une plateforme de recettes où les utilisateurs peuvent parcourir des centaines de recettes, filtrer par catégorie, rechercher par mot-clé et sauvegarder leurs favoris.  
Bien que le projet fédéré impliquait une équipe de 6 étudiants, **l’intégralité du développement full‑stack** (base de données, backend PHP, frontend JavaScript, interactions AJAX, gestion des sessions, débogage) a été menée par **Yassine Ben Maallem**.

L’application a été construite en suivant les principes Agile (sprints, user stories, revues) et constitue une mise en pratique concrète du développement web professionnel.

---

## ✨ Fonctionnalités

- **Affichage des recettes** – Chargement dynamique d’un large jeu de données via JavaScript.
- **Recherche par score** – Mots‑clés recherchés dans le titre, la catégorie, les ingrédients, la description et l’auteur.
- **Filtres par catégorie** – Mise à jour instantanée du DOM.
- **Pagination / “Afficher plus”** – 20 recettes chargées à la fois pour conserver des performances fluides.
- **Authentification utilisateur** – Inscription et connexion avec validation côté serveur.
- **Mots de passe sécurisés** – Stockage via `password_hash()` / `password_verify()`.
- **Gestion de sessions** – Session PHP pour rester connecté sur toutes les pages.
- **Système de favoris** – Ajout / suppression en AJAX (sans rechargement).
- **Page détail d’une recette** – Vue complète avec ingrédients, étapes et métadonnées.
- **Aucune dépendance CDN pour les icônes** – Toutes les icônes sont des SVG intégrés.

---

## 🛠️ Technologies utilisées

| Couche      | Technologie            |
|-------------|------------------------|
| Frontend    | HTML, CSS, JavaScript vanilla |
| Backend     | PHP                    |
| Base de données | MySQL              |
| Environnement local | XAMPP (Apache + MySQL) |

---

## 📁 Structure du projet
flavohub_modified/
├── index.php # Page principale (liste des recettes)
├── recipe.php # Détail d’une recette
├── database.sql # Schéma SQL (import manuel)
├── css/
│ ├── style.css # Styles principaux
│ └── auth.css # Styles des pages d’auth
├── js/
│ └── app.js # JS central — recherche, filtres, favoris AJAX
├── php/
│ ├── config.php # Connexion DB + création auto des tables
│ └── toggle-favorite.php # Endpoint pour favoris (JSON)
├── pages/
│ ├── register.php # Inscription
│ ├── login.php # Connexion
│ └── logout.php # Destruction de session
├── data/
│ └── recipes-data.js # Jeu de données des recettes (constante JS)
└── libs/
└── README.txt # Instructions pour Leaflet map (optionnel)

text

---

## 🚀 Installation

### Prérequis

- [XAMPP](https://www.apachefriends.org/) (ou tout serveur local PHP + MySQL)
- Un navigateur web

### Étapes

1. **Cloner ou télécharger** ce dépôt dans le dossier `htdocs` de XAMPP :
C:/xampp/htdocs/flavohub/

text

2. **Démarrer XAMPP** – Activer **Apache** et **MySQL**.

3. **Créer la base de données** – Ouvrir [phpMyAdmin](http://localhost/phpmyadmin) et importer `database.sql`, **ou** simplement visiter l’application – `config.php` crée automatiquement la base et les tables au premier chargement.

4. **Ouvrir l’application** dans le navigateur :
http://localhost/flavohub/

text

> ⚠️ **Ne pas ouvrir `index.php` directement depuis l’explorateur de fichiers** (i.e. via `file://`). Les données des recettes doivent être servies par un serveur local.

---

## ⚠️ Limitation connue (fonctionnalité abandonnée)

### Carte des restaurants

Une carte interactive devait initialement être intégrée sur la page détail des recettes via **Leaflet.js** et une API de restaurants. Cette fonctionnalité a été **abandonnée** par choix pragmatique car :

- Les API gratuites pertinentes exigeaient approbation ou carte bancaire.
- L’intégration stable n’était pas garantie dans les délais du sprint.

**J’ai préféré livrer une application propre et complète** plutôt qu’une fonctionnalité bancale. Le reste de l’application est entièrement fonctionnel.

### Autres bugs corrigés

- **Problème `file://` bloquant le JSON** → conversion des données en constante JavaScript `RECIPES_DATA`.
- **Apostrophes dans les titres** coupant les chaînes JS → échappement propre.
- **Inscription avec email dupliqué** échouant silencieusement → vérification et message clair.

---

## 💡 Ce que j’ai appris

- Planifier et exécuter un projet en Agile (sprints, rétrospectives).
- Maîtriser l’enchaînement base de données → backend → frontend.
- Utiliser `fetch()` et AJAX pour des interactions fluides (favoris sans reload).
- Gérer les sessions PHP et la sécurité des mots de passe.
- Déboguer des bugs réels (CORS, échappement JS, doublons en BDD).
- Prendre des décisions pragmatiques (abandonner une carte pour la stabilité).

---

## 🔮 Améliorations futures envisageables

- [ ] Soumission de recettes par les utilisateurs.
- [ ] Implémentation de la carte des restaurants (dès qu’une API gratuite sera disponible).
- [ ] Système de notes / commentaires.
- [ ] Version entièrement responsive (mobile).
- [ ] Migration de `mysqli` vers PDO.
- [ ] Pagination via paramètres d’URL (vues filtrables partageables).

---

## 👤 Auteur

**Yassine Ben Maallem** – Développement full-stack, conception DB, debogage, déploiement.

## 📧 Contact

Pour toute question, suggestion ou collaboration :

- **Email** : yassine.bmaalem@gmail.com
- **LinkedIn** : [Yassine Ben Maallem](https://www.linkedin.com/in/yassine-ben-maallem-02b87330b/)
- **GitHub** : [@yassinebmoallem](https://github.com/yassinebmoallem)

---

## 📄 Licence

Projet réalisé à des fins pédagogiques dans le cadre d’un cursus universitaire.
