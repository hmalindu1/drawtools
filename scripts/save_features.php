<?php
include "../includes/init.php"; // including data base connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // checking the server request methord, if that successful then below execute
    // $type = $_POST['type_of_geom']; //  POST method data type
    // $name = $_POST['name_of_geom']; //  POST method data type
    $string_geom = $_POST['string_of_geom']; //  POST method data type
    try {
        $sql = "INSERT INTO parcels (geom) VALUES (ST_Multi(ST_GeomFromGeoJSON('$string_geom')))"; // query for the record inserting
        $query = $pdo->query($sql); // query executing
    } catch (PDOException $e) {
        echo "Error <br><br>" . $e->getMessage() . "<br>";
        echo "Line Number: " . $e->getLine();
    }
}