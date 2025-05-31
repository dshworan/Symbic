/**
 * Binary Puzzle Solver
 * Contains logic for solving binary puzzles step by step
 */
class BinarySolver {
    /**
     * Initialize the solver
     * @param {BinaryPuzzle} puzzle - The puzzle to solve
     */
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.ruleManager = new RuleManager();
        this.debug = false; // Set to true to enable debug logs
    }

    /**
     * Find a single step to help solve the puzzle using the specified rule order
     * @returns {object|null} Step object with coordinates, value and rule used
     */
    findStep() {
        const size = this.puzzle.size;
        const grid = this.puzzle.grid;
        
        // Get rules directly from the RuleManager
        const rules = this.ruleManager.getRules();
        
        for (const rule of rules) {
            if (!rule) continue;
            
            if (this.debug) {
                console.log(`Trying ${rule.getName()} rule...`);
            }
            
            const step = rule.findStep(grid, size);
            
            if (step) {
                if (this.debug) {
                    console.log(`Found step using ${rule.getName()} rule: ${JSON.stringify(step)}`);
                }
                return step;
            }
        }
        
        if (this.debug) {
            console.log("No step found with any rule");
            // Print the current puzzle state for debugging
            console.log("Current puzzle state:");
            for (let row = 0; row < size; row++) {
                console.log(grid[row].map(cell => cell === null ? '.' : cell).join(' '));
            }
        }
        
        // No step found with any rule
        return null;
    }

    /**
     * Apply a full solution step by step
     * @param {function} stepCallback - Callback called after each step
     * @returns {boolean} - Whether the puzzle was solved successfully
     */
    solve(stepCallback) {
        const maxSteps = 100; // Safety to prevent infinite loops
        let stepCount = 0;
        
        while (!this.puzzle.isSolved() && stepCount < maxSteps) {
            const step = this.findStep();
            
            if (!step) {
                if (this.debug) {
                    console.log(`Solver stuck after ${stepCount} steps`);
                }
                // If no step found, we can't proceed with simple rules
                return false;
            }
            
            // Apply the step
            const moveResult = this.puzzle.makeMove(step.row, step.col, step.value);
            
            if (this.debug && !moveResult) {
                console.log(`Failed to apply step: ${JSON.stringify(step)}`);
            }
            
            // Call the callback if provided
            if (stepCallback) {
                stepCallback(step, stepCount);
            }
            
            stepCount++;
        }
        
        return this.puzzle.isSolved();
    }
    
    /**
     * Enable or disable debug logging
     * @param {boolean} enable - Whether to enable debug logs
     */
    setDebug(enable) {
        this.debug = enable;
    }
} 