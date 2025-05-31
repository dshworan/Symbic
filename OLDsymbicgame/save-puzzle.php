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

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data: ' . json_last_error_msg()]);
    exit;
}

// Log the received data
error_log('Received data: ' . print_r($data, true));

// Check if puzzle already exists
$puzzleArray = json_encode($data['puzzle_array'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$checkStmt = $db->prepare("SELECT id, puzzle_name FROM puzzles WHERE puzzle_array = ?");
if (!$checkStmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to prepare check statement: ' . $db->error]);
    exit;
}

$checkStmt->bind_param('s', $puzzleArray);
$checkStmt->execute();
$result = $checkStmt->get_result();

if ($result->num_rows > 0) {
    $existingPuzzle = $result->fetch_assoc();
    echo json_encode([
        'success' => false,
        'message' => 'Puzzle already exists',
        'existing_id' => $existingPuzzle['id'],
        'existing_name' => $existingPuzzle['puzzle_name']
    ]);
    $checkStmt->close();
    $db->close();
    exit;
}
$checkStmt->close();

// Prepare the SQL statement for insertion
$stmt = $db->prepare("INSERT INTO puzzles (puzzle_name, size, missing, difficulty, puzzle_array, solution_array, solve_data) VALUES (?, ?, ?, ?, ?, ?, ?)");

if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to prepare statement: ' . $db->error]);
    exit;
}

// Bind parameters
$solutionArray = json_encode($data['solution_array'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$solveData = json_encode($data['solve_data'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

$stmt->bind_param(
    'siidsss',
    $data['id'],  // This will now be used as puzzle_name
    $data['size'],
    $data['missing'],
    $data['difficulty'],
    $puzzleArray,
    $solutionArray,
    $solveData
);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode([
        'success' => true, 
        'message' => 'Puzzle saved successfully',
        'id' => $db->insert_id  // Return the auto-generated ID
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to save puzzle',
        'details' => $stmt->error,
        'errno' => $stmt->errno
    ]);
}

$stmt->close();
$db->close();
?> 