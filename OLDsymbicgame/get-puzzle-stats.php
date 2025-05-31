<?php
header('Content-Type: application/json');

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$db = new mysqli('sql13.bravehost.com', 'symbic', 'symbic99!', 'symbic_820545');

if ($db->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $db->connect_error]);
    exit;
}

// Query to get puzzles grouped by size
$query = "SELECT size, difficulty, puzzle_name 
          FROM puzzles 
          WHERE size IN (6, 8, 10) 
          ORDER BY size, difficulty";

$result = $db->query($query);

if (!$result) {
    http_response_code(500);
    echo json_encode(['error' => 'Query failed: ' . $db->error]);
    exit;
}

// Organize data by size
$puzzles = [];
while ($row = $result->fetch_assoc()) {
    $size = (int)$row['size'];
    if (!isset($puzzles[$size])) {
        $puzzles[$size] = [];
    }
    $puzzles[$size][] = [
        'name' => $row['puzzle_name'],
        'difficulty' => (float)$row['difficulty']
    ];
}

// Return the data as JSON
echo json_encode($puzzles);

$db->close();
?> 