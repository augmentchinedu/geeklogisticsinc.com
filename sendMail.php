<?php

$email = $_GET['email'];
$phone = $_GET['phone'];
$message = $_GET['message'];
$name = $_GET['name'];

$txt = <<<HERE
Name = $name
Phone = $phone
Email = $email
Message = $message
HERE;

$to = "support@geeklogisticsinc.com";
$subject = "Contact Message";
$headers = "From: noreply@geeklogisticsinc.com";
mail($to,$subject,$txt,$headers);
?> 


