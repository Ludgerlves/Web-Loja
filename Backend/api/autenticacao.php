<?php 
require_once __DIR__ . '/../controller/AutentController.php';

$methodoHTTP= $_SERVER['REQUEST_METHOD'];

switch ($methodoHTTP) { 
    case 'POST':
        AutentController::login();
        break;
    
    default:
        http_response_code(405);
        echo json_encode(['erro' => 'Metodo nao permitido']);
        break;
}

?>