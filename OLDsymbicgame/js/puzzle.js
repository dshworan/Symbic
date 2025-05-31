/**
 * Binary Puzzle
 * Handles the puzzle grid, validation, and puzzle generation
 */
class BinaryPuzzle {
    /**
     * Initialize a binary puzzle
     * @param {number} size - Size of the puzzle (6, 8, 10, 12, or 14)
     */
    constructor(size) {
        this.size = size || 6;
        this.grid = [];
        this.solution = [];
        this.fixedCells = []; // Original cells that cannot be changed
        this.solutionLogged = false; // Flag to track if solution has been logged
        this.initGrid();
    }

    /**
     * Initialize an empty grid
     */
    initGrid() {
        this.grid = Array(this.size).fill().map(() => Array(this.size).fill(null));
        this.fixedCells = Array(this.size).fill().map(() => Array(this.size).fill(false));
        this.solutionLogged = false; // Reset the solution logged flag
    }

    /**
     * Load a puzzle from a provided grid
     * @param {array} puzzleGrid - 2D array of the puzzle values (0, 1, or null)
     */
    loadPuzzle(puzzleGrid) {
        // Validate the grid
        if (!puzzleGrid || !Array.isArray(puzzleGrid) || puzzleGrid.length !== this.size) {
            throw new Error('Invalid puzzle grid');
        }

        // Copy the grid and mark fixed cells
        this.grid = [];
        this.fixedCells = [];
        this.solutionLogged = false; // Reset the solution logged flag
        
        for (let row = 0; row < this.size; row++) {
            this.grid[row] = [];
            this.fixedCells[row] = [];
            
            if (!Array.isArray(puzzleGrid[row]) || puzzleGrid[row].length !== this.size) {
                throw new Error(`Invalid row ${row} in puzzle grid`);
            }
            
            for (let col = 0; col < this.size; col++) {
                const value = puzzleGrid[row][col];
                this.grid[row][col] = value;
                // Mark non-null values as fixed
                this.fixedCells[row][col] = value !== null;
            }
        }
    }
    
    /**
     * Load a puzzle from a JSON file
     * @param {object} puzzleData - The parsed JSON puzzle data
     * @returns {boolean} - Whether the puzzle was loaded successfully
     */
    loadPuzzleFromJSON(puzzleData) {
        try {
            // Set the size and initialize grids
            this.size = puzzleData.size;
            this.initGrid();
            
            // Load the puzzle grid
            this.loadPuzzle(puzzleData.puzzle);
            
            // Store the solution if provided
            if (puzzleData.solution) {
                this.solution = JSON.parse(JSON.stringify(puzzleData.solution));
            }
            
            return true;
        } catch (error) {
            console.error('Error loading puzzle from JSON:', error);
            return false;
        }
    }

    /**
     * Get a list of available puzzle files (from predefined list)
     * @returns {Array} - Array of puzzle file names
     */
    static listPuzzles() {
        // Use the globally defined PUZZLE_FILES constant
        if (typeof PUZZLE_FILES !== 'undefined') {
            return PUZZLE_FILES;
        }
        
        // Fallback if PUZZLE_FILES is not defined
        return [];
    }
    
    /**
     * Load a puzzle from the PUZZLES global object
     * @param {string} filename - The name of the puzzle file
     * @returns {Promise<BinaryPuzzle>} - A promise that resolves to a new BinaryPuzzle
     */
    static loadFromFile(filename) {
        return new Promise((resolve, reject) => {
            try {
                // Check if the puzzle exists in the PUZZLES object
                if (typeof PUZZLES !== 'undefined' && PUZZLES[filename]) {
                    const puzzleData = PUZZLES[filename];
                    const puzzle = new BinaryPuzzle(puzzleData.size);
                    puzzle.loadPuzzleFromJSON(puzzleData);
                    resolve(puzzle);
                } else {
                    // Try fallback to fetch method if running on a server
                    if (window.location.protocol !== 'file:') {
                        fetch(`puzzles/${filename}`)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`Failed to fetch puzzle: ${response.status} ${response.statusText}`);
                                }
                                return response.json();
                            })
                            .then(puzzleData => {
                                const puzzle = new BinaryPuzzle(puzzleData.size);
                                puzzle.loadPuzzleFromJSON(puzzleData);
                                resolve(puzzle);
                            })
                            .catch(error => {
                                reject(error);
                            });
                    } else {
                        reject(new Error(`Puzzle ${filename} not found in predefined puzzles`));
                    }
                }
            } catch (error) {
                console.error('Error loading puzzle:', error);
                reject(error);
            }
        });
    }

    /**
     * Generate a new random puzzle
     * @param {number} difficulty - Difficulty level (1-5)
     */
    generatePuzzle(difficulty = 3) {
        // Start with a solved puzzle
        this.generateSolution();
        
        // Remove cells based on difficulty (higher = more cells removed)
        const cellsToKeep = Math.floor(this.size * this.size * (1 - (difficulty * 0.1)));
        const totalCells = this.size * this.size;
        
        // Copy the solution to the grid
        this.grid = JSON.parse(JSON.stringify(this.solution));
        this.fixedCells = Array(this.size).fill().map(() => Array(this.size).fill(true));
        
        // Randomly remove cells
        let remainingCells = totalCells;
        let cellsKept = 0;
        
        while (cellsKept < cellsToKeep && remainingCells > 0) {
            const row = Math.floor(Math.random() * this.size);
            const col = Math.floor(Math.random() * this.size);
            
            // Skip if already removed
            if (this.grid[row][col] === null) {
                continue;
            }
            
            // Temporarily remove the cell
            const originalValue = this.grid[row][col];
            this.grid[row][col] = null;
            this.fixedCells[row][col] = false;
            
            // Check if still has unique solution
            if (!this.hasUniqueSolution()) {
                // If not unique, put the value back
                this.grid[row][col] = originalValue;
                this.fixedCells[row][col] = true;
                cellsKept++;
            }
            
            remainingCells--;
        }
    }

    /**
     * Generate a complete valid solution
     */
    generateSolution() {
        // Start with an empty grid
        this.solution = Array(this.size).fill().map(() => Array(this.size).fill(null));
        
        // Fill the first row with balanced 0s and 1s
        const firstRow = [];
        for (let i = 0; i < this.size; i++) {
            firstRow[i] = i < this.size / 2 ? 0 : 1;
        }
        
        // Shuffle the first row
        for (let i = firstRow.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [firstRow[i], firstRow[j]] = [firstRow[j], firstRow[i]];
        }
        
        this.solution[0] = firstRow;
        
        // Solve the rest of the grid
        this._solveGrid(this.solution);
        
        return this.solution;
    }

    /**
     * Check if a value would be valid at the given position
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to check (0 or 1)
     * @returns {boolean} - Whether the value is valid
     */
    isValidMove(row, col, value) {
        if (this.fixedCells[row][col]) {
            return false; // Cannot change fixed cells
        }
        
        // Create a temporary grid with the new value
        const tempGrid = JSON.parse(JSON.stringify(this.grid));
        tempGrid[row][col] = value;
        
        // Check row constraints
        // 1. No more than two consecutive same digits
        for (let c = 0; c < this.size - 2; c++) {
            if (tempGrid[row][c] === value && 
                tempGrid[row][c+1] === value && 
                tempGrid[row][c+2] === value) {
                return false;
            }
        }
        
        // Check column constraints
        // 1. No more than two consecutive same digits
        for (let r = 0; r < this.size - 2; r++) {
            if (tempGrid[r][col] === value && 
                tempGrid[r+1][col] === value && 
                tempGrid[r+2][col] === value) {
                return false;
            }
        }
        
        // 2. Count the number of each digit in row and column
        let rowCount = 0;
        let colCount = 0;
        for (let i = 0; i < this.size; i++) {
            if (tempGrid[row][i] === value) rowCount++;
            if (tempGrid[i][col] === value) colCount++;
        }
        
        // Cannot have more than size/2 of the same digit
        if (rowCount > this.size / 2 || colCount > this.size / 2) {
            return false;
        }
        
        return true;
    }

    /**
     * Make a move on the puzzle
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to place (0 or 1)
     * @returns {boolean} - Whether the move was successful
     */
    makeMove(row, col, value) {
        // Log the move attempt for debugging
        //console.debug(`Attempting move: row ${row}, col ${col}, value ${value}`);
        
        if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
            console.debug(`Invalid position: ${row}, ${col}`);
            return false;
        }
        
        // Cannot change fixed cells
        if (this.fixedCells[row][col]) {
            console.debug(`Cannot change fixed cell at ${row}, ${col}`);
            return false;
        }
        
        // Check if valid move
        if (value !== null && !this.isValidMove(row, col, value)) {
            console.debug(`Invalid move at ${row}, ${col}, value ${value}`);
            return false;
        }
        
        this.grid[row][col] = value;
        return true;
    }

    /**
     * Place a value in the grid without validation
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to place (0 or 1)
     * @returns {boolean} - Whether the move was successful
     */
    forceMakeMove(row, col, value) {
        if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
            return false;
        }
        
        // Make the move without validation checks
        this.grid[row][col] = value;
        return true;
    }

    /**
     * Check if the puzzle is solved
     * @returns {boolean} - Whether the puzzle is complete and valid
     */
    isSolved() {
        // Check if the grid is full
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] === null) {
                    return false;
                }
            }
        }
        
        // Check rows
        for (let row = 0; row < this.size; row++) {
            // Check for three consecutive same digits
            for (let col = 0; col < this.size - 2; col++) {
                if (this.grid[row][col] === this.grid[row][col+1] && 
                    this.grid[row][col] === this.grid[row][col+2]) {
                    return false;
                }
            }
            
            // Count digits in row
            let zeros = 0, ones = 0;
            for (let col = 0; col < this.size; col++) {
                if (this.grid[row][col] === 0) zeros++;
                else ones++;
            }
            
            // Check balanced digits
            if (zeros !== this.size / 2 || ones !== this.size / 2) {
                return false;
            }
        }
        
        // Check columns
        for (let col = 0; col < this.size; col++) {
            // Check for three consecutive same digits
            for (let row = 0; row < this.size - 2; row++) {
                if (this.grid[row][col] === this.grid[row+1][col] && 
                    this.grid[row][col] === this.grid[row+2][col]) {
                    return false;
                }
            }
            
            // Count digits in column
            let zeros = 0, ones = 0;
            for (let row = 0; row < this.size; row++) {
                if (this.grid[row][col] === 0) zeros++;
                else ones++;
            }
            
            // Check balanced digits
            if (zeros !== this.size / 2 || ones !== this.size / 2) {
                return false;
            }
        }
        
        // Check uniqueness of rows and columns
        // This is a simplified check, full uniqueness check would be more complex
        
        // Log the solution when the puzzle is complete, but only once
        if (!this.solutionLogged) {
            //console.log('Puzzle solution:');
            //console.log('grid: [');
            //for (let row = 0; row < this.size; row++) {
            //    console.log(`  [${this.grid[row].join(', ')}]${row < this.size - 1 ? ',' : ''}`);
            //}
            //console.log(']');
            this.solutionLogged = true;
        }
        
        return true;
    }

    /**
     * Check if the puzzle has a unique solution
     * @returns {boolean} - Whether the puzzle has a unique solution
     */
    hasUniqueSolution() {
        // This is a simplified placeholder
        // A real implementation would try to solve the puzzle and check for uniqueness
        return true;
    }

    /**
     * Helper method to solve a grid (for puzzle generation)
     * @param {array} grid - The grid to solve
     * @returns {boolean} - Whether the grid could be solved
     */
    _solveGrid(grid) {
        // Simple implementation - in a real app, would need more robust solver
        // This is just for demonstration purposes
        
        // Find an empty cell
        let row = -1, col = -1;
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (grid[r][c] === null) {
                    row = r;
                    col = c;
                    break;
                }
            }
            if (row !== -1) break;
        }
        
        // If no empty cell, the grid is solved
        if (row === -1) return true;
        
        // Try placing 0 and 1
        for (let value of [0, 1]) {
            // Check if valid
            if (this._isValidPlacement(grid, row, col, value)) {
                grid[row][col] = value;
                
                // Recursively try to solve the rest
                if (this._solveGrid(grid)) {
                    return true;
                }
                
                // If not successful, backtrack
                grid[row][col] = null;
            }
        }
        
        return false;
    }

    /**
     * Helper method to check if a value is valid in the grid
     * @param {array} grid - The grid to check
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to check
     * @returns {boolean} - Whether the value is valid
     */
    _isValidPlacement(grid, row, col, value) {
        // Check row for three consecutive same digits
        for (let c = Math.max(0, col - 2); c <= Math.min(this.size - 3, col); c++) {
            if (c <= col && col <= c + 2) {
                // Skip if checking a sequence that includes our position
                const values = [
                    c === col ? value : grid[row][c],
                    c + 1 === col ? value : grid[row][c + 1],
                    c + 2 === col ? value : grid[row][c + 2]
                ];
                
                if (values[0] !== null && values[1] !== null && values[2] !== null &&
                    values[0] === values[1] && values[1] === values[2]) {
                    return false;
                }
            }
        }
        
        // Check column for three consecutive same digits
        for (let r = Math.max(0, row - 2); r <= Math.min(this.size - 3, row); r++) {
            if (r <= row && row <= r + 2) {
                // Skip if checking a sequence that includes our position
                const values = [
                    r === row ? value : grid[r][col],
                    r + 1 === row ? value : grid[r + 1][col],
                    r + 2 === row ? value : grid[r + 2][col]
                ];
                
                if (values[0] !== null && values[1] !== null && values[2] !== null &&
                    values[0] === values[1] && values[1] === values[2]) {
                    return false;
                }
            }
        }
        
        // Check balance in row and column
        let rowCount = 0, colCount = 0;
        for (let i = 0; i < this.size; i++) {
            if (grid[row][i] === value) rowCount++;
            if (grid[i][col] === value) colCount++;
        }
        
        // Add 1 for the cell we're checking
        if (grid[row][col] !== value) {
            rowCount++;
            colCount++;
        }
        
        // Cannot have more than size/2 of the same digit
        if (rowCount > this.size / 2 || colCount > this.size / 2) {
            return false;
        }
        
        return true;
    }
} 