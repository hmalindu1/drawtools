<?php
include "../includes/init.php"; // including data base connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // checking the server request methord, if that successful then below execute
    if (isset($_POST['id_of_feature'])) { // checking if there are data exist from the POST method 
        $id = $_POST['id_of_feature']; //  POST method data type
        try {
            $sql = "DELETE FROM parcels WHERE gid = :id"; // query for the record delete
            $stmnt = $pdo->prepare($sql); // prepareing the sql as a pdo statement
            $stmnt->execute([":id" => $id]); // executing the statement
        } catch (PDOException $e) {
            echo "Error <br><br>" . $e->getMessage() . "<br>";
            echo "Line Number: " . $e->getLine();
        }
    }
}
