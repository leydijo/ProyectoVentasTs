<?php
include_once('db.php');
//Recibo datos Formulario
$Id_cliente=$_POST['Id_cliente'];
$Nombre=$_POST['Nombre'];
$Apellido=$_POST['Apellido'];
$Identificacion=$_POST['Identificacion'];
$Num_factura=$_POST['Num_factura'];
$Fecha_factura=$_POST['Fecha_factura'];
$Nombre_vendedor=$_POST['Nombre_vendedor'];
$Id_ventas=$_POST['Id_ventas'];



    $conectar=conn();//ejecuta las conexiones a la db
    $sql="INSERT INTO Clientes (Id_cliente, Identificacion, Nombre, Apellido)
    VALUES ('$Id_cliente','$Identificacion','$Nombre','$Apellido')";
    $resul = mysqli_query($conectar,$sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

    $sql="INSERT INTO Ventas_datalle (Num_factura, Fecha_factura, Nombre_vendedor, Id_ventas)
    VALUES ('$Num_factura','$Fecha_factura','$Nombre_vendedor','$Id_ventas')";
    $resul = mysqli_query($conectar,$sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

        echo"$sql";
?>