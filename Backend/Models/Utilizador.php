<?php
require_once __DIR__ . '/../database/connectDB.php';

class User {
    public static function getAll() {
        global $pdo;
        $stmt = $pdo->query('SELECT * FROM users');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function create($name, $email, $password) {
        global $pdo;
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
        return $stmt->execute([$name, $email, $hashedPassword]);
    }
    public static function EncontrarEmail($email){
        global $pdo;
        $stmt = $pdo->prepare('Select * from users Where email = ?');
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
};

