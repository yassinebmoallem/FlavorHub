🚀 **Live Demo:** [https://flavorhub.lovestoblog.com/flavohub_modified/](https://flavorhub.lovestoblog.com/flavohub_modified/)
# 🍴 FlavorHub

> Application web de découverte de recettes, développée dans le cadre du cours universitaire *Projet fédéré (méthode Agile)*.

---

## 📖 À propos du projet

FlavorHub est une plateforme de recettes permettant aux utilisateurs de parcourir des centaines de recettes, de filtrer par catégorie, de rechercher par mot-clé et de sauvegarder leurs favoris.

Développé en équipe de 6 en suivant la méthodologie Agile (Scrum), j'ai pris en charge le développement full-stack — de la conception de la base de données aux interactions frontend — tout en contribuant à la planification des sprints et aux cérémonies Scrum en tant que membre actif de l'équipe.

L'objectif pédagogique était de construire une vraie application web en conditions proches du réel : gestion d'un backlog, livraisons itératives, bugs à corriger, et décisions techniques à prendre sous contrainte de temps.

---

## ✨ Fonctionnalités

- **Affichage dynamique des recettes** — Chargement et rendu via manipulation du DOM en JavaScript pur
- **Recherche avec scoring** — Les résultats sont classés par pertinence selon le titre, la catégorie, les ingrédients, la description et l'auteur
- **Filtres par catégorie** — Mise à jour instantanée sans rechargement de page
- **Pagination "Load more"** — 20 recettes chargées par page pour de meilleures performances
- **Authentification utilisateur** — Inscription et connexion avec validation côté serveur
- **Mots de passe sécurisés** — Hachage via `password_hash()` / vérification via `password_verify()`
- **Gestion des sessions** — Sessions PHP persistantes entre les pages
- **Système de favoris** — Ajout/suppression en temps réel via AJAX (fetch API) sans rechargement
- **Page détail recette** — Vue complète avec ingrédients, étapes et métadonnées
- **Icônes sans dépendance CDN** — Tous les icônes sont des SVG inline

---

## 🛠️ Technologies utilisées

| Couche      | Technologie            |
|-------------|------------------------|
| Frontend    | HTML, CSS, JavaScript (Vanilla) |
| Backend     | PHP                    |
| Base de données | MySQL              |
| Environnement local | XAMPP (Apache + MySQL) |

---

## 📁 Structure du projet

```
flavohub/
├── css/
│   ├── auth.css              # Styles pour les pages d'authentification
│   └── style.css             # Feuille de style principale
├── data/
│   ├── recipes/
│   └── recipes-data.js       # Dataset des recettes (constante JS)
├── js/
│   └── app.js                # JS principal — recherche, filtres,
├── libs/
│   ├── leaflet.min.css
│   └── leaflet.min.js
├── pages/
│   ├── login.php             # Formulaire + logique de connexion
│   ├── logout.php            # Destruction de session
│   └── register.php          # Formulaire + logique d'inscription
├── php/
│   ├── config.php            # Connexion DB + création automatique des tables
│   └── toggle-favorite.php   # Endpoint favoris (retourne du JSON)
├── database.sql              # Schéma SQL (import manuel)
├── index.php                 # Page principale (liste des recettes)
├── README.md
└── recipe.php                # Page détail d'une recette
```

---

## 🚀 Installation et démarrage

### Prérequis

- [XAMPP](https://www.apachefriends.org/) (ou tout serveur local avec PHP + MySQL)
- Un navigateur web

### Étapes

**1.** Clonez ou téléchargez ce dépôt dans le dossier `htdocs` de XAMPP :
```
C:/xampp/htdocs/flavohub/
```

**2.** Démarrez XAMPP — vérifiez qu'**Apache** et **MySQL** sont bien actifs.

**3.** Configurez la base de données :
- Ouvrez [phpMyAdmin](http://localhost/phpmyadmin) et importez `database.sql`
- **Ou** accédez directement à l'app — `config.php` crée automatiquement la base et les tables au premier chargement.

**4.** Ouvrez l'application dans votre navigateur :
```
http://localhost/flavohub/
```

> ⚠️ **Ne pas ouvrir `index.php` via l'Explorateur de fichiers** (protocole `file://`). Les données recettes doivent être servies par un serveur local pour se charger correctement.

---

## ⚠️ Limitations et fonctionnalités non terminées

### Carte des restaurants — Feature abandonnée

Une carte interactive des restaurants à proximité était prévue, utilisant **Leaflet.js** et une API externe de géolocalisation. Les fichiers préparatoires sont visibles dans `recipe.php` et le dossier `libs/`.

Cette fonctionnalité n'a pas été livrée pour les raisons suivantes :

- Les APIs adaptées nécessitaient un compte payant ou une approbation longue
- Difficultés techniques d'intégration dans le délai imparti
- Contraintes de temps en fin de sprint

La décision a été prise d'abandonner cette feature plutôt que de livrer quelque chose de non fonctionnel. Le reste de l'application fonctionne complètement sans elle.

### Bugs réels rencontrés et corrigés

- **Protocole `file://` bloquant les données JSON** — Les données recettes étaient initialement dans un fichier JSON externe, bloqué par le navigateur en `file://`. Solution : conversion des données en constante JavaScript (`RECIPES_DATA`), chargée comme un script classique.
- **Apostrophes cassant les chaînes JavaScript** — Les titres et descriptions contenant des apostrophes généraient des erreurs JS. Corrigé par un échappement correct des chaînes lors de la préparation des données.
- **Inscription silencieuse sur email déjà existant** — L'inscription échouait sans message d'erreur si l'email était déjà utilisé. Corrigé en ajoutant une vérification explicite avec retour d'un message clair à l'utilisateur.

---

## 💡 Ce que j'ai appris

- Planifier et livrer un projet en sprints Agile au sein d'une équipe
- Développement full-stack complet : modélisation BDD → backend PHP → frontend JS
- Utilisation de l'API `fetch` pour des interactions sans rechargement de page
- Gestion des sessions PHP et sécurisation des mots de passe
- Déboguer des erreurs réelles qui ne figurent dans aucun tutoriel
- Prendre des décisions pragmatiques sous contrainte de temps (abandonner une feature pour en livrer d'autres proprement)

---

## 🔮 Améliorations futures

- [ ] Soumission de recettes par les utilisateurs (pas seulement la navigation)
- [ ] Intégration de la carte restaurants via Google Places API ou OpenStreetMap
- [ ] Système de notation et d'avis sur les recettes
- [ ] Responsive design complet sur mobile
- [ ] Migration de `mysqli` vers PDO pour une meilleure cohérence
- [ ] Pagination via paramètres URL (vues filtrées partageables)
- [ ] Recommandations personnalisées basées sur les favoris

---

## 👥 Équipe

Projet réalisé en équipe de 6 étudiants — 2ème année, *Projet fédéré (méthode Agile)*.

---

## 📧 Contact

Pour toute question, suggestion ou collaboration :

- **Email** : yassine.bmaalem@gmail.com
- **LinkedIn** : [Yassine Ben Maallem](https://www.linkedin.com/in/yassine-ben-maalem/)
- **GitHub** : [@yassinebmoallem](https://github.com/yassinebmoallem)

---

## 📄 Licence

Ce projet a été réalisé à des fins pédagogiques dans le cadre d'un cours universitaire.
