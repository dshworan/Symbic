/**
 * level 8x8 d1 - 8x8 easy
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

const LEVEL8x8_d1_PUZZLES = [
    {
        id: "P8_1_1",
        name: "P8_1_1",
        description: "8x8 Easy #1",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 22:52:54",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.001352071762085
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, 1, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [null, null, 1, null, null, null, null, null],
            [0, 0, null, 1, null, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, 1, null, null, null, 0, null, 1],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_2",
        name: "P8_1_2",
        description: "8x8 Easy #2",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 22:52:55",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013089179992676
        },
        grid: [
            [null, 1, null, 1, null, null, 0, null],
            [0, null, 0, null, null, 1, null, 1],
            [0, null, null, 1, null, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 1],
            [1, null, null, 0, null, 0, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_3",
        name: "P8_1_3",
        description: "8x8 Easy #3",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 22:52:57",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010280609130859
        },
        grid: [
            [0, null, null, 1, null, null, null, 1],
            [0, null, 0, null, null, null, 1, 1],
            [null, 1, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 0, 0],
            [1, 0, null, 1, null, null, null, 0],
            [null, null, null, null, 0, null, 1, null],
            [1, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_4",
        name: "P8_1_4",
        description: "8x8 Easy #4",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 22:52:58",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0020990371704102
        },
        grid: [
            [null, null, 0, null, 0, null, 0, 1],
            [null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_5",
        name: "P8_1_5",
        description: "8x8 Easy #5",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 22:53:00",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00055789947509766
        },
        grid: [
            [1, null, 1, null, 1, null, 0, 0],
            [null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, 1, null, null],
            [0, 0, null, null, null, null, 1, 1],
            [0, null, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [1, 1, null, null, 0, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_6",
        name: "P8_1_6",
        description: "8x8 Easy #6",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 22:53:01",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0006108283996582
        },
        grid: [
            [1, null, null, null, 0, null, null, 0],
            [null, 0, 0, null, null, 1, 1, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, 1, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_7",
        name: "P8_1_7",
        description: "8x8 Easy #7",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 22:53:03",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010330677032471
        },
        grid: [
            [null, 0, 0, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, 1, null, null, 0],
            [0, null, 0, null, 1, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, 1],
            [1, null, 1, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_8",
        name: "P8_1_8",
        description: "8x8 Easy #8",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 22:53:04",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010600090026855
        },
        grid: [
            [null, 1, null, 0, null, null, null, 1],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 0, 0, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, 0, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 1, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_9",
        name: "P8_1_9",
        description: "8x8 Easy #9",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 22:53:06",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00062894821166992
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0],
            [0, null, null, null, null, 1, null, null],
            [null, null, 1, 1, null, null, null, 0],
            [0, null, 1, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, 0, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_10",
        name: "P8_1_10",
        description: "8x8 Easy #10",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 22:53:07",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011990070343018
        },
        grid: [
            [0, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [null, null, 0, 1, null, null, null, 0],
            [0, null, null, 1, null, 1, 1, null],
            [1, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_11",
        name: "P8_1_11",
        description: "8x8 Easy #11",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 22:53:08",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00061416625976562
        },
        grid: [
            [null, 0, 0, null, 0, null, null, 1],
            [0, null, null, null, null, 1, null, 1],
            [0, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null],
            [1, null, null, 1, null, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 1, 1, null, null, null],
            [null, 1, 1, null, 1, null, 1, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_12",
        name: "P8_1_12",
        description: "8x8 Easy #12",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 22:53:10",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011742115020752
        },
        grid: [
            [0, 0, null, null, 0, 0, null, 1],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [1, 1, null, null, null, 0, 0, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, 0, null, null, null, null],
            [1, null, 0, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_13",
        name: "P8_1_13",
        description: "8x8 Easy #13",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 22:53:11",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00060820579528809
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, 1, 1, null, 0, null],
            [null, null, null, null, 1, null, 0, null],
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, 1, null, null, null],
            [null, 0, null, null, null, null, 0, 1],
            [null, 0, null, null, 1, 1, null, 1],
            [1, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_14",
        name: "P8_1_14",
        description: "8x8 Easy #14",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 22:53:12",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00068998336791992
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, 1, 1, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, 1, null, null, null],
            [0, null, 0, null, 0, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_15",
        name: "P8_1_15",
        description: "8x8 Easy #15",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 22:53:14",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00054597854614258
        },
        grid: [
            [1, null, null, null, 0, 0, null, 0],
            [null, 1, null, null, 0, 0, null, 1],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, 1, null, null, 0],
            [null, null, null, null, 1, 1, null, 0],
            [null, 0, 0, null, null, 1, null, null],
            [0, 0, null, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_16",
        name: "P8_1_16",
        description: "8x8 Easy #16",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 22:53:15",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00046610832214355
        },
        grid: [
            [null, null, null, 0, null, 0, null, 0],
            [0, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, null, 1],
            [null, null, 1, 1, null, null, 0, 1],
            [1, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, 0, 0],
            [null, null, null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_17",
        name: "P8_1_17",
        description: "8x8 Easy #17",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 22:53:17",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00047993659973145
        },
        grid: [
            [null, 1, 1, null, 1, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, 0, null, null],
            [null, 0, null, 1, null, null, null, 1],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_18",
        name: "P8_1_18",
        description: "8x8 Easy #18",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 22:53:18",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011470317840576
        },
        grid: [
            [1, null, 1, null, 1, null, null, null],
            [null, null, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, 1],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0],
            [0, null, null, null, null, 1, 1, null],
            [0, null, 0, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_19",
        name: "P8_1_19",
        description: "8x8 Easy #19",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 22:53:19",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00092887878417969
        },
        grid: [
            [null, null, null, 0, null, null, 0, null],
            [null, null, 1, null, 1, 1, null, 0],
            [0, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 0, 0, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_20",
        name: "P8_1_20",
        description: "8x8 Easy #20",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 22:53:21",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014731884002686
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, null],
            [1, null, null, 0, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, 0, null],
            [0, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_21",
        name: "P8_1_21",
        description: "8x8 Easy #21",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 22:53:22",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00062084197998047
        },
        grid: [
            [0, null, null, null, null, null, 1, null],
            [0, null, 0, 0, null, null, null, 1],
            [null, 1, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, 0, null, 0, null, null, 1],
            [null, null, 0, null, null, null, 0, null],
            [1, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_22",
        name: "P8_1_22",
        description: "8x8 Easy #22",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 22:53:24",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00050806999206543
        },
        grid: [
            [1, null, 1, null, 1, null, 0, 0],
            [null, null, null, 0, null, null, null, 1],
            [1, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1],
            [1, null, 0, 1, null, null, 0, null],
            [null, null, null, 1, null, 1, null, 1],
            [1, null, 1, null, null, null, null, null],
            [0, null, null, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_23",
        name: "P8_1_23",
        description: "8x8 Easy #23",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 22:53:25",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00098800659179688
        },
        grid: [
            [1, null, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, 0, null, null, 1],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, 0, null, 1, 1],
            [null, 0, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_24",
        name: "P8_1_24",
        description: "8x8 Easy #24",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 22:53:26",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018229484558105
        },
        grid: [
            [1, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, 0, null, null],
            [null, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, 0],
            [0, null, null, 0, null, null, 1, null],
            [null, 1, 0, null, null, null, 1, 0],
            [1, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_25",
        name: "P8_1_25",
        description: "8x8 Easy #25",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 22:53:28",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00050115585327148
        },
        grid: [
            [1, 0, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, 1, null],
            [null, null, null, 0, null, null, 1, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, null, 1, null, 1, null, 1],
            [0, null, 0, null, null, 1, null, 1],
            [null, 0, 0, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_26",
        name: "P8_1_26",
        description: "8x8 Easy #26",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 22:53:29",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0013241767883301
        },
        grid: [
            [null, null, 0, null, 1, null, null, 0],
            [0, 1, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, 1],
            [null, 0, null, 0, null, null, null, null],
            [null, null, 1, null, null, 1, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_27",
        name: "P8_1_27",
        description: "8x8 Easy #27",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 22:53:30",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00078606605529785
        },
        grid: [
            [null, 0, null, null, null, 1, null, null],
            [1, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, 0, 0, null],
            [0, null, 0, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [0, 0, null, null, null, null, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, 1, 1, null, 1, null, 1, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_28",
        name: "P8_1_28",
        description: "8x8 Easy #28",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 22:53:32",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011780261993408
        },
        grid: [
            [null, null, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, 0],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, 0],
            [0, null, 1, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_29",
        name: "P8_1_29",
        description: "8x8 Easy #29",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 22:53:33",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00085806846618652
        },
        grid: [
            [0, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1],
            [0, null, 0, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [1, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_30",
        name: "P8_1_30",
        description: "8x8 Easy #30",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 22:53:35",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00028109550476074
        },
        grid: [
            [0, null, 1, 1, null, null, 0, 1],
            [null, null, null, 0, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, 0, null],
            [null, null, 0, 0, null, null, null, 1],
            [1, null, null, null, null, 0, null, null],
            [1, 1, null, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_31",
        name: "P8_1_31",
        description: "8x8 Easy #31",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 22:53:36",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011780261993408
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, null],
            [0, null, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, 0],
            [0, null, 1, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_32",
        name: "P8_1_32",
        description: "8x8 Easy #32",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 22:53:37",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010168552398682
        },
        grid: [
            [1, null, 1, 1, null, 0, null, 0],
            [null, null, null, 1, null, null, null, null],
            [1, null, 0, null, null, null, 1, 0],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, 0, null, 1, 1, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_33",
        name: "P8_1_33",
        description: "8x8 Easy #33",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 22:53:39",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010550022125244
        },
        grid: [
            [1, null, null, 0, null, 1, 1, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, null, 1, null, 1, null],
            [null, 0, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, 0, 0, null],
            [null, 1, 1, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_34",
        name: "P8_1_34",
        description: "8x8 Easy #34",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 22:53:41",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0017409324645996
        },
        grid: [
            [1, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, null, 1, 1],
            [null, 0, null, 1, null, null, null, null],
            [1, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [0, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_35",
        name: "P8_1_35",
        description: "8x8 Easy #35",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 22:53:42",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00082111358642578
        },
        grid: [
            [null, 0, null, 1, null, null, 0, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, null, null, 1, null],
            [0, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, 0],
            [1, 0, null, 0, 1, null, 1, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_36",
        name: "P8_1_36",
        description: "8x8 Easy #36",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 22:53:44",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00057387351989746
        },
        grid: [
            [0, 1, null, null, null, null, 1, 1],
            [null, null, null, 0, null, 0, null, null],
            [0, null, 0, null, 1, null, null, 1],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, null, 0],
            [1, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_37",
        name: "P8_1_37",
        description: "8x8 Easy #37",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 22:53:45",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00076508522033691
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, 0, 0, null, null, 1],
            [null, null, null, null, 0, null, null, 1],
            [1, null, 1, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0],
            [null, 0, null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_38",
        name: "P8_1_38",
        description: "8x8 Easy #38",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 22:53:46",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010380744934082
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, 0, 0, null, null],
            [null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, 0, null, null, null],
            [0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_39",
        name: "P8_1_39",
        description: "8x8 Easy #39",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 22:53:48",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0015671253204346
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1],
            [null, null, 0, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_40",
        name: "P8_1_40",
        description: "8x8 Easy #40",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 22:53:50",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043702125549316
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, 1, null, null, null, 1],
            [0, 0, null, 1, null, null, 1, 1],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 1],
            [1, 0, null, null, null, 0, null, null],
            [1, null, null, 0, null, null, 1, null],
            [null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_41",
        name: "P8_1_41",
        description: "8x8 Easy #41",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 22:53:51",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013129711151123
        },
        grid: [
            [null, null, 1, null, 1, 1, null, 0],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, 1, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null],
            [0, null, 0, null, 0, 0, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_42",
        name: "P8_1_42",
        description: "8x8 Easy #42",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 22:53:53",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00052118301391602
        },
        grid: [
            [null, 1, 1, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, 1, 1, null],
            [null, null, 1, 1, null, null, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, 0, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_43",
        name: "P8_1_43",
        description: "8x8 Easy #43",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 22:53:54",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00073480606079102
        },
        grid: [
            [0, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, 0, null, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, null, 1, null, 0],
            [null, null, 0, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_44",
        name: "P8_1_44",
        description: "8x8 Easy #44",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 22:53:55",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00065398216247559
        },
        grid: [
            [1, 1, null, null, 0, null, null, 0],
            [0, null, null, null, 0, 1, null, 1],
            [null, null, 1, null, null, null, null, null],
            [0, null, 1, null, null, 0, null, 1],
            [null, null, null, 0, null, null, null, 0],
            [0, null, 0, null, 1, null, 0, null],
            [null, null, null, null, null, null, 0, 0],
            [0, 0, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_45",
        name: "P8_1_45",
        description: "8x8 Easy #45",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 22:53:57",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.002047061920166
        },
        grid: [
            [null, 1, null, 0, null, null, null, null],
            [0, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 1],
            [null, 0, 0, null, null, null, 0, 1],
            [1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_46",
        name: "P8_1_46",
        description: "8x8 Easy #46",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 22:53:58",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00074100494384766
        },
        grid: [
            [null, null, null, null, 0, 0, null, 1],
            [null, 0, 0, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, 1, 0],
            [null, 1, 1, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_47",
        name: "P8_1_47",
        description: "8x8 Easy #47",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 22:54:00",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00070405006408691
        },
        grid: [
            [0, 0, null, null, null, null, 1, 1],
            [null, null, null, 1, null, null, null, 1],
            [null, 0, 0, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 1, 0],
            [1, 1, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_48",
        name: "P8_1_48",
        description: "8x8 Easy #48",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 22:54:01",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00067901611328125
        },
        grid: [
            [null, 0, 0, null, 1, null, null, null],
            [0, null, null, null, null, 0, null, 1],
            [null, null, 0, null, 1, null, null, 1],
            [1, null, 0, null, null, null, null, null],
            [1, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 1, null, null],
            [null, 1, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_49",
        name: "P8_1_49",
        description: "8x8 Easy #49",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 22:54:02",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00083518028259277
        },
        grid: [
            [null, 1, 1, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, 1],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, 0, null, 0, null, null, null],
            [null, 0, null, 1, null, null, null, null],
            [1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_50",
        name: "P8_1_50",
        description: "8x8 Easy #50",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 22:54:04",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00064992904663086
        },
        grid: [
            [1, null, 1, 1, null, 0, null, 0],
            [1, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, 1, 1, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_51",
        name: "P8_1_51",
        description: "8x8 Easy #51",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 22:54:05",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016341209411621
        },
        grid: [
            [null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, null, 1],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, 1],
            [null, 0, null, 1, 1, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_52",
        name: "P8_1_52",
        description: "8x8 Easy #52",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 22:54:06",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00031900405883789
        },
        grid: [
            [0, null, null, 1, null, 0, 0, null],
            [0, 0, null, null, 1, null, null, 1],
            [null, null, 1, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0],
            [null, 1, null, null, 0, null, 1, null],
            [1, null, 0, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_53",
        name: "P8_1_53",
        description: "8x8 Easy #53",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 22:54:08",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010590553283691
        },
        grid: [
            [null, 1, null, null, 0, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, null, 1, null, null, 0],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, 0, 0, null],
            [1, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_54",
        name: "P8_1_54",
        description: "8x8 Easy #54",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 22:54:09",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.000518798828125
        },
        grid: [
            [0, null, null, null, 0, null, 0, 1],
            [null, 1, 1, null, 0, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null],
            [1, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, 0],
            [null, 0, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_55",
        name: "P8_1_55",
        description: "8x8 Easy #55",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 22:54:11",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00054001808166504
        },
        grid: [
            [1, null, null, null, null, null, 1, null],
            [null, null, null, 1, 1, null, null, 0],
            [null, 0, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, 1, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_56",
        name: "P8_1_56",
        description: "8x8 Easy #56",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 22:54:12",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00048708915710449
        },
        grid: [
            [null, 1, 1, null, 1, 1, null, 0],
            [0, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, 1, null, null, 0, 0, null, 1],
            [1, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_57",
        name: "P8_1_57",
        description: "8x8 Easy #57",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 22:54:13",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0018410682678223
        },
        grid: [
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [1, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_58",
        name: "P8_1_58",
        description: "8x8 Easy #58",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 22:54:15",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00059700012207031
        },
        grid: [
            [null, null, null, 0, null, 0, 0, null],
            [null, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [null, 0, 0, null, null, null, null, 1],
            [1, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_59",
        name: "P8_1_59",
        description: "8x8 Easy #59",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 22:54:16",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00058078765869141
        },
        grid: [
            [0, null, 0, null, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [0, 0, null, null, null, null, 1, 1],
            [null, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, 0],
            [1, null, null, 0, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_60",
        name: "P8_1_60",
        description: "8x8 Easy #60",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 22:54:18",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00073814392089844
        },
        grid: [
            [null, null, null, null, null, 1, null, 1],
            [null, 1, 1, null, 0, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, 1, null],
            [1, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_61",
        name: "P8_1_61",
        description: "8x8 Easy #61",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 22:54:20",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00046396255493164
        },
        grid: [
            [1, null, 1, null, null, 0, 0, null],
            [1, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, 1, 1, null, null, 1, null],
            [0, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, 0],
            [0, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_62",
        name: "P8_1_62",
        description: "8x8 Easy #62",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 22:54:21",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001168966293335
        },
        grid: [
            [1, 1, null, 0, null, 0, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 1, 1, null, null, null, null, null],
            [null, 1, null, null, 1, null, 0, 0],
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, 1, null, 1],
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, 1, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_63",
        name: "P8_1_63",
        description: "8x8 Easy #63",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 22:54:22",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0019550323486328
        },
        grid: [
            [1, null, null, 0, null, null, 1, 0],
            [null, 0, null, 0, null, null, null, null],
            [1, null, 1, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [0, null, null, null, null, null, 0, 1],
            [null, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_64",
        name: "P8_1_64",
        description: "8x8 Easy #64",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 22:54:24",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00032997131347656
        },
        grid: [
            [null, 1, 1, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, 1],
            [1, null, null, null, null, 0, 0, null],
            [null, null, 1, 1, null, null, 0, null],
            [0, null, null, 1, 1, null, null, 0],
            [null, 0, null, null, 1, 1, null, null],
            [null, 0, 0, null, null, 1, null, null],
            [1, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_65",
        name: "P8_1_65",
        description: "8x8 Easy #65",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 22:54:25",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0004570484161377
        },
        grid: [
            [0, 0, null, null, null, null, 1, 1],
            [1, null, null, null, 1, null, null, null],
            [null, 0, null, null, 1, null, 1, 1],
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1],
            [null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, 1, null, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_66",
        name: "P8_1_66",
        description: "8x8 Easy #66",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 22:54:27",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00062108039855957
        },
        grid: [
            [null, null, null, 1, 1, null, null, null],
            [null, 0, 0, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, 1, 1, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_67",
        name: "P8_1_67",
        description: "8x8 Easy #67",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 22:54:28",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00052094459533691
        },
        grid: [
            [null, 0, null, null, 1, null, null, 0],
            [null, null, null, 0, null, null, null, 1],
            [0, null, 1, null, null, null, 1, null],
            [0, null, null, null, 0, null, null, 1],
            [null, null, 1, null, 0, null, 0, null],
            [0, null, null, null, null, 1, null, 1],
            [0, null, 1, null, 1, null, null, 1],
            [null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_68",
        name: "P8_1_68",
        description: "8x8 Easy #68",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 22:54:29",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00091123580932617
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [0, null, null, 1, null, null, 0, null],
            [0, 1, null, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, null, 1, null],
            [null, 1, 1, null, 1, null, 1, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_69",
        name: "P8_1_69",
        description: "8x8 Easy #69",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 22:54:31",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0015869140625
        },
        grid: [
            [null, null, 0, null, null, 1, 1, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null],
            [0, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [null, 1, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_70",
        name: "P8_1_70",
        description: "8x8 Easy #70",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 22:54:32",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00079488754272461
        },
        grid: [
            [null, null, 1, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, 1, 1, null, null, 0],
            [1, null, null, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [1, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_71",
        name: "P8_1_71",
        description: "8x8 Easy #71",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 22:54:34",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013668537139893
        },
        grid: [
            [null, null, null, null, null, 1, 1, null],
            [0, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, 0, 0, null, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, 1, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_72",
        name: "P8_1_72",
        description: "8x8 Easy #72",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 22:54:35",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00038599967956543
        },
        grid: [
            [0, null, null, null, null, null, 0, 1],
            [null, null, 0, 0, null, 1, null, null],
            [1, 1, null, 0, null, null, null, 0],
            [1, null, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 0],
            [1, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_73",
        name: "P8_1_73",
        description: "8x8 Easy #73",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 22:54:36",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011498928070068
        },
        grid: [
            [null, 1, 1, null, null, 0, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, 1, null, null],
            [1, 1, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_74",
        name: "P8_1_74",
        description: "8x8 Easy #74",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 22:54:38",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00087094306945801
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, 0, null, 1],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, 1, null, null, 0, 0, null],
            [null, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null],
            [0, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_75",
        name: "P8_1_75",
        description: "8x8 Easy #75",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 22:54:39",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0013911724090576
        },
        grid: [
            [null, 0, null, null, 1, null, null, 1],
            [1, null, null, null, null, 0, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, 1, null, 1, null, 1, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_76",
        name: "P8_1_76",
        description: "8x8 Easy #76",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 22:54:40",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00095200538635254
        },
        grid: [
            [null, null, 0, null, null, null, null, 1],
            [null, 0, 0, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 1, 1, null],
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null],
            [null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_77",
        name: "P8_1_77",
        description: "8x8 Easy #77",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 22:54:42",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0024149417877197
        },
        grid: [
            [0, null, 0, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, 1, null, null, 0],
            [1, 1, null, null, null, null, 1, 0],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_78",
        name: "P8_1_78",
        description: "8x8 Easy #78",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 22:54:43",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0020840167999268
        },
        grid: [
            [0, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, 0, null],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, 0, null, 1, null, null],
            [null, null, 1, null, 0, null, 0, null],
            [null, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_79",
        name: "P8_1_79",
        description: "8x8 Easy #79",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 22:54:45",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010440349578857
        },
        grid: [
            [1, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, 1],
            [null, null, null, 0, null, 1, null, null],
            [0, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_80",
        name: "P8_1_80",
        description: "8x8 Easy #80",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 22:54:46",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00068211555480957
        },
        grid: [
            [null, null, null, 0, 0, null, null, 1],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, 0, null, null, null, null, 1],
            [1, null, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_81",
        name: "P8_1_81",
        description: "8x8 Easy #81",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 22:54:47",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00047707557678223
        },
        grid: [
            [1, 0, null, 0, 1, null, 1, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [0, 0, null, null, 1, 1, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null],
            [1, null, null, 1, null, null, 0, null],
            [null, null, 0, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_82",
        name: "P8_1_82",
        description: "8x8 Easy #82",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 22:54:49",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00053000450134277
        },
        grid: [
            [null, null, null, null, null, 0, null, 0],
            [null, 0, null, 1, 1, null, null, 0],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [0, 1, null, null, null, 1, 1, null],
            [0, 1, null, 1, 0, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_83",
        name: "P8_1_83",
        description: "8x8 Easy #83",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 22:54:50",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00070095062255859
        },
        grid: [
            [null, 0, null, null, 0, null, 0, 1],
            [null, null, 1, null, null, 0, null, null],
            [0, null, 1, 1, null, null, 1, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 1],
            [1, null, 1, null, null, 0, null, null],
            [1, 1, null, 0, null, null, 1, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_84",
        name: "P8_1_84",
        description: "8x8 Easy #84",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 22:54:52",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00052380561828613
        },
        grid: [
            [0, 0, null, null, 0, 0, null, 1],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, null, 0],
            [null, null, null, null, 1, null, null, 0],
            [1, null, null, 0, null, null, null, null],
            [1, 1, null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_85",
        name: "P8_1_85",
        description: "8x8 Easy #85",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 22:54:53",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00087881088256836
        },
        grid: [
            [0, null, null, 1, null, null, null, 1],
            [null, null, 1, null, 0, null, 1, null],
            [1, 0, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, 0, 0],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, 0, 0, null, 0, null, 0],
            [1, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_86",
        name: "P8_1_86",
        description: "8x8 Easy #86",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 22:54:54",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00046896934509277
        },
        grid: [
            [1, null, null, null, 1, null, 1, 0],
            [null, null, 0, 0, null, null, 1, null],
            [1, 1, null, null, null, null, null, 0],
            [1, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [0, null, 0, null, 0, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, 1, null, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_87",
        name: "P8_1_87",
        description: "8x8 Easy #87",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 22:54:56",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00064587593078613
        },
        grid: [
            [1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, 1, null, 1],
            [1, null, null, 1, null, 0, null, null],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_88",
        name: "P8_1_88",
        description: "8x8 Easy #88",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 22:54:57",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00055193901062012
        },
        grid: [
            [0, null, 0, null, null, null, 0, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, 0, 0, null, null, 1, 0],
            [1, null, null, null, null, 0, null, 0],
            [null, null, 1, null, null, null, null, null],
            [1, 0, null, 0, null, null, 1, null],
            [1, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_89",
        name: "P8_1_89",
        description: "8x8 Easy #89",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 22:54:58",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00032901763916016
        },
        grid: [
            [null, null, 1, null, 1, 1, null, 0],
            [null, 0, null, null, 1, null, null, null],
            [0, 0, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, 1, 1],
            [1, null, null, 0, 0, null, null, 1],
            [1, 1, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, 1, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_90",
        name: "P8_1_90",
        description: "8x8 Easy #90",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 22:55:00",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0006110668182373
        },
        grid: [
            [0, null, null, 0, null, 1, null, 1],
            [null, null, 1, null, null, null, 0, null],
            [0, null, 1, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, 1, 0],
            [0, null, null, 1, null, null, null, null],
            [1, 1, null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_91",
        name: "P8_1_91",
        description: "8x8 Easy #91",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 22:55:01",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00074982643127441
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, 1, null, 0, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, null, 0, 0, null, 0, null],
            [1, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_92",
        name: "P8_1_92",
        description: "8x8 Easy #92",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 22:55:03",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011980533599854
        },
        grid: [
            [1, null, 1, null, null, 1, null, 0],
            [1, null, 0, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, 1],
            [0, null, null, null, null, null, 1, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 1],
            [0, null, null, null, 1, 1, null, 1],
            [0, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_93",
        name: "P8_1_93",
        description: "8x8 Easy #93",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 22:55:04",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00051712989807129
        },
        grid: [
            [null, 1, null, null, 1, null, null, 0],
            [0, null, null, null, null, 1, 1, null],
            [null, 1, null, 0, null, null, 1, null],
            [1, null, null, 0, 0, null, null, 1],
            [1, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [0, null, null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_94",
        name: "P8_1_94",
        description: "8x8 Easy #94",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 22:55:05",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.001223087310791
        },
        grid: [
            [null, null, null, 0, null, null, 1, null],
            [null, null, null, 0, 0, null, null, 1],
            [null, null, 1, null, null, null, 1, 1],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null],
            [null, 0, null, null, 0, null, null, 1],
            [null, null, 1, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_95",
        name: "P8_1_95",
        description: "8x8 Easy #95",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 22:55:07",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.001413106918335
        },
        grid: [
            [0, null, null, null, null, 1, 1, null],
            [null, 1, null, null, 0, null, null, 1],
            [null, null, 0, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, 1, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_96",
        name: "P8_1_96",
        description: "8x8 Easy #96",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 22:55:08",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010719299316406
        },
        grid: [
            [1, null, null, 1, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 0, 0, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, 0, null, null, null, 1],
            [0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_97",
        name: "P8_1_97",
        description: "8x8 Easy #97",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 22:55:10",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0025479793548584
        },
        grid: [
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, 0],
            [1, 0, null, null, null, null, null, 0],
            [null, 0, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, 0, null, null],
            [null, null, 0, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_98",
        name: "P8_1_98",
        description: "8x8 Easy #98",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 22:55:11",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0015401840209961
        },
        grid: [
            [1, 1, null, 0, null, null, 0, null],
            [null, null, 0, null, null, 1, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [0, 0, null, 1, null, 1, null, null],
            [0, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_99",
        name: "P8_1_99",
        description: "8x8 Easy #99",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 22:55:12",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00098299980163574
        },
        grid: [
            [null, null, null, 0, null, null, null, 1],
            [0, null, null, null, 1, null, null, 1],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, 0, null, null, null, null, 0],
            [null, null, null, 0, null, null, 1, null],
            [null, 0, 0, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_100",
        name: "P8_1_100",
        description: "8x8 Easy #100",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 22:55:14",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00061511993408203
        },
        grid: [
            [1, null, null, 0, 0, null, null, null],
            [1, null, null, 0, null, null, 0, null],
            [null, 1, null, null, 0, null, 0, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, null],
            [0, null, null, null, null, null, 1, 1],
            [null, 1, null, null, 1, null, null, null],
            [0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_101",
        name: "P8_1_101",
        description: "8x8 Easy #101",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 22:55:15",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00094199180603027
        },
        grid: [
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [0, 0, null, 1, null, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [null, 0, null, null, null, null, 1, null],
            [1, 0, null, 0, null, null, null, null],
            [null, null, null, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_102",
        name: "P8_1_102",
        description: "8x8 Easy #102",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 22:55:16",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00066304206848145
        },
        grid: [
            [null, 0, null, 1, null, null, null, null],
            [1, null, 1, null, null, 0, null, 0],
            [1, null, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, 1],
            [0, null, null, null, 1, null, 0, 1],
            [null, 1, null, 0, null, null, null, null],
            [null, 1, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_103",
        name: "P8_1_103",
        description: "8x8 Easy #103",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 22:55:18",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00064587593078613
        },
        grid: [
            [0, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 1],
            [1, null, 1, null, null, 0, null, null],
            [null, 0, null, null, 0, 0, null, null],
            [null, null, 1, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_104",
        name: "P8_1_104",
        description: "8x8 Easy #104",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 22:55:19",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011310577392578
        },
        grid: [
            [0, null, null, null, 1, null, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, 0, null, 0, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, 1, null, null, 0, 1],
            [null, 0, 0, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_105",
        name: "P8_1_105",
        description: "8x8 Easy #105",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 22:55:21",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00047898292541504
        },
        grid: [
            [0, 0, null, null, 1, 1, null, 1],
            [null, null, 0, null, null, 1, 1, null],
            [0, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, 1, 0],
            [null, 1, 1, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_106",
        name: "P8_1_106",
        description: "8x8 Easy #106",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 22:55:22",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0010981559753418
        },
        grid: [
            [null, 0, null, null, null, null, 1, 1],
            [1, null, null, null, null, 0, 0, null],
            [1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, 1, 1, null, null, null, null, 0],
            [0, 1, null, null, 0, null, 0, null],
            [null, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_107",
        name: "P8_1_107",
        description: "8x8 Easy #107",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 22:55:23",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018911361694336
        },
        grid: [
            [0, null, null, null, null, null, 1, null],
            [null, 0, null, 1, null, 1, null, null],
            [1, null, 1, null, null, null, 0, 0],
            [null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, null, null, null, 1, 1],
            [null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_108",
        name: "P8_1_108",
        description: "8x8 Easy #108",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 22:55:25",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010478496551514
        },
        grid: [
            [0, null, null, 1, null, null, null, 0],
            [null, null, 0, null, 0, null, null, null],
            [null, 1, null, null, null, 1, 1, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_109",
        name: "P8_1_109",
        description: "8x8 Easy #109",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 22:55:26",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00022101402282715
        },
        grid: [
            [null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, 0, 0, null],
            [0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null],
            [null, 1, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_110",
        name: "P8_1_110",
        description: "8x8 Easy #110",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 22:55:27",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017340183258057
        },
        grid: [
            [1, null, null, null, null, 0, null, null],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, null, 0, null, null, 0, null],
            [0, null, 1, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_111",
        name: "P8_1_111",
        description: "8x8 Easy #111",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 22:55:29",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00074195861816406
        },
        grid: [
            [0, 0, null, 0, null, null, 1, 1],
            [null, null, null, null, null, null, 1, null],
            [1, null, 0, 0, null, null, null, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null],
            [1, null, null, null, null, null, 0, null],
            [1, 1, null, null, null, null, 0, 0],
            [null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_112",
        name: "P8_1_112",
        description: "8x8 Easy #112",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 22:55:30",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0028989315032959
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [null, 0, null, null, null, null, 1, null],
            [1, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_113",
        name: "P8_1_113",
        description: "8x8 Easy #113",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 22:55:32",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0021820068359375
        },
        grid: [
            [0, null, null, null, null, 1, null, 1],
            [null, 1, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1],
            [1, null, null, null, null, null, null, 1],
            [1, null, 1, 0, null, 0, null, null],
            [null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_114",
        name: "P8_1_114",
        description: "8x8 Easy #114",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 22:55:33",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0006859302520752
        },
        grid: [
            [0, 1, null, 1, null, 1, 1, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, 1, null, 1],
            [1, 0, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_115",
        name: "P8_1_115",
        description: "8x8 Easy #115",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 22:55:34",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00040698051452637
        },
        grid: [
            [1, 1, null, 0, null, null, 1, 0],
            [null, null, null, 0, null, null, 1, 1],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, null, null, null, 0],
            [null, 0, 0, null, null, null, 0, null],
            [null, null, null, null, 1, null, 0, 0],
            [0, 0, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_116",
        name: "P8_1_116",
        description: "8x8 Easy #116",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 22:55:36",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0024151802062988
        },
        grid: [
            [null, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_117",
        name: "P8_1_117",
        description: "8x8 Easy #117",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 22:55:37",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00087094306945801
        },
        grid: [
            [null, 1, null, 1, null, null, null, null],
            [null, 0, 0, null, 1, null, 0, null],
            [1, null, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_118",
        name: "P8_1_118",
        description: "8x8 Easy #118",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 22:55:38",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0007319450378418
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [0, 0, null, null, null, 1, null, 1],
            [0, 0, null, 0, null, 1, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, 0, null, null, null, 1, null],
            [null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_119",
        name: "P8_1_119",
        description: "8x8 Easy #119",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 22:55:40",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00078296661376953
        },
        grid: [
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, 1, null, 0, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, 0, null],
            [0, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_120",
        name: "P8_1_120",
        description: "8x8 Easy #120",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 22:55:41",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017440319061279
        },
        grid: [
            [1, null, 1, null, null, 0, null, 0],
            [null, 1, null, null, 0, null, null, null],
            [1, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, 1, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_121",
        name: "P8_1_121",
        description: "8x8 Easy #121",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 22:55:43",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013329982757568
        },
        grid: [
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, 0, 0, null, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, null, 1, null, null, null],
            [null, null, 0, null, 1, null, null, 0],
            [null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_122",
        name: "P8_1_122",
        description: "8x8 Easy #122",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 22:55:44",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014030933380127
        },
        grid: [
            [0, null, null, null, 1, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 1, null, null, 0, null, 0],
            [1, null, null, 0, null, null, null, 0],
            [null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [0, 0, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_123",
        name: "P8_1_123",
        description: "8x8 Easy #123",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 22:55:45",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00074291229248047
        },
        grid: [
            [null, null, null, 0, null, 0, 0, null],
            [null, null, 1, null, null, null, 0, null],
            [0, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, 0, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_124",
        name: "P8_1_124",
        description: "8x8 Easy #124",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 22:55:47",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043988227844238
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [1, 1, null, null, null, null, null, null],
            [1, null, null, 0, 0, null, null, 1],
            [null, null, 0, null, 0, null, null, null],
            [1, null, 0, null, null, null, 1, 0],
            [1, null, null, 1, null, null, null, 0],
            [null, 0, null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_125",
        name: "P8_1_125",
        description: "8x8 Easy #125",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 22:55:48",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0021939277648926
        },
        grid: [
            [0, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, 0, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null],
            [0, null, null, null, null, 1, null, 1],
            [null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_126",
        name: "P8_1_126",
        description: "8x8 Easy #126",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 22:55:50",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016000270843506
        },
        grid: [
            [null, 1, 1, null, 0, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, 1, null, 1, null, null, 1, null],
            [null, null, null, 1, null, 0, null, null],
            [1, null, null, null, null, null, null, 0],
            [1, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 0, 0, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_127",
        name: "P8_1_127",
        description: "8x8 Easy #127",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 22:55:51",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010161399841309
        },
        grid: [
            [null, 1, null, 0, 0, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_128",
        name: "P8_1_128",
        description: "8x8 Easy #128",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 22:55:52",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00088906288146973
        },
        grid: [
            [null, 0, null, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, 0, null],
            [0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_129",
        name: "P8_1_129",
        description: "8x8 Easy #129",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 22:55:54",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017800331115723
        },
        grid: [
            [0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, 0],
            [0, null, null, 1, null, 0, null, null],
            [null, null, 1, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, null, 1, 0],
            [null, 0, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_130",
        name: "P8_1_130",
        description: "8x8 Easy #130",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 22:55:55",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00090289115905762
        },
        grid: [
            [null, 1, null, null, 0, 0, null, 0],
            [null, null, 1, null, null, 0, null, null],
            [0, 0, null, 1, null, null, 1, null],
            [null, null, null, null, 1, null, null, 0],
            [0, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_131",
        name: "P8_1_131",
        description: "8x8 Easy #131",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 22:55:56",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00052690505981445
        },
        grid: [
            [1, null, 0, 0, null, 0, null, 0],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, 0, null, null, null, 1, null, null],
            [0, null, null, null, null, null, 1, null],
            [null, 0, 0, null, 0, 0, null, 1],
            [null, null, null, null, null, 0, null, null],
            [1, null, 1, 1, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_132",
        name: "P8_1_132",
        description: "8x8 Easy #132",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 22:55:58",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0012748241424561
        },
        grid: [
            [0, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [0, 0, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 1],
            [1, null, null, null, 1, null, null, null],
            [1, 1, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_133",
        name: "P8_1_133",
        description: "8x8 Easy #133",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 22:55:59",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00095582008361816
        },
        grid: [
            [null, 0, 0, null, 0, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, 1, null, 1, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [0, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_134",
        name: "P8_1_134",
        description: "8x8 Easy #134",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 22:56:01",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0014410018920898
        },
        grid: [
            [null, null, null, 0, 1, null, 1, 0],
            [0, null, null, null, null, null, 1, null],
            [null, 1, 1, null, 1, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, 1, null, null],
            [null, 0, null, 1, null, null, 0, null],
            [null, null, null, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_135",
        name: "P8_1_135",
        description: "8x8 Easy #135",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 22:56:02",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00079512596130371
        },
        grid: [
            [null, 0, null, 1, null, null, 0, null],
            [1, null, null, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, 0],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1],
            [1, null, 1, null, null, 0, null, null],
            [null, null, null, null, 0, null, 1, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_136",
        name: "P8_1_136",
        description: "8x8 Easy #136",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 22:56:03",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00037193298339844
        },
        grid: [
            [0, null, 0, null, null, null, null, 1],
            [0, null, null, 1, null, null, 1, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, 1],
            [1, 0, null, null, null, null, null, null],
            [null, null, null, 1, 0, null, 0, null],
            [1, null, null, null, 0, null, null, 0],
            [1, 1, null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_137",
        name: "P8_1_137",
        description: "8x8 Easy #137",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 22:56:05",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00066900253295898
        },
        grid: [
            [1, 1, null, null, 0, null, 0, 0],
            [null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [0, null, 0, 0, null, null, 1, 1],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, 1, null],
            [null, 0, null, null, null, 0, null, null],
            [1, 0, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_138",
        name: "P8_1_138",
        description: "8x8 Easy #138",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 22:56:06",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00099706649780273
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [1, null, null, 0, null, 0, null, null],
            [1, 0, null, null, null, null, 1, 0],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, 1],
            [0, null, 0, null, null, null, null, 1],
            [null, 0, null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_139",
        name: "P8_1_139",
        description: "8x8 Easy #139",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 22:56:07",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0010809898376465
        },
        grid: [
            [0, 0, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, 0],
            [null, null, 0, null, null, null, 0, null],
            [1, null, 0, 0, null, null, null, 0],
            [1, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, 1, 1, null],
            [0, null, null, 1, null, null, null, 0],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_140",
        name: "P8_1_140",
        description: "8x8 Easy #140",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 22:56:09",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00065088272094727
        },
        grid: [
            [null, null, null, null, 0, null, null, 1],
            [0, null, null, 1, null, null, 0, null],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 1, null, 0, 0, null, null],
            [0, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 1, 1, null],
            [null, 1, null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_141",
        name: "P8_1_141",
        description: "8x8 Easy #141",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 22:56:10",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00071883201599121
        },
        grid: [
            [null, null, 0, null, null, null, 1, 1],
            [null, 0, 0, null, 0, null, 1, 1],
            [1, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [1, null, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, 0, 0],
            [null, 1, 1, null, null, null, 0, null],
            [0, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_142",
        name: "P8_1_142",
        description: "8x8 Easy #142",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 22:56:12",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00056600570678711
        },
        grid: [
            [1, 0, null, 0, null, 0, null, 0],
            [null, 0, null, null, null, null, null, 1],
            [1, null, null, null, 0, 0, null, null],
            [null, null, 0, null, null, 0, null, 1],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null],
            [0, 1, null, 1, 0, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_143",
        name: "P8_1_143",
        description: "8x8 Easy #143",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 22:56:13",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00062394142150879
        },
        grid: [
            [1, 1, null, null, null, 0, 0, null],
            [1, null, null, null, 0, 0, null, null],
            [null, null, null, 1, null, null, null, 1],
            [0, 0, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, 0, null, 1, 1, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_144",
        name: "P8_1_144",
        description: "8x8 Easy #144",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 22:56:14",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00084304809570312
        },
        grid: [
            [null, null, 1, null, 1, null, 1, 0],
            [null, 0, null, null, null, null, null, null],
            [0, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, 1, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, 1],
            [1, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_145",
        name: "P8_1_145",
        description: "8x8 Easy #145",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 22:56:16",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00056290626525879
        },
        grid: [
            [null, 1, 1, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, 0, 0, null, null, null, null, 1],
            [null, 0, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_146",
        name: "P8_1_146",
        description: "8x8 Easy #146",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 22:56:17",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00072193145751953
        },
        grid: [
            [0, null, 0, null, 0, 1, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1],
            [1, null, null, 0, null, null, 1, null],
            [null, 0, null, null, null, null, null, 1],
            [null, 0, null, null, null, 0, null, 1],
            [null, null, 1, null, 1, null, null, null],
            [1, null, 1, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_147",
        name: "P8_1_147",
        description: "8x8 Easy #147",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 22:56:18",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0013020038604736
        },
        grid: [
            [null, 0, null, null, null, null, 0, null],
            [null, 0, null, 0, 1, null, null, 0],
            [null, null, null, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null],
            [0, null, null, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_148",
        name: "P8_1_148",
        description: "8x8 Easy #148",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 22:56:20",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013458728790283
        },
        grid: [
            [1, 0, null, null, 1, null, 0, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [null, 0, 0, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, 0, null, 1, 1],
            [0, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_149",
        name: "P8_1_149",
        description: "8x8 Easy #149",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 22:56:21",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011591911315918
        },
        grid: [
            [null, null, null, null, 1, null, null, 0],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, 0, null, 1, null, 0, null, 1],
            [null, 0, null, null, null, null, null, 1],
            [null, null, 1, null, null, 1, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_150",
        name: "P8_1_150",
        description: "8x8 Easy #150",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 22:56:23",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00047206878662109
        },
        grid: [
            [null, 1, null, null, 1, null, 0, null],
            [null, null, 0, null, null, null, null, 1],
            [0, null, 0, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [1, null, null, 0, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_151",
        name: "P8_1_151",
        description: "8x8 Easy #151",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 22:56:24",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00039815902709961
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [0, null, null, 1, null, 1, 0, null],
            [0, null, 1, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1],
            [null, null, null, null, null, 0, null, 1],
            [1, null, 1, null, 1, null, null, null],
            [null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_152",
        name: "P8_1_152",
        description: "8x8 Easy #152",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 22:56:25",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017621517181396
        },
        grid: [
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, 0, null],
            [1, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, null],
            [0, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_153",
        name: "P8_1_153",
        description: "8x8 Easy #153",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 22:56:27",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00058102607727051
        },
        grid: [
            [null, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, 0, null, 1, 1, null, 0, null],
            [null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, 0],
            [0, null, null, null, 0, null, 1, null],
            [null, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_154",
        name: "P8_1_154",
        description: "8x8 Easy #154",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 22:56:28",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0005190372467041
        },
        grid: [
            [1, 1, null, null, 0, null, 0, 0],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, 1],
            [0, null, null, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, null, 1, null, 1, 0],
            [0, 0, null, null, 1, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_155",
        name: "P8_1_155",
        description: "8x8 Easy #155",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 22:56:29",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00095200538635254
        },
        grid: [
            [1, null, 1, null, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1],
            [0, null, null, null, null, null, 0, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_156",
        name: "P8_1_156",
        description: "8x8 Easy #156",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 22:56:31",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00044703483581543
        },
        grid: [
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null],
            [0, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [1, 1, null, null, null, null, 0, null],
            [1, 1, null, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_157",
        name: "P8_1_157",
        description: "8x8 Easy #157",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 22:56:32",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0009150505065918
        },
        grid: [
            [1, 1, null, null, null, null, null, 0],
            [0, null, 0, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, 1, null],
            [1, 0, null, 0, null, 0, null, 0],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, 0],
            [0, 0, null, 1, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_158",
        name: "P8_1_158",
        description: "8x8 Easy #158",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 22:56:34",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00066113471984863
        },
        grid: [
            [null, 1, null, null, 0, null, 0, null],
            [0, null, null, 1, null, null, 1, 1],
            [0, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, 1],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, 1, null, 1, null, 1, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_159",
        name: "P8_1_159",
        description: "8x8 Easy #159",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 22:56:35",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00094914436340332
        },
        grid: [
            [null, null, null, 1, null, null, 0, null],
            [null, 1, null, null, 0, null, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [1, null, 0, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, 1],
            [null, null, 1, null, null, 0, null, null],
            [null, 1, 1, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_160",
        name: "P8_1_160",
        description: "8x8 Easy #160",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 22:56:36",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0008080005645752
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0],
            [null, null, 0, null, null, null, 1, null],
            [1, null, null, null, 1, null, null, 0],
            [null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, 1, null, null, 0],
            [1, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_161",
        name: "P8_1_161",
        description: "8x8 Easy #161",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 22:56:38",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00098800659179688
        },
        grid: [
            [null, 0, null, null, 1, null, 1, 0],
            [1, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null],
            [0, 1, null, null, 0, null, 0, 1],
            [null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_162",
        name: "P8_1_162",
        description: "8x8 Easy #162",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 22:56:39",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00066494941711426
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [0, null, 1, 0, null, 0, null, 1],
            [0, null, null, null, null, null, null, 1],
            [null, 1, null, null, 0, 0, null, null],
            [1, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, null, 1, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_163",
        name: "P8_1_163",
        description: "8x8 Easy #163",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 22:56:41",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0015079975128174
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [0, null, null, 1, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, 0, 0, null, 0, null, 0, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_164",
        name: "P8_1_164",
        description: "8x8 Easy #164",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 22:56:42",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001945972442627
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, 0, null, null, 1],
            [null, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [1, null, null, null, 0, null, 1, null],
            [null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_165",
        name: "P8_1_165",
        description: "8x8 Easy #165",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 22:56:43",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015530586242676
        },
        grid: [
            [null, null, null, 1, null, null, null, 0],
            [1, null, null, null, 0, null, 1, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null],
            [null, 1, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, 0, null, 0, null],
            [1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_166",
        name: "P8_1_166",
        description: "8x8 Easy #166",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 22:56:45",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00053691864013672
        },
        grid: [
            [0, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 1, null, null],
            [null, 0, 0, null, null, null, null, 1],
            [1, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_167",
        name: "P8_1_167",
        description: "8x8 Easy #167",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 22:56:46",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00077486038208008
        },
        grid: [
            [1, null, null, 0, 0, null, 1, null],
            [null, null, 0, 0, null, null, null, 1],
            [1, 1, null, null, null, null, 0, null],
            [1, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, null, null, 1],
            [0, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_168",
        name: "P8_1_168",
        description: "8x8 Easy #168",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 22:56:47",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00090885162353516
        },
        grid: [
            [null, 0, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, 0, null, 1, null, 1, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [null, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_169",
        name: "P8_1_169",
        description: "8x8 Easy #169",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 22:56:49",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00060009956359863
        },
        grid: [
            [null, null, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, 0, null],
            [null, 0, null, 0, null, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_170",
        name: "P8_1_170",
        description: "8x8 Easy #170",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 22:56:50",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00087976455688477
        },
        grid: [
            [null, null, 1, null, 1, 1, null, 0],
            [null, 0, null, null, 1, null, null, 0],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 1, 1],
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, null, null, 0, null],
            [0, 1, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_171",
        name: "P8_1_171",
        description: "8x8 Easy #171",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 22:56:52",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00067520141601562
        },
        grid: [
            [0, 0, null, null, 1, 1, null, 1],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, null, 1, null, null, 1],
            [0, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, 1, null, null, 0, null, 1, null],
            [1, null, null, null, null, null, null, 0],
            [1, 1, null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_172",
        name: "P8_1_172",
        description: "8x8 Easy #172",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 22:56:53",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00071215629577637
        },
        grid: [
            [null, 0, null, null, 1, null, null, 1],
            [1, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, 1, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, 0],
            [0, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_173",
        name: "P8_1_173",
        description: "8x8 Easy #173",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 22:56:54",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043821334838867
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [0, null, 1, null, 1, null, null, 1],
            [0, null, null, null, 1, 0, null, 1],
            [null, 1, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, 0, 1],
            [1, null, 0, 0, null, null, null, null],
            [1, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_174",
        name: "P8_1_174",
        description: "8x8 Easy #174",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 22:56:56",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00068807601928711
        },
        grid: [
            [1, null, null, null, 0, null, null, 0],
            [1, 0, null, null, null, 1, null, 0],
            [null, 0, null, 1, null, null, 0, null],
            [0, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, 0, null, null, null, null],
            [0, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_175",
        name: "P8_1_175",
        description: "8x8 Easy #175",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 22:56:57",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017950534820557
        },
        grid: [
            [null, null, 0, null, null, null, 0, null],
            [0, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, 1, null, 1],
            [1, null, 1, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, 0],
            [null, 0, 0, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_176",
        name: "P8_1_176",
        description: "8x8 Easy #176",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 22:56:59",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00041985511779785
        },
        grid: [
            [null, 1, null, 0, null, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, 1, null, null, null],
            [null, 0, 0, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_177",
        name: "P8_1_177",
        description: "8x8 Easy #177",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 22:57:00",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017788410186768
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, 0, null, null, 1, null],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, 1, null, null],
            [1, null, 1, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, 0, null, null],
            [0, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_178",
        name: "P8_1_178",
        description: "8x8 Easy #178",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 22:57:01",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00070810317993164
        },
        grid: [
            [null, 0, 0, null, 1, null, null, 0],
            [null, null, null, 1, null, null, null, 0],
            [1, null, null, null, 0, null, null, null],
            [1, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_179",
        name: "P8_1_179",
        description: "8x8 Easy #179",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 22:57:03",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00062894821166992
        },
        grid: [
            [0, null, null, null, 0, null, 0, 1],
            [null, 0, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 1, null, 0, null, 1, 1, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_180",
        name: "P8_1_180",
        description: "8x8 Easy #180",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 22:57:04",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014791488647461
        },
        grid: [
            [null, null, 0, null, null, null, 1, null],
            [null, null, 0, 0, null, 0, null, null],
            [null, 1, null, null, null, 0, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, 1, null, null, null],
            [0, 0, null, null, null, null, 0, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_181",
        name: "P8_1_181",
        description: "8x8 Easy #181",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 22:57:05",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00073504447937012
        },
        grid: [
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, null, null, null, 1],
            [1, null, 1, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, 0, null, 1, null],
            [1, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_182",
        name: "P8_1_182",
        description: "8x8 Easy #182",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 22:57:07",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00057101249694824
        },
        grid: [
            [null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, null, null, null, null],
            [null, 0, null, 1, 1, null, 0, null],
            [null, null, null, null, 1, null, null, 0],
            [1, null, 1, 1, null, null, 0, 0],
            [null, null, null, null, null, 0, 0, null],
            [0, null, 0, null, null, null, null, null],
            [0, null, null, 0, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_183",
        name: "P8_1_183",
        description: "8x8 Easy #183",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 22:57:08",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00059795379638672
        },
        grid: [
            [1, null, null, null, null, null, 1, 0],
            [1, 1, null, null, 0, null, 1, 0],
            [null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 1],
            [0, null, 0, 0, null, null, null, 1],
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_184",
        name: "P8_1_184",
        description: "8x8 Easy #184",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 22:57:10",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00049495697021484
        },
        grid: [
            [1, null, 1, null, null, 0, 0, null],
            [1, null, null, 1, null, 0, null, null],
            [null, null, 0, 1, null, null, null, 1],
            [null, 1, null, null, null, null, null, 0],
            [0, null, null, null, null, 1, null, null],
            [null, null, 1, null, 1, null, null, 0],
            [0, null, null, null, 1, 1, null, null],
            [0, 1, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_1_185",
        name: "P8_1_185",
        description: "8x8 Easy #185",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 22:57:11",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00059103965759277
        },
        grid: [
            [1, null, null, null, null, 1, null, 0],
            [null, 1, null, null, 0, 0, null, 0],
            [0, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 1, 1],
            [null, 0, 0, null, null, 1, null, null],
            [1, null, null, 0, null, null, 0, null],
            [null, 1, null, null, 1, 1, null, null],
            [0, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_186",
        name: "P8_1_186",
        description: "8x8 Easy #186",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 22:57:12",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0007939338684082
        },
        grid: [
            [null, null, null, 1, null, null, null, 0],
            [1, null, null, null, 0, null, null, 1],
            [1, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, 1, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, 1, null, 0, 0, null],
            [0, 0, null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_187",
        name: "P8_1_187",
        description: "8x8 Easy #187",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 22:57:14",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00069999694824219
        },
        grid: [
            [null, null, null, 1, null, null, 1, null],
            [1, null, 0, null, null, 0, null, null],
            [1, 1, null, null, null, 0, null, 0],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1],
            [null, null, 1, 1, null, null, 0, 1],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_188",
        name: "P8_1_188",
        description: "8x8 Easy #188",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 22:57:15",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00049304962158203
        },
        grid: [
            [null, 0, null, 1, null, null, null, 1],
            [1, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, 1, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, null, null, null, 0],
            [0, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_189",
        name: "P8_1_189",
        description: "8x8 Easy #189",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 22:57:16",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 39,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00036907196044922
        },
        grid: [
            [0, null, 0, 0, null, 1, null, 1],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, 0],
            [null, 0, null, 0, null, null, null, 0],
            [0, null, null, null, null, 1, null, null],
            [0, null, 1, 1, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_190",
        name: "P8_1_190",
        description: "8x8 Easy #190",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 22:57:18",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00058507919311523
        },
        grid: [
            [null, null, null, null, 0, 0, null, 1],
            [1, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, 0],
            [1, 1, null, null, null, null, 0, 0],
            [null, null, null, null, 1, 1, null, null],
            [1, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, null, 0, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_191",
        name: "P8_1_191",
        description: "8x8 Easy #191",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 22:57:19",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016701221466064
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [null, 0, 0, null, 1, null, null, null],
            [null, null, null, 1, null, 0, null, 1],
            [1, null, null, null, null, null, null, 1],
            [null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, 0, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_192",
        name: "P8_1_192",
        description: "8x8 Easy #192",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 22:57:21",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001060962677002
        },
        grid: [
            [1, null, 1, null, null, null, 0, 0],
            [null, null, null, 0, null, 1, null, 1],
            [1, 0, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, null],
            [1, null, null, null, null, 0, null, 0],
            [1, null, 0, 0, null, null, 1, 0],
            [null, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_193",
        name: "P8_1_193",
        description: "8x8 Easy #193",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 22:57:22",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00062203407287598
        },
        grid: [
            [null, 0, null, 1, null, null, null, 1],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, 0, null, null, null, 1],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [1, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_194",
        name: "P8_1_194",
        description: "8x8 Easy #194",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 22:57:23",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 43,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0012800693511963
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [1, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, 1],
            [1, null, null, null, null, 1, null, null],
            [1, null, 1, 1, null, null, 0, 0],
            [null, 1, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_195",
        name: "P8_1_195",
        description: "8x8 Easy #195",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 22:57:25",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00053000450134277
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, null, null, 1, null],
            [1, null, 1, 1, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [1, 0, null, null, null, 0, null, null],
            [0, null, null, 1, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_1_196",
        name: "P8_1_196",
        description: "8x8 Easy #196",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 22:57:26",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00045394897460938
        },
        grid: [
            [1, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1],
            [0, null, 0, null, 0, null, 1, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, 0],
            [0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, null, 1],
            [null, null, 0, 0, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_1_197",
        name: "P8_1_197",
        description: "8x8 Easy #197",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 22:57:27",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 42,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0009000301361084
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0],
            [null, null, 1, 1, null, null, 0, 0],
            [0, null, 1, null, 1, 1, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_1_198",
        name: "P8_1_198",
        description: "8x8 Easy #198",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 22:57:29",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 41,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00074601173400879
        },
        grid: [
            [0, null, 0, null, 0, null, 0, 1],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null],
            [null, 1, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [1, null, 1, null, 1, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_1_199",
        name: "P8_1_199",
        description: "8x8 Easy #199",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 22:57:30",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 40,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0005180835723877
        },
        grid: [
            [0, 0, null, null, 1, 1, null, 1],
            [null, null, null, 1, null, 1, null, null],
            [null, 0, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null],
            [1, 1, null, null, 0, 0, null, 0],
            [1, null, null, 1, null, null, null, 0],
            [null, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_1_200",
        name: "P8_1_200",
        description: "8x8 Easy #200",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=1&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 22:57:32",
        difficulty: "Easy",
        difficulty_score: 11,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 44,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0004730224609375
        },
        grid: [
            [0, null, null, 1, 1, null, 0, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, 0],
            [1, null, null, 0, 0, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL8x8_d1_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL8x8_d1_PUZZLES = LEVEL8x8_d1_PUZZLES;
}
