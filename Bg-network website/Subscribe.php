<?php

header('Content-Type: application/json');

// =========================================
// DATABASE CONNECTION
// =========================================

$host = "localhost";
$username = "root";
$password = "";
$database = "bgnetwork";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

// Check database connection
if ($conn->connect_error) {

    echo json_encode([
        "status" => "error",
        "message" => "Unable to connect to the database."
    ]);

    exit;
}


// =========================================
// CHECK REQUEST METHOD
// =========================================

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "status" => "error",
        "message" => "Invalid request."
    ]);

    $conn->close();

    exit;
}


// =========================================
// GET FORM DATA
// =========================================

$first_name = trim($_POST["first_name"] ?? "");
$surname = trim($_POST["surname"] ?? "");
$country = trim($_POST["country"] ?? "");
$email = trim($_POST["email"] ?? "");


// =========================================
// VALIDATE FIRST NAME
// =========================================

if (empty($first_name)) {

    echo json_encode([
        "status" => "error",
        "message" => "Please enter your first name."
    ]);

    $conn->close();

    exit;
}


// =========================================
// VALIDATE SURNAME
// =========================================

if (empty($surname)) {

    echo json_encode([
        "status" => "error",
        "message" => "Please enter your surname."
    ]);

    $conn->close();

    exit;
}


// =========================================
// VALIDATE COUNTRY
// =========================================

if (empty($country)) {

    echo json_encode([
        "status" => "error",
        "message" => "Please select your country."
    ]);

    $conn->close();

    exit;
}


// =========================================
// VALIDATE EMAIL
// =========================================

if (empty($email)) {

    echo json_encode([
        "status" => "error",
        "message" => "Please enter your email address."
    ]);

    $conn->close();

    exit;
}


// Check email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "status" => "error",
        "message" => "Please enter a valid email address."
    ]);

    $conn->close();

    exit;
}


// =========================================
// CHECK IF EMAIL ALREADY EXISTS
// =========================================

$check = $conn->prepare(
    "SELECT id FROM subscribers WHERE email = ?"
);

$check->bind_param("s", $email);

$check->execute();

$check->store_result();


if ($check->num_rows > 0) {

    echo json_encode([
        "status" => "error",
        "message" => "This email address is already subscribed."
    ]);

    $check->close();

    $conn->close();

    exit;
}

$check->close();


// =========================================
// INSERT SUBSCRIBER
// =========================================

$stmt = $conn->prepare(
    "INSERT INTO subscribers
    (first_name, surname, country, email)
    VALUES (?, ?, ?, ?)"
);

$stmt->bind_param(
    "ssss",
    $first_name,
    $surname,
    $country,
    $email
);


// =========================================
// CHECK INSERT RESULT
// =========================================

if ($stmt->execute()) {

    echo json_encode([
        "status" => "success",
        "message" => "Thank you, " . htmlspecialchars($first_name) . "! You have successfully subscribed to our newsletter."
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Something went wrong. Please try again."
    ]);

}


// =========================================
// CLOSE CONNECTION
// =========================================

$stmt->close();

$conn->close();

?>