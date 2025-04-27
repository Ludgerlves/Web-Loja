<?php
header('Content-Type: application/json');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];


switch ($uri) {
    case '/api/utilizador':
        require_once __DIR__ . 'api/utilizador.php';
        break;

    case '/api/autenticacao':
        require_once __DIR__ . 'api/autenticacao.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Rota não encontrada']);
        break;
}