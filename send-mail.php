<?php
// CORS & Header für JSON-Antwort
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// ════════════════ KONFIGURATION ════════════════
$empfaengerEmail = "maximilian-bese@gmx.de"; 

// WICHTIG: Ersetze 'deine-domain.de' durch deine echte Domain bei Netcup!
$absenderSystem  = "maximilian-bese.de"; 
// ═══════════════════════════════════════════════

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
        exit;
    }

    // Daten aus JS (form.js) abgreifen
    $visitorName    = $params->name ?? '';
    $visitorEmail   = $params->email ?? '';
    $visitorMessage = $params->message ?? '';

    // Validierung
    if (!filter_var($visitorEmail, FILTER_VALIDATE_EMAIL) || empty($visitorName) || empty($visitorMessage)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid input data']);
        exit;
    }

    // Bereinigung für HTML-Mail
    $safeName    = htmlspecialchars($visitorName, ENT_QUOTES, 'UTF-8');
    $safeEmail   = htmlspecialchars($visitorEmail, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($visitorMessage, ENT_QUOTES, 'UTF-8'));

    $subject = "Portfolio Kontakt: $safeName";

    // E-Mail Inhalt
    $mailBody = "
        <html>
        <head><title>Kontaktanfrage</title></head>
        <body>
            <h2>Neue Nachricht von deinem Portfolio</h2>
            <p><strong>Name:</strong> {$safeName}</p>
            <p><strong>E-Mail:</strong> {$safeEmail}</p>
            <hr>
            <p><strong>Nachricht:</strong><br>{$safeMessage}</p>
        </body>
        </html>
    ";

    // Mail Header für Netcup optimiert
    $headers   = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: Portfolio Webseite <' . $absenderSystem . '>';
    $headers[] = 'Reply-To: ' . $visitorEmail; // Ermöglicht direktes Antworten in GMX
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    // Versand mit dem "-f" Parameter (erzwingt den Absender beim Server)
    $success = mail(
        $empfaengerEmail, 
        $subject, 
        $mailBody, 
        implode("\r\n", $headers), 
        "-f " . $absenderSystem
    );

    if ($success) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
    }
    exit;
}
