<?php 
    require_once __DIR__ . '/database/connectDB.php';

    $dados= json_decode(file_get_contents('php://input'),true);
    $email = $dados['email'] ?? '';
    $senha = $dados['senha'] ?? '';

    $stmt = $pdo->prepare("Select * from users where email = ?");
    $stmt->execute([$email]);
    $user=$stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($senha, $user['senha'])) {
        echo json_encode([
            'status'=>'sucesso',
            'mensagem'=> 'Login autorizado',
            'user_id' => $user['id']
        ]);
    }else {
        echo json_encode([
            'status'=> 'erro',
            'mensagem'=> 'Email ou senha incorrectos'
        ]);
    }




?>