/**
 * Puzzle Difficulty Calculator
 * Calculates the difficulty of a binary puzzle based on various factors
 */

class DifficultyCalculator {
    constructor() {
        // Define rule difficulties by name
        this.ruleDifficulties = {
            // Basic rules (difficulty: 1)
            'equalnumber': 1,      // Equal number of each symbol in rows/columns
            'pairs': 1,            // Pairs of same symbols
            'sandwich': 1,         // Sandwich rule (same symbols with different in middle)
            
            // Intermediate rules (difficulty: 2)
            'clustered4emptycells': 30,  // 4 empty cells in a cluster
            'clustered5emptycells': 30,  // 5 empty cells in a cluster
            'duplicaterow2': 30,         // Duplicate row detection with 2 empty cells       
            
            // Advanced rules (difficulty: 3)
            'duplicaterow3': 90,         // Duplicate row detection with 3 empty cells
            'spreadantitriplet': 90,     // Spread anti-triplet pattern
            'quadantitriplet': 90        // Quad anti-triplet pattern
        };

        // Define size multipliers (leave as 1.0 for now)
        this.sizeMultipliers = {
            6: 1.0,    // leave as 1.0 for now
            8: 1.0,    // leave as 1.0 for now
            10: 1.0    // leave as 1.0 for now
        };
    }

    /**
     * Calculate the difficulty of a puzzle
     * @param {number} size - Size of the puzzle (6, 8, or 10)
     * @param {number} missingDigits - Number of empty cells in the puzzle
     * @param {Array} steps - Array of steps used to solve the puzzle
     * @returns {Object} Difficulty information including score and level
     */
    calculateDifficulty(size, missingDigits, steps) {
        // Calculate step difficulty based on proportions
        let stepScore = this._calculateStepScore(steps);
        
        // Calculate missing digits score (more missing = harder)
        const missingDigitsScore = this._calculateMissingDigitsScore(size, missingDigits);
        
        // Apply size multiplier
        const sizeMultiplier = this.sizeMultipliers[size] || 1.0;
        
        // Calculate final score
        const finalScore = (stepScore + missingDigitsScore) * sizeMultiplier;
        
        // Determine difficulty level
        const level = this._determineDifficultyLevel(finalScore);
        
        return {
            score: Math.round(finalScore * 100) / 100,
            level: level,
            details: {
                stepScore,
                missingDigitsScore,
                sizeMultiplier
            }
        };
    }

    /**
     * Calculate score based on solving steps
     * @param {Array} steps - Array of steps used to solve
     * @returns {number} Score from steps
     */
    _calculateStepScore(steps) {
        if (steps.length === 0) return 0;

        const ruleCounts = {};
        let totalSteps = 0;

        // Count occurrences of each rule
        steps.forEach(step => {
            ruleCounts[step.rule] = (ruleCounts[step.rule] || 0) + 1;
            totalSteps++;
        });

        // Calculate weighted proportions
        let weightedScore = 0;
        for (const [rule, count] of Object.entries(ruleCounts)) {
            const difficulty = this.ruleDifficulties[rule] || 1;
            const proportion = count / totalSteps;
            weightedScore += proportion * difficulty; 
        }

        return weightedScore;
    }

    /**
     * Calculate score based on missing digits
     * @param {number} size - Size of the puzzle
     * @param {number} missingDigits - Number of empty cells
     * @returns {number} Score from missing digits
     */
    _calculateMissingDigitsScore(size, missingDigits) {
        const totalCells = size * size;
        const missingPercentage = missingDigits / totalCells;
        
        // More missing digits = higher score, but cap at 50% impact
        return Math.min(missingPercentage * 2, 5);
    }

    /**
     * Determine difficulty level based on score
     * @param {number} score - Calculated difficulty score
     * @returns {string} Difficulty level
     */
    _determineDifficultyLevel(score) {
        if (score < 3) return 'Easy';
        if (score < 6) return 'Medium';
        if (score < 10) return 'Hard';
        return 'Expert';
    }
}

// Export the calculator
window.DifficultyCalculator = DifficultyCalculator; 