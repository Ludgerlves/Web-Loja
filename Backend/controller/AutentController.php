<?php 
require_once __DIR__ . '/../Models/Utilizador.php.';

class AutentController{
    public static function login() {
        $dados = json_decode(file_get_contents('php://input'),true);
        if (empty($dados['email'])|| empty($dados['password'])) {
            http_response_code(400);
            echo json_encode(['erro' => 'Email e senha obrigatorios']);
            return;
        };

        $utilizador= User::EncontrarEmail($dados['email']);
        if (!$utilizador || !password_verify($dados['password'], $utilizador['password'])) {
            http_response_code(401);
            echo json_encode(['error' => 'Credenciais inválidas']);
        };
    }
}

?>