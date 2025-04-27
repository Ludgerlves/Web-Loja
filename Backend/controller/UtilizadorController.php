<?php
require_once (__DIR__ . '/../Models/Utilizador.php');

class UtilizadorController {
    public static function getAllUsers() {
        $utilizadores = User::getAll();
        echo json_encode($utilizadores);
    }

    public static function createUser() {
        $data = json_decode(file_get_contents('php://input'), true);
        if (empty($data['name']) || empty($data['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Nome e email são obrigatórios']);
            return;
        }
        $result = User::create($data['name'], $data['email'], $data['password']);
        if ($result) {
            echo json_encode(['message' => 'Usuário criado com sucesso']);
        } else {
            http_response_code(500); // Erro interno do servidor
            echo json_encode(['error' => 'Erro ao criar usuário']);
        }
    }
}