<?php


$to = "shaescotten@gmail.com";

$name = $_POST['name'];

$email = $_POST['email'];

$message = $_POST['message'];

$fullmessage = "You have an email from your portfolio site. The email address is: $email. /n /n $message";

$subject = "New message from $name";

// use wordwrap() if lines are longer than 70 characters
$fullmessage = wordwrap($fullmessage,90);

// send email
mail($to, $subject, $fullmessage);

?>
