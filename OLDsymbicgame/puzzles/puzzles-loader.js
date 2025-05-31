/**
 * Binary Puzzle - Puzzles Loader
 * Centralizes loading of puzzles from different level files
 */

// No let/var/const declarations at all for these variables
// They are already defined in the global scope by the level*.js files

// Define metadata for each level using the globally defined arrays
const PUZZLE_LEVELS = [
    // {
    //     id: 'level1',
    //     name: 'Level 1',
    //     description: 'Beginner puzzles',
    //     puzzles: window.LEVEL1_PUZZLES || []
    // },
    // {
    //     id: 'level2',
    //     name: 'Level 2',
    //     description: 'Intermediate puzzles',
    //     puzzles: window.LEVEL2_PUZZLES || []
    // },
    // {
    //     id: 'level3',
    //     name: 'Level 3',
    //     description: 'Advanced puzzles',
    //     puzzles: window.LEVEL3_PUZZLES || []
    // },
    {
        id: 'level 6x6 d1',
        name: 'level 6x6 d1',
        description: '6x6 easy',
        puzzles: window.LEVEL6x6_d1_PUZZLES || []
    },
    {
        id: 'level 6x6 d2',
        name: 'level 6x6 d2',
        description: '6x6 medium',
        puzzles: window.LEVEL6x6_d2_PUZZLES || []
    },
    {
        id: 'level 6x6 d3',
        name: 'level 6x6 d3',
        description: '6x6 hard',
        puzzles: window.LEVEL6x6_d3_PUZZLES || []
    },
    {
        id: 'level 6x6 d4',
        name: 'level 6x6 d4',
        description: '6x6 extreme',
        puzzles: window.LEVEL6x6_d4_PUZZLES || []
    },
    {
        id: 'level 8x8 d1',
        name: 'level 8x8 d1',
        description: '8x8 easy',
        puzzles: window.LEVEL8x8_d1_PUZZLES || []
    },
    {
        id: 'level 8x8 d2',
        name: 'level 8x8 d2',
        description: '8x8 medium',
        puzzles: window.LEVEL8x8_d2_PUZZLES || []
    },
    {
        id: 'level 8x8 d3',
        name: 'level 8x8 d3',
        description: '8x8 hard',
        puzzles: window.LEVEL8x8_d3_PUZZLES || []
    },
    {
        id: 'level 8x8 d4',
        name: 'level 8x8 d4',
        description: '8x8 extreme',
        puzzles: window.LEVEL8x8_d4_PUZZLES || []
    },
    {
        id: 'level 10x10 d1',
        name: 'level 10x10 d1',
        description: '10x10 easy',
        puzzles: window.LEVEL10x10_d1_PUZZLES || []
    },
    {
        id: 'level 10x10 d2',
        name: 'level 10x10 d2',
        description: '10x10 medium',
        puzzles: window.LEVEL10x10_d2_PUZZLES || []
    },
    {
        id: 'level 10x10 d3',
        name: 'level 10x10 d3',
        description: '10x10 hard',
        puzzles: window.LEVEL10x10_d3_PUZZLES || []
    },
    {
        id: 'level 10x10 d4',
        name: 'level 10x10 d4',
        description: '10x10 extreme',
        puzzles: window.LEVEL10x10_d4_PUZZLES || []
    }
];

// Functions to get puzzles
window.PuzzleLoader = {
    /**
     * Get all puzzles from all levels
     * @returns {Array} Array of all puzzle objects
     */
    getAllPuzzles: function() {
        //console.log('Getting all puzzles from levels:', PUZZLE_LEVELS.map(l => l.id + ' (' + l.puzzles.length + ')'));
        return PUZZLE_LEVELS.flatMap(level => level.puzzles);
    },

    /**
     * Get puzzles for a specific level
     * @param {string} levelId - Level ID to get puzzles for
     * @returns {Array} Array of puzzle objects for the specified level
     */
    getPuzzlesByLevel: function(levelId) {
        const level = PUZZLE_LEVELS.find(l => l.id === levelId);
        return level ? level.puzzles : [];
    },

    /**
     * Get a specific puzzle by its ID
     * @param {string} puzzleId - Puzzle ID to find
     * @returns {Object|null} Puzzle object or null if not found
     */
    getPuzzleById: function(puzzleId) {
        const allPuzzles = this.getAllPuzzles();
        return allPuzzles.find(puzzle => puzzle.id === puzzleId) || null;
    },

    /**
     * Get metadata for all available levels
     * @returns {Array} Array of level metadata objects
     */
    getLevels: function() {
        return PUZZLE_LEVELS.map(level => ({
            id: level.id,
            name: level.name,
            description: level.description,
            puzzleCount: level.puzzles.length
        }));
    }
};

//console.log('PuzzleLoader initialized with:', 
//    PUZZLE_LEVELS.reduce((total, level) => total + level.puzzles.length, 0), 
//    'puzzles'); 