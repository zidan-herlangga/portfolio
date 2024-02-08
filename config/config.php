<?php

// Menghubungkan ke Database
$conn = new mysqli("localhost", "id20676677_zidan", "Db_portfolio1", "id20676677_portfolio");

if($conn->connect_error){
    echo "Connected Failed!";
}


if(isset($_POST["submit"])){
    $username = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $sql = "INSERT INTO contact (name, email, subject, message) VALUES ('$username', '$email', '$subject', '$message')";
    
    if ($conn->query($sql)){
        echo "<script>alert('Your message has been sent!');</script>";
        echo "<script>window.location='index.php';</script>";
    }
}

?>