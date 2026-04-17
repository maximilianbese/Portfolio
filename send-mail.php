<?php
// CORS & Header für JSON-Antwort
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// ════════════════ KONFIGURATION ════════════════
// 1. Hier kommt die Mail an (dein privates Postfach)
$empfaengerEmail = "maximilian-bese@gmx.de"; 

// 2. Deine offizielle Netcup-Adresse (muss in Plesk angelegt sein!)
$absenderSystem  = "contact@maximilian-bese.de"; 
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

    // Daten aus dem Formular abgreifen
    $visitorName    = $params->name ?? 'Unbekannter Absender';
    $visitorEmail   = $params->email ?? '';
    $visitorMessage = $params->message ?? '';

    // Validierung
    if (!filter_var($visitorEmail, FILTER_VALIDATE_EMAIL) || empty($visitorName) || empty($visitorMessage)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid input data']);
        exit;
    }

    // Bereinigung für die E-Mail
    $safeName    = htmlspecialchars($visitorName, ENT_QUOTES, 'UTF-8');
    $safeEmail   = htmlspecialchars($visitorEmail, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($visitorMessage, ENT_QUOTES, 'UTF-8'));

    // Betreffzeile
    $subject = "Portfolio-Anfrage von: $safeName";

    // E-Mail Inhalt (HTML)
    $mailBody = "
        <html>
        <head><title>Kontaktanfrage</title></head>
        <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
            <h2 style='color: #333;'>Neue Nachricht von deinem Portfolio</h2>
            <p><strong>Name:</strong> {$safeName}</p>
            <p><strong>E-Mail:</strong> <a href='mailto:{$safeEmail}'>{$safeEmail}</a></p>
            <hr style='border: 0; border-top: 1px solid #eee;'>
            <p><strong>Nachricht:</strong><br>{$safeMessage}</p>
        </body>
        </html>
    ";

    // ════════════════ HEADER FÜR GMX OPTIMIERT ════════════════
    $headers   = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    
    // HIER PASSIERT DIE MAGIE: 
    // GMX zeigt dir "$safeName" als Absender an, nutzt aber technisch $absenderSystem
    $headers[] = "From: $safeName <$absenderSystem>";
    
    // Wenn du auf "Antworten" klickst, geht die Mail an den Besucher
    $headers[] = "Reply-To: $visitorEmail";
    
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    // Versand mit dem "-f" Parameter (wichtig für Netcup Spam-Filter)
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