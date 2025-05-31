/**
 * level 8x8 d2 - 8x8 medium
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

const LEVEL8x8_d2_PUZZLES = [
    {
        id: "P8_2_1",
        name: "P8_2_1",
        description: "8x8 Easy #1",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 22:57:55",
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
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0014848709106445
        },
        grid: [
            [null, null, null, null, 0, null, 0, null],
            [0, null, 0, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [0, null, null, 0, null, null, null, null],
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_2",
        name: "P8_2_2",
        description: "8x8 Easy #2",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 22:57:56",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0026850700378418
        },
        grid: [
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, 1, 0, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, 1, 1, null, null, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_3",
        name: "P8_2_3",
        description: "8x8 Easy #3",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 22:57:57",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0026638507843018
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [0, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, 1],
            [null, null, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1],
            [1, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_4",
        name: "P8_2_4",
        description: "8x8 Easy #4",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 22:57:59",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014829635620117
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [0, null, null, 0, null, 0, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, 1, null, null, 0],
            [null, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_5",
        name: "P8_2_5",
        description: "8x8 Easy #5",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 22:58:00",
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
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0025908946990967
        },
        grid: [
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, null],
            [1, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 1, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_6",
        name: "P8_2_6",
        description: "8x8 Easy #6",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 22:58:02",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0025269985198975
        },
        grid: [
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, null, 0, null, 1, null],
            [0, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_7",
        name: "P8_2_7",
        description: "8x8 Easy #7",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 22:58:03",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.002500057220459
        },
        grid: [
            [null, null, null, 1, null, null, null, 0],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, 1],
            [null, 0, null, 1, 1, null, null, null],
            [null, null, null, null, null, 0, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_8",
        name: "P8_2_8",
        description: "8x8 Easy #8",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 22:58:04",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0027608871459961
        },
        grid: [
            [null, null, 0, null, 1, 1, null, null],
            [null, 1, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_9",
        name: "P8_2_9",
        description: "8x8 Easy #9",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 22:58:06",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0025589466094971
        },
        grid: [
            [null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, 1, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_10",
        name: "P8_2_10",
        description: "8x8 Easy #10",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 22:58:07",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0020959377288818
        },
        grid: [
            [0, null, null, 0, null, null, 1, null],
            [null, 0, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [1, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, 0],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_11",
        name: "P8_2_11",
        description: "8x8 Easy #11",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 22:58:08",
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
            initial_empty: 46,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0021960735321045
        },
        grid: [
            [0, null, 1, null, null, 0, 0, null],
            [null, null, null, null, null, 0, null, 0],
            [1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, null, 1, 1, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_12",
        name: "P8_2_12",
        description: "8x8 Easy #12",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 22:58:10",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0021600723266602
        },
        grid: [
            [1, null, null, null, 0, null, null, null],
            [0, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 1],
            [0, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, 1, null],
            [null, null, 0, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_13",
        name: "P8_2_13",
        description: "8x8 Easy #13",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 22:58:11",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0029211044311523
        },
        grid: [
            [null, 1, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [1, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_14",
        name: "P8_2_14",
        description: "8x8 Easy #14",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 22:58:13",
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
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0018770694732666
        },
        grid: [
            [null, 1, 1, null, null, null, null, null],
            [0, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_15",
        name: "P8_2_15",
        description: "8x8 Easy #15",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 22:58:14",
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
                preventTrio: 2,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0026140213012695
        },
        grid: [
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_16",
        name: "P8_2_16",
        description: "8x8 Easy #16",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 22:58:15",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0026960372924805
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, null, 1, null, 0, 0],
            [1, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_17",
        name: "P8_2_17",
        description: "8x8 Easy #17",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 22:58:17",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012550354003906
        },
        grid: [
            [null, null, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [1, null, null, 1, null, 1, null, 1],
            [null, 0, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_18",
        name: "P8_2_18",
        description: "8x8 Easy #18",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 22:58:18",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0032210350036621
        },
        grid: [
            [null, null, null, 1, null, null, 0, null],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, 0, null, 0, null, null, null, 1],
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_19",
        name: "P8_2_19",
        description: "8x8 Easy #19",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 22:58:19",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016689300537109
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [0, 0, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 0],
            [0, null, 0, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, 1, null],
            [null, null, null, 1, 0, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_20",
        name: "P8_2_20",
        description: "8x8 Easy #20",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 22:58:21",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0020871162414551
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 0, 1, null, 0, null, 0, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_21",
        name: "P8_2_21",
        description: "8x8 Easy #21",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 22:58:22",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0009620189666748
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, 1, null, null, null, null],
            [1, null, null, 1, null, null, 0, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, 0],
            [0, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_22",
        name: "P8_2_22",
        description: "8x8 Easy #22",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 22:58:24",
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
            initial_empty: 46,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0023608207702637
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 1, null, 1],
            [null, 0, null, null, null, 1, 0, null],
            [1, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [null, 1, null, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_23",
        name: "P8_2_23",
        description: "8x8 Easy #23",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 22:58:25",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001230001449585
        },
        grid: [
            [null, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, 0, 0, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 0, null, 0, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [1, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_24",
        name: "P8_2_24",
        description: "8x8 Easy #24",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 22:58:26",
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
                completeRowsColumns: 1,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0020260810852051
        },
        grid: [
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, 0, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, 1, 0],
            [1, null, null, null, null, null, null, null],
            [1, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_25",
        name: "P8_2_25",
        description: "8x8 Easy #25",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 22:58:28",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0029659271240234
        },
        grid: [
            [0, null, null, 0, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, 0, null, 0, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, 1, null, null, 0],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_26",
        name: "P8_2_26",
        description: "8x8 Easy #26",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 22:58:29",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017890930175781
        },
        grid: [
            [null, null, null, null, null, null, 0, 0],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, 0],
            [0, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, 0, 0],
            [null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_27",
        name: "P8_2_27",
        description: "8x8 Easy #27",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 22:58:31",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010268688201904
        },
        grid: [
            [null, null, null, null, 1, null, 0, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, 1, null, null, null, null, 0, null],
            [0, null, 0, null, 1, null, null, null],
            [null, null, 0, null, 0, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_28",
        name: "P8_2_28",
        description: "8x8 Easy #28",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 22:58:32",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0013740062713623
        },
        grid: [
            [1, null, null, 1, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, 1, null, 0],
            [null, null, null, 1, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, 1, null, 1, null, null],
            [null, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_29",
        name: "P8_2_29",
        description: "8x8 Easy #29",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 22:58:34",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013368129730225
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, null, null, 1],
            [1, null, 1, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, 1, null, 1, null, null, 1, null],
            [null, null, null, null, 0, null, null, 0],
            [null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_30",
        name: "P8_2_30",
        description: "8x8 Easy #30",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 22:58:35",
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
            initial_empty: 49,
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
            time_taken: 0.0013859272003174
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, 0],
            [null, null, 0, null, 0, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_31",
        name: "P8_2_31",
        description: "8x8 Easy #31",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 22:58:37",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017280578613281
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0],
            [null, 0, null, null, 0, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_32",
        name: "P8_2_32",
        description: "8x8 Easy #32",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 22:58:38",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023579597473145
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, null, null, null, 0, null, 0],
            [null, null, 1, null, null, null, null, 0],
            [1, null, null, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, 1, null, 0],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_33",
        name: "P8_2_33",
        description: "8x8 Easy #33",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 22:58:40",
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
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00193190574646
        },
        grid: [
            [0, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, 0, null, null],
            [0, null, 1, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, 1, null, null, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, 0],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_34",
        name: "P8_2_34",
        description: "8x8 Easy #34",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 22:58:41",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014808177947998
        },
        grid: [
            [1, null, 1, null, 1, null, 1, null],
            [null, 0, null, null, null, null, null, 0],
            [1, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, 0, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_35",
        name: "P8_2_35",
        description: "8x8 Easy #35",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 22:58:43",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0029821395874023
        },
        grid: [
            [null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, 1],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [0, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_36",
        name: "P8_2_36",
        description: "8x8 Easy #36",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 22:58:44",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0027999877929688
        },
        grid: [
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, null, null, 1],
            [null, null, null, 1, 0, null, null, 1],
            [0, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, 0, null, null],
            [null, null, 0, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_37",
        name: "P8_2_37",
        description: "8x8 Easy #37",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 22:58:46",
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
                fillSandwiches: 4,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0022199153900146
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, 0, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, 1, null, 0, null, 0, 1, null],
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_38",
        name: "P8_2_38",
        description: "8x8 Easy #38",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 22:58:47",
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
            time_taken: 0.0015408992767334
        },
        grid: [
            [null, 1, 1, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, 1, null, null, null],
            [0, null, 0, null, 0, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_39",
        name: "P8_2_39",
        description: "8x8 Easy #39",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 22:58:49",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0031960010528564
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, 0, 1],
            [null, null, null, 0, null, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, 0, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_40",
        name: "P8_2_40",
        description: "8x8 Easy #40",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 22:58:50",
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
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019681453704834
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 1],
            [0, 0, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_41",
        name: "P8_2_41",
        description: "8x8 Easy #41",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 22:58:52",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016729831695557
        },
        grid: [
            [null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, 1, null, null],
            [0, null, null, null, null, 1, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, 1, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_42",
        name: "P8_2_42",
        description: "8x8 Easy #42",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 22:58:53",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0021789073944092
        },
        grid: [
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, 1, null],
            [null, 1, null, 0, 0, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_43",
        name: "P8_2_43",
        description: "8x8 Easy #43",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 22:58:55",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010528564453125
        },
        grid: [
            [1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [0, null, 0, null, 0, null, null, null],
            [0, null, null, null, null, null, 1, null],
            [null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_44",
        name: "P8_2_44",
        description: "8x8 Easy #44",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 22:58:56",
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
            time_taken: 0.00077486038208008
        },
        grid: [
            [0, null, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [0, null, 1, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_45",
        name: "P8_2_45",
        description: "8x8 Easy #45",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 22:58:58",
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
            time_taken: 0.00077104568481445
        },
        grid: [
            [null, 1, 1, null, null, 1, 1, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, 0, null, 1, null],
            [0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_46",
        name: "P8_2_46",
        description: "8x8 Easy #46",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 22:58:59",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018100738525391
        },
        grid: [
            [1, null, null, 0, null, null, null, null],
            [null, 0, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_47",
        name: "P8_2_47",
        description: "8x8 Easy #47",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 22:59:01",
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
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0013518333435059
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, 1, null, 1, null, 0, 1, null],
            [null, null, null, null, null, 0, null, 0],
            [1, null, null, 1, null, null, null, null],
            [1, null, 0, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, 0, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_48",
        name: "P8_2_48",
        description: "8x8 Easy #48",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 22:59:02",
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
            initial_empty: 50,
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
            time_taken: 0.0018908977508545
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, null, 0, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_49",
        name: "P8_2_49",
        description: "8x8 Easy #49",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 22:59:04",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019488334655762
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null],
            [0, null, 1, null, null, null, null, null],
            [null, null, 1, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_50",
        name: "P8_2_50",
        description: "8x8 Easy #50",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 22:59:05",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0007939338684082
        },
        grid: [
            [null, null, null, 0, 0, null, 0, null],
            [null, 1, null, null, null, 0, 0, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 1, null, 1],
            [null, 1, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 1, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_51",
        name: "P8_2_51",
        description: "8x8 Easy #51",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 22:59:06",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0017750263214111
        },
        grid: [
            [0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [1, null, null, null, null, null, null, 1],
            [null, 1, null, 1, 0, null, null, null],
            [1, 1, null, null, 1, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_52",
        name: "P8_2_52",
        description: "8x8 Easy #52",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 22:59:08",
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014901161193848
        },
        grid: [
            [null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [1, 1, null, 1, null, null, null, null],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, 1, null, null, null, null, 1],
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_53",
        name: "P8_2_53",
        description: "8x8 Easy #53",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 22:59:09",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0055990219116211
        },
        grid: [
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, null, 1, 1, null, null],
            [1, null, 1, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, null, 0, 1, null, null],
            [null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_54",
        name: "P8_2_54",
        description: "8x8 Easy #54",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 22:59:11",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0024189949035645
        },
        grid: [
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, 1, null, null, 0, null],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_55",
        name: "P8_2_55",
        description: "8x8 Easy #55",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 22:59:12",
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
            initial_empty: 47,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0035319328308105
        },
        grid: [
            [0, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 1, null, null],
            [null, null, 0, 1, null, null, null, null],
            [1, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, null, 0, null, null, null],
            [null, null, 0, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_56",
        name: "P8_2_56",
        description: "8x8 Easy #56",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 22:59:14",
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
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012500286102295
        },
        grid: [
            [1, null, 1, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 0, 0, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_57",
        name: "P8_2_57",
        description: "8x8 Easy #57",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 22:59:15",
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
            time_taken: 0.0013730525970459
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 0, null],
            [null, null, 0, null, 1, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, 0, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_58",
        name: "P8_2_58",
        description: "8x8 Easy #58",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 22:59:17",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011789798736572
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, 1, null],
            [0, null, null, null, 0, null, null, null],
            [null, 0, null, null, 0, null, 1, null],
            [0, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_59",
        name: "P8_2_59",
        description: "8x8 Easy #59",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 22:59:18",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0036559104919434
        },
        grid: [
            [null, null, 1, null, null, 0, 0, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, 0, null, 1, null, null],
            [1, null, null, null, null, null, 1, 0],
            [null, null, 0, 1, null, null, 1, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_60",
        name: "P8_2_60",
        description: "8x8 Easy #60",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 22:59:20",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00073003768920898
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1],
            [null, 0, null, 0, null, 1, 1, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, null],
            [1, null, 1, null, null, null, null, null],
            [0, null, null, null, 0, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_61",
        name: "P8_2_61",
        description: "8x8 Easy #61",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 22:59:21",
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
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015900135040283
        },
        grid: [
            [0, null, null, 1, null, null, null, 0],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, 0, 0],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_62",
        name: "P8_2_62",
        description: "8x8 Easy #62",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 22:59:23",
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
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001676082611084
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, 0, null, null],
            [1, 0, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, 1, null, null, 0, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_63",
        name: "P8_2_63",
        description: "8x8 Easy #63",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 22:59:24",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0022871494293213
        },
        grid: [
            [null, null, 1, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, 0, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_64",
        name: "P8_2_64",
        description: "8x8 Easy #64",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 22:59:26",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018060207366943
        },
        grid: [
            [1, 0, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, 1],
            [null, 1, null, 1, 0, null, null, null],
            [null, null, null, 1, 0, null, null, null],
            [null, 1, 1, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_65",
        name: "P8_2_65",
        description: "8x8 Easy #65",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 22:59:28",
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
            time_taken: 0.0023980140686035
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 0, 0, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, null, null],
            [0, null, 0, null, null, 0, null, null],
            [null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_66",
        name: "P8_2_66",
        description: "8x8 Easy #66",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 22:59:30",
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
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0033919811248779
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, 0, null, null, null],
            [0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, 0],
            [1, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_67",
        name: "P8_2_67",
        description: "8x8 Easy #67",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 22:59:31",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019240379333496
        },
        grid: [
            [null, 1, null, null, 0, null, null, null],
            [null, null, 1, 1, null, 0, null, null],
            [0, 1, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 0],
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_68",
        name: "P8_2_68",
        description: "8x8 Easy #68",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 22:59:33",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0032508373260498
        },
        grid: [
            [null, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [1, null, null, 1, null, 1, 1, null],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_69",
        name: "P8_2_69",
        description: "8x8 Easy #69",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 22:59:34",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.002249002456665
        },
        grid: [
            [null, 1, null, null, null, null, 0, null],
            [1, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, null, 1, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [0, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_70",
        name: "P8_2_70",
        description: "8x8 Easy #70",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 22:59:35",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010321140289307
        },
        grid: [
            [null, null, 1, null, 0, 0, null, 1],
            [1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, 1],
            [null, null, 0, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_71",
        name: "P8_2_71",
        description: "8x8 Easy #71",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 22:59:37",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0016930103302002
        },
        grid: [
            [0, 0, null, null, 0, 1, null, 1],
            [0, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null],
            [null, 1, 1, null, null, 0, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_72",
        name: "P8_2_72",
        description: "8x8 Easy #72",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 22:59:38",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015168190002441
        },
        grid: [
            [0, null, null, 0, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, 0, null],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, 0],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_73",
        name: "P8_2_73",
        description: "8x8 Easy #73",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 22:59:40",
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
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016369819641113
        },
        grid: [
            [0, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [1, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, 0, null, null],
            [1, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_74",
        name: "P8_2_74",
        description: "8x8 Easy #74",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 22:59:41",
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
            initial_empty: 46,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0040700435638428
        },
        grid: [
            [1, 1, null, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, null, null, 0, null, null, null],
            [null, null, 1, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, 1, null, 1],
            [null, 0, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_75",
        name: "P8_2_75",
        description: "8x8 Easy #75",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 22:59:43",
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
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0025229454040527
        },
        grid: [
            [1, null, null, 0, null, 0, null, 0],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, 0, 1, null, null, 1, null, null],
            [0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_76",
        name: "P8_2_76",
        description: "8x8 Easy #76",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 22:59:44",
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
            initial_empty: 50,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0028839111328125
        },
        grid: [
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, 0, null, 0, null, null],
            [null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_77",
        name: "P8_2_77",
        description: "8x8 Easy #77",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 22:59:46",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016129016876221
        },
        grid: [
            [null, 1, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 1],
            [0, null, null, 0, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, 0],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_78",
        name: "P8_2_78",
        description: "8x8 Easy #78",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 22:59:47",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019440650939941
        },
        grid: [
            [0, 1, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, 0, null, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_79",
        name: "P8_2_79",
        description: "8x8 Easy #79",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 22:59:49",
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
            initial_empty: 50,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.002424955368042
        },
        grid: [
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_80",
        name: "P8_2_80",
        description: "8x8 Easy #80",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 22:59:50",
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
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0018751621246338
        },
        grid: [
            [null, 0, null, null, null, null, null, 1],
            [1, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, null, 1, null, 1, null],
            [null, null, null, 0, 1, null, null, null],
            [null, null, 1, 1, null, 1, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, 0, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_81",
        name: "P8_2_81",
        description: "8x8 Easy #81",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 22:59:52",
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
            initial_empty: 45,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0020630359649658
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [0, null, 0, null, 0, null, 1, 1],
            [0, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 0, null, 0, null, null, 1],
            [0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_82",
        name: "P8_2_82",
        description: "8x8 Easy #82",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 22:59:53",
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
            initial_empty: 52,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0012400150299072
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 0, 0, null, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_83",
        name: "P8_2_83",
        description: "8x8 Easy #83",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 22:59:54",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0017521381378174
        },
        grid: [
            [1, 1, null, 0, null, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 1, 0],
            [0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, 0, 1],
            [null, 1, 1, null, null, 1, null, null],
            [1, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_84",
        name: "P8_2_84",
        description: "8x8 Easy #84",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 22:59:56",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001533031463623
        },
        grid: [
            [null, 1, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, 1, null, null, 0, 0, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_85",
        name: "P8_2_85",
        description: "8x8 Easy #85",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 22:59:58",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001244068145752
        },
        grid: [
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, 1, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, 0],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_86",
        name: "P8_2_86",
        description: "8x8 Easy #86",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 22:59:59",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001741886138916
        },
        grid: [
            [null, 1, null, null, null, null, 0, null],
            [null, 1, 0, null, null, null, null, null],
            [null, null, 0, null, 1, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, 1, 1, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_87",
        name: "P8_2_87",
        description: "8x8 Easy #87",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 23:00:00",
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00097107887268066
        },
        grid: [
            [null, 0, null, 0, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, 0, 1],
            [0, null, null, 1, 0, null, 0, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_88",
        name: "P8_2_88",
        description: "8x8 Easy #88",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 23:00:02",
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
            initial_empty: 50,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0024452209472656
        },
        grid: [
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_89",
        name: "P8_2_89",
        description: "8x8 Easy #89",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 23:00:04",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016219615936279
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, 0, null],
            [null, 1, null, null, 1, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 0],
            [1, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_90",
        name: "P8_2_90",
        description: "8x8 Easy #90",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 23:00:05",
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
            initial_empty: 46,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.002392053604126
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 1, null, 1],
            [null, 1, null, null, null, null, 0, null],
            [1, null, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_91",
        name: "P8_2_91",
        description: "8x8 Easy #91",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 23:00:07",
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
            time_taken: 0.0012421607971191
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, 0],
            [0, 0, null, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, 0],
            [1, null, null, 1, null, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_92",
        name: "P8_2_92",
        description: "8x8 Easy #92",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 23:00:08",
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
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0032408237457275
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 0],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, 0, null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_93",
        name: "P8_2_93",
        description: "8x8 Easy #93",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 23:00:10",
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
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0031628608703613
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [1, null, null, null, null, 0, 0, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 0, null, null, null, null, null, 1],
            [null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_94",
        name: "P8_2_94",
        description: "8x8 Easy #94",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 23:00:11",
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
            initial_empty: 48,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0021240711212158
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 0],
            [null, 1, null, 0, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_95",
        name: "P8_2_95",
        description: "8x8 Easy #95",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 23:00:13",
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
            initial_empty: 50,
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
            time_taken: 0.0020060539245605
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, 1, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_96",
        name: "P8_2_96",
        description: "8x8 Easy #96",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 23:00:14",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0031449794769287
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, 1],
            [1, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, 1, 1, null],
            [null, null, null, 1, null, 0, null, 1],
            [1, null, 1, null, null, null, null, 1],
            [null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_97",
        name: "P8_2_97",
        description: "8x8 Easy #97",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 23:00:16",
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
            initial_empty: 49,
            logic_iterations: 4,
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
                tryFillCells: 3
            },
            time_taken: 0.0023260116577148
        },
        grid: [
            [null, 0, 0, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null],
            [0, null, null, null, null, null, 0, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_98",
        name: "P8_2_98",
        description: "8x8 Easy #98",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 23:00:17",
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
            time_taken: 0.0011169910430908
        },
        grid: [
            [null, 0, 1, null, null, 1, 0, null],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 0, null, 0, null, null, null, null],
            [0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_99",
        name: "P8_2_99",
        description: "8x8 Easy #99",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 23:00:19",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015430450439453
        },
        grid: [
            [null, null, null, null, 1, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [0, 0, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_100",
        name: "P8_2_100",
        description: "8x8 Easy #100",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 23:00:20",
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
            initial_empty: 49,
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
            time_taken: 0.002004861831665
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [0, 0, null, null, null, 1, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_101",
        name: "P8_2_101",
        description: "8x8 Easy #101",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 23:00:22",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023398399353027
        },
        grid: [
            [null, null, 1, null, 0, null, null, null],
            [0, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_102",
        name: "P8_2_102",
        description: "8x8 Easy #102",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 23:00:23",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017390251159668
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 1, null, 1, 1, null, null],
            [0, null, 1, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_103",
        name: "P8_2_103",
        description: "8x8 Easy #103",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 23:00:25",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00152587890625
        },
        grid: [
            [0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, 0],
            [null, null, 0, null, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_104",
        name: "P8_2_104",
        description: "8x8 Easy #104",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 23:00:26",
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
            initial_empty: 48,
            logic_iterations: 6,
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
            time_taken: 0.0022249221801758
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null],
            [null, 0, null, null, 1, null, 1, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [null, 1, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_105",
        name: "P8_2_105",
        description: "8x8 Easy #105",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 23:00:28",
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
            initial_empty: 48,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0037498474121094
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, 1, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 1, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_106",
        name: "P8_2_106",
        description: "8x8 Easy #106",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 23:00:29",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012619495391846
        },
        grid: [
            [null, 1, null, null, 0, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0],
            [null, 0, 0, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_107",
        name: "P8_2_107",
        description: "8x8 Easy #107",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 23:00:31",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00097990036010742
        },
        grid: [
            [null, 0, 0, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, 1, null, 1, 0, null, null, 0],
            [0, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_108",
        name: "P8_2_108",
        description: "8x8 Easy #108",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 23:00:32",
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
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0018689632415771
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, 1, null, 0, 0, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_109",
        name: "P8_2_109",
        description: "8x8 Easy #109",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 23:00:33",
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
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0024709701538086
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [0, null, 0, null, 0, null, null, null],
            [0, null, null, 1, null, 0, null, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, 1, null, 1, null, null, 1],
            [0, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_110",
        name: "P8_2_110",
        description: "8x8 Easy #110",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 23:00:35",
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
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001701831817627
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_111",
        name: "P8_2_111",
        description: "8x8 Easy #111",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 23:00:36",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0020060539245605
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, 1, null, 0, 1, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [null, null, null, 0, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_112",
        name: "P8_2_112",
        description: "8x8 Easy #112",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 23:00:38",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0020020008087158
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, 1, null],
            [1, null, null, null, 0, null, null, 1],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, 0, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_113",
        name: "P8_2_113",
        description: "8x8 Easy #113",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 23:00:39",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014770030975342
        },
        grid: [
            [1, 1, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, null, 0, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, 0, null, 0],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_114",
        name: "P8_2_114",
        description: "8x8 Easy #114",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 23:00:41",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0035390853881836
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 1, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, 1],
            [1, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_115",
        name: "P8_2_115",
        description: "8x8 Easy #115",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 23:00:42",
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
                completeRowsColumns: 1,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.001554012298584
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [1, 1, null, null, null, null, null, 0],
            [null, null, 0, null, 0, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, 1, null],
            [0, null, 0, null, null, null, 1, 0],
            [null, null, null, null, 0, null, null, null],
            [0, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_116",
        name: "P8_2_116",
        description: "8x8 Easy #116",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 23:00:44",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0032179355621338
        },
        grid: [
            [0, 0, null, 1, null, 1, null, null],
            [null, 0, null, 0, 1, null, 0, null],
            [0, null, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, null],
            [1, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_117",
        name: "P8_2_117",
        description: "8x8 Easy #117",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 23:00:45",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0024569034576416
        },
        grid: [
            [null, null, 1, 1, null, 1, null, 1],
            [0, null, null, 0, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_118",
        name: "P8_2_118",
        description: "8x8 Easy #118",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 23:00:46",
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
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0034260749816895
        },
        grid: [
            [null, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, 1, null, 1, null, 0],
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 1, 1],
            [null, 1, null, null, null, null, null, 0],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_119",
        name: "P8_2_119",
        description: "8x8 Easy #119",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 23:00:48",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017650127410889
        },
        grid: [
            [1, 0, null, 0, 1, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 0, null, null, 0],
            [null, 0, null, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_120",
        name: "P8_2_120",
        description: "8x8 Easy #120",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 23:00:49",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0033061504364014
        },
        grid: [
            [null, null, 1, null, null, null, 0, 0],
            [null, null, 1, 0, null, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 1, null],
            [0, null, null, null, 1, 0, null, null],
            [0, null, null, null, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_121",
        name: "P8_2_121",
        description: "8x8 Easy #121",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 23:00:51",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00093698501586914
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [1, 1, null, 1, null, null, 1, null],
            [1, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, 0, null, 0, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_122",
        name: "P8_2_122",
        description: "8x8 Easy #122",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 23:00:52",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011501312255859
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, 1, null, 1, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_123",
        name: "P8_2_123",
        description: "8x8 Easy #123",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 23:00:54",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0028290748596191
        },
        grid: [
            [null, null, null, 0, null, null, 1, null],
            [null, 0, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, 1, null],
            [null, null, null, 0, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [0, null, null, null, 0, null, null, null],
            [null, null, 0, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_124",
        name: "P8_2_124",
        description: "8x8 Easy #124",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 23:00:55",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0023150444030762
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_125",
        name: "P8_2_125",
        description: "8x8 Easy #125",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 23:00:57",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016419887542725
        },
        grid: [
            [null, null, null, null, 0, null, null, 1],
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [null, 0, null, 1, null, null, null, null],
            [null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_126",
        name: "P8_2_126",
        description: "8x8 Easy #126",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 23:00:58",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015890598297119
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, 1, null, 1, null, 1, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_127",
        name: "P8_2_127",
        description: "8x8 Easy #127",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 23:01:00",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.2,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0036239624023438
        },
        grid: [
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, 0, null, null],
            [0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_128",
        name: "P8_2_128",
        description: "8x8 Easy #128",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 23:01:01",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010948181152344
        },
        grid: [
            [0, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, 1, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [0, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_129",
        name: "P8_2_129",
        description: "8x8 Easy #129",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 23:01:03",
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
            initial_empty: 49,
            logic_iterations: 4,
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
                tryFillCells: 3
            },
            time_taken: 0.0020630359649658
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [1, null, null, 1, null, null, 1, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [0, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_130",
        name: "P8_2_130",
        description: "8x8 Easy #130",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 23:01:04",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018389225006104
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, 0],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, 0, 0],
            [1, 1, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_131",
        name: "P8_2_131",
        description: "8x8 Easy #131",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 23:01:06",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018851757049561
        },
        grid: [
            [null, 1, null, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, 0, 0, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, 0, null, 1, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_132",
        name: "P8_2_132",
        description: "8x8 Easy #132",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 23:01:07",
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
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.002094030380249
        },
        grid: [
            [1, null, 1, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, 1, 1, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_133",
        name: "P8_2_133",
        description: "8x8 Easy #133",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 23:01:09",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017249584197998
        },
        grid: [
            [null, 0, null, null, null, null, 1, null],
            [null, 0, null, 0, null, null, null, null],
            [1, null, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0],
            [1, null, 1, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_134",
        name: "P8_2_134",
        description: "8x8 Easy #134",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 23:01:10",
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
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012080669403076
        },
        grid: [
            [null, 1, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, 1, null, null, null],
            [null, 0, 0, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, 0, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_135",
        name: "P8_2_135",
        description: "8x8 Easy #135",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 23:01:12",
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
            time_taken: 0.0008540153503418
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, 1, null, 1, null],
            [0, 1, null, null, null, null, 1, null],
            [null, null, null, 0, 1, null, null, 1],
            [null, 1, 1, null, null, 0, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_136",
        name: "P8_2_136",
        description: "8x8 Easy #136",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 23:01:13",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0019798278808594
        },
        grid: [
            [1, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, 1, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_137",
        name: "P8_2_137",
        description: "8x8 Easy #137",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 23:01:15",
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
            initial_empty: 50,
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
            time_taken: 0.0017189979553223
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, 0, 0, null, null, 0],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_138",
        name: "P8_2_138",
        description: "8x8 Easy #138",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 23:01:16",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0014879703521729
        },
        grid: [
            [0, null, null, 0, 0, null, 0, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, 1, null, 1, null, null, null],
            [null, 0, 1, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_139",
        name: "P8_2_139",
        description: "8x8 Easy #139",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 23:01:18",
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
            initial_empty: 45,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0021851062774658
        },
        grid: [
            [null, null, null, 1, null, 0, 0, null],
            [null, null, 1, null, null, null, 0, 0],
            [null, 0, null, null, null, null, null, null],
            [1, null, 1, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_140",
        name: "P8_2_140",
        description: "8x8 Easy #140",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 23:01:19",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.002032995223999
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null],
            [0, null, null, null, null, 0, null, 0],
            [0, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_141",
        name: "P8_2_141",
        description: "8x8 Easy #141",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 23:01:21",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011157989501953
        },
        grid: [
            [null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, null],
            [0, null, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_142",
        name: "P8_2_142",
        description: "8x8 Easy #142",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 23:01:22",
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
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0024890899658203
        },
        grid: [
            [null, 1, null, null, null, null, 0, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, 0, null, null, 0, null],
            [1, null, null, null, null, 0, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_143",
        name: "P8_2_143",
        description: "8x8 Easy #143",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 23:01:24",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0013689994812012
        },
        grid: [
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null],
            [1, null, 0, 0, null, 1, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null],
            [null, 0, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_144",
        name: "P8_2_144",
        description: "8x8 Easy #144",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 23:01:25",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00098013877868652
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 1, null, 0],
            [0, null, null, null, 0, null, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, 1],
            [null, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_145",
        name: "P8_2_145",
        description: "8x8 Easy #145",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 23:01:27",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023860931396484
        },
        grid: [
            [null, 0, null, 1, null, null, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, null, null, 1, 1, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_146",
        name: "P8_2_146",
        description: "8x8 Easy #146",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 23:01:28",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0033638477325439
        },
        grid: [
            [1, null, 1, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, 0],
            [null, null, null, null, 1, null, 1, null],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, 0, null, 1, null, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_147",
        name: "P8_2_147",
        description: "8x8 Easy #147",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 23:01:29",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017590522766113
        },
        grid: [
            [null, null, 1, null, null, 1, null, 1],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [1, null, null, null, 0, null, 0, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [0, null, 0, null, 0, null, null, 0],
            [null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_148",
        name: "P8_2_148",
        description: "8x8 Easy #148",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 23:01:31",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0022039413452148
        },
        grid: [
            [null, 1, null, 1, 1, null, 1, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 1, null],
            [null, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, 0, null, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_149",
        name: "P8_2_149",
        description: "8x8 Easy #149",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 23:01:32",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00098896026611328
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, null, 1, null, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, 1, null],
            [null, 1, null, null, null, null, 1, null],
            [null, 1, 0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_150",
        name: "P8_2_150",
        description: "8x8 Easy #150",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 23:01:34",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00078201293945312
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, null, 0],
            [1, null, null, null, null, 0, 1, null],
            [null, 1, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_151",
        name: "P8_2_151",
        description: "8x8 Easy #151",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 23:01:35",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0024881362915039
        },
        grid: [
            [null, 0, null, null, null, null, 1, null],
            [null, 0, null, 1, null, 1, null, null],
            [null, null, null, 1, 1, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, 1, null, 0, null],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_152",
        name: "P8_2_152",
        description: "8x8 Easy #152",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 23:01:37",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0019848346710205
        },
        grid: [
            [0, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 0, null, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_153",
        name: "P8_2_153",
        description: "8x8 Easy #153",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 23:01:38",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0011539459228516
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, 0],
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, 1, null, 0, null, null, null],
            [null, 0, null, null, null, 1, null, 1],
            [1, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_154",
        name: "P8_2_154",
        description: "8x8 Easy #154",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 23:01:40",
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
            time_taken: 0.0012850761413574
        },
        grid: [
            [0, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, null, 1, null, null, null],
            [null, 1, null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_155",
        name: "P8_2_155",
        description: "8x8 Easy #155",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 23:01:41",
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
            time_taken: 0.0008690357208252
        },
        grid: [
            [0, null, null, null, 0, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, 1, 0, null, null, 1],
            [0, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_156",
        name: "P8_2_156",
        description: "8x8 Easy #156",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 23:01:43",
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
            initial_empty: 45,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016849040985107
        },
        grid: [
            [1, 1, null, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, 0],
            [1, null, null, null, 0, 1, null, null],
            [0, null, 1, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_157",
        name: "P8_2_157",
        description: "8x8 Easy #157",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 23:01:44",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0027151107788086
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, 1, null, null, 0],
            [1, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [1, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_158",
        name: "P8_2_158",
        description: "8x8 Easy #158",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 23:01:45",
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
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019068717956543
        },
        grid: [
            [0, null, null, null, 0, null, null, null],
            [0, 0, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [1, null, 1, null, 0, null, 0, null],
            [1, 0, null, null, null, null, null, null],
            [null, null, 0, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_159",
        name: "P8_2_159",
        description: "8x8 Easy #159",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 23:01:47",
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
            initial_empty: 47,
            logic_iterations: 5,
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
                tryFillCells: 3
            },
            time_taken: 0.0018689632415771
        },
        grid: [
            [null, null, null, null, 0, null, null, 0],
            [null, 0, null, 1, 1, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null],
            [0, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0],
            [0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_160",
        name: "P8_2_160",
        description: "8x8 Easy #160",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 23:01:48",
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
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016739368438721
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, 0, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_161",
        name: "P8_2_161",
        description: "8x8 Easy #161",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 23:01:50",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001906156539917
        },
        grid: [
            [null, null, 1, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, 1, null, null, 1, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_162",
        name: "P8_2_162",
        description: "8x8 Easy #162",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 23:01:51",
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010569095611572
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, 1, null],
            [null, null, 0, null, 0, null, 1, null],
            [null, 0, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, 0],
            [null, 1, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_163",
        name: "P8_2_163",
        description: "8x8 Easy #163",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 23:01:53",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0013182163238525
        },
        grid: [
            [0, null, 0, null, null, null, null, 1],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 0, null, null, 1, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_164",
        name: "P8_2_164",
        description: "8x8 Easy #164",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 23:01:54",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0010879039764404
        },
        grid: [
            [null, 0, null, null, 0, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [0, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_165",
        name: "P8_2_165",
        description: "8x8 Easy #165",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 23:01:56",
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
                completeRowsColumns: 1,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0035338401794434
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, 1, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_166",
        name: "P8_2_166",
        description: "8x8 Easy #166",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 23:01:57",
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
            time_taken: 0.0027258396148682
        },
        grid: [
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, 0],
            [null, null, null, 1, null, null, 0, null],
            [0, null, null, null, null, null, null, 0],
            [null, 0, null, 0, null, null, null, null],
            [1, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_167",
        name: "P8_2_167",
        description: "8x8 Easy #167",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 23:01:59",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00087714195251465
        },
        grid: [
            [null, null, null, 1, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_168",
        name: "P8_2_168",
        description: "8x8 Easy #168",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 23:02:00",
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
            time_taken: 0.0014300346374512
        },
        grid: [
            [0, null, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 1, null],
            [null, 0, null, null, 1, null, 1, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, 0, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_169",
        name: "P8_2_169",
        description: "8x8 Easy #169",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 23:02:02",
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
            time_taken: 0.00097298622131348
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, 1, 1, null, null, 1],
            [0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 0],
            [null, null, null, 0, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_170",
        name: "P8_2_170",
        description: "8x8 Easy #170",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 23:02:03",
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
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0024659633636475
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, 0, null],
            [0, null, null, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_171",
        name: "P8_2_171",
        description: "8x8 Easy #171",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 23:02:05",
        difficulty: "Easy",
        difficulty_score: 13,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.8,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0034420490264893
        },
        grid: [
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, 1, null, null],
            [0, null, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_172",
        name: "P8_2_172",
        description: "8x8 Easy #172",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 23:02:06",
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
            initial_empty: 49,
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
            time_taken: 0.0019731521606445
        },
        grid: [
            [0, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_173",
        name: "P8_2_173",
        description: "8x8 Easy #173",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 23:02:08",
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
            time_taken: 0.0012741088867188
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [1, null, 0, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, 1, null],
            [null, 1, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_174",
        name: "P8_2_174",
        description: "8x8 Easy #174",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 23:02:09",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013999938964844
        },
        grid: [
            [1, null, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, null, 1, null, null, 0],
            [1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_175",
        name: "P8_2_175",
        description: "8x8 Easy #175",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 23:02:11",
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
            time_taken: 0.0018200874328613
        },
        grid: [
            [null, 1, null, null, 0, null, null, null],
            [null, 1, 1, null, null, 0, null, null],
            [0, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 1],
            [null, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_176",
        name: "P8_2_176",
        description: "8x8 Easy #176",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 23:02:12",
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
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0020449161529541
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [1, null, 1, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, 1, null, null, 0, null, null],
            [0, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_2_177",
        name: "P8_2_177",
        description: "8x8 Easy #177",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 23:02:14",
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
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.002316951751709
        },
        grid: [
            [0, null, 1, null, null, 0, null, 0],
            [null, 1, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, 1, null, null, 0],
            [null, null, 0, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_178",
        name: "P8_2_178",
        description: "8x8 Easy #178",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 23:02:15",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0018680095672607
        },
        grid: [
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 1, null, 0, null, 1, 1],
            [null, null, null, null, null, null, null, 0],
            [null, 1, 0, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_179",
        name: "P8_2_179",
        description: "8x8 Easy #179",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 23:02:17",
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
            initial_empty: 50,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0023038387298584
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, 0, 0, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, 1, 1],
            [null, 1, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_180",
        name: "P8_2_180",
        description: "8x8 Easy #180",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 23:02:18",
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
            initial_empty: 47,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0027170181274414
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 1, null, null],
            [1, 0, null, 0, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [0, null, 0, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_181",
        name: "P8_2_181",
        description: "8x8 Easy #181",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 23:02:20",
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
            time_taken: 0.0011439323425293
        },
        grid: [
            [null, 1, null, null, null, null, null, 1],
            [0, null, 0, null, 1, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_182",
        name: "P8_2_182",
        description: "8x8 Easy #182",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 23:02:21",
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
            time_taken: 0.00085902214050293
        },
        grid: [
            [1, null, 0, null, 0, 1, null, null],
            [0, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [1, null, null, 0, 0, null, null, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_183",
        name: "P8_2_183",
        description: "8x8 Easy #183",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 23:02:23",
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
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0048298835754395
        },
        grid: [
            [null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, 0],
            [null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_184",
        name: "P8_2_184",
        description: "8x8 Easy #184",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 23:02:24",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0015919208526611
        },
        grid: [
            [1, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, 0, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, 0, 0],
            [null, null, 1, null, null, null, null, 1],
            [null, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_185",
        name: "P8_2_185",
        description: "8x8 Easy #185",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 23:02:26",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0021958351135254
        },
        grid: [
            [0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, 1, 1, null, null, null],
            [null, 0, null, 0, null, 0, 0, null],
            [0, null, null, null, null, null, null, 0],
            [0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_186",
        name: "P8_2_186",
        description: "8x8 Easy #186",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 23:02:27",
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
            initial_empty: 49,
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
                tryFillCells: 2
            },
            time_taken: 0.0014479160308838
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 1, null, 1],
            [0, null, 1, null, null, null, 0, null],
            [null, 0, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_187",
        name: "P8_2_187",
        description: "8x8 Easy #187",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 23:02:29",
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
            initial_empty: 48,
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
            time_taken: 0.0047299861907959
        },
        grid: [
            [null, null, 1, 1, null, null, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, null, 0, null, null, 1, 1],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_188",
        name: "P8_2_188",
        description: "8x8 Easy #188",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 23:02:30",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0014700889587402
        },
        grid: [
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [0, null, null, 1, null, 1, null, null],
            [null, 0, 0, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 1, null],
            [null, null, 1, null, 0, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_189",
        name: "P8_2_189",
        description: "8x8 Easy #189",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 23:02:32",
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
            initial_empty: 47,
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
            time_taken: 0.0024230480194092
        },
        grid: [
            [null, null, null, null, null, null, 0, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, 1, null, 0, null, 1],
            [1, 1, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_190",
        name: "P8_2_190",
        description: "8x8 Easy #190",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 23:02:33",
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
            initial_empty: 47,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0031590461730957
        },
        grid: [
            [null, 1, 1, null, null, null, 1, null],
            [0, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, null, 1, 0, null, 0],
            [null, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_191",
        name: "P8_2_191",
        description: "8x8 Easy #191",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 23:02:34",
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
            time_taken: 0.00090980529785156
        },
        grid: [
            [null, 0, 0, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 1, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [1, null, 1, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_192",
        name: "P8_2_192",
        description: "8x8 Easy #192",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 23:02:36",
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
            time_taken: 0.0017251968383789
        },
        grid: [
            [1, null, null, 1, null, null, 1, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [1, 1, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_193",
        name: "P8_2_193",
        description: "8x8 Easy #193",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 23:02:37",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0026841163635254
        },
        grid: [
            [null, 0, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 0, null, 1, 0, null, 0, null],
            [0, null, null, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, null],
            [null, 0, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_194",
        name: "P8_2_194",
        description: "8x8 Easy #194",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 23:02:39",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011289119720459
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, 1, 1, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_195",
        name: "P8_2_195",
        description: "8x8 Easy #195",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 23:02:40",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0019071102142334
        },
        grid: [
            [0, null, null, 1, 1, null, null, 1],
            [null, null, 0, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [1, null, null, null, 0, null, null, null],
            [1, null, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_2_196",
        name: "P8_2_196",
        description: "8x8 Easy #196",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 23:02:42",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016701221466064
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, 1, null, 0, null, null, 1, null],
            [null, null, null, 1, 1, null, 1, null],
            [null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_2_197",
        name: "P8_2_197",
        description: "8x8 Easy #197",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 23:02:43",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023760795593262
        },
        grid: [
            [null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, 1, null, null],
            [1, 1, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, 0, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_2_198",
        name: "P8_2_198",
        description: "8x8 Easy #198",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 23:02:45",
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
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0021159648895264
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [0, null, null, 1, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [0, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_2_199",
        name: "P8_2_199",
        description: "8x8 Easy #199",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 23:02:46",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00095891952514648
        },
        grid: [
            [1, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, 1, null, 1, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_2_200",
        name: "P8_2_200",
        description: "8x8 Easy #200",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=2&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 23:02:48",
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
            initial_empty: 49,
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
            time_taken: 0.0011868476867676
        },
        grid: [
            [0, null, null, null, null, null, null, 1],
            [0, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [1, null, null, 1, null, null, 1, 1],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL8x8_d2_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL8x8_d2_PUZZLES = LEVEL8x8_d2_PUZZLES;
}
