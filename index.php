<?php
session_start();

$is_logged = isset($_SESSION['user_id']);
$username  = $is_logged ? $_SESSION['username'] : '';
$user_id   = $is_logged ? (int)$_SESSION['user_id'] : 0;

$favorites = [];
if ($is_logged) {
    require_once 'php/config.php';
    $res = mysqli_query($conn, "SELECT recipe_id FROM favoris WHERE user_id = $user_id");
    while ($row = mysqli_fetch_assoc($res)) {
        $favorites[] = (int)$row['recipe_id'];
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlavorHub</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <nav>
        <div class="nav-inner">
            <div class="nav-logo" onclick="location.href='index.php'">
                <div class="logo-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
                        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                    </svg>
                </div>
                FlavorHub
            </div>
            <div class="nav-links">
                <a href="index.php" class="nav-link active">Recettes</a>
                <?php if ($is_logged): ?>
                    <span class="nav-link" style="color:var(--text-secondary);">
                        Bonjour, <?php echo htmlspecialchars($username); ?>
                    </span>
                    <a href="pages/logout.php" class="nav-link" style="color:var(--primary);">Déconnexion</a>
                <?php else: ?>
                    <a href="pages/login.php" class="nav-link">Connexion</a>
                    <a href="pages/register.php" class="nav-link"
                        style="background:var(--primary);color:white;padding:8px 16px;border-radius:10px;">
                        Créer un compte
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </nav>

    <div class="hero">
        <div class="hero-eyebrow">
            <span class="eyebrow-star" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                    <path d="M12 1L9.5 8.5H2l6 4.5-2.5 8L12 16.5l6.5 4.5-2.5-8 6-4.5h-7.5z"/>
                </svg>
            </span>
            La plateforme culinaire #1
        </div>
        <h1>Découvrez des recettes <em>extraordinaires</em></h1>

        <div class="search-wrap">
            <div class="search-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
            </div>
            <input class="search-input" id="searchInput"
                   placeholder="Chercher une recette, un ingrédient..."
                   oninput="handleSearch(this.value)">
            <button class="search-btn" onclick="resetSearch()">Réinitialiser</button>
        </div>

        <div class="pills" id="filterPills">

            <div class="pill active" onclick="filterByCategory('all', this)">
                <span class="pill-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                    </svg>
                </span>
                Tout
            </div>

            <div class="pill" onclick="filterByCategory('Entrée', this)">
                <span class="pill-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M17 8C8 10 5.9 16.17 3.82 21L6 20c.43-.86 1.36-2.26 2.57-3.57.07.75.18 1.68.43 2.57C11 18 13 16 13 13c1.22 1.22 1.7 3.36 1.71 4.71C16.07 16 17 13.9 17 12c3.16.76 4 3.81 4 6H23C23 13 21 8 17 8z"/>
                    </svg>
                </span>
                Entrées
            </div>

            <div class="pill" onclick="filterByCategory('Plat principal', this)">
                <span class="pill-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.16-3.37-3.5-7.52-3.5S1 12.83 1 14.99v1h15.03v-1z"/>
                    </svg>
                </span>
                Plats
            </div>

            <div class="pill" onclick="filterByCategory('Dessert', this)">
                <span class="pill-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 6c1.11 0 2-.89 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.11.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 17.64 5.88 18 4.96 18c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-3.61c-.56.38-1.23.61-1.96.61-1 0-1.85-.38-2.44-.99zM20 9h-4V7h-2v2H10V7H8v2H4c-1.1 0-2 .9-2 2v2.81c0 .79.46 1.52 1.2 1.82.75.31 1.6.14 2.16-.43l2.08-2.08 2.08 2.08c.76.76 2 .76 2.77 0l2.07-2.08 2.08 2.08c.56.56 1.41.74 2.16.43.74-.3 1.2-1.03 1.2-1.82V11c0-1.1-.9-2-2-2z"/>
                    </svg>
                </span>
                Desserts
            </div>

        </div>
    </div>

    <div class="section">
        <div class="section-header">
            <div class="section-title">
                <span class="section-title-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#FF6B3D">
                        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8c0-5.39-2.59-10.2-6.5-13.33z"/>
                    </svg>
                </span>
                Recettes tendance
            </div>
        </div>
        <div class="recipes-grid" id="recipesGrid"></div>

        <div style="text-align:center;margin-top:40px;">
            <button class="btn btn-secondary btn-lg" id="loadMoreBtn" onclick="loadMore()" style="display:none;">
                Afficher plus &#8595;
            </button>
        </div>
    </div>

    <script>
        const USER_LOGGED_IN = <?php echo $is_logged ? 'true' : 'false'; ?>;
        const USER_ID        = <?php echo $user_id ?: 'null'; ?>;
        const USER_FAVORITES = <?php echo json_encode($favorites); ?>;
    </script>
    <script src="data/recipes-data.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
