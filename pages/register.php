<?php
session_start();

if (isset($_SESSION['user_id'])) {
    header("Location: ../index.php");
    exit();
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once '../php/config.php';

    $prenom   = mysqli_real_escape_string($conn, trim($_POST['firstName']));
    $nom      = mysqli_real_escape_string($conn, trim($_POST['lastName']));
    $email    = mysqli_real_escape_string($conn, trim($_POST['email']));
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $check = mysqli_query($conn, "SELECT id FROM utilisateurs WHERE email = '$email'");

    if (mysqli_num_rows($check) > 0) {
        $error = 'Cet email est déjà utilisé. Veuillez vous connecter.';
    } else {
        mysqli_query($conn, "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe) VALUES ('$prenom', '$nom', '$email', '$password')");
        header("Location: login.php?registered=1");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer un compte — FlavorHub</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/auth.css">
</head>

<body>

    <nav>
        <div class="nav-inner">
            <div class="nav-logo" onclick="location.href='../index.php'">
                <div class="logo-icon">🍴</div>
                FlavorHub
            </div>
            <div class="nav-links">
                <a href="../index.php" class="nav-link">Recettes</a>
                <a href="login.php" class="nav-link">Connexion</a>
                <a href="register.php" class="nav-link active"
                    style="background:var(--primary);color:white;padding:8px 16px;border-radius:10px;">
                    Créer un compte
                </a>
            </div>
        </div>
    </nav>

    <div class="auth-container">

        <div class="auth-left">
            <h1>Bienvenue sur<br>FlavorHub</h1>
            <p class="auth-icon">🍴</p>
            <p>
                La plateforme qui réunit les passionnés de cuisine du monde entier.
                Partagez, découvrez et savourez.
            </p>
        </div>

        <div class="auth-right">
            <h2>Créer un compte</h2>
            <p class="auth-sub">Gratuit, toujours.</p>

            <?php if ($error): ?>
                <div style="background:#fff0eb;color:#e53e3e;padding:12px 16px;border-radius:10px;margin-bottom:16px;font-size:0.9rem;">
                    <?php echo htmlspecialchars($error); ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="register.php">

                <div class="auth-row">
                    <div class="auth-field">
                        <label for="firstName">Prénom</label>
                        <input type="text" id="firstName" name="firstName" required autocomplete="given-name">
                    </div>
                    <div class="auth-field">
                        <label for="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" required autocomplete="family-name">
                    </div>
                </div>

                <div class="auth-field">
                    <label for="email">Adresse email</label>
                    <input type="email" id="email" name="email" required autocomplete="email">
                </div>

                <div class="auth-field">
                    <label for="password">Mot de passe</label>
                    <div class="auth-password-wrap">
                        <input type="password" id="password" name="password" required autocomplete="new-password" minlength="8">
                        <span class="auth-eye" onclick="togglePassword('password', this)"></span>
                    </div>
                </div>

                <button type="submit" class="auth-btn">
                    Créer mon compte →
                </button>

            </form>

            <p class="auth-divider">Ou</p>

            <p class="auth-footer-link">
                Déjà membre ?
                <a href="login.php">Se connecter</a>
            </p>
        </div>

    </div>

    <script>
        function togglePassword(id, eye) {
            const input = document.getElementById(id);
            input.type = input.type === 'password' ? 'text' : 'password';
            eye.style.opacity = input.type === 'text' ? '1' : '0.4';
        }
    </script>

</body>

</html>
