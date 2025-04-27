<?php
require_once (__DIR__ . '/../controller/UtilizadorController.php');

header('Content-Type: application/json');

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