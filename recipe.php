<?php
session_start();

$is_logged = isset($_SESSION['user_id']);
$username  = $is_logged ? $_SESSION['username'] : '';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recette - FlavorHub</title>
    <link rel="stylesheet" href="css/style.css">

    <style>
        .detail-hero {
            width: 100%;
            height: 400px;
            object-fit: cover;
            margin-top: var(--nav-h);
        }
        .detail-body {
            max-width: 820px;
            margin: 0 auto;
            padding: 40px 24px;
        }
        .back-btn {
            position: fixed;
            top: calc(var(--nav-h) + 20px);
            left: 24px;
            z-index: 100;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border: 1.5px solid var(--border);
            border-radius: 12px;
            color: var(--text);
            text-decoration: none;
            font-weight: 500;
        }
        .detail-category {
            display: inline-block;
            padding: 5px 12px;
            background: #fff0eb;
            color: #FF6B3D;
            border-radius: 99px;
            font-size: 0.78rem;
            font-weight: 600;
            margin-bottom: 16px;
            text-transform: uppercase;
        }
        .detail-meta {
            display: flex;
            gap: 24px;
            color: #6B7280;
            font-size: 0.88rem;
            margin-bottom: 28px;
            flex-wrap: wrap;
        }
        .detail-meta-item {
            display: flex;
            align-items: center;
            gap: 7px;
            background: #F3F4F6;
            border-radius: 10px;
            padding: 7px 14px;
        }
        .detail-meta-item svg {
            flex-shrink: 0;
        }
        .detail-meta-label {
            font-size: 0.72rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #9CA3AF;
            display: block;
            line-height: 1;
            margin-bottom: 2px;
        }
        .detail-meta-value {
            font-weight: 600;
            color: #111;
            font-size: 0.9rem;
            line-height: 1;
        }
        .detail-desc {
            color: #6B7280;
            line-height: 1.8;
            margin-bottom: 36px;
            font-size: 1rem;
        }
        .section-heading {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #111;
        }
        .section-heading-icon {
            width: 36px;
            height: 36px;
            background: #fff0eb;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .ingredients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 12px;
            margin-bottom: 40px;
        }
        .ingredient-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: #FAFAFA;
            border-radius: 12px;
            border: 1px solid #E5E7EB;
            font-size: 0.9rem;
        }
        .ingredient-dot {
            width: 8px;
            height: 8px;
            background: #FF6B3D;
            border-radius: 50%;
            flex-shrink: 0;
        }
        .steps-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding-bottom: 60px;
        }
        .step-item {
            display: flex;
            gap: 16px;
        }
        .step-num {
            width: 36px;
            height: 36px;
            background: #FF6B3D;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9rem;
            flex-shrink: 0;
        }
        .step-content {
            padding-top: 6px;
            line-height: 1.7;
            color: #111;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
    </style>
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
                <a href="index.php" class="nav-link">Recettes</a>
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

    <a href="index.php" class="back-btn">&#8592; Retour</a>

    <div id="recipeDetail">
        <div style="text-align:center;padding:100px 24px;">
            <div style="width:20px;height:20px;border:2px solid #E5E7EB;border-top-color:#FF6B3D;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 20px;"></div>
            <p>Chargement de la recette...</p>
        </div>
    </div>

    <script src="data/recipes-data.js"></script>
    <script>
    /* ============================================================
       SVG inline — tous fill définis explicitement, pas de CDN
    ============================================================ */

    /* --- Icones meta (gris #6B7280) --- */
    var SVG_CLOCK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#FF6B3D"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>';
    var SVG_PEOPLE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#FF6B3D"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>';
    var SVG_CHART = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#FF6B3D"><path d="M4 9h4v11H4zm6-4h4v15h-4zm6 8h4v7h-4z"/></svg>';

    /* --- Icones de section (orange) --- */
    var SVG_BASKET = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#FF6B3D"><path d="M17.21 9l-4.38-6.56a.994.994 0 0 0-1.66 0L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27A2 2 0 0 0 5.5 21h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>';
    var SVG_BOOK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#FF6B3D"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>';

    /* --- Icone erreur --- */
    var SVG_FROWN = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="#D1D5DB"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 5.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>';

    /* ============================================================ */

    function loadRecipe() {
        var params = new URLSearchParams(window.location.search);
        var id = parseInt(params.get("id"));

        if (!id) { showError("ID de recette manquant"); return; }

        var recipe = null;
        for (var i = 0; i < RECIPES_DATA.length; i++) {
            if (RECIPES_DATA[i].id === id) { recipe = RECIPES_DATA[i]; break; }
        }

        if (!recipe) { showError("Recette introuvable (ID : " + id + ")"); return; }

        renderRecipe(recipe);
    }

    function renderRecipe(r) {
        /* -- Ingrédients -- */
        var ingredientsHTML = "";
        if (r.ingredients && r.ingredients.length > 0) {
            for (var i = 0; i < r.ingredients.length; i++) {
                ingredientsHTML += "<div class='ingredient-item'><div class='ingredient-dot'></div>" + r.ingredients[i] + "</div>";
            }
        } else {
            ingredientsHTML = "<p style='color:#6B7280'>Aucun ingrédient listé.</p>";
        }

        /* -- Étapes -- */
        var stepsHTML = "";
        if (r.steps && r.steps.length > 0) {
            for (var j = 0; j < r.steps.length; j++) {
                stepsHTML += "<div class='step-item'><div class='step-num'>" + (j+1) + "</div><div class='step-content'>" + r.steps[j] + "</div></div>";
            }
        } else {
            stepsHTML = "<p style='color:#6B7280'>Aucune étape décrite.</p>";
        }

        var html = "";
        html += "<img class='detail-hero' src='" + r.image + "' alt='" + r.title + "' onerror=\"this.src='https://via.placeholder.com/800x400?text=No+Image'\">";
        html += "<div class='detail-body'>";
        html += "<div class='detail-category'>" + r.category + "</div>";
        html += "<h1 style='font-size:2rem;margin-bottom:20px;'>" + r.title + "</h1>";

        /* -- Meta cards -- */
        html += "<div class='detail-meta'>";
        html += "<div class='detail-meta-item'>" + SVG_CLOCK +
                "<div><span class='detail-meta-label'>Temps</span><span class='detail-meta-value'>" + (r.time || "30 min") + "</span></div></div>";
        html += "<div class='detail-meta-item'>" + SVG_PEOPLE +
                "<div><span class='detail-meta-label'>Portions</span><span class='detail-meta-value'>" + (r.servings || "4 pers.") + "</span></div></div>";
        html += "<div class='detail-meta-item'>" + SVG_CHART +
                "<div><span class='detail-meta-label'>Difficulté</span><span class='detail-meta-value'>" + (r.difficulty || "Moyen") + "</span></div></div>";
        html += "</div>";

        html += "<p class='detail-desc'>" + (r.description || "Aucune description disponible.") + "</p>";

        /* -- Section Ingrédients -- */
        html += "<div class='section-heading'><div class='section-heading-icon'>" + SVG_BASKET + "</div>Ingrédients</div>";
        html += "<div class='ingredients-grid'>" + ingredientsHTML + "</div>";

        /* -- Section Préparation -- */
        html += "<div class='section-heading'><div class='section-heading-icon'>" + SVG_BOOK + "</div>Préparation</div>";
        html += "<div class='steps-list'>" + stepsHTML + "</div>";

        html += "</div>"; /* .detail-body */

        document.getElementById("recipeDetail").innerHTML = html;
    }

    function showError(msg) {
        document.getElementById("recipeDetail").innerHTML =
            "<div style='text-align:center;padding:100px 24px;'>" +
            "<div style='margin-bottom:20px;'>" + SVG_FROWN + "</div>" +
            "<h2 style='margin-bottom:12px;'>" + msg + "</h2>" +
            "<a href='index.php' style='display:inline-block;margin-top:20px;padding:12px 24px;background:#FF6B3D;color:white;border-radius:14px;text-decoration:none;font-weight:600;'>Retour aux recettes</a>" +
            "</div>";
    }

    loadRecipe();
    </script>
</body>
</html>
