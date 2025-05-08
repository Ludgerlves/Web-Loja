<?php
require_once (__DIR__ . '/../controller/UtilizadorController.php');

header("Access-Control-Allow-Origin: http://localhost:5173"); // ou "*" durante desenvolvimento
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        UtilizadorController::getAllUsers();
        break;
    case 'POST':
        UtilizadorController::createUser();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método não permitido']);
        break;
}