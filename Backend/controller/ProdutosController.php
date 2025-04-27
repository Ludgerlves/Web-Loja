<?php 
require_once (__DIR__ . '/../Models/Produtos.php');

class ProdutoController{

        public static function getAllProdutos(){
            $produtos=Produto::getAll();
            echo json_encode($produtos);
        }

        public static function getProdutoID($id){
            $produto = Produto::EncontrarPeloId($id);
            if ($produto) {
                echo json_encode($produto);
            }else{
                http_response_code(404);
                echo json_encode(['erro' => 'Produto nao encontrado']);
            }
        }

}


?>