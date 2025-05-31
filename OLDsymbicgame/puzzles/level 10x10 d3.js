/**
 * level 10x10 d3 - 10x10 hard
 * Each puzzle has:
 * - id: unique identifier
 * - name: display name
 * - description: optional description
 * - size: grid size (8, 10, etc.)
 * - grid: 2D array of the initial puzzle state where:
 *   - 0: filled with 0
 *   - 1: filled with 1
 *   - null: cell that needs to be filled by the player
 */

const LEVEL10x10_d3_PUZZLES = [
    {
        id: "P10_3_1",
        name: "P10_3_1",
        description: "10x10 Hard #1",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-24 10:24:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, 0, null, null, 0, 0, null, null, null],
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [1, null, 0, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 1, null, null],
            [1, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 1, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_2",
        name: "P10_3_2",
        description: "10x10 Hard #2",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-24 10:24:31",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, 1, null, null, 0],
            [null, null, 1, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, null, null, 0, null, 0],
            [null, null, null, 0, null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_3",
        name: "P10_3_3",
        description: "10x10 Hard #3",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-24 10:24:33",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, null, 0, null, 1, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, 0, null, null, null],
            [null, 0, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, 0, null, 1, null, 1, null],
            [null, null, 0, null, 0, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 0, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_4",
        name: "P10_3_4",
        description: "10x10 Hard #4",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-24 10:24:34",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, 1, null, null, 0, null, 1, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [0, null, null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_5",
        name: "P10_3_5",
        description: "10x10 Hard #5",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-24 10:24:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [1, 0, null, null, 1, null, null, null, 1, null],
            [null, null, 0, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, null, 1, null, null, null, 1, 0],
            [0, null, 0, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_6",
        name: "P10_3_6",
        description: "10x10 Hard #6",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-24 10:24:37",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, 0, null, 1, null, null, 0],
            [null, 1, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [0, 1, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_7",
        name: "P10_3_7",
        description: "10x10 Hard #7",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-24 10:24:39",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, 0, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, 0, null, 1, null, null, null],
            [1, null, null, null, null, 0, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [1, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [null, null, 1, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_8",
        name: "P10_3_8",
        description: "10x10 Hard #8",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-24 10:24:40",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [1, 1, null, null, 1, 1, null, null, 1, null],
            [1, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_9",
        name: "P10_3_9",
        description: "10x10 Hard #9",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-24 10:24:41",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, 0, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, 1, null, null, 0, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_10",
        name: "P10_3_10",
        description: "10x10 Hard #10",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-24 10:24:43",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, 1, null, null, null, null, 0, null],
            [null, 0, null, null, 0, null, 0, null, 0, null],
            [null, null, 0, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, null, 0, null, null, null],
            [1, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_11",
        name: "P10_3_11",
        description: "10x10 Hard #11",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-24 10:25:04",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, 1, null, 0, null, 1, null],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, 0, null, null, null, 0],
            [null, null, null, 1, null, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, 0, null, null],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, 0, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_12",
        name: "P10_3_12",
        description: "10x10 Hard #12",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-24 10:25:05",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, 0, null, null, 0, null, null, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null, null, 0],
            [0, null, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, 1, null, 0, null],
            [null, 0, 0, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_13",
        name: "P10_3_13",
        description: "10x10 Hard #13",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-24 10:25:07",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null, null, null],
            [null, null, 1, 0, null, 1, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, null, null, null],
            [0, 0, null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_14",
        name: "P10_3_14",
        description: "10x10 Hard #14",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-24 10:25:08",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [0, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null, 1, null],
            [null, null, null, null, null, 1, 1, null, null, 0],
            [null, 0, 0, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_15",
        name: "P10_3_15",
        description: "10x10 Hard #15",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-24 10:25:09",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, 0],
            [null, null, 0, 1, null, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, 1, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [1, null, null, null, 1, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_16",
        name: "P10_3_16",
        description: "10x10 Hard #16",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-24 10:25:11",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, null, 0, 0],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, 0, 0, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_17",
        name: "P10_3_17",
        description: "10x10 Hard #17",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-24 10:25:12",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [1, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [null, null, 1, null, null, null, 1, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_18",
        name: "P10_3_18",
        description: "10x10 Hard #18",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-24 10:25:14",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, 1, 1, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, 1, null, null, 1, null, null, 0, 0, null],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_19",
        name: "P10_3_19",
        description: "10x10 Hard #19",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-24 10:25:15",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, 0, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, null, 1, null, 0, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [0, null, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, 0, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_20",
        name: "P10_3_20",
        description: "10x10 Hard #20",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-24 10:25:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, 1, null, 1],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null, 1, null],
            [0, null, null, 1, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_21",
        name: "P10_3_21",
        description: "10x10 Hard #21",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-24 10:25:18",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 0, null, null, 0],
            [null, 0, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, 1, null, 1, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, null, null, 1, null],
            [null, 0, 0, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_22",
        name: "P10_3_22",
        description: "10x10 Hard #22",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-24 10:25:19",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 0, null, null, null],
            [1, null, 1, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [0, null, 0, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_23",
        name: "P10_3_23",
        description: "10x10 Hard #23",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-24 10:25:20",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, 1, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, 0, null, 1, 1, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_24",
        name: "P10_3_24",
        description: "10x10 Hard #24",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-24 10:25:22",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, 0, null, null, 0, null],
            [1, null, 1, 1, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_25",
        name: "P10_3_25",
        description: "10x10 Hard #25",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-24 10:25:23",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, 0, null, null, 1, null],
            [0, 0, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, 0, null, 1],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_26",
        name: "P10_3_26",
        description: "10x10 Hard #26",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-24 10:25:25",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [0, 0, null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, null, 0, 1, null, 0, 1, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [0, null, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, 0, 0, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_27",
        name: "P10_3_27",
        description: "10x10 Hard #27",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-24 10:25:26",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, 1, null, null, null],
            [1, null, null, null, 0, null, null, null, null, null],
            [1, null, 0, null, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, null, 1, null, 0],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_28",
        name: "P10_3_28",
        description: "10x10 Hard #28",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-24 10:25:28",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, 0, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 1, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null, null, null],
            [1, 1, null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_29",
        name: "P10_3_29",
        description: "10x10 Hard #29",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-24 10:25:29",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, 0, null, 0],
            [null, 0, null, 1, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, 0, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_30",
        name: "P10_3_30",
        description: "10x10 Hard #30",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-24 10:25:31",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, 0, null, null, 0, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [0, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [1, 1, null, null, 0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_31",
        name: "P10_3_31",
        description: "10x10 Hard #31",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-24 10:25:32",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null, null, 1],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_32",
        name: "P10_3_32",
        description: "10x10 Hard #32",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-24 10:25:34",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, null, 1, null, 1, null],
            [null, null, null, 0, null, 1, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, null, 0, 0, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_33",
        name: "P10_3_33",
        description: "10x10 Hard #33",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-24 10:25:35",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, 1, null, 1, null, 1, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, 0, 1, null, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, null, 0, 0],
            [null, 0, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_34",
        name: "P10_3_34",
        description: "10x10 Hard #34",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-24 10:25:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null, 1, 1],
            [1, null, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, 0, null, null, null, 1, 1],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [0, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_35",
        name: "P10_3_35",
        description: "10x10 Hard #35",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-24 10:25:38",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 1, 1],
            [1, null, null, null, null, 0, 1, null, null, null],
            [1, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_36",
        name: "P10_3_36",
        description: "10x10 Hard #36",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-24 10:25:39",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, 0, null, null],
            [1, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, 1, 1, null, null, 0, null, 1, null, null],
            [1, null, null, 0, null, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, 1, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_37",
        name: "P10_3_37",
        description: "10x10 Hard #37",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-24 10:25:41",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, 0, null, 0, 1, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [null, null, 0, null, 0, null, 1, null, null, null],
            [0, null, null, 1, null, null, null, null, null, 0],
            [0, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_38",
        name: "P10_3_38",
        description: "10x10 Hard #38",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-24 10:25:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, 1, 1, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, 1, 1, null, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_39",
        name: "P10_3_39",
        description: "10x10 Hard #39",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-24 10:25:43",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, 1, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, 1, null, null, 1],
            [null, null, null, 1, null, null, null, null, 1, null],
            [1, null, null, null, null, null, 0, null, 1, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_40",
        name: "P10_3_40",
        description: "10x10 Hard #40",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-24 10:25:45",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 71,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, 1, null, 0],
            [1, 0, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, 0, null, 1, null],
            [null, null, null, 1, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, 1, null, null, 0, null, 1, null, 0],
            [1, null, 0, null, null, 0, null, 1, null, null],
            [1, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_41",
        name: "P10_3_41",
        description: "10x10 Hard #41",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-24 10:25:46",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, 0, null, null, 1, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, 0, null, 0, null, 0, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, 1, null, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_42",
        name: "P10_3_42",
        description: "10x10 Hard #42",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-24 10:25:48",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [1, null, 1, 1, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_43",
        name: "P10_3_43",
        description: "10x10 Hard #43",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-24 10:25:49",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, 1, null, null, 0, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, 1, 1, null, null, null, null, null],
            [1, null, 0, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_44",
        name: "P10_3_44",
        description: "10x10 Hard #44",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-24 10:25:50",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, 0, 1, null],
            [null, null, 0, 0, null, 0, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, null, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, 1, null, null, null],
            [1, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, 1, 1, null, 0, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_45",
        name: "P10_3_45",
        description: "10x10 Hard #45",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-24 10:25:52",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 0, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, 0, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, 0, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_46",
        name: "P10_3_46",
        description: "10x10 Hard #46",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-24 10:25:53",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, 1, 1, null],
            [null, 0, 0, null, 1, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_47",
        name: "P10_3_47",
        description: "10x10 Hard #47",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-24 10:25:55",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, 0, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, 0, null, 1, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, 0, null, 0],
            [null, null, null, null, null, 0, null, null, null, null],
            [0, null, null, null, 0, null, null, null, null, null],
            [1, null, 1, null, null, null, 0, null, null, 1],
            [null, null, 1, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_48",
        name: "P10_3_48",
        description: "10x10 Hard #48",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-24 10:25:56",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, 0, 0, null, null, null, 0],
            [null, 0, null, null, null, 1, null, 1, null, null],
            [null, null, 0, null, 1, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, 1, null, null, 0],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, 0, null, 1, null],
            [null, 0, null, null, null, 1, 1, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_49",
        name: "P10_3_49",
        description: "10x10 Hard #49",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-24 10:25:57",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 1],
            [0, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, null, 0, null, 1, null, 1, 1, null, null],
            [1, 0, null, null, null, 0, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 1, null, 1],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_50",
        name: "P10_3_50",
        description: "10x10 Hard #50",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-24 10:25:59",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, 0, 1, null, null],
            [null, null, 1, 1, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, 1, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, 1, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_51",
        name: "P10_3_51",
        description: "10x10 Hard #51",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-24 10:26:00",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 0, null],
            [null, 0, null, null, null, 0, null, null, 0, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, 0, null, 1, 1, null, 0, null, null, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 1, null],
            [null, 1, null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_52",
        name: "P10_3_52",
        description: "10x10 Hard #52",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-24 10:26:02",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, 1, null],
            [null, null, 1, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, 0, 0, null, 1, null],
            [null, 1, null, null, 1, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_53",
        name: "P10_3_53",
        description: "10x10 Hard #53",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-24 10:26:03",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, 0, null, 0, null, 1, null, null, 0],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [null, null, 1, null, null, 0, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [0, null, null, null, 0, null, null, null, 1, null],
            [0, null, 1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_54",
        name: "P10_3_54",
        description: "10x10 Hard #54",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-24 10:26:05",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, 1, null, null, null, null, null, null, 1],
            [null, null, 1, null, 0, null, 0, null, null, null],
            [null, 1, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, 0, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, 1, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_55",
        name: "P10_3_55",
        description: "10x10 Hard #55",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-24 10:26:06",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, 1],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, 0, 1, null, null, 0, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_56",
        name: "P10_3_56",
        description: "10x10 Hard #56",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-24 10:26:07",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 1, 1, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 1, null, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, null, 1, 1],
            [1, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_57",
        name: "P10_3_57",
        description: "10x10 Hard #57",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-24 10:26:09",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, 0, null, null, null, 0, null],
            [1, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, 0, null, 1, null, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, null, null, 0],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_58",
        name: "P10_3_58",
        description: "10x10 Hard #58",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-24 10:26:10",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, 0, null, null, 1, null, null, 0],
            [null, null, null, null, 1, 0, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, 0],
            [null, null, 1, null, 1, null, null, null, null, 0],
            [null, 0, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_59",
        name: "P10_3_59",
        description: "10x10 Hard #59",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-24 10:26:12",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, 0, 0, null, 1, null],
            [1, null, null, null, 1, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, 1, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, null, null, 1],
            [null, 1, null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_60",
        name: "P10_3_60",
        description: "10x10 Hard #60",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-24 10:26:13",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 72,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, 1],
            [1, 1, null, 0, null, 0, null, null, null, null],
            [1, 1, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null, null, null],
            [0, null, null, 0, null, null, null, null, null, 1],
            [0, null, null, null, 0, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, 1, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_61",
        name: "P10_3_61",
        description: "10x10 Hard #61",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-24 10:26:15",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, 0],
            [1, null, null, null, null, 1, 1, null, null, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 0, null, 1],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_62",
        name: "P10_3_62",
        description: "10x10 Hard #62",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-24 10:26:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, 0, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, 0],
            [null, null, 1, null, 0, null, null, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, 1, 1, null, null, 1, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, 0, 1, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_63",
        name: "P10_3_63",
        description: "10x10 Hard #63",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-24 10:26:17",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, 1, 1, null, null],
            [0, null, 1, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, 1, null, 1, null, null, null, null, 1, null],
            [null, null, 1, null, 0, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_64",
        name: "P10_3_64",
        description: "10x10 Hard #64",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-24 10:26:19",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, null, null, 0, 1],
            [null, null, null, null, null, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, 0],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null, 0, null],
            [1, null, 1, null, null, null, 0, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_65",
        name: "P10_3_65",
        description: "10x10 Hard #65",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-24 10:26:20",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, 1, 0, null, null, 1, 1, null, null, null],
            [null, 1, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, 0, null, null, 1],
            [null, 0, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_66",
        name: "P10_3_66",
        description: "10x10 Hard #66",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-24 10:26:22",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 1, null, null],
            [1, null, null, null, null, null, null, 1, 1, null],
            [1, null, null, 0, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, 1, 1, null, 1, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, 0, 1, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_67",
        name: "P10_3_67",
        description: "10x10 Hard #67",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-24 10:26:23",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, 1, null, 0, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, 0, null, null, null, 0, null],
            [0, 0, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_68",
        name: "P10_3_68",
        description: "10x10 Hard #68",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-24 10:26:25",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, 1, null, null, 0, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, 1, 1, null],
            [0, null, null, null, 1, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_69",
        name: "P10_3_69",
        description: "10x10 Hard #69",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-24 10:26:26",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, 1, 1, null, null, null],
            [null, 0, null, 0, null, null, null, 0, null, 0],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, null, 1, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_70",
        name: "P10_3_70",
        description: "10x10 Hard #70",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-24 10:26:28",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, 0, 0, null, null, null],
            [1, null, 0, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null, null, 1],
            [0, null, null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_71",
        name: "P10_3_71",
        description: "10x10 Hard #71",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-24 10:26:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, 0, null, 0, null, null, null, null, null, null],
            [null, 0, 1, null, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [0, 0, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_72",
        name: "P10_3_72",
        description: "10x10 Hard #72",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-24 10:26:32",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, 0, null, null, null, 1, null, null],
            [0, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, 1, 1, null, null],
            [null, null, 0, null, 1, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_73",
        name: "P10_3_73",
        description: "10x10 Hard #73",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-24 10:26:33",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 1, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, 0, null],
            [null, 0, null, null, null, 0, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, 0, 0, null, null],
            [1, null, 0, null, null, null, null, null, null, 1],
            [0, null, 1, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_74",
        name: "P10_3_74",
        description: "10x10 Hard #74",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-24 10:26:35",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, 0, null, null],
            [null, null, 1, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [1, 1, null, null, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_75",
        name: "P10_3_75",
        description: "10x10 Hard #75",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-24 10:26:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 0, null, 0, null, 1],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, 1, null, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, 0, null, 1, null, null, null, null],
            [null, null, 1, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_76",
        name: "P10_3_76",
        description: "10x10 Hard #76",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-24 10:26:38",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, 1, null, null, 0, null, null, 0],
            [null, 1, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, null, 1, null],
            [1, null, 1, 1, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_77",
        name: "P10_3_77",
        description: "10x10 Hard #77",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-24 10:26:40",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, null, 0, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [1, null, 0, null, null, 0, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, 1, null, null, null, null, null, null, null],
            [1, 1, null, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_78",
        name: "P10_3_78",
        description: "10x10 Hard #78",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-24 10:26:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, 0, null, null, null, null, null, null, 0, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, 0, null, 0],
            [null, null, null, null, null, 1, null, null, 0, null],
            [1, null, null, null, null, null, null, null, 0, 1],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_79",
        name: "P10_3_79",
        description: "10x10 Hard #79",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-24 10:26:43",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, 1, 1, null, 1, null, 0],
            [null, 1, null, null, null, null, 0, null, 0, null],
            [1, 1, null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_80",
        name: "P10_3_80",
        description: "10x10 Hard #80",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-24 10:26:45",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 1, 1, null, null],
            [null, 1, null, 0, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [1, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, 1, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_81",
        name: "P10_3_81",
        description: "10x10 Hard #81",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-24 10:26:46",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, 0, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null, null, 0],
            [null, 1, null, null, null, null, 1, null, 1, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_82",
        name: "P10_3_82",
        description: "10x10 Hard #82",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-24 10:26:48",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_83",
        name: "P10_3_83",
        description: "10x10 Hard #83",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-24 10:26:49",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, 0],
            [0, 0, null, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, 1],
            [null, 0, null, null, null, null, 1, null, 1, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, 1, null, null, null, 0],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_84",
        name: "P10_3_84",
        description: "10x10 Hard #84",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-24 10:26:51",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 72,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, 1, null, null, 1, null, null, null, 0, null],
            [null, 1, null, 0, null, null, 0, null, null, 1],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [0, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [1, null, 0, 0, null, null, null, 1, 1, null],
            [null, null, null, 0, null, 0, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_85",
        name: "P10_3_85",
        description: "10x10 Hard #85",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-24 10:26:52",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, 0, null, null, null, 1, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 0, null, null, 1],
            [null, null, 0, 0, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_86",
        name: "P10_3_86",
        description: "10x10 Hard #86",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-24 10:26:54",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, null, 0],
            [null, 0, 0, null, null, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [1, null, 1, null, 1, null, null, null, null, 0],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_87",
        name: "P10_3_87",
        description: "10x10 Hard #87",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-24 10:26:56",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, 1, null, null, 1],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, 1, null, null, null],
            [1, 0, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, null, null, 1, null, null, null, 1, null],
            [1, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_88",
        name: "P10_3_88",
        description: "10x10 Hard #88",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-24 10:26:57",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 0, null, 1, 1, null, null, null, 1, null],
            [null, 0, null, 1, null, 0, 1, null, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_89",
        name: "P10_3_89",
        description: "10x10 Hard #89",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-24 10:26:59",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, null, null, 1, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, 1, null, null],
            [0, null, 1, null, null, null, 1, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_90",
        name: "P10_3_90",
        description: "10x10 Hard #90",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-24 10:27:00",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 0, 1, null, null, null, 0],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_91",
        name: "P10_3_91",
        description: "10x10 Hard #91",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-24 10:27:02",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, 1],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, 1],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 0, 0, null, 1, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_92",
        name: "P10_3_92",
        description: "10x10 Hard #92",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-24 10:27:04",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, null, 0, null, null, 0],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null, 0, null],
            [0, null, null, null, null, 1, null, null, 0, 1],
            [0, null, 0, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [0, null, null, 0, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_93",
        name: "P10_3_93",
        description: "10x10 Hard #93",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-24 10:27:05",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, 1, null, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, 0, null],
            [0, null, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_94",
        name: "P10_3_94",
        description: "10x10 Hard #94",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-24 10:27:07",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, 0, 0, null, null, null, null],
            [null, null, 1, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0, null, 0],
            [1, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, 0, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_95",
        name: "P10_3_95",
        description: "10x10 Hard #95",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-24 10:27:09",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, 1, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null, 0, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_96",
        name: "P10_3_96",
        description: "10x10 Hard #96",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-24 10:27:10",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, 1, null, 0, null, 0, null],
            [1, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, 0, 0],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_97",
        name: "P10_3_97",
        description: "10x10 Hard #97",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-24 10:27:12",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, null, 1],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, 1, 0, null, null],
            [null, null, 1, null, null, null, 1, null, null, 1],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, 1, null, 0, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_98",
        name: "P10_3_98",
        description: "10x10 Hard #98",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-24 10:27:13",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, 0, null, 0, null, null, null],
            [null, null, 0, null, null, null, 0, null, 0, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [1, null, 1, null, null, null, null, null, 0, null],
            [null, 1, null, 1, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_99",
        name: "P10_3_99",
        description: "10x10 Hard #99",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-24 10:27:15",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 0],
            [0, null, null, 1, null, null, 0, 0, null, null],
            [0, null, null, null, 0, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 1, null, 0, 0],
            [null, null, null, 0, null, null, 1, null, 0, null],
            [null, null, 0, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_100",
        name: "P10_3_100",
        description: "10x10 Hard #100",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-24 10:27:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, 1, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, 0, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, 1, 0, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_101",
        name: "P10_3_101",
        description: "10x10 Hard #101",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-24 10:27:18",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, 1, null, null, 1, null, 1, 1, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_102",
        name: "P10_3_102",
        description: "10x10 Hard #102",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-24 10:27:19",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, null, 0, null, null, 0, 0, null],
            [1, null, 0, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, 0, 0, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_103",
        name: "P10_3_103",
        description: "10x10 Hard #103",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-24 10:27:21",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [0, null, 0, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [null, null, 1, null, 1, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, 1, 1, null],
            [null, 1, null, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_104",
        name: "P10_3_104",
        description: "10x10 Hard #104",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-24 10:27:23",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, 1, null, null, null, null, null],
            [0, null, null, 1, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, 0],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_105",
        name: "P10_3_105",
        description: "10x10 Hard #105",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-24 10:27:24",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, 1, 1, null, null, null, null, 1, 1, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, null, 0],
            [1, null, null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, 1, null, null, 1, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_106",
        name: "P10_3_106",
        description: "10x10 Hard #106",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-24 10:27:26",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, null, 0, 0],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, 0, null],
            [null, null, 1, 1, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_107",
        name: "P10_3_107",
        description: "10x10 Hard #107",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-24 10:27:27",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, null, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [1, null, null, 0, null, 1, 0, null, null, null],
            [null, null, null, 0, null, null, 0, null, 0, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, 1, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_108",
        name: "P10_3_108",
        description: "10x10 Hard #108",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-24 10:27:29",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, 0, null, null, 0, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, 1, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_109",
        name: "P10_3_109",
        description: "10x10 Hard #109",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-24 10:27:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 72,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, 0, null, 0, 1, null],
            [0, 0, null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, 1, null, null],
            [null, 1, null, null, 0, null, 0, null, null, 1],
            [null, null, 1, null, null, 0, null, 1, null, null],
            [null, null, null, 1, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_110",
        name: "P10_3_110",
        description: "10x10 Hard #110",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-24 10:27:32",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, 1, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, null, null, 1],
            [null, null, 0, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_111",
        name: "P10_3_111",
        description: "10x10 Hard #111",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-24 10:27:33",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, null, 1, 1],
            [1, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, 0, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_112",
        name: "P10_3_112",
        description: "10x10 Hard #112",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-24 10:27:35",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, null, 1, null, 0],
            [null, 1, null, null, 0, null, 0, null, null, null],
            [0, null, null, null, 0, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [0, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_113",
        name: "P10_3_113",
        description: "10x10 Hard #113",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-24 10:27:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, 1, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, 0, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, 1, null],
            [0, null, null, null, 0, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, 0, null],
            [0, 1, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_114",
        name: "P10_3_114",
        description: "10x10 Hard #114",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-24 10:27:38",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 82,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, 0, 0, null, 0],
            [null, 0, null, null, null, 1, null, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_115",
        name: "P10_3_115",
        description: "10x10 Hard #115",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-24 10:27:39",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, 1, null, 0, null, null, null, 1, 0],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, 0, 0, null],
            [0, 0, null, 1, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_116",
        name: "P10_3_116",
        description: "10x10 Hard #116",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-24 10:27:41",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, 1, null, null, 1, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, 0, 1, null, null, 1, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, 1, 1, null, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_117",
        name: "P10_3_117",
        description: "10x10 Hard #117",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-24 10:27:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, 0, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0, 0, null],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_118",
        name: "P10_3_118",
        description: "10x10 Hard #118",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-24 10:27:44",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null, 1, 0],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_119",
        name: "P10_3_119",
        description: "10x10 Hard #119",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-24 10:27:45",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, 1, null, null, 0, null],
            [null, 0, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [1, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, 0, null, null, null, 1, 1, null, null, 0],
            [1, null, 0, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_120",
        name: "P10_3_120",
        description: "10x10 Hard #120",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-24 10:27:47",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, 0],
            [null, null, 1, null, 0, null, 0, 0, null, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [1, null, null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_121",
        name: "P10_3_121",
        description: "10x10 Hard #121",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-24 10:27:48",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [0, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, 1, null, null, 1, null, null],
            [0, null, null, 0, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_122",
        name: "P10_3_122",
        description: "10x10 Hard #122",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-24 10:27:50",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, 1, null, 0, 0, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 0, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, 0, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_123",
        name: "P10_3_123",
        description: "10x10 Hard #123",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-24 10:27:51",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null, null, null],
            [1, null, null, 1, null, null, null, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_124",
        name: "P10_3_124",
        description: "10x10 Hard #124",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-24 10:27:53",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 0, 0, null, null, 0, null],
            [1, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_125",
        name: "P10_3_125",
        description: "10x10 Hard #125",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-24 10:27:55",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 0, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, 0, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [1, null, null, 1, 0, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_126",
        name: "P10_3_126",
        description: "10x10 Hard #126",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-24 10:27:56",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [0, null, 0, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 0, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, null, null],
            [1, null, null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_127",
        name: "P10_3_127",
        description: "10x10 Hard #127",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-24 10:27:58",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, 0, 1, null, null, null],
            [0, null, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [0, null, 1, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, 0, 0, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_128",
        name: "P10_3_128",
        description: "10x10 Hard #128",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-24 10:27:59",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [1, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [1, null, 0, null, null, null, null, 1, null, null],
            [1, null, null, 1, null, null, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_129",
        name: "P10_3_129",
        description: "10x10 Hard #129",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-24 10:28:01",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, 0, null, 0, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 0],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, 0, 0, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_130",
        name: "P10_3_130",
        description: "10x10 Hard #130",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-24 10:28:02",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, null, null, 1, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, 0],
            [null, null, null, 1, null, null, 1, null, 1, 1],
            [0, 0, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_131",
        name: "P10_3_131",
        description: "10x10 Hard #131",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-24 10:28:04",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, 0, null, 1, null, 0, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 1, 1, null],
            [1, null, null, null, 1, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null, 0, null],
            [null, null, 1, null, null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_132",
        name: "P10_3_132",
        description: "10x10 Hard #132",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-24 10:28:05",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, 1, null, 1, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, 1],
            [null, null, null, null, 0, 0, null, null, 0, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_133",
        name: "P10_3_133",
        description: "10x10 Hard #133",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-24 10:28:07",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, null, 0, null],
            [null, null, 0, null, null, 0, null, null, null, 0],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1, null, 1],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_134",
        name: "P10_3_134",
        description: "10x10 Hard #134",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-24 10:28:08",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, null, 1, null, null],
            [1, null, null, 0, null, null, 1, null, null, null],
            [1, null, null, null, 0, null, null, 1, null, 1],
            [null, null, null, 0, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, 0, null, 0, 0, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_135",
        name: "P10_3_135",
        description: "10x10 Hard #135",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-24 10:28:10",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, null, 1, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 1],
            [1, 0, null, null, null, 1, null, null, null, 1],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, 1, null],
            [null, null, 0, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_136",
        name: "P10_3_136",
        description: "10x10 Hard #136",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-24 10:28:11",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, 1, 1, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, 1, 0, null, null, 0, 0],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_137",
        name: "P10_3_137",
        description: "10x10 Hard #137",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-24 10:28:13",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, 1, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, 0, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, 1, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_138",
        name: "P10_3_138",
        description: "10x10 Hard #138",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-24 10:28:14",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, 1, null, null],
            [0, null, null, null, null, 0, null, null, null, 1],
            [0, null, 0, null, 1, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, 0, null, null, null, 0],
            [1, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_139",
        name: "P10_3_139",
        description: "10x10 Hard #139",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-24 10:28:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, 0, null, 0],
            [null, null, null, null, null, 0, 0, null, null, 0],
            [null, 1, 1, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, 1, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, 0],
            [null, null, null, 0, null, null, null, null, 1, null],
            [1, null, null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_140",
        name: "P10_3_140",
        description: "10x10 Hard #140",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-24 10:28:18",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, 1, null, null, null, null, null],
            [1, null, 1, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, 0, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, 0, null, null, 0, null, null],
            [null, null, 0, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_141",
        name: "P10_3_141",
        description: "10x10 Hard #141",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-24 10:28:19",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, 0, null, null, 0, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, 1, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_142",
        name: "P10_3_142",
        description: "10x10 Hard #142",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-24 10:28:21",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, 0, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, 1, null, null, null, null, 1, 0, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 0, null, null, 0, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_143",
        name: "P10_3_143",
        description: "10x10 Hard #143",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-24 10:28:22",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, 1, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, 0, null],
            [1, null, null, null, null, 0, 0, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_144",
        name: "P10_3_144",
        description: "10x10 Hard #144",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-24 10:28:24",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, 1, 1, null, 1, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, 0, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_145",
        name: "P10_3_145",
        description: "10x10 Hard #145",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-24 10:28:25",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 1, null, 1, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, 0, null, null],
            [0, null, 1, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null, null, 1],
            [1, null, null, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_146",
        name: "P10_3_146",
        description: "10x10 Hard #146",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-24 10:28:27",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null, null, 0],
            [0, null, null, 0, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [0, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_147",
        name: "P10_3_147",
        description: "10x10 Hard #147",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-24 10:28:28",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, 0, null, 1, 1, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, null, null, 1, null, null, null, 1, null, null],
            [null, null, 0, null, null, 0, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_148",
        name: "P10_3_148",
        description: "10x10 Hard #148",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-24 10:28:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, 1, 1],
            [null, 0, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, 1, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 1, null, 1],
            [0, null, 1, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_149",
        name: "P10_3_149",
        description: "10x10 Hard #149",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-24 10:28:31",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 0, 1, null, null, null, 1, 1, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, 1, 1, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0, null, null],
            [1, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, 1],
            [null, 1, null, null, null, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_150",
        name: "P10_3_150",
        description: "10x10 Hard #150",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-24 10:28:33",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, 0, null, null, 1, null, 1, null],
            [0, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [1, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_151",
        name: "P10_3_151",
        description: "10x10 Hard #151",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-24 10:28:34",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, 1, 0, null, 0, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1, null, null],
            [1, null, 1, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_152",
        name: "P10_3_152",
        description: "10x10 Hard #152",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-24 10:28:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, 0, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 1, null, null, 1],
            [1, null, 1, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, 1],
            [0, null, null, null, null, 1, null, null, 0, null],
            [1, null, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_153",
        name: "P10_3_153",
        description: "10x10 Hard #153",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-24 10:28:37",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 0, null, 0, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, 1, null, 0, 1, null],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_154",
        name: "P10_3_154",
        description: "10x10 Hard #154",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-24 10:28:39",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, 0, 0, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, null, 1, null, null],
            [null, 0, null, null, 0, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, 0, 0],
            [1, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_155",
        name: "P10_3_155",
        description: "10x10 Hard #155",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-24 10:28:40",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, 1, null, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_156",
        name: "P10_3_156",
        description: "10x10 Hard #156",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-24 10:28:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, 0, 0, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, null, 1, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_157",
        name: "P10_3_157",
        description: "10x10 Hard #157",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-24 10:28:43",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, 1, null, 1],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_158",
        name: "P10_3_158",
        description: "10x10 Hard #158",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-24 10:28:45",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 72,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, 1, 1, null, null, 0],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, 1, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null, 0, null],
            [0, null, null, 1, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, 1, null, 1, null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_159",
        name: "P10_3_159",
        description: "10x10 Hard #159",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-24 10:28:47",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, 0, 0, null, null],
            [1, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [1, null, 1, null, 1, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, 1, null, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_160",
        name: "P10_3_160",
        description: "10x10 Hard #160",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-24 10:28:48",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, 0, null, null, null, 1, null],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, 0, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [1, 0, null, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_161",
        name: "P10_3_161",
        description: "10x10 Hard #161",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-24 10:28:50",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, 1, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, 0, null, null, 0],
            [null, 1, 1, null, null, null, 0, 0, null, null],
            [null, null, null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_162",
        name: "P10_3_162",
        description: "10x10 Hard #162",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-24 10:28:51",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, 1, 1, null, 0, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, 1],
            [0, 1, null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 0, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_163",
        name: "P10_3_163",
        description: "10x10 Hard #163",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-24 10:28:53",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, 1, 1, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [0, null, 0, null, null, 1, null, null, 0, null],
            [1, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_164",
        name: "P10_3_164",
        description: "10x10 Hard #164",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-24 10:28:54",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 0, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, 0, 1, null, 1, null, null, null, 0, null],
            [0, null, null, null, null, 0, null, null, 0, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_165",
        name: "P10_3_165",
        description: "10x10 Hard #165",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-24 10:28:56",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, null, 0, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, 0, null, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, 1, null, 1, 0, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_166",
        name: "P10_3_166",
        description: "10x10 Hard #166",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-24 10:28:57",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [0, null, 0, null, 1, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, 0, null, null, null, null],
            [1, 0, null, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_167",
        name: "P10_3_167",
        description: "10x10 Hard #167",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-24 10:28:59",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 0, 0, null, 0, null, null, 0, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, 1, 1, null, 0, null, null, 0, null],
            [0, null, 0, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_168",
        name: "P10_3_168",
        description: "10x10 Hard #168",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-24 10:29:00",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, 1, null, 0, 0, null, 0, null, null, null],
            [null, 1, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, 0, null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_169",
        name: "P10_3_169",
        description: "10x10 Hard #169",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-24 10:29:02",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, null, 1, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_170",
        name: "P10_3_170",
        description: "10x10 Hard #170",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-24 10:29:03",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 1, 1, null, null, 1, null],
            [null, 1, null, null, null, null, 0, null, 1, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, null, 0, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, 0, null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_171",
        name: "P10_3_171",
        description: "10x10 Hard #171",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-24 10:29:05",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, 0, 0, null, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, 0, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, 0, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_172",
        name: "P10_3_172",
        description: "10x10 Hard #172",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-24 10:29:06",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, null, null, null, 1, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, 0],
            [null, null, 0, null, null, 1, null, null, null, 0],
            [null, 1, null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [1, null, 1, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, 1],
            [null, 0, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_173",
        name: "P10_3_173",
        description: "10x10 Hard #173",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-24 10:29:08",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 1, null, 0, null, 0, null, null, null, 0],
            [null, null, null, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_174",
        name: "P10_3_174",
        description: "10x10 Hard #174",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-24 10:29:10",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, 1, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, 1],
            [null, null, null, null, 1, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_175",
        name: "P10_3_175",
        description: "10x10 Hard #175",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-24 10:29:11",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, null, null, 0, 0, null],
            [null, 1, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, 1, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, null, 1, 0],
            [0, null, null, null, 1, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_176",
        name: "P10_3_176",
        description: "10x10 Hard #176",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-24 10:29:13",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [1, null, 0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_177",
        name: "P10_3_177",
        description: "10x10 Hard #177",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-24 10:29:14",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [null, null, null, null, 0, 0, null, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_178",
        name: "P10_3_178",
        description: "10x10 Hard #178",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-24 10:29:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, 1, null, null, 1],
            [1, null, null, 0, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 1, null, null, null, 1, null, null, 1, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_179",
        name: "P10_3_179",
        description: "10x10 Hard #179",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-24 10:29:17",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, 0, null, 1, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [0, null, 0, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_180",
        name: "P10_3_180",
        description: "10x10 Hard #180",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-24 10:29:19",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, 1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, null, 0, null, 1, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_181",
        name: "P10_3_181",
        description: "10x10 Hard #181",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-24 10:29:20",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, 0, null, 0, null, 0],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, 0, 1, null, null, null, 0, null, null, null],
            [null, 0, null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_182",
        name: "P10_3_182",
        description: "10x10 Hard #182",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-24 10:29:22",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, 1, null, null, null, 1, null, null],
            [null, null, 0, null, null, 1, null, 1, null, 1],
            [1, null, null, null, 1, null, null, null, null, 1],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, 0],
            [null, null, null, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_183",
        name: "P10_3_183",
        description: "10x10 Hard #183",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-24 10:29:23",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0, 0, null, null, 0],
            [null, 1, null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_184",
        name: "P10_3_184",
        description: "10x10 Hard #184",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-24 10:29:25",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, 1, 0, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 0, null, 0, 1, null, null],
            [null, 0, null, null, null, null, 0, null, null, 0],
            [1, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, 1, null, 1, null, 1],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_3_185",
        name: "P10_3_185",
        description: "10x10 Hard #185",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-24 10:29:26",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, 0, null, null, 1, null],
            [1, null, 1, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, 0],
            [null, null, 1, null, 1, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_186",
        name: "P10_3_186",
        description: "10x10 Hard #186",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-24 10:29:28",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 0, null, null, 1, 0, null, null, 0],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, 1, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, 0, null, 1, null, null, null, 1, 1, null],
            [0, null, null, null, null, 0, null, null, null, null],
            [1, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_187",
        name: "P10_3_187",
        description: "10x10 Hard #187",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-24 10:29:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, 1, 0, null, null, null, null, 1, 1, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null, null, null],
            [null, null, 1, null, null, null, null, 1, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [1, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_188",
        name: "P10_3_188",
        description: "10x10 Hard #188",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-24 10:29:31",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, 1, null, null, null, 1, 1, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [1, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, 1, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [null, 0, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_189",
        name: "P10_3_189",
        description: "10x10 Hard #189",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-24 10:29:33",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, 1, null, null, 1, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_3_190",
        name: "P10_3_190",
        description: "10x10 Hard #190",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-24 10:29:34",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, 0, 1, null],
            [0, 0, null, 1, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [1, null, null, 1, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [1, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_191",
        name: "P10_3_191",
        description: "10x10 Hard #191",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-24 10:29:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, 1, null, 1, 0, null, 0, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, 0, 0, null, null, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_3_192",
        name: "P10_3_192",
        description: "10x10 Hard #192",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-24 10:29:37",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [0, null, null, 0, 1, null, null, 0, 0, null],
            [null, null, null, null, 1, null, 0, null, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [0, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [0, 1, null, null, null, null, null, 0, null, 1],
            [null, null, null, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_193",
        name: "P10_3_193",
        description: "10x10 Hard #193",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-24 10:29:39",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, 0, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, 0, 0, null, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [1, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_194",
        name: "P10_3_194",
        description: "10x10 Hard #194",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-24 10:29:40",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [1, null, null, 0, null, null, null, 0, 0, null],
            [null, null, 0, null, null, 1, null, 0, null, null],
            [null, 0, null, null, 0, 1, null, null, null, 1],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 0, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [0, null, null, 0, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_195",
        name: "P10_3_195",
        description: "10x10 Hard #195",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-24 10:29:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 1, 1],
            [0, null, 1, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, 1, 0, null, 0, null],
            [null, 0, 0, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, null, null, 1, 1, null],
            [1, null, null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_196",
        name: "P10_3_196",
        description: "10x10 Hard #196",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-24 10:29:43",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, null, 0, 0, null, null],
            [1, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_197",
        name: "P10_3_197",
        description: "10x10 Hard #197",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-24 10:29:45",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [0, null, 1, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, 0],
            [0, null, 0, null, null, 0, null, 0, null, 0],
            [null, null, 0, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_3_198",
        name: "P10_3_198",
        description: "10x10 Hard #198",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-24 10:29:46",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 0, null, 0, 0, null, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [0, null, null, null, 0, null, null, null, 1, null],
            [0, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 0, null, 0, null, null, null],
            [0, 1, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, 1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_3_199",
        name: "P10_3_199",
        description: "10x10 Hard #199",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-24 10:29:48",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, 1, null, null, null, 0, null, null, null, 0],
            [null, null, null, 0, 1, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, 0, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, 1],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_3_200",
        name: "P10_3_200",
        description: "10x10 Hard #200",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=3&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-24 10:29:50",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 15,
            backtracking_score: 15,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 15,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 9,
                fillSandwiches: 6,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 2,
                tryFillCells: 6
            },
            time_taken: 2
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, 0, null, null, 1, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, 0, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [1, null, null, 0, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, 0, null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL10x10_d3_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL10x10_d3_PUZZLES = LEVEL10x10_d3_PUZZLES;
}
