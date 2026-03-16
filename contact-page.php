<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $number = htmlspecialchars(trim($_POST['number'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    $mail = new PHPMailer(true);

    try {

        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'reymould.technology@gmail.com';      // Gmail address
        $mail->Password   = 'Reymould@123';         // Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email settings
        $mail->setFrom('reymould.technology@gmail.com', 'Holidaz Website');
        $mail->addAddress('packages@holidaz.com');

        // Reply back to the person who submitted the form
        $mail->addReplyTo($email, $name);

        // Email content
        $mail->Subject = "Enquiry from Holidaz Website";

        $mail->Body = "Name: $name\n"
                    . "Email: $email\n"
                    . "Number: $number\n"
                    . "Message:\n$message";

        // Send email
        $mail->send();

        header("Location: .?emailSuccess=true");

    } catch (Exception $e) {

        header("Location: .?emailSuccess=false");

    }

    exit;
}
?>