<?php
// router.php
if (file_exists(__DIR__ . parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH))) {
    return false; // deixa o PHP servir o arquivo diretamente
} else {
    include_once("index.php"); // se não existir, joga tudo para o index.php
}
?>