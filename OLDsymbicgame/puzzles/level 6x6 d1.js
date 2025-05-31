/**
 * level 6x6 d1 - 6x6 easy
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

const LEVEL6x6_d1_PUZZLES = [
    {
        id: "P6_1_1",
        name: "P6_1_1",
        description: "6x6 Easy #1",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 15:01:11",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.0002140998840332
        },
        grid: [
            [1, null, null, 0, null, null],
            [null, null, 0, 0, null, 1],
            [null, 0, 0, null, null, 1],
            [null, null, null, null, null, null],
            [0, 0, null, 1, null, null],
            [null, 1, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_2",
        name: "P6_1_2",
        description: "6x6 Easy #2",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 15:01:12",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00044989585876465
        },
        grid: [
            [null, null, 0, null, null, 1],
            [1, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, 0],
            [0, 0, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_3",
        name: "P6_1_3",
        description: "6x6 Easy #3",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 15:01:13",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00060009956359863
        },
        grid: [
            [null, 0, null, null, null, null],
            [1, null, null, 0, 0, null],
            [null, null, null, null, 0, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_4",
        name: "P6_1_4",
        description: "6x6 Easy #4",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 15:01:15",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 19,
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
            time_taken: 0.00021481513977051
        },
        grid: [
            [1, null, 1, 1, null, 0],
            [null, 0, null, null, null, null],
            [1, null, null, 0, null, 0],
            [1, null, null, null, 1, 0],
            [null, 1, null, 1, null, null],
            [0, null, 0, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_5",
        name: "P6_1_5",
        description: "6x6 Easy #5",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 15:01:16",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
                tryFillCells: 0
            },
            time_taken: 0.00012421607971191
        },
        grid: [
            [0, 0, null, null, 1, 1],
            [0, null, null, null, null, 1],
            [null, 0, null, 0, null, null],
            [1, null, 0, 0, null, 0],
            [null, null, null, null, null, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_6",
        name: "P6_1_6",
        description: "6x6 Easy #6",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 15:01:17",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00021100044250488
        },
        grid: [
            [0, null, null, 0, null, 1],
            [0, 0, null, null, 1, 1],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_7",
        name: "P6_1_7",
        description: "6x6 Easy #7",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 15:01:19",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00015711784362793
        },
        grid: [
            [1, null, 0, 0, null, null],
            [null, 0, 0, null, null, 1],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 0],
            [0, null, null, 1, 1, null],
            [0, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_8",
        name: "P6_1_8",
        description: "6x6 Easy #8",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 15:01:20",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00016403198242188
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, null, 1],
            [0, 0, null, null, 1, 1],
            [null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_9",
        name: "P6_1_9",
        description: "6x6 Easy #9",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 15:01:22",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00039482116699219
        },
        grid: [
            [null, 0, null, null, null, 1],
            [1, null, 1, null, null, null],
            [null, null, 1, null, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_10",
        name: "P6_1_10",
        description: "6x6 Easy #10",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 15:01:28",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00011992454528809
        },
        grid: [
            [1, null, 0, 0, null, 0],
            [null, 1, 1, null, null, null],
            [null, null, null, null, 1, null],
            [0, null, null, null, null, 1],
            [0, 0, null, null, 1, 1],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_11",
        name: "P6_1_11",
        description: "6x6 Easy #11",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 15:01:29",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00040698051452637
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 1, 1, null, 0],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [0, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_12",
        name: "P6_1_12",
        description: "6x6 Easy #12",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 15:01:31",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00020098686218262
        },
        grid: [
            [0, null, 0, null, null, 1],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, 1, null],
            [1, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [1, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_13",
        name: "P6_1_13",
        description: "6x6 Easy #13",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 15:01:32",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.0002448558807373
        },
        grid: [
            [null, 0, null, null, null, 1],
            [0, null, 1, 1, null, null],
            [null, null, 1, null, null, 0],
            [null, 1, null, null, null, 0],
            [null, null, null, null, 1, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_14",
        name: "P6_1_14",
        description: "6x6 Easy #14",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 15:01:34",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00014305114746094
        },
        grid: [
            [0, null, 1, 1, null, 1],
            [null, null, 1, null, 0, null],
            [null, 0, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_15",
        name: "P6_1_15",
        description: "6x6 Easy #15",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 15:01:35",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
                tryFillCells: 0
            },
            time_taken: 0.00011396408081055
        },
        grid: [
            [0, null, null, 1, 1, null],
            [0, 0, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [1, null, null, 0, 0, null],
            [1, 1, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_16",
        name: "P6_1_16",
        description: "6x6 Easy #16",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 15:01:36",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00075006484985352
        },
        grid: [
            [0, null, null, 1, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, null, 1, 0, null, null],
            [1, null, null, 0, null, null],
            [null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_17",
        name: "P6_1_17",
        description: "6x6 Easy #17",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 15:01:38",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0002589225769043
        },
        grid: [
            [0, null, null, 1, 1, null],
            [null, null, 0, null, 1, null],
            [null, 1, null, null, null, null],
            [0, null, null, 0, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_18",
        name: "P6_1_18",
        description: "6x6 Easy #18",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 15:01:39",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00014996528625488
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, 1, 1, null, null, null],
            [1, null, null, 0, 0, null],
            [null, null, null, null, null, 1],
            [null, 0, null, 1, null, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_19",
        name: "P6_1_19",
        description: "6x6 Easy #19",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 15:01:41",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00027298927307129
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, 0, 0, null, null, 1],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, null, null, 0],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_20",
        name: "P6_1_20",
        description: "6x6 Easy #20",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 15:01:42",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 19,
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
            time_taken: 0.00013494491577148
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 1, 1, null, null, 0],
            [null, 1, null, null, 0, 0],
            [0, null, null, 1, null, null],
            [0, null, 0, null, null, 1],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_21",
        name: "P6_1_21",
        description: "6x6 Easy #21",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 15:01:44",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
                tryFillCells: 0
            },
            time_taken: 0.00013089179992676
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 1, null, null, null, 1],
            [null, 1, null, null, null, null],
            [0, null, null, 1, null, null],
            [0, null, null, 1, 1, null],
            [null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_22",
        name: "P6_1_22",
        description: "6x6 Easy #22",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 15:01:45",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 5,
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
                tryFillCells: 3
            },
            time_taken: 0.00097203254699707
        },
        grid: [
            [1, null, null, 0, null, null],
            [null, null, 1, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, 0, null, 0, null],
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_23",
        name: "P6_1_23",
        description: "6x6 Easy #23",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 15:01:47",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.0002448558807373
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [0, 1, null, 1, null, null],
            [null, null, null, null, null, 0],
            [0, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_24",
        name: "P6_1_24",
        description: "6x6 Easy #24",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 15:01:48",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00027799606323242
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [null, 1, null, 0, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [null, 0, null, null, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_25",
        name: "P6_1_25",
        description: "6x6 Easy #25",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 15:01:49",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00031685829162598
        },
        grid: [
            [null, null, 0, null, 0, 1],
            [1, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [0, null, null, null, 1, null],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_26",
        name: "P6_1_26",
        description: "6x6 Easy #26",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 15:01:51",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.0001680850982666
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, null, 1, 1],
            [null, 0, null, null, 1, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 0],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_27",
        name: "P6_1_27",
        description: "6x6 Easy #27",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 15:01:52",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00016283988952637
        },
        grid: [
            [null, 1, 1, null, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, null, null, 1, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_28",
        name: "P6_1_28",
        description: "6x6 Easy #28",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 15:01:53",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
                tryFillCells: 0
            },
            time_taken: 0.00010800361633301
        },
        grid: [
            [null, null, 1, null, 1, null],
            [0, null, null, null, null, 1],
            [0, 0, null, null, 1, 1],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 0, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_29",
        name: "P6_1_29",
        description: "6x6 Easy #29",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 15:01:55",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00031399726867676
        },
        grid: [
            [1, 1, null, 0, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, null, null, null, null],
            [0, 0, null, 1, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_30",
        name: "P6_1_30",
        description: "6x6 Easy #30",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 15:01:56",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00090217590332031
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, null, 0, null],
            [0, 1, null, 1, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, 1, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_31",
        name: "P6_1_31",
        description: "6x6 Easy #31",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 15:01:58",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00026392936706543
        },
        grid: [
            [0, null, null, 1, null, 1],
            [null, 0, null, 1, 1, null],
            [null, null, 0, null, null, 1],
            [1, null, null, 0, null, null],
            [1, 1, null, null, 0, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_32",
        name: "P6_1_32",
        description: "6x6 Easy #32",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 15:01:59",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00043582916259766
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, 0, 0, null],
            [0, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_33",
        name: "P6_1_33",
        description: "6x6 Easy #33",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 15:02:00",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.0004119873046875
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, 0, 0, null],
            [0, null, 1, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_34",
        name: "P6_1_34",
        description: "6x6 Easy #34",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 15:02:02",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00033903121948242
        },
        grid: [
            [1, 0, null, 0, null, 0],
            [null, 0, null, null, 1, null],
            [1, null, null, null, null, 0],
            [null, null, 0, null, null, 0],
            [0, null, null, 1, null, null],
            [0, null, 0, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_35",
        name: "P6_1_35",
        description: "6x6 Easy #35",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 15:02:03",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0002129077911377
        },
        grid: [
            [0, null, 0, null, null, 1],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null],
            [1, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [1, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_36",
        name: "P6_1_36",
        description: "6x6 Easy #36",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 15:02:05",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00046086311340332
        },
        grid: [
            [null, null, 0, null, null, 1],
            [null, null, 0, 0, null, null],
            [null, 1, null, null, 0, null],
            [0, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_37",
        name: "P6_1_37",
        description: "6x6 Easy #37",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 15:02:06",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, 0],
            [null, 0, null, null, 1, null],
            [0, 0, null, null, 1, 1],
            [0, null, null, null, null, 1],
            [null, 1, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_38",
        name: "P6_1_38",
        description: "6x6 Easy #38",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 15:02:07",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00037598609924316
        },
        grid: [
            [null, null, null, 0, 0, null],
            [null, 0, null, null, null, 1],
            [null, 0, null, 0, null, null],
            [null, null, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_39",
        name: "P6_1_39",
        description: "6x6 Easy #39",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 15:02:09",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00016903877258301
        },
        grid: [
            [0, null, null, 1, null, null],
            [0, 1, null, null, null, 1],
            [null, null, null, 0, 0, null],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, null],
            [1, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_40",
        name: "P6_1_40",
        description: "6x6 Easy #40",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 15:02:10",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [0, null, null, null, null, 1],
            [0, null, 0, null, 1, 1],
            [null, null, 0, 0, null, null],
            [1, null, null, null, null, 0],
            [null, null, null, null, 0, null],
            [null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_41",
        name: "P6_1_41",
        description: "6x6 Easy #41",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 15:02:11",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 4,
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
            time_taken: 0.00069093704223633
        },
        grid: [
            [null, 1, null, null, null, 0],
            [null, null, 0, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 0, null],
            [0, null, 1, 1, null, 1],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_42",
        name: "P6_1_42",
        description: "6x6 Easy #42",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 15:02:13",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00049304962158203
        },
        grid: [
            [0, null, null, null, 1, null],
            [null, null, null, 0, null, 0],
            [null, 1, 1, null, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, 1, null, null],
            [1, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_43",
        name: "P6_1_43",
        description: "6x6 Easy #43",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 15:02:14",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00028514862060547
        },
        grid: [
            [null, null, null, 0, null, null],
            [0, null, 1, 1, null, 1],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_44",
        name: "P6_1_44",
        description: "6x6 Easy #44",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 15:02:16",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00017309188842773
        },
        grid: [
            [0, 0, null, null, 1, 1],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, null, 1],
            [1, null, null, null, 0, null],
            [null, null, 1, null, null, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_45",
        name: "P6_1_45",
        description: "6x6 Easy #45",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 15:02:17",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.0002892017364502
        },
        grid: [
            [0, null, 1, 1, null, 1],
            [null, null, null, 0, 0, null],
            [null, 0, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_46",
        name: "P6_1_46",
        description: "6x6 Easy #46",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 15:02:18",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00024890899658203
        },
        grid: [
            [0, null, null, 1, 1, null],
            [null, null, 1, null, null, 0],
            [0, null, null, 1, null, null],
            [null, 1, null, null, null, 1],
            [1, 1, null, 0, null, null],
            [1, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_47",
        name: "P6_1_47",
        description: "6x6 Easy #47",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 15:02:20",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00020503997802734
        },
        grid: [
            [null, null, null, 0, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, 0, null, null, null],
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_48",
        name: "P6_1_48",
        description: "6x6 Easy #48",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 15:02:21",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00018715858459473
        },
        grid: [
            [0, null, null, 1, 1, null],
            [null, null, null, 1, 1, null],
            [null, 1, null, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_49",
        name: "P6_1_49",
        description: "6x6 Easy #49",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 15:02:23",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00034999847412109
        },
        grid: [
            [0, null, null, 1, 1, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null],
            [1, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_50",
        name: "P6_1_50",
        description: "6x6 Easy #50",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 15:02:24",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 19,
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
            time_taken: 0.00012707710266113
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, 1, null, 0, 0, null],
            [null, null, null, 0, null, 0],
            [0, null, null, null, null, null],
            [null, 0, null, 1, 1, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_51",
        name: "P6_1_51",
        description: "6x6 Easy #51",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 15:02:25",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.0003349781036377
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, 0, null, 1, null],
            [0, null, null, 1, 1, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_52",
        name: "P6_1_52",
        description: "6x6 Easy #52",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 15:02:27",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00020718574523926
        },
        grid: [
            [null, 0, null, 0, null, null],
            [0, null, 1, null, null, 1],
            [null, null, null, 0, null, 1],
            [1, 1, null, null, null, null],
            [1, null, null, 1, null, 0],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_53",
        name: "P6_1_53",
        description: "6x6 Easy #53",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 15:02:28",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00020813941955566
        },
        grid: [
            [1, 1, null, null, null, 0],
            [null, null, null, null, 1, null],
            [1, null, null, 0, null, 0],
            [1, null, 1, null, null, null],
            [null, null, 1, 1, null, 1],
            [0, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_54",
        name: "P6_1_54",
        description: "6x6 Easy #54",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 15:02:30",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00036001205444336
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, 0, null, null, 1, null],
            [1, null, null, 0, null, 0],
            [null, null, 1, null, null, 0],
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_55",
        name: "P6_1_55",
        description: "6x6 Easy #55",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 15:02:31",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00045990943908691
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 0, null, null, null],
            [0, null, null, 1, 1, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_56",
        name: "P6_1_56",
        description: "6x6 Easy #56",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 15:02:33",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00048995018005371
        },
        grid: [
            [null, null, null, null, 0, null],
            [0, null, null, 1, null, 1],
            [null, 0, null, 1, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 0],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_57",
        name: "P6_1_57",
        description: "6x6 Easy #57",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 15:02:34",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00020003318786621
        },
        grid: [
            [0, 1, null, 1, null, 1],
            [0, null, null, null, null, 1],
            [null, null, 1, null, 0, null],
            [null, 0, null, null, null, null],
            [1, null, null, 0, null, 0],
            [1, null, 1, null, 1, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_58",
        name: "P6_1_58",
        description: "6x6 Easy #58",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 15:02:35",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00014281272888184
        },
        grid: [
            [0, null, null, null, null, 1],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, 1, null],
            [null, null, null, null, 1, null],
            [1, null, null, null, null, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_59",
        name: "P6_1_59",
        description: "6x6 Easy #59",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 15:02:37",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00046992301940918
        },
        grid: [
            [0, 1, null, 1, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0],
            [1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_60",
        name: "P6_1_60",
        description: "6x6 Easy #60",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 15:02:38",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00023698806762695
        },
        grid: [
            [1, null, 1, null, 0, 0],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, null, 0, null, 1, 1],
            [0, null, null, null, null, 1],
            [null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_61",
        name: "P6_1_61",
        description: "6x6 Easy #61",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 15:02:40",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00026893615722656
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 0],
            [null, null, null, 0, null, null],
            [0, 0, null, null, 1, 1],
            [0, 0, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_62",
        name: "P6_1_62",
        description: "6x6 Easy #62",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 15:02:41",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
                tryFillCells: 0
            },
            time_taken: 0.00013184547424316
        },
        grid: [
            [0, null, 0, 1, null, 1],
            [0, null, null, null, null, 1],
            [null, null, 0, 0, null, null],
            [null, null, 0, 0, null, null],
            [1, null, null, null, null, 0],
            [1, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_63",
        name: "P6_1_63",
        description: "6x6 Easy #63",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 15:02:42",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00029706954956055
        },
        grid: [
            [null, 1, null, 0, 0, null],
            [null, 0, null, null, null, 1],
            [1, null, null, 0, null, null],
            [1, null, 0, null, null, null],
            [null, 1, null, null, null, 0],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_64",
        name: "P6_1_64",
        description: "6x6 Easy #64",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 15:02:44",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00087094306945801
        },
        grid: [
            [null, 0, null, null, 1, 1],
            [null, null, 0, null, null, 1],
            [1, null, null, 0, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 1, null, 0, 0],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_65",
        name: "P6_1_65",
        description: "6x6 Easy #65",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 15:02:45",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00030612945556641
        },
        grid: [
            [1, 1, null, 0, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null],
            [0, null, 1, 1, null, null],
            [null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_66",
        name: "P6_1_66",
        description: "6x6 Easy #66",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 15:02:52",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00014710426330566
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, null],
            [0, null, 0, null, null, 1],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_67",
        name: "P6_1_67",
        description: "6x6 Easy #67",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 15:02:53",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00018692016601562
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, 1, null, null, 0, 0],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_68",
        name: "P6_1_68",
        description: "6x6 Easy #68",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 15:02:54",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00018119812011719
        },
        grid: [
            [null, null, 1, null, 0, null],
            [0, 0, null, null, 1, 1],
            [0, null, null, null, null, 1],
            [null, null, null, 1, 1, null],
            [null, 1, null, null, null, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_69",
        name: "P6_1_69",
        description: "6x6 Easy #69",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 15:02:57",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00029683113098145
        },
        grid: [
            [1, null, null, null, 0, 0],
            [1, null, 0, null, null, 0],
            [null, null, null, 1, null, null],
            [0, null, 1, null, 0, 1],
            [null, null, 1, null, null, null],
            [0, null, null, 0, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_70",
        name: "P6_1_70",
        description: "6x6 Easy #70",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 15:02:58",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00047993659973145
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, 1],
            [0, null, null, 1, null, null],
            [null, 0, null, null, 1, null],
            [1, null, 1, null, null, 0],
            [1, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_71",
        name: "P6_1_71",
        description: "6x6 Easy #71",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 15:02:59",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00034594535827637
        },
        grid: [
            [null, 1, null, 0, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, null, null, 1, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_72",
        name: "P6_1_72",
        description: "6x6 Easy #72",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 15:03:01",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
                tryFillCells: 0
            },
            time_taken: 0.00018000602722168
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [null, null, null, null, 0, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, 1],
            [null, null, 0, null, null, 1],
            [1, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_73",
        name: "P6_1_73",
        description: "6x6 Easy #73",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 15:03:02",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00014400482177734
        },
        grid: [
            [1, 0, null, 0, null, 0],
            [null, 0, null, null, 1, null],
            [1, null, null, null, null, 0],
            [1, 1, null, null, null, null],
            [null, null, null, 1, null, 1],
            [0, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_74",
        name: "P6_1_74",
        description: "6x6 Easy #74",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 15:03:04",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00029301643371582
        },
        grid: [
            [null, 1, 1, null, 0, null],
            [0, null, null, 0, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_75",
        name: "P6_1_75",
        description: "6x6 Easy #75",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 15:03:05",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.00058102607727051
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, 0, null, null, null, null],
            [0, null, null, null, null, null],
            [null, 1, null, null, null, 0],
            [null, null, 0, 0, null, 0],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_76",
        name: "P6_1_76",
        description: "6x6 Easy #76",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 15:03:06",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00017595291137695
        },
        grid: [
            [null, 0, null, 1, null, 1],
            [null, 0, 0, null, null, 1],
            [1, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_77",
        name: "P6_1_77",
        description: "6x6 Easy #77",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 15:03:08",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00039887428283691
        },
        grid: [
            [0, 0, null, 1, null, 1],
            [null, 0, null, null, null, 1],
            [null, null, 1, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_78",
        name: "P6_1_78",
        description: "6x6 Easy #78",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 15:03:09",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00014185905456543
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, null, 1, null, null, null],
            [0, null, null, 0, null, 1],
            [0, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_79",
        name: "P6_1_79",
        description: "6x6 Easy #79",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 15:03:11",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00068306922912598
        },
        grid: [
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, null, 1],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [1, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_80",
        name: "P6_1_80",
        description: "6x6 Easy #80",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 15:03:12",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00087690353393555
        },
        grid: [
            [null, null, 0, 0, null, null],
            [0, null, null, 1, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, 0],
            [null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_81",
        name: "P6_1_81",
        description: "6x6 Easy #81",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 15:03:13",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00017714500427246
        },
        grid: [
            [1, 1, null, null, null, 0],
            [null, null, null, 1, null, 1],
            [null, null, 1, 1, null, null],
            [0, 0, null, null, null, 1],
            [0, null, null, null, 1, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_82",
        name: "P6_1_82",
        description: "6x6 Easy #82",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 15:03:15",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00045895576477051
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, 1, null],
            [null, 1, null, null, null, null],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_83",
        name: "P6_1_83",
        description: "6x6 Easy #83",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 15:03:16",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.0001370906829834
        },
        grid: [
            [null, null, 0, 0, null, null],
            [0, null, 0, null, 1, 1],
            [0, null, null, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 0, null],
            [1, null, 1, 1, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_84",
        name: "P6_1_84",
        description: "6x6 Easy #84",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 15:03:17",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00029897689819336
        },
        grid: [
            [1, null, 1, null, 0, 0],
            [null, 0, null, null, null, null],
            [1, null, null, null, 0, null],
            [null, null, null, 0, null, null],
            [0, null, 0, 0, null, 1],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_85",
        name: "P6_1_85",
        description: "6x6 Easy #85",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 15:03:19",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00013208389282227
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 0, null, null, null, 1],
            [1, null, null, null, 0, null],
            [1, null, null, null, 0, 0],
            [null, null, 0, null, null, null],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_86",
        name: "P6_1_86",
        description: "6x6 Easy #86",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 15:03:20",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00017595291137695
        },
        grid: [
            [null, 1, null, 0, 0, null],
            [null, null, null, 0, null, 1],
            [1, null, 1, null, null, null],
            [1, null, 0, null, null, 0],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_87",
        name: "P6_1_87",
        description: "6x6 Easy #87",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 15:03:22",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00025582313537598
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 0, null, null, null, 1],
            [null, null, 1, null, null, null],
            [0, null, null, null, 1, null],
            [null, 1, null, null, null, 0],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_88",
        name: "P6_1_88",
        description: "6x6 Easy #88",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 15:03:23",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00041413307189941
        },
        grid: [
            [null, null, 1, null, null, 0],
            [0, 0, null, 1, null, null],
            [null, null, null, null, 1, null],
            [1, 1, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_89",
        name: "P6_1_89",
        description: "6x6 Easy #89",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 15:03:24",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [1, null, null, null, null, 0],
            [null, 0, null, 1, null, null],
            [null, null, 1, 1, null, null],
            [0, null, null, null, null, 1],
            [null, 1, null, 0, 0, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_90",
        name: "P6_1_90",
        description: "6x6 Easy #90",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 15:03:26",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00038814544677734
        },
        grid: [
            [null, 0, 0, null, 1, null],
            [null, null, null, null, null, null],
            [0, null, null, 1, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 1, 1, null, null],
            [0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_91",
        name: "P6_1_91",
        description: "6x6 Easy #91",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 15:03:27",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00032281875610352
        },
        grid: [
            [null, 0, null, null, null, 1],
            [0, 0, null, null, 1, 1],
            [null, null, 1, null, null, null],
            [null, 1, null, null, null, 0],
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_92",
        name: "P6_1_92",
        description: "6x6 Easy #92",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 15:03:29",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00032401084899902
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [null, null, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, 0, null, null, 1],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_93",
        name: "P6_1_93",
        description: "6x6 Easy #93",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 15:03:35",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
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
                tryFillCells: 1
            },
            time_taken: 0.00057101249694824
        },
        grid: [
            [null, null, null, null, 1, null],
            [0, null, null, null, 1, 1],
            [null, 1, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_94",
        name: "P6_1_94",
        description: "6x6 Easy #94",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 15:03:36",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.0001368522644043
        },
        grid: [
            [0, null, null, 1, 1, null],
            [0, 0, null, 1, null, null],
            [null, null, null, null, null, 0],
            [1, 1, null, 0, null, null],
            [null, null, 0, null, null, 1],
            [1, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_95",
        name: "P6_1_95",
        description: "6x6 Easy #95",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 15:03:38",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00021505355834961
        },
        grid: [
            [1, null, 0, 0, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [0, null, null, 1, 1, null],
            [null, null, null, null, null, 0],
            [0, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_96",
        name: "P6_1_96",
        description: "6x6 Easy #96",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 15:03:39",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00043416023254395
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null],
            [null, null, null, 1, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_97",
        name: "P6_1_97",
        description: "6x6 Easy #97",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 15:03:40",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.0002288818359375
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, 1, null, 1],
            [null, 0, null, null, null, 1],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [1, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_98",
        name: "P6_1_98",
        description: "6x6 Easy #98",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 15:03:42",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00031304359436035
        },
        grid: [
            [1, null, 1, null, 1, 0],
            [null, null, 1, 1, null, null],
            [1, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_99",
        name: "P6_1_99",
        description: "6x6 Easy #99",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 15:03:43",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00088000297546387
        },
        grid: [
            [0, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [0, null, null, null, 1, null],
            [null, 1, null, null, null, 0],
            [null, 1, null, null, null, 0],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_100",
        name: "P6_1_100",
        description: "6x6 Easy #100",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 15:03:45",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.0001981258392334
        },
        grid: [
            [null, 0, 0, null, 1, null],
            [0, null, 0, null, null, 1],
            [0, null, null, 1, null, null],
            [null, 1, null, null, 0, 0],
            [1, null, null, null, null, 0],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_101",
        name: "P6_1_101",
        description: "6x6 Easy #101",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 15:03:46",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.0001981258392334
        },
        grid: [
            [0, null, null, 0, null, 1],
            [0, 0, null, null, 1, null],
            [null, null, 1, null, null, 0],
            [1, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_102",
        name: "P6_1_102",
        description: "6x6 Easy #102",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 15:03:47",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
                tryFillCells: 0
            },
            time_taken: 0.00012397766113281
        },
        grid: [
            [0, null, 0, null, null, 1],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, 1, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_103",
        name: "P6_1_103",
        description: "6x6 Easy #103",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 15:03:49",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
                tryFillCells: 0
            },
            time_taken: 0.00011396408081055
        },
        grid: [
            [null, null, null, null, 1, null],
            [1, 1, null, null, null, 0],
            [1, 1, null, null, 0, 0],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [0, null, null, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_104",
        name: "P6_1_104",
        description: "6x6 Easy #104",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 15:03:50",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.0001828670501709
        },
        grid: [
            [1, null, null, 0, null, 0],
            [null, 1, null, null, 0, null],
            [null, null, 1, null, null, 0],
            [0, null, null, 1, 1, null],
            [0, 0, null, null, 1, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_105",
        name: "P6_1_105",
        description: "6x6 Easy #105",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 15:03:51",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0005040168762207
        },
        grid: [
            [null, 1, null, null, null, null],
            [0, null, 0, null, null, 1],
            [null, null, 0, null, 1, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, 0],
            [1, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_106",
        name: "P6_1_106",
        description: "6x6 Easy #106",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 15:03:53",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
                tryFillCells: 0
            },
            time_taken: 0.00016403198242188
        },
        grid: [
            [null, null, 1, 1, null, null],
            [0, null, null, 1, null, 1],
            [0, null, 0, null, null, 1],
            [null, null, 0, null, 1, null],
            [null, 1, null, null, null, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_107",
        name: "P6_1_107",
        description: "6x6 Easy #107",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 15:03:54",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00044822692871094
        },
        grid: [
            [null, 0, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, null, 1, null, 0, 0],
            [0, null, null, null, null, 1],
            [0, null, null, null, 1, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_108",
        name: "P6_1_108",
        description: "6x6 Easy #108",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 15:03:56",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00015497207641602
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, 0, null, 1, 1, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 0, 1],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_109",
        name: "P6_1_109",
        description: "6x6 Easy #109",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 15:03:57",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [0, null, 1, null, null, 1],
            [1, null, null, null, 1, null],
            [null, null, 0, 0, null, 1],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, 0],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_110",
        name: "P6_1_110",
        description: "6x6 Easy #110",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 15:03:58",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00016498565673828
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [0, null, null, null, 1, null],
            [null, 1, null, null, null, 0],
            [1, 1, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_111",
        name: "P6_1_111",
        description: "6x6 Easy #111",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 15:04:00",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00051212310791016
        },
        grid: [
            [null, 1, null, 0, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, null, 0],
            [0, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_112",
        name: "P6_1_112",
        description: "6x6 Easy #112",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 15:04:01",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.0003211498260498
        },
        grid: [
            [1, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [1, null, null, 0, 0, null],
            [null, null, 0, null, null, null],
            [0, null, null, 1, null, null],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_113",
        name: "P6_1_113",
        description: "6x6 Easy #113",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 15:04:03",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00014686584472656
        },
        grid: [
            [1, 0, null, 0, null, 0],
            [1, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [null, null, 0, 0, null, null],
            [0, null, 0, null, null, 1],
            [0, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_114",
        name: "P6_1_114",
        description: "6x6 Easy #114",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 15:04:04",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00033211708068848
        },
        grid: [
            [0, 0, null, 1, null, 1],
            [null, 0, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_115",
        name: "P6_1_115",
        description: "6x6 Easy #115",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 15:04:05",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00012993812561035
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, 0, 0, null, 1, null],
            [null, null, null, null, null, null],
            [0, null, null, null, 1, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_116",
        name: "P6_1_116",
        description: "6x6 Easy #116",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 15:04:07",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00011920928955078
        },
        grid: [
            [null, 1, null, null, null, null],
            [0, null, null, 1, null, 1],
            [0, null, 0, null, 0, 1],
            [null, null, null, null, null, null],
            [null, null, 0, null, 1, null],
            [1, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_117",
        name: "P6_1_117",
        description: "6x6 Easy #117",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 15:04:08",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00021505355834961
        },
        grid: [
            [null, 1, null, 0, 0, null],
            [0, null, null, null, null, 1],
            [null, null, 1, null, 0, null],
            [null, null, null, 1, null, null],
            [1, 1, null, null, null, 0],
            [null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_118",
        name: "P6_1_118",
        description: "6x6 Easy #118",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 15:04:09",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00061583518981934
        },
        grid: [
            [null, null, null, null, 1, null],
            [1, null, null, 0, null, 0],
            [null, 1, null, 0, null, null],
            [null, null, 1, null, null, null],
            [0, null, null, null, null, 1],
            [0, 0, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_119",
        name: "P6_1_119",
        description: "6x6 Easy #119",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 15:04:11",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00021600723266602
        },
        grid: [
            [null, null, 0, null, null, 1],
            [1, null, null, 0, 0, null],
            [1, null, null, null, 0, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 0],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_120",
        name: "P6_1_120",
        description: "6x6 Easy #120",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 15:04:12",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00051999092102051
        },
        grid: [
            [null, null, null, 0, 0, null],
            [0, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, 1, 1, null],
            [1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_121",
        name: "P6_1_121",
        description: "6x6 Easy #121",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 15:04:14",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
                tryFillCells: 0
            },
            time_taken: 0.00018906593322754
        },
        grid: [
            [null, 0, 0, null, 1, null],
            [null, null, 1, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, 1, 1, null, 1],
            [1, null, null, null, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_122",
        name: "P6_1_122",
        description: "6x6 Easy #122",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 15:04:15",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00067520141601562
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, 1, null],
            [1, null, null, 0, null, 0],
            [null, 1, null, 0, null, null],
            [null, null, 1, null, null, null],
            [0, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_123",
        name: "P6_1_123",
        description: "6x6 Easy #123",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 15:04:16",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00021600723266602
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, 1],
            [null, 1, 1, null, null, null],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_124",
        name: "P6_1_124",
        description: "6x6 Easy #124",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 15:04:18",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00022387504577637
        },
        grid: [
            [1, null, 1, null, 1, 0],
            [null, null, null, null, null, null],
            [1, 1, null, 0, null, 0],
            [0, null, null, 1, null, null],
            [null, null, null, null, 0, null],
            [0, null, 0, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_125",
        name: "P6_1_125",
        description: "6x6 Easy #125",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 15:04:19",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00049805641174316
        },
        grid: [
            [0, null, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, 1],
            [1, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_126",
        name: "P6_1_126",
        description: "6x6 Easy #126",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 15:04:21",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 4,
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
            time_taken: 0.00056195259094238
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, 1],
            [null, null, 0, null, 0, 1],
            [1, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_127",
        name: "P6_1_127",
        description: "6x6 Easy #127",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 15:04:22",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00033187866210938
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, null],
            [0, 1, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_128",
        name: "P6_1_128",
        description: "6x6 Easy #128",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 15:04:23",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00042986869812012
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, null, 1, null, null, null],
            [0, 0, null, null, 1, 1],
            [null, null, null, null, null, null],
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_129",
        name: "P6_1_129",
        description: "6x6 Easy #129",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 15:04:25",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0001981258392334
        },
        grid: [
            [null, 0, null, null, 1, null],
            [1, null, null, null, null, 0],
            [1, null, 1, 1, null, 0],
            [null, null, null, null, 0, null],
            [null, 1, 1, null, null, null],
            [null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_130",
        name: "P6_1_130",
        description: "6x6 Easy #130",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 15:04:26",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
                tryFillCells: 0
            },
            time_taken: 0.00010991096496582
        },
        grid: [
            [0, null, null, null, 0, 1],
            [0, 0, null, null, null, 1],
            [null, null, 1, 1, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, 0, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_131",
        name: "P6_1_131",
        description: "6x6 Easy #131",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 15:04:27",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00044012069702148
        },
        grid: [
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, 1],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null],
            [null, 1, null, null, null, 0],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_132",
        name: "P6_1_132",
        description: "6x6 Easy #132",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 15:04:29",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00033903121948242
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, null, null, 0, 0, null],
            [0, null, 1, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_133",
        name: "P6_1_133",
        description: "6x6 Easy #133",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 15:04:30",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00027298927307129
        },
        grid: [
            [null, null, null, null, 0, null],
            [0, 0, null, 1, null, null],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_134",
        name: "P6_1_134",
        description: "6x6 Easy #134",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 15:04:32",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00023198127746582
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 1, null, 1, 0],
            [0, null, null, null, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_135",
        name: "P6_1_135",
        description: "6x6 Easy #135",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 15:04:33",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00049400329589844
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, 1, null, 0, null, null],
            [null, null, null, 0, null, null],
            [0, null, 1, null, null, 1],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_136",
        name: "P6_1_136",
        description: "6x6 Easy #136",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 15:04:34",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 19,
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
            time_taken: 0.00012707710266113
        },
        grid: [
            [null, 1, null, 0, 0, null],
            [1, null, 1, null, null, 0],
            [1, null, null, 0, null, null],
            [null, 0, null, null, 1, 1],
            [null, 0, 0, null, null, 1],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_137",
        name: "P6_1_137",
        description: "6x6 Easy #137",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 15:04:36",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00031089782714844
        },
        grid: [
            [null, 0, null, null, 1, null],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, 1, null, 0],
            [0, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_138",
        name: "P6_1_138",
        description: "6x6 Easy #138",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 15:04:37",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00028300285339355
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, null, 1, null],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_139",
        name: "P6_1_139",
        description: "6x6 Easy #139",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 15:04:38",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00034904479980469
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 1],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [1, null, null, null, null, 0],
            [null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_140",
        name: "P6_1_140",
        description: "6x6 Easy #140",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 15:04:40",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00021100044250488
        },
        grid: [
            [1, 0, null, 0, null, 0],
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, 1],
            [0, null, null, null, null, 1],
            [null, 1, null, null, 0, null],
            [0, null, 0, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_141",
        name: "P6_1_141",
        description: "6x6 Easy #141",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 15:04:41",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, 0, null, null, 1, null],
            [1, null, null, null, null, 0],
            [1, 1, null, null, 0, 0],
            [null, null, null, 1, null, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_142",
        name: "P6_1_142",
        description: "6x6 Easy #142",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 15:04:43",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00038385391235352
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, 0],
            [null, 1, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_143",
        name: "P6_1_143",
        description: "6x6 Easy #143",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 15:04:44",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00028586387634277
        },
        grid: [
            [0, null, 0, null, 1, 1],
            [0, 0, null, null, null, 1],
            [null, null, null, null, 0, null],
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_144",
        name: "P6_1_144",
        description: "6x6 Easy #144",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 15:04:45",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00044393539428711
        },
        grid: [
            [1, null, 0, 0, null, 0],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [0, 0, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_145",
        name: "P6_1_145",
        description: "6x6 Easy #145",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 15:04:47",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00014400482177734
        },
        grid: [
            [null, null, 1, 1, null, null],
            [0, null, 1, 1, null, 1],
            [0, null, null, null, null, 1],
            [null, null, 0, null, 1, null],
            [null, 1, null, null, null, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_146",
        name: "P6_1_146",
        description: "6x6 Easy #146",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 15:04:48",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00018906593322754
        },
        grid: [
            [1, null, null, null, 0, 0],
            [null, null, 0, null, 1, null],
            [1, 1, null, null, null, 0],
            [null, null, null, 0, null, null],
            [0, null, null, null, null, 1],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_147",
        name: "P6_1_147",
        description: "6x6 Easy #147",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 15:04:50",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00048279762268066
        },
        grid: [
            [1, null, 0, null, null, 1],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [0, null, null, 1, null, 1],
            [null, null, 1, null, null, null],
            [0, null, 1, null, null, 0],
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_148",
        name: "P6_1_148",
        description: "6x6 Easy #148",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 15:04:51",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00039100646972656
        },
        grid: [
            [1, null, 1, 1, null, 0],
            [0, null, null, null, null, 1],
            [null, 1, null, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [0, null, 0, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_149",
        name: "P6_1_149",
        description: "6x6 Easy #149",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 15:04:52",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
                tryFillCells: 0
            },
            time_taken: 0.00011801719665527
        },
        grid: [
            [0, null, 1, 1, null, 1],
            [0, null, null, null, null, null],
            [null, 1, null, null, 0, 0],
            [null, 1, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_150",
        name: "P6_1_150",
        description: "6x6 Easy #150",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 15:04:54",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00014901161193848
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [0, null, null, 1, null, 1],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_151",
        name: "P6_1_151",
        description: "6x6 Easy #151",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 15:04:55",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00014019012451172
        },
        grid: [
            [1, null, 1, 1, null, 0],
            [null, 0, 0, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, 0, null, null, null, 1],
            [0, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_152",
        name: "P6_1_152",
        description: "6x6 Easy #152",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 15:04:56",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00030612945556641
        },
        grid: [
            [0, null, null, 1, null, null],
            [0, null, null, null, null, 1],
            [null, null, null, 0, 0, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, 1, null, 1, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_153",
        name: "P6_1_153",
        description: "6x6 Easy #153",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 15:04:58",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
                tryFillCells: 0
            },
            time_taken: 0.00016999244689941
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, 0],
            [null, 0, null, null, null, 1],
            [1, null, null, 0, null, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_154",
        name: "P6_1_154",
        description: "6x6 Easy #154",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 15:04:59",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00036001205444336
        },
        grid: [
            [null, 1, null, null, null, 0],
            [null, null, 1, null, null, 0],
            [0, 0, null, null, 1, null],
            [null, 0, null, null, null, 1],
            [null, null, null, 1, null, null],
            [1, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_155",
        name: "P6_1_155",
        description: "6x6 Easy #155",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 15:05:01",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00035691261291504
        },
        grid: [
            [null, null, null, 0, 0, null],
            [null, 0, null, null, null, null],
            [0, null, 1, null, null, 1],
            [null, null, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [1, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_156",
        name: "P6_1_156",
        description: "6x6 Easy #156",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 15:05:02",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00020098686218262
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, 0, null, 0],
            [null, 1, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_157",
        name: "P6_1_157",
        description: "6x6 Easy #157",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 15:05:03",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00048208236694336
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, 1, null, 1],
            [null, null, null, null, null, 1],
            [1, 1, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_158",
        name: "P6_1_158",
        description: "6x6 Easy #158",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 15:05:05",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00056195259094238
        },
        grid: [
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, 1],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, 0],
            [null, 1, null, null, null, 0],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_159",
        name: "P6_1_159",
        description: "6x6 Easy #159",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 15:05:06",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00014185905456543
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, null, null, 1, 1, null],
            [null, 1, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, 0, null, null, 1],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_160",
        name: "P6_1_160",
        description: "6x6 Easy #160",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 15:05:08",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00050020217895508
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, 0],
            [null, 1, null, null, 0, null],
            [0, null, null, 1, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_161",
        name: "P6_1_161",
        description: "6x6 Easy #161",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 15:05:09",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00011897087097168
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, null, 0],
            [0, null, null, 1, null, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_162",
        name: "P6_1_162",
        description: "6x6 Easy #162",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 15:05:10",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00015521049499512
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 1, 1, null, null, 0],
            [0, null, 0, null, null, null],
            [null, null, null, null, 0, null],
            [0, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_163",
        name: "P6_1_163",
        description: "6x6 Easy #163",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 15:05:12",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00015616416931152
        },
        grid: [
            [0, null, null, null, null, 1],
            [null, null, 0, 0, null, null],
            [0, null, 0, null, 1, 1],
            [1, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [1, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_164",
        name: "P6_1_164",
        description: "6x6 Easy #164",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 15:05:13",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00017404556274414
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [null, null, null, 1, 1, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_165",
        name: "P6_1_165",
        description: "6x6 Easy #165",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 15:05:15",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00038504600524902
        },
        grid: [
            [1, 0, null, 0, null, 0],
            [1, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, 0],
            [0, null, null, 1, null, null],
            [0, null, 0, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_166",
        name: "P6_1_166",
        description: "6x6 Easy #166",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 15:05:16",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00043582916259766
        },
        grid: [
            [null, null, null, null, null, 1],
            [1, null, null, null, 0, null],
            [1, null, 1, null, 0, 0],
            [null, null, null, 1, null, null],
            [0, null, null, null, 1, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_167",
        name: "P6_1_167",
        description: "6x6 Easy #167",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 15:05:17",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
                tryFillCells: 1
            },
            time_taken: 0.00041699409484863
        },
        grid: [
            [null, null, 0, 0, null, 1],
            [null, 0, null, null, 1, null],
            [1, null, null, 0, null, null],
            [null, null, 1, null, 0, null],
            [0, null, null, null, null, null],
            [null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_168",
        name: "P6_1_168",
        description: "6x6 Easy #168",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 15:05:19",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00078701972961426
        },
        grid: [
            [null, null, null, null, 1, null],
            [0, null, null, null, 1, 1],
            [null, 1, null, 0, null, null],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 0],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_169",
        name: "P6_1_169",
        description: "6x6 Easy #169",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 15:05:20",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00033211708068848
        },
        grid: [
            [null, null, 0, null, null, 1],
            [0, null, null, null, null, 1],
            [null, 1, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [1, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_170",
        name: "P6_1_170",
        description: "6x6 Easy #170",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 15:05:22",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00014305114746094
        },
        grid: [
            [null, 1, 1, null, 0, null],
            [null, null, null, 0, null, null],
            [1, null, 1, null, null, 0],
            [1, 1, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_171",
        name: "P6_1_171",
        description: "6x6 Easy #171",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 15:05:23",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00017786026000977
        },
        grid: [
            [0, 0, null, null, null, 1],
            [null, 0, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [1, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_172",
        name: "P6_1_172",
        description: "6x6 Easy #172",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 15:05:24",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00015115737915039
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 1, 1, null],
            [0, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_173",
        name: "P6_1_173",
        description: "6x6 Easy #173",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 15:05:26",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00029301643371582
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, null, null, 1, null],
            [1, null, null, 0, null, 0],
            [null, 1, 1, null, null, null],
            [null, 1, null, null, 0, null],
            [0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_174",
        name: "P6_1_174",
        description: "6x6 Easy #174",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 15:05:27",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00032997131347656
        },
        grid: [
            [1, null, null, null, 0, 0],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, 0],
            [null, null, 0, 0, null, 0],
            [0, 1, null, null, null, null],
            [0, null, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_175",
        name: "P6_1_175",
        description: "6x6 Easy #175",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 15:05:28",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00055384635925293
        },
        grid: [
            [1, null, null, 0, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, 1, null, null],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [0, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_176",
        name: "P6_1_176",
        description: "6x6 Easy #176",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 15:05:30",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.0003349781036377
        },
        grid: [
            [null, 1, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, 0, null, 1, null, 1],
            [null, 0, 0, null, null, 1],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_177",
        name: "P6_1_177",
        description: "6x6 Easy #177",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 15:05:31",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00020098686218262
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, 1],
            [1, null, 0, 0, null, null],
            [0, null, 0, 0, null, 1],
            [null, null, null, null, null, null],
            [null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_178",
        name: "P6_1_178",
        description: "6x6 Easy #178",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 15:05:33",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00029706954956055
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_179",
        name: "P6_1_179",
        description: "6x6 Easy #179",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 15:05:34",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.00047087669372559
        },
        grid: [
            [1, null, null, 0, null, 0],
            [null, null, 1, null, 0, null],
            [1, null, 1, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, 1, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_180",
        name: "P6_1_180",
        description: "6x6 Easy #180",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 15:05:35",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 27,
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
            [null, null, null, 1, null, null],
            [null, null, null, 1, 1, null],
            [1, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_181",
        name: "P6_1_181",
        description: "6x6 Easy #181",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 15:05:37",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 20,
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
            time_taken: 0.00011205673217773
        },
        grid: [
            [1, null, 1, null, 1, 0],
            [null, 0, null, null, null, 1],
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, 1],
            [1, null, 0, null, null, null],
            [0, null, 0, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_182",
        name: "P6_1_182",
        description: "6x6 Easy #182",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 15:05:38",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
                tryFillCells: 0
            },
            time_taken: 0.00012993812561035
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [null, null, 0, 0, null, 1],
            [null, null, null, null, 1, null],
            [0, null, null, null, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, 1, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_183",
        name: "P6_1_183",
        description: "6x6 Easy #183",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 15:05:39",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.00040817260742188
        },
        grid: [
            [null, null, null, null, 0, 0],
            [0, null, null, 1, 1, null],
            [null, null, 0, null, null, null],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_184",
        name: "P6_1_184",
        description: "6x6 Easy #184",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 15:05:41",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.6,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00066900253295898
        },
        grid: [
            [null, null, 1, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, null, null, 1, null],
            [1, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_185",
        name: "P6_1_185",
        description: "6x6 Easy #185",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 15:05:42",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00023198127746582
        },
        grid: [
            [1, null, null, 0, null, 0],
            [null, null, 0, null, null, 1],
            [1, 1, null, null, 0, null],
            [null, null, null, null, 0, null],
            [0, null, null, 1, null, null],
            [0, 0, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_186",
        name: "P6_1_186",
        description: "6x6 Easy #186",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 15:05:44",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0007779598236084
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, 1],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, 0],
            [0, 0, null, null, null, null],
            [null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_187",
        name: "P6_1_187",
        description: "6x6 Easy #187",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 15:05:45",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00042414665222168
        },
        grid: [
            [0, 0, null, null, null, 1],
            [0, null, null, 1, null, 1],
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 0],
            [1, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_188",
        name: "P6_1_188",
        description: "6x6 Easy #188",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 15:05:46",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
                tryFillCells: 0
            },
            time_taken: 0.00012516975402832
        },
        grid: [
            [null, 0, 0, null, 1, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [0, 0, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_189",
        name: "P6_1_189",
        description: "6x6 Easy #189",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 15:05:48",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00047206878662109
        },
        grid: [
            [null, 1, null, null, null, 0],
            [null, null, 0, null, 0, null],
            [1, null, null, null, 0, null],
            [null, 0, null, null, null, 1],
            [1, null, null, 0, null, null],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_190",
        name: "P6_1_190",
        description: "6x6 Easy #190",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 15:05:49",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00041890144348145
        },
        grid: [
            [null, 0, null, null, 1, null],
            [0, 0, null, null, null, null],
            [null, null, 1, null, null, 0],
            [null, null, null, 0, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_1_191",
        name: "P6_1_191",
        description: "6x6 Easy #191",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 15:05:51",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00014090538024902
        },
        grid: [
            [null, 1, null, 0, null, null],
            [0, null, 0, 0, null, 1],
            [0, null, null, null, null, 1],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, 1, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_192",
        name: "P6_1_192",
        description: "6x6 Easy #192",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 15:05:52",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 22,
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
            time_taken: 0.00028085708618164
        },
        grid: [
            [null, null, 1, null, null, 0],
            [0, null, 1, 1, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 0, null, null, 1],
            [1, null, null, 0, null, null],
            [1, 1, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_1_193",
        name: "P6_1_193",
        description: "6x6 Easy #193",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 15:05:53",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00030994415283203
        },
        grid: [
            [1, 1, null, null, 0, 0],
            [null, 1, null, 1, null, null],
            [1, null, null, null, null, 0],
            [null, 0, null, null, 1, null],
            [null, null, null, 0, null, null],
            [0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_194",
        name: "P6_1_194",
        description: "6x6 Easy #194",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 15:05:55",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0002140998840332
        },
        grid: [
            [null, null, 0, null, null, null],
            [0, null, null, null, 0, 1],
            [0, 0, null, 1, null, 1],
            [null, 0, null, null, null, null],
            [1, null, null, null, null, 0],
            [null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_1_195",
        name: "P6_1_195",
        description: "6x6 Easy #195",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 15:05:56",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 24,
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
            time_taken: 0.00038599967956543
        },
        grid: [
            [null, 1, null, null, null, 1],
            [1, null, null, 0, 0, null],
            [1, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_196",
        name: "P6_1_196",
        description: "6x6 Easy #196",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 15:05:58",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0002899169921875
        },
        grid: [
            [1, null, 0, 0, null, null],
            [null, null, null, null, null, 1],
            [null, 1, null, 0, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, null, null, 1, null],
            [0, 0, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_197",
        name: "P6_1_197",
        description: "6x6 Easy #197",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 15:05:59",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00025606155395508
        },
        grid: [
            [0, 0, null, 1, null, 1],
            [0, null, null, 0, null, 1],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, 1, 1, null],
            [1, 1, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_1_198",
        name: "P6_1_198",
        description: "6x6 Easy #198",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 15:06:00",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 0.8,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 23,
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
            time_taken: 0.0001528263092041
        },
        grid: [
            [null, 1, 1, null, 0, null],
            [0, null, 0, null, null, null],
            [null, null, null, 0, null, 0],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_1_199",
        name: "P6_1_199",
        description: "6x6 Easy #199",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 15:06:02",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00033807754516602
        },
        grid: [
            [null, null, 1, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, null, 1, 1, null],
            [1, 1, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_1_200",
        name: "P6_1_200",
        description: "6x6 Easy #200",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=1&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 15:06:03",
        difficulty: "Easy",
        difficulty_score: 6,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 1.2,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 21,
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
            time_taken: 0.00023913383483887
        },
        grid: [
            [1, null, null, 0, 0, null],
            [null, 1, null, null, null, 0],
            [null, null, 1, null, null, 0],
            [0, 0, null, null, 1, null],
            [null, 0, null, null, null, 1],
            [0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL6x6_d1_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL6x6_d1_PUZZLES = LEVEL6x6_d1_PUZZLES;
}
