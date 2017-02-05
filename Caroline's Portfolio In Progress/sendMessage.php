<?php
if(isset($_POST['sendMessage'])) {
    $to = 'williamli15@yahoo.com';
    $name = $_POST['name'];
    $subject = 'Message from website.';
    $email = $_POST['email'];
    $message = $_POST['msg'];
    $final_message = "{$name}:\r\n{$message}";

    mail($to, $subject, $final_message);

    echo "Thanks for your message!";
}
?> 