<?php 
/*
    
require_once __DIR__ . '/database/connectDB.php';

header('Content-Type: application/json');

$dados = json_decode(file_get_contents("php://input"), true);

if ($dados === null) {
    echo json_encode(['status' => 'erro', 'mensagem' => 'Dados inválidos']);
    exit;
}

$nome = $dados['nome'] ?? '';
$email = $dados['email'] ?? '';
$senha = $dados['senha'] ?? '';

if (empty($email) || empty($senha) || empty($nome)) {
    echo json_encode(['status'=>'erro', 'mensagem' =>'Preencha todos os campos']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status'=>'erro', 'mensagem' =>'Email inválido']);
    exit;
}

$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)");
    $stmt->execute([$nome, $email, $senhaHash]);
    echo json_encode(['status' => 'sucesso', 'mensagem' => 'Usuário cadastrado com sucesso']);
} catch (PDOException $e) {
    if ($e->getCode() == 23000) { // Código de erro para violação de chave única
        echo json_encode(['status' => 'erro', 'mensagem' => 'Email já cadastrado']);
    } else {
        error_log('Erro ao cadastrar usuário: ' . $e->getMessage());
        echo json_encode(['status' => 'erro', 'mensagem' => 'Ocorreu um erro ao processar sua solicitação.']);
    }
}
?>