<?php

$email = $_GET['email'];
$phone = $_GET['phone'];
$city = $_GET['city'];
$pallets = $_GET['pallets'];

$txt = <<<HERE
Pallets = $pallets
Phone = $phone
Email = $email
City = $city
HERE;

$to = "support@geeklogisticsinc.com";
$subject = "New Quotation";
$headers = "From: noreply@geeklogisticsinc.com";
mail($to,$subject,$txt,$headers);
header("location: index.html?sent=true")
?> 


