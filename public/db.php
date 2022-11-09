<?php
//Configuracion para acceder a la base de datos
function conn(){
$hostname = "sql112.epizy.com";
$Usuariodb = "epiz_32773669";
$pasworddb = "wdG03379w27CCV";
$dbname = "epiz_32773669_FormVentas";

  //generando la conexion con el servidor
  $conectar = mysqli_connect($hostname, $Usuariodb, $pasworddb, $dbname);
  return $conectar;

}

?>