<?php


$name = $_POST['name'];
$phone = $_POST['phone'];
$subject = "Booking Request";
$guestCount = $_POST['guest'];
$arrivalDate = $_POST['arrival'];
$departureDate = $_POST['departure'];
$extraBed = $_POST['bed'];

echo $name, " ======== ", $phone, " ======== ", $subject, " ======== ", $guestCount;

$to = "toro.rahul@gmail.com";
$to2 = "rkumarkumawat@protonmail.com";

$message = "Name: " . $name . "\n" . "phone: " . $phone . "\n" . "Subject: " . $subject . "\n" . "guestCount: " . $guestCount;

$headers = "From: " . "booking@kandanvally.com";


try {
    mail($to, $subject, $message, $headers);
    echo "<h1>Sent Successfully! Thank you" . " " . $name . ", We will contact you shortly!</h1>";
} catch (Exception $e) {
    echo "<h1>Something went wrong! Please try again later.</h1>";
}
try {
    mail($to2, $subject, $message, $headers);
    echo "<h1>Sent Successfully! Thank you" . " " . $name . ", We will contact you shortly!</h1>";
} catch (Exception $e) {
    echo "<h1>Something went wrong! Please try again later.</h1>";
}


?>

<script>
    setTimeout(function() {
        window.location.href = "index.php";
    }, 3000);
</script>