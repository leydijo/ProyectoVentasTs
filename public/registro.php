<?php
include_once('db.php');
//Recibo datos Formulario
$Id_cliente=$_POST['Id_cliente'];
$Nombre=$_POST['Nombre'];
$Apellido=$_POST['Apellido'];
$Identificacion=$_POST['Identificacion'];

    $conectar=conn();//ejecuta las conexiones a la db
    $sql="INSERT INTO Clientes (Id_cliente, Identificacion, Nombre, Apellido)
    VALUES ('$Id_cliente','$Nombre','$Apellido','$Identificacion')";
    $resul = mysqli_query($conectar,$sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

        echo"$sql";
?>