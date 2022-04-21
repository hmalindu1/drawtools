<?php
$host = 'localhost';
$db = 'info_bhoomi';
$user = 'postgres';
$pass = 'bandarawela';
$port = '5432';

$dsn = "pgsql:host=$host;dbname=$db;port=$port";

$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    //code...
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    //throw $th;
    echo "Error: " . $e->getMessage() . "<br>";
    echo "Line Number: " . $e->getLine();
}
?>