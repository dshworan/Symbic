/**
 * Blocked Solver for Symbic Game
 * Tries to find a single cell that, when filled with the correct value,
 * makes the puzzle solvable.
 */
class BlockedSolver {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.originalGrid = puzzle.grid.map(row => [...row]); // Deep copy
        this.solution = null;
    }

    /**
     * Try to solve the puzzle with a single cell filled
     * @returns {Object} Result object with success status and cell info if found
     */
    trySolveWithOneCell() {
        // Get all empty cells
        const emptyCells = [];
        for (let row = 0; row < this.puzzle.size; row++) {
            for (let col = 0; col < this.puzzle.size; col++) {
                if (this.puzzle.grid[row][col] === null) {
                    emptyCells.push({ row, col });
                }
            }
        }

        // Get the solution from the puzzle data
        const puzzleData = window.PuzzleLoader.getPuzzleById(window.gameState.currentPuzzleId);
        if (!puzzleData || !puzzleData.solution) {
            return { success: false, message: "No solution data available" };
        }

        // Try each empty cell
        for (const cell of emptyCells) {
            // Get the correct value from the solution
            const correctValue = puzzleData.solution[cell.row][cell.col];
            
            // Try filling this cell
            this.puzzle.forceMakeMove(cell.row, cell.col, correctValue);
            
            // Create a new solver with the modified puzzle
            const solver = new BinarySolver(this.puzzle);
            
            // Try to solve it
            const success = solver.solve(() => {});
            
            if (success) {
                // Found a cell that makes it solvable
                return {
                    success: true,
                    cell: cell,
                    value: correctValue
                };
            }
            
            // Reset the puzzle to original state
            this.resetPuzzle();
        }

        // No cell found that makes it solvable
        return { success: false, message: "Not solvable with 1 digit" };
    }

    /**
     * Reset the puzzle to its original state
     */
    resetPuzzle() {
        for (let row = 0; row < this.puzzle.size; row++) {
            for (let col = 0; col < this.puzzle.size; col++) {
                this.puzzle.forceMakeMove(row, col, this.originalGrid[row][col]);
            }
        }
    }
}

// Add event listener for the blocked solve button
document.addEventListener('DOMContentLoaded', () => {
    const blockedSolveBtn = document.getElementById('blocked-solve-btn');
    
    blockedSolveBtn.addEventListener('click', () => {
        try {
            if (!window.gameState) {
                console.error('Game state not initialized');
                return;
            }
            
            if (!window.gameState.gameStarted || !window.gameState.puzzle) {
                window.showMessage('Please start a game first', 'error');
                return;
            }
            
            // Create blocked solver
            const blockedSolver = new BlockedSolver(window.gameState.puzzle);
            
            // Try to solve with one cell
            const result = blockedSolver.trySolveWithOneCell();
            
            if (result.success) {
                // Fill in the cell that makes it solvable
                window.gameState.puzzle.forceMakeMove(result.cell.row, result.cell.col, result.value);
                window.refreshGrid();
                
                // Add highlight class to the cell
                const cell = document.querySelector(
                    `.cell[data-row="${result.cell.row}"][data-col="${result.cell.col}"]`
                );
                if (cell) {
                    cell.classList.add('highlight');
                }
                
                // Get the current puzzle data
                const puzzleData = window.PuzzleLoader.getPuzzleById(window.gameState.currentPuzzleId);
                
                // Check if solution matches expected solution (if available)
                let isCorrect = true;
                if (puzzleData && puzzleData.solution) {
                    // Compare grid with solution
                    for (let row = 0; row < window.gameState.puzzle.size; row++) {
                        for (let col = 0; col < window.gameState.puzzle.size; col++) {
                            if (window.gameState.puzzle.grid[row][col] !== puzzleData.solution[row][col]) {
                                isCorrect = false;
                                break;
                            }
                        }
                        if (!isCorrect) break;
                    }
                }
                
                if (isCorrect) {
                    window.showMessage(`Found a cell that makes it solvable: Row ${result.cell.row + 1}, Col ${result.cell.col + 1}`, 'success solution-correct');
                } else {
                    window.showMessage(`Found a cell that makes it solvable: Row ${result.cell.row + 1}, Col ${result.cell.col + 1}`, 'error solution-incorrect');
                }
            } else {
                window.showMessage(result.message, 'info');
            }
        } catch (error) {
            console.error('Error in blocked solve:', error);
            window.showMessage('An error occurred while trying to solve the puzzle', 'error');
        }
    });
}); 