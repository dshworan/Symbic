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

if (!$data || !isset($data['puzzles'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid data: ' . json_last_error_msg()]);
    exit;
}

$results = [];
foreach ($data['puzzles'] as $puzzle) {
    // Normalize the puzzle array by sorting it and using consistent JSON encoding
    $puzzleArray = json_encode($puzzle['puzzle_array'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    
    // Log what we're checking
    error_log("Checking puzzle: ID={$puzzle['id']}");
    error_log("Puzzle array: " . $puzzleArray);
    
    // First check if there are any duplicates of this puzzle array
    $duplicateCheck = $db->prepare("SELECT id, puzzle_name FROM puzzles WHERE puzzle_array = ? ORDER BY id");
    $duplicateCheck->bind_param('s', $puzzleArray);
    $duplicateCheck->execute();
    $duplicateResult = $duplicateCheck->get_result();
    
    if ($duplicateResult->num_rows > 1) {
        error_log("WARNING: Found multiple copies of puzzle array for {$puzzle['id']}:");
        $duplicates = [];
        while ($row = $duplicateResult->fetch_assoc()) {
            $duplicates[] = $row;
            error_log("  - ID: {$row['id']}, Name: {$row['puzzle_name']}");
        }
        // Use the lowest ID as the canonical one
        $existingPuzzle = $duplicates[0];
        error_log("Using lowest ID {$existingPuzzle['id']} as canonical entry");
    } else {
        $existingPuzzle = $duplicateResult->fetch_assoc();
    }
    
    if ($existingPuzzle) {
        error_log("Using puzzle ID: {$existingPuzzle['id']}, Name: {$existingPuzzle['puzzle_name']}");
        $results[$puzzle['id']] = [
            'exists' => true,
            'db_id' => $existingPuzzle['id'],
            'puzzle_name' => $existingPuzzle['puzzle_name'],
            'has_duplicates' => $duplicateResult->num_rows > 1,
            'duplicate_count' => $duplicateResult->num_rows
        ];
    } else {
        error_log("No existing puzzle found for {$puzzle['id']}");
        $results[$puzzle['id']] = [
            'exists' => false
        ];
    }
    
    $duplicateCheck->close();
}

// Log final results
error_log("Final results: " . json_encode($results));

echo json_encode(['results' => $results]);
$db->close();
?> 