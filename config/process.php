<?php

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name =  $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "zidanherlangga24@gmail.com";
    $header = "From: $email";

    if(mail($to, $subject, $message, $header)){
        echo "Email sent!";
    } else {
        echo "Email sending failed";
    }
}

?>