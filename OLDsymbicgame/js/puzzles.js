/**
 * Puzzle data for the Symbic game
 * Contains predefined puzzles of different sizes
 */
const PuzzleData = {
    // 6x6 puzzles
    '6x6': [
        {
            id: '6x6-easy-1',
            name: '6x6 Easy #1',
            difficulty: 'Easy',
            grid: [
                [null, 1, null, null, 0, null],
                [null, null, null, 1, null, null],
                [null, 0, 1, null, null, null],
                [null, null, null, 0, 1, null],
                [null, null, 0, null, null, null],
                [null, 1, null, null, 0, null]
            ]
        },
        {
            id: '6x6-medium-1',
            name: '6x6 Medium #1',
            difficulty: 'Medium',
            grid: [
                [null, null, 0, 1, null, null],
                [0, null, null, null, null, 1],
                [null, null, null, null, 0, null],
                [null, 1, null, null, null, null],
                [0, null, null, null, null, 0],
                [null, null, 0, 1, null, null]
            ]
        },
        {
            id: '6x6-hard-1',
            name: '6x6 Hard #1',
            difficulty: 'Hard',
            grid: [
                [null, null, null, null, null, 0],
                [null, 1, null, 0, null, null],
                [null, null, null, null, 1, null],
                [null, 0, null, null, null, null],
                [null, null, 1, null, 0, null],
                [1, null, null, null, null, null]
            ]
        }
    ],
    
    // 8x8 puzzles
    '8x8': [
        {
            id: '8x8-easy-1',
            name: '8x8 Easy #1',
            difficulty: 'Easy',
            grid: [
                [null, 1, null, 0, null, null, 1, null],
                [null, null, null, null, 0, null, null, 0],
                [0, null, null, 1, null, null, null, null],
                [null, 0, null, null, null, 1, 0, null],
                [null, 1, 0, null, null, null, 1, null],
                [null, null, null, null, 1, null, null, 0],
                [1, null, null, 0, null, null, null, null],
                [null, 0, null, null, 0, null, 1, null]
            ]
        },
        {
            id: '8x8-medium-1',
            name: '8x8 Medium #1',
            difficulty: 'Medium',
            grid: [
                [null, null, 0, null, null, 1, null, null],
                [null, 1, null, null, null, null, 0, null],
                [0, null, null, null, 1, null, null, null],
                [null, null, 1, null, null, 0, null, null],
                [null, null, 0, null, null, 1, null, null],
                [null, null, null, 0, null, null, null, 1],
                [null, 1, null, null, null, null, 0, null],
                [null, null, 0, null, null, 1, null, null]
            ]
        }
    ],
    
    // 10x10 puzzles
    '10x10': [
        {
            id: '10x10-easy-1',
            name: '10x10 Easy #1',
            difficulty: 'Easy',
            grid: [
                [null, 1, null, 0, null, null, 1, null, 0, null],
                [null, null, null, null, 0, 1, null, null, null, 0],
                [0, null, 1, null, null, null, null, 1, null, null],
                [null, 0, null, null, 1, 0, null, null, null, 1],
                [null, null, 0, null, null, null, 0, null, 1, null],
                [null, 1, null, 0, null, null, 1, null, 0, null],
                [0, null, null, null, 1, 0, null, null, null, 1],
                [null, null, 1, null, null, null, null, 0, null, null],
                [null, 0, null, null, 0, 1, null, null, null, 0],
                [null, 1, null, 0, null, null, 1, null, 0, null]
            ]
        }
    ]
};

/**
 * Utilities for working with puzzles
 */
const PuzzleUtils = {
    /**
     * Get all puzzles for a specific grid size
     * @param {string} size - Grid size (e.g. '6x6', '8x8', '10x10')
     * @returns {Array} Array of puzzles for the given size
     */
    getPuzzlesBySize(size) {
        return PuzzleData[size] || [];
    },
    
    /**
     * Get a specific puzzle by its ID
     * @param {string} id - The puzzle ID
     * @returns {Object|null} The puzzle object or null if not found
     */
    getPuzzleById(id) {
        for (const size in PuzzleData) {
            const puzzle = PuzzleData[size].find(p => p.id === id);
            if (puzzle) return puzzle;
        }
        return null;
    },
    
    /**
     * Get all available grid sizes
     * @returns {string[]} Array of available grid sizes
     */
    getAvailableSizes() {
        return Object.keys(PuzzleData);
    },
    
    /**
     * Generate an empty grid of the specified size
     * @param {number} size - The grid size (e.g. 6, 8, 10)
     * @returns {Array} A 2D array representing an empty grid
     */
    generateEmptyGrid(size) {
        return Array(size).fill().map(() => Array(size).fill(null));
    },
    
    /**
     * Create a deep copy of a puzzle grid
     * @param {Array} grid - The grid to copy
     * @returns {Array} A deep copy of the grid
     */
    copyGrid(grid) {
        return grid.map(row => [...row]);
    },
    
    /**
     * Generate a new puzzle with random clues
     * @param {number} size - The grid size (e.g. 6, 8, 10)
     * @param {number} difficulty - Difficulty level (1-3, where 1 is easy)
     * @returns {Object} A new puzzle object
     */
    generateRandomPuzzle(size, difficulty = 1) {
        // Create an empty grid
        const grid = this.generateEmptyGrid(size);
        
        // Calculate how many clues to add based on size and difficulty
        // Lower difficulty = more clues
        const maxClues = Math.floor(size * size * (0.3 - (difficulty * 0.05)));
        const minClues = Math.floor(maxClues * 0.7);
        const numClues = Math.floor(Math.random() * (maxClues - minClues + 1)) + minClues;
        
        // Add random clues
        for (let i = 0; i < numClues; i++) {
            const row = Math.floor(Math.random() * size);
            const col = Math.floor(Math.random() * size);
            
            // Only set if cell is empty
            if (grid[row][col] === null) {
                grid[row][col] = Math.random() > 0.5 ? 1 : 0;
            } else {
                // Try again if cell already has a value
                i--;
            }
        }
        
        return {
            id: `${size}x${size}-random-${Date.now()}`,
            name: `${size}x${size} Random Puzzle`,
            difficulty: ['Easy', 'Medium', 'Hard'][difficulty - 1] || 'Custom',
            grid: grid
        };
    }
}; 