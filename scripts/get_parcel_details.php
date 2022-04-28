<?php
include "../includes/init.php"; // including data base connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // checking the server request methord, if that successful then below execute
    $id = $_POST['id'];
    $sql = 'SELECT get_parcel(:id)';
    // echo $sql;
    $stmt = $pdo->prepare($sql); // prepareing the sql as a pdo statement
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    $query = $stmt->fetchObject();
    // $query = $pdo->query($sql); // query executing
    // $var_dump($query);
    // $geojson = array(
    //     'type' => 'FeatureCollection',
    //     'features' => array(),
    // );
    // foreach ($query as $row) {
    //     $feature = array
    //         (
    //         'type' => 'Feature',

    //         'geometry' => json_decode($row['geojson'], true),
    //         'properties' => array
    //         (
    //             'name' => $row['gid'],
    //             'sl_level' => $row['sl_level'],
    //             'id' => $row['p_id'],
    //         ),
    //     );
    //     array_push($geojson['features'], $feature);
    // }

    // pg_close($dsn);
    // header('Content-type: application/json', true);
    echo $query->get_parcel;
}
