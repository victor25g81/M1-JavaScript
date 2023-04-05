<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $mensaje = $_POST["mensaje"];
    
        // Validación de los campos
        if (empty($nombre) || empty($email) || empty($mensaje)) {
            echo "Todos los campos son obligatorios. Por favor, completa el formulario.";
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Por favor, ingresa un email válido.";
        } else {
            echo "Formulario enviado con éxito!";
        }
    } else {
        echo "No es POST";
    }
?>
    