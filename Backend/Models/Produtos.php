<?php 
require_once __DIR__ . '/../database/connectDB.php';

class Produto{

    public static function getAll(){
        global $pdo;
        $stmt=$pdo->query('Select * from produtos');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    public static function EncontrarPeloId($id){
        global $pdo;
        $stmt = $pdo->prepare('Select * from produtos Where id = ?');
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public static function criar($nome, $preco, $stock) {
        global $pdo;
        $stmt = $pdo->prepare('insert into produtos (nome, preco, stock) Values(?, ?, ?)');
        return $stmt->execute([$nome, $preco, $stock]);
    }
}

?>