<?php 

try {
    $dbPath = __DIR__ . '/database.db';

    if (!file_exists($dbPath)) {
        die("Erro: O arquivo do banco de dados não foi encontrado.");
    }

    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $erro) {
    error_log("Erro ao conectar ao banco de dados: " . $erro->getMessage());
    die("Erro ao conectar ao banco de dados. Tente novamente mais tarde.");
}
?>