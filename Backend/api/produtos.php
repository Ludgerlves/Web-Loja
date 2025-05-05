<?php 
require_once __DIR__ .'/../controller/ProdutosController.php';

$metodoHTTP=$_SERVER['REQUEST_METHOD'];

switch ($metodoHTTP) {
    case 'GET':
        if (isset($_GET['id'])) {
            ProdutoController::getProdutoID($_GET['id']);
        }
        else {
            ProdutoController::getAllProdutos();
        }
        break;
    
    default:
        http_response_code(405);
        echo json_encode(['erro' => 'Metodo nao permitido']);
        break;
}

?>