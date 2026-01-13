<?php
session_start();

// Load environment variables
require_once __DIR__ . '/config/env.php';

// Load PHPMailer if available
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}

// Configuration
define('CONTACT_EMAIL', 'ohakwemuna@gmail.com'); 
define('CONTACT_NAME', 'Ohakwe Love');

// Response function
function sendJsonResponse($success, $message, $data = []) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
    exit;
}

// Validate and sanitize input
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Validate email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Rate limiting (simple session-based)
function checkRateLimit() {
    if (!isset($_SESSION['last_email_time'])) {
        $_SESSION['last_email_time'] = time();
        return true;
    }
    
    $timeSinceLastEmail = time() - $_SESSION['last_email_time'];
    if ($timeSinceLastEmail < 60) {
        return false;
    }
    
    $_SESSION['last_email_time'] = time();
    return true;
}

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(false, 'Invalid request method');
}

// Rate limiting check
if (!checkRateLimit()) {
    sendJsonResponse(false, 'Please wait a moment before sending another message');
}

// Get and validate form data
$name = isset($_POST['name']) ? sanitizeInput($_POST['name']) : '';
$email = isset($_POST['_replyto']) ? sanitizeInput($_POST['_replyto']) : '';
$subject = isset($_POST['subject']) ? sanitizeInput($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Please enter a valid name';
}

if (empty($email) || !isValidEmail($email)) {
    $errors[] = 'Please enter a valid email address';
}

if (empty($subject) || strlen($subject) < 3) {
    $errors[] = 'Please enter a valid subject';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Please enter a message (minimum 10 characters)';
}

if (!empty($errors)) {
    sendJsonResponse(false, 'Validation failed', ['errors' => $errors]);
}

// Try to send email using PHPMailer
function sendEmailWithPHPMailer($name, $email, $subject, $message) {
    // Check if PHPMailer class exists
    if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
        error_log("PHPMailer class not found. Please run: composer require phpmailer/phpmailer");
        return false;
    }
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = getenv('SMTP_USERNAME') ?: CONTACT_EMAIL;
        $mail->Password   = getenv('SMTP_PASSWORD') ?: '';
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = getenv('SMTP_PORT') ?: 587;
        
        // Check if password is set
        if (empty($mail->Password)) {
            error_log("SMTP Password not set in .env file");
            return false;
        }
        
        // Recipients
        $mail->setFrom(CONTACT_EMAIL, CONTACT_NAME);
        $mail->addAddress(CONTACT_EMAIL, CONTACT_NAME);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = "Portfolio Contact: $subject";
        $mail->Body    = "
            <html>
            <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
                <div style='max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;'>
                    <h2 style='color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;'>
                        Contact Messages
                    </h2>
                    <div style='background-color: white; padding: 20px; margin-top: 20px; border-radius: 5px;'>
                        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
                        <p><strong>Email:</strong> <a href='mailto:$email'>" . htmlspecialchars($email) . "</a></p>
                        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
                        <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
                        <p><strong>Message:</strong></p>
                        <p style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</p>
                    </div>
                    <p style='margin-top: 20px; font-size: 12px; color: #666;'>
                        This message was sent from your portfolio contact form
                    </p>
                </div>
            </body>
            </html>
        ";
        $mail->AltBody = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
        
        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer Error: {$mail->ErrorInfo}");
        return false;
    }
}

// Fallback: Native PHP mail function (won't work on Windows without mail server)
function sendEmailNative($name, $email, $subject, $message) {
    error_log("Native mail() function called - this requires a mail server configured");
    
    $to = CONTACT_EMAIL;
    $email_subject = "Portfolio Contact: $subject";
    
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $email_body = "
        <html>
        <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
            <div style='max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;'>
                <h2 style='color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;'>
                    New Contact Form Submission
                </h2>
                <div style='background-color: white; padding: 20px; margin-top: 20px; border-radius: 5px;'>
                    <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
                    <p><strong>Email:</strong> <a href='mailto:$email'>" . htmlspecialchars($email) . "</a></p>
                    <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
                    <hr style='border: none; border-top: 1px solid #ddd; margin: 20px 0;'>
                    <p><strong>Message:</strong></p>
                    <p style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</p>
                </div>
                <p style='margin-top: 20px; font-size: 12px; color: #666;'>
                    This message was sent from your portfolio contact form
                </p>
            </div>
        </body>
        </html>
    ";
    
    return @mail($to, $email_subject, $email_body, $headers);
}

// Try PHPMailer first, then fall back to native mail
$emailSent = sendEmailWithPHPMailer($name, $email, $subject, $message);

if (!$emailSent) {
    error_log("PHPMailer failed, attempting native mail()");
    $emailSent = sendEmailNative($name, $email, $subject, $message);
}

// Log to database (optional)
try {
    $pdo = new PDO(
        "mysql:host=" . getenv('DB_HOST') . ";dbname=" . getenv('DB_NAME'),
        getenv('DB_USER'),
        getenv('DB_PASS')
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("
        INSERT INTO contact_messages (name, email, subject, message, email_sent, created_at) 
        VALUES (:name, :email, :subject, :message, :email_sent, NOW())
    ");
    
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':subject' => $subject,
        ':message' => $message,
        ':email_sent' => $emailSent ? 1 : 0
    ]);
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    // Don't fail if database logging fails
}

if ($emailSent) {
    sendJsonResponse(true, 'Thank you! Your message has been sent successfully.');
} else {
    sendJsonResponse(false, 'Sorry, there was an error sending your message. Please try again later or contact me directly at ' . CONTACT_EMAIL);
}