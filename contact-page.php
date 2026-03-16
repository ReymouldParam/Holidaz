<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $number = htmlspecialchars(trim($_POST['number'] ?? ''));
    $dropMessage = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Set email recipients
    $to = "packages@holidaz.com";
    $subject = "Enquiry from Holidaz Website";
    $body = "Name: $name\nEmail: $email\nNumber: $number\nMessage:\n$dropMessage";

    // Email headers
    $headers = "From: Holidaz Website <noreply@holidaz.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email (no headers)
    $mailStatus = mail($to, $subject, $body, $headers);

    // Test emails
    mail("reymould.social@gmail.com", $subject, $body, $headers);
    mail("revanth.danduboina@reymould.com", $subject, $body, $headers);

    // Redirect based on success or failure
    if ($mailStatus) {
        header("Location: .?emailSuccess=true");
    } else {
        header("Location: .?emailSuccess=false");
    }
    exit;
}
?>