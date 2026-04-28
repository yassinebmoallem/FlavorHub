<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Non connecté']);
    exit();
}

require_once 'config.php';

$user_id   = (int) $_SESSION['user_id'];
$recipe_id = (int) $_POST['recipe_id'];

if ($recipe_id <= 0) {
    echo json_encode(['success' => false, 'message' => 'ID invalide']);
    exit();
}

$check = mysqli_query($conn, "SELECT id FROM favoris WHERE user_id = $user_id AND recipe_id = $recipe_id");

if (mysqli_num_rows($check) > 0) {
    mysqli_query($conn, "DELETE FROM favoris WHERE user_id = $user_id AND recipe_id = $recipe_id");
    echo json_encode(['success' => true, 'action' => 'removed']);
} else {
    mysqli_query($conn, "INSERT INTO favoris (user_id, recipe_id) VALUES ($user_id, $recipe_id)");
    echo json_encode(['success' => true, 'action' => 'added']);
}
?>
