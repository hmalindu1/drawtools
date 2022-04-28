<?php
 
require_once 'dbconfig.php';

/*
$lat = $_POST['latitude'];
$lon = $_POST['longitude'];
*/

$lat = $_GET['latitude'];
$lon = $_GET['longitude'];
$pointid = $_GET['point'];

$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";
 
try{
 $conn = new PDO($dsn);
if($conn)
 {

$Data=array();
$i=0;


$sth = $conn->prepare("update pointlayer set latitude = ".$lat.",longitude = ".$lon.",geom = ST_SetSRID(ST_MakePoint(".$lon.",".$lat."),4326), centerpoint = ST_Centroid(ST_SetSRID(ST_MakePoint(".$lon.",".$lat."),4326)) where centerpoint in (select centerpoint from pointlayer where id = ".$pointid.")");
  


/*
$sth = $conn->prepare("update pointlayer 
set latitude =6.82906813227044,
longitude = 80.9907747640535,
geom = ST_SetSRID(ST_MakePoint(80.9907747640535,6.82906813227044),4326),
centerpoint = ST_Centroid(ST_SetSRID(ST_MakePoint(80.9907747640535,6.82906813227044),4326))
where centerpoint in (select centerpoint from pointlayer where id = 13733)");
*/

/*

update pointlayer 
set latitude =6.82906813227044,
longitude = 80.990999,
geom = ST_SetSRID(ST_MakePoint(80.990999,6.82906813227044),4326),
centerpoint = ST_Centroid(ST_SetSRID(ST_MakePoint(80.990999,6.82906813227044),4326))
where centerpoint in (select centerpoint from pointlayer where id = 13733)

*/



  $sth->execute();   
              


 }
}
catch (PDOException $e)
{
 echo $e->getMessage();
}


?>
