<?php

//conectamos el servidor de la BD y el @antes de mysql es para que no de errores//

$conectar= @mysql_connect('localhost','root', '');

//verificamos si la conexion es correcta//

if(!$conectar){
    echo"No se pudo conectar con el servidor";
}
else
//si se conecta correctamente creamos una variable llamada $base y seleccionamos nuestraa base de datos
{
    $base=mysql_select_db('formulario');

    //ahora verificaremos si encontramos nuestra base de datos en el servidor

    if(!formulario){ //si "BD formulario" no se ejecuta
        echo"No se encontro la base de datos";
    }
}
//Recuperar Variables del formulario o BD
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

//hacemos la sentencia de sql 
$sql="INSERT INTO datos VALUES('$nombre', '$email', '$mensaje')";

//ejecutamos la sentencia de aql
$ejecutar=mysql_query($sql);

//verificamos la ejecucion
if(!$ejecutar){ //si no se ejecuta
    echo "Hubo algun error";
}else{
    echo"Datos guardados correctamente<br><a href='index.html'>Volver</a>";
}
?>

