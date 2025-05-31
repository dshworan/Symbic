<?php
// Disable error reporting to prevent HTML output
error_reporting(0);
ini_set('display_errors', 0);

// Set JSON content type header
header('Content-Type: application/json');

try {
    // Database connection
    $conn = new mysqli('sql13.bravehost.com', 'symbic', 'symbic99!', 'symbic_820545');

    if ($conn->connect_error) {
        throw new Exception('Database connection failed: ' . $conn->connect_error);
    }

    // Get all puzzles from the database
    $query = "SELECT id, puzzle_name, puzzle_array FROM puzzles";
    $result = $conn->query($query);

    if (!$result) {
        throw new Exception('Database query failed: ' . $conn->error);
    }

    // Store puzzles by their array representation
    $puzzlesByArray = [];
    $duplicates = [];
    $totalPuzzles = 0;

    while ($row = $result->fetch_assoc()) {
        // Verify required fields exist
        if (!isset($row['id']) || !isset($row['puzzle_name']) || !isset($row['puzzle_array'])) {
            continue; // Skip rows with missing data
        }
        
        $totalPuzzles++;
        $puzzleArray = $row['puzzle_array'];
        
        if (!isset($puzzlesByArray[$puzzleArray])) {
            $puzzlesByArray[$puzzleArray] = [];
        }
        
        $puzzlesByArray[$puzzleArray][] = [
            'id' => $row['id'],
            'name' => $row['puzzle_name']
        ];
    }

    // Find duplicates
    foreach ($puzzlesByArray as $array => $puzzles) {
        if (count($puzzles) > 1) {
            $duplicates[] = [
                'puzzle_array' => $array,
                'puzzles' => $puzzles
            ];
        }
    }

    // Return results
    echo json_encode([
        'success' => true,
        'duplicates' => $duplicates,
        'total_duplicates' => count($duplicates),
        'total_puzzles_checked' => $totalPuzzles
    ]);

} catch (Exception $e) {
    // Log the error (you can check your PHP error log for this)
    error_log('Check Duplicates Error: ' . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
} finally {
    // Close database connection if it exists
    if (isset($conn) && $conn) {
        $conn->close();
    }
}
?> 