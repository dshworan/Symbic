/**
 * level 10x10 d1 - 10x10 easy
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

const LEVEL10x10_d1_PUZZLES = [
    {
        id: "P10_1_1",
        name: "P10_1_1",
        description: "10x10 Easy #1",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 23:25:07",
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
            initial_empty: 72,
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
            time_taken: 0.0020790100097656
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, null, 0, null, null, 1, null],
            [null, 0, null, null, 1, null, null, 0, null, 0],
            [null, null, 1, null, null, null, 1, null, null, null],
            [1, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, 0, null],
            [null, null, null, null, 1, 1, null, null, null, 0],
            [null, 0, null, 0, null, null, 1, null, null, 0],
            [0, null, null, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_2",
        name: "P10_1_2",
        description: "10x10 Easy #2",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 23:25:09",
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
            initial_empty: 70,
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
            time_taken: 0.0016698837280273
        },
        grid: [
            [1, null, 0, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 0, 0, null],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, 0, null],
            [null, null, null, null, 1, null, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [0, 0, null, 1, null, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_3",
        name: "P10_1_3",
        description: "10x10 Easy #3",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 23:25:10",
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
            initial_empty: 68,
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
            time_taken: 0.0021941661834717
        },
        grid: [
            [1, 1, null, null, 0, null, null, 1, null, null],
            [1, null, 1, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, null, 0, null, null, 1],
            [null, 0, null, 1, null, 1, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, null, 1, 1, null, 0, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, null, 1, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_4",
        name: "P10_1_4",
        description: "10x10 Easy #4",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 23:25:12",
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
            initial_empty: 65,
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
            time_taken: 0.0013289451599121
        },
        grid: [
            [0, null, 0, null, 1, 1, null, 0, null, 1],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, 1, null, 0, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [1, null, null, null, 1, null, 0, null, null, 0],
            [0, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, 1, null, null],
            [1, 1, null, null, 0, null, null, null, 0, 0],
            [1, null, 1, 1, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_5",
        name: "P10_1_5",
        description: "10x10 Easy #5",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 23:25:15",
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
            initial_empty: 74,
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
            time_taken: 0.003896951675415
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, null, 1, 1, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, 1, 1],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_6",
        name: "P10_1_6",
        description: "10x10 Easy #6",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 23:25:17",
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
            initial_empty: 70,
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
            time_taken: 0.0018579959869385
        },
        grid: [
            [0, null, null, null, 1, null, null, null, 0, 0],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, 1, 1, null, null, 1, null, null, null, 0],
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, 1, 1, null, null, 1, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 0, 0, null, null, null, 0, null, 1, null],
            [1, null, null, null, null, null, 0, 0, null, 0],
            [null, 1, null, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_7",
        name: "P10_1_7",
        description: "10x10 Easy #7",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 23:25:18",
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
            initial_empty: 67,
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
            time_taken: 0.0019168853759766
        },
        grid: [
            [0, null, 1, 1, null, 1, 1, null, null, 0],
            [null, null, 1, null, null, null, 1, null, null, 0],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, 0, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, 1, 1, null, 1, null, null, null, 0, null],
            [1, null, 0, 0, null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_8",
        name: "P10_1_8",
        description: "10x10 Easy #8",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 23:25:20",
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
            initial_empty: 67,
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
            time_taken: 0.0011379718780518
        },
        grid: [
            [null, null, 1, null, null, 0, null, 0, null, 0],
            [0, 0, null, null, 1, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 0, null, 0],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, 1, null, null],
            [null, null, null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null, null, 1],
            [null, null, 0, null, null, null, 1, null, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [1, null, 0, 0, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_9",
        name: "P10_1_9",
        description: "10x10 Easy #9",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 23:25:21",
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
            initial_empty: 66,
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
            time_taken: 0.001147985458374
        },
        grid: [
            [null, 0, 0, null, 0, 0, null, null, null, 1],
            [null, null, null, null, 0, null, 1, 1, null, 1],
            [null, 1, 1, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, null, 1, null, null, null, 0, 1],
            [1, null, 0, 0, null, 0, null, null, null, null],
            [1, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 1, 1, null, null, null, 0, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_10",
        name: "P10_1_10",
        description: "10x10 Easy #10",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 23:25:23",
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
            initial_empty: 65,
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
            time_taken: 0.00073695182800293
        },
        grid: [
            [1, null, null, null, null, 1, 1, null, null, 0],
            [null, 1, null, 1, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, 1, null, 0, null, 1],
            [0, 0, null, 0, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, 0, null, 0, null, 0, null, null, null, 1],
            [null, null, 1, null, null, null, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_11",
        name: "P10_1_11",
        description: "10x10 Easy #11",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 23:25:25",
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
            initial_empty: 69,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0018491744995117
        },
        grid: [
            [0, null, null, 1, null, 1, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 0, null, null, null, 1],
            [1, null, null, null, null, 0, 0, null, null, 1],
            [1, 1, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, null, 0, null, null, 1, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [0, 0, null, 1, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_12",
        name: "P10_1_12",
        description: "10x10 Easy #12",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 23:25:26",
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
            initial_empty: 67,
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
            [0, null, null, 1, 1, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, 1, null, 0, 0, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null, 0, 0],
            [null, 1, 1, null, 0, null, 1, null, null, 0],
            [0, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, 0, null, 0, null, null, 1, null],
            [1, null, null, 0, 0, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_13",
        name: "P10_1_13",
        description: "10x10 Easy #13",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 23:25:28",
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
            initial_empty: 71,
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
            time_taken: 0.0023458003997803
        },
        grid: [
            [null, null, 1, null, 0, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [0, 1, null, 0, null, null, null, null, null, 1],
            [null, 1, null, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, 1, null, 0, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_14",
        name: "P10_1_14",
        description: "10x10 Easy #14",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 23:25:29",
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
            initial_empty: 68,
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
            time_taken: 0.0011460781097412
        },
        grid: [
            [null, null, 0, 0, null, null, 1, null, null, 0],
            [0, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [1, null, null, 1, null, null, null, 0, null, null],
            [1, null, 0, null, null, 1, null, 0, null, 0],
            [null, 0, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 0],
            [0, 0, null, 1, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_15",
        name: "P10_1_15",
        description: "10x10 Easy #15",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 23:25:31",
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
            initial_empty: 70,
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
            time_taken: 0.0016641616821289
        },
        grid: [
            [null, null, null, 0, null, null, 1, 1, null, 0],
            [null, null, 1, null, 1, null, null, null, null, 0],
            [0, null, 1, null, null, 0, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null, 0, null],
            [null, null, null, 0, 0, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null, null, null, null, 0],
            [null, 0, 0, null, null, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_16",
        name: "P10_1_16",
        description: "10x10 Easy #16",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 23:25:33",
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
            initial_empty: 68,
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
            time_taken: 0.002039909362793
        },
        grid: [
            [1, 1, null, 0, null, 0, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, 0, null, 1, null, null, null, null, null, 1],
            [0, null, 1, null, null, 1, null, null, null, null],
            [0, null, null, 0, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 0, 1, null, null, 1, null, null, 1],
            [1, null, 1, 1, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_17",
        name: "P10_1_17",
        description: "10x10 Easy #17",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 23:25:34",
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
            initial_empty: 63,
            logic_iterations: 4,
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
                tryFillCells: 2
            },
            time_taken: 0.0021390914916992
        },
        grid: [
            [0, null, null, 1, null, 1, null, null, null, 1],
            [0, 0, null, 0, null, 1, 1, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, 0, null, null, 1, null, null, null, 1],
            [null, 1, null, null, 0, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [1, null, null, 0, null, 0, null, null, 1, null],
            [null, 0, null, null, 1, null, null, 0, null, null],
            [1, null, 1, null, null, null, null, null, null, 0],
            [1, null, null, 1, 1, null, 0, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_18",
        name: "P10_1_18",
        description: "10x10 Easy #18",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 23:25:36",
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
            initial_empty: 70,
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
            time_taken: 0.0012640953063965
        },
        grid: [
            [1, null, null, null, null, null, 0, null, 1, null],
            [null, 0, null, null, 0, null, 0, null, null, null],
            [0, 0, null, 1, null, 1, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 1, null, null, 0],
            [null, 0, 0, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, 1, null, 0, 0],
            [null, 1, null, 0, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_19",
        name: "P10_1_19",
        description: "10x10 Easy #19",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 23:25:37",
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
            initial_empty: 73,
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
            time_taken: 0.0022141933441162
        },
        grid: [
            [null, 0, 0, null, 1, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1, 1, null],
            [1, null, null, null, null, null, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, 1, 1, null, 0, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_20",
        name: "P10_1_20",
        description: "10x10 Easy #20",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 23:25:39",
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
            initial_empty: 69,
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
            time_taken: 0.0014028549194336
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, 1, 1, null, 0, null, null, 0, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [0, null, null, 1, null, 1, null, 1, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [1, null, 0, 0, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [0, null, null, 0, null, null, 1, null, null, 1],
            [null, 1, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_21",
        name: "P10_1_21",
        description: "10x10 Easy #21",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 23:25:40",
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
            initial_empty: 68,
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
            time_taken: 0.0012469291687012
        },
        grid: [
            [1, null, null, null, null, null, 0, null, 1, null],
            [null, null, 1, 1, null, 1, null, null, null, null],
            [1, null, 1, null, null, null, 0, 0, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, null, null, 1],
            [0, null, null, null, null, 0, null, null, null, 1],
            [null, 0, null, null, null, null, 1, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [0, null, 0, null, 1, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_22",
        name: "P10_1_22",
        description: "10x10 Easy #22",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 23:25:42",
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
            initial_empty: 67,
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
            time_taken: 0.001039981842041
        },
        grid: [
            [null, 1, null, 0, null, 1, 1, null, null, 0],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [1, 0, null, 0, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [0, null, 0, null, null, null, 1, 1, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null, null, null],
            [null, 0, null, 1, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_23",
        name: "P10_1_23",
        description: "10x10 Easy #23",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 23:25:44",
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
            initial_empty: 70,
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
            time_taken: 0.0015809535980225
        },
        grid: [
            [null, 1, 1, null, 1, 1, null, 0, null, 0],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, 1, null, 1, null, null, null, null],
            [1, null, 1, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [0, null, 1, null, null, 0, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_24",
        name: "P10_1_24",
        description: "10x10 Easy #24",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 23:25:45",
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
            initial_empty: 66,
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
            time_taken: 0.0016739368438721
        },
        grid: [
            [0, null, 1, 1, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, 1, null, 0, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, 1],
            [0, null, 1, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, 0, null, null, null, 0, null, 0, 1],
            [null, 1, null, null, null, 0, null, null, null, null],
            [1, null, 0, 0, null, null, 1, 1, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_25",
        name: "P10_1_25",
        description: "10x10 Easy #25",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 23:25:47",
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
            initial_empty: 70,
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
            time_taken: 0.0023429393768311
        },
        grid: [
            [null, null, null, null, 1, null, 0, null, null, null],
            [1, null, null, null, 1, null, 0, 0, null, 0],
            [1, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 1, null, null, null, null, null, 0, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, 1, null, null, 1, null, 1, null, null],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [1, null, 1, 1, null, null, 1, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_26",
        name: "P10_1_26",
        description: "10x10 Easy #26",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 23:25:48",
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
            initial_empty: 73,
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
            time_taken: 0.0028560161590576
        },
        grid: [
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, 0, 0, null, null, null, 0, 1],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, 1, null, null, null, null, 0, null, null],
            [1, null, null, 1, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_27",
        name: "P10_1_27",
        description: "10x10 Easy #27",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 23:25:50",
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
            initial_empty: 76,
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
            time_taken: 0.0045828819274902
        },
        grid: [
            [null, 0, null, null, 1, null, 0, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null, 0, null],
            [null, null, 0, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, 1, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_28",
        name: "P10_1_28",
        description: "10x10 Easy #28",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 23:25:51",
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
            initial_empty: 70,
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
            time_taken: 0.0014429092407227
        },
        grid: [
            [0, null, null, null, null, 1, null, null, 1, null],
            [null, 1, 1, null, 0, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, 0, null, null, 1],
            [null, null, 0, null, 1, null, null, null, 1, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, 0, 0, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [1, 1, null, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_29",
        name: "P10_1_29",
        description: "10x10 Easy #29",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 23:25:53",
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
            initial_empty: 74,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0087599754333496
        },
        grid: [
            [null, null, null, null, null, 1, null, null, 0, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [0, null, 0, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, null, 0, 0],
            [1, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 0, null, 1, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_30",
        name: "P10_1_30",
        description: "10x10 Easy #30",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 23:25:55",
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
            initial_empty: 68,
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
            time_taken: 0.0016641616821289
        },
        grid: [
            [null, null, 1, null, 1, null, 1, 0, null, 0],
            [null, 0, 0, null, null, 0, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null, 0, null],
            [0, null, null, null, 1, null, null, 1, null, null],
            [null, 1, null, 0, null, null, 0, null, null, 1],
            [0, null, 0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [0, null, null, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_31",
        name: "P10_1_31",
        description: "10x10 Easy #31",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 23:25:56",
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
            initial_empty: 67,
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
            time_taken: 0.0011959075927734
        },
        grid: [
            [1, 1, null, 1, null, null, 0, 0, null, null],
            [null, null, null, null, null, 1, 0, null, 0, 1],
            [null, 1, 1, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [0, 0, null, null, 1, 1, null, 1, 1, null],
            [null, null, null, null, 1, null, null, 1, null, 0],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 0, 0, null, null, null, 1],
            [null, null, 1, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_32",
        name: "P10_1_32",
        description: "10x10 Easy #32",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 23:25:58",
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
            initial_empty: 69,
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
            time_taken: 0.0022721290588379
        },
        grid: [
            [0, null, 0, null, null, null, 1, null, null, null],
            [0, null, null, null, 0, 0, null, null, 1, 1],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [1, 0, null, 0, null, null, null, null, null, 0],
            [1, null, null, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_33",
        name: "P10_1_33",
        description: "10x10 Easy #33",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 23:25:59",
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
            initial_empty: 72,
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
            time_taken: 0.002453088760376
        },
        grid: [
            [null, 1, 1, null, null, 1, null, null, 0, null],
            [null, 1, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [1, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, 0, 0, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, 0, 0, null],
            [null, 0, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_34",
        name: "P10_1_34",
        description: "10x10 Easy #34",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 23:26:01",
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
            initial_empty: 67,
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
            time_taken: 0.0015730857849121
        },
        grid: [
            [null, 0, null, null, 1, null, null, 1, 1, null],
            [null, 0, 0, null, null, 0, null, null, 1, null],
            [1, null, null, 1, null, null, 0, null, null, 0],
            [null, 1, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, 1, null, 0, 0, null],
            [0, null, null, 0, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, 1, null, null],
            [null, null, 1, 1, null, 0, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_35",
        name: "P10_1_35",
        description: "10x10 Easy #35",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 23:26:02",
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
            initial_empty: 72,
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
            time_taken: 0.0025260448455811
        },
        grid: [
            [null, null, null, 0, 0, null, null, 0, null, null],
            [null, 1, null, null, 0, null, null, null, 1, null],
            [0, null, null, 1, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_36",
        name: "P10_1_36",
        description: "10x10 Easy #36",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 23:26:04",
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
            initial_empty: 69,
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
                tryFillCells: 4
            },
            time_taken: 0.0025548934936523
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0, 0, null],
            [0, 1, null, null, null, null, 1, null, 0, null],
            [null, 1, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, 1, 1, null],
            [null, 1, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [0, 0, null, 1, null, 1, null, 0, null, null],
            [0, 0, null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_37",
        name: "P10_1_37",
        description: "10x10 Easy #37",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 23:26:05",
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
            initial_empty: 71,
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
            time_taken: 0.0050110816955566
        },
        grid: [
            [1, 1, null, null, null, null, 1, null, 1, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, null, 0, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, 1, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, 1],
            [null, null, null, 0, 0, null, 1, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_38",
        name: "P10_1_38",
        description: "10x10 Easy #38",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 23:26:07",
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
            initial_empty: 71,
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
            time_taken: 0.0019361972808838
        },
        grid: [
            [null, 0, 0, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, null, 1, null],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, 1, null, null, null, null, 0],
            [null, null, 0, null, null, null, 0, null, 0, null],
            [null, 1, null, null, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, 1, null, 0, 0, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_39",
        name: "P10_1_39",
        description: "10x10 Easy #39",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 23:26:09",
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
            initial_empty: 72,
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
            time_taken: 0.0044879913330078
        },
        grid: [
            [null, 0, null, 1, null, null, null, 0, 0, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, 1],
            [1, null, null, null, 1, 1, null, 0, null, null],
            [null, 1, null, 0, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_40",
        name: "P10_1_40",
        description: "10x10 Easy #40",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 23:26:10",
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
            initial_empty: 73,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0072381496429443
        },
        grid: [
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, 0, null, null, 1, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [1, 1, null, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, 0, 0],
            [1, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, 1, null, 0, null, null],
            [0, null, null, 1, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_41",
        name: "P10_1_41",
        description: "10x10 Easy #41",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 23:26:12",
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
            initial_empty: 70,
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
            time_taken: 0.0011110305786133
        },
        grid: [
            [null, null, 1, null, null, 1, 1, null, null, null],
            [1, null, 1, 0, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, 0, 0, null],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, 0, 0, null, 1, null],
            [1, null, 1, null, null, 0, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null, null, null],
            [0, null, 0, null, null, null, null, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_42",
        name: "P10_1_42",
        description: "10x10 Easy #42",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 23:26:14",
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
            initial_empty: 65,
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
            time_taken: 0.0010838508605957
        },
        grid: [
            [null, 0, 0, null, null, 1, 1, null, null, 0],
            [1, null, null, null, null, 1, null, null, 0, 0],
            [null, null, null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, 0, null, 0, null, null, 1],
            [null, 1, null, 1, null, null, 0, null, null, null],
            [0, null, null, null, null, 0, null, null, 1, null],
            [null, null, 1, null, 1, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, null, null, 1],
            [null, 0, null, 0, null, null, 1, null, null, 1],
            [1, null, null, 0, null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_43",
        name: "P10_1_43",
        description: "10x10 Easy #43",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 23:26:15",
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
            initial_empty: 67,
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
            time_taken: 0.0012741088867188
        },
        grid: [
            [null, 0, null, 1, 1, null, 1, null, 1, 0],
            [null, null, null, null, null, 0, null, null, 1, 1],
            [1, 1, null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 0, 0, null, 0, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [0, null, 1, null, null, 1, null, null, null, 0],
            [null, 1, 1, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_44",
        name: "P10_1_44",
        description: "10x10 Easy #44",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 23:26:17",
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
            initial_empty: 66,
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
            time_taken: 0.0013158321380615
        },
        grid: [
            [1, null, 1, 1, null, null, 0, 0, null, 0],
            [0, null, null, null, null, null, null, 0, null, 1],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, 0, null, 0, null, null, 1, null, 1],
            [1, null, 0, null, null, null, 0, null, null, null],
            [1, null, null, 0, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [0, 0, null, null, 1, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_45",
        name: "P10_1_45",
        description: "10x10 Easy #45",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 23:26:18",
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
            initial_empty: 66,
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
            time_taken: 0.0014951229095459
        },
        grid: [
            [null, 1, null, 0, null, null, 0, null, 0, 1],
            [null, 0, null, null, null, 0, null, null, null, null],
            [1, null, null, 1, 1, null, 0, null, 0, 0],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, 0, null, null, 0, null],
            [null, 1, null, 1, null, 0, 0, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, 0, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_46",
        name: "P10_1_46",
        description: "10x10 Easy #46",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 23:26:20",
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
            initial_empty: 72,
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
            time_taken: 0.0016980171203613
        },
        grid: [
            [null, null, 0, null, null, 1, null, null, null, 0],
            [null, null, 0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [0, 0, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, 0, null, null, null, 1, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, 1, null, 1, 1, null, null, null, 0],
            [0, null, null, null, null, 0, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_47",
        name: "P10_1_47",
        description: "10x10 Easy #47",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 23:26:22",
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
            initial_empty: 71,
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
            time_taken: 0.0019569396972656
        },
        grid: [
            [null, null, null, 0, null, 0, null, null, 1, null],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [0, null, 0, null, 1, null, 1, null, null, 0],
            [null, null, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, 1, null],
            [1, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, 0, null, 1, null, 1],
            [0, null, null, 1, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_48",
        name: "P10_1_48",
        description: "10x10 Easy #48",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 23:26:23",
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
            initial_empty: 73,
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
            time_taken: 0.0011301040649414
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, null, 0, null, 0],
            [1, null, null, null, null, 1, 1, null, null, 0],
            [null, 1, null, 1, null, 1, null, null, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, 1, null, 0, 0, null, null, 1, 1, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_49",
        name: "P10_1_49",
        description: "10x10 Easy #49",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 23:26:25",
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
            initial_empty: 66,
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
            time_taken: 0.002312183380127
        },
        grid: [
            [null, 1, null, null, 0, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 0],
            [0, null, null, 1, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, 1, 1, null, null, 0, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, 1, null, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, 1, 1, null],
            [null, 1, null, null, null, null, 0, null, null, 1],
            [null, 0, 0, null, 0, 0, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_50",
        name: "P10_1_50",
        description: "10x10 Easy #50",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 23:26:26",
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
            initial_empty: 66,
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
            time_taken: 0.0019168853759766
        },
        grid: [
            [1, 1, null, 1, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, 1, null, 1, null],
            [1, null, null, 1, null, null, 1, null, null, 0],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null, 0, null],
            [null, null, 1, null, null, null, 1, 1, null, null],
            [1, null, null, 0, null, null, 1, null, null, 0],
            [0, 0, null, null, 1, null, null, null, 0, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_51",
        name: "P10_1_51",
        description: "10x10 Easy #51",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 23:26:28",
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
            initial_empty: 73,
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
            time_taken: 0.0019559860229492
        },
        grid: [
            [null, null, 0, null, 0, null, null, 1, 1, null],
            [null, 1, 1, null, 0, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [0, 1, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_52",
        name: "P10_1_52",
        description: "10x10 Easy #52",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 23:26:30",
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
            initial_empty: 66,
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
            time_taken: 0.0010831356048584
        },
        grid: [
            [1, null, 1, 1, null, null, null, null, 0, 0],
            [null, null, null, 1, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, 1, null, 1, 0],
            [null, null, 0, null, 0, null, null, null, 1, null],
            [null, 1, null, null, 0, null, 1, null, null, null],
            [null, 1, null, 0, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, null, 1, 1],
            [null, null, null, 1, 1, null, 0, null, null, 1],
            [null, 1, null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_53",
        name: "P10_1_53",
        description: "10x10 Easy #53",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 23:26:31",
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
            initial_empty: 64,
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
            time_taken: 0.0017800331115723
        },
        grid: [
            [0, null, 0, null, 1, 1, null, 1, 1, null],
            [null, 1, null, null, null, null, 0, null, 1, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [0, null, null, null, 1, null, null, null, 1, 1],
            [null, null, 0, null, null, null, 1, null, null, null],
            [0, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null, 0, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, 1, 1, null, 0, null, null, null, 0],
            [1, null, 1, 1, null, 0, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_54",
        name: "P10_1_54",
        description: "10x10 Easy #54",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 23:26:33",
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
            initial_empty: 70,
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
            time_taken: 0.0016908645629883
        },
        grid: [
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, 0, 0, null, null, 1],
            [null, null, null, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, 1, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 1, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [1, null, null, null, 0, null, 1, null, null, 0],
            [null, 0, 0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_55",
        name: "P10_1_55",
        description: "10x10 Easy #55",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 23:26:35",
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
            initial_empty: 69,
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
            time_taken: 0.0022201538085938
        },
        grid: [
            [null, null, 1, null, 1, null, 0, 0, null, 0],
            [null, 1, 1, null, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, 0, 1],
            [null, 0, null, null, null, 0, null, 1, null, 1],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, 1, null, null, 0, 0, null, null, 1, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_56",
        name: "P10_1_56",
        description: "10x10 Easy #56",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 23:26:36",
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
            initial_empty: 70,
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
            time_taken: 0.0018229484558105
        },
        grid: [
            [null, 1, 1, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, 1, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, 0, null, null, null, null, 1, 1, null, 1],
            [0, 0, null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, null, 0, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, 0, 0, null, 0, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_57",
        name: "P10_1_57",
        description: "10x10 Easy #57",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 23:26:38",
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
            initial_empty: 70,
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
            time_taken: 0.0017049312591553
        },
        grid: [
            [null, null, 1, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, 0, 0, null, 0, null, null, null, null, 1],
            [1, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [1, null, 0, 0, null, null, null, null, null, 0],
            [1, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, 0],
            [0, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_58",
        name: "P10_1_58",
        description: "10x10 Easy #58",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 23:26:39",
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
            initial_empty: 70,
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
            time_taken: 0.0021898746490479
        },
        grid: [
            [1, null, 1, null, 1, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, 1, null, null, 0],
            [0, 1, null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, null, null, 0, null, null, 1],
            [null, null, null, 1, null, 1, null, null, 0, null],
            [1, null, null, null, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_59",
        name: "P10_1_59",
        description: "10x10 Easy #59",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 23:26:41",
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
            initial_empty: 71,
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
            time_taken: 0.0021288394927979
        },
        grid: [
            [1, null, null, 0, 0, null, null, 1, null, null],
            [null, 0, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, 0, null, null],
            [null, 0, null, 0, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, 1, null, null, null],
            [0, null, null, 1, null, null, null, 0, null, null],
            [0, null, 0, 1, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_60",
        name: "P10_1_60",
        description: "10x10 Easy #60",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 23:26:43",
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
            initial_empty: 65,
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
            [null, 0, null, null, 0, null, 0, null, null, 1],
            [0, 0, null, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, null, 1, 0],
            [null, null, null, null, 0, null, 1, null, null, 0],
            [0, null, 1, null, 0, null, 1, 1, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, 0],
            [1, null, null, null, 1, null, null, null, null, 0],
            [null, null, 0, 0, null, 1, null, null, 0, null],
            [1, 1, null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_61",
        name: "P10_1_61",
        description: "10x10 Easy #61",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 23:26:44",
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
            initial_empty: 70,
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
            time_taken: 0.00086307525634766
        },
        grid: [
            [1, 1, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, 1, 1, null, null, 1, 1, null, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [0, null, null, 1, null, null, 0, null, 1, null],
            [0, null, null, 1, null, 1, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_62",
        name: "P10_1_62",
        description: "10x10 Easy #62",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 23:26:46",
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
            initial_empty: 66,
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
            time_taken: 0.0011508464813232
        },
        grid: [
            [0, null, null, null, 1, 1, null, 1, 1, null],
            [0, 0, null, null, 1, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, null, null, 0],
            [0, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, null, 1, 1, null, null, 0],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1],
            [1, 1, null, null, 0, 0, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_63",
        name: "P10_1_63",
        description: "10x10 Easy #63",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 23:26:47",
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
            initial_empty: 69,
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
            time_taken: 0.0018081665039062
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, 0, null],
            [1, null, null, 0, 0, null, 0, null, null, 1],
            [1, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 0, null, 0, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, null, 0, null],
            [null, null, 0, null, 1, null, 0, null, null, null],
            [1, null, null, null, null, null, null, 1, null, 0],
            [null, null, 1, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_64",
        name: "P10_1_64",
        description: "10x10 Easy #64",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 23:26:49",
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
            initial_empty: 75,
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
            time_taken: 0.00325608253479
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, 0],
            [0, 1, null, null, null, null, 1, 1, null, null],
            [0, null, null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, 1, 0, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, 0, null, null, 0],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_65",
        name: "P10_1_65",
        description: "10x10 Easy #65",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 23:26:51",
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
            initial_empty: 69,
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
            time_taken: 0.0020859241485596
        },
        grid: [
            [null, null, 0, null, null, 1, null, null, null, 0],
            [1, 0, null, null, null, null, 0, null, null, null],
            [1, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [0, null, 1, null, null, null, null, null, 1, 1],
            [null, null, 1, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [1, null, null, null, null, null, 1, 1, null, 0],
            [1, null, 0, null, null, null, 1, null, null, 0],
            [null, 1, null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_66",
        name: "P10_1_66",
        description: "10x10 Easy #66",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 23:26:52",
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
            initial_empty: 70,
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
            time_taken: 0.0013399124145508
        },
        grid: [
            [null, null, null, 0, 0, null, 1, null, null, 0],
            [null, 0, null, null, null, null, 1, 1, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 0, 0, null, 0, null],
            [1, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [0, 0, null, null, null, 1, null, 0, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_67",
        name: "P10_1_67",
        description: "10x10 Easy #67",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 23:26:54",
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
            initial_empty: 69,
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
            time_taken: 0.0023431777954102
        },
        grid: [
            [null, null, 0, null, null, null, 0, 0, null, 1],
            [null, 1, null, null, null, 0, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, 1, 0, null, null, 1, null, null],
            [1, null, null, null, 0, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, 0, null],
            [1, null, 1, null, 1, null, 1, 1, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_68",
        name: "P10_1_68",
        description: "10x10 Easy #68",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 23:26:55",
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
            initial_empty: 69,
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
            time_taken: 0.0036530494689941
        },
        grid: [
            [null, 1, null, null, null, 1, null, 0, 0, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, 1, 1, null, null, 0, 0],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, 0, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [1, null, 1, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_69",
        name: "P10_1_69",
        description: "10x10 Easy #69",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 23:26:57",
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
            initial_empty: 70,
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
            time_taken: 0.0019330978393555
        },
        grid: [
            [null, 1, 1, null, null, 0, null, 1, null, null],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, null, null, 1, null, null, 0, null, null, null],
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [1, null, null, 0, null, null, 1, 1, null, null],
            [null, 0, null, null, null, 1, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_70",
        name: "P10_1_70",
        description: "10x10 Easy #70",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 23:26:58",
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
            initial_empty: 69,
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
            time_taken: 0.0011749267578125
        },
        grid: [
            [1, 0, null, 0, null, null, null, null, 1, null],
            [null, 0, null, null, null, 1, 1, null, null, 0],
            [null, null, 1, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 1, 1, null, 1, 1, null, 0, null],
            [null, null, null, null, 0, null, null, 1, null, 1],
            [null, 0, 0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_71",
        name: "P10_1_71",
        description: "10x10 Easy #71",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 23:27:00",
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
            initial_empty: 67,
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
            time_taken: 0.0024440288543701
        },
        grid: [
            [null, 0, 0, null, null, null, 1, null, 1, null],
            [null, 0, null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, 1, 1],
            [null, 1, 1, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, 1, null, 0, null, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, 1, 1, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_72",
        name: "P10_1_72",
        description: "10x10 Easy #72",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 23:27:01",
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
            initial_empty: 72,
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
                tryFillCells: 2
            },
            time_taken: 0.0030179023742676
        },
        grid: [
            [0, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, 0, null, 1, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [1, 1, null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [0, null, null, 1, null, null, null, null, null, 1],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, 0, null, 0, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_73",
        name: "P10_1_73",
        description: "10x10 Easy #73",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 23:27:03",
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
            initial_empty: 74,
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
            time_taken: 0.0029561519622803
        },
        grid: [
            [0, null, null, 1, null, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, 0, 1, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [1, null, null, 0, null, null, null, null, null, null],
            [1, null, null, 0, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, 1, 1, null, null, null, 1, null],
            [null, null, 0, null, 1, null, null, 1, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_74",
        name: "P10_1_74",
        description: "10x10 Easy #74",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 23:27:10",
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
            initial_empty: 65,
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
            time_taken: 0.0012459754943848
        },
        grid: [
            [null, 1, 1, null, 1, null, null, 0, null, 0],
            [1, 1, null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [0, null, 0, null, null, null, null, 1, null, null],
            [0, 0, null, 1, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, 0, null, null, 1, null, 1],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [1, null, null, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_75",
        name: "P10_1_75",
        description: "10x10 Easy #75",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 23:27:11",
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
            initial_empty: 65,
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
            time_taken: 0.0023269653320312
        },
        grid: [
            [1, null, 1, null, 1, 1, null, 0, null, 0],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, 1, null, null, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null, null, 1, null, null],
            [null, null, 0, null, 1, null, null, 1, null, 0],
            [null, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, 0, null, 1, null],
            [0, 1, null, null, null, 1, null, null, null, null],
            [0, 1, null, null, 0, 0, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_76",
        name: "P10_1_76",
        description: "10x10 Easy #76",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 23:27:13",
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
            initial_empty: 65,
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
            time_taken: 0.001507043838501
        },
        grid: [
            [null, 0, 0, null, 0, null, null, 1, null, 1],
            [null, null, null, null, 0, null, 0, null, null, 1],
            [null, 0, null, 1, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [1, null, 0, null, null, null, 1, null, 1, 0],
            [1, null, null, 0, null, 0, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, 0, null, 0],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_77",
        name: "P10_1_77",
        description: "10x10 Easy #77",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 23:27:14",
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
            initial_empty: 70,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0027370452880859
        },
        grid: [
            [null, null, 1, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, 0, 0, null, 1],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, 1, 1, null, 0, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, 0, null, null, null, 1],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, 0, 0, null, 0, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_78",
        name: "P10_1_78",
        description: "10x10 Easy #78",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 23:27:16",
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
            initial_empty: 70,
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
            time_taken: 0.0056400299072266
        },
        grid: [
            [0, 0, null, 1, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1, null, 1],
            [0, null, 0, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [1, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, 1],
            [1, null, null, 0, null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_79",
        name: "P10_1_79",
        description: "10x10 Easy #79",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 23:27:18",
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
            initial_empty: 72,
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
            time_taken: 0.0016570091247559
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, 0, null, 1, null, null, null],
            [0, null, null, null, null, 1, null, 0, null, null],
            [0, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [0, 0, null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, 1, null, null, null, 0, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, 0, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_80",
        name: "P10_1_80",
        description: "10x10 Easy #80",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 23:27:20",
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
            initial_empty: 72,
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
                tryFillCells: 3
            },
            time_taken: 0.0054290294647217
        },
        grid: [
            [null, 0, null, 1, null, null, 0, 1, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [1, 1, null, null, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, null, 0, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_81",
        name: "P10_1_81",
        description: "10x10 Easy #81",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 23:27:22",
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
            initial_empty: 68,
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
            time_taken: 0.0014448165893555
        },
        grid: [
            [0, null, 1, 1, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 1, null, 1, 0],
            [null, null, 1, null, null, null, null, null, null, 0],
            [1, null, null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [0, null, null, 1, null, null, null, null, null, 0],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [1, null, 0, 0, null, null, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_82",
        name: "P10_1_82",
        description: "10x10 Easy #82",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 23:27:23",
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
            initial_empty: 64,
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
            time_taken: 0.0012509822845459
        },
        grid: [
            [1, null, null, 0, null, null, 1, null, 0, 0],
            [null, 1, null, null, 0, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [0, null, null, 1, 1, null, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null, 1, 1],
            [null, 0, 0, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [0, 1, null, null, 0, null, null, 0, null, null],
            [0, null, null, null, null, 1, 1, null, null, 0],
            [null, 0, null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_83",
        name: "P10_1_83",
        description: "10x10 Easy #83",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 23:27:25",
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
            initial_empty: 68,
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
            time_taken: 0.0014941692352295
        },
        grid: [
            [0, null, null, 1, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, 1, null, null, 1, null, 0, 0, null, null],
            [1, 1, null, 0, null, null, null, null, 1, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, 1, null, 0, null, null, null],
            [null, null, 1, null, null, 0, 0, null, null, 0],
            [1, null, null, 0, null, null, null, null, 0, null],
            [null, 0, null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_84",
        name: "P10_1_84",
        description: "10x10 Easy #84",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 23:27:26",
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
            initial_empty: 68,
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
            time_taken: 0.0015759468078613
        },
        grid: [
            [1, null, null, 0, 0, null, null, 1, null, 1],
            [null, 0, null, null, null, null, null, 1, null, 0],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, 0, null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, null, 0, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 0],
            [0, 1, null, 1, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_85",
        name: "P10_1_85",
        description: "10x10 Easy #85",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 23:27:28",
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
            initial_empty: 74,
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
            time_taken: 0.0028488636016846
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0, 0, null],
            [null, 0, 0, null, null, 1, 1, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, 1, null, 0, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_86",
        name: "P10_1_86",
        description: "10x10 Easy #86",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 23:27:30",
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
            initial_empty: 71,
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
            time_taken: 0.0020089149475098
        },
        grid: [
            [1, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [1, 1, null, 0, null, null, null, 0, null, null],
            [1, 1, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [0, null, null, 1, 1, null, null, null, 0, null],
            [0, null, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, 0, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_87",
        name: "P10_1_87",
        description: "10x10 Easy #87",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 23:27:31",
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
            initial_empty: 68,
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
            time_taken: 0.0011911392211914
        },
        grid: [
            [0, 1, null, null, 0, null, 1, null, null, 1],
            [1, null, null, 0, 0, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null, 1, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, null, 0, 0, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [1, null, 1, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_88",
        name: "P10_1_88",
        description: "10x10 Easy #88",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 23:27:33",
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
            initial_empty: 69,
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
            time_taken: 0.0028009414672852
        },
        grid: [
            [null, 0, null, null, null, null, 1, null, 1, 1],
            [1, null, null, null, 0, 0, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null, 0, null],
            [null, 1, 1, null, null, null, null, null, null, 0],
            [null, 1, 1, null, 1, 1, null, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_89",
        name: "P10_1_89",
        description: "10x10 Easy #89",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 23:27:34",
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
            initial_empty: 67,
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
            time_taken: 0.00064587593078613
        },
        grid: [
            [1, 1, null, 0, null, 0, null, 1, 1, null],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, 1, null, null, 1, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, 1, 1, null, null, null],
            [0, null, 1, 1, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, 0, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_90",
        name: "P10_1_90",
        description: "10x10 Easy #90",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 23:27:36",
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
            initial_empty: 72,
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
            time_taken: 0.0025959014892578
        },
        grid: [
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, 1, null, 0, null, 1, null, 0, 0, null],
            [null, 1, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 0, null, null, 1, null],
            [null, 1, null, null, null, 0, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_91",
        name: "P10_1_91",
        description: "10x10 Easy #91",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 23:27:38",
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
            initial_empty: 70,
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
            time_taken: 0.0023260116577148
        },
        grid: [
            [null, null, 0, null, null, 0, 0, null, null, null],
            [0, null, null, 1, null, 0, null, 1, 1, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, 1],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, 0, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, 0, 0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_92",
        name: "P10_1_92",
        description: "10x10 Easy #92",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 23:27:39",
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
            initial_empty: 71,
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
            time_taken: 0.0015890598297119
        },
        grid: [
            [0, null, 1, 1, null, null, 0, null, 0, 1],
            [0, 1, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 0, null, 0],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_93",
        name: "P10_1_93",
        description: "10x10 Easy #93",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 23:27:41",
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
            initial_empty: 72,
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
            time_taken: 0.0024011135101318
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, 0, null, 1, null, 0, 0, null],
            [1, null, null, 0, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0, 1, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, 0, 0, null, 0, 0, null, null, null],
            [null, null, null, 1, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_94",
        name: "P10_1_94",
        description: "10x10 Easy #94",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 23:27:43",
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
            initial_empty: 69,
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
            time_taken: 0.00087404251098633
        },
        grid: [
            [1, null, null, 0, 0, null, null, null, null, 1],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, 1, null, null, 1, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, 1, null],
            [0, null, 1, null, null, 1, null, 0, null, null],
            [0, null, null, 0, null, null, null, null, 1, 1],
            [null, 1, null, 1, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_95",
        name: "P10_1_95",
        description: "10x10 Easy #95",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 23:27:44",
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
            initial_empty: 73,
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
            time_taken: 0.0024418830871582
        },
        grid: [
            [null, null, null, 1, 1, null, null, 1, 1, null],
            [1, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, null, 0, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, 1, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, null, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, null, 1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_96",
        name: "P10_1_96",
        description: "10x10 Easy #96",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 23:27:47",
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
            initial_empty: 72,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0027050971984863
        },
        grid: [
            [null, 0, null, 1, null, null, null, null, null, 1],
            [1, null, null, null, null, 1, null, 0, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [1, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, null, 1, 1, null],
            [0, 1, null, null, null, null, 0, 0, null, null],
            [0, null, 0, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_97",
        name: "P10_1_97",
        description: "10x10 Easy #97",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 23:27:48",
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
            initial_empty: 72,
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
            time_taken: 0.0019519329071045
        },
        grid: [
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, 1, null, null, null, 0, 0, null, null, 0],
            [null, 1, null, 1, 1, null, null, null, null, 0],
            [null, null, 0, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 0, null, 1, null, 0, 0, null, null, null],
            [1, null, null, 1, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_98",
        name: "P10_1_98",
        description: "10x10 Easy #98",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 23:27:50",
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
            initial_empty: 72,
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
            time_taken: 0.0037848949432373
        },
        grid: [
            [null, null, null, 1, null, 0, null, 1, null, null],
            [null, null, null, 1, null, 0, null, 1, 1, null],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, 1, null, null],
            [1, null, 0, null, null, null, null, null, 0, null],
            [0, null, null, 0, null, null, 1, null, null, 1],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, 1, null, 0, 0, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_99",
        name: "P10_1_99",
        description: "10x10 Easy #99",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 23:27:52",
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
            initial_empty: 72,
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
            time_taken: 0.0024149417877197
        },
        grid: [
            [null, null, null, null, 0, 0, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [0, null, null, null, 1, 1, null, 0, null, 0],
            [null, null, 1, null, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, 0, 0, null, null, 1],
            [null, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_100",
        name: "P10_1_100",
        description: "10x10 Easy #100",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 23:27:53",
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
            initial_empty: 72,
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
            time_taken: 0.0013909339904785
        },
        grid: [
            [0, null, null, null, null, 0, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, 1, 1, null, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, 1, null, 1, null, 1, null, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [1, null, null, 0, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_101",
        name: "P10_1_101",
        description: "10x10 Easy #101",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 23:27:55",
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
            initial_empty: 69,
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
            time_taken: 0.0015320777893066
        },
        grid: [
            [null, null, 1, null, null, null, 1, null, null, 0],
            [0, null, null, 1, null, null, null, 0, null, null],
            [null, 0, 0, null, 1, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null, null, 1],
            [1, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, null, 1, null, 0, null, null],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [1, 1, null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_102",
        name: "P10_1_102",
        description: "10x10 Easy #102",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 23:27:56",
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
            initial_empty: 66,
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
            time_taken: 0.0010321140289307
        },
        grid: [
            [0, null, 1, 1, null, null, null, 1, 1, null],
            [0, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, null, 0],
            [null, null, 0, null, 1, 1, null, 0, null, 0],
            [0, 0, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, 0, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [1, null, null, 0, null, null, null, null, 0, null],
            [1, 1, null, 0, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_103",
        name: "P10_1_103",
        description: "10x10 Easy #103",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 23:27:58",
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
            initial_empty: 67,
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
            time_taken: 0.0012428760528564
        },
        grid: [
            [1, null, null, 0, 0, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, null, 0, 0, null, null, 1],
            [0, null, null, 1, null, null, 0, null, null, null],
            [null, 1, null, null, 0, null, null, 1, null, 0],
            [0, null, 0, null, null, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_104",
        name: "P10_1_104",
        description: "10x10 Easy #104",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 23:27:59",
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
            initial_empty: 68,
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
            time_taken: 0.0017008781433105
        },
        grid: [
            [0, 0, null, null, 1, 1, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, 0],
            [1, 1, null, null, 0, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, 0, null, 0, 1, null, null, 0, 0, null],
            [0, null, null, null, null, null, 1, null, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_105",
        name: "P10_1_105",
        description: "10x10 Easy #105",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 23:28:01",
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
            initial_empty: 74,
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
            time_taken: 0.0023908615112305
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [1, null, 0, 0, null, 0, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, 0, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_106",
        name: "P10_1_106",
        description: "10x10 Easy #106",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 23:28:02",
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
            initial_empty: 66,
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
            time_taken: 0.00092577934265137
        },
        grid: [
            [0, null, 1, 1, null, null, null, 1, null, 1],
            [null, 0, null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null, null, null],
            [1, null, 0, 0, null, 1, null, null, 0, 0],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, null, 0, null, null, 1, null, null, null, 0],
            [null, 1, null, null, 0, null, 0, null, 1, null],
            [1, null, null, 0, null, null, 0, null, null, null],
            [null, 1, 1, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_107",
        name: "P10_1_107",
        description: "10x10 Easy #107",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 23:28:04",
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
            initial_empty: 70,
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
            time_taken: 0.0021061897277832
        },
        grid: [
            [null, null, null, null, null, 1, 1, null, null, 0],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, 1, 1, null, null, null, null, 0, 0],
            [null, null, null, null, null, 0, 0, null, null, null],
            [0, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, 0, null, 0, null, null, 1],
            [null, null, null, null, 0, null, null, null, 1, null],
            [0, null, null, 0, null, null, null, null, 1, 1],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, 0, 0, null, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_108",
        name: "P10_1_108",
        description: "10x10 Easy #108",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 23:28:05",
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
            initial_empty: 71,
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
            time_taken: 0.0027439594268799
        },
        grid: [
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, 0, 1],
            [null, 0, null, null, null, 0, 0, null, null, 1],
            [0, null, 0, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, 1, null],
            [null, null, null, 0, 1, null, null, null, null, 0],
            [1, null, null, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_109",
        name: "P10_1_109",
        description: "10x10 Easy #109",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 23:28:07",
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
            initial_empty: 72,
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
            time_taken: 0.0023350715637207
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, 0, null, 1, null, null, 0, null, null, null],
            [null, 0, null, 1, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, null, 0],
            [null, 1, null, 1, null, 1, null, null, 1, null],
            [1, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_110",
        name: "P10_1_110",
        description: "10x10 Easy #110",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 23:28:09",
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
            initial_empty: 73,
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
            time_taken: 0.0021989345550537
        },
        grid: [
            [null, 1, 1, null, null, null, 1, 1, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 0, null, 1, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, 1, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [1, null, null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_111",
        name: "P10_1_111",
        description: "10x10 Easy #111",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 23:28:10",
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
            initial_empty: 70,
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
            time_taken: 0.0025131702423096
        },
        grid: [
            [1, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, 1, null, 1, null, 1],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, 0, null, null, 1],
            [0, null, 1, 1, null, null, null, 0, null, 1],
            [null, 0, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, 1, 1, null, null, 0, 1, null, 1, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_112",
        name: "P10_1_112",
        description: "10x10 Easy #112",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 23:28:12",
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
            initial_empty: 70,
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
            time_taken: 0.0018529891967773
        },
        grid: [
            [1, null, null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, null, null, 0, 1, null, 1],
            [null, 0, null, null, null, null, null, 1, null, 1],
            [null, null, 1, null, 1, null, 1, null, null, null],
            [0, null, null, null, 1, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 0, null, 1, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_113",
        name: "P10_1_113",
        description: "10x10 Easy #113",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 23:28:13",
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
            initial_empty: 70,
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
            time_taken: 0.002371072769165
        },
        grid: [
            [0, null, null, null, null, 0, null, null, 1, null],
            [null, null, 1, null, null, 0, null, 0, null, null],
            [1, null, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null, null, 0],
            [null, null, 0, null, null, 1, null, 0, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 0, null],
            [1, null, 1, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_114",
        name: "P10_1_114",
        description: "10x10 Easy #114",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 23:28:15",
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
            initial_empty: 70,
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
            time_taken: 0.0021741390228271
        },
        grid: [
            [null, null, 1, null, 0, null, null, 1, null, null],
            [0, 1, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, 1],
            [1, null, null, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, null, 1, null, null, 1, null, null],
            [1, 1, null, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_115",
        name: "P10_1_115",
        description: "10x10 Easy #115",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 23:28:16",
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
            initial_empty: 72,
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
            time_taken: 0.0014979839324951
        },
        grid: [
            [1, null, null, 0, 0, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, 0, null, 0],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, null, 0, 0, null, 0, null],
            [null, 1, 1, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_116",
        name: "P10_1_116",
        description: "10x10 Easy #116",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 23:28:18",
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
            initial_empty: 67,
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
            time_taken: 0.001417875289917
        },
        grid: [
            [null, 0, null, null, null, 1, null, null, 0, null],
            [0, null, null, 0, 0, null, null, 1, null, null],
            [null, null, 1, null, null, null, 1, null, null, 0],
            [null, null, null, null, 0, 0, null, null, 1, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, 0, null, null, 1],
            [0, null, null, 1, 1, null, null, null, 0, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, 0, null, 1, null, null, null, null],
            [0, 0, null, 0, null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_117",
        name: "P10_1_117",
        description: "10x10 Easy #117",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 23:28:19",
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
            initial_empty: 71,
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
            time_taken: 0.0021851062774658
        },
        grid: [
            [null, 1, null, null, null, null, 0, null, null, 1],
            [null, null, 0, null, null, 1, null, null, null, null],
            [0, null, 0, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, 1, 0],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [1, null, null, null, 1, null, 0, null, 0, 0],
            [1, 1, null, 0, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_118",
        name: "P10_1_118",
        description: "10x10 Easy #118",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 23:28:21",
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
            initial_empty: 70,
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
            time_taken: 0.0031771659851074
        },
        grid: [
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, 0, null, null, null, 1],
            [null, null, 1, null, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, 0, null, null, null, null, 1],
            [1, null, 0, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, 1, 1, null, null, 0, 0, null, 1],
            [1, null, null, null, null, null, 1, null, 1, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_119",
        name: "P10_1_119",
        description: "10x10 Easy #119",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 23:28:23",
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
            initial_empty: 71,
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
            time_taken: 0.0022130012512207
        },
        grid: [
            [null, 1, 1, null, null, 0, null, 1, 1, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, 0, 0, null, 1, null, null, 1, null, null],
            [null, 0, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, 0, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_120",
        name: "P10_1_120",
        description: "10x10 Easy #120",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 23:28:24",
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
            initial_empty: 73,
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
            time_taken: 0.0021700859069824
        },
        grid: [
            [0, null, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, 1, null, 0],
            [1, null, 1, null, null, null, 0, null, null, null],
            [1, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, 1, null, null],
            [0, 1, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null, 1, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_121",
        name: "P10_1_121",
        description: "10x10 Easy #121",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 23:28:26",
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
            initial_empty: 69,
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
            time_taken: 0.0016939640045166
        },
        grid: [
            [1, null, null, 0, null, null, 0, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, null, 1, null, null, 0, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, 0, null],
            [0, null, null, 1, null, 1, 1, null, null, null],
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, 0, null],
            [1, 1, null, null, null, 0, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_122",
        name: "P10_1_122",
        description: "10x10 Easy #122",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 23:28:27",
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
            initial_empty: 69,
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
            time_taken: 0.0015020370483398
        },
        grid: [
            [null, 1, 1, null, 1, null, null, 0, 0, null],
            [null, null, null, 0, null, null, null, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, null, 1, 1, null],
            [0, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [1, 1, null, null, null, 0, null, null, null, null],
            [1, 1, null, null, null, 0, null, 0, null, null],
            [null, null, null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_123",
        name: "P10_1_123",
        description: "10x10 Easy #123",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 23:28:29",
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
            initial_empty: 70,
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
            time_taken: 0.0020430088043213
        },
        grid: [
            [null, null, null, 0, null, null, null, null, 1, null],
            [0, null, null, null, 1, null, 1, null, null, 0],
            [null, null, null, 0, 1, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, 0, 1],
            [1, null, null, null, 0, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, 1, null, null, null, 0, 0],
            [null, null, null, null, 1, 1, null, null, 0, 0],
            [0, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_124",
        name: "P10_1_124",
        description: "10x10 Easy #124",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 23:28:31",
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
            initial_empty: 68,
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
            time_taken: 0.0012509822845459
        },
        grid: [
            [0, null, 0, null, null, 1, 1, null, null, 0],
            [0, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0, null, 0],
            [null, null, null, null, null, 0, 0, null, null, 1],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, 0, null, 0, null, null, 0, null, null, 1],
            [1, null, null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_125",
        name: "P10_1_125",
        description: "10x10 Easy #125",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 23:28:33",
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
            initial_empty: 71,
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
            time_taken: 0.0014820098876953
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, null],
            [0, null, 1, null, 0, null, null, null, null, 1],
            [0, null, null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, 0, null, null, null, 0],
            [null, null, null, 1, 1, null, 1, null, 0, 0],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, 1, null, 1],
            [null, 1, 1, null, null, null, null, 1, null, 1],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_126",
        name: "P10_1_126",
        description: "10x10 Easy #126",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 23:28:34",
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
            initial_empty: 68,
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
            time_taken: 0.0014369487762451
        },
        grid: [
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, 0, 1, null, null, 1, 1, null, 1],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, 0, null, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null, null, 0],
            [0, null, null, 1, null, null, 1, null, null, 0],
            [0, null, 0, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_127",
        name: "P10_1_127",
        description: "10x10 Easy #127",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 23:28:36",
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
            initial_empty: 72,
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
            time_taken: 0.001227855682373
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [0, null, null, null, null, 1, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 0, null, 0],
            [null, null, null, 1, null, null, 1, null, null, null],
            [1, 1, null, null, null, 0, null, null, null, 1],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, 1, null, null, 1, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_128",
        name: "P10_1_128",
        description: "10x10 Easy #128",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 23:28:37",
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
            initial_empty: 72,
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
            time_taken: 0.0016109943389893
        },
        grid: [
            [0, 0, null, 1, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, null, null, 1, null, 1],
            [1, null, null, null, 1, 1, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, null, 1, 1, null],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_129",
        name: "P10_1_129",
        description: "10x10 Easy #129",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 23:28:39",
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
            initial_empty: 71,
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
            time_taken: 0.0015659332275391
        },
        grid: [
            [0, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, 1, 1],
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, 0, null, 1, null, 0, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, 0, null, 0, 1],
            [1, null, 1, null, null, null, null, null, null, null],
            [1, null, 1, null, 1, 0, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_130",
        name: "P10_1_130",
        description: "10x10 Easy #130",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 23:28:40",
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
            initial_empty: 68,
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
            time_taken: 0.0022051334381104
        },
        grid: [
            [null, null, 1, null, null, null, 0, 0, null, 0],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, 0],
            [1, null, null, 0, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null, 0, 0],
            [null, null, 0, null, null, null, 1, null, null, 0],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, 1],
            [null, null, null, 0, null, 0, 1, null, null, null],
            [0, 1, null, null, null, null, 0, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_131",
        name: "P10_1_131",
        description: "10x10 Easy #131",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 23:28:42",
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
            initial_empty: 68,
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
            time_taken: 0.0027871131896973
        },
        grid: [
            [0, null, null, null, 0, null, null, null, null, null],
            [1, 0, null, null, null, 1, null, 0, null, 0],
            [null, 0, null, null, null, 1, null, null, null, 0],
            [1, null, null, 0, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, null, 1, null, 1, null],
            [1, null, 1, null, 0, null, null, 0, null, null],
            [null, null, 0, null, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, 0, null, null, null],
            [0, null, null, null, 1, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_132",
        name: "P10_1_132",
        description: "10x10 Easy #132",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 23:28:44",
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
            initial_empty: 70,
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
            time_taken: 0.0011820793151855
        },
        grid: [
            [null, 1, 1, null, null, 0, null, null, null, 1],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, 1, null],
            [1, 1, null, 0, null, 1, null, null, null, 0],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, null, 0, 0, null, null, null, 1],
            [0, 0, null, null, 0, null, 1, 1, null, 1],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_133",
        name: "P10_1_133",
        description: "10x10 Easy #133",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 23:28:45",
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
            initial_empty: 71,
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
            time_taken: 0.0018248558044434
        },
        grid: [
            [null, 0, null, null, null, 1, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, 1, null, 1],
            [0, null, 0, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, 0, 0, null, null, 0],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, 0, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_134",
        name: "P10_1_134",
        description: "10x10 Easy #134",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 23:28:47",
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
            initial_empty: 72,
            logic_iterations: 5,
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
            time_taken: 0.0031969547271729
        },
        grid: [
            [null, null, 1, null, null, 1, null, null, 0, 0],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, null, 0, null, null, 1, 1, null, null, 0],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, null, 1, 1],
            [1, null, 1, null, null, 0, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_135",
        name: "P10_1_135",
        description: "10x10 Easy #135",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 23:28:49",
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
            initial_empty: 70,
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
            time_taken: 0.0012290477752686
        },
        grid: [
            [0, null, 0, 1, null, 1, null, null, null, 1],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, 0, null, 1, null],
            [null, null, null, null, 1, 1, null, null, null, 0],
            [null, null, 0, null, null, null, null, 1, null, null],
            [1, null, 0, null, null, null, 1, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_136",
        name: "P10_1_136",
        description: "10x10 Easy #136",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 23:28:50",
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
            initial_empty: 71,
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
            time_taken: 0.0024058818817139
        },
        grid: [
            [null, null, 1, null, 1, null, null, 0, 0, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, 0, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, 1, null, null],
            [1, 1, null, 0, null, null, null, 0, 0, null],
            [null, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, 0],
            [0, 0, null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_137",
        name: "P10_1_137",
        description: "10x10 Easy #137",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 23:28:52",
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
            initial_empty: 71,
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
            time_taken: 0.0012450218200684
        },
        grid: [
            [1, null, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, 0, 0, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 0, 0, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, 0, null, null, 1],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_138",
        name: "P10_1_138",
        description: "10x10 Easy #138",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 23:28:53",
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
            initial_empty: 69,
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
            time_taken: 0.0020039081573486
        },
        grid: [
            [1, null, null, null, null, 0, null, null, null, 0],
            [null, null, 0, 0, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 1, 0, null],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, 1, null, null, 0, null, 1, null, null, null],
            [null, 1, null, 1, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 1, null, 1],
            [null, 0, null, 0, null, null, 1, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_139",
        name: "P10_1_139",
        description: "10x10 Easy #139",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 23:28:55",
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
            initial_empty: 79,
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
            time_taken: 0.0037150382995605
        },
        grid: [
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, 0, 0, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_140",
        name: "P10_1_140",
        description: "10x10 Easy #140",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 23:28:56",
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
            initial_empty: 70,
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
            time_taken: 0.0015058517456055
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0, 0, null],
            [null, 0, 0, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1, 1, null],
            [null, 0, null, 0, null, null, 1, null, null, 0],
            [null, null, 1, null, 0, null, null, null, 1, null],
            [null, 0, null, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [0, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_141",
        name: "P10_1_141",
        description: "10x10 Easy #141",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 23:28:58",
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
            initial_empty: 76,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0042641162872314
        },
        grid: [
            [null, null, null, 0, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 0, null, null, 0, 0, null],
            [0, null, null, 1, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, 0, 0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_142",
        name: "P10_1_142",
        description: "10x10 Easy #142",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 23:29:00",
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
            initial_empty: 74,
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
            time_taken: 0.0030360221862793
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, 0],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, 0, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null, 0, null],
            [0, 1, null, 1, null, null, null, 1, null, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, 0, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_143",
        name: "P10_1_143",
        description: "10x10 Easy #143",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 23:29:01",
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
            initial_empty: 70,
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
            time_taken: 0.0011990070343018
        },
        grid: [
            [null, null, 0, null, null, null, 0, null, null, null],
            [0, null, 0, null, 1, 1, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, 0, null, null, null, 1],
            [1, 1, null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 1, null, 0, 0, null, 1, null],
            [0, 0, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 1, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_144",
        name: "P10_1_144",
        description: "10x10 Easy #144",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 23:29:03",
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
            initial_empty: 64,
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
            time_taken: 0.0012791156768799
        },
        grid: [
            [0, 1, null, 1, null, null, null, null, 0, null],
            [null, null, 1, null, 1, null, null, null, 0, 0],
            [0, null, null, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [0, null, null, null, 0, null, null, 1, null, 1],
            [null, null, null, 0, null, 0, null, null, 1, null],
            [null, 1, 1, null, null, null, 0, null, 1, 1],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, 1, null, null, 0, null],
            [null, 0, 0, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_145",
        name: "P10_1_145",
        description: "10x10 Easy #145",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 23:29:04",
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
            initial_empty: 71,
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
            time_taken: 0.0037510395050049
        },
        grid: [
            [1, null, null, 0, null, 0, 1, null, null, null],
            [1, null, 0, null, null, null, null, null, 0, 1],
            [null, null, 0, null, null, 1, null, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, 0, 0, null, null, null],
            [null, null, 1, null, 1, null, 0, null, null, 0],
            [0, null, 1, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_146",
        name: "P10_1_146",
        description: "10x10 Easy #146",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 23:29:06",
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
            initial_empty: 70,
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
            time_taken: 0.0021839141845703
        },
        grid: [
            [1, null, null, 1, null, null, null, 0, null, 0],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, 1, 1, null, 1, null, 0, 0],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, 0, 0, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_147",
        name: "P10_1_147",
        description: "10x10 Easy #147",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 23:29:07",
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
            initial_empty: 69,
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
            time_taken: 0.0014312267303467
        },
        grid: [
            [1, null, 0, 0, null, null, null, 0, 0, null],
            [null, 1, 1, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, 0, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, 1, null, null, 0, null, null],
            [0, null, null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, 1, 1, null, null, null, 1, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_148",
        name: "P10_1_148",
        description: "10x10 Easy #148",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 23:29:09",
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
            initial_empty: 68,
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
            time_taken: 0.0020091533660889
        },
        grid: [
            [0, null, null, null, null, null, 1, null, 1, null],
            [0, 0, null, 0, 0, null, null, null, null, 1],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, 0, null, 0, 0],
            [null, null, 1, null, 1, null, null, null, null, 0],
            [null, 0, null, 1, null, null, null, 0, null, null],
            [null, 0, null, null, null, 0, null, null, 1, null],
            [1, null, null, 0, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, 1, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_149",
        name: "P10_1_149",
        description: "10x10 Easy #149",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 23:29:10",
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
            initial_empty: 74,
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
                tryFillCells: 1
            },
            time_taken: 0.0011579990386963
        },
        grid: [
            [null, 1, null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, 1, null, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [0, null, null, 1, null, 0, null, null, null, 1],
            [0, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_150",
        name: "P10_1_150",
        description: "10x10 Easy #150",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 23:29:13",
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
            initial_empty: 73,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0033590793609619
        },
        grid: [
            [null, 0, 0, null, null, 0, null, 1, null, null],
            [null, null, null, null, 1, null, null, 0, null, 0],
            [null, 0, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, 1, null, 0, null, null, 0],
            [0, null, 0, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_151",
        name: "P10_1_151",
        description: "10x10 Easy #151",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 23:29:14",
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
            initial_empty: 71,
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
            time_taken: 0.0015559196472168
        },
        grid: [
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [1, null, 1, 0, null, 0, null, null, 1, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, null, 1, null, null, 1],
            [null, 1, null, 1, null, 0, null, null, 0, null],
            [null, 1, null, null, null, 0, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_152",
        name: "P10_1_152",
        description: "10x10 Easy #152",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 23:29:16",
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
            initial_empty: 69,
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
            time_taken: 0.001471996307373
        },
        grid: [
            [null, null, 1, null, null, 0, null, null, null, 0],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, 1, null, 0, null, null, 1],
            [null, null, 0, 0, null, null, 1, null, null, 1],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, 0, 0, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [0, 1, null, null, null, 1, 1, null, null, 0],
            [null, null, 1, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_153",
        name: "P10_1_153",
        description: "10x10 Easy #153",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 23:29:17",
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
            initial_empty: 73,
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
            time_taken: 0.0026161670684814
        },
        grid: [
            [null, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, 0, 0, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 0, null, null, null, 0, 0, null, null, null],
            [null, null, null, 1, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 1, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [0, null, 0, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, 0, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_154",
        name: "P10_1_154",
        description: "10x10 Easy #154",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 23:29:19",
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
            initial_empty: 72,
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
            time_taken: 0.0016880035400391
        },
        grid: [
            [null, 0, 0, null, 0, null, null, null, 1, null],
            [null, 0, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, 1, 1, null, null, 0, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, 0, 0, null, 1, null, null, null],
            [null, null, null, 0, 0, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_155",
        name: "P10_1_155",
        description: "10x10 Easy #155",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 23:29:21",
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
            initial_empty: 71,
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
            time_taken: 0.0019240379333496
        },
        grid: [
            [null, 0, 0, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [0, null, null, 1, 1, null, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, null, 1, null, 0, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_156",
        name: "P10_1_156",
        description: "10x10 Easy #156",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 23:29:22",
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
            initial_empty: 72,
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
            time_taken: 0.0016429424285889
        },
        grid: [
            [0, null, null, 1, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, 1, null, null, null, null, 0],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, 0, null, null],
            [null, 1, 1, null, null, null, null, 0, null, 0],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, 0],
            [1, null, 0, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_157",
        name: "P10_1_157",
        description: "10x10 Easy #157",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 23:29:24",
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
            initial_empty: 69,
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
            time_taken: 0.0022890567779541
        },
        grid: [
            [0, null, null, null, 0, 0, null, 1, null, 1],
            [null, 0, null, null, null, null, null, 1, null, null],
            [1, 0, null, null, 0, 0, null, null, 0, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null, null, 0],
            [1, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, 1, null, null, null, 1],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [0, null, null, null, 1, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_158",
        name: "P10_1_158",
        description: "10x10 Easy #158",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 23:29:25",
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
            initial_empty: 70,
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
            time_taken: 0.0024709701538086
        },
        grid: [
            [1, 0, null, 0, 1, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 0, 1],
            [null, 0, null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, 0, null, 0, null, 0],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [0, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, null, 0, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_159",
        name: "P10_1_159",
        description: "10x10 Easy #159",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 23:29:27",
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
            initial_empty: 73,
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
            time_taken: 0.0015738010406494
        },
        grid: [
            [null, 1, 1, null, null, 0, null, 1, 1, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, 1, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, 1],
            [null, null, 0, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_160",
        name: "P10_1_160",
        description: "10x10 Easy #160",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 23:29:29",
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
            initial_empty: 71,
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
            time_taken: 0.001168966293335
        },
        grid: [
            [null, null, null, 1, null, 0, 0, null, null, null],
            [0, 1, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, 0, null, 0, null, 0, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_161",
        name: "P10_1_161",
        description: "10x10 Easy #161",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 23:29:30",
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
            initial_empty: 71,
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
            time_taken: 0.0011200904846191
        },
        grid: [
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, 1, null, 0, 0, null, null, null, 1, null],
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, 0, 0, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, 0],
            [null, null, 1, 1, null, null, null, null, 1, 0],
            [0, null, null, null, null, 1, null, null, null, null],
            [0, null, 0, null, 1, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_162",
        name: "P10_1_162",
        description: "10x10 Easy #162",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 23:29:32",
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
            initial_empty: 75,
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
            time_taken: 0.0027060508728027
        },
        grid: [
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, 1, null, 0, null, null, null, 1],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [1, 1, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, 1, null, 0],
            [null, null, null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, null, 1, null],
            [null, null, null, 0, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_163",
        name: "P10_1_163",
        description: "10x10 Easy #163",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 23:29:34",
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
            initial_empty: 67,
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
            time_taken: 0.0015261173248291
        },
        grid: [
            [null, null, null, null, 1, 1, null, 0, null, 0],
            [null, 1, null, null, 1, 1, null, null, 0, 0],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null, 1, null],
            [0, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, 1, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, 0, 0, null, null],
            [null, null, 0, null, 0, 0, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_164",
        name: "P10_1_164",
        description: "10x10 Easy #164",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 23:29:35",
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
            initial_empty: 72,
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
            time_taken: 0.0013530254364014
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, 0],
            [1, null, 1, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, 0, 0, null, null, null],
            [0, null, 1, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 0, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, 1, null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_165",
        name: "P10_1_165",
        description: "10x10 Easy #165",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 23:29:37",
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
            initial_empty: 71,
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
            time_taken: 0.0034480094909668
        },
        grid: [
            [null, 0, null, null, 1, null, null, 1, null, null],
            [1, 0, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [0, null, 0, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, 0, 0, null, 0, null, 0, null, null, null],
            [1, 1, null, null, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_166",
        name: "P10_1_166",
        description: "10x10 Easy #166",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 23:29:39",
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
            initial_empty: 68,
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
            time_taken: 0.0018520355224609
        },
        grid: [
            [null, null, 1, null, 1, null, 1, null, 1, 0],
            [1, 0, null, null, 1, null, null, 0, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 0, null, null, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, 0, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, null, null, 0, null],
            [1, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_167",
        name: "P10_1_167",
        description: "10x10 Easy #167",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 23:29:40",
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
            initial_empty: 71,
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
            time_taken: 0.0022640228271484
        },
        grid: [
            [null, null, 1, null, null, null, null, 0, 0, null],
            [1, null, 1, 1, null, null, 0, 0, null, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, 1, null, null, null, null],
            [1, null, 1, 0, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, 1, 1, null],
            [0, null, 0, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_168",
        name: "P10_1_168",
        description: "10x10 Easy #168",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 23:29:42",
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
            initial_empty: 71,
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
            time_taken: 0.0024421215057373
        },
        grid: [
            [null, null, 0, null, null, 1, null, 0, 0, null],
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [0, null, 1, null, 1, null, null, null, null, 0],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, null, null, null, 0, null],
            [1, null, null, 0, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, 0, null, 1, null],
            [null, null, 1, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_169",
        name: "P10_1_169",
        description: "10x10 Easy #169",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 23:29:44",
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
            initial_empty: 70,
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
            time_taken: 0.0019707679748535
        },
        grid: [
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 0, null, 1, null, null],
            [null, null, 1, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, 0, null, 1, null],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [0, null, null, 1, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, null, 1, null, 0],
            [null, 0, null, 1, null, null, 0, null, null, null],
            [null, 1, null, 0, null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_170",
        name: "P10_1_170",
        description: "10x10 Easy #170",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 23:29:45",
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
            initial_empty: 68,
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
            time_taken: 0.0013818740844727
        },
        grid: [
            [null, 1, null, 0, null, null, null, 0, null, null],
            [0, null, null, 1, 0, null, null, null, 1, null],
            [null, 0, null, null, null, 1, null, null, 1, 1],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [1, null, null, null, null, 0, 0, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [1, null, 1, 1, null, null, 0, null, null, 0],
            [null, null, 1, null, null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_171",
        name: "P10_1_171",
        description: "10x10 Easy #171",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 23:29:47",
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
            initial_empty: 66,
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
            time_taken: 0.0029370784759521
        },
        grid: [
            [null, null, 1, null, 1, 1, null, 0, null, 0],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [1, null, 0, null, null, null, 1, null, 0, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [1, null, 1, null, null, null, 1, null, null, 0],
            [1, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, 1, null, null, 0, null, 0, null, 1, 1],
            [null, null, 0, null, 0, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_172",
        name: "P10_1_172",
        description: "10x10 Easy #172",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 23:29:48",
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
            initial_empty: 67,
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
            time_taken: 0.0013689994812012
        },
        grid: [
            [0, 0, null, 1, null, 0, null, 1, null, null],
            [null, 0, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, 1],
            [1, null, null, 0, 0, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, 0, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, 1, 0],
            [null, null, null, 0, null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_173",
        name: "P10_1_173",
        description: "10x10 Easy #173",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 23:29:50",
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
            initial_empty: 68,
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
            time_taken: 0.001025915145874
        },
        grid: [
            [null, null, 1, null, 1, null, null, 0, 0, null],
            [1, null, 1, 1, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [0, null, 0, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, 1, null, null, 0, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_174",
        name: "P10_1_174",
        description: "10x10 Easy #174",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 23:29:51",
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
            initial_empty: 68,
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
            time_taken: 0.0018241405487061
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 0, null],
            [0, 0, null, null, null, 0, null, null, null, 1],
            [0, null, 1, null, null, 0, null, null, null, 1],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, 1, 1, null, null, 1, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 1, 1, null, null, 0, null],
            [null, 0, null, null, null, null, 0, null, null, 1],
            [null, null, 1, 0, null, null, null, null, null, null],
            [0, null, null, null, 0, 0, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_175",
        name: "P10_1_175",
        description: "10x10 Easy #175",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 23:29:53",
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
            initial_empty: 68,
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
            time_taken: 0.00098490715026855
        },
        grid: [
            [null, null, 0, null, null, 1, 1, null, null, 0],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, 0, null, null, 1],
            [null, null, null, null, null, null, 0, 1, null, 1],
            [null, null, null, 0, null, 0, null, null, null, null],
            [0, null, null, 0, null, 1, null, null, null, 1],
            [0, 0, null, null, null, null, null, null, 1, 1],
            [null, null, 1, 1, null, 1, null, 0, null, null],
            [1, null, null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_176",
        name: "P10_1_176",
        description: "10x10 Easy #176",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 23:29:54",
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
            initial_empty: 67,
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
            time_taken: 0.0017030239105225
        },
        grid: [
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, 1, 1, null, null, null, 1],
            [null, 0, null, null, null, null, null, 1, 1, null],
            [1, null, null, 0, null, 1, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null, 0, 0],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, 0, 0, null],
            [1, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_177",
        name: "P10_1_177",
        description: "10x10 Easy #177",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 23:29:56",
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
            initial_empty: 68,
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
            time_taken: 0.0011539459228516
        },
        grid: [
            [1, 1, null, 0, null, 0, 0, null, null, null],
            [null, null, 0, null, null, 0, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 1, null, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [0, 0, null, 1, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, 0, 0, null],
            [null, null, 0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_178",
        name: "P10_1_178",
        description: "10x10 Easy #178",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 23:29:58",
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
            initial_empty: 70,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0055270195007324
        },
        grid: [
            [1, null, null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, 0, null, null, 1],
            [1, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null, 0, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, 0],
            [0, null, 1, 1, null, null, null, null, 1, null],
            [0, null, null, null, null, 1, null, 0, null, null],
            [null, 0, null, 0, null, null, 0, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_179",
        name: "P10_1_179",
        description: "10x10 Easy #179",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 23:29:59",
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
            initial_empty: 70,
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
            time_taken: 0.0019049644470215
        },
        grid: [
            [null, null, null, null, null, null, 0, null, 0, null],
            [1, 1, null, 0, null, null, null, null, null, 0],
            [1, null, null, null, null, 0, null, null, null, 0],
            [null, 0, null, 1, null, 0, null, null, 1, null],
            [0, null, null, 1, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_180",
        name: "P10_1_180",
        description: "10x10 Easy #180",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 23:30:01",
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
            initial_empty: 70,
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
            time_taken: 0.0014019012451172
        },
        grid: [
            [null, 1, null, 0, null, null, 1, null, null, 0],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, 1, null, null, null, 0, 0, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, 1, null, null, null],
            [null, 1, null, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, 0, null, null, 1],
            [null, null, null, 1, null, null, 0, 0, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_181",
        name: "P10_1_181",
        description: "10x10 Easy #181",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 23:30:02",
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
            initial_empty: 66,
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
            time_taken: 0.0015301704406738
        },
        grid: [
            [0, null, 1, 1, null, null, null, 1, 1, null],
            [null, 0, null, null, 0, null, 1, 1, null, 1],
            [null, null, 1, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, null, 0, null, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, 1, 1, null, 0, null, null],
            [0, 1, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [1, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_182",
        name: "P10_1_182",
        description: "10x10 Easy #182",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 23:30:04",
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
            initial_empty: 72,
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
            time_taken: 0.001924991607666
        },
        grid: [
            [null, 1, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, 1, 1, null, 0, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, null, 1, null, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, 0, null, null, null, null, 0, null],
            [0, null, 0, 0, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_183",
        name: "P10_1_183",
        description: "10x10 Easy #183",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 23:30:06",
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
            initial_empty: 73,
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
            time_taken: 0.001784086227417
        },
        grid: [
            [null, 0, null, 1, 1, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 1, 1, null, 0, null, 1, null, null],
            [null, null, 1, null, 0, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, 0, null, null, 1],
            [1, null, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_184",
        name: "P10_1_184",
        description: "10x10 Easy #184",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 23:30:07",
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
            initial_empty: 69,
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
            time_taken: 0.002601146697998
        },
        grid: [
            [0, null, null, 1, null, null, 0, null, 1, 1],
            [null, null, 0, null, null, 1, null, null, 1, null],
            [null, 0, null, 1, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, 1],
            [null, null, null, 0, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [1, 1, null, null, 0, 0, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_185",
        name: "P10_1_185",
        description: "10x10 Easy #185",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 23:30:09",
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
            initial_empty: 71,
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
            time_taken: 0.0026650428771973
        },
        grid: [
            [null, 1, 1, null, null, 0, null, null, null, null],
            [1, null, 0, 0, null, null, 1, null, 1, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [0, null, 0, null, 0, null, null, null, 1, null],
            [1, null, null, null, null, 1, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [1, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_186",
        name: "P10_1_186",
        description: "10x10 Easy #186",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 23:30:10",
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
            initial_empty: 70,
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
            time_taken: 0.003169059753418
        },
        grid: [
            [null, null, null, 0, null, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, null, 1],
            [0, null, null, null, 0, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 0, 1, null, 0, null, null, null, null],
            [null, null, 0, null, 1, null, 1, 1, null, 0],
            [null, 1, null, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_187",
        name: "P10_1_187",
        description: "10x10 Easy #187",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 23:30:12",
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
            initial_empty: 67,
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
            time_taken: 0.0019681453704834
        },
        grid: [
            [1, null, null, null, null, null, 1, null, null, 0],
            [null, null, 1, null, 0, 0, null, 1, null, 0],
            [0, null, null, null, null, null, null, null, 0, null],
            [0, null, 0, 0, null, null, null, null, null, 1],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, 1, null, null, 0, null, null, 1, null, 1],
            [0, null, null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [0, 0, null, null, 1, null, 0, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_1_188",
        name: "P10_1_188",
        description: "10x10 Easy #188",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 23:30:13",
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
            initial_empty: 68,
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
            time_taken: 0.0032439231872559
        },
        grid: [
            [null, 1, null, 0, null, 1, null, null, 0, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, 0, null, 0, null, null, 0],
            [0, null, 1, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, 0, 0, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, 1, null],
            [1, null, null, null, 0, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, 0, 0, null, null, 1, 1, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_189",
        name: "P10_1_189",
        description: "10x10 Easy #189",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 23:30:15",
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
            initial_empty: 69,
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
            time_taken: 0.0014841556549072
        },
        grid: [
            [0, null, null, 1, 1, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 0, 0, null, 0, null],
            [null, null, null, null, 1, 1, null, 1, null, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [1, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [1, null, null, 0, 0, null, null, null, null, 0],
            [1, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_190",
        name: "P10_1_190",
        description: "10x10 Easy #190",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 23:30:16",
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
            initial_empty: 70,
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
            time_taken: 0.0020279884338379
        },
        grid: [
            [null, null, 0, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, 1, null, null, null, 0],
            [null, null, 0, 1, null, 1, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, 0, null, 0, 1, null, null, null],
            [1, null, null, 0, null, null, null, null, 0, 1],
            [null, null, null, null, 1, null, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_191",
        name: "P10_1_191",
        description: "10x10 Easy #191",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 23:30:18",
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
            initial_empty: 65,
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
            time_taken: 0.0011601448059082
        },
        grid: [
            [0, null, null, 1, 1, null, null, null, null, 1],
            [null, 0, null, null, 1, null, 1, null, 1, null],
            [0, 0, null, null, null, null, 1, null, null, 1],
            [null, null, 1, null, 1, null, null, null, 0, null],
            [null, 1, null, null, null, 0, null, 0, 0, null],
            [1, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, 0, null],
            [null, 0, null, 1, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, null, null, 0, null],
            [null, null, 1, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_192",
        name: "P10_1_192",
        description: "10x10 Easy #192",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 23:30:20",
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
            initial_empty: 67,
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
            time_taken: 0.00083303451538086
        },
        grid: [
            [null, null, null, 0, 0, null, null, 0, 0, null],
            [null, 0, null, null, null, null, 1, null, 0, 0],
            [1, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 1, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, 0],
            [0, null, null, 1, null, 0, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_193",
        name: "P10_1_193",
        description: "10x10 Easy #193",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 23:30:21",
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
            initial_empty: 72,
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
            time_taken: 0.0010378360748291
        },
        grid: [
            [null, 0, 0, null, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, 1, null, null, null, 1, 1, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, 0],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, null, null, 0],
            [null, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, 0, 0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_1_194",
        name: "P10_1_194",
        description: "10x10 Easy #194",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 23:30:23",
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
            initial_empty: 66,
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
            time_taken: 0.0017600059509277
        },
        grid: [
            [null, null, 0, null, 0, null, 0, null, 0, null],
            [1, 1, null, null, null, 0, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, 0, null, null, 1, 1, null, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [0, null, 1, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, 1, null, 1, null, 0, null, null],
            [1, null, null, null, 1, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_195",
        name: "P10_1_195",
        description: "10x10 Easy #195",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 23:30:24",
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
            initial_empty: 70,
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
            time_taken: 0.0016140937805176
        },
        grid: [
            [null, null, 1, null, null, null, null, null, 0, null],
            [0, null, null, null, 0, null, null, 1, null, null],
            [0, null, null, null, 0, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, 0, null, null, 1, null],
            [1, null, null, null, 1, null, 1, null, null, 0],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null, 1, 0],
            [1, null, null, null, null, 1, null, null, null, 0],
            [null, 1, null, 1, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_196",
        name: "P10_1_196",
        description: "10x10 Easy #196",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 23:30:26",
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
            initial_empty: 72,
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
            time_taken: 0.0013649463653564
        },
        grid: [
            [null, 1, 1, null, null, 0, 0, null, 1, null],
            [null, null, null, 0, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, 0, null, 1, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [1, null, 1, null, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_1_197",
        name: "P10_1_197",
        description: "10x10 Easy #197",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 23:30:28",
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
            initial_empty: 67,
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
            time_taken: 0.00086712837219238
        },
        grid: [
            [null, null, 0, null, 1, null, 0, 0, null, 1],
            [null, 0, 0, null, null, 0, null, null, null, 1],
            [1, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null, 0, null],
            [0, null, null, null, 0, 0, null, 1, null, 1],
            [0, null, null, null, null, 0, null, null, null, 1],
            [null, null, 1, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_1_198",
        name: "P10_1_198",
        description: "10x10 Easy #198",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 23:30:29",
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
            initial_empty: 71,
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
            time_taken: 0.0043420791625977
        },
        grid: [
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, null, 0, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, 0, 1],
            [null, 1, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, 1, 1, null, 0, null],
            [1, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [1, null, 1, null, null, 0, null, 1, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_1_199",
        name: "P10_1_199",
        description: "10x10 Easy #199",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 23:30:31",
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
            initial_empty: 70,
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
            time_taken: 0.0018630027770996
        },
        grid: [
            [null, 0, 0, null, null, 1, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, 1, null, 1],
            [null, 1, 1, null, null, 0, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, 0],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 1, null, 1, 0, null, null, null, null, 0],
            [1, null, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_1_200",
        name: "P10_1_200",
        description: "10x10 Easy #200",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=1&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 23:30:33",
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
            initial_empty: 70,
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
            time_taken: 0.0029699802398682
        },
        grid: [
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [0, null, null, 1, null, null, null, 1, null, null],
            [null, 1, null, null, 1, 1, null, null, null, 0],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [0, null, 1, null, null, 1, null, null, null, 0],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, 0, null, null, null, 0, 0, null, null, null],
            [1, 0, null, 0, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL10x10_d1_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL10x10_d1_PUZZLES = LEVEL10x10_d1_PUZZLES;
}
