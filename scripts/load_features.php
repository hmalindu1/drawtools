<?php
include "../includes/init.php"; // including data base connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // checking the server request methord, if that successful then below execute
    $sql = "SELECT *, ST_AsGeoJSON(geom) AS geojson FROM allparcelsnew";
    // echo $sql;

    $query = $pdo->query($sql); // query executing

    $geojson = array(
        'type' => 'FeatureCollection',
        'features' => array(),
    );
    foreach ($query as $row) {
        $feature = array
            (
            'type' => 'Feature',

            'geometry' => json_decode($row['geojson'], true),
            'properties' => array
            ( 
                // 'sl_level' => $row['sl_level'],
                'id' => $row['gid'],
            ),
        );
        array_push($geojson['features'], $feature);
    }

    // pg_close($dsn);
    // header('Content-type: application/json', true);
    echo json_encode($geojson);
}
