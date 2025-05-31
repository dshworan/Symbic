/**
 * level 8x8 d4 - 8x8 extreme
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

const LEVEL8x8_d4_PUZZLES = [
    {
        id: "P8_4_1",
        name: "P8_4_1",
        description: "8x8 Hard #1",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 23:16:33",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24.1,
            size_score: 10,
            percent_filled_by_logic: 58.5
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 3,
            backtrack_iterations: 41,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.010025978088379
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0],
            [null, 0, null, null, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_2",
        name: "P8_4_2",
        description: "8x8 Hard #2",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 23:16:35",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 76,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.013978004455566
        },
        grid: [
            [null, 0, 1, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, 1, 1, null, null, null, 0],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_3",
        name: "P8_4_3",
        description: "8x8 Hard #3",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 23:16:36",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2689,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.32650184631348
        },
        grid: [
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, 1, 1, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_4",
        name: "P8_4_4",
        description: "8x8 Hard #4",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 23:16:38",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 1.2,
            backtracking_score: 28.7,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 3139,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.36676096916199
        },
        grid: [
            [null, 1, null, null, null, null, null, 1],
            [0, null, 0, null, null, null, null, null],
            [1, null, null, 1, null, null, null, 1],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [1, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_5",
        name: "P8_4_5",
        description: "8x8 Hard #5",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 23:16:40",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2715,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.31626105308533
        },
        grid: [
            [null, null, 1, 1, null, 1, null, null],
            [1, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_6",
        name: "P8_4_6",
        description: "8x8 Medium #6",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 23:16:42",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 12.2,
            logic_iterations_score: 1.6,
            backtracking_score: 22.7,
            size_score: 10,
            percent_filled_by_logic: 69.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 11,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0059590339660645
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, 1, null, null],
            [null, null, null, 1, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, null, 1, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_7",
        name: "P8_4_7",
        description: "8x8 Hard #7",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 23:16:43",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 40.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 611,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.11736679077148
        },
        grid: [
            [null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, 1, null, null, null, 1],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_8",
        name: "P8_4_8",
        description: "8x8 Medium #8",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 23:16:45",
        difficulty: "Medium",
        difficulty_score: 38,
        difficulty_factors: {
            logic_fill_score: 21.2,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 46.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0030310153961182
        },
        grid: [
            [null, null, null, 0, 0, null, 1, null],
            [null, 1, 1, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_9",
        name: "P8_4_9",
        description: "8x8 Hard #9",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 23:16:46",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 27.5,
            logic_iterations_score: 1.2,
            backtracking_score: 25.7,
            size_score: 10,
            percent_filled_by_logic: 31.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 191,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.024313926696777
        },
        grid: [
            [null, 0, null, null, 1, 1, null, null],
            [1, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, 1, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_10",
        name: "P8_4_10",
        description: "8x8 Hard #10",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 23:16:48",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 0.8,
            backtracking_score: 25.7,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 192,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.023922920227051
        },
        grid: [
            [null, null, null, 0, null, null, null, 0],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, 1],
            [null, null, null, null, 0, null, null, null],
            [0, null, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_11",
        name: "P8_4_11",
        description: "8x8 Hard #11",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 23:16:50",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30.4,
            logic_iterations_score: 0.8,
            backtracking_score: 28,
            size_score: 10,
            percent_filled_by_logic: 24
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 1533,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.1806058883667
        },
        grid: [
            [0, 0, null, 0, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_12",
        name: "P8_4_12",
        description: "8x8 Hard #12",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 23:16:53",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 11942,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.388247013092
        },
        grid: [
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 0],
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_13",
        name: "P8_4_13",
        description: "8x8 Hard #13",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 23:16:55",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.3,
            logic_iterations_score: 0.8,
            backtracking_score: 29.6,
            size_score: 10,
            percent_filled_by_logic: 19.2
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 2,
            backtrack_iterations: 7017,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.81632781028748
        },
        grid: [
            [null, null, null, null, 0, null, null, 0],
            [null, null, null, 1, 0, null, 1, null],
            [1, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_14",
        name: "P8_4_14",
        description: "8x8 Hard #14",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 23:16:57",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 24,
            logic_iterations_score: 0.8,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 129,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016101121902466
        },
        grid: [
            [1, null, null, null, null, null, 0, null],
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_15",
        name: "P8_4_15",
        description: "8x8 Hard #15",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 23:16:58",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.6,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 60.8
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 36,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.007317066192627
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, null, 1, 1, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_16",
        name: "P8_4_16",
        description: "8x8 Hard #16",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 23:17:00",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 21.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 46
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 346,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.045729160308838
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_17",
        name: "P8_4_17",
        description: "8x8 Hard #17",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 23:17:01",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 28.3,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 2022,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.21507382392883
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, 1, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, 0, null, null, null, 0],
            [null, 0, null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_18",
        name: "P8_4_18",
        description: "8x8 Medium #18",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 23:17:03",
        difficulty: "Medium",
        difficulty_score: 49,
        difficulty_factors: {
            logic_fill_score: 15.2,
            logic_iterations_score: 1.6,
            backtracking_score: 22.1,
            size_score: 10,
            percent_filled_by_logic: 62
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0040919780731201
        },
        grid: [
            [null, null, null, null, null, 0, null, 0],
            [null, null, 0, 0, null, null, null, null],
            [null, 1, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_19",
        name: "P8_4_19",
        description: "8x8 Hard #19",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 23:17:05",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 1277,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.18547797203064
        },
        grid: [
            [null, 0, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 0, 0, null, 0, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_20",
        name: "P8_4_20",
        description: "8x8 Hard #20",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 23:17:07",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.6,
            logic_iterations_score: 0.8,
            backtracking_score: 29.6,
            size_score: 10,
            percent_filled_by_logic: 16
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 7195,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.8562388420105
        },
        grid: [
            [null, 0, 0, null, null, null, null, 0],
            [1, null, 0, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null],
            [null, null, 1, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_21",
        name: "P8_4_21",
        description: "8x8 Easy #21",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 23:17:09",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 8,
            logic_iterations_score: 2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 80
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 5,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0054450035095215
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, 0, 0, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, 0, null, null, null, null],
            [null, 0, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_22",
        name: "P8_4_22",
        description: "8x8 Easy #22",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 23:17:10",
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
            initial_empty: 50,
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
            time_taken: 0.0014500617980957
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, 1, null, 0, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, null, null],
            [1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_23",
        name: "P8_4_23",
        description: "8x8 Hard #23",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 23:17:13",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 15190,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.8053698539734
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, 0],
            [null, null, 0, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, 0],
            [0, null, null, null, null, 1, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_24",
        name: "P8_4_24",
        description: "8x8 Hard #24",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 23:17:15",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 30.8,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 22.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 59,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0091979503631592
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, 0, null],
            [1, null, null, null, 0, 0, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1],
            [0, null, 1, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_25",
        name: "P8_4_25",
        description: "8x8 Hard #25",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 23:17:16",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.4,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 54
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 20,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0055289268493652
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_26",
        name: "P8_4_26",
        description: "8x8 Hard #26",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 23:17:18",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 24.8,
            logic_iterations_score: 1.2,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 38
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 622,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.087369203567505
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0],
            [0, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_27",
        name: "P8_4_27",
        description: "8x8 Hard #27",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 23:17:20",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 707,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0934898853302
        },
        grid: [
            [null, null, null, null, 0, null, 0, null],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_28",
        name: "P8_4_28",
        description: "8x8 Medium #28",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 23:17:21",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 8.8,
            logic_iterations_score: 2,
            backtracking_score: 22.6,
            size_score: 10,
            percent_filled_by_logic: 78
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 5,
            backtrack_iterations: 10,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0075550079345703
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_29",
        name: "P8_4_29",
        description: "8x8 Hard #29",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 23:17:26",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 1.2,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 20235,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 2.966922044754
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, 0],
            [null, 1, null, 1, null, 1, null, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_30",
        name: "P8_4_30",
        description: "8x8 Hard #30",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 23:17:27",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 0.8,
            backtracking_score: 25.2,
            size_score: 10,
            percent_filled_by_logic: 32
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 118,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016271114349365
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, 0, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [1, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_31",
        name: "P8_4_31",
        description: "8x8 Hard #31",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 23:17:29",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28,
            logic_iterations_score: 1.2,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 30
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 1155,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.14015293121338
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_32",
        name: "P8_4_32",
        description: "8x8 Hard #32",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 23:17:31",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 3,
            backtrack_iterations: 1290,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.14770984649658
        },
        grid: [
            [null, 0, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, 1, 1, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_33",
        name: "P8_4_33",
        description: "8x8 Hard #33",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 23:17:32",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 34.4,
            logic_iterations_score: 0.8,
            backtracking_score: 27.2,
            size_score: 10,
            percent_filled_by_logic: 14
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 756,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.092288017272949
        },
        grid: [
            [1, null, null, null, null, null, null, 0],
            [1, null, 0, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [0, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_34",
        name: "P8_4_34",
        description: "8x8 Hard #34",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 23:17:34",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 18.4,
            logic_iterations_score: 1.2,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 54
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 136,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016948938369751
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, 0, 1],
            [null, null, 0, null, null, null, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_35",
        name: "P8_4_35",
        description: "8x8 Medium #35",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 23:17:35",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 11.5,
            logic_iterations_score: 1.6,
            backtracking_score: 23,
            size_score: 10,
            percent_filled_by_logic: 71.2
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 4,
            backtrack_iterations: 15,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0049200057983398
        },
        grid: [
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [1, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_36",
        name: "P8_4_36",
        description: "8x8 Hard #36",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 23:17:37",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 1.2,
            backtracking_score: 25.1,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 104,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016569137573242
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [1, 0, null, 0, 1, null, 1, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_37",
        name: "P8_4_37",
        description: "8x8 Hard #37",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 23:17:41",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 30.8,
            logic_iterations_score: 1.2,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 23.1
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 14514,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.7639591693878
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_38",
        name: "P8_4_38",
        description: "8x8 Medium #38",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 23:17:42",
        difficulty: "Medium",
        difficulty_score: 29,
        difficulty_factors: {
            logic_fill_score: 12,
            logic_iterations_score: 1.6,
            backtracking_score: 5.6,
            size_score: 10,
            percent_filled_by_logic: 70
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0040409564971924
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 0, null, null, 1, 1, null, null],
            [null, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [0, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_39",
        name: "P8_4_39",
        description: "8x8 Hard #39",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 23:17:44",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.6,
            logic_iterations_score: 0.8,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 36
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 371,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.082839965820312
        },
        grid: [
            [null, 0, 1, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, 1, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_40",
        name: "P8_4_40",
        description: "8x8 Hard #40",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 23:17:45",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 24.8,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 10,
            percent_filled_by_logic: 38
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 47,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.012673139572144
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 1, null, null, 1],
            [0, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_41",
        name: "P8_4_41",
        description: "8x8 Hard #41",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 23:17:47",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.2,
            logic_iterations_score: 0.8,
            backtracking_score: 29.2,
            size_score: 10,
            percent_filled_by_logic: 22
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 4758,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.50505399703979
        },
        grid: [
            [null, 1, 1, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [0, null, null, null, 1, 1, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_42",
        name: "P8_4_42",
        description: "8x8 Hard #42",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 23:17:49",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 1.2,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 817,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.093925952911377
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, 0],
            [null, null, null, 1, 0, null, 0, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, 1],
            [null, 0, null, 0, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_43",
        name: "P8_4_43",
        description: "8x8 Hard #43",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 23:17:51",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 35,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.011035919189453
        },
        grid: [
            [null, 1, 0, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, 0, null, 1, 1, null, 0],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null],
            [null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_44",
        name: "P8_4_44",
        description: "8x8 Hard #44",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 23:17:52",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 0.8,
            backtracking_score: 28.2,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1913,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.21261405944824
        },
        grid: [
            [null, 1, 1, null, null, 0, 1, null],
            [null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, 1, null, null, 1],
            [null, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_45",
        name: "P8_4_45",
        description: "8x8 Medium #45",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 23:17:54",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 26.1,
            logic_iterations_score: 1.2,
            backtracking_score: 6.4,
            size_score: 10,
            percent_filled_by_logic: 34.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0031588077545166
        },
        grid: [
            [null, null, null, 1, null, null, null, 0],
            [1, null, null, null, null, 0, null, null],
            [1, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, 1, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_46",
        name: "P8_4_46",
        description: "8x8 Hard #46",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 23:17:56",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 31.5,
            logic_iterations_score: 0.8,
            backtracking_score: 29.7,
            size_score: 10,
            percent_filled_by_logic: 21.2
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 2,
            backtrack_iterations: 7273,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.85139679908752
        },
        grid: [
            [null, null, null, 1, null, null, 1, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_47",
        name: "P8_4_47",
        description: "8x8 Hard #47",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 23:17:58",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 51.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 56,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.013257026672363
        },
        grid: [
            [1, null, 0, null, 0, null, 0, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, 0],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_48",
        name: "P8_4_48",
        description: "8x8 Hard #48",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 23:17:59",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 31,
            logic_iterations_score: 1.2,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 22.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 814,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.10689091682434
        },
        grid: [
            [null, null, 1, null, null, null, 1, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, 0],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [1, null, 1, 0, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_49",
        name: "P8_4_49",
        description: "8x8 Hard #49",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 23:18:01",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 26.5,
            size_score: 10,
            percent_filled_by_logic: 45.1
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 386,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.049191951751709
        },
        grid: [
            [null, null, null, null, null, 1, null, null],
            [0, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null],
            [0, 0, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_50",
        name: "P8_4_50",
        description: "8x8 Hard #50",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 23:18:04",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.1,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 17.3
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 2,
            backtrack_iterations: 14700,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.7250580787659
        },
        grid: [
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, 1, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_51",
        name: "P8_4_51",
        description: "8x8 Hard #51",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 23:18:06",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 1.2,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 1272,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.17339587211609
        },
        grid: [
            [null, null, 0, null, 1, null, 0, null],
            [null, null, null, 0, null, null, 0, null],
            [null, 1, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, 0, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_52",
        name: "P8_4_52",
        description: "8x8 Hard #52",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 23:18:07",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.2,
            backtracking_score: 24.9,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 94,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.019290208816528
        },
        grid: [
            [null, 1, null, null, 1, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, 1, 1, null, 1, 1, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_53",
        name: "P8_4_53",
        description: "8x8 Hard #53",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 23:18:09",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 26.6,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 424,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.046984910964966
        },
        grid: [
            [null, null, 0, 0, null, null, 1, null],
            [0, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, 0, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, 1, null, null, null],
            [null, 1, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_54",
        name: "P8_4_54",
        description: "8x8 Hard #54",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 23:18:11",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.2,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 3543,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.42341613769531
        },
        grid: [
            [null, null, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, null],
            [1, 1, null, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 0],
            [null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_55",
        name: "P8_4_55",
        description: "8x8 Hard #55",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 23:18:12",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.2,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 153,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.029813051223755
        },
        grid: [
            [null, null, 1, null, null, 1, 1, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1],
            [0, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_56",
        name: "P8_4_56",
        description: "8x8 Medium #56",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 23:18:14",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 10.8,
            logic_iterations_score: 2,
            backtracking_score: 22.5,
            size_score: 10,
            percent_filled_by_logic: 72.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 5,
            backtrack_iterations: 9,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0038950443267822
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, 1, null, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, 0, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_57",
        name: "P8_4_57",
        description: "8x8 Medium #57",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 23:18:15",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 5,
            logic_iterations_score: 2.4,
            backtracking_score: 21.5,
            size_score: 10,
            percent_filled_by_logic: 87.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 6,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0035181045532227
        },
        grid: [
            [null, null, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, null, null, null, 0, 0, null, 1],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, 1, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_58",
        name: "P8_4_58",
        description: "8x8 Hard #58",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 23:18:17",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 14.3,
            logic_iterations_score: 1.6,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 64.2
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 4,
            backtrack_iterations: 78,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.011137962341309
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [0, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_59",
        name: "P8_4_59",
        description: "8x8 Hard #59",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 23:18:19",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 18.8,
            logic_iterations_score: 1.6,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 52.9
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 55,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.010886907577515
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_60",
        name: "P8_4_60",
        description: "8x8 Hard #60",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 23:18:20",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28.2,
            logic_iterations_score: 0.8,
            backtracking_score: 26,
            size_score: 10,
            percent_filled_by_logic: 29.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 250,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.028555870056152
        },
        grid: [
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_61",
        name: "P8_4_61",
        description: "8x8 Hard #61",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 23:18:22",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31,
            logic_iterations_score: 0.8,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 22.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 3482,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.40109300613403
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, 0, 1, null, 1],
            [1, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_62",
        name: "P8_4_62",
        description: "8x8 Medium #62",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 23:18:24",
        difficulty: "Medium",
        difficulty_score: 41,
        difficulty_factors: {
            logic_fill_score: 7.1,
            logic_iterations_score: 1.6,
            backtracking_score: 22.1,
            size_score: 10,
            percent_filled_by_logic: 82.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0031352043151855
        },
        grid: [
            [null, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, 0],
            [null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_63",
        name: "P8_4_63",
        description: "8x8 Hard #63",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 23:18:26",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.3,
            logic_iterations_score: 1.2,
            backtracking_score: 29.3,
            size_score: 10,
            percent_filled_by_logic: 19.2
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 5441,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.65655303001404
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, 0, null, null, 1, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_64",
        name: "P8_4_64",
        description: "8x8 Hard #64",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 23:18:28",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 1.2,
            backtracking_score: 29.1,
            size_score: 10,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 4440,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.49071502685547
        },
        grid: [
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [0, null, null, 0, null, 0, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_65",
        name: "P8_4_65",
        description: "8x8 Hard #65",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 23:18:30",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 1199,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.12587809562683
        },
        grid: [
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, 1, null],
            [0, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_66",
        name: "P8_4_66",
        description: "8x8 Hard #66",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 23:18:31",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 25.1,
            logic_iterations_score: 0.8,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 37.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 348,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.04649019241333
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [0, null, 0, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, 0, null, null],
            [null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_67",
        name: "P8_4_67",
        description: "8x8 Hard #67",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 23:18:33",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 29.1,
            size_score: 10,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 54,
            logic_iterations: 3,
            backtrack_iterations: 4545,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.49486708641052
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, 1, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_68",
        name: "P8_4_68",
        description: "8x8 Hard #68",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 23:18:35",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.3,
            logic_iterations_score: 1.2,
            backtracking_score: 29.3,
            size_score: 10,
            percent_filled_by_logic: 19.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 5329,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.62399911880493
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, 1],
            [null, 1, null, null, 1, null, 0, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, 1],
            [null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_69",
        name: "P8_4_69",
        description: "8x8 Medium #69",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 23:18:37",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 11.4,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 71.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 28,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0044460296630859
        },
        grid: [
            [null, 0, 0, null, null, null, null, 0],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, 1, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_70",
        name: "P8_4_70",
        description: "8x8 Medium #70",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 23:18:39",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 8.8,
            logic_iterations_score: 1.6,
            backtracking_score: 21.7,
            size_score: 10,
            percent_filled_by_logic: 78
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0031940937042236
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, 1, null, null, 1, null, 0],
            [1, null, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_71",
        name: "P8_4_71",
        description: "8x8 Hard #71",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 23:18:40",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 1.2,
            backtracking_score: 25.7,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 191,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.025501012802124
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [1, null, null, null, null, null, null, 1],
            [0, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_72",
        name: "P8_4_72",
        description: "8x8 Easy #72",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 23:18:42",
        difficulty: "Easy",
        difficulty_score: 12,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.4,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0047428607940674
        },
        grid: [
            [null, 0, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, 1, null, 1, null, null, null],
            [0, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_73",
        name: "P8_4_73",
        description: "8x8 Hard #73",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 23:18:43",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 62,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0097110271453857
        },
        grid: [
            [0, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, 1, null, 1, null, null],
            [null, 0, null, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_74",
        name: "P8_4_74",
        description: "8x8 Hard #74",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 23:18:45",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.2,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 52
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 63,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.010091066360474
        },
        grid: [
            [0, null, 1, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [0, 1, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_75",
        name: "P8_4_75",
        description: "8x8 Hard #75",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 23:18:47",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.7,
            logic_iterations_score: 0.8,
            backtracking_score: 29.3,
            size_score: 10,
            percent_filled_by_logic: 15.7
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 5447,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.67423391342163
        },
        grid: [
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_76",
        name: "P8_4_76",
        description: "8x8 Hard #76",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 23:18:48",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 21.2,
            logic_iterations_score: 1.2,
            backtracking_score: 26,
            size_score: 10,
            percent_filled_by_logic: 47.1
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 258,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.030218839645386
        },
        grid: [
            [null, null, null, 1, null, 0, null, null],
            [null, null, 0, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 1, null, null, 1, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_77",
        name: "P8_4_77",
        description: "8x8 Hard #77",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 23:18:51",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.6,
            backtracking_score: 29.3,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 4,
            backtrack_iterations: 5217,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.55111503601074
        },
        grid: [
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_78",
        name: "P8_4_78",
        description: "8x8 Hard #78",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 23:18:52",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 23.4,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 22,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0063769817352295
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, 0],
            [1, null, null, 0, 0, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_79",
        name: "P8_4_79",
        description: "8x8 Hard #79",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 23:18:54",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.5,
            logic_iterations_score: 0.8,
            backtracking_score: 29.4,
            size_score: 10,
            percent_filled_by_logic: 16.3
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 5511,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.63653993606567
        },
        grid: [
            [null, null, 0, null, null, null, 1, null],
            [null, null, 0, null, null, null, 1, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, 1, null, 1, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_80",
        name: "P8_4_80",
        description: "8x8 Hard #80",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 23:18:56",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.2,
            backtracking_score: 24.8,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 84,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.022734880447388
        },
        grid: [
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, 1],
            [null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null],
            [0, 0, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, 1, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_81",
        name: "P8_4_81",
        description: "8x8 Hard #81",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 23:18:57",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 25.6,
            logic_iterations_score: 0.8,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 36
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 1170,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.1485390663147
        },
        grid: [
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, 1, null, 0, null, null],
            [0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_82",
        name: "P8_4_82",
        description: "8x8 Hard #82",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 23:18:59",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 46,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0077090263366699
        },
        grid: [
            [1, 1, null, null, null, null, null, null],
            [null, 1, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, 1, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_83",
        name: "P8_4_83",
        description: "8x8 Hard #83",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 23:19:01",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 1.2,
            backtracking_score: 28.2,
            size_score: 10,
            percent_filled_by_logic: 32
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 1852,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.19285917282104
        },
        grid: [
            [0, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 1, null],
            [1, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_84",
        name: "P8_4_84",
        description: "8x8 Hard #84",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 23:19:02",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 21.7,
            logic_iterations_score: 1.2,
            backtracking_score: 25.8,
            size_score: 10,
            percent_filled_by_logic: 45.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 199,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.022922039031982
        },
        grid: [
            [null, 1, 0, null, null, null, 0, 1],
            [null, null, null, null, null, 0, null, null],
            [1, null, 0, null, null, null, null, 1],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, 1, null, null],
            [0, null, null, null, 1, null, null, 1],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_85",
        name: "P8_4_85",
        description: "8x8 Hard #85",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 23:19:04",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 0.8,
            backtracking_score: 27.4,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 897,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.12478280067444
        },
        grid: [
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [0, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_86",
        name: "P8_4_86",
        description: "8x8 Hard #86",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 23:19:05",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28.9,
            logic_iterations_score: 1.2,
            backtracking_score: 25.1,
            size_score: 10,
            percent_filled_by_logic: 27.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 112,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016972064971924
        },
        grid: [
            [null, null, 0, null, 1, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, 1, 0, null],
            [null, null, 1, null, null, null, null, 1],
            [1, null, null, null, null, 1, 1, null],
            [1, null, 1, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null],
            [0, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_87",
        name: "P8_4_87",
        description: "8x8 Hard #87",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 23:19:07",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.5,
            logic_iterations_score: 0.8,
            backtracking_score: 28.2,
            size_score: 10,
            percent_filled_by_logic: 18.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1907,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.23713803291321
        },
        grid: [
            [null, null, 0, null, null, 1, null, 1],
            [null, null, 0, 0, null, 0, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, 1, null, null, null, null],
            [1, 1, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_88",
        name: "P8_4_88",
        description: "8x8 Hard #88",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 23:19:09",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.6,
            backtracking_score: 27.6,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 1137,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.13610315322876
        },
        grid: [
            [null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, 1, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, 0, 1, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_89",
        name: "P8_4_89",
        description: "8x8 Hard #89",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 23:19:10",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 65,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.009077787399292
        },
        grid: [
            [1, null, 0, 0, null, null, null, null],
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, null, null, 1, null],
            [null, 0, null, 0, null, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_90",
        name: "P8_4_90",
        description: "8x8 Hard #90",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 23:19:12",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.6,
            backtracking_score: 22.9,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 14,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0060939788818359
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, null, null, 1, null, 1, 1, null],
            [0, null, null, null, null, null, null, 1],
            [0, 1, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_91",
        name: "P8_4_91",
        description: "8x8 Very Hard #91",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 23:19:14",
        difficulty: "Very Hard",
        difficulty_score: 80,
        difficulty_factors: {
            logic_fill_score: 39.2,
            logic_iterations_score: 0.8,
            backtracking_score: 29.8,
            size_score: 10,
            percent_filled_by_logic: 2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 8325,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 1.0228760242462
        },
        grid: [
            [0, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [1, 1, null, null, null, null, null, 1],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_92",
        name: "P8_4_92",
        description: "8x8 Hard #92",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 23:19:16",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 18.8,
            logic_iterations_score: 2,
            backtracking_score: 25.6,
            size_score: 10,
            percent_filled_by_logic: 53.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 5,
            backtrack_iterations: 173,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.025640964508057
        },
        grid: [
            [0, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null],
            [1, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, 1],
            [1, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_93",
        name: "P8_4_93",
        description: "8x8 Hard #93",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 23:19:18",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 21.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26.1,
            size_score: 10,
            percent_filled_by_logic: 46
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 275,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.052821159362793
        },
        grid: [
            [1, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, 1, 1, null, 1, null, null],
            [null, null, null, null, null, 1, null, 0],
            [null, 0, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_94",
        name: "P8_4_94",
        description: "8x8 Hard #94",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 23:19:19",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 25.5,
            logic_iterations_score: 1.6,
            backtracking_score: 26.8,
            size_score: 10,
            percent_filled_by_logic: 36.2
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 503,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.058600902557373
        },
        grid: [
            [1, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, 0, null, null],
            [null, null, 0, null, null, null, null, 0],
            [0, 0, null, null, 0, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, 0, null, 0, null, null, null, 0],
            [null, null, null, null, 0, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_95",
        name: "P8_4_95",
        description: "8x8 Medium #95",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 23:19:21",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 9.6,
            logic_iterations_score: 1.6,
            backtracking_score: 22.9,
            size_score: 10,
            percent_filled_by_logic: 76
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 13,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.004518985748291
        },
        grid: [
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, 0, 1],
            [1, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_96",
        name: "P8_4_96",
        description: "8x8 Hard #96",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 23:19:22",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.8,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 3287,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.390291929245
        },
        grid: [
            [0, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, 0],
            [0, null, null, 1, 0, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_97",
        name: "P8_4_97",
        description: "8x8 Hard #97",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 23:19:24",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 1.2,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 1195,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.13451790809631
        },
        grid: [
            [1, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 0, null],
            [0, null, null, null, 0, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 0, null, 0, 1],
            [null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_98",
        name: "P8_4_98",
        description: "8x8 Hard #98",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 23:19:26",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.8,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 53.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 36,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.010539054870605
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, 0],
            [0, null, null, 0, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_99",
        name: "P8_4_99",
        description: "8x8 Hard #99",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 23:19:27",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 20.4,
            logic_iterations_score: 1.2,
            backtracking_score: 25.8,
            size_score: 10,
            percent_filled_by_logic: 49
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 204,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.030563831329346
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [1, null, 1, null, null, null, 0, 0],
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_100",
        name: "P8_4_100",
        description: "8x8 Hard #100",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 23:19:29",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 31,
            logic_iterations_score: 0.8,
            backtracking_score: 28.5,
            size_score: 10,
            percent_filled_by_logic: 22.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2434,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.2891321182251
        },
        grid: [
            [null, null, null, null, null, null, 1, 1],
            [null, null, 1, 1, 0, null, null, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_101",
        name: "P8_4_101",
        description: "8x8 Hard #101",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 23:19:31",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 26.6,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 439,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.049556970596313
        },
        grid: [
            [1, 0, null, 0, 1, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, 0],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_102",
        name: "P8_4_102",
        description: "8x8 Hard #102",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 23:19:32",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 23.3,
            logic_iterations_score: 1.2,
            backtracking_score: 26.5,
            size_score: 10,
            percent_filled_by_logic: 41.7
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 414,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.07555103302002
        },
        grid: [
            [null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, 1, null, 0, null, 0, null, 1],
            [0, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_103",
        name: "P8_4_103",
        description: "8x8 Hard #103",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 23:19:34",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 27.8,
            logic_iterations_score: 1.2,
            backtracking_score: 28.7,
            size_score: 10,
            percent_filled_by_logic: 30.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 3141,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.37258911132812
        },
        grid: [
            [0, null, null, null, null, 1, 0, null],
            [0, 1, null, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, 1, null, null, 1],
            [1, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_104",
        name: "P8_4_104",
        description: "8x8 Hard #104",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 23:19:36",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.2,
            backtracking_score: 25.9,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 225,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.028479099273682
        },
        grid: [
            [null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, 0, null, null, null, null],
            [1, null, 1, null, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_105",
        name: "P8_4_105",
        description: "8x8 Hard #105",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 23:19:38",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 3594,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.37897706031799
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, 0, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, 0, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [0, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_106",
        name: "P8_4_106",
        description: "8x8 Easy #106",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 23:19:39",
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
            initial_empty: 48,
            logic_iterations: 5,
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
                tryFillCells: 4
            },
            time_taken: 0.0027070045471191
        },
        grid: [
            [null, 1, null, 0, null, null, null, 1],
            [1, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, 0, null],
            [null, 1, null, 0, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_107",
        name: "P8_4_107",
        description: "8x8 Hard #107",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 23:19:40",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 23,
            logic_iterations_score: 1.2,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 42.6
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 157,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.02962589263916
        },
        grid: [
            [1, null, null, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, null],
            [1, null, null, null, null, 0, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, 0],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, 1, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_108",
        name: "P8_4_108",
        description: "8x8 Medium #108",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 23:19:42",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 5.6,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0038270950317383
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, 1, null, 0, null, null],
            [null, 1, null, 1, null, null, null, 1],
            [0, null, null, null, null, 0, 1, null],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_109",
        name: "P8_4_109",
        description: "8x8 Hard #109",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 23:19:44",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 27.5,
            logic_iterations_score: 1.6,
            backtracking_score: 29.3,
            size_score: 10,
            percent_filled_by_logic: 31.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 5477,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.6580069065094
        },
        grid: [
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, null, 0, null, 1, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_110",
        name: "P8_4_110",
        description: "8x8 Hard #110",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 23:19:46",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 20.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2748,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.31414604187012
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, 0, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_111",
        name: "P8_4_111",
        description: "8x8 Hard #111",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 23:19:48",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 15,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0040478706359863
        },
        grid: [
            [null, null, null, 0, null, null, 1, null],
            [0, null, null, 1, null, 0, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_112",
        name: "P8_4_112",
        description: "8x8 Hard #112",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 23:19:49",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 18.4,
            logic_iterations_score: 2,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 54
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 5,
            backtrack_iterations: 134,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.01833701133728
        },
        grid: [
            [null, null, 1, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_113",
        name: "P8_4_113",
        description: "8x8 Hard #113",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 23:19:51",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.9,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 27.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 355,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.041729927062988
        },
        grid: [
            [1, null, null, null, null, null, 0, null],
            [null, null, 0, 1, null, null, null, null],
            [1, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, 0],
            [null, 0, null, null, null, null, null, null],
            [null, 0, 1, null, 1, null, 0, null],
            [null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_114",
        name: "P8_4_114",
        description: "8x8 Medium #114",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 23:19:52",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 13.3,
            logic_iterations_score: 2,
            backtracking_score: 22.6,
            size_score: 10,
            percent_filled_by_logic: 66.7
        },
        solver_metrics: {
            initial_empty: 54,
            logic_iterations: 5,
            backtrack_iterations: 10,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0058250427246094
        },
        grid: [
            [null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 0],
            [null, null, 1, 1, null, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_115",
        name: "P8_4_115",
        description: "8x8 Hard #115",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 23:19:54",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.7,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 58.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 61,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0092449188232422
        },
        grid: [
            [1, 0, null, 0, null, null, 1, null],
            [null, null, null, null, 0, null, null, 0],
            [null, 0, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, 0, null, null, 1, null, 0, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_116",
        name: "P8_4_116",
        description: "8x8 Hard #116",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 23:19:55",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 1.2,
            backtracking_score: 27.2,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 730,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.089027881622314
        },
        grid: [
            [null, null, null, 0, null, 0, 1, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, 1, null, null],
            [0, null, null, null, 1, null, null, null],
            [null, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_117",
        name: "P8_4_117",
        description: "8x8 Hard #117",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 23:19:57",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.4,
            logic_iterations_score: 0.8,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 54
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 30,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0049159526824951
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [0, 0, null, null, 0, 0, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_118",
        name: "P8_4_118",
        description: "8x8 Medium #118",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 23:19:58",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0031170845031738
        },
        grid: [
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_119",
        name: "P8_4_119",
        description: "8x8 Hard #119",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 23:20:00",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 17.5,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 56.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 34,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0058739185333252
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, 0, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, 1, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_120",
        name: "P8_4_120",
        description: "8x8 Hard #120",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 23:20:01",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 51
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 34,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0066108703613281
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, null],
            [0, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_121",
        name: "P8_4_121",
        description: "8x8 Medium #121",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 23:20:03",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.2,
            backtracking_score: 6.4,
            size_score: 10,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0032200813293457
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, 1, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_122",
        name: "P8_4_122",
        description: "8x8 Hard #122",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 23:20:05",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 27.8,
            logic_iterations_score: 1.2,
            backtracking_score: 28,
            size_score: 10,
            percent_filled_by_logic: 30.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 1547,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.20162105560303
        },
        grid: [
            [null, null, null, null, null, null, 0, 0],
            [null, null, 0, null, null, null, 0, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, 0, 1, null, 1],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_123",
        name: "P8_4_123",
        description: "8x8 Hard #123",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 23:20:06",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 40.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 856,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.10615301132202
        },
        grid: [
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, 0, null, null, 0, null, null, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_124",
        name: "P8_4_124",
        description: "8x8 Hard #124",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 23:20:08",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.8,
            logic_iterations_score: 1.2,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 53.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 55,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.015254020690918
        },
        grid: [
            [null, 0, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 0, null, null, 1, 1, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, 1, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_125",
        name: "P8_4_125",
        description: "8x8 Hard #125",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 23:20:09",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 17.6,
            logic_iterations_score: 1.6,
            backtracking_score: 23.5,
            size_score: 10,
            percent_filled_by_logic: 56
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 25,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0068600177764893
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, 0, null, null, null, 0, 1, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 1],
            [0, null, null, null, 1, null, null, null],
            [null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_126",
        name: "P8_4_126",
        description: "8x8 Medium #126",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 23:20:11",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 13.6,
            logic_iterations_score: 1.6,
            backtracking_score: 23.1,
            size_score: 10,
            percent_filled_by_logic: 66
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 17,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0045969486236572
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, 1, null, 1, null, 1, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, 0],
            [1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_127",
        name: "P8_4_127",
        description: "8x8 Hard #127",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 23:20:13",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 1.6,
            backtracking_score: 27.6,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 1074,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.13094782829285
        },
        grid: [
            [null, 1, null, null, null, 0, 0, null],
            [0, null, 1, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null],
            [null, 1, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, 0, 0],
            [0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_128",
        name: "P8_4_128",
        description: "8x8 Hard #128",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 23:20:15",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 28.1,
            size_score: 10,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 2,
            backtrack_iterations: 1815,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.19950985908508
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, 0, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [1, null, null, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_129",
        name: "P8_4_129",
        description: "8x8 Hard #129",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 23:20:16",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 27.6,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1136,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.14074611663818
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, 0, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_130",
        name: "P8_4_130",
        description: "8x8 Hard #130",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 23:20:18",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.6,
            backtracking_score: 24.3,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 50,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.009354829788208
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [1, null, 1, null, null, null, null, 0],
            [1, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_131",
        name: "P8_4_131",
        description: "8x8 Hard #131",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 23:20:19",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 25.9,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 35.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 63,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.012067079544067
        },
        grid: [
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, 1, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_132",
        name: "P8_4_132",
        description: "8x8 Hard #132",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 23:20:21",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 26
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 19,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0047538280487061
        },
        grid: [
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, 1, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 0, 1, 1, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_133",
        name: "P8_4_133",
        description: "8x8 Hard #133",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 23:20:23",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.1,
            logic_iterations_score: 1.6,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 34.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 368,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.060982942581177
        },
        grid: [
            [null, null, 0, null, 0, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_134",
        name: "P8_4_134",
        description: "8x8 Hard #134",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 23:20:24",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 33.2,
            logic_iterations_score: 0.8,
            backtracking_score: 28,
            size_score: 10,
            percent_filled_by_logic: 17
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 1549,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.17416596412659
        },
        grid: [
            [null, 1, null, null, 0, null, null, 1],
            [null, null, null, 0, null, null, 1, null],
            [null, 1, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_135",
        name: "P8_4_135",
        description: "8x8 Hard #135",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 23:20:26",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 26.2,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 289,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.035090923309326
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, null],
            [0, null, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_136",
        name: "P8_4_136",
        description: "8x8 Hard #136",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 23:20:28",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.8,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 3342,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.40461111068726
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, 0],
            [null, null, null, null, null, null, 0, 0],
            [1, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, 1],
            [0, null, null, null, null, null, 0, null],
            [null, 0, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_137",
        name: "P8_4_137",
        description: "8x8 Hard #137",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 23:20:30",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 27.5
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 10248,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.2624950408936
        },
        grid: [
            [null, null, null, null, 0, 0, null, null],
            [1, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_138",
        name: "P8_4_138",
        description: "8x8 Hard #138",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 23:20:33",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 1.2,
            backtracking_score: 29.4,
            size_score: 10,
            percent_filled_by_logic: 32.1
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 3,
            backtrack_iterations: 5520,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.63886213302612
        },
        grid: [
            [null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_139",
        name: "P8_4_139",
        description: "8x8 Hard #139",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 23:20:34",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 27.6,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 1083,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.13576579093933
        },
        grid: [
            [0, null, 1, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, 1],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_140",
        name: "P8_4_140",
        description: "8x8 Hard #140",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 23:20:36",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 27.5
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 701,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.07890796661377
        },
        grid: [
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, null],
            [0, 0, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_141",
        name: "P8_4_141",
        description: "8x8 Hard #141",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 23:20:37",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 863,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.11915397644043
        },
        grid: [
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_142",
        name: "P8_4_142",
        description: "8x8 Hard #142",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 23:20:39",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 637,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.089558124542236
        },
        grid: [
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, 0, null, 1, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_143",
        name: "P8_4_143",
        description: "8x8 Hard #143",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 23:20:41",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 23.5,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 41.2
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 19,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0093281269073486
        },
        grid: [
            [null, null, null, null, 0, null, 0, null],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_144",
        name: "P8_4_144",
        description: "8x8 Hard #144",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 23:20:42",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 715,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.10751581192017
        },
        grid: [
            [null, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [0, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_145",
        name: "P8_4_145",
        description: "8x8 Medium #145",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 23:20:44",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 10.8,
            logic_iterations_score: 1.6,
            backtracking_score: 22.6,
            size_score: 10,
            percent_filled_by_logic: 72.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 10,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.003525972366333
        },
        grid: [
            [null, null, 0, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 1, 1, null],
            [0, null, 1, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 1],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_146",
        name: "P8_4_146",
        description: "8x8 Hard #146",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 23:20:45",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.4,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 54
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 36,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0067670345306396
        },
        grid: [
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_147",
        name: "P8_4_147",
        description: "8x8 Hard #147",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 23:20:47",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 28.1,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1758,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.21076202392578
        },
        grid: [
            [null, 0, 0, null, 1, null, 1, null],
            [null, 1, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [null, 1, null, null, null, 0, null, null],
            [null, null, null, null, 1, 0, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_148",
        name: "P8_4_148",
        description: "8x8 Hard #148",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 23:20:49",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.6,
            logic_iterations_score: 0.8,
            backtracking_score: 29.7,
            size_score: 10,
            percent_filled_by_logic: 16
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 7386,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.85784387588501
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, null, null, null, 1, null],
            [0, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_149",
        name: "P8_4_149",
        description: "8x8 Hard #149",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 23:20:51",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 1.2,
            backtracking_score: 25.9,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 235,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.030977010726929
        },
        grid: [
            [null, null, null, 1, null, null, 0, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, 0, null, null, null, 1],
            [0, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_150",
        name: "P8_4_150",
        description: "8x8 Hard #150",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 23:20:53",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 1.2,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 2785,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.34270620346069
        },
        grid: [
            [1, 0, null, null, null, null, null, null],
            [1, null, null, null, 0, 1, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 1],
            [null, 1, 1, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_151",
        name: "P8_4_151",
        description: "8x8 Hard #151",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 23:20:55",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18,
            logic_iterations_score: 1.2,
            backtracking_score: 24.8,
            size_score: 10,
            percent_filled_by_logic: 55.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 84,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.016146898269653
        },
        grid: [
            [1, null, 0, null, 0, null, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, 1, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_152",
        name: "P8_4_152",
        description: "8x8 Medium #152",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 23:20:56",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 28.5,
            logic_iterations_score: 1.2,
            backtracking_score: 7.4,
            size_score: 10,
            percent_filled_by_logic: 28.8
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 12,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0043671131134033
        },
        grid: [
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 0, null, 0, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_153",
        name: "P8_4_153",
        description: "8x8 Hard #153",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 23:20:58",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 0.8,
            backtracking_score: 26.6,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 432,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.050384998321533
        },
        grid: [
            [1, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_154",
        name: "P8_4_154",
        description: "8x8 Hard #154",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 23:20:59",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 36,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0055551528930664
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, 1, null, null, null],
            [null, 0, 1, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_155",
        name: "P8_4_155",
        description: "8x8 Hard #155",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 23:21:01",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.3,
            size_score: 10,
            percent_filled_by_logic: 20.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2140,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.25746297836304
        },
        grid: [
            [null, 1, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, 0],
            [1, null, 1, 0, null, null, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_156",
        name: "P8_4_156",
        description: "8x8 Hard #156",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 23:21:04",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.6,
            logic_iterations_score: 0.8,
            backtracking_score: 29.9,
            size_score: 10,
            percent_filled_by_logic: 16
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 8871,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.0288410186768
        },
        grid: [
            [null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, null, 0],
            [null, 1, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_157",
        name: "P8_4_157",
        description: "8x8 Hard #157",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 23:21:05",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.9,
            logic_iterations_score: 0.8,
            backtracking_score: 26.3,
            size_score: 10,
            percent_filled_by_logic: 35.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 336,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.060550928115845
        },
        grid: [
            [1, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_158",
        name: "P8_4_158",
        description: "8x8 Hard #158",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 23:21:07",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.6,
            logic_iterations_score: 0.8,
            backtracking_score: 26.6,
            size_score: 10,
            percent_filled_by_logic: 36
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 451,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.054383039474487
        },
        grid: [
            [0, null, null, null, 0, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, 1, 1, null],
            [0, null, null, null, null, 1, null, null],
            [0, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_159",
        name: "P8_4_159",
        description: "8x8 Hard #159",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 23:21:09",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.2,
            backtracking_score: 25.1,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 109,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.015431880950928
        },
        grid: [
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_160",
        name: "P8_4_160",
        description: "8x8 Hard #160",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 23:21:10",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 25.4,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 148,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.02019214630127
        },
        grid: [
            [null, 0, null, null, null, 0, null, 1],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_161",
        name: "P8_4_161",
        description: "8x8 Hard #161",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 23:21:13",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 28.3,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 2166,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.25556588172913
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_162",
        name: "P8_4_162",
        description: "8x8 Hard #162",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 23:21:14",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18,
            logic_iterations_score: 1.6,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 55.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 19,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0048530101776123
        },
        grid: [
            [null, null, 1, 1, null, 0, null, 1],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, 0, null, 1, null, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_163",
        name: "P8_4_163",
        description: "8x8 Hard #163",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 23:21:16",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 33.2,
            logic_iterations_score: 0.8,
            backtracking_score: 25.7,
            size_score: 10,
            percent_filled_by_logic: 17
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 187,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.023833990097046
        },
        grid: [
            [null, 0, null, null, 0, 1, null, 1],
            [1, null, null, null, null, null, 0, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null],
            [1, null, null, 1, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_164",
        name: "P8_4_164",
        description: "8x8 Very Hard #164",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 23:21:19",
        difficulty: "Very Hard",
        difficulty_score: 76,
        difficulty_factors: {
            logic_fill_score: 35.1,
            logic_iterations_score: 1.2,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 12.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 20211,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 2.2885980606079
        },
        grid: [
            [0, null, null, 0, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null],
            [0, 0, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, 0, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_165",
        name: "P8_4_165",
        description: "8x8 Hard #165",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 23:21:21",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.6,
            backtracking_score: 26.1,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 265,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.032960176467896
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [0, 0, null, 0, null, null, 0, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_166",
        name: "P8_4_166",
        description: "8x8 Hard #166",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 23:21:22",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 0.8,
            backtracking_score: 26.7,
            size_score: 10,
            percent_filled_by_logic: 27.5
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 468,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.05521297454834
        },
        grid: [
            [null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_167",
        name: "P8_4_167",
        description: "8x8 Hard #167",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 23:21:25",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 1.2,
            backtracking_score: 29.9,
            size_score: 10,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 8947,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.0064258575439
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, 0, null, 0],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_168",
        name: "P8_4_168",
        description: "8x8 Medium #168",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 23:21:26",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 14.2,
            logic_iterations_score: 2,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 64.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 5,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.004810094833374
        },
        grid: [
            [0, null, 0, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, null, 1, 0, null, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, 0, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_169",
        name: "P8_4_169",
        description: "8x8 Easy #169",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 23:21:28",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 7.8,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 80.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0019650459289551
        },
        grid: [
            [null, 0, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, 1],
            [null, 0, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_170",
        name: "P8_4_170",
        description: "8x8 Hard #170",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 23:21:30",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 32
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 367,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.046701908111572
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, 1],
            [null, null, null, null, 1, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_171",
        name: "P8_4_171",
        description: "8x8 Hard #171",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 23:21:32",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 27.8,
            logic_iterations_score: 1.2,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 30.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 2665,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.43457889556885
        },
        grid: [
            [1, null, null, 0, null, 0, null, null],
            [null, 0, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, 1, null, 1],
            [null, null, null, 0, null, null, 1, null],
            [null, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_172",
        name: "P8_4_172",
        description: "8x8 Hard #172",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 23:21:33",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 654,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.070188999176025
        },
        grid: [
            [null, null, 0, null, 0, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, null],
            [null, null, null, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_173",
        name: "P8_4_173",
        description: "8x8 Very Hard #173",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 23:21:36",
        difficulty: "Very Hard",
        difficulty_score: 77,
        difficulty_factors: {
            logic_fill_score: 36.2,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 9.6
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 2,
            backtrack_iterations: 15147,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 1.8052251338959
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, 0, null, 0, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_174",
        name: "P8_4_174",
        description: "8x8 Hard #174",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 23:21:38",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 31.9
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 675,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.077680110931396
        },
        grid: [
            [null, 0, 0, null, null, 1, null, null],
            [1, 0, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, 0, 1, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 0],
            [1, null, null, null, 1, null, 1, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_175",
        name: "P8_4_175",
        description: "8x8 Medium #175",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 23:21:39",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 25.3,
            logic_iterations_score: 0.8,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 36.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0023899078369141
        },
        grid: [
            [1, null, null, null, null, null, null, 1],
            [1, 1, null, 0, null, null, 1, null],
            [null, null, 0, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, 1, 0, null, 1, 0, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_176",
        name: "P8_4_176",
        description: "8x8 Hard #176",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 23:21:41",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.3,
            logic_iterations_score: 1.2,
            backtracking_score: 26.3,
            size_score: 10,
            percent_filled_by_logic: 36.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 319,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.036284208297729
        },
        grid: [
            [null, null, 1, null, null, 1, null, 1],
            [null, 0, null, null, 1, null, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_177",
        name: "P8_4_177",
        description: "8x8 Easy #177",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 23:21:42",
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
            initial_empty: 50,
            logic_iterations: 5,
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
                tryFillCells: 3
            },
            time_taken: 0.0026531219482422
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, 0, null],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 1],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_178",
        name: "P8_4_178",
        description: "8x8 Hard #178",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 23:21:44",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 855,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.092591047286987
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, 0, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null],
            [0, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_179",
        name: "P8_4_179",
        description: "8x8 Easy #179",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 23:21:46",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 8.2,
            logic_iterations_score: 2.4,
            backtracking_score: 4,
            size_score: 10,
            percent_filled_by_logic: 79.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 6,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0037908554077148
        },
        grid: [
            [null, null, null, null, 0, null, null, 1],
            [1, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 0, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_180",
        name: "P8_4_180",
        description: "8x8 Hard #180",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 23:21:47",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 28.9,
            logic_iterations_score: 1.2,
            backtracking_score: 28,
            size_score: 10,
            percent_filled_by_logic: 27.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 1526,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.18412709236145
        },
        grid: [
            [null, 1, null, null, 0, null, 1, null],
            [null, null, null, 0, null, 1, null, null],
            [null, 1, null, null, null, null, 0, 1],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, 1, null, null, 0],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_181",
        name: "P8_4_181",
        description: "8x8 Hard #181",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 23:21:49",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 10,
            percent_filled_by_logic: 30
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 207,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.027587890625
        },
        grid: [
            [1, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, null, 0, null, null],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_182",
        name: "P8_4_182",
        description: "8x8 Hard #182",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 23:21:50",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 20.8,
            logic_iterations_score: 1.2,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 48
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 135,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.016608953475952
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [1, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_183",
        name: "P8_4_183",
        description: "8x8 Hard #183",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 23:21:52",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 24,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 354,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.038400888442993
        },
        grid: [
            [null, 1, null, null, null, null, 0, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_184",
        name: "P8_4_184",
        description: "8x8 Hard #184",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 23:21:54",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 15.2,
            logic_iterations_score: 1.6,
            backtracking_score: 25,
            size_score: 10,
            percent_filled_by_logic: 62
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 99,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.015913009643555
        },
        grid: [
            [1, null, 1, null, null, null, null, 1],
            [null, null, 1, null, null, null, 0, null],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, 1],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_185",
        name: "P8_4_185",
        description: "8x8 Easy #185",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 23:21:55",
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
            initial_empty: 49,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015859603881836
        },
        grid: [
            [null, 1, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 0, 1, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 1, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_186",
        name: "P8_4_186",
        description: "8x8 Hard #186",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 23:21:57",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 25.1,
            logic_iterations_score: 1.2,
            backtracking_score: 27.5,
            size_score: 10,
            percent_filled_by_logic: 37.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 1016,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.12356305122375
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_187",
        name: "P8_4_187",
        description: "8x8 Hard #187",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 23:21:59",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.6,
            backtracking_score: 26.8,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 533,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.066950082778931
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [null, 1, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, null],
            [0, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_188",
        name: "P8_4_188",
        description: "8x8 Hard #188",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 23:22:00",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 17.4,
            logic_iterations_score: 1.6,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 56.6
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 4,
            backtrack_iterations: 152,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.021558046340942
        },
        grid: [
            [1, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, 0, null, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_189",
        name: "P8_4_189",
        description: "8x8 Hard #189",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 23:22:02",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 20.8,
            logic_iterations_score: 1.2,
            backtracking_score: 22.9,
            size_score: 10,
            percent_filled_by_logic: 48
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 13,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0047228336334229
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1],
            [0, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_190",
        name: "P8_4_190",
        description: "8x8 Hard #190",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 23:22:03",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 814,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.1005380153656
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [1, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null],
            [null, null, 0, null, 0, null, null, null],
            [0, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_191",
        name: "P8_4_191",
        description: "8x8 Hard #191",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 23:22:05",
        difficulty: "Hard",
        difficulty_score: 75,
        difficulty_factors: {
            logic_fill_score: 35,
            logic_iterations_score: 0.8,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 12.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 3685,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.45329403877258
        },
        grid: [
            [null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null],
            [0, 1, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_192",
        name: "P8_4_192",
        description: "8x8 Hard #192",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 23:22:07",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 17.9,
            logic_iterations_score: 1.6,
            backtracking_score: 24,
            size_score: 10,
            percent_filled_by_logic: 55.3
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 38,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00832200050354
        },
        grid: [
            [1, null, null, null, null, 1, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [null, null, 0, 0, null, 0, null, null],
            [1, null, null, 0, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_4_193",
        name: "P8_4_193",
        description: "8x8 Very Hard #193",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 23:22:09",
        difficulty: "Very Hard",
        difficulty_score: 76,
        difficulty_factors: {
            logic_fill_score: 35,
            logic_iterations_score: 1.2,
            backtracking_score: 29.8,
            size_score: 10,
            percent_filled_by_logic: 12.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 7946,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.87924695014954
        },
        grid: [
            [null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, 1],
            [1, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [0, 0, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_4_194",
        name: "P8_4_194",
        description: "8x8 Hard #194",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 23:22:11",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.6,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 348,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.043060064315796
        },
        grid: [
            [null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0],
            [null, null, 1, 1, null, null, 1, null],
            [0, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_195",
        name: "P8_4_195",
        description: "8x8 Hard #195",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 23:22:13",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 1.2,
            backtracking_score: 27.5,
            size_score: 10,
            percent_filled_by_logic: 39.2
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 978,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.13894581794739
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, 0, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_4_196",
        name: "P8_4_196",
        description: "8x8 Hard #196",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 23:22:14",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28,
            logic_iterations_score: 0.8,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 30
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 1290,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.15100693702698
        },
        grid: [
            [null, null, 0, null, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, 1, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_197",
        name: "P8_4_197",
        description: "8x8 Hard #197",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 23:22:16",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 25.1,
            logic_iterations_score: 1.6,
            backtracking_score: 26.9,
            size_score: 10,
            percent_filled_by_logic: 37.3
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 583,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.071128845214844
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, 0, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_4_198",
        name: "P8_4_198",
        description: "8x8 Hard #198",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 23:22:18",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 27.9,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 1416,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.16028189659119
        },
        grid: [
            [1, null, null, null, 0, 1, null, null],
            [null, 0, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0],
            [null, 1, null, 1, null, null, null, 0],
            [null, null, 0, 1, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_4_199",
        name: "P8_4_199",
        description: "8x8 Medium #199",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 23:22:20",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 14.4,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 10,
            percent_filled_by_logic: 64
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0035130977630615
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, 0, null, null, null, 0, null],
            [1, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_4_200",
        name: "P8_4_200",
        description: "8x8 Hard #200",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=4&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 23:22:21",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 25.9,
            size_score: 10,
            percent_filled_by_logic: 40.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 225,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.031155109405518
        },
        grid: [
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, 0, null, 0, null, 1, null],
            [1, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL8x8_d4_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL8x8_d4_PUZZLES = LEVEL8x8_d4_PUZZLES;
}
