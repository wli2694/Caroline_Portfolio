<?php
if(isset($_POST['sendMessage'])) {
    $to = 'williamli15@yahoo.com';
    $name = $_POST['name'];
    $subject = 'Message from website!';
    $email = $_POST['email'];
    $message = $_POST['msg'];
    $final_message = "Name:{$name}\r\nEmail::{$email}\r\nMessage:{$message}";

    mail($to, $subject, $final_message);
    
    header("Location: http://carolinewin.com/contact.html");
}
?> 