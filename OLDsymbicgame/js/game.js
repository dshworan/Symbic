/**
 * Main game controller for Symbic Game
 * Manages the game state, UI interactions, and puzzle logic
 * Uses existing solver logic from the symbic-js project
 */
document.addEventListener('DOMContentLoaded', () => {
    // Game state
    window.gameState = {
        puzzle: null,          // BinaryPuzzle instance (from original code)
        solver: null,          // BinarySolver instance (from original code)
        currentGrid: null,     // A copy of the current puzzle state for simple access
        selectedIconSet: 'one-zero',
        selectedSize: '6',
        fixedCells: new Set(), // Track original puzzle cells (that cannot be changed)
        gameStarted: false,
        showHints: false,
        currentPuzzleId: null,
        ready: false,           // New flag to track when the puzzle is ready for interaction
        initialEmptyCells: 0    // Added to track initial empty cells
    };

    // DOM elements
    const elements = {
        puzzleSelect: document.getElementById('puzzle-select'),
        gridSize: document.getElementById('grid-size'),
        iconSet: document.getElementById('icon-set'),
        puzzleGrid: document.getElementById('puzzle-grid'),
        messageBox: document.getElementById('message-box'),
        hintBtn: document.getElementById('hint-btn'),
        solveStepBtn: document.getElementById('solve-step-btn'),
        solveAllBtn: document.getElementById('solve-all-btn'),
        clearBtn: document.getElementById('clear-btn'),
        newGameBtn: document.getElementById('new-game-btn')
    };

    // Initialize the game
    initGame();

    /**
     * Initialize the game
     */
    function initGame() {
        // Set up event listeners
        setupEventListeners();

        // Initialize puzzle selector
        populatePuzzleSelector();

        // If there's an initial puzzle ID, load it
        if (window.initialPuzzleId) {
            const puzzleId = window.initialPuzzleId;
            const size = parseInt(puzzleId.charAt(1)); // Get size from puzzle ID (e.g., P6_1_1 -> 6)
            
            // Set the grid size and trigger the change event
            elements.gridSize.value = size;
            gameState.selectedSize = size.toString();
            elements.gridSize.dispatchEvent(new Event('change'));
        } else {
            // Set default grid size and trigger change
            elements.gridSize.value = '6';
            gameState.selectedSize = '6';
            elements.gridSize.dispatchEvent(new Event('change'));
        }
    }

    /**
     * Check if puzzles are loaded and populate the selector
     */
    function checkPuzzlesLoaded() {
        if (window.PuzzleLoader) {
            populatePuzzleSelector();
            
            // Load the first puzzle
            loadFirstPuzzle();
        } else {
            // Try again after a short delay
            setTimeout(checkPuzzlesLoaded, 1000);
        }
    }

    /**
     * Set up event listeners for UI elements
     */
    function setupEventListeners() {
        // Set icon set dropdown to match game state
        elements.iconSet.value = gameState.selectedIconSet;
        
        // Puzzle selection change
        elements.puzzleSelect.addEventListener('change', () => {
            const puzzleId = elements.puzzleSelect.value;
            if (puzzleId) {
                loadPuzzleById(puzzleId);
            }
        });

        // Grid size change
        elements.gridSize.addEventListener('change', function() {
            // Update the selected size
            const newSize = this.value;
            gameState.selectedSize = newSize;
            
            // Repopulate the puzzle selector with puzzles of the new size
            populatePuzzleSelector();
            
            // Reset the puzzle selector
            elements.puzzleSelect.value = "";
            
            // Show message about size change
            showMessage(`Grid size changed to ${newSize}x${newSize}. Select a puzzle or create a new one.`, 'info');
            
            // If we have an initial puzzle ID, try to load it after the selector is updated
            if (window.initialPuzzleId) {
                const puzzleId = window.initialPuzzleId;
                const size = parseInt(puzzleId.charAt(1));
                
                // Only proceed if the sizes match
                if (size.toString() === newSize) {
                    setTimeout(() => {
                        const puzzleOption = Array.from(elements.puzzleSelect.options).find(option => option.value === puzzleId);
                        if (puzzleOption) {
                            elements.puzzleSelect.value = puzzleId;
                            loadPuzzleById(puzzleId);
                        }
                    }, 100);
                }
            } else {
                // Load the first puzzle of the new size
                loadFirstPuzzle();
            }
        });

        // Icon set change
        elements.iconSet.addEventListener('change', () => {
            gameState.selectedIconSet = elements.iconSet.value;
            refreshGrid();
        });

        // Button actions
        elements.hintBtn.addEventListener('click', showHint);
        elements.solveStepBtn.addEventListener('click', solveOneStep);
        elements.solveAllBtn.addEventListener('click', solveAllSteps);
        elements.clearBtn.addEventListener('click', clearGrid);
        elements.newGameBtn.addEventListener('click', createNewPuzzle);
        
        // Add click and contextmenu handlers for the puzzle grid
        elements.puzzleGrid.addEventListener('click', handleGridClick);
        elements.puzzleGrid.addEventListener('contextmenu', handleGridClick);
    }

    /**
     * Handle clicks on the puzzle grid
     * This ensures clicks are caught even if individual cell handlers aren't working
     * @param {Event} event - The click event
     */
    function handleGridClick(event) {
        // If we're not in a ready state, ignore clicks
        if (!gameState.ready) return;
        
        // Check if a cell was clicked
        const cell = event.target.closest('.cell');
        if (!cell) return;
        
        // Get the row and column from the dataset
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        
        // Make sure we have valid row and column values
        if (isNaN(row) || isNaN(col)) return;
        
        // Check if this is a fixed cell
        if (gameState.fixedCells.has(`${row}-${col}`)) return;

        // Handle right click (context menu)
        if (event.type === 'contextmenu' || event.button === 2) {
            event.preventDefault(); // Prevent context menu
            
            // Get the puzzle data from the loader
            const puzzleData = window.PuzzleLoader.getPuzzleById(gameState.currentPuzzleId);
            if (puzzleData && puzzleData.solution) {
                // Get the correct value from the solution
                const correctValue = puzzleData.solution[row][col];
                
                // Set the cell to the correct value
                gameState.puzzle.forceMakeMove(row, col, correctValue);
                
                // Refresh the display
                refreshGrid();
                
                // Hide hint when user makes a move
                hideHint();
            }
            return;
        }
        
        // Left click - toggle the cell value
        toggleCellValue(row, col);
    }

    /**
     * Populate the puzzle selector dropdown with available puzzles
     */
    function populatePuzzleSelector() {
        // Clear existing options (except the default one)
        elements.puzzleSelect.innerHTML = '<option value="">Select a puzzle...</option>';

        // Make sure PuzzleLoader exists
        if (!window.PuzzleLoader) {
            console.error('PuzzleLoader not found');
            return;
        }
        
        // Get all levels
        const levels = window.PuzzleLoader.getLevels();
        
        // Add puzzles for each level
        levels.forEach(level => {
            // Only include levels that match our selected size
            if (level.id.includes(gameState.selectedSize + 'x' + gameState.selectedSize)) {
                // Create an optgroup for this level
                const group = document.createElement('optgroup');
                group.label = level.description;
                
                // Get puzzles for this level
                const puzzles = window.PuzzleLoader.getPuzzlesByLevel(level.id);
                
                // Show up to 200 puzzles per level
                const maxPuzzles = Math.min(puzzles.length, 200);
                
                // Add each puzzle to the group
                for (let i = 0; i < maxPuzzles; i++) {
                    const puzzle = puzzles[i];
                    const option = document.createElement('option');
                    option.value = puzzle.id;
                    option.textContent = puzzle.name;
                    group.appendChild(option);
                }
                
                elements.puzzleSelect.appendChild(group);
            }
        });
    }

    /**
     * Load the first available puzzle
     */
    function loadFirstPuzzle() {
        // Get all puzzles for the current size
        const sizeStr = gameState.selectedSize + 'x' + gameState.selectedSize;
        const levels = window.PuzzleLoader.getLevels()
            .filter(level => level.id.includes(sizeStr));
        
        if (levels.length > 0) {
            // Get the first level
            const firstLevel = levels[0];
            const puzzles = window.PuzzleLoader.getPuzzlesByLevel(firstLevel.id);
            
            if (puzzles.length > 0) {
                // Get the first puzzle
                const puzzleId = puzzles[0].id;
                
                // Set the dropdown value
                elements.puzzleSelect.value = puzzleId;
                
                // Load the puzzle
                loadPuzzleById(puzzleId);
            } else {
                createNewPuzzle(); // No puzzles found, create a new one
            }
        } else {
            createNewPuzzle(); // No levels found, create a new puzzle
        }
    }

    /**
     * Load a specific puzzle by ID
     * @param {string} puzzleId - The ID of the puzzle to load
     */
    function loadPuzzleById(puzzleId) {
        try {
            // Mark as not ready while loading
            gameState.ready = false;
            
            // Get the puzzle data
            const puzzleData = window.PuzzleLoader.getPuzzleById(puzzleId);
            
            if (!puzzleData) {
                showMessage(`Puzzle ${puzzleId} not found.`, 'error');
                return;
            }
            
            // Store the current puzzle ID
            gameState.currentPuzzleId = puzzleId;
            
            // Create a new BinaryPuzzle instance
            gameState.puzzle = new BinaryPuzzle(puzzleData.size);
            
            // Load the puzzle data
            gameState.puzzle.loadPuzzle(puzzleData.grid);
            
            // Calculate initial empty cells
            gameState.initialEmptyCells = gameState.puzzle.grid.flat().filter(cell => cell === null).length;
            
            // Update selected size
            gameState.selectedSize = puzzleData.size.toString();
            elements.gridSize.value = gameState.selectedSize;
            
            // Create solver instance
            gameState.solver = new BinarySolver(gameState.puzzle);
            
            // Keep a copy of the grid for easy manipulation
            gameState.currentGrid = puzzleData.grid.map(row => [...row]);  // Deep copy
            
            // Update fixed cells
            updateFixedCells();
            
            // Refresh the grid display
            refreshGrid();
            
            // Reset game state
            gameState.gameStarted = true;
            hideHint();
            
            // Show a message
            showMessage(`Loaded puzzle: ${puzzleData.name}`, 'info');
            
            // Make sure the icon set dropdown matches the current state
            elements.iconSet.value = gameState.selectedIconSet;
            
            // Mark as ready for interaction
            gameState.ready = true;
        } catch (error) {
            console.error('Error loading puzzle:', error);
            showMessage('Error loading puzzle.', 'error');
        }
    }

    /**
     * Create a new random puzzle based on selected settings
     */
    function createNewPuzzle() {
        try {
            // Mark as not ready while creating a new puzzle
            gameState.ready = false;
            
            const size = parseInt(gameState.selectedSize);
            
            // Create a new puzzle
            gameState.puzzle = new BinaryPuzzle(size);
            
            // Generate a puzzle with medium difficulty (3 out of 5)
            gameState.puzzle.generatePuzzle(3);
            
            // Calculate initial empty cells
            gameState.initialEmptyCells = gameState.puzzle.grid.flat().filter(cell => cell === null).length;
            
            // Create solver instance
            gameState.solver = new BinarySolver(gameState.puzzle);
            
            // Keep a copy of the grid for easy manipulation
            gameState.currentGrid = gameState.puzzle.grid.map(row => [...row]);  // Deep copy
            
            // Update fixed cells
            updateFixedCells();
            
            // Refresh the grid display
            refreshGrid();
            
            // Reset game state
            gameState.gameStarted = true;
            gameState.currentPuzzleId = null;
            elements.puzzleSelect.value = "";
            hideHint();
            
            // Show a message
            showMessage('New puzzle generated.', 'info');
            
            // Make sure the icon set dropdown matches the current state
            elements.iconSet.value = gameState.selectedIconSet;
            
            // Mark as ready now that everything is created
            gameState.ready = true;
        } catch (error) {
            console.error('Error creating new puzzle:', error);
            showMessage('Error creating new puzzle.', 'error');
        }
    }

    /**
     * Update the set of fixed cells based on the current puzzle
     */
    function updateFixedCells() {
        gameState.fixedCells.clear();
        
        if (!gameState.puzzle) return;
        
        const grid = gameState.puzzle.grid;
        const size = grid.length;
        
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (grid[row][col] !== null) {
                    // The puzzle.js class from the original project has fixedCells property
                    if (gameState.puzzle.fixedCells[row][col]) {
                        gameState.fixedCells.add(`${row}-${col}`);
                    }
                }
            }
        }
    }

    /**
     * Refresh the grid display
     */
    function refreshGrid() {
        if (!gameState.puzzle) return;
        
        const grid = gameState.puzzle.grid;  // Use the official grid from the puzzle object
        const size = grid.length;
        
        elements.puzzleGrid.innerHTML = '';
        
        // Set grid template columns/rows based on size
        elements.puzzleGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        elements.puzzleGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        // Create cells for the grid
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                
                // Check if this is a fixed cell
                if (gameState.fixedCells.has(`${row}-${col}`)) {
                    cell.classList.add('fixed');
                }
                
                // Set the cell content based on its value
                const value = grid[row][col];
                if (value !== null) {
                    cell.innerHTML = IconUtils.getIconHtml(value, gameState.selectedIconSet);
                    cell.classList.add(IconUtils.getIconClass(value, gameState.selectedIconSet));
                }
                
                elements.puzzleGrid.appendChild(cell);
            }
        }
        
        // Validate the current state
        validateGrid();
    }
    window.refreshGrid = refreshGrid;

    /**
     * Toggle a cell's value between 0, 1, and null
     * @param {number} row - Row index
     * @param {number} col - Column index
     */
    function toggleCellValue(row, col) {
        // Check if this is a fixed cell
        if (gameState.fixedCells.has(`${row}-${col}`)) return;
        
        // Get current value
        const currentValue = gameState.puzzle.grid[row][col];
        
        // Cycle through values: null -> 0 -> 1 -> null
        let newValue;
        if (currentValue === null) newValue = 0;
        else if (currentValue === 0) newValue = 1;
        else newValue = null;
        
        //console.log(`Toggling cell (${row},${col}) from ${currentValue} to ${newValue}`);
        
        // Use forceMakeMove instead of makeMove to bypass validation
        gameState.puzzle.forceMakeMove(row, col, newValue);
        
        // Refresh the display
        refreshGrid();
        
        // Hide hint when user makes a move
        hideHint();
    }
    
    /**
     * Validate the current grid state
     */
    function validateGrid() {
        // Check if the puzzle is solved
        if (gameState.puzzle.isSolved()) {
            // Get the current puzzle data
            const puzzleData = window.PuzzleLoader.getPuzzleById(gameState.currentPuzzleId);
            
            // Check if solution matches expected solution (if available)
            if (puzzleData && puzzleData.solution) {
                let isCorrect = true;
                
                // Compare grid with solution
                for (let row = 0; row < gameState.puzzle.size; row++) {
                    for (let col = 0; col < gameState.puzzle.size; col++) {
                        if (gameState.puzzle.grid[row][col] !== puzzleData.solution[row][col]) {
                            isCorrect = false;
                            break;
                        }
                    }
                    if (!isCorrect) break;
                }
                
                if (isCorrect) {
                    showMessage('Puzzle solved correctly! Congratulations!', 'success solution-correct');
                } else {
                    showMessage('Puzzle solved, but solution does not match expected pattern.', 'error solution-incorrect');
                }
            } else {
                showMessage('Puzzle solved correctly! Congratulations!', 'success');
            }
        } else {
            // Just show a neutral message
            showMessage('Keep going!', 'info');
        }
    }
    
    /**
     * Show a message in the message box
     * @param {string} message - The message to display
     * @param {string} type - The type of message (info, success, error)
     */
    function showMessage(message, type = 'info') {
        elements.messageBox.innerHTML = message;
        elements.messageBox.className = `message-box ${type}`;
        elements.messageBox.style.display = 'block';
    }
    window.showMessage = showMessage;
    
    /**
     * Show a hint for the current puzzle state
     */
    function showHint() {
        if (!gameState.gameStarted || !gameState.solver) return;
        
        // First, check for errors in the grid
        const errors = findGridErrors();
        if (errors.hasErrors) {
            showMessage(errors.message, 'error');
            
            // Highlight the error cell(s)
            document.querySelectorAll('.cell.hint').forEach(cell => {
                cell.classList.remove('hint');
            });
            
            // Add error-mode class to the puzzle grid
            elements.puzzleGrid.classList.add('error-mode');
            
            // Add error class to highlight the incorrect cells
            if (errors.positions && errors.positions.length > 0) {
                errors.positions.forEach(pos => {
                    const errorCell = document.querySelector(
                        `.cell[data-row="${pos.row}"][data-col="${pos.col}"]`
                    );
                    
                    if (errorCell) {
                        errorCell.classList.add('hint');
                    }
                });
            }
            
            return;
        }
        
        // Remove error-mode class if no errors
        elements.puzzleGrid.classList.remove('error-mode');
        
        // If no errors, use the original solver to find a step
        const step = gameState.solver.findStep();
        
        if (step) {
            showMessage(step.message, 'info');
            
            // Clear any previous hint highlighting
            document.querySelectorAll('.cell.hint').forEach(cell => {
                cell.classList.remove('hint');
            });
            
            // Highlight the cell with the hint
            const hintCell = document.querySelector(
                `.cell[data-row="${step.row}"][data-col="${step.col}"]`
            );
            
            if (hintCell) {
                hintCell.classList.add('hint');
                hintCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            showMessage("No hints available at this stage.", 'info');
        }
    }
    
    /**
     * Find errors in the current grid state
     * @returns {Object} - Object with hasErrors flag, message, and positions of errors
     */
    function findGridErrors() {
        if (!gameState.puzzle) {
            return { hasErrors: false };
        }
        
        const grid = gameState.puzzle.grid;
        const size = grid.length;
        const result = {
            hasErrors: false,
            message: "",
            positions: []
        };
        
        // Get icon names based on the current icon set
        const getIconName = (value) => {
            switch(gameState.selectedIconSet) {
                case 'one-zero': return value === 0 ? '0s' : '1s';
                case 'moon-sun': return value === 0 ? 'moons' : 'suns';
                case 'star-heart': return value === 0 ? 'stars' : 'hearts';
                case 'circle-square': return value === 0 ? 'circles' : 'squares';
                case 'cat-dog': return value === 0 ? 'cats' : 'dogs';
                case 'thumbs-up-down': return value === 0 ? 'thumbs up' : 'thumbs down';
                case 'smile-frown': return value === 0 ? 'smiles' : 'frowns';
                default: return value === 0 ? '0s' : '1s';
            }
        };
        
        // Check for rule violations:
        
        // 1. Check for three consecutive same values in rows
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size - 2; col++) {
                const a = grid[row][col];
                const b = grid[row][col + 1];
                const c = grid[row][col + 2];
                
                if (a !== null && a === b && b === c) {
                    result.hasErrors = true;
                    result.message = `Found three consecutive ${getIconName(a)} in row ${row + 1}`;
                    
                    result.positions.push({ row, col });
                    result.positions.push({ row, col: col + 1 });
                    result.positions.push({ row, col: col + 2 });
                    
                    return result;
                }
            }
        }
        
        // 2. Check for three consecutive same values in columns
        for (let col = 0; col < size; col++) {
            for (let row = 0; row < size - 2; row++) {
                const a = grid[row][col];
                const b = grid[row + 1][col];
                const c = grid[row + 2][col];
                
                if (a !== null && a === b && b === c) {
                    result.hasErrors = true;
                    result.message = `Found three consecutive ${getIconName(a)} in column ${col + 1}`;
                    
                    result.positions.push({ row, col });
                    result.positions.push({ row: row + 1, col });
                    result.positions.push({ row: row + 2, col });
                    
                    return result;
                }
            }
        }
        
        // 3. Check for too many of one value in rows
        for (let row = 0; row < size; row++) {
            let zeros = 0, ones = 0, empty = 0;
            
            for (let col = 0; col < size; col++) {
                if (grid[row][col] === 0) zeros++;
                else if (grid[row][col] === 1) ones++;
                else empty++;
            }
            
            if (zeros > size / 2) {
                result.hasErrors = true;
                result.message = `Too many ${getIconName(0)} in row ${row + 1}. Each row must have equal numbers of each icon.`;
                
                // Add all zero positions in this row
                for (let col = 0; col < size; col++) {
                    if (grid[row][col] === 0) {
                        result.positions.push({ row, col });
                    }
                }
                
                return result;
            }
            
            if (ones > size / 2) {
                result.hasErrors = true;
                result.message = `Too many ${getIconName(1)} in row ${row + 1}. Each row must have equal numbers of each icon.`;
                
                // Add all one positions in this row
                for (let col = 0; col < size; col++) {
                    if (grid[row][col] === 1) {
                        result.positions.push({ row, col });
                    }
                }
                
                return result;
            }
        }
        
        // 4. Check for too many of one value in columns
        for (let col = 0; col < size; col++) {
            let zeros = 0, ones = 0, empty = 0;
            
            for (let row = 0; row < size; row++) {
                if (grid[row][col] === 0) zeros++;
                else if (grid[row][col] === 1) ones++;
                else empty++;
            }
            
            if (zeros > size / 2) {
                result.hasErrors = true;
                result.message = `Too many ${getIconName(0)} in column ${col + 1}. Each column must have equal numbers of each icon.`;
                
                // Add all zero positions in this column
                for (let row = 0; row < size; row++) {
                    if (grid[row][col] === 0) {
                        result.positions.push({ row, col });
                    }
                }
                
                return result;
            }
            
            if (ones > size / 2) {
                result.hasErrors = true;
                result.message = `Too many ${getIconName(1)} in column ${col + 1}. Each column must have equal numbers of each icon.`;
                
                // Add all one positions in this column
                for (let row = 0; row < size; row++) {
                    if (grid[row][col] === 1) {
                        result.positions.push({ row, col });
                    }
                }
                
                return result;
            }
        }
        
        // 5. Check for duplicate rows
        for (let row1 = 0; row1 < size - 1; row1++) {
            for (let row2 = row1 + 1; row2 < size; row2++) {
                // Skip if either row has empty cells
                if (grid[row1].includes(null) || grid[row2].includes(null)) continue;
                
                // Check if rows are identical
                let identical = true;
                for (let col = 0; col < size; col++) {
                    if (grid[row1][col] !== grid[row2][col]) {
                        identical = false;
                        break;
                    }
                }
                
                if (identical) {
                    result.hasErrors = true;
                    result.message = `Rows ${row1 + 1} and ${row2 + 1} are identical. All rows must be unique.`;
                    
                    // Add all positions in both rows
                    for (let col = 0; col < size; col++) {
                        result.positions.push({ row: row1, col });
                        result.positions.push({ row: row2, col });
                    }
                    
                    return result;
                }
            }
        }
        
        // 6. Check for duplicate columns
        for (let col1 = 0; col1 < size - 1; col1++) {
            for (let col2 = col1 + 1; col2 < size; col2++) {
                // Skip if either column has empty cells
                let hasEmpty = false;
                for (let row = 0; row < size; row++) {
                    if (grid[row][col1] === null || grid[row][col2] === null) {
                        hasEmpty = true;
                        break;
                    }
                }
                if (hasEmpty) continue;
                
                // Check if columns are identical
                let identical = true;
                for (let row = 0; row < size; row++) {
                    if (grid[row][col1] !== grid[row][col2]) {
                        identical = false;
                        break;
                    }
                }
                
                if (identical) {
                    result.hasErrors = true;
                    result.message = `Columns ${col1 + 1} and ${col2 + 1} are identical. All columns must be unique.`;
                    
                    // Add all positions in both columns
                    for (let row = 0; row < size; row++) {
                        result.positions.push({ row, col: col1 });
                        result.positions.push({ row, col: col2 });
                    }
                    
                    return result;
                }
            }
        }
        
        return result;
    }
    
    /**
     * Hide the hint panel
     */
    function hideHint() {
        // Remove hint highlighting
        document.querySelectorAll('.cell.hint').forEach(cell => {
            cell.classList.remove('hint');
        });
        
        // Remove error mode
        elements.puzzleGrid.classList.remove('error-mode');
    }
    
    /**
     * Solve one step of the puzzle
     */
    function solveOneStep() {
        if (!gameState.gameStarted || !gameState.solver) return;
        
        // Use the original solver to find and apply a step
        const step = gameState.solver.findStep();
        
        if (step) {
            // Apply the step to the puzzle
            gameState.puzzle.makeMove(step.row, step.col, step.value);
            
            // Refresh the grid
            refreshGrid();
            
            // Show the message
            showMessage(step.message, 'info');
            
            // Highlight the cell that was changed
            const changedCell = document.querySelector(
                `.cell[data-row="${step.row}"][data-col="${step.col}"]`
            );
            
            if (changedCell) {
                changedCell.classList.add('hint');
            }
        } else {
            showMessage('No further steps available.', 'info');
        }
    }
    
    /**
     * Auto-solve the entire puzzle
     */
    function solveAllSteps() {
        if (!gameState.gameStarted || !gameState.solver) return;
        
        // Array to store all steps
        const steps = [];
        
        // Use the solver's solve method, which continues until solved or stuck
        const success = gameState.solver.solve((step) => {
            // Store each step with its details
            steps.push({
                rule: step.rule
            });
        });
        
        // Refresh the grid to show the solution
        refreshGrid();
        
        // Show message based on success
        if (success) {
            // Get the current puzzle data
            const puzzleData = window.PuzzleLoader.getPuzzleById(gameState.currentPuzzleId);
            
            // Check if solution matches expected solution (if available)
            let isCorrect = true;
            if (puzzleData && puzzleData.solution) {
                // Compare grid with solution
                for (let row = 0; row < gameState.puzzle.size; row++) {
                    for (let col = 0; col < gameState.puzzle.size; col++) {
                        if (gameState.puzzle.grid[row][col] !== puzzleData.solution[row][col]) {
                            isCorrect = false;
                            break;
                        }
                    }
                    if (!isCorrect) break;
                }
            }
            
            // Count steps by rule type
            const ruleCounts = {};
            steps.forEach(step => {
                ruleCounts[step.rule] = (ruleCounts[step.rule] || 0) + 1;
            });
            
            // Define the order of rules as they appear in the solver
            const ruleOrder = [
                'equalnumber',
                'pairs',
                'sandwich',
                'spreadantitriplet',
                'quadantitriplet',
                'clustered4emptycells',
                'clustered5emptycells',
                'duplicaterow'
            ];
            
            // Create the output string with rules in order
            const stepsList = ruleOrder
                .filter(rule => ruleCounts[rule] > 0)
                .map(rule => `${ruleCounts[rule]} ${rule.charAt(0).toUpperCase() + rule.slice(1)}`)
                .join('<br>');

            // Calculate difficulty if calculator is available
            let statsHeader = '';
            if (typeof DifficultyCalculator !== 'undefined') {
                const size = gameState.puzzle.size;
                const totalCells = size * size;
                const missingPercentage = Math.round((gameState.initialEmptyCells / totalCells) * 100);
                
                const calculator = new DifficultyCalculator();
                const difficulty = calculator.calculateDifficulty(size, gameState.initialEmptyCells, steps);
                
                // Create header with stats in new format
                statsHeader = `Steps: ${steps.length} - Missing: ${gameState.initialEmptyCells}/${totalCells} (${missingPercentage}%)<br>Difficulty: ${difficulty.score.toFixed(2)} (${difficulty.level})<br>----------------------------------<br>`;
            } else {
                // Fallback if calculator is not available
                statsHeader = `Solved: ${steps.length}<br><br>`;
            }
            
            // Use HTML br tags for line breaks
            if (isCorrect) {
                showMessage(`${statsHeader}${stepsList}`, 'success solution-correct');
            } else {
                showMessage(`${statsHeader}${stepsList}`, 'error solution-incorrect');
            }
        } else {
            // Get the puzzle data from the loader
            const puzzleData = window.PuzzleLoader.getPuzzleById(gameState.currentPuzzleId);
            if (puzzleData && puzzleData.solution) {
                // Format solution as a grid
                const formattedSolution = puzzleData.solution.map(row => row.join(' ')).join('\n');
                console.log('Puzzle solution:\n' + formattedSolution);
                showMessage('Could not solve the puzzle completely using available techniques.', 'info');
            } else {
                showMessage('Could not solve the puzzle completely using available techniques.', 'info');
            }
        }
    }
    
    /**
     * Clear the grid (reset to the original puzzle state)
     */
    function clearGrid() {
        if (!gameState.gameStarted || !gameState.puzzle) return;
        
        if (gameState.currentPuzzleId) {
            // Reload the current puzzle
            loadPuzzleById(gameState.currentPuzzleId);
        } else {
            // Create a new puzzle since the current one was randomly generated
            createNewPuzzle();
        }
        
        // Show message
        showMessage('Grid cleared to starting position.', 'info');
    }
});

// Add CSS for hint highlighting
document.head.insertAdjacentHTML('beforeend', `
<style>
.cell.hint {
    box-shadow: 0 0 8px 3px #2ecc71;
    animation: pulse 1.5s infinite;
}

/* When showing errors, the hint cells should have a different color */
.error-mode .cell.hint {
    box-shadow: 0 0 8px 3px #e74c3c;
    animation: error-pulse 1.5s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 8px 3px rgba(46, 204, 113, 0.5); }
    50% { box-shadow: 0 0 8px 3px rgba(46, 204, 113, 1); }
    100% { box-shadow: 0 0 8px 3px rgba(46, 204, 113, 0.5); }
}

@keyframes error-pulse {
    0% { box-shadow: 0 0 8px 3px rgba(231, 76, 60, 0.5); }
    50% { box-shadow: 0 0 8px 3px rgba(231, 76, 60, 1); }
    100% { box-shadow: 0 0 8px 3px rgba(231, 76, 60, 0.5); }
}
</style>
`);