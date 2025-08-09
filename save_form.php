<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form values safely
    $name = trim($_POST['fullName'] ?? '');
    $guests = trim($_POST['guestCount'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Prepare the text line to save
    $entry = date("Y-m-d H:i:s") . " | Name: $name | Guests: $guests | Message: $message" . PHP_EOL;

    // File path (will be created if it doesn't exist)
    $filePath = __DIR__ . "/form_submissions.txt";

    // Append to the file
    if (file_put_contents($filePath, $entry, FILE_APPEND | LOCK_EX)) {
        echo "Շնորհակալություն, Ձեր մասնակցությունը գրանցված է։";
    } else {
        http_response_code(500);
        echo "Չհաջողվեց պահպանել տվյալները։";
    }
}
?>
