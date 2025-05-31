/**
 * level 8x8 d3 - 8x8 hard
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

const LEVEL8x8_d3_PUZZLES = [
    {
        id: "P8_3_1",
        name: "P8_3_1",
        description: "8x8 Hard #1",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 23:09:02",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 26.9,
            logic_iterations_score: 1.2,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 32.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 2733,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.3166389465332
        },
        grid: [
            [0, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [0, null, null, null, 1, null, 1, null],
            [null, 1, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_2",
        name: "P8_3_2",
        description: "8x8 Hard #2",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 23:09:04",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 366,
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
            time_taken: 0.042959213256836
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, 0],
            [0, null, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, 1, null, null],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_3",
        name: "P8_3_3",
        description: "8x8 Hard #3",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 23:09:05",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 23.5,
            logic_iterations_score: 1.2,
            backtracking_score: 25.7,
            size_score: 10,
            percent_filled_by_logic: 41.2
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 185,
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
            time_taken: 0.037068128585815
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, 0, null, null, null, null, null],
            [0, 1, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_4",
        name: "P8_3_4",
        description: "8x8 Medium #4",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 23:09:07",
        difficulty: "Medium",
        difficulty_score: 41,
        difficulty_factors: {
            logic_fill_score: 7.5,
            logic_iterations_score: 1.6,
            backtracking_score: 21.9,
            size_score: 10,
            percent_filled_by_logic: 81.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0024189949035645
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [1, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 0],
            [null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_5",
        name: "P8_3_5",
        description: "8x8 Hard #5",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 23:09:08",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 24.2,
            logic_iterations_score: 0.8,
            backtracking_score: 26.6,
            size_score: 10,
            percent_filled_by_logic: 39.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 416,
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
            time_taken: 0.047882080078125
        },
        grid: [
            [null, null, null, null, 0, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [1, 0, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, 0, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_6",
        name: "P8_3_6",
        description: "8x8 Hard #6",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 23:09:10",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 33.6,
            logic_iterations_score: 0.8,
            backtracking_score: 26.7,
            size_score: 10,
            percent_filled_by_logic: 16
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 459,
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
            time_taken: 0.05653190612793
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_7",
        name: "P8_3_7",
        description: "8x8 Medium #7",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 23:09:11",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 12.2,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 69.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017299652099609
        },
        grid: [
            [null, null, null, 0, null, 1, 1, null],
            [1, null, null, 0, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, 0, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, 1, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_8",
        name: "P8_3_8",
        description: "8x8 Easy #8",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 23:09:13",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 4.9,
            logic_iterations_score: 2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 87.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 5,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0024020671844482
        },
        grid: [
            [null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, 1, null],
            [null, 0, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_9",
        name: "P8_3_9",
        description: "8x8 Hard #9",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 23:09:14",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 21.2,
            logic_iterations_score: 1.2,
            backtracking_score: 25,
            size_score: 10,
            percent_filled_by_logic: 46.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 101,
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
            time_taken: 0.014012098312378
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, 0, null, 0],
            [null, null, 1, null, 1, null, null, null],
            [0, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_10",
        name: "P8_3_10",
        description: "8x8 Hard #10",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 23:09:16",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 33.3,
            logic_iterations_score: 0.8,
            backtracking_score: 27.3,
            size_score: 10,
            percent_filled_by_logic: 16.7
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 859,
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
            time_taken: 0.10190987586975
        },
        grid: [
            [null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, 1, 0],
            [null, null, null, 1, null, null, null, null],
            [1, 0, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_11",
        name: "P8_3_11",
        description: "8x8 Hard #11",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 23:09:17",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 22.1,
            logic_iterations_score: 1.2,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 44.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 72,
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
            time_taken: 0.012147903442383
        },
        grid: [
            [null, 1, null, 1, null, 1, 1, null],
            [null, null, null, null, 0, null, 1, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, null, null, null],
            [0, null, null, 0, null, 0, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_12",
        name: "P8_3_12",
        description: "8x8 Easy #12",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 23:09:19",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 5,
            logic_iterations_score: 2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 87.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 5,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0029158592224121
        },
        grid: [
            [null, null, null, null, 1, null, null, 0],
            [null, 1, null, 0, null, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [null, 0, null, null, 0, null, 0, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_13",
        name: "P8_3_13",
        description: "8x8 Medium #13",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 23:09:20",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 1.6,
            backtracking_score: 4,
            size_score: 10,
            percent_filled_by_logic: 59.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.003403902053833
        },
        grid: [
            [null, null, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, 1, null, null, null],
            [null, 0, null, 0, null, 0, null, null],
            [null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_14",
        name: "P8_3_14",
        description: "8x8 Hard #14",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 23:09:22",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.7,
            logic_iterations_score: 0.8,
            backtracking_score: 28.7,
            size_score: 10,
            percent_filled_by_logic: 18.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 3056,
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
            time_taken: 0.39792203903198
        },
        grid: [
            [null, 1, null, null, 0, null, 0, null],
            [0, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 1, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 1, 1, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_15",
        name: "P8_3_15",
        description: "8x8 Hard #15",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 23:09:24",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 10,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 206,
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
            time_taken: 0.026634931564331
        },
        grid: [
            [null, 0, null, null, 0, 0, null, null],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, 1, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null],
            [null, 0, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_16",
        name: "P8_3_16",
        description: "8x8 Hard #16",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 23:09:26",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31,
            logic_iterations_score: 1.2,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 22.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 2774,
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
            time_taken: 0.37094283103943
        },
        grid: [
            [null, 0, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [1, null, 0, null, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_17",
        name: "P8_3_17",
        description: "8x8 Medium #17",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 23:09:27",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.9,
            size_score: 10,
            percent_filled_by_logic: 59.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 13,
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
            time_taken: 0.003943920135498
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, 1, null],
            [null, 0, null, null, 1, null, 1, null],
            [null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_18",
        name: "P8_3_18",
        description: "8x8 Hard #18",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 23:09:29",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 31,
            logic_iterations_score: 0.8,
            backtracking_score: 27.2,
            size_score: 10,
            percent_filled_by_logic: 22.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 743,
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
            time_taken: 0.11439394950867
        },
        grid: [
            [null, null, null, 1, 1, null, 0, null],
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, 1, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_19",
        name: "P8_3_19",
        description: "8x8 Hard #19",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 23:09:31",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 0.8,
            backtracking_score: 28.3,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 2048,
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
            time_taken: 0.23267793655396
        },
        grid: [
            [null, 1, null, null, null, 1, 1, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_20",
        name: "P8_3_20",
        description: "8x8 Medium #20",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 23:09:32",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 5.6,
            size_score: 10,
            percent_filled_by_logic: 60.9
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0025560855865479
        },
        grid: [
            [0, null, 1, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, 1, 1],
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 0],
            [null, null, null, null, 0, null, null, 0],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_21",
        name: "P8_3_21",
        description: "8x8 Medium #21",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 23:09:34",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 10.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.3,
            size_score: 10,
            percent_filled_by_logic: 73.3
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0025279521942139
        },
        grid: [
            [0, null, 1, null, 1, 1, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, null, 0],
            [null, 0, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_22",
        name: "P8_3_22",
        description: "8x8 Hard #22",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 23:09:36",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 33.7,
            logic_iterations_score: 0.8,
            backtracking_score: 29,
            size_score: 10,
            percent_filled_by_logic: 15.7
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 3816,
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
            time_taken: 0.51364302635193
        },
        grid: [
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_23",
        name: "P8_3_23",
        description: "8x8 Hard #23",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 23:09:37",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 2,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 5,
            backtrack_iterations: 75,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.013537883758545
        },
        grid: [
            [0, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, 1, null],
            [null, null, 0, 0, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_24",
        name: "P8_3_24",
        description: "8x8 Hard #24",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 23:09:38",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 25.2,
            size_score: 10,
            percent_filled_by_logic: 51.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 118,
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
            time_taken: 0.01678204536438
        },
        grid: [
            [1, null, null, null, null, 1, null, null],
            [null, null, 0, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, 0],
            [0, null, null, null, 0, 1, null, null],
            [null, null, 0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_25",
        name: "P8_3_25",
        description: "8x8 Hard #25",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 23:09:40",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 28.9,
            logic_iterations_score: 1.2,
            backtracking_score: 27.9,
            size_score: 10,
            percent_filled_by_logic: 27.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 1456,
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
            time_taken: 0.16292500495911
        },
        grid: [
            [null, null, 0, 0, null, null, 1, null],
            [null, null, 1, null, null, 1, 1, null],
            [1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0],
            [null, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_26",
        name: "P8_3_26",
        description: "8x8 Medium #26",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 23:09:42",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 6.7,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 9,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0029020309448242
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, 1],
            [null, null, 1, null, null, 1, 1, null],
            [0, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, 0, null, null, null, 0, null, 0],
            [null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_27",
        name: "P8_3_27",
        description: "8x8 Very Hard #27",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 23:10:02",
        difficulty: "Very Hard",
        difficulty_score: 79,
        difficulty_factors: {
            logic_fill_score: 38.4,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 3.9
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 167890,
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
            time_taken: 18.797398090363
        },
        grid: [
            [null, 0, null, 1, null, null, null, null],
            [1, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, null],
            [0, 0, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_28",
        name: "P8_3_28",
        description: "8x8 Medium #28",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 23:10:03",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 10.6,
            logic_iterations_score: 1.6,
            backtracking_score: 23.1,
            size_score: 10,
            percent_filled_by_logic: 73.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 17,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0044970512390137
        },
        grid: [
            [null, null, null, null, null, null, 1, 0],
            [0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, 0, null, 0, null, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_29",
        name: "P8_3_29",
        description: "8x8 Hard #29",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 23:10:05",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 27.5,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 31.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 346,
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
            time_taken: 0.039749145507812
        },
        grid: [
            [null, null, null, null, null, 0, null, 1],
            [0, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [null, 0, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, 0],
            [0, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_30",
        name: "P8_3_30",
        description: "8x8 Medium #30",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 23:10:06",
        difficulty: "Medium",
        difficulty_score: 35,
        difficulty_factors: {
            logic_fill_score: 17.5,
            logic_iterations_score: 1.2,
            backtracking_score: 6.4,
            size_score: 10,
            percent_filled_by_logic: 56.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0027449131011963
        },
        grid: [
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_31",
        name: "P8_3_31",
        description: "8x8 Easy #31",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 23:10:08",
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
            time_taken: 0.0014441013336182
        },
        grid: [
            [null, null, null, 1, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_32",
        name: "P8_3_32",
        description: "8x8 Hard #32",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 23:10:10",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.3,
            logic_iterations_score: 0.8,
            backtracking_score: 29.5,
            size_score: 10,
            percent_filled_by_logic: 19.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 6366,
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
            time_taken: 0.79096484184265
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [0, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, 1, 0],
            [null, null, null, 1, null, null, 1, null],
            [null, 0, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_33",
        name: "P8_3_33",
        description: "8x8 Hard #33",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 23:10:12",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 23.3,
            logic_iterations_score: 0.8,
            backtracking_score: 24.6,
            size_score: 10,
            percent_filled_by_logic: 41.7
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 66,
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
            time_taken: 0.0098690986633301
        },
        grid: [
            [null, 1, 1, null, null, null, null, null],
            [0, null, 1, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [0, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 0],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_34",
        name: "P8_3_34",
        description: "8x8 Very Hard #34",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 23:10:14",
        difficulty: "Very Hard",
        difficulty_score: 76,
        difficulty_factors: {
            logic_fill_score: 34.4,
            logic_iterations_score: 1.2,
            backtracking_score: 29.9,
            size_score: 10,
            percent_filled_by_logic: 14
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 9431,
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
            time_taken: 1.0790619850159
        },
        grid: [
            [null, null, 1, 0, null, 1, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, 0, 1, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [1, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_35",
        name: "P8_3_35",
        description: "8x8 Hard #35",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 23:10:17",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 29.6,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 6727,
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
            time_taken: 0.73269104957581
        },
        grid: [
            [null, 0, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, null, 0, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [0, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_36",
        name: "P8_3_36",
        description: "8x8 Medium #36",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 23:10:18",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 12.5,
            logic_iterations_score: 2.8,
            backtracking_score: 21.9,
            size_score: 10,
            percent_filled_by_logic: 68.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 7,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0055038928985596
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, 1, 1, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 0, null, 0],
            [null, null, 1, null, 0, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_37",
        name: "P8_3_37",
        description: "8x8 Easy #37",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 23:10:20",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017631053924561
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [0, null, 0, 0, null, 1, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, 1, null, null, 1],
            [1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_38",
        name: "P8_3_38",
        description: "8x8 Easy #38",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 23:10:21",
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
            time_taken: 0.0010678768157959
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, 0, 0, null],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, 0, null, 0, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_39",
        name: "P8_3_39",
        description: "8x8 Hard #39",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 23:10:23",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 10,
            percent_filled_by_logic: 55.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 45,
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
            time_taken: 0.0072929859161377
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [1, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 0],
            [null, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_40",
        name: "P8_3_40",
        description: "8x8 Hard #40",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 23:10:24",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 27.4,
            size_score: 10,
            percent_filled_by_logic: 29.8
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 903,
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
            time_taken: 0.11141800880432
        },
        grid: [
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, 0, 0],
            [0, null, 1, null, null, null, 1, 0],
            [null, null, null, null, 0, null, null, null],
            [null, 0, 1, null, null, null, null, 1],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, 1, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_41",
        name: "P8_3_41",
        description: "8x8 Hard #41",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 23:10:26",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.6,
            backtracking_score: 26.3,
            size_score: 10,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 333,
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
            time_taken: 0.040253162384033
        },
        grid: [
            [null, null, null, null, null, 1, 1, null],
            [0, null, null, 1, null, 1, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, 0, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_42",
        name: "P8_3_42",
        description: "8x8 Hard #42",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 23:10:27",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 27.5,
            logic_iterations_score: 1.6,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 31.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 718,
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
            time_taken: 0.085643768310547
        },
        grid: [
            [0, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, 1, null, null, null, 1, 0, null],
            [0, null, null, 1, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_43",
        name: "P8_3_43",
        description: "8x8 Hard #43",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 23:10:29",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 22.5,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 43.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 698,
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
            time_taken: 0.10973000526428
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, null, 1, null, 1, null, 1],
            [null, null, 1, null, 1, null, null, null],
            [0, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_44",
        name: "P8_3_44",
        description: "8x8 Hard #44",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 23:10:30",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 27.5,
            logic_iterations_score: 0.8,
            backtracking_score: 24.3,
            size_score: 10,
            percent_filled_by_logic: 31.4
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 51,
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
            time_taken: 0.013107061386108
        },
        grid: [
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_45",
        name: "P8_3_45",
        description: "8x8 Hard #45",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 23:10:32",
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
            backtrack_iterations: 1638,
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
            time_taken: 0.19816184043884
        },
        grid: [
            [null, null, null, null, null, null, 1, 1],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, 1, 1],
            [null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_46",
        name: "P8_3_46",
        description: "8x8 Medium #46",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 23:10:34",
        difficulty: "Medium",
        difficulty_score: 41,
        difficulty_factors: {
            logic_fill_score: 7.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.1,
            size_score: 10,
            percent_filled_by_logic: 80.9
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
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
                tryFillCells: 1
            },
            time_taken: 0.0022151470184326
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, 1, null, 0, null],
            [0, null, null, null, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, 1, null, null, 1, 1, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_47",
        name: "P8_3_47",
        description: "8x8 Hard #47",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 23:10:35",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 0.8,
            backtracking_score: 25.4,
            size_score: 10,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 148,
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
            time_taken: 0.020596027374268
        },
        grid: [
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [0, null, null, null, null, null, null, 0],
            [null, 1, null, 0, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_48",
        name: "P8_3_48",
        description: "8x8 Hard #48",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 23:10:37",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.7,
            logic_iterations_score: 1.6,
            backtracking_score: 23.5,
            size_score: 10,
            percent_filled_by_logic: 58.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 25,
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
            time_taken: 0.012017011642456
        },
        grid: [
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 1, null, 1, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, 0, 1],
            [null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_49",
        name: "P8_3_49",
        description: "8x8 Hard #49",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 23:10:38",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.6,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 1191,
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
            time_taken: 0.19761490821838
        },
        grid: [
            [null, null, 1, null, null, 0, null, 1],
            [0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, 0, 0],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 1],
            [null, 1, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_50",
        name: "P8_3_50",
        description: "8x8 Easy #50",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 23:10:40",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 5.1,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 87.2
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0036990642547607
        },
        grid: [
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [null, null, 0, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_51",
        name: "P8_3_51",
        description: "8x8 Medium #51",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 23:10:41",
        difficulty: "Medium",
        difficulty_score: 33,
        difficulty_factors: {
            logic_fill_score: 16.2,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 10,
            percent_filled_by_logic: 59.6
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0024130344390869
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, 1, null],
            [null, 0, 1, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_52",
        name: "P8_3_52",
        description: "8x8 Hard #52",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 23:10:43",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 23,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 42.6
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 160,
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
            time_taken: 0.029345989227295
        },
        grid: [
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, null],
            [0, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, 1, null],
            [null, null, null, null, 1, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_53",
        name: "P8_3_53",
        description: "8x8 Medium #53",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 23:10:44",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.6,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0042948722839355
        },
        grid: [
            [null, null, null, 1, null, null, null, null],
            [0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_54",
        name: "P8_3_54",
        description: "8x8 Hard #54",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 23:10:46",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.5,
            logic_iterations_score: 1.6,
            backtracking_score: 25.4,
            size_score: 10,
            percent_filled_by_logic: 36.2
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 149,
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
            time_taken: 0.019558191299438
        },
        grid: [
            [null, 0, null, null, 1, null, null, 0],
            [null, 1, 1, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_55",
        name: "P8_3_55",
        description: "8x8 Hard #55",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 23:10:47",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.8,
            logic_iterations_score: 0.8,
            backtracking_score: 26.8,
            size_score: 10,
            percent_filled_by_logic: 35.4
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 532,
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
            time_taken: 0.093725919723511
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, 0, 1, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, 0, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_56",
        name: "P8_3_56",
        description: "8x8 Hard #56",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 23:10:49",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 21.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 46.8
        },
        solver_metrics: {
            initial_empty: 47,
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
            time_taken: 0.009052038192749
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, 0, null, 0],
            [null, null, 1, 1, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_57",
        name: "P8_3_57",
        description: "8x8 Hard #57",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 23:10:50",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 19.2,
            logic_iterations_score: 1.6,
            backtracking_score: 26.1,
            size_score: 10,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 4,
            backtrack_iterations: 266,
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
            time_taken: 0.030344009399414
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_58",
        name: "P8_3_58",
        description: "8x8 Hard #58",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 23:10:52",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 22.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26,
            size_score: 10,
            percent_filled_by_logic: 43.4
        },
        solver_metrics: {
            initial_empty: 53,
            logic_iterations: 3,
            backtrack_iterations: 253,
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
            time_taken: 0.032185077667236
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, 0, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, 1, null, null, null, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_59",
        name: "P8_3_59",
        description: "8x8 Hard #59",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 23:10:53",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 51
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 54,
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
            time_taken: 0.0084550380706787
        },
        grid: [
            [1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, 0, null, 1],
            [null, 1, null, null, 0, 0, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_60",
        name: "P8_3_60",
        description: "8x8 Hard #60",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 23:10:55",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 19.1,
            logic_iterations_score: 1.2,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 52.2
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 132,
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
            time_taken: 0.015623092651367
        },
        grid: [
            [null, 1, 1, null, 0, null, null, 1],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, 1, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, 0, 0, null, 0, null, 0, null],
            [null, 1, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_61",
        name: "P8_3_61",
        description: "8x8 Hard #61",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 23:10:57",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.8,
            logic_iterations_score: 0.8,
            backtracking_score: 29.7,
            size_score: 10,
            percent_filled_by_logic: 18
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 7908,
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
            time_taken: 0.9420690536499
        },
        grid: [
            [null, 1, 1, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_62",
        name: "P8_3_62",
        description: "8x8 Hard #62",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 23:10:59",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 25.2,
            size_score: 10,
            percent_filled_by_logic: 51.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 119,
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
            time_taken: 0.02512001991272
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [null, 0, null, null, null, 1, null, 0],
            [0, null, 1, null, null, null, null, null],
            [null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_63",
        name: "P8_3_63",
        description: "8x8 Hard #63",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 23:11:01",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 21.6
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 3646,
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
            time_taken: 0.46177887916565
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 1, 1],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_64",
        name: "P8_3_64",
        description: "8x8 Easy #64",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 23:11:02",
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
            time_taken: 0.00085806846618652
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 0, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, 0, null],
            [0, 0, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_65",
        name: "P8_3_65",
        description: "8x8 Hard #65",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 23:11:04",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 40.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 674,
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
            time_taken: 0.083523988723755
        },
        grid: [
            [0, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, null],
            [null, 1, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_66",
        name: "P8_3_66",
        description: "8x8 Hard #66",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 23:11:05",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 162,
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
            time_taken: 0.019601106643677
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, 0, 0],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, 1, null],
            [null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_67",
        name: "P8_3_67",
        description: "8x8 Hard #67",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 23:11:07",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 20.8,
            logic_iterations_score: 1.2,
            backtracking_score: 25.9,
            size_score: 10,
            percent_filled_by_logic: 47.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 219,
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
            time_taken: 0.027627944946289
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [1, null, null, 0, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 0, 1, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 0],
            [1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_68",
        name: "P8_3_68",
        description: "8x8 Medium #68",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 23:11:08",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 22.5,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 43.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0032930374145508
        },
        grid: [
            [null, 0, 0, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 0, null, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_69",
        name: "P8_3_69",
        description: "8x8 Hard #69",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 23:11:10",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 20.8,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 10,
            percent_filled_by_logic: 47.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 80,
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
            time_taken: 0.017507076263428
        },
        grid: [
            [1, null, null, 1, null, 1, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 0],
            [1, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, 0],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_70",
        name: "P8_3_70",
        description: "8x8 Hard #70",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 23:11:11",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27.5,
            size_score: 10,
            percent_filled_by_logic: 31.9
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 983,
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
            time_taken: 0.12620997428894
        },
        grid: [
            [0, null, null, null, null, null, null, 1],
            [1, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 1, null, 1],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, 1, 0, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_71",
        name: "P8_3_71",
        description: "8x8 Medium #71",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 23:11:13",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 12,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 70
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 37,
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
            time_taken: 0.005875825881958
        },
        grid: [
            [0, null, null, null, null, 0, 0, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_72",
        name: "P8_3_72",
        description: "8x8 Hard #72",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 23:11:14",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.6,
            backtracking_score: 24.6,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 66,
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
            time_taken: 0.010499000549316
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1],
            [null, null, null, null, 0, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, 0, 0],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_73",
        name: "P8_3_73",
        description: "8x8 Easy #73",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 23:11:16",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 8.2,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 79.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019960403442383
        },
        grid: [
            [1, 1, null, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, 1, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_74",
        name: "P8_3_74",
        description: "8x8 Hard #74",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 23:11:17",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 20.8,
            logic_iterations_score: 1.2,
            backtracking_score: 22.1,
            size_score: 10,
            percent_filled_by_logic: 47.9
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 6,
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
            time_taken: 0.011656045913696
        },
        grid: [
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, null, 0, null, 0, null],
            [1, null, null, null, null, null, 0, 0],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_75",
        name: "P8_3_75",
        description: "8x8 Hard #75",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 23:11:19",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.5,
            logic_iterations_score: 0.8,
            backtracking_score: 28.4,
            size_score: 10,
            percent_filled_by_logic: 21.3
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 2188,
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
            time_taken: 0.27435398101807
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, 1, null, null, 0, 1, null, null],
            [0, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [1, 0, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, 0, null],
            [1, 1, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_76",
        name: "P8_3_76",
        description: "8x8 Hard #76",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 23:11:21",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 24.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 1240,
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
            time_taken: 0.14866995811462
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [1, null, 0, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_77",
        name: "P8_3_77",
        description: "8x8 Hard #77",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 23:11:22",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 25.8,
            logic_iterations_score: 0.8,
            backtracking_score: 23.6,
            size_score: 10,
            percent_filled_by_logic: 35.4
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 27,
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
            time_taken: 0.0050690174102783
        },
        grid: [
            [null, null, null, 1, null, 1, null, 1],
            [1, 1, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_78",
        name: "P8_3_78",
        description: "8x8 Hard #78",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 23:11:25",
        difficulty: "Hard",
        difficulty_score: 73,
        difficulty_factors: {
            logic_fill_score: 32.2,
            logic_iterations_score: 1.2,
            backtracking_score: 29.7,
            size_score: 10,
            percent_filled_by_logic: 19.6
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 7591,
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
            time_taken: 0.94578385353088
        },
        grid: [
            [1, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, 0, null],
            [1, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_79",
        name: "P8_3_79",
        description: "8x8 Hard #79",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 23:11:26",
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
            backtrack_iterations: 339,
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
            time_taken: 0.043889999389648
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, 1],
            [1, 1, null, null, null, null, 0, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, 0],
            [0, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_80",
        name: "P8_3_80",
        description: "8x8 Hard #80",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 23:11:28",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 17.1,
            logic_iterations_score: 1.6,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 57.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 73,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.013785123825073
        },
        grid: [
            [1, 1, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 0, 1, null, 1],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_81",
        name: "P8_3_81",
        description: "8x8 Hard #81",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 23:11:29",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.5,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 58.8
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 3,
            backtrack_iterations: 61,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0086550712585449
        },
        grid: [
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_82",
        name: "P8_3_82",
        description: "8x8 Hard #82",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 23:11:31",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 21.7,
            logic_iterations_score: 1.2,
            backtracking_score: 26.2,
            size_score: 10,
            percent_filled_by_logic: 45.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 297,
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
            time_taken: 0.059812068939209
        },
        grid: [
            [null, null, 0, null, null, null, null, 1],
            [null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_83",
        name: "P8_3_83",
        description: "8x8 Very Hard #83",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 23:11:33",
        difficulty: "Very Hard",
        difficulty_score: 78,
        difficulty_factors: {
            logic_fill_score: 36.6,
            logic_iterations_score: 1.2,
            backtracking_score: 29.9,
            size_score: 10,
            percent_filled_by_logic: 8.5
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 8844,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 1.0831179618835
        },
        grid: [
            [null, 1, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 0],
            [0, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, null],
            [0, null, null, 1, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_84",
        name: "P8_3_84",
        description: "8x8 Hard #84",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 23:11:35",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 22.1,
            logic_iterations_score: 1.2,
            backtracking_score: 25,
            size_score: 10,
            percent_filled_by_logic: 44.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 99,
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
            time_taken: 0.014206886291504
        },
        grid: [
            [null, null, null, 1, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1],
            [1, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, 1, null, null, null, null, null, null],
            [1, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_85",
        name: "P8_3_85",
        description: "8x8 Hard #85",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 23:11:36",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 22.5,
            logic_iterations_score: 1.2,
            backtracking_score: 24.8,
            size_score: 10,
            percent_filled_by_logic: 43.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 86,
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
            time_taken: 0.012887954711914
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, 0, null],
            [1, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, 1, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_86",
        name: "P8_3_86",
        description: "8x8 Hard #86",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 23:11:38",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 16.8,
            logic_iterations_score: 1.2,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 58
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 74,
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
            time_taken: 0.017332077026367
        },
        grid: [
            [null, 1, 0, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, 1, null],
            [0, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_87",
        name: "P8_3_87",
        description: "8x8 Easy #87",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 23:11:39",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 8.2,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 79.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0023050308227539
        },
        grid: [
            [null, 0, null, null, 0, null, null, 0],
            [null, null, null, 1, 0, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_88",
        name: "P8_3_88",
        description: "8x8 Medium #88",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 23:11:41",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 24.5,
            logic_iterations_score: 1.2,
            backtracking_score: 6.4,
            size_score: 10,
            percent_filled_by_logic: 38.8
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0036859512329102
        },
        grid: [
            [null, null, null, null, null, 1, null, null],
            [0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_89",
        name: "P8_3_89",
        description: "8x8 Hard #89",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 23:11:43",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 25.4,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 143,
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
            time_taken: 0.023453950881958
        },
        grid: [
            [null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, 1, 1, null, 1],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_90",
        name: "P8_3_90",
        description: "8x8 Easy #90",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 23:11:44",
        difficulty: "Easy",
        difficulty_score: 21,
        difficulty_factors: {
            logic_fill_score: 7.1,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 82.2
        },
        solver_metrics: {
            initial_empty: 45,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012378692626953
        },
        grid: [
            [0, null, null, 0, 0, null, null, 1],
            [null, null, null, null, 0, null, 1, null],
            [null, 1, 1, null, null, 0, null, null],
            [null, 1, null, 1, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [1, null, null, 1, null, null, null, 1],
            [null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_91",
        name: "P8_3_91",
        description: "8x8 Hard #91",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 23:11:46",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 30.6,
            logic_iterations_score: 0.8,
            backtracking_score: 27.2,
            size_score: 10,
            percent_filled_by_logic: 23.5
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 791,
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
            time_taken: 0.082786083221436
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, 1],
            [0, null, null, 0, null, null, null, 1],
            [0, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, null, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_92",
        name: "P8_3_92",
        description: "8x8 Easy #92",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 23:11:47",
        difficulty: "Easy",
        difficulty_score: 24,
        difficulty_factors: {
            logic_fill_score: 9.8,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 75.5
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2,
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
            time_taken: 0.0010108947753906
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 1, null, 1],
            [null, 1, 1, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_93",
        name: "P8_3_93",
        description: "8x8 Hard #93",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 23:11:49",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 0.8,
            backtracking_score: 25,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 102,
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
            time_taken: 0.021171092987061
        },
        grid: [
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, null],
            [null, null, null, 1, 1, null, null, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, 0],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_94",
        name: "P8_3_94",
        description: "8x8 Hard #94",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 23:11:51",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 24.8,
            logic_iterations_score: 1.2,
            backtracking_score: 26.7,
            size_score: 10,
            percent_filled_by_logic: 38
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 457,
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
            time_taken: 0.076369047164917
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null],
            [null, 0, 0, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_95",
        name: "P8_3_95",
        description: "8x8 Hard #95",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 23:11:52",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26.5,
            size_score: 10,
            percent_filled_by_logic: 36
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 413,
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
            time_taken: 0.044707775115967
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, null, 0],
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 0, null, null, 1, null, 0, null],
            [1, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_96",
        name: "P8_3_96",
        description: "8x8 Hard #96",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 23:11:54",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 17.5,
            logic_iterations_score: 1.2,
            backtracking_score: 24.3,
            size_score: 10,
            percent_filled_by_logic: 56.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 50,
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
            time_taken: 0.011268138885498
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, 1],
            [1, null, null, 1, null, null, 1, null],
            [1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, 1, null, null, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_97",
        name: "P8_3_97",
        description: "8x8 Hard #97",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 23:11:56",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 21.3,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 10,
            percent_filled_by_logic: 46.8
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 49,
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
            time_taken: 0.0085740089416504
        },
        grid: [
            [1, null, null, 1, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [0, null, 1, null, null, null, null, null],
            [0, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_98",
        name: "P8_3_98",
        description: "8x8 Hard #98",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 23:11:58",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 23.3,
            logic_iterations_score: 1.2,
            backtracking_score: 26.1,
            size_score: 10,
            percent_filled_by_logic: 41.7
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 271,
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
            time_taken: 0.030704975128174
        },
        grid: [
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, 0, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0],
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_99",
        name: "P8_3_99",
        description: "8x8 Easy #99",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 23:11:59",
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
                tryFillCells: 4
            },
            time_taken: 0.0024728775024414
        },
        grid: [
            [1, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [null, null, 0, null, 0, null, null, null],
            [null, 0, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 1, 1, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_100",
        name: "P8_3_100",
        description: "8x8 Hard #100",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 23:12:01",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 1.2,
            backtracking_score: 29.6,
            size_score: 10,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 6939,
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
            time_taken: 0.86007189750671
        },
        grid: [
            [0, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_101",
        name: "P8_3_101",
        description: "8x8 Hard #101",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 23:12:03",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 0.8,
            backtracking_score: 26.5,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 385,
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
            time_taken: 0.044854879379272
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, null, 0, null, 1, null],
            [0, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_102",
        name: "P8_3_102",
        description: "8x8 Hard #102",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 23:12:04",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
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
            time_taken: 0.0062530040740967
        },
        grid: [
            [0, 1, null, null, null, null, null, null],
            [null, 1, null, 0, null, 0, null, 1],
            [null, null, null, 0, null, null, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, 0, null, 1],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_103",
        name: "P8_3_103",
        description: "8x8 Hard #103",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 23:12:06",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 0.8,
            backtracking_score: 26.9,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 582,
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
            time_taken: 0.085950136184692
        },
        grid: [
            [null, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [1, null, 0, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, 0],
            [1, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_104",
        name: "P8_3_104",
        description: "8x8 Hard #104",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 23:12:08",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 1.2,
            backtracking_score: 27.6,
            size_score: 10,
            percent_filled_by_logic: 26
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 1106,
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
            time_taken: 0.12456703186035
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 0, null],
            [0, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1],
            [0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_105",
        name: "P8_3_105",
        description: "8x8 Hard #105",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 23:12:09",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 31.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 10,
            percent_filled_by_logic: 20.8
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0082519054412842
        },
        grid: [
            [null, null, 0, null, null, 1, 0, null],
            [null, 1, null, 1, null, 1, null, null],
            [1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [1, null, null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_106",
        name: "P8_3_106",
        description: "8x8 Hard #106",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 23:12:11",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 23.3,
            logic_iterations_score: 1.2,
            backtracking_score: 26.4,
            size_score: 10,
            percent_filled_by_logic: 41.7
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 366,
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
            time_taken: 0.042203903198242
        },
        grid: [
            [1, null, 1, null, null, null, null, null],
            [0, null, 1, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, 0, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_107",
        name: "P8_3_107",
        description: "8x8 Medium #107",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 23:12:12",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 7.2,
            size_score: 10,
            percent_filled_by_logic: 29.8
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 11,
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
            time_taken: 0.0040059089660645
        },
        grid: [
            [0, null, 0, null, null, 1, null, 0],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, 1, null, null],
            [null, null, 0, null, null, null, 1, null],
            [null, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_108",
        name: "P8_3_108",
        description: "8x8 Medium #108",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 23:12:14",
        difficulty: "Medium",
        difficulty_score: 26,
        difficulty_factors: {
            logic_fill_score: 10.2,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 74.5
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018501281738281
        },
        grid: [
            [null, null, null, null, 0, 0, null, 1],
            [null, null, 1, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, 0, null, 1, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, 0, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_109",
        name: "P8_3_109",
        description: "8x8 Hard #109",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 23:12:15",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 26.1,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 284,
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
            time_taken: 0.067671060562134
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, null, 0, null, 0, null, 0],
            [null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null],
            [null, 0, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_110",
        name: "P8_3_110",
        description: "8x8 Medium #110",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 23:12:17",
        difficulty: "Medium",
        difficulty_score: 31,
        difficulty_factors: {
            logic_fill_score: 15,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 62.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0023000240325928
        },
        grid: [
            [null, 1, 0, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, 0, null, null],
            [null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, 0, null, null],
            [0, 0, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_111",
        name: "P8_3_111",
        description: "8x8 Hard #111",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 23:12:18",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 23.8,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 32,
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
            time_taken: 0.0062899589538574
        },
        grid: [
            [null, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, 1, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [0, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_112",
        name: "P8_3_112",
        description: "8x8 Easy #112",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 23:12:20",
        difficulty: "Easy",
        difficulty_score: 24,
        difficulty_factors: {
            logic_fill_score: 8.2,
            logic_iterations_score: 2,
            backtracking_score: 4,
            size_score: 10,
            percent_filled_by_logic: 79.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 5,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0042510032653809
        },
        grid: [
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, null, 0, 0],
            [null, 1, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_113",
        name: "P8_3_113",
        description: "8x8 Hard #113",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 23:12:21",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26.3,
            size_score: 10,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 320,
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
            time_taken: 0.037648916244507
        },
        grid: [
            [1, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 0],
            [1, null, null, null, null, null, 1, null],
            [1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_114",
        name: "P8_3_114",
        description: "8x8 Hard #114",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 23:12:23",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 26,
            size_score: 10,
            percent_filled_by_logic: 27.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 262,
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
            time_taken: 0.029547929763794
        },
        grid: [
            [0, null, null, 0, null, 0, null, 0],
            [null, null, 1, 1, null, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_115",
        name: "P8_3_115",
        description: "8x8 Hard #115",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 23:12:24",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.2,
            logic_iterations_score: 1.2,
            backtracking_score: 24.7,
            size_score: 10,
            percent_filled_by_logic: 52.1
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 77,
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
            time_taken: 0.010462045669556
        },
        grid: [
            [null, null, null, 0, null, 0, null, null],
            [null, 0, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, 1, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, 1],
            [null, null, 0, 0, null, 0, null, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_116",
        name: "P8_3_116",
        description: "8x8 Hard #116",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 23:12:26",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 24.3,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 53,
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
            time_taken: 0.012604951858521
        },
        grid: [
            [null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null],
            [null, 0, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_117",
        name: "P8_3_117",
        description: "8x8 Hard #117",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 23:12:27",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.6,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 55,
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
            time_taken: 0.0099749565124512
        },
        grid: [
            [null, 1, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null],
            [null, null, 1, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null],
            [1, 1, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_118",
        name: "P8_3_118",
        description: "8x8 Medium #118",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 23:12:29",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 10.4,
            logic_iterations_score: 1.6,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 74
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 4,
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
            time_taken: 0.0025289058685303
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, 1, null],
            [null, 0, 0, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_119",
        name: "P8_3_119",
        description: "8x8 Hard #119",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 23:12:30",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 21.3,
            logic_iterations_score: 1.2,
            backtracking_score: 24,
            size_score: 10,
            percent_filled_by_logic: 46.8
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 39,
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
            time_taken: 0.0071861743927002
        },
        grid: [
            [0, null, null, null, 0, null, 0, null],
            [0, null, null, 0, null, null, 0, null],
            [null, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, 0],
            [1, null, null, 0, null, 1, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_120",
        name: "P8_3_120",
        description: "8x8 Medium #120",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 23:12:32",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 17.1,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 10,
            percent_filled_by_logic: 57.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.0023980140686035
        },
        grid: [
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, 1],
            [null, null, 1, 1, null, null, null, 1],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_121",
        name: "P8_3_121",
        description: "8x8 Hard #121",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 23:12:33",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 19.2,
            logic_iterations_score: 2,
            backtracking_score: 22.4,
            size_score: 10,
            percent_filled_by_logic: 52
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 5,
            backtrack_iterations: 8,
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
            time_taken: 0.0061099529266357
        },
        grid: [
            [0, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0],
            [null, 0, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_122",
        name: "P8_3_122",
        description: "8x8 Medium #122",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 23:12:35",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 13.6,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 66
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0016360282897949
        },
        grid: [
            [null, null, null, 0, 0, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 1, null, 1, null, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, 0, null, null, 1],
            [0, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_123",
        name: "P8_3_123",
        description: "8x8 Hard #123",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 23:12:36",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 20.9,
            logic_iterations_score: 1.2,
            backtracking_score: 25.6,
            size_score: 10,
            percent_filled_by_logic: 47.8
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 177,
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
            time_taken: 0.023662805557251
        },
        grid: [
            [null, null, 1, null, null, 0, null, null],
            [null, 1, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, 0, null, 1],
            [null, 1, null, null, null, 0, null, null],
            [null, 1, 0, null, null, null, null, 1],
            [null, null, null, 1, null, null, 1, null],
            [0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_124",
        name: "P8_3_124",
        description: "8x8 Hard #124",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 23:12:38",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 65,
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
            time_taken: 0.012408018112183
        },
        grid: [
            [0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null],
            [0, null, null, null, null, 0, null, 0],
            [null, null, 1, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, 1, 1],
            [null, null, 1, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_125",
        name: "P8_3_125",
        description: "8x8 Medium #125",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 23:12:40",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 13.9,
            logic_iterations_score: 1.6,
            backtracking_score: 22.9,
            size_score: 10,
            percent_filled_by_logic: 65.3
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 14,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0044548511505127
        },
        grid: [
            [null, 1, null, null, null, 0, null, null],
            [1, null, 1, null, null, null, null, 1],
            [null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 0],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_126",
        name: "P8_3_126",
        description: "8x8 Hard #126",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 23:12:41",
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
            backtrack_iterations: 1725,
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
            time_taken: 0.19930005073547
        },
        grid: [
            [null, 1, null, 1, 1, null, 1, null],
            [null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_127",
        name: "P8_3_127",
        description: "8x8 Hard #127",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 23:12:43",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 25.8,
            logic_iterations_score: 1.2,
            backtracking_score: 22.6,
            size_score: 10,
            percent_filled_by_logic: 35.4
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 10,
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
            time_taken: 0.0040619373321533
        },
        grid: [
            [0, null, 1, null, null, 0, null, 0],
            [null, null, null, null, 1, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_128",
        name: "P8_3_128",
        description: "8x8 Hard #128",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 23:12:44",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 21.2,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 10,
            percent_filled_by_logic: 46.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 84,
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
            time_taken: 0.0103600025177
        },
        grid: [
            [0, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, 0, null, null],
            [0, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [1, null, null, 1, null, null, 1, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_129",
        name: "P8_3_129",
        description: "8x8 Hard #129",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 23:12:46",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.5,
            logic_iterations_score: 0.8,
            backtracking_score: 28.6,
            size_score: 10,
            percent_filled_by_logic: 21.3
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 2,
            backtrack_iterations: 2738,
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
            time_taken: 0.33243608474731
        },
        grid: [
            [null, 0, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, 0, 1, null, 1, null],
            [0, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_130",
        name: "P8_3_130",
        description: "8x8 Easy #130",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 23:12:48",
        difficulty: "Easy",
        difficulty_score: 21,
        difficulty_factors: {
            logic_fill_score: 6,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 85.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.001978874206543
        },
        grid: [
            [null, null, null, null, 1, 0, null, null],
            [0, null, null, null, null, 0, null, null],
            [0, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, 1, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_131",
        name: "P8_3_131",
        description: "8x8 Medium #131",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 23:12:49",
        difficulty: "Medium",
        difficulty_score: 31,
        difficulty_factors: {
            logic_fill_score: 14.5,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 10,
            percent_filled_by_logic: 63.8
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0018749237060547
        },
        grid: [
            [null, null, null, 0, null, null, null, 0],
            [null, 1, null, null, null, 1, 1, null],
            [null, 1, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_132",
        name: "P8_3_132",
        description: "8x8 Hard #132",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 23:12:50",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 17.7,
            logic_iterations_score: 2,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 55.8
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 5,
            backtrack_iterations: 132,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.019490957260132
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 0, null, 0, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_133",
        name: "P8_3_133",
        description: "8x8 Hard #133",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 23:12:52",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18,
            logic_iterations_score: 1.2,
            backtracking_score: 24.5,
            size_score: 10,
            percent_filled_by_logic: 55.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 62,
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
            time_taken: 0.0093739032745361
        },
        grid: [
            [null, 1, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, 1, null, null],
            [null, null, 0, null, null, null, 0, 1],
            [null, null, null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_134",
        name: "P8_3_134",
        description: "8x8 Hard #134",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 23:12:54",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 32.7,
            logic_iterations_score: 0.8,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 18.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 1156,
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
            time_taken: 0.16843795776367
        },
        grid: [
            [1, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 1, null, null],
            [1, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, 0, null, 1],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_135",
        name: "P8_3_135",
        description: "8x8 Hard #135",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 23:12:57",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 1.2,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 52,
            logic_iterations: 3,
            backtrack_iterations: 16985,
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
            time_taken: 1.8416519165039
        },
        grid: [
            [null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_136",
        name: "P8_3_136",
        description: "8x8 Hard #136",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 23:12:59",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 21.2,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 10,
            percent_filled_by_logic: 46.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0065901279449463
        },
        grid: [
            [null, null, null, 1, 1, null, 0, null],
            [0, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, 1],
            [null, null, 0, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_137",
        name: "P8_3_137",
        description: "8x8 Hard #137",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 23:13:00",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 0.8,
            backtracking_score: 27.9,
            size_score: 10,
            percent_filled_by_logic: 32
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 1387,
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
            time_taken: 0.15531897544861
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [1, null, 1, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 1],
            [null, null, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_138",
        name: "P8_3_138",
        description: "8x8 Hard #138",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 23:13:02",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 24.2,
            logic_iterations_score: 0.8,
            backtracking_score: 25.4,
            size_score: 10,
            percent_filled_by_logic: 39.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 148,
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
            time_taken: 0.017767906188965
        },
        grid: [
            [null, null, 0, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, 1],
            [null, null, 0, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, 0, null, null, 1, null, null],
            [0, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_139",
        name: "P8_3_139",
        description: "8x8 Medium #139",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 23:13:03",
        difficulty: "Medium",
        difficulty_score: 31,
        difficulty_factors: {
            logic_fill_score: 14.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 63.3
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0022940635681152
        },
        grid: [
            [0, null, 1, 1, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, 1, 1],
            [null, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_140",
        name: "P8_3_140",
        description: "8x8 Medium #140",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 23:13:05",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 10.2,
            logic_iterations_score: 1.2,
            backtracking_score: 22.7,
            size_score: 10,
            percent_filled_by_logic: 74.5
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 11,
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
            time_taken: 0.002730131149292
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [null, null, 0, null, 0, null, null, null],
            [null, 1, null, 1, null, 1, null, 1],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_141",
        name: "P8_3_141",
        description: "8x8 Hard #141",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 23:13:07",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 28.9,
            size_score: 10,
            percent_filled_by_logic: 26
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 3485,
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
            time_taken: 0.42104291915894
        },
        grid: [
            [null, 0, null, null, 0, null, 1, null],
            [0, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, 1],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_142",
        name: "P8_3_142",
        description: "8x8 Hard #142",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 23:13:09",
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
            backtrack_iterations: 4714,
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
            time_taken: 0.53298807144165
        },
        grid: [
            [null, null, 0, null, 1, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 0, null, 0, 1],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_143",
        name: "P8_3_143",
        description: "8x8 Hard #143",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 23:13:10",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 17.5,
            logic_iterations_score: 2,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 56.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 5,
            backtrack_iterations: 57,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.010113000869751
        },
        grid: [
            [null, null, null, null, 0, null, null, 0],
            [null, 1, null, null, 1, null, null, null],
            [1, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, 1, 1, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_144",
        name: "P8_3_144",
        description: "8x8 Hard #144",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 23:13:12",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.2,
            backtracking_score: 24,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 38,
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
            time_taken: 0.011348009109497
        },
        grid: [
            [null, null, null, 1, null, 1, null, null],
            [null, null, null, null, 0, null, null, null],
            [1, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null],
            [0, null, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_145",
        name: "P8_3_145",
        description: "8x8 Hard #145",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 23:13:13",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 21.7,
            logic_iterations_score: 1.6,
            backtracking_score: 25.5,
            size_score: 10,
            percent_filled_by_logic: 45.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 159,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.021724939346313
        },
        grid: [
            [null, null, 1, null, 0, null, 0, null],
            [null, 1, 1, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, null, 0],
            [null, null, null, null, null, 1, null, 0],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_146",
        name: "P8_3_146",
        description: "8x8 Medium #146",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 23:13:15",
        difficulty: "Medium",
        difficulty_score: 33,
        difficulty_factors: {
            logic_fill_score: 15.8,
            logic_iterations_score: 2,
            backtracking_score: 5.2,
            size_score: 10,
            percent_filled_by_logic: 60.4
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 5,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0052690505981445
        },
        grid: [
            [1, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, 1, null, null],
            [null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null],
            [0, null, 0, null, 0, null, 0, null],
            [null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_147",
        name: "P8_3_147",
        description: "8x8 Hard #147",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 23:13:16",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 28,
            logic_iterations_score: 0.8,
            backtracking_score: 26.9,
            size_score: 10,
            percent_filled_by_logic: 30
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 550,
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
            time_taken: 0.080205917358398
        },
        grid: [
            [0, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [0, null, 0, null, 1, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_148",
        name: "P8_3_148",
        description: "8x8 Hard #148",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 23:13:18",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 27.8,
            logic_iterations_score: 0.8,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 30.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 606,
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
            time_taken: 0.076656103134155
        },
        grid: [
            [0, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, null, 0, null],
            [0, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 1, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_149",
        name: "P8_3_149",
        description: "8x8 Medium #149",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 23:13:19",
        difficulty: "Medium",
        difficulty_score: 30,
        difficulty_factors: {
            logic_fill_score: 12.8,
            logic_iterations_score: 2,
            backtracking_score: 5.2,
            size_score: 10,
            percent_filled_by_logic: 68.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0036449432373047
        },
        grid: [
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, 1, null, null],
            [null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, null],
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, 0],
            [1, null, 0, null, null, null, 0, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_150",
        name: "P8_3_150",
        description: "8x8 Hard #150",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 23:13:21",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.8,
            logic_iterations_score: 0.8,
            backtracking_score: 26.2,
            size_score: 10,
            percent_filled_by_logic: 35.4
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 304,
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
            time_taken: 0.043055057525635
        },
        grid: [
            [null, null, 1, 1, null, 1, null, 1],
            [null, null, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0],
            [null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, 0, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_151",
        name: "P8_3_151",
        description: "8x8 Hard #151",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 23:13:22",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 24.1,
            size_score: 10,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 44,
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
            time_taken: 0.012434005737305
        },
        grid: [
            [0, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null],
            [0, null, null, null, null, 1, null, 0],
            [0, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_152",
        name: "P8_3_152",
        description: "8x8 Hard #152",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 23:13:24",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 48,
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
            time_taken: 0.010122060775757
        },
        grid: [
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1],
            [0, null, null, 0, null, 1, null, null],
            [null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_153",
        name: "P8_3_153",
        description: "8x8 Easy #153",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 23:13:25",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0017890930175781
        },
        grid: [
            [1, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 0, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, 1],
            [1, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, 1, 0],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_154",
        name: "P8_3_154",
        description: "8x8 Hard #154",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 23:13:27",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 18.8,
            logic_iterations_score: 1.2,
            backtracking_score: 23.8,
            size_score: 10,
            percent_filled_by_logic: 53.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 31,
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
            time_taken: 0.009390115737915
        },
        grid: [
            [null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0],
            [0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_155",
        name: "P8_3_155",
        description: "8x8 Hard #155",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 23:13:28",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 1.2,
            backtracking_score: 24.4,
            size_score: 10,
            percent_filled_by_logic: 59.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 56,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0078229904174805
        },
        grid: [
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_156",
        name: "P8_3_156",
        description: "8x8 Hard #156",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 23:13:30",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 55.1
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 30,
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
            time_taken: 0.0061290264129639
        },
        grid: [
            [1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 1, null, null],
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, 0, null, null],
            [null, null, 1, null, null, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_157",
        name: "P8_3_157",
        description: "8x8 Hard #157",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 23:13:32",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 24.5,
            logic_iterations_score: 0.8,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 38.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 28,
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
            time_taken: 0.0092999935150146
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null],
            [1, 0, null, 1, null, null, 0, 1],
            [null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_158",
        name: "P8_3_158",
        description: "8x8 Hard #158",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 23:13:34",
        difficulty: "Hard",
        difficulty_score: 74,
        difficulty_factors: {
            logic_fill_score: 33.5,
            logic_iterations_score: 1.2,
            backtracking_score: 29.4,
            size_score: 10,
            percent_filled_by_logic: 16.3
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 5712,
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
            time_taken: 0.68663001060486
        },
        grid: [
            [1, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, 0],
            [null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null],
            [1, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_159",
        name: "P8_3_159",
        description: "8x8 Hard #159",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 23:13:35",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 35.2,
            logic_iterations_score: 0.8,
            backtracking_score: 7.8,
            size_score: 10,
            percent_filled_by_logic: 12
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 2,
            backtrack_iterations: 14,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0051469802856445
        },
        grid: [
            [null, null, 1, null, null, 0, null, 0],
            [1, 1, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null],
            [null, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_160",
        name: "P8_3_160",
        description: "8x8 Medium #160",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 23:13:37",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 20.4,
            logic_iterations_score: 1.2,
            backtracking_score: 5.6,
            size_score: 10,
            percent_filled_by_logic: 48.9
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0044050216674805
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null],
            [null, null, 0, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, null, null, null],
            [0, null, null, null, 0, null, null, 0],
            [null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_161",
        name: "P8_3_161",
        description: "8x8 Hard #161",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 23:13:38",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 31.7,
            logic_iterations_score: 0.8,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 20.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1351,
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
            time_taken: 0.14544892311096
        },
        grid: [
            [1, null, 1, null, null, null, 1, null],
            [null, 0, 1, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [1, null, null, null, 0, null, null, null],
            [1, 0, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_162",
        name: "P8_3_162",
        description: "8x8 Hard #162",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 23:13:40",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 24.2,
            logic_iterations_score: 1.2,
            backtracking_score: 27.2,
            size_score: 10,
            percent_filled_by_logic: 39.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 780,
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
            time_taken: 0.084335088729858
        },
        grid: [
            [null, null, null, null, null, null, 0, null],
            [null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 1, 1],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_163",
        name: "P8_3_163",
        description: "8x8 Hard #163",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 23:13:42",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 32.5,
            logic_iterations_score: 0.8,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 18.8
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 692,
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
            time_taken: 0.11572217941284
        },
        grid: [
            [null, 1, null, 0, null, null, 0, null],
            [0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, 1],
            [null, null, null, null, 0, 0, null, null],
            [0, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_164",
        name: "P8_3_164",
        description: "8x8 Hard #164",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 23:13:46",
        difficulty: "Hard",
        difficulty_score: 75,
        difficulty_factors: {
            logic_fill_score: 33.7,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 15.7
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 18877,
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
            time_taken: 2.3466620445251
        },
        grid: [
            [0, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null],
            [null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_165",
        name: "P8_3_165",
        description: "8x8 Very Hard #165",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 23:13:48",
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
            backtrack_iterations: 11674,
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
            time_taken: 1.41326212883
        },
        grid: [
            [null, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, null, null, 0],
            [1, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_166",
        name: "P8_3_166",
        description: "8x8 Hard #166",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 23:13:50",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 17,
            logic_iterations_score: 1.6,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 57.4
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 29,
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
            time_taken: 0.010104894638062
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, null, 1],
            [null, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null],
            [1, null, 1, null, 1, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_167",
        name: "P8_3_167",
        description: "8x8 Hard #167",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 23:13:52",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 29.8,
            logic_iterations_score: 0.8,
            backtracking_score: 29.5,
            size_score: 10,
            percent_filled_by_logic: 25.5
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 2,
            backtrack_iterations: 6414,
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
            time_taken: 0.78323292732239
        },
        grid: [
            [null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_168",
        name: "P8_3_168",
        description: "8x8 Very Hard #168",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 23:13:55",
        difficulty: "Very Hard",
        difficulty_score: 76,
        difficulty_factors: {
            logic_fill_score: 35.1,
            logic_iterations_score: 0.8,
            backtracking_score: 30,
            size_score: 10,
            percent_filled_by_logic: 12.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 11189,
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
            time_taken: 1.2581448554993
        },
        grid: [
            [null, null, null, null, 0, null, 1, 0],
            [0, null, null, null, null, null, null, 0],
            [null, 0, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_169",
        name: "P8_3_169",
        description: "8x8 Hard #169",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 23:13:56",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.2,
            backtracking_score: 23.4,
            size_score: 10,
            percent_filled_by_logic: 54.3
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 21,
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
            time_taken: 0.0046610832214355
        },
        grid: [
            [0, null, 0, null, 0, null, 0, null],
            [null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1],
            [null, null, 1, null, 0, 0, null, 1],
            [null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_170",
        name: "P8_3_170",
        description: "8x8 Hard #170",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 23:13:58",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.3,
            logic_iterations_score: 1.2,
            backtracking_score: 27,
            size_score: 10,
            percent_filled_by_logic: 36.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 608,
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
            time_taken: 0.073086023330688
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [1, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null],
            [null, null, 0, null, 0, null, null, 0],
            [0, null, 0, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_171",
        name: "P8_3_171",
        description: "8x8 Hard #171",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 23:14:00",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.3,
            logic_iterations_score: 1.2,
            backtracking_score: 26.8,
            size_score: 10,
            percent_filled_by_logic: 36.7
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 542,
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
            time_taken: 0.069557905197144
        },
        grid: [
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 0],
            [1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 1],
            [0, null, null, 0, null, 0, null, null],
            [null, null, null, 0, null, 1, null, 1],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_172",
        name: "P8_3_172",
        description: "8x8 Hard #172",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 23:14:01",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 23.2,
            logic_iterations_score: 1.6,
            backtracking_score: 25.2,
            size_score: 10,
            percent_filled_by_logic: 42
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 4,
            backtrack_iterations: 117,
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
            time_taken: 0.029420852661133
        },
        grid: [
            [1, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null],
            [1, 1, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [1, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_173",
        name: "P8_3_173",
        description: "8x8 Medium #173",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 23:14:03",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 11.1,
            logic_iterations_score: 1.6,
            backtracking_score: 5.2,
            size_score: 10,
            percent_filled_by_logic: 72.3
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0021710395812988
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, 0, null, null, 0],
            [null, 1, 1, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, 1, null, null],
            [null, 0, 0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_174",
        name: "P8_3_174",
        description: "8x8 Medium #174",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 23:14:04",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 10.2,
            logic_iterations_score: 2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 74.5
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0038890838623047
        },
        grid: [
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, 1, null, 0, null],
            [null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, 1, null, null, 1],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_175",
        name: "P8_3_175",
        description: "8x8 Medium #175",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 23:14:05",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 9.4,
            logic_iterations_score: 2,
            backtracking_score: 22.3,
            size_score: 10,
            percent_filled_by_logic: 76.6
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 5,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0035851001739502
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 1, null],
            [1, null, 1, null, null, 1, 1, null],
            [null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, 1, null, null, null, null],
            [1, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_176",
        name: "P8_3_176",
        description: "8x8 Hard #176",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 23:14:07",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 25.6,
            logic_iterations_score: 1.2,
            backtracking_score: 26,
            size_score: 10,
            percent_filled_by_logic: 36
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 260,
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
            time_taken: 0.031100988388062
        },
        grid: [
            [null, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 1],
            [null, null, null, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_177",
        name: "P8_3_177",
        description: "8x8 Medium #177",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 23:14:08",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 14.1,
            logic_iterations_score: 1.6,
            backtracking_score: 24.3,
            size_score: 10,
            percent_filled_by_logic: 64.7
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 50,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.012063980102539
        },
        grid: [
            [null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_178",
        name: "P8_3_178",
        description: "8x8 Easy #178",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 23:14:10",
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
                fillSandwiches: 4,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023589134216309
        },
        grid: [
            [0, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, 1, 1, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, 0, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_179",
        name: "P8_3_179",
        description: "8x8 Medium #179",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 23:14:11",
        difficulty: "Medium",
        difficulty_score: 30,
        difficulty_factors: {
            logic_fill_score: 14.2,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 10,
            percent_filled_by_logic: 64.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0034899711608887
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 1],
            [null, null, 0, 0, null, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, 1, null, null, null],
            [0, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P8_3_180",
        name: "P8_3_180",
        description: "8x8 Hard #180",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 23:14:13",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 32.7,
            logic_iterations_score: 0.8,
            backtracking_score: 28.3,
            size_score: 10,
            percent_filled_by_logic: 18.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 2093,
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
            time_taken: 0.25010895729065
        },
        grid: [
            [null, 0, null, null, null, null, 0, null],
            [1, null, null, null, null, 1, null, 1],
            [1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null],
            [null, null, null, 0, null, 0, null, null],
            [1, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P8_3_181",
        name: "P8_3_181",
        description: "8x8 Hard #181",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 23:14:15",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 24,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 40,
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
            time_taken: 0.011378049850464
        },
        grid: [
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0],
            [null, null, null, null, null, null, null, 1],
            [0, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_182",
        name: "P8_3_182",
        description: "8x8 Hard #182",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 23:14:16",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 1.6,
            backtracking_score: 24,
            size_score: 10,
            percent_filled_by_logic: 59.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 4,
            backtrack_iterations: 38,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0070929527282715
        },
        grid: [
            [null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, 1, null],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0],
            [0, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_183",
        name: "P8_3_183",
        description: "8x8 Hard #183",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 23:14:18",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 24.2,
            logic_iterations_score: 1.6,
            backtracking_score: 25.3,
            size_score: 10,
            percent_filled_by_logic: 39.6
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 4,
            backtrack_iterations: 135,
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
            time_taken: 0.030128955841064
        },
        grid: [
            [null, 1, null, null, 1, null, 0, null],
            [null, null, 0, null, null, 0, null, 0],
            [null, null, null, 1, null, null, null, null],
            [1, null, null, null, null, 0, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, null, 0, 0, null, 0, null],
            [null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_184",
        name: "P8_3_184",
        description: "8x8 Hard #184",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 23:14:19",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 27.8,
            logic_iterations_score: 0.8,
            backtracking_score: 24.9,
            size_score: 10,
            percent_filled_by_logic: 30.6
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 2,
            backtrack_iterations: 92,
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
            time_taken: 0.021790981292725
        },
        grid: [
            [null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, 0],
            [null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_185",
        name: "P8_3_185",
        description: "8x8 Easy #185",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 23:14:21",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 5,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 87.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012581348419189
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 0, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null],
            [null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, 1, null, 1]
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
        id: "P8_3_186",
        name: "P8_3_186",
        description: "8x8 Hard #186",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 23:14:22",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 1.6,
            backtracking_score: 27.8,
            size_score: 10,
            percent_filled_by_logic: 39.2
        },
        solver_metrics: {
            initial_empty: 51,
            logic_iterations: 4,
            backtrack_iterations: 1264,
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
            time_taken: 0.13731002807617
        },
        grid: [
            [0, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_187",
        name: "P8_3_187",
        description: "8x8 Hard #187",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 23:14:24",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 16.5,
            logic_iterations_score: 1.2,
            backtracking_score: 23.6,
            size_score: 10,
            percent_filled_by_logic: 58.7
        },
        solver_metrics: {
            initial_empty: 46,
            logic_iterations: 3,
            backtrack_iterations: 26,
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
            time_taken: 0.0057899951934814
        },
        grid: [
            [null, null, 0, null, null, 1, null, 0],
            [0, null, null, 0, 0, null, null, null],
            [null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 1],
            [null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_188",
        name: "P8_3_188",
        description: "8x8 Hard #188",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 23:14:25",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 28.8,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 10,
            percent_filled_by_logic: 28
        },
        solver_metrics: {
            initial_empty: 50,
            logic_iterations: 3,
            backtrack_iterations: 28,
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
            time_taken: 0.007789134979248
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 0],
            [1, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_189",
        name: "P8_3_189",
        description: "8x8 Hard #189",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 23:14:27",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 15.3,
            logic_iterations_score: 1.6,
            backtracking_score: 23.8,
            size_score: 10,
            percent_filled_by_logic: 61.7
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 4,
            backtrack_iterations: 31,
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
            time_taken: 0.0065059661865234
        },
        grid: [
            [null, null, 0, null, 0, null, null, 0],
            [1, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null],
            [null, 1, 0, null, null, null, 0, null],
            [1, 1, null, null, null, null, null, null],
            [0, null, null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_190",
        name: "P8_3_190",
        description: "8x8 Hard #190",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 23:14:28",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 26.5,
            size_score: 10,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 382,
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
            time_taken: 0.053550004959106
        },
        grid: [
            [1, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, 1, null, null],
            [0, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 0, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, 1, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_191",
        name: "P8_3_191",
        description: "8x8 Hard #191",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 23:14:30",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 22,
            logic_iterations_score: 1.2,
            backtracking_score: 27.1,
            size_score: 10,
            percent_filled_by_logic: 44.9
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 663,
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
            time_taken: 0.076655864715576
        },
        grid: [
            [null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, 0, null],
            [1, null, null, 0, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, 0],
            [null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_192",
        name: "P8_3_192",
        description: "8x8 Medium #192",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 23:14:31",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 26.4,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 10,
            percent_filled_by_logic: 34
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0029869079589844
        },
        grid: [
            [null, null, 0, null, 0, null, 0, null],
            [0, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 1, null, null],
            [0, null, null, null, 0, null, 0, null],
            [null, null, null, 0, null, null, null, 1],
            [0, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P8_3_193",
        name: "P8_3_193",
        description: "8x8 Hard #193",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 23:14:33",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 31.8,
            logic_iterations_score: 1.2,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 20.4
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 1172,
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
            time_taken: 0.16857314109802
        },
        grid: [
            [0, null, null, 1, null, 0, null, null],
            [null, null, 0, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [1, null, null, null, null, null, 1, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_194",
        name: "P8_3_194",
        description: "8x8 Hard #194",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 23:14:35",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 25,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 37.5
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
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
                tryFillCells: 2
            },
            time_taken: 0.0058889389038086
        },
        grid: [
            [0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, 1, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, 0, 0, null],
            [null, 1, null, 0, 1, null, null, null],
            [null, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_195",
        name: "P8_3_195",
        description: "8x8 Hard #195",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 23:14:36",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 18.3,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 10,
            percent_filled_by_logic: 54.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 3,
            backtrack_iterations: 19,
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
            time_taken: 0.0045239925384521
        },
        grid: [
            [null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, 1],
            [null, 1, null, null, null, null, null, 1],
            [null, null, null, null, 1, 1, null, null],
            [null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_196",
        name: "P8_3_196",
        description: "8x8 Medium #196",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 23:14:38",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 12.2,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 69.4
        },
        solver_metrics: {
            initial_empty: 49,
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
                tryFillCells: 3
            },
            time_taken: 0.0027477741241455
        },
        grid: [
            [null, null, null, null, null, null, null, 0],
            [1, 1, null, null, null, null, null, null],
            [1, null, 0, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, 1, null, null, null],
            [null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P8_3_197",
        name: "P8_3_197",
        description: "8x8 Hard #197",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 23:14:39",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 35.1,
            logic_iterations_score: 1.2,
            backtracking_score: 7.2,
            size_score: 10,
            percent_filled_by_logic: 12.2
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 3,
            backtrack_iterations: 11,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0049529075622559
        },
        grid: [
            [null, null, 1, null, 0, null, 0, null],
            [null, 0, null, null, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P8_3_198",
        name: "P8_3_198",
        description: "8x8 Easy #198",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 23:14:41",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 4.9,
            logic_iterations_score: 2,
            backtracking_score: 3.2,
            size_score: 10,
            percent_filled_by_logic: 87.8
        },
        solver_metrics: {
            initial_empty: 49,
            logic_iterations: 5,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023748874664307
        },
        grid: [
            [null, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, null],
            [1, null, 1, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_199",
        name: "P8_3_199",
        description: "8x8 Hard #199",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 23:14:42",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 28.3,
            logic_iterations_score: 0.8,
            backtracking_score: 27.7,
            size_score: 10,
            percent_filled_by_logic: 29.2
        },
        solver_metrics: {
            initial_empty: 48,
            logic_iterations: 2,
            backtrack_iterations: 1223,
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
            time_taken: 0.1703028678894
        },
        grid: [
            [null, null, null, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1],
            [1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 1, null, 0],
            [null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P8_3_200",
        name: "P8_3_200",
        description: "8x8 Hard #200",
        size: 8,
        source_url: "https://binarypuzzle.com/puzzles.php?size=8&level=3&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 23:14:44",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 19.6,
            logic_iterations_score: 1.2,
            backtracking_score: 23.8,
            size_score: 10,
            percent_filled_by_logic: 51.1
        },
        solver_metrics: {
            initial_empty: 47,
            logic_iterations: 3,
            backtrack_iterations: 32,
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
            time_taken: 0.0059769153594971
        },
        grid: [
            [null, null, null, 1, null, 0, 0, null],
            [1, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 0, 0],
            [1, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL8x8_d3_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL8x8_d3_PUZZLES = LEVEL8x8_d3_PUZZLES;
}
