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

// Find all puzzle arrays that have duplicates
$query = "SELECT puzzle_array, COUNT(*) as count, MIN(id) as min_id 
          FROM puzzles 
          GROUP BY puzzle_array 
          HAVING COUNT(*) > 1";

$result = $db->query($query);

if (!$result) {
    http_response_code(500);
    echo json_encode(['error' => 'Query failed: ' . $db->error]);
    exit;
}

$duplicates = [];
$cleaned = 0;

while ($row = $result->fetch_assoc()) {
    $puzzleArray = $row['puzzle_array'];
    $count = $row['count'];
    $minId = $row['min_id'];
    
    // Get all fields for this puzzle array
    $idQuery = "SELECT id, puzzle_name, puzzle_array, solution_array, size, difficulty, missing_cells, solve_data 
                FROM puzzles 
                WHERE puzzle_array = ? 
                ORDER BY id";
    $stmt = $db->prepare($idQuery);
    $stmt->bind_param('s', $puzzleArray);
    $stmt->execute();
    $idResult = $stmt->get_result();
    
    $entries = [];
    while ($entry = $idResult->fetch_assoc()) {
        $entries[] = $entry;
    }
    
    // Verify all fields match
    $firstEntry = $entries[0];
    $allFieldsMatch = true;
    $mismatchedFields = [];
    
    foreach ($entries as $entry) {
        foreach ($firstEntry as $field => $value) {
            if ($field !== 'id' && $entry[$field] !== $value) {
                $allFieldsMatch = false;
                $mismatchedFields[] = [
                    'field' => $field,
                    'value1' => $value,
                    'value2' => $entry[$field],
                    'id1' => $firstEntry['id'],
                    'id2' => $entry['id']
                ];
            }
        }
    }
    
    if ($allFieldsMatch) {
        // Keep the lowest ID, delete the rest
        foreach ($entries as $entry) {
            if ($entry['id'] != $minId) {
                $deleteQuery = "DELETE FROM puzzles WHERE id = ?";
                $deleteStmt = $db->prepare($deleteQuery);
                $deleteStmt->bind_param('i', $entry['id']);
                if ($deleteStmt->execute()) {
                    $cleaned++;
                    error_log("Deleted duplicate puzzle ID: {$entry['id']}, Name: {$entry['puzzle_name']}");
                }
                $deleteStmt->close();
            }
        }
        
        $duplicates[] = [
            'puzzle_array' => $puzzleArray,
            'count' => $count,
            'kept_id' => $minId,
            'deleted_ids' => array_map(function($entry) use ($minId) { 
                return $entry['id']; 
            }, array_filter($entries, function($entry) use ($minId) { 
                return $entry['id'] != $minId; 
            })),
            'all_fields_match' => true
        ];
    } else {
        // Log the mismatches
        error_log("Found entries with same puzzle array but different fields:");
        foreach ($mismatchedFields as $mismatch) {
            error_log("  Field: {$mismatch['field']}");
            error_log("    ID {$mismatch['id1']}: {$mismatch['value1']}");
            error_log("    ID {$mismatch['id2']}: {$mismatch['value2']}");
        }
        
        $duplicates[] = [
            'puzzle_array' => $puzzleArray,
            'count' => $count,
            'entries' => $entries,
            'mismatched_fields' => $mismatchedFields,
            'all_fields_match' => false
        ];
    }
    
    $stmt->close();
}

echo json_encode([
    'success' => true,
    'duplicates_found' => count($duplicates),
    'entries_cleaned' => $cleaned,
    'details' => $duplicates
]);

$db->close();
?> 