/**
 * Binary Puzzle Rules
 * Contains the implementation of the rules used to solve binary puzzles
 */

class Rule {
    /**
     * Base rule class with common functionality
     * @param {string} name - The name of the rule
     * @param {string} description - Description of what the rule does
     */
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    /**
     * Get the name of the rule
     * @returns {string} The rule name
     */
    getName() {
        return this.name;
    }

    /**
     * Get a description of what the rule does
     * @returns {string} The rule description
     */
    getDescription() {
        return this.description;
    }
}


/**
 * EQUAL NUMBER RULE
 * Ensures equal number of 0s and 1s in each row and column
 */
class EqualNumberRule extends Rule {
    constructor() {
        super('equalnumber', 'Ensures equal number of 0s and 1s in each row and column');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // Check each row
        for (let row = 0; row < size; row++) {
            let zeros = 0;
            let ones = 0;
            let empty = [];
            
            // Count values and find empty cells
            for (let col = 0; col < size; col++) {
                if (puzzle[row][col] === 0) {
                    zeros++;
                } else if (puzzle[row][col] === 1) {
                    ones++;
                } else {
                    empty.push(col);
                }
            }
            
            // If we have exactly half of each value, we can fill an empty cell
            if (empty.length > 0) {
                if (zeros === size/2) {
                    // Fill first empty cell with 1
                    return {
                        row: row,
                        col: empty[0],
                        value: 1,
                        rule: 'equalnumber',
                        message: `This row already has the maximum number of 0s, so this cell must be a 1.`
                    };
                } else if (ones === size/2) {
                    // Fill first empty cell with 0
                    return {
                        row: row,
                        col: empty[0],
                        value: 0,
                        rule: 'equalnumber',
                        message: `This row already has the maximum number of 1s, so this cell must be a 0.`
                    };
                }
            }
        }
        
        // Check each column
        for (let col = 0; col < size; col++) {
            let zeros = 0;
            let ones = 0;
            let empty = [];
            
            // Count values and find empty cells
            for (let row = 0; row < size; row++) {
                if (puzzle[row][col] === 0) {
                    zeros++;
                } else if (puzzle[row][col] === 1) {
                    ones++;
                } else {
                    empty.push(row);
                }
            }
            
            // If we have exactly half of each value, we can fill an empty cell
            if (empty.length > 0) {
                if (zeros === size/2) {
                    // Fill first empty cell with 1
                    return {
                        row: empty[0],
                        col: col,
                        value: 1,
                        rule: 'equalnumber',
                        message: `This column already has the maximum number of 0s, so this cell must be a 1.`
                    };
                } else if (ones === size/2) {
                    // Fill first empty cell with 0
                    return {
                        row: empty[0],
                        col: col,
                        value: 0,
                        rule: 'equalnumber',
                        message: `This column already has the maximum number of 1s, so this cell must be a 0.`
                    };
                }
            }
        }
        
        return null;
    }
}


/**
 * PAIRS RULE
 * When two adjacent cells have the same value, a third consecutive cell cannot have this value
 */
class PairsRule extends Rule {
    constructor() {
        super('pairs', 'When two adjacent cells have the same value, a third consecutive cell cannot have this value');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // Check for adjacent pairs (00 or 11) in rows
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size - 1; col++) {
                // Skip if either cell is empty
                if (puzzle[row][col] === null || puzzle[row][col + 1] === null) {
                    continue;
                }
                
                // Check for two adjacent same values
                if (puzzle[row][col] === puzzle[row][col + 1]) {
                    const value = puzzle[row][col];
                    
                    // Check if there's room after the pair and it's empty
                    if (col + 2 < size && puzzle[row][col + 2] === null) {
                        const possibleValue = 1 - value;
                        if (this._isValidMove(puzzle, row, col + 2, possibleValue, size)) {
                            return {
                                row: row,
                                col: col + 2,
                                value: possibleValue,
                                rule: 'pairs',
                                message: `I see a pair. To avoid three in a row, the adjacent cell must be different.`
                            };
                        }
                    }
                    
                    // Check if there's room before the pair and it's empty
                    if (col > 0 && puzzle[row][col - 1] === null) {
                        const possibleValue = 1 - value;
                        if (this._isValidMove(puzzle, row, col - 1, possibleValue, size)) {
                            return {
                                row: row,
                                col: col - 1,
                                value: possibleValue,
                                rule: 'pairs',
                                message: `I see a pair. To avoid three in a row, the adjacent cell must be different.`
                            };
                        }
                    }
                }
            }
        }
        
        // Check for adjacent pairs (00 or 11) in columns
        for (let col = 0; col < size; col++) {
            for (let row = 0; row < size - 1; row++) {
                // Skip if either cell is empty
                if (puzzle[row][col] === null || puzzle[row + 1][col] === null) {
                    continue;
                }
                
                // Check for two adjacent same values
                if (puzzle[row][col] === puzzle[row + 1][col]) {
                    const value = puzzle[row][col];
                    
                    // Check if there's room after the pair and it's empty
                    if (row + 2 < size && puzzle[row + 2][col] === null) {
                        const possibleValue = 1 - value;
                        if (this._isValidMove(puzzle, row + 2, col, possibleValue, size)) {
                            return {
                                row: row + 2,
                                col: col,
                                value: possibleValue,
                                rule: 'pairs',
                                message: `I see a pair. To avoid three in a row, the adjacent cell must be different.`
                            };
                        }
                    }
                    
                    // Check if there's room before the pair and it's empty
                    if (row > 0 && puzzle[row - 1][col] === null) {
                        const possibleValue = 1 - value;
                        if (this._isValidMove(puzzle, row - 1, col, possibleValue, size)) {
                            return {
                                row: row - 1,
                                col: col,
                                value: possibleValue,
                                rule: 'pairs',
                                message: `I see a pair. To avoid three in a row, the adjacent cell must be different.`
                            };
                        }
                    }
                }
            }
        }
        
        return null;
    }
    
    /**
     * Check if the move would be valid considering balance constraints
     * @param {array} puzzle - The current puzzle state
     * @param {number} row - Row index
     * @param {number} col - Column index
     * @param {number} value - Value to check (0 or 1)
     * @param {number} size - Size of the puzzle
     * @returns {boolean} Whether the move is valid
     */
    _isValidMove(puzzle, row, col, value, size) {
        // Check for three consecutive same values in row
        if (col >= 2 && puzzle[row][col-1] === value && puzzle[row][col-2] === value) {
            return false;
        }
        if (col <= size-3 && puzzle[row][col+1] === value && puzzle[row][col+2] === value) {
            return false;
        }
        if (col > 0 && col < size-1 && puzzle[row][col-1] === value && puzzle[row][col+1] === value) {
            return false;
        }
        
        // Check for three consecutive same values in column
        if (row >= 2 && puzzle[row-1][col] === value && puzzle[row-2][col] === value) {
            return false;
        }
        if (row <= size-3 && puzzle[row+1][col] === value && puzzle[row+2][col] === value) {
            return false;
        }
        if (row > 0 && row < size-1 && puzzle[row-1][col] === value && puzzle[row+1][col] === value) {
            return false;
        }
        
        // Count values in row and column
        let rowCount = 0;
        let colCount = 0;
        
        for (let i = 0; i < size; i++) {
            if (puzzle[row][i] === value) rowCount++;
            if (puzzle[i][col] === value) colCount++;
        }
        
        // Check if adding this value would cause too many of the same digit
        if (rowCount >= size/2 || colCount >= size/2) {
            return false;
        }
        
        return true;
    }
}

/**
 * SANDWICH RULE
 * When a cell is between two cells of the same value, it must be the opposite value
 */
class SandwichRule extends Rule {
    constructor() {
        super('sandwich', 'When a cell is between two cells of the same value, it must be the opposite value');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // Check for sandwich patterns in rows
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size - 2; col++) {
                // Skip if end cells are empty or middle is filled
                if (puzzle[row][col] === null || puzzle[row][col + 2] === null || puzzle[row][col + 1] !== null) {
                    continue;
                }
                
                // Check if we have a pattern [X, ?, X] where X is 0 or 1 and ? is empty
                if (puzzle[row][col] === puzzle[row][col + 2]) {
                    const value = puzzle[row][col];
                    return {
                        row: row,
                        col: col + 1,
                        value: 1 - value,
                        rule: 'sandwich',
                        message: `When a cell is sandwiched between two ${value}s, it must be a ${1 - value}.`
                    };
                }
            }
        }
        
        // Check for sandwich patterns in columns
        for (let col = 0; col < size; col++) {
            for (let row = 0; row < size - 2; row++) {
                // Skip if end cells are empty or middle is filled
                if (puzzle[row][col] === null || puzzle[row + 2][col] === null || puzzle[row + 1][col] !== null) {
                    continue;
                }
                
                // Check if we have a pattern [X, ?, X] where X is 0 or 1 and ? is empty
                if (puzzle[row][col] === puzzle[row + 2][col]) {
                    const value = puzzle[row][col];
                    return {
                        row: row + 1,
                        col: col,
                        value: 1 - value,
                        rule: 'sandwich',
                        message: `When a cell is sandwiched between two ${value}s, it must be a ${1 - value}.`
                    };
                }
            }
        }
        
        return null;
    }
}



/**
 * FAR ANTI TRIPLET RULE
 * For rows/columns with 3 nulls where two nulls are adjacent to a digit of the same needed type,
 * place that digit in the lone null to avoid a potential triplet.
 */
class FarAntiTripletRule extends Rule {
    constructor() {
        super('farantitriplet', 'Places digits to avoid creating triplets when two nulls are adjacent to a needed digit');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._checkRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns by transposing the puzzle
        const transposed = this._transposeGrid(puzzle, size);
        const colStep = this._checkRows(transposed, size);
        
        // Translate column step back to original coordinates
        if (colStep) {
            return {
                row: colStep.col,
                col: colStep.row,
                value: colStep.value,
                rule: colStep.rule,
                message: colStep.message.replace('row', 'column').replace('Column', 'Row')
            };
        }
        
        return null;
    }

    /**
     * Transpose a grid to convert rows to columns
     * @param {array} grid - The grid to transpose
     * @param {number} size - The size of the grid
     * @returns {array} Transposed grid
     */
    _transposeGrid(grid, size) {
        const transposed = Array(size).fill().map(() => Array(size).fill(null));
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                transposed[col][row] = grid[row][col];
            }
        }
        return transposed;
    }

    /**
     * Enforces the FarAntiTripletRule:
     * For rows with 3 nulls where two nulls are adjacent to a digit of the same needed type,
     * place that digit in the lone null to avoid a potential triplet.
     * 
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Puzzle size (assumed even)
     * @returns {object|null} A step to apply or null if no move found
     */
    _checkRows(puzzle, size) {
        for (let row = 0; row < size; row++) {
            const currentRow = puzzle[row];
            const nullIndices = [];
            const counts = { 0: 0, 1: 0 };

            // Gather null positions and digit counts
            for (let col = 0; col < size; col++) {
                const val = currentRow[col];
                if (val === null) nullIndices.push(col);
                else counts[val]++;
            }

            if (nullIndices.length !== 3) continue;

            const half = size / 2;
            const need0 = half - counts[0];
            const need1 = half - counts[1];

            let targetDigit = null;
            if (need0 === 2) targetDigit = 0;
            else if (need1 === 2) targetDigit = 1;
            else continue;

            // Try to find a pair of adjacent nulls that sit next to a digit of targetDigit
            for (let i = 0; i < nullIndices.length; i++) {
                for (let j = i + 1; j < nullIndices.length; j++) {
                    const a = nullIndices[i];
                    const b = nullIndices[j];

                    if (Math.abs(a - b) === 1) { // They're adjacent
                        const left = Math.min(a, b);
                        const right = Math.max(a, b);

                        // Check if adjacent to targetDigit on either side
                        const leftNeighbor = left - 1 >= 0 ? currentRow[left - 1] : null;
                        const rightNeighbor = right + 1 < size ? currentRow[right + 1] : null;

                        if (leftNeighbor === targetDigit || rightNeighbor === targetDigit) {
                            // Find the third null (the "far" one)
                            const farNull = nullIndices.find(idx => idx !== a && idx !== b);

                            return {
                                row,
                                col: farNull,
                                value: targetDigit,
                                rule: 'farantitriplet',
                                message: `In row ${row+1}, placing ${targetDigit} at column ${farNull+1} to avoid potential triplet with adjacent nulls at columns ${a+1} and ${b+1}.`
                            };
                        }
                    }
                }
            }
        }

        return null;
    }
}

/**
 * QUAD ANTI TRIPLET RULE
 * For rows/columns with exactly 4 adjacent null cells where one digit is needed 3 times,
 * place that digit in one of the outermost cells to prevent forming a triplet.
 */
class QuadAntiTripleRule extends Rule {
    constructor() {
        super('quadantitriplet', 'Places needed digits in scenarios with 4 adjacent empty cells');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._checkRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns by transposing the puzzle
        const transposed = this._transposeGrid(puzzle, size);
        const colStep = this._checkRows(transposed, size);
        
        // Translate column step back to original coordinates
        if (colStep) {
            return {
                row: colStep.col,
                col: colStep.row,
                value: colStep.value,
                rule: colStep.rule,
                message: colStep.message.replace('row', 'column').replace('Column', 'Row')
            };
        }
        
        return null;
    }

    /**
     * Transpose a grid to convert rows to columns
     * @param {array} grid - The grid to transpose
     * @param {number} size - The size of the grid
     * @returns {array} Transposed grid
     */
    _transposeGrid(grid, size) {
        const transposed = Array(size).fill().map(() => Array(size).fill(null));
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                transposed[col][row] = grid[row][col];
            }
        }
        return transposed;
    }

    /**
     * Checks for rows with exactly 4 adjacent nulls where one digit is needed 3 times
     * and places the digit in one of the outermost cells
     * 
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Puzzle size (assumed even)
     * @returns {object|null} A step to apply or null if no move found
     */
    _checkRows(puzzle, size) {
        for (let row = 0; row < size; row++) {
            const currentRow = puzzle[row];
            
            // Count nulls and track their positions
            const nullIndices = [];
            for (let col = 0; col < size; col++) {
                if (currentRow[col] === null) {
                    nullIndices.push(col);
                }
            }
            
            // We only care about rows with exactly 4 nulls
            if (nullIndices.length !== 4) {
                continue;
            }
            
            // Check if the 4 nulls are adjacent
            nullIndices.sort((a, b) => a - b);
            const [a, b, c, d] = nullIndices;
            
            if (b === a + 1 && c === b + 1 && d === c + 1) {
                // The 4 nulls are adjacent!
                
                // Count digits to determine what's needed
                let zeros = 0;
                let ones = 0;
                
                for (let col = 0; col < size; col++) {
                    if (currentRow[col] === 0) zeros++;
                    else if (currentRow[col] === 1) ones++;
                }
                
                // Determine which digit we need 3 of
                const half = size / 2;
                const need0 = half - zeros;
                const need1 = half - ones;
                
                let targetDigit, needCount;
                if (need0 === 3) {
                    targetDigit = 0;
                    needCount = need0;
                } else if (need1 === 3) {
                    targetDigit = 1;
                    needCount = need1;
                } else {
                    // We only apply this rule when we need exactly 3 of one digit
                    continue;
                }
                
                // Place the digit in one of the outermost cells
                // We'll use the first outermost cell (at index a)
                return {
                    row: row,
                    col: a,  // First cell in the cluster
                    value: targetDigit,
                    rule: 'quadantitriplet',
                    message: `Found 4 adjacent empty cells in row ${row+1} where we need ${needCount} ${targetDigit}s. Placing ${targetDigit} at column ${a+1} to prevent triplets.`
                };
            }
        }
        
        return null;
    }
}

/**
 * SPREAD ANTI TRIPLET RULE
 * If we have a row with 3 empty cells and the digit missing twice is touching 2 of the empty cells
 * (in patterns --X, -X-, or X--), then we know that digit must go in the third empty cell (not touching)
 * to avoid creating a triplet.
 * The priority is that if we see -X- we should place the digit away, in the third cell.
 */
class SpreadAntiTripletRule extends Rule {
    constructor() {
        super('spreadantitriplet', 'Prevents triplets when a digit appears between or adjacent to empty cells');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        let result = this._checkRows(puzzle, size);
        if (result !== null) {
            return result;
        }
       
        // transpose puzzle to check columns
        const transposed = this._transposeGrid(puzzle, size);
        result = this._checkRows(transposed, size);
        if (result !== null) {
            // swap row/col in result because we transposed the puzzle
            const { row, col, value, rule } = result;
            return { 
                row: col, 
                col: row, 
                value, 
                rule,
                message: result.message.replace('row', 'column')
            };
        }
        
        return null;
    }

    _transposeGrid(grid, size) {
        const transposed = [];
        
        for (let col = 0; col < size; col++) {
            const newRow = [];
            for (let row = 0; row < size; row++) {
                newRow.push(grid[row][col]);
            }
            transposed.push(newRow);
        }
        
        return transposed;
    }

    _checkRows(puzzle, size) {
        for (let row = 0; row < puzzle.length; row++) {
            const currentRow = puzzle[row];
            
            // Find empty cells and count digits
            const emptyIndices = [];
            let zeroCount = 0;
            let oneCount = 0;
            
            for (let col = 0; col < currentRow.length; col++) {
                if (currentRow[col] === null) {
                    emptyIndices.push(col);
                } else if (currentRow[col] === 0) {
                    zeroCount++;
                } else if (currentRow[col] === 1) {
                    oneCount++;
                }
            }
            
            // We need exactly 3 empty cells
            if (emptyIndices.length !== 3) {
                continue;
            }
            
            // Sort empty indices to help with pattern detection
            emptyIndices.sort((a, b) => a - b);
            
            // Determine which digit is needed twice
            const neededZeros = (size / 2) - zeroCount;
            const neededOnes = (size / 2) - oneCount;
            
            // We're looking for the digit that needs to be placed twice
            let neededDigit = null;
            if (neededZeros === 2) {
                neededDigit = 0;
            } else if (neededOnes === 2) {
                neededDigit = 1;
            } else {
                continue;
            }
            
            // Track the found patterns to choose the most constrained one
            let foundPatterns = [];
            
            // Now check for the pattern where two empty cells are adjacent to the needed digit
            for (let i = 0; i < currentRow.length; i++) {
                if (currentRow[i] === neededDigit) {
                    // FIRST PRIORITY: Check for -X- pattern (empty cells on both sides)
                    // This pattern is most constraining because it forces the digit on both sides
                    if (i > 0 && i < currentRow.length - 1 && 
                        currentRow[i-1] === null && currentRow[i+1] === null) {
                        // Find the third empty cell
                        const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i+1);
                        
                        // This pattern takes precedence - return immediately
                        return {
                            row: row,
                            col: thirdEmptyCell,
                            value: neededDigit,
                            rule: this.name,
                            message: `Found empty cells on both sides of a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
                        };
                    }
                    
                    // SECOND PRIORITY: Check for --X pattern (two empty cells to the left)
                    if (i >= 2 && currentRow[i-1] === null && currentRow[i-2] === null) {
                        // Find the third empty cell (the one not adjacent to this digit)
                        const thirdEmptyCell = emptyIndices.find(idx => idx !== i-1 && idx !== i-2);
                        
                        foundPatterns.push({
                            row: row,
                            col: thirdEmptyCell,
                            value: neededDigit,
                            pattern: '--X',
                            message: `Found two empty cells next to a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
                        });
                    }
                    
                    // THIRD PRIORITY: Check for X-- pattern (two empty cells to the right)
                    if (i < currentRow.length - 2 && 
                        currentRow[i+1] === null && currentRow[i+2] === null) {
                        // Find the third empty cell
                        const thirdEmptyCell = emptyIndices.find(idx => idx !== i+1 && idx !== i+2);
                        
                        foundPatterns.push({
                            row: row,
                            col: thirdEmptyCell,
                            value: neededDigit,
                            pattern: 'X--',
                            message: `Found two empty cells next to a ${neededDigit} in row ${row+1}. Placing ${neededDigit} in the third empty cell.`
                        });
                    }
                }
            }
            
            // If we found at least one pattern, return the first one (most constraining)
            if (foundPatterns.length > 0) {
                const result = foundPatterns[0];
                return {
                    row: result.row,
                    col: result.col,
                    value: result.value,
                    rule: this.name,
                    message: result.message
                };
            }
        }
        
        return null;
    }
}

/**
 * DUPLICATE ROW 2 RULE
 * Prevents duplicate rows/columns by comparing partially filled patterns
 * For rows/columns with exactly 2 empty cells
 */
class DuplicateRow2Rule extends Rule {
    constructor() {
        super('duplicaterow2', 'Prevents duplicate rows and columns by comparing patterns with 2 empty cells');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._findStepInRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns
        const colStep = this._findStepInColumns(puzzle, size);
        if (colStep) return colStep;
        
        return null;
    }
    
    /**
     * Find empty cells in a row or column
     * @param {array} line - Row or column array
     * @returns {array} Indices of empty cells
     */
    _findEmptyCells(line) {
        const emptyCells = [];
        for (let i = 0; i < line.length; i++) {
            if (line[i] === null) {
                emptyCells.push(i);
            }
        }
        return emptyCells;
    }
    
    /**
     * Check for steps in rows
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step object or null if no pattern found
     */
    _findStepInRows(puzzle, size) {
        // Check each row with exactly 2 empty cells
        for (let row1 = 0; row1 < size; row1++) {
            const emptyCells = this._findEmptyCells(puzzle[row1]);
            
            // Skip if not exactly 2 empty cells
            if (emptyCells.length !== 2) {
                continue;
            }
            
            // Look for other rows to compare with
            for (let row2 = 0; row2 < size; row2++) {
                if (row1 === row2) {
                    continue; // Skip same row
                }
                
                // Skip if row2 has any empty cells (must be completed)
                if (puzzle[row2].includes(null)) {
                    continue;
                }
                
                // Check if the filled positions match between rows
                let patternMatch = true;
                
                for (let col = 0; col < size; col++) {
                    // Skip empty cells in row1
                    if (puzzle[row1][col] === null) {
                        continue;
                    }
                    
                    // Check if values match
                    if (puzzle[row1][col] !== puzzle[row2][col]) {
                        patternMatch = false;
                        break;
                    }
                }
                
                // If pattern matches in all filled positions
                if (patternMatch) {
                    // For 2 empty cells, make one different
                    for (const emptyCol of emptyCells) {
                        // Place the opposite value to avoid duplication
                        const value = puzzle[row2][emptyCol] === 0 ? 1 : 0;
                        
                        return {
                            row: row1,
                            col: emptyCol,
                            value: value,
                            rule: 'duplicaterow2',
                            message: `No two rows can be identical. This cell must be different from row ${row2 + 1}.`
                        };
                    }
                }
            }
        }
        
        return null;
    }
    
    /**
     * Check for steps in columns
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step object or null if no pattern found
     */
    _findStepInColumns(puzzle, size) {
        // Check each column with exactly 2 empty cells
        for (let col1 = 0; col1 < size; col1++) {
            // Extract column to find empty cells
            const column = [];
            for (let row = 0; row < size; row++) {
                column.push(puzzle[row][col1]);
            }
            
            const emptyCells = this._findEmptyCells(column);
            
            // Skip if not exactly 2 empty cells
            if (emptyCells.length !== 2) {
                continue;
            }
            
            // Look for other columns to compare with
            for (let col2 = 0; col2 < size; col2++) {
                if (col1 === col2) {
                    continue; // Skip same column
                }
                
                // Extract second column for comparison
                const column2 = [];
                for (let row = 0; row < size; row++) {
                    column2.push(puzzle[row][col2]);
                }
                
                // Skip if col2 has any empty cells (must be completed)
                if (column2.includes(null)) {
                    continue;
                }
                
                // Check if the filled positions match between columns
                let patternMatch = true;
                
                for (let row = 0; row < size; row++) {
                    // Skip empty cells in col1
                    if (puzzle[row][col1] === null) {
                        continue;
                    }
                    
                    // Check if values match
                    if (puzzle[row][col1] !== puzzle[row][col2]) {
                        patternMatch = false;
                        break;
                    }
                }
                
                // If pattern matches in all filled positions
                if (patternMatch) {
                    // For 2 empty cells, we can fill both to make them different
                    // Find the first empty cell that has a value in col2
                    for (const emptyRow of emptyCells) {
                        // Place the opposite value to avoid duplication
                        const value = puzzle[emptyRow][col2] === 0 ? 1 : 0;
                        
                        return {
                            row: emptyRow,
                            col: col1,
                            value: value,
                            rule: 'duplicaterow2',
                            message: `No two columns can be identical. This cell must be different from column ${col2 + 1}.`
                        };
                    }
                }
            }
        }
        
        return null;
    }
}

/**
 * DUPLICATE ROW 3 RULE
 * Prevents duplicate rows/columns by comparing partially filled patterns
 * For rows/columns with exactly 3 empty cells
 */
class DuplicateRow3Rule extends Rule {
    constructor() {
        super('duplicaterow3', 'Prevents duplicate rows and columns by comparing patterns with 3 empty cells');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._findStepInRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns
        const colStep = this._findStepInColumns(puzzle, size);
        if (colStep) return colStep;
        
        return null;
    }
    
    /**
     * Find empty cells in a row or column
     * @param {array} line - Row or column array
     * @returns {array} Indices of empty cells
     */
    _findEmptyCells(line) {
        const emptyCells = [];
        for (let i = 0; i < line.length; i++) {
            if (line[i] === null) {
                emptyCells.push(i);
            }
        }
        return emptyCells;
    }
    
    /**
     * Check for steps in rows
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step object or null if no pattern found
     */
    _findStepInRows(puzzle, size) {
        // Check each row with exactly 3 empty cells
        for (let row1 = 0; row1 < size; row1++) {
            const emptyCells = this._findEmptyCells(puzzle[row1]);
            
            // Skip if not exactly 3 empty cells
            if (emptyCells.length !== 3) {
                continue;
            }
            
            // Look for other rows to compare with
            for (let row2 = 0; row2 < size; row2++) {
                if (row1 === row2) {
                    continue; // Skip same row
                }
                
                // Skip if row2 has any empty cells (must be completed)
                if (puzzle[row2].includes(null)) {
                    continue;
                }
                
                // Check if the filled positions match between rows
                let patternMatch = true;
                
                for (let col = 0; col < size; col++) {
                    // Skip empty cells in row1
                    if (puzzle[row1][col] === null) {
                        continue;
                    }
                    
                    // Check if values match
                    if (puzzle[row1][col] !== puzzle[row2][col]) {
                        patternMatch = false;
                        break;
                    }
                }
                
                // If pattern matches in all filled positions
                if (patternMatch) {
                    // For 3 empty cells, use the "odd one out" rule
                    
                    // Count 0s and 1s in the empty positions
                    let zeros = 0;
                    let ones = 0;
                    
                    for (const emptyCol of emptyCells) {
                        if (puzzle[row2][emptyCol] === 0) {
                            zeros++;
                        } else {
                            ones++;
                        }
                    }
                    
                    // Find the odd one out
                    if (zeros === 1 || ones === 1) {
                        const targetValue = zeros === 1 ? 0 : 1;
                        let oddOneOutCol = -1;
                        
                        // Find the position with the odd value
                        for (const emptyCol of emptyCells) {
                            if (puzzle[row2][emptyCol] === targetValue) {
                                oddOneOutCol = emptyCol;
                                break;
                            }
                        }
                        
                        // Place the opposite of the odd value
                        const oppositeValue = targetValue === 0 ? 1 : 0;
                        
                        return {
                            row: row1,
                            col: oddOneOutCol,
                            value: oppositeValue,
                            rule: 'duplicaterow3',
                            message: `To avoid duplicating row ${row2 + 1}, the odd one out position must be the opposite value.`
                        };
                    }
                    
                    // If no odd one out (equal numbers of 0s and 1s), just make one different
                    const firstEmptyCol = emptyCells[0];
                    const value = puzzle[row2][firstEmptyCol] === 0 ? 1 : 0;
                    
                    return {
                        row: row1,
                        col: firstEmptyCol,
                        value: value,
                        rule: 'duplicaterow3',
                        message: `No two rows can be identical. This cell must be different from row ${row2 + 1}.`
                    };
                }
            }
        }
        
        return null;
    }
    
    /**
     * Check for steps in columns
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step object or null if no pattern found
     */
    _findStepInColumns(puzzle, size) {
        // Check each column with exactly 3 empty cells
        for (let col1 = 0; col1 < size; col1++) {
            // Extract column to find empty cells
            const column = [];
            for (let row = 0; row < size; row++) {
                column.push(puzzle[row][col1]);
            }
            
            const emptyCells = this._findEmptyCells(column);
            
            // Skip if not exactly 3 empty cells
            if (emptyCells.length !== 3) {
                continue;
            }
            
            // Look for other columns to compare with
            for (let col2 = 0; col2 < size; col2++) {
                if (col1 === col2) {
                    continue; // Skip same column
                }
                
                // Extract second column for comparison
                const column2 = [];
                for (let row = 0; row < size; row++) {
                    column2.push(puzzle[row][col2]);
                }
                
                // Skip if col2 has any empty cells (must be completed)
                if (column2.includes(null)) {
                    continue;
                }
                
                // Check if the filled positions match between columns
                let patternMatch = true;
                
                for (let row = 0; row < size; row++) {
                    // Skip empty cells in col1
                    if (puzzle[row][col1] === null) {
                        continue;
                    }
                    
                    // Check if values match
                    if (puzzle[row][col1] !== puzzle[row][col2]) {
                        patternMatch = false;
                        break;
                    }
                }
                
                // If pattern matches in all filled positions
                if (patternMatch) {
                    // For 3 empty cells, we need to check if we can determine a value
                    // Count occurrences of each value in col2 at the empty positions
                    let zeros = 0;
                    let ones = 0;
                    
                    for (const emptyRow of emptyCells) {
                        if (puzzle[emptyRow][col2] === 0) {
                            zeros++;
                        } else if (puzzle[emptyRow][col2] === 1) {
                            ones++;
                        }
                    }
                    
                    // If one value appears only once, we can place the opposite value
                    if (zeros === 1 || ones === 1) {
                        const targetValue = zeros === 1 ? 0 : 1;
                        // Find the position with the single occurrence
                        for (const emptyRow of emptyCells) {
                            if (puzzle[emptyRow][col2] === targetValue) {
                                // Place the opposite value
                                const value = targetValue === 0 ? 1 : 0;
                                
                                return {
                                    row: emptyRow,
                                    col: col1,
                                    value: value,
                                    rule: 'duplicaterow3',
                                    message: `To avoid duplicating column ${col2 + 1}, this cell must be different from the single occurrence of ${targetValue}.`
                                };
                            }
                        }
                    }
                }
            }
        }
        
        return null;
    }
}

/**
 * CLUSTERED 4 EMPTY CELLS RULE
 * Handles scenarios with 4 empty cells where 3 are clustered together,
 * and one digit needs to be placed 3 times. In this case, the needed digit
 * must go in the isolated empty cell.
 * Example: 110---1- (with 8 cells needs 3 more 0s, must place 0 in isolated cell)
 */
class Clustered4EmptyCellsRule extends Rule {
    constructor() {
        super('clustered4emptycells', 'Places needed digits in the isolated empty cell when there are 4 empty cells with 3 clustered together');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._checkRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns by transposing the puzzle
        const transposed = this._transposeGrid(puzzle, size);
        const colStep = this._checkRows(transposed, size);
        
        // Translate column step back to original coordinates
        if (colStep) {
            return {
                row: colStep.col,
                col: colStep.row,
                value: colStep.value,
                rule: colStep.rule,
                message: colStep.message.replace('row', 'column')
            };
        }
        
        return null;
    }

    /**
     * Transpose a grid to convert rows to columns
     * @param {array} grid - The grid to transpose
     * @param {number} size - The size of the grid
     * @returns {array} Transposed grid
     */
    _transposeGrid(grid, size) {
        const transposed = [];
        
        for (let col = 0; col < size; col++) {
            const newRow = [];
            for (let row = 0; row < size; row++) {
                newRow.push(grid[row][col]);
            }
            transposed.push(newRow);
        }
        
        return transposed;
    }

    /**
     * Check rows for the pattern of 4 empty cells with 3 clustered together
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step to take or null if pattern not found
     */
    _checkRows(puzzle, size) {
        for (let row = 0; row < puzzle.length; row++) {
            const currentRow = puzzle[row];
            
            // Find empty cells 
            const emptyCells = [];
            let zeroCount = 0;
            let oneCount = 0;
            
            for (let col = 0; col < currentRow.length; col++) {
                if (currentRow[col] === null) {
                    emptyCells.push(col);
                } else if (currentRow[col] === 0) {
                    zeroCount++;
                } else if (currentRow[col] === 1) {
                    oneCount++;
                }
            }
            
            // We need exactly 4 empty cells
            if (emptyCells.length !== 4) {
                continue;
            }
            
            // Determine which digit needs to be placed 3 times (when one has reached or exceeded half)
            const neededZeros = (size / 2) - zeroCount;
            const neededOnes = (size / 2) - oneCount;
            
            let targetDigit = null;
            if (neededZeros === 3) {
                targetDigit = 0;
            } else if (neededOnes === 3) {
                targetDigit = 1;
            } else {
                continue; // We don't need exactly 3 of one digit
            }
            
            // Sort empty indices to help with pattern detection
            emptyCells.sort((a, b) => a - b);
            
            // Check if 3 empty cells are clustered together
            const clusters = this._findClusters(emptyCells);
            
            // We need exactly one cluster of 3 and one isolated cell
            if (clusters.length === 2 && 
                ((clusters[0].length === 3 && clusters[1].length === 1) || 
                 (clusters[0].length === 1 && clusters[1].length === 3))) {
                
                // Find the isolated empty cell
                const isolatedCell = clusters[0].length === 1 ? clusters[0][0] : clusters[1][0];
                
                return {
                    row: row,
                    col: isolatedCell,
                    value: targetDigit,
                    rule: 'clustered4emptycells',
                    message: `Found 4 empty cells in row ${row+1} with 3 clustered together. Placing ${targetDigit} in the isolated cell.`
                };
            }
        }
        
        return null;
    }
    
    /**
     * Find clusters of adjacent cells in a sorted array of indices
     * @param {array} indices - Sorted array of cell indices
     * @returns {array} Array of clusters, where each cluster is an array of adjacent indices
     */
    _findClusters(indices) {
        const clusters = [];
        let currentCluster = [indices[0]];
        
        for (let i = 1; i < indices.length; i++) {
            // If this index is adjacent to the previous one, add to current cluster
            if (indices[i] === indices[i-1] + 1) {
                currentCluster.push(indices[i]);
            } else {
                // Start a new cluster
                clusters.push(currentCluster);
                currentCluster = [indices[i]];
            }
        }
        
        // Add the last cluster
        clusters.push(currentCluster);
        
        return clusters;
    }
}

/**
 * CLUSTERED 5 EMPTY CELLS RULE
 * Handles scenarios with 5 empty cells where 4 are clustered together,
 * and one digit needs to be placed 4 times. In this case, the needed digit
 * must go in the isolated empty cell.
 * Example: 110----1- (with 8 cells needs 4 more 0s, must place 0 in isolated cell)
 */
class Clustered5EmptyCellsRule extends Rule {
    constructor() {
        super('clustered5emptycells', 'Places needed digits in the isolated empty cell when there are 5 empty cells with 4 clustered together');
    }

    /**
     * Find a single step that can be made using this rule
     * @param {array} puzzle - The current puzzle state
     * @param {number} size - The size of the puzzle
     * @returns {object|null} Step information or null if no valid step found
     */
    findStep(puzzle, size) {
        // First check rows
        const rowStep = this._checkRows(puzzle, size);
        if (rowStep) return rowStep;
        
        // Then check columns by transposing the puzzle
        const transposed = this._transposeGrid(puzzle, size);
        const colStep = this._checkRows(transposed, size);
        
        // Translate column step back to original coordinates
        if (colStep) {
            return {
                row: colStep.col,
                col: colStep.row,
                value: colStep.value,
                rule: colStep.rule,
                message: colStep.message.replace('row', 'column')
            };
        }
        
        return null;
    }

    /**
     * Transpose a grid to convert rows to columns
     * @param {array} grid - The grid to transpose
     * @param {number} size - The size of the grid
     * @returns {array} Transposed grid
     */
    _transposeGrid(grid, size) {
        const transposed = [];
        
        for (let col = 0; col < size; col++) {
            const newRow = [];
            for (let row = 0; row < size; row++) {
                newRow.push(grid[row][col]);
            }
            transposed.push(newRow);
        }
        
        return transposed;
    }

    /**
     * Check rows for the pattern of 5 empty cells with 4 clustered together
     * @param {array} puzzle - The puzzle grid
     * @param {number} size - Size of the puzzle
     * @returns {object|null} Step to take or null if pattern not found
     */
    _checkRows(puzzle, size) {
        for (let row = 0; row < puzzle.length; row++) {
            const currentRow = puzzle[row];
            
            // Find empty cells 
            const emptyCells = [];
            let zeroCount = 0;
            let oneCount = 0;
            
            for (let col = 0; col < currentRow.length; col++) {
                if (currentRow[col] === null) {
                    emptyCells.push(col);
                } else if (currentRow[col] === 0) {
                    zeroCount++;
                } else if (currentRow[col] === 1) {
                    oneCount++;
                }
            }
            
            // We need exactly 5 empty cells
            if (emptyCells.length !== 5) {
                continue;
            }
            
            // Determine which digit needs to be placed 4 times (when one has reached or exceeded half)
            const neededZeros = (size / 2) - zeroCount;
            const neededOnes = (size / 2) - oneCount;
            
            let targetDigit = null;
            if (neededZeros === 4) {
                targetDigit = 0;
            } else if (neededOnes === 4) {
                targetDigit = 1;
            } else {
                continue; // We don't need exactly 4 of one digit
            }
            
            // Sort empty indices to help with pattern detection
            emptyCells.sort((a, b) => a - b);
            
            // Check if 4 empty cells are clustered together
            const clusters = this._findClusters(emptyCells);
            
            // We need exactly one cluster of 4 and one isolated cell
            if (clusters.length === 2 && 
                ((clusters[0].length === 4 && clusters[1].length === 1) || 
                 (clusters[0].length === 1 && clusters[1].length === 4))) {
                
                // Find the isolated empty cell
                const isolatedCell = clusters[0].length === 1 ? clusters[0][0] : clusters[1][0];
                
                return {
                    row: row,
                    col: isolatedCell,
                    value: targetDigit,
                    rule: 'clustered5emptycells',
                    message: `Found 5 empty cells in row ${row+1} with 4 clustered together. Placing ${targetDigit} in the isolated cell.`
                };
            }
        }
        
        return null;
    }
    
    /**
     * Find clusters of adjacent cells in a sorted array of indices
     * @param {array} indices - Sorted array of cell indices
     * @returns {array} Array of clusters, where each cluster is an array of adjacent indices
     */
    _findClusters(indices) {
        const clusters = [];
        let currentCluster = [indices[0]];
        
        for (let i = 1; i < indices.length; i++) {
            // If this index is adjacent to the previous one, add to current cluster
            if (indices[i] === indices[i-1] + 1) {
                currentCluster.push(indices[i]);
            } else {
                // Start a new cluster
                clusters.push(currentCluster);
                currentCluster = [indices[i]];
            }
        }
        
        // Add the last cluster
        clusters.push(currentCluster);
        
        return clusters;
    }
}

/**
 * RuleManager
 * Manages the application of rules to solve binary puzzles
 */
class RuleManager {
    constructor() {
        this.rules = [
            new EqualNumberRule(),
            new PairsRule(),
            new SandwichRule(),
            new SpreadAntiTripletRule(),
            new QuadAntiTripleRule(),
            new Clustered4EmptyCellsRule(),
            new Clustered5EmptyCellsRule(),
            new DuplicateRow2Rule(),
            new DuplicateRow3Rule()
        ];
    }

    /**
     * Get all available rules
     * @returns {Array} Array of rule objects
     */
    getRules() {
        return this.rules;
    }

    /**
     * Get a rule by name
     * @param {string} name - The name of the rule to get
     * @returns {Rule|null} The rule object or null if not found
     */
    getRule(name) {
        return this.rules.find(rule => rule.getName() === name) || null;
    }
} 