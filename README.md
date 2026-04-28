# 🍴 FlavorHub

> A recipe discovery web app built by a team of 6 students as part of our university Agile project course (*Projet fédéré — méthode Agile*).

---

## 📖 About the Project

FlavorHub is a recipe platform where users can browse hundreds of recipes, filter by category, search by keyword, and save their favorites. It was developed over several sprints using Agile methodology, with a focus on clean UI, working authentication, and smooth interactions without full page reloads.

The project was a hands-on introduction to building a real full-stack web application as a team — from database design to frontend interactions — while practicing Scrum ceremonies, task delegation, and iterative delivery.

---

## ✨ Features

- **Recipe browsing** — Displays a large dataset of recipes loaded dynamically via JavaScript
- **Search with scoring** — Keyword search ranked by relevance across title, category, ingredients, description, and author
- **Category filters** — Filter recipes by type with instant DOM updates
- **Load more / Pagination** — Recipes load 20 at a time to keep the page fast
- **User authentication** — Register and login system with server-side validation
- **Secure passwords** — Passwords stored using `password_hash()` / `password_verify()`
- **Session management** — PHP sessions to keep users logged in across pages
- **Favorites system** — Add/remove favorites instantly using AJAX (no page reload)
- **Recipe detail page** — Full recipe view with ingredients, steps, and metadata
- **No CDN dependencies for icons** — All UI icons are inline SVGs

---

## 🛠️ Technologies Used

| Layer      | Technology          |
|------------|---------------------|
| Frontend   | HTML, CSS, Vanilla JS |
| Backend    | PHP                 |
| Database   | MySQL               |
| Local env  | XAMPP (Apache + MySQL) |

---

## 📁 Project Structure

```
flavohub_modified/
├── index.php               # Main page (recipe listing)
├── recipe.php              # Recipe detail page
├── database.sql            # SQL schema (import manually)
├── css/
│   ├── style.css           # Main stylesheet
│   └── auth.css            # Auth pages stylesheet
├── js/
│   └── app.js              # Core JS — search, filtering, AJAX favorites
├── php/
│   ├── config.php          # DB connection + auto table creation
│   └── toggle-favorite.php # Favorites toggle endpoint (returns JSON)
├── pages/
│   ├── register.php        # Registration form & logic
│   ├── login.php           # Login form & logic
│   └── logout.php          # Session destroy
├── data/
│   └── recipes-data.js     # Recipe dataset (JS constant)
└── libs/
    └── README.txt          # Instructions for optional Leaflet map
```

---

## 🚀 Getting Started

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) (or any local server with PHP + MySQL)
- A web browser

### Installation

1. **Clone or download** this repository into your XAMPP `htdocs` folder:
   ```
   C:/xampp/htdocs/flavohub/
   ```

2. **Start XAMPP** — make sure both **Apache** and **MySQL** are running.

3. **Set up the database** — open [phpMyAdmin](http://localhost/phpmyadmin) and import `database.sql`, **or** just visit the app — `config.php` will auto-create the database and tables on first load.

4. **Open the app** in your browser:
   ```
   http://localhost/flavohub/
   ```

> ⚠️ **Do not open `index.php` directly from File Explorer** (i.e., via `file://`). The recipe data must be served through a local server to load correctly.

---

## 📸 Screenshots

> *Screenshots will be added here.*

| Page | Preview |
|------|---------|
| Home / Recipe Listing | *(Add screenshot)* |
| Recipe Detail | *(Add screenshot)* |
| Register | *(Add screenshot)* |
| Login | *(Add screenshot)* |

---

## ⚠️ Known Limitations

### Unfinished Feature — Restaurant Map

We originally planned to add an interactive restaurant map on the recipe detail page using **Leaflet.js** and a restaurant search API. This feature was partially scaffolded (you can see placeholder references in `recipe.php` and the `libs/` folder) but was not completed due to:

- Difficulties integrating a suitable external API
- Most relevant APIs required payment or account approval
- Time constraints during the final sprint

We made the decision to drop this feature and focus on polishing what was already working rather than shipping something broken. The rest of the app functions fully without it.

### Other Known Issues Fixed During Development

- **`file://` protocol blocking JSON** — We originally loaded recipe data from an external JSON file, which browsers block under `file://`. We solved this by converting the data to a JavaScript constant (`RECIPES_DATA`) so it loads as a regular script.
- **Apostrophes breaking JavaScript strings** — Recipe titles and descriptions with apostrophes caused JS string errors. Fixed by properly escaping strings during data handling.
- **Duplicate email on register** — A bug allowed registration to fail silently if the email already existed. Fixed by checking for duplicates and showing a clear error message.

---

## 💡 What We Learned

- How to plan and execute a project in Agile sprints as a team
- Full-stack development flow: database → backend → frontend
- AJAX and fetch API for seamless user interactions
- PHP session management and secure password handling
- Debugging real bugs that don't appear in tutorials
- How to make pragmatic decisions (like dropping a feature) to deliver something clean

---

## 🔮 Future Improvements

If we were to continue this project, we'd consider:

- [ ] Adding user recipe submissions (not just browsing)
- [ ] Implementing the restaurant map once a free API is available
- [ ] Adding a rating / review system
- [ ] Making the app fully responsive on mobile
- [ ] Migrating from `mysqli` to PDO for more consistent DB handling
- [ ] Adding pagination via URL params (shareable filtered views)

---

## 👥 Team

Built by a team of 6 students — 2nd year university, *Projet fédéré (méthode Agile)*.

---

## 📄 License

This project was created for educational purposes as part of a university course.