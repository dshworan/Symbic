/**
 * level 10x10 d4 - 10x10 extreme
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

const LEVEL10x10_d4_PUZZLES = [
    {
        id: "P10_4_1",
        name: "P10_4_1",
        description: "10x10 Very Hard #1",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-24 10:34:31",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, 1, null, 0, null, null, 1, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [null, null, null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_2",
        name: "P10_4_2",
        description: "10x10 Very Hard #2",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-24 10:34:32",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, 1, null, 0, null, null, null],
            [1, null, null, 0, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 0, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 0, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_3",
        name: "P10_4_3",
        description: "10x10 Very Hard #3",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-24 10:34:34",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 1, null, null, null, 0, null],
            [1, null, 1, null, null, null, 1, 0, null, 1],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [0, null, 1, null, null, null, null, null, 0, null],
            [null, 0, null, 0, null, 0, null, 1, null, 1],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [1, null, null, null, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_4",
        name: "P10_4_4",
        description: "10x10 Very Hard #4",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-24 10:34:35",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, 0, null, 0, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_5",
        name: "P10_4_5",
        description: "10x10 Very Hard #5",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-24 10:34:37",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [1, 1, null, null, null, null, null, null, null, null],
            [1, null, null, 0, 0, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_6",
        name: "P10_4_6",
        description: "10x10 Very Hard #6",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-24 10:34:38",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, 1, null, 1, null],
            [null, 0, null, 0, null, 1, null, null, null, null],
            [0, null, null, 0, null, 1, null, null, 0, 1],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, 1, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, 1, null, 1, null],
            [null, null, null, null, null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_7",
        name: "P10_4_7",
        description: "10x10 Very Hard #7",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-24 10:34:40",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, null, 1, null, null, 1, null, null, null, null],
            [0, 0, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [0, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, 1, null],
            [null, null, null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_8",
        name: "P10_4_8",
        description: "10x10 Very Hard #8",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-24 10:34:42",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, null, 0, 0, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, 1, null, null, 1, null, 0, null],
            [0, null, 0, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_9",
        name: "P10_4_9",
        description: "10x10 Very Hard #9",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-24 10:34:43",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, 1, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [0, null, null, null, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, 1, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, 0, null, null, 1, null, null, null, 0],
            [0, 0, null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_10",
        name: "P10_4_10",
        description: "10x10 Very Hard #10",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-24 10:34:45",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, 0, null, null, null, null, null, 0, 0],
            [0, null, 0, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 1, null],
            [null, 0, 0, null, null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_11",
        name: "P10_4_11",
        description: "10x10 Very Hard #11",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-24 10:34:46",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, 0, null, null, 1, null, 1, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 1, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, 0],
            [1, 0, null, null, 1, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_12",
        name: "P10_4_12",
        description: "10x10 Very Hard #12",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-24 10:34:48",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, 1, 0, null, 1, null, 0],
            [0, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, null, 0, 0, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, 0, null, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, null, 1, 1, null, null, 0, null, null, 0],
            [null, null, null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_13",
        name: "P10_4_13",
        description: "10x10 Very Hard #13",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-24 10:34:49",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, 0, null, null, null, null, null, 1, null, null],
            [0, null, null, 0, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, 1, 0, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null, null, 0],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [0, null, null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_14",
        name: "P10_4_14",
        description: "10x10 Very Hard #14",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-24 10:34:51",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, 0, null, 1, 1, null, null],
            [null, null, null, 1, null, 0, null, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_15",
        name: "P10_4_15",
        description: "10x10 Very Hard #15",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-24 10:34:53",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, 1, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, 0],
            [0, 0, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_16",
        name: "P10_4_16",
        description: "10x10 Very Hard #16",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-24 10:34:54",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, null, 0, 1, null],
            [null, 1, null, null, null, null, null, 0, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [0, null, 0, null, null, null, null, null, 0, null],
            [0, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, 1, null, null, null],
            [null, null, null, null, 1, null, 1, null, null, 1],
            [null, 0, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_17",
        name: "P10_4_17",
        description: "10x10 Very Hard #17",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-24 10:34:56",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, null, null, null, null, 1, null],
            [null, 0, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, 1, 1, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_18",
        name: "P10_4_18",
        description: "10x10 Very Hard #18",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-24 10:34:57",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, 0, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, 1, null, 1, null, 1, null, null],
            [1, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 0],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_19",
        name: "P10_4_19",
        description: "10x10 Very Hard #19",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-24 10:34:59",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, 0, 0, null, 1],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 1, null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_20",
        name: "P10_4_20",
        description: "10x10 Very Hard #20",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-24 10:35:00",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [0, null, 1, null, null, null, null, null, 1, 0],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [1, null, null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_21",
        name: "P10_4_21",
        description: "10x10 Very Hard #21",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-24 10:35:02",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 71,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, 1, null, 0, null, 0, null, 0, null, null],
            [null, 1, 0, null, 1, null, null, null, 1, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [1, 0, null, null, null, 1, null, 0, 1, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [1, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_22",
        name: "P10_4_22",
        description: "10x10 Very Hard #22",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-24 10:35:03",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null, 1, null],
            [0, null, null, 0, null, null, null, null, 0, 0],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, null, null, 0],
            [1, null, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_23",
        name: "P10_4_23",
        description: "10x10 Very Hard #23",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-24 10:35:05",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, 0, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 1, null, 1, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, 1, null, null, 0, 0, null, null],
            [null, null, 1, null, null, 1, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_24",
        name: "P10_4_24",
        description: "10x10 Very Hard #24",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-24 10:35:06",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, 1],
            [0, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, 0, 0, null, null, null, null],
            [1, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, null, 1, 1, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_25",
        name: "P10_4_25",
        description: "10x10 Very Hard #25",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-24 10:35:08",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, 1, null, null, null],
            [0, null, 1, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, 1],
            [null, 0, null, null, 0, null, null, null, 0, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, null, null, 1, 1, null, null, 0, null, 0],
            [null, 0, null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_26",
        name: "P10_4_26",
        description: "10x10 Very Hard #26",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-24 10:35:10",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null, 1, null],
            [null, 1, null, 0, null, null, 1, null, 1, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_27",
        name: "P10_4_27",
        description: "10x10 Very Hard #27",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-24 10:35:11",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 1, null, null, 0, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, null, 1, null],
            [null, null, 0, 0, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, null, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 0, 0, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_28",
        name: "P10_4_28",
        description: "10x10 Very Hard #28",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-24 10:35:13",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, 0],
            [null, 0, 0, null, null, null, null, 1, null, null],
            [0, 0, null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, null, 0, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [1, 1, null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_29",
        name: "P10_4_29",
        description: "10x10 Very Hard #29",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-24 10:35:14",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, null],
            [0, 0, null, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, 0, null],
            [0, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, 1, null, null, null, 1, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_30",
        name: "P10_4_30",
        description: "10x10 Very Hard #30",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-24 10:35:16",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, 1, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_31",
        name: "P10_4_31",
        description: "10x10 Very Hard #31",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-24 10:35:17",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, 0, null, 0, null, null, 0],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, 0, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_32",
        name: "P10_4_32",
        description: "10x10 Very Hard #32",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-24 10:35:19",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, 0, null, null, 0, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, 1, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_33",
        name: "P10_4_33",
        description: "10x10 Very Hard #33",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-24 10:35:20",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, 1, null, null, 0, null, null, null],
            [null, null, 1, null, 0, null, 1, 1, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [1, null, null, null, 1, null, 1, null, null, 1],
            [null, null, null, 0, null, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_34",
        name: "P10_4_34",
        description: "10x10 Very Hard #34",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-24 10:35:22",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 1, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, 1, null, 1],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, 0, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 1, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_35",
        name: "P10_4_35",
        description: "10x10 Very Hard #35",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-24 10:35:24",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, null, 1, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [0, null, null, null, 0, null, 0, 0, null, null],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_36",
        name: "P10_4_36",
        description: "10x10 Very Hard #36",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-24 10:35:25",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, 0, null, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null, 1, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [0, null, null, null, 1, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [1, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_37",
        name: "P10_4_37",
        description: "10x10 Very Hard #37",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-24 10:35:27",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, 1],
            [0, 0, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, 1, null, null],
            [0, 0, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, 1, null, 0, null, null, 1, null, 0, null],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_38",
        name: "P10_4_38",
        description: "10x10 Very Hard #38",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-24 10:35:28",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_39",
        name: "P10_4_39",
        description: "10x10 Very Hard #39",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-24 10:35:30",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, 0, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, 1, null],
            [null, 0, null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, null, 0, 0, null, null, null, 0],
            [null, 0, null, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_40",
        name: "P10_4_40",
        description: "10x10 Very Hard #40",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-24 10:35:32",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, 1, null, null, null, null, null, 0],
            [0, null, null, 1, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [0, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, 1, null, 0, null, null, null],
            [null, 1, null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_41",
        name: "P10_4_41",
        description: "10x10 Very Hard #41",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-24 10:35:33",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, 1, null, null, null, null, null, 0, 1, null],
            [null, null, 0, null, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, 0, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_42",
        name: "P10_4_42",
        description: "10x10 Very Hard #42",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-24 10:35:35",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, 0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, 0, 0, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_43",
        name: "P10_4_43",
        description: "10x10 Very Hard #43",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-24 10:35:36",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 0, null, 0, null, null, null],
            [0, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, 1, null, 1, 1, null],
            [null, 1, 1, null, null, null, null, 1, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, null, 1, null, null, null, null, null],
            [0, null, null, null, null, 0, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_44",
        name: "P10_4_44",
        description: "10x10 Very Hard #44",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-24 10:35:38",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 1, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [1, null, null, 1, null, 0, 0, null, 1, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [null, 0, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, 0, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_45",
        name: "P10_4_45",
        description: "10x10 Very Hard #45",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-24 10:35:39",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1, null, 0],
            [null, null, null, null, null, 1, null, null, null, 0],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, null, 1, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_46",
        name: "P10_4_46",
        description: "10x10 Very Hard #46",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-24 10:35:41",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 0, null, null, 1],
            [null, null, 0, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_47",
        name: "P10_4_47",
        description: "10x10 Very Hard #47",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-24 10:35:42",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, 0, null, null, 0],
            [0, null, 1, null, null, 0, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 0, null, null, null],
            [null, null, 0, null, 1, null, null, 1, null, 1],
            [0, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_48",
        name: "P10_4_48",
        description: "10x10 Very Hard #48",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-24 10:35:44",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, null, null, null, null, 1, 1, null, 0],
            [null, 1, null, 0, null, 1, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_49",
        name: "P10_4_49",
        description: "10x10 Very Hard #49",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-24 10:35:45",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, 1, null, null, 1, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, 1, null, 0, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_50",
        name: "P10_4_50",
        description: "10x10 Very Hard #50",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-24 10:35:47",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, 0, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, 1, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, 0],
            [null, null, null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_51",
        name: "P10_4_51",
        description: "10x10 Very Hard #51",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-24 10:35:49",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, 1, null, null, null, 0, null, 1, null],
            [0, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [1, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_52",
        name: "P10_4_52",
        description: "10x10 Very Hard #52",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-24 10:35:50",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 83,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, 0, 0, null, null],
            [0, null, null, 1, null, null, null, 0, null, null],
            [null, null, 0, 0, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_53",
        name: "P10_4_53",
        description: "10x10 Very Hard #53",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-24 10:35:52",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 0],
            [0, null, 1, null, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, 0, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_54",
        name: "P10_4_54",
        description: "10x10 Very Hard #54",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-24 10:35:53",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, 1, 1, null, 0, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [0, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, 0, null, 1, null, null, null, null, 1],
            [null, 1, null, null, 1, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_55",
        name: "P10_4_55",
        description: "10x10 Very Hard #55",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-24 10:35:55",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 83,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null, null, null],
            [0, 0, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, 1],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_56",
        name: "P10_4_56",
        description: "10x10 Very Hard #56",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-24 10:35:56",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, 0, null, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, 0, null, 1, 1, null, null, null, 1],
            [0, null, null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_57",
        name: "P10_4_57",
        description: "10x10 Very Hard #57",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-24 10:35:58",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, 1, null, null, null, null, null, 1, 1, null],
            [1, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, null, 0, null],
            [0, null, 1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, null, 0, null, 0],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, null, 1, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_58",
        name: "P10_4_58",
        description: "10x10 Very Hard #58",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-24 10:35:59",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, 0, null, 1, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, 0, null, null, null, 0],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, null, 1, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_59",
        name: "P10_4_59",
        description: "10x10 Very Hard #59",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-24 10:36:01",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 0, null, 1, null],
            [null, null, null, 1, null, 1, 0, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, null, null, null],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_60",
        name: "P10_4_60",
        description: "10x10 Very Hard #60",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-24 10:36:03",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, 1, 0, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [1, null, 1, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, 1, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_61",
        name: "P10_4_61",
        description: "10x10 Very Hard #61",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-24 10:36:04",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, 1, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, 0, null],
            [null, null, null, 1, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, 0, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_62",
        name: "P10_4_62",
        description: "10x10 Very Hard #62",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-24 10:36:06",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 0, null, 0, null, null, null, 0, null],
            [1, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, 0, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, 1, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, 1, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [0, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_63",
        name: "P10_4_63",
        description: "10x10 Very Hard #63",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-24 10:36:07",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, 0, null, 0, 1],
            [null, 0, null, 0, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [1, null, 1, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, 0, null, 1, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_64",
        name: "P10_4_64",
        description: "10x10 Very Hard #64",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-24 10:36:09",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, null, 0, null, 0],
            [null, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, null, null, 1],
            [null, null, 0, null, null, null, 1, 0, null, null],
            [0, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, 1, null, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_65",
        name: "P10_4_65",
        description: "10x10 Very Hard #65",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-24 10:36:10",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, 1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 0, null, null],
            [null, null, 0, 0, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_66",
        name: "P10_4_66",
        description: "10x10 Very Hard #66",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-24 10:36:12",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, 1, 1, null, 0, null, null, null, 0, null],
            [null, null, 1, null, 0, null, null, null, null, 1],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, 1, null, 1, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_67",
        name: "P10_4_67",
        description: "10x10 Very Hard #67",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-24 10:36:13",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, 0, null, 0, null, 1, null, null, 1, null],
            [null, 0, null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, null, 1, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_68",
        name: "P10_4_68",
        description: "10x10 Very Hard #68",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-24 10:36:15",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, 1, null, 0, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [1, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, 0, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_69",
        name: "P10_4_69",
        description: "10x10 Very Hard #69",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-24 10:36:16",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, 1, null, 1, null, null],
            [0, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, 1, null, null, null],
            [null, 0, null, null, null, 1, null, null, 1, 1],
            [null, 0, null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_70",
        name: "P10_4_70",
        description: "10x10 Very Hard #70",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-24 10:36:18",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 0, null, null],
            [null, 1, null, null, null, 0, null, null, 0, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_71",
        name: "P10_4_71",
        description: "10x10 Very Hard #71",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-24 10:36:20",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, 1, 1, null, null, null],
            [1, null, null, 1, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 0, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, 1, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, 1, null, 0, null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_72",
        name: "P10_4_72",
        description: "10x10 Very Hard #72",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-24 10:36:21",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, null, 0, 0, null, 1, null],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, 1, null, 1],
            [null, 1, null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, 0, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_73",
        name: "P10_4_73",
        description: "10x10 Very Hard #73",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-24 10:36:23",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 83,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_74",
        name: "P10_4_74",
        description: "10x10 Very Hard #74",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-24 10:36:24",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 82,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, 0, null, 1, null, null, null],
            [null, 0, 0, null, 0, null, null, 1, null, 1],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_75",
        name: "P10_4_75",
        description: "10x10 Very Hard #75",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-24 10:36:26",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, null, 1, null, null, 0],
            [0, 0, null, null, null, 1, 0, null, null, null],
            [null, 0, null, 0, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, 0],
            [null, null, 0, null, null, 0, null, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_76",
        name: "P10_4_76",
        description: "10x10 Very Hard #76",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-24 10:36:27",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 71,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 0, null, null, null, null, 1],
            [1, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [0, null, 0, 1, 1, null, 0, null, null, 1],
            [1, null, null, null, null, 1, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, 1, 0, null, null],
            [null, null, null, 1, null, null, null, 0, null, 1],
            [null, null, null, null, null, 0, 0, null, null, null],
            [0, null, 0, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_77",
        name: "P10_4_77",
        description: "10x10 Very Hard #77",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-24 10:36:29",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 1, null, null, 1, null, 0, null, null],
            [1, 0, 0, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, 0, null, null, 0, 0, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null, null, 0],
            [0, null, 1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_78",
        name: "P10_4_78",
        description: "10x10 Very Hard #78",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-24 10:36:30",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, 1, null, null, null, 0],
            [0, null, null, 1, null, 1, null, null, null, null],
            [null, 1, null, null, 1, null, null, null, 0, 0],
            [null, null, null, null, 0, 0, null, 1, null, null],
            [null, 0, null, 1, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_79",
        name: "P10_4_79",
        description: "10x10 Very Hard #79",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-24 10:36:32",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, 1, null, null],
            [0, 1, null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_80",
        name: "P10_4_80",
        description: "10x10 Very Hard #80",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-24 10:36:33",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, 1, null, null, 1, 0, null, null],
            [null, 0, null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, 0, 0, null, null, null, 1, 1, null],
            [null, 1, null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [0, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_81",
        name: "P10_4_81",
        description: "10x10 Very Hard #81",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-24 10:36:35",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, null, null, 1],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [0, null, null, null, 1, null, null, 0, 1, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_82",
        name: "P10_4_82",
        description: "10x10 Very Hard #82",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-24 10:36:36",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, 0, null, null],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, 0, null, 0, null],
            [0, null, 1, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, 1, 0, null, null, null, null, null, 0],
            [null, 1, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_83",
        name: "P10_4_83",
        description: "10x10 Very Hard #83",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-24 10:36:38",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, 1, null, 1],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, 0, null, null, 1, null, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_84",
        name: "P10_4_84",
        description: "10x10 Very Hard #84",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-24 10:36:40",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, 1, 1, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, null, 0, 1, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1, 0, null],
            [null, null, null, 0, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, 0, null, null, null, null, null, 0, null],
            [1, null, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_85",
        name: "P10_4_85",
        description: "10x10 Very Hard #85",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-24 10:36:41",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, 0, 0, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 0, 0],
            [null, null, null, null, null, 1, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_86",
        name: "P10_4_86",
        description: "10x10 Very Hard #86",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-24 10:36:43",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, 1, null, 0, null, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, null, 1, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, 1, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, 1, null],
            [0, null, 0, 1, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_87",
        name: "P10_4_87",
        description: "10x10 Very Hard #87",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-24 10:36:44",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, 0, null, 0, null, null],
            [0, 0, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_88",
        name: "P10_4_88",
        description: "10x10 Very Hard #88",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-24 10:36:46",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, null],
            [1, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, 1, 0],
            [null, 0, 1, null, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_89",
        name: "P10_4_89",
        description: "10x10 Very Hard #89",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-24 10:36:47",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, 1],
            [1, null, 0, null, null, null, 0, null, null, 1],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, 1, 1, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_90",
        name: "P10_4_90",
        description: "10x10 Very Hard #90",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-24 10:36:49",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 0, null, 1, 1, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_91",
        name: "P10_4_91",
        description: "10x10 Very Hard #91",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-24 10:36:51",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, 0, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_92",
        name: "P10_4_92",
        description: "10x10 Very Hard #92",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-24 10:36:52",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, 1, null, null, null, null, null, null, 0],
            [null, 0, null, null, 1, null, null, 1, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null, null, 0],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, 1, null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_93",
        name: "P10_4_93",
        description: "10x10 Very Hard #93",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-24 10:36:54",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, 1],
            [1, null, 1, null, 0, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [0, null, 0, null, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 0, null, 0, null, null, null, null, 0],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_94",
        name: "P10_4_94",
        description: "10x10 Very Hard #94",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-24 10:36:55",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, 0, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [1, 1, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 0, 0],
            [1, null, null, null, 0, null, 0, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_95",
        name: "P10_4_95",
        description: "10x10 Very Hard #95",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-24 10:36:57",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, 0, 1, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, null, null, 0, null, 0, null, null],
            [1, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, 1, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_96",
        name: "P10_4_96",
        description: "10x10 Very Hard #96",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-24 10:36:58",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, 0, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 0, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [0, null, null, null, null, 1, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, 1, null, 0, null, null, null, 1, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_97",
        name: "P10_4_97",
        description: "10x10 Very Hard #97",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-24 10:37:00",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, null, null, 1, null, null],
            [1, null, null, null, 1, null, null, 1, 1, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null, null, null],
            [1, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [1, null, null, null, null, null, 1, null, null, null],
            [1, 1, null, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_98",
        name: "P10_4_98",
        description: "10x10 Very Hard #98",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-24 10:37:01",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [0, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, 0, null, 1, null, null, null, null, 0, null],
            [1, null, null, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_99",
        name: "P10_4_99",
        description: "10x10 Very Hard #99",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-24 10:37:03",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, 1, 1],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [1, 1, null, 0, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_100",
        name: "P10_4_100",
        description: "10x10 Very Hard #100",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-24 10:37:04",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 1, null, 1, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, 0, null, null, 0],
            [null, null, 1, null, null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_101",
        name: "P10_4_101",
        description: "10x10 Very Hard #101",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-24 10:37:06",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, 0, null, null, 0, null, 1, 1, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, null, null, 1, null, 0],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_102",
        name: "P10_4_102",
        description: "10x10 Very Hard #102",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-24 10:37:08",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, 1, 1],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, 1, 1, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [0, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_103",
        name: "P10_4_103",
        description: "10x10 Very Hard #103",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-24 10:37:09",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [1, null, 1, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0, null, 1],
            [null, null, null, 1, 1, null, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_104",
        name: "P10_4_104",
        description: "10x10 Very Hard #104",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-24 10:37:11",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, 1, null, null, null, null, 0],
            [0, null, null, 1, null, 1, 1, null, null, null],
            [1, 1, null, null, null, 0, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, 0, 0, null, null],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [null, null, 0, null, null, 0, 0, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [0, null, 0, null, null, null, null, 0, null, 0],
            [null, null, 0, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_105",
        name: "P10_4_105",
        description: "10x10 Very Hard #105",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-24 10:37:12",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, 0, null, 1, null, null, null],
            [0, 0, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 0, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, 0, null, null, 0, 0, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_106",
        name: "P10_4_106",
        description: "10x10 Very Hard #106",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-24 10:37:14",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 83,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, 0, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, 0, 0, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [1, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_107",
        name: "P10_4_107",
        description: "10x10 Very Hard #107",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-24 10:37:15",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 0, null, 1, 1, null, null],
            [1, null, null, null, null, 0, null, 1, null, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [0, null, 0, null, 0, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_108",
        name: "P10_4_108",
        description: "10x10 Very Hard #108",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-24 10:37:17",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, 0, null, 0, null, null, null, 1, 1, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [1, null, 0, null, null, null, 0, null, 0, 0],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_109",
        name: "P10_4_109",
        description: "10x10 Very Hard #109",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-24 10:37:18",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, 0, 1, null, 1, null],
            [null, null, null, null, null, 1, null, 0, 0, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, null, 1, null, null, 1, null, null, null],
            [null, 0, null, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_110",
        name: "P10_4_110",
        description: "10x10 Very Hard #110",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-24 10:37:20",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [0, 1, 1, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 1, null, null, 0, 0],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_111",
        name: "P10_4_111",
        description: "10x10 Very Hard #111",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-24 10:37:22",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 0, null, 0, null, 1, null, null, null],
            [null, null, 0, 1, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, null, 0],
            [0, 1, null, null, 0, null, 1, null, null, 0],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, null, 0, null, null, 0, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_112",
        name: "P10_4_112",
        description: "10x10 Very Hard #112",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-24 10:37:23",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 0, 0, null, null, 1, null],
            [0, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 0, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_113",
        name: "P10_4_113",
        description: "10x10 Very Hard #113",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-24 10:37:25",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, 1, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, 0, null, null, 0],
            [null, null, null, null, 1, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_114",
        name: "P10_4_114",
        description: "10x10 Very Hard #114",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-24 10:37:26",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, 0, 0, null, null, null],
            [null, null, null, 1, null, null, 0, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, 0, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [0, null, null, null, 0, null, null, 1, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_115",
        name: "P10_4_115",
        description: "10x10 Very Hard #115",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-24 10:37:28",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, 1, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [0, null, null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, 1, null, null, null, null, 0, null, null],
            [null, null, 1, 1, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [1, null, null, 1, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_116",
        name: "P10_4_116",
        description: "10x10 Very Hard #116",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-24 10:37:29",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 0, 0, null, null, 0, 1, null],
            [0, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_117",
        name: "P10_4_117",
        description: "10x10 Very Hard #117",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-24 10:37:31",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, null, 0, null, 0, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 0, null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, null, 0, null, 0, 1, null, null],
            [null, null, 1, null, null, null, null, null, 1, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_118",
        name: "P10_4_118",
        description: "10x10 Very Hard #118",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-24 10:37:32",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, null, 0, null, null, null, 0],
            [null, 1, null, null, null, 0, null, 1, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, 0, 1, null, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null, 1, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, 0, null, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_119",
        name: "P10_4_119",
        description: "10x10 Very Hard #119",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-24 10:37:34",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, 1, 1, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, 1, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, null, 1, null],
            [1, 1, null, 1, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_120",
        name: "P10_4_120",
        description: "10x10 Very Hard #120",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-24 10:37:35",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, 1, null, 0, null, 0, null, null, 0, null],
            [null, null, 0, 0, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_121",
        name: "P10_4_121",
        description: "10x10 Very Hard #121",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-24 10:37:37",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, 0, null, 0],
            [1, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1, null, null],
            [null, null, null, 0, null, 1, null, null, null, 0],
            [1, null, null, null, null, null, 0, null, null, 0],
            [null, 0, null, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_122",
        name: "P10_4_122",
        description: "10x10 Very Hard #122",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-24 10:37:39",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, 1, null, null, null, 1],
            [0, null, 1, null, null, null, null, 1, 0, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_123",
        name: "P10_4_123",
        description: "10x10 Very Hard #123",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-24 10:37:40",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1, null, 1],
            [1, 1, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, 1, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, 1, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_124",
        name: "P10_4_124",
        description: "10x10 Very Hard #124",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-24 10:37:42",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, null, 1, null, 0, null],
            [null, null, null, null, 0, null, 1, null, null, null],
            [0, 0, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, 0, 1, null],
            [null, null, null, 1, 1, null, null, 0, 1, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_125",
        name: "P10_4_125",
        description: "10x10 Very Hard #125",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-24 10:37:43",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, null, 0, null],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, 0, null],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_126",
        name: "P10_4_126",
        description: "10x10 Very Hard #126",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-24 10:37:45",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, 0, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, 0, null, 1, null, 1, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [0, null, null, null, 0, null, null, null, 0, null],
            [0, 0, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_127",
        name: "P10_4_127",
        description: "10x10 Very Hard #127",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-24 10:37:46",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, null, null, 0, null, null],
            [1, null, 0, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, 0, 0, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_128",
        name: "P10_4_128",
        description: "10x10 Very Hard #128",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-24 10:37:48",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 0, 0, null, null, null, 1, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, 1, null, null, 0, 1, null, null, 1],
            [0, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [0, null, null, null, null, null, 0, 0, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 0, null, 1, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_129",
        name: "P10_4_129",
        description: "10x10 Very Hard #129",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-24 10:37:49",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, 1, 1, null, null, 0, 0, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, 0, 0, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_130",
        name: "P10_4_130",
        description: "10x10 Very Hard #130",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-24 10:37:51",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null, null, 1],
            [1, null, null, 1, null, null, null, 1, 1, null],
            [null, null, null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, null, null, 1, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_131",
        name: "P10_4_131",
        description: "10x10 Very Hard #131",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-24 10:37:52",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, 0, 0, null, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, null, null, 0],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, 1, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, null, 1, null, 0, 0, null, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null, 1, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_132",
        name: "P10_4_132",
        description: "10x10 Very Hard #132",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-24 10:37:54",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 0, null, 0, null, 0, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, 1, null, null, 1],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 0, 0, null, 1, null, null],
            [null, null, 1, null, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_133",
        name: "P10_4_133",
        description: "10x10 Very Hard #133",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-24 10:37:56",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, 1, 1, null, null],
            [1, 0, null, 0, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null, null, 0],
            [1, null, null, null, null, 0, null, null, 1, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_134",
        name: "P10_4_134",
        description: "10x10 Very Hard #134",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-24 10:37:57",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, 1, null, 0, 0],
            [1, null, 0, 0, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, null, 1, null, 0],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_135",
        name: "P10_4_135",
        description: "10x10 Very Hard #135",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-24 10:37:59",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, 1, null, null, 1, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, 0, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, 1, null, 0, null, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_136",
        name: "P10_4_136",
        description: "10x10 Very Hard #136",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-24 10:38:00",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, null, null, 0],
            [null, 0, null, 0, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 1, null, 1, null],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_137",
        name: "P10_4_137",
        description: "10x10 Very Hard #137",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-24 10:38:02",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 1, null, 0, null, 1, null, 1],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, 0, null, 0],
            [1, 0, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [1, null, null, null, 0, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_138",
        name: "P10_4_138",
        description: "10x10 Very Hard #138",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-24 10:38:03",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null, 1, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_139",
        name: "P10_4_139",
        description: "10x10 Very Hard #139",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-24 10:38:05",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, 1, 1, null, null, null, 0, null, null],
            [1, null, null, null, 0, null, null, 1, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, null],
            [1, 0, null, 0, null, 1, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, 0, 0, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_140",
        name: "P10_4_140",
        description: "10x10 Very Hard #140",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-24 10:38:06",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, 1, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, 1, null, null, 1, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_141",
        name: "P10_4_141",
        description: "10x10 Very Hard #141",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-24 10:38:08",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [0, null, null, 0, 0, null, null, null, 0, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, 1, null, null, null, null, 1],
            [null, null, null, 0, null, 0, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, 0, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_142",
        name: "P10_4_142",
        description: "10x10 Very Hard #142",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-24 10:38:09",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, null, null, 1, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, 0, null, 0, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_143",
        name: "P10_4_143",
        description: "10x10 Very Hard #143",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-24 10:38:11",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 81,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [0, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 0, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_144",
        name: "P10_4_144",
        description: "10x10 Very Hard #144",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-24 10:38:12",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, 1, null, 1, null, 0, null, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, 1, 1],
            [null, null, 0, null, 0, null, null, null, 1, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [0, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_145",
        name: "P10_4_145",
        description: "10x10 Very Hard #145",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-24 10:38:14",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, null, 0, null, 0, null, null, 0, null, null],
            [null, 1, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, 0, 1, null, null, null],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_146",
        name: "P10_4_146",
        description: "10x10 Very Hard #146",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-24 10:38:16",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [1, null, null, null, 1, null, null, null, null, 1],
            [1, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, null, 0, null, null, null, null, 1, null],
            [1, null, 1, null, 1, null, 1, null, null, null],
            [null, null, 1, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_147",
        name: "P10_4_147",
        description: "10x10 Very Hard #147",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-24 10:38:17",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, 0, null, null, null, null, null],
            [1, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, 1, null, 1],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, null, 0, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, 1, null, 1, null],
            [null, null, null, null, null, 0, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_148",
        name: "P10_4_148",
        description: "10x10 Very Hard #148",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-24 10:38:19",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_149",
        name: "P10_4_149",
        description: "10x10 Very Hard #149",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-24 10:38:20",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, 0, null, null, null, null, null, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [1, null, 0, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, 1, null, 0, 0, null],
            [1, null, null, 0, null, 1, null, null, 0, null],
            [1, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_150",
        name: "P10_4_150",
        description: "10x10 Very Hard #150",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-24 10:38:22",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 0, 0, null, null, 1, 0],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, 0],
            [0, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null, null, null],
            [0, null, 0, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_151",
        name: "P10_4_151",
        description: "10x10 Very Hard #151",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-24 10:38:23",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 82,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, 1, 1, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_152",
        name: "P10_4_152",
        description: "10x10 Very Hard #152",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-24 10:38:25",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, null, null, null, 0, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [1, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, 1, 1, null, 1],
            [0, null, null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_153",
        name: "P10_4_153",
        description: "10x10 Very Hard #153",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-24 10:38:26",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, 0],
            [null, null, null, 1, null, null, null, 0, null, 0],
            [0, null, null, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_154",
        name: "P10_4_154",
        description: "10x10 Very Hard #154",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-24 10:38:28",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, null, 1, 0, null, null, null, null, 1],
            [1, 0, null, null, 0, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, 1],
            [1, null, null, 1, null, null, 1, null, null, null],
            [null, null, 1, null, null, 1, null, null, 0, null],
            [1, 1, null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_155",
        name: "P10_4_155",
        description: "10x10 Very Hard #155",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-24 10:38:29",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, 0, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [null, null, 1, null, null, 0, null, 0, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null, 1, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, null, null, null, null, 0, 0],
            [null, null, 0, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_156",
        name: "P10_4_156",
        description: "10x10 Very Hard #156",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-24 10:38:31",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, null, null, null, 1, null, null, 1],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, 0, 1, null, null, 1, 1, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, 1, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_157",
        name: "P10_4_157",
        description: "10x10 Very Hard #157",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-24 10:38:33",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, null, 0, null, 0, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, 0],
            [null, null, 1, null, null, 0, null, null, null, 0],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, 0, null, null, 1, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_158",
        name: "P10_4_158",
        description: "10x10 Very Hard #158",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-24 10:38:34",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 1, 1, null, null, 0, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, 0, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 0, null, null, 0],
            [1, null, null, 0, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_159",
        name: "P10_4_159",
        description: "10x10 Very Hard #159",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-24 10:38:36",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 1, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [1, null, null, null, null, null, null, 0, null, 0],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, 0, 0, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, 1, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_160",
        name: "P10_4_160",
        description: "10x10 Very Hard #160",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-24 10:38:37",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, 1, null, 1, null, null, null, null, 0],
            [0, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, null, 1, null, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, 1, null, null, 0, null, null],
            [0, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_161",
        name: "P10_4_161",
        description: "10x10 Very Hard #161",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-24 10:38:39",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, null, 0, null, 1, null, 1, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, 1, null, null, null, null, 1],
            [null, 0, null, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_162",
        name: "P10_4_162",
        description: "10x10 Very Hard #162",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-24 10:38:40",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 1, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, 1, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 1, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_163",
        name: "P10_4_163",
        description: "10x10 Very Hard #163",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-24 10:38:42",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, null, 0, null, 1],
            [null, 0, null, 0, null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_164",
        name: "P10_4_164",
        description: "10x10 Very Hard #164",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-24 10:38:43",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, 1, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, 0, null, null, 1, 1, null, null],
            [null, 1, null, null, null, null, 0, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [0, 1, null, 1, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_165",
        name: "P10_4_165",
        description: "10x10 Very Hard #165",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-24 10:38:45",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, null, null, 0, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, 0, 0, null],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, 0, null, 0],
            [null, 1, null, 1, 0, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, 1, null],
            [0, null, 0, null, 0, 0, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_166",
        name: "P10_4_166",
        description: "10x10 Very Hard #166",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-24 10:38:46",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 75,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, 0, 0, null, null, 0, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, 0],
            [null, null, 1, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, 0, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_167",
        name: "P10_4_167",
        description: "10x10 Very Hard #167",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-24 10:38:48",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, 1, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 0, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, 0, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_168",
        name: "P10_4_168",
        description: "10x10 Very Hard #168",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-24 10:38:50",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, 1, 1, null, 0, null, null, null, null],
            [1, null, 1, null, 0, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_169",
        name: "P10_4_169",
        description: "10x10 Very Hard #169",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-24 10:38:51",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, 0, null, 1, null, null, null],
            [1, null, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 0, null, null, 1],
            [null, null, 1, null, null, 0, 0, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_170",
        name: "P10_4_170",
        description: "10x10 Very Hard #170",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-24 10:38:53",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, null, 0, null, 0, null, null, 0],
            [1, null, null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, 1, null, null, 1, null, 0, null, null, 0],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_171",
        name: "P10_4_171",
        description: "10x10 Very Hard #171",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-24 10:38:54",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, 0, null, 1, null, null, 1, null, null],
            [null, 1, null, null, null, null, 0, null, null, 0],
            [null, null, null, 1, 1, null, null, null, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_172",
        name: "P10_4_172",
        description: "10x10 Very Hard #172",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-24 10:38:56",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 0, null, 0, null, 1, 0, null, null],
            [null, null, 0, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, 0, null, 0, null, 1, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_173",
        name: "P10_4_173",
        description: "10x10 Very Hard #173",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-24 10:38:57",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 1, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, 1, null, 0, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 0, 0, null, 1, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_174",
        name: "P10_4_174",
        description: "10x10 Very Hard #174",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-24 10:38:59",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, 0, 1, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, 1, null, 1],
            [null, 1, null, 1, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_175",
        name: "P10_4_175",
        description: "10x10 Very Hard #175",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-24 10:39:00",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 85,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, 1, 1, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_176",
        name: "P10_4_176",
        description: "10x10 Very Hard #176",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-24 10:39:02",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [0, null, 0, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_177",
        name: "P10_4_177",
        description: "10x10 Very Hard #177",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-24 10:39:04",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, 1, null, null, null, null, 1, null, 1],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [0, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 0, 0, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_178",
        name: "P10_4_178",
        description: "10x10 Very Hard #178",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-24 10:39:05",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, null, 0, null],
            [0, null, null, 0, 0, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, 0, null, null],
            [null, null, null, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_4_179",
        name: "P10_4_179",
        description: "10x10 Very Hard #179",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-24 10:39:07",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 0, null, null, null, null, 0, 0, null],
            [0, 1, null, 1, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, 0, null, null, 1],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, null, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_180",
        name: "P10_4_180",
        description: "10x10 Very Hard #180",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-24 10:39:08",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 0, null, 0, 0, null, null, 1, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, 0],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 0, null],
            [0, 1, null, 1, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_181",
        name: "P10_4_181",
        description: "10x10 Very Hard #181",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-24 10:39:10",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [1, null, 0, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, 0, null, null],
            [0, null, null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 0, null, 1],
            [null, null, 0, null, 1, null, null, null, 0, null],
            [1, null, 0, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_182",
        name: "P10_4_182",
        description: "10x10 Very Hard #182",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-24 10:39:11",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, 0, null, null, null, null, null, 1, null, 0],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, 1, null, 1, 0, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, 0, null, 0],
            [1, null, null, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, 0, null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_183",
        name: "P10_4_183",
        description: "10x10 Very Hard #183",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-24 10:39:13",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, 1],
            [null, 0, 0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, 0, 0, null, null, null, null],
            [null, 1, null, 1, null, 0, null, 0, null, null],
            [1, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_184",
        name: "P10_4_184",
        description: "10x10 Very Hard #184",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-24 10:39:14",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, null, 1, null, null, 1, 1],
            [null, 0, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, null, 1, null, null, 0],
            [null, 1, null, 0, null, null, null, null, 1, null],
            [0, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [0, null, 0, null, null, 1, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null, 0, null],
            [1, null, 0, null, null, 1, null, null, null, 1],
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_185",
        name: "P10_4_185",
        description: "10x10 Very Hard #185",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-24 10:39:16",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, 0, null],
            [null, 1, null, null, 0, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, null, null, null, null, null, 0, 0, null, null],
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null, null, null],
            [null, null, 1, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_186",
        name: "P10_4_186",
        description: "10x10 Very Hard #186",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-24 10:39:17",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, 1, 1, null, null, null, 1, null, null, null],
            [0, 1, null, null, 1, 1, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, 0],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_187",
        name: "P10_4_187",
        description: "10x10 Very Hard #187",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-24 10:39:19",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, 0, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, 1, null, 1],
            [0, null, null, null, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, 0, null, null],
            [0, null, null, null, 1, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, 1],
            [0, null, null, 1, null, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 0, 0, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_188",
        name: "P10_4_188",
        description: "10x10 Very Hard #188",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-24 10:39:21",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null, null, null],
            [1, null, 1, null, 0, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_189",
        name: "P10_4_189",
        description: "10x10 Very Hard #189",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-24 10:39:22",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, 0, 0, null, null, null, 0],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 1, null, 0, 0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_190",
        name: "P10_4_190",
        description: "10x10 Very Hard #190",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-24 10:39:24",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, 1, null, null, null],
            [1, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [0, null, null, 1, 0, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_4_191",
        name: "P10_4_191",
        description: "10x10 Very Hard #191",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-24 10:39:25",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [0, null, 1, null, null, null, null, null, 1, null],
            [1, null, null, null, null, 1, null, null, null, 1],
            [1, null, null, null, null, null, null, 0, null, 1],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [0, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, 1, null, null, 1, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_192",
        name: "P10_4_192",
        description: "10x10 Very Hard #192",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-24 10:39:27",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, 0, 0, null, 1, null, 0, null],
            [1, 0, null, null, null, 1, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [1, null, null, 1, 1, null, null, 1, null, null],
            [0, null, 0, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, 0],
            [null, null, null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_193",
        name: "P10_4_193",
        description: "10x10 Very Hard #193",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-24 10:39:28",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, 1, null, null, null, 0, null, null, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, 1, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_4_194",
        name: "P10_4_194",
        description: "10x10 Very Hard #194",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-24 10:39:30",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, 0, null, null, null, 0, null, null, 1, 0],
            [null, 0, null, null, 1, null, 0, null, null, 0],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, null, 1, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, null, 1],
            [null, 1, 1, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_195",
        name: "P10_4_195",
        description: "10x10 Very Hard #195",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-24 10:39:31",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 79,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, 0],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, 0, 0],
            [null, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_4_196",
        name: "P10_4_196",
        description: "10x10 Very Hard #196",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-24 10:39:33",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, 1, null, 0, 0, null, null, null, 0],
            [1, null, null, null, null, null, null, null, 0, 0],
            [null, 0, null, null, 0, null, 0, 1, null, null],
            [null, 0, null, 1, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, 1],
            [1, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_197",
        name: "P10_4_197",
        description: "10x10 Very Hard #197",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-24 10:39:35",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, 0],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 1, null, null, 0, null],
            [null, null, null, 1, null, null, 0, 0, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_198",
        name: "P10_4_198",
        description: "10x10 Very Hard #198",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-24 10:39:36",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 77,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [1, null, null, null, null, null, 0, null, null, null],
            [1, 1, null, null, 1, null, null, 1, null, null],
            [null, 1, 1, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, 0, null, 1, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_4_199",
        name: "P10_4_199",
        description: "10x10 Very Hard #199",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-24 10:39:38",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 76,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, null],
            [1, null, null, 0, null, null, null, null, 1, 1],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, 0, null, 0],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, 1],
            [1, 1, null, null, 1, null, 0, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_4_200",
        name: "P10_4_200",
        description: "10x10 Very Hard #200",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=4&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-24 10:39:39",
        difficulty: "Very Hard",
        difficulty_score: 90,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 20,
            backtracking_score: 20,
            size_score: 10,
            percent_filled_by_logic: 20
        },
        solver_metrics: {
            initial_empty: 78,
            logic_iterations: 20,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 8,
                preventTrio: 12,
                fillSandwiches: 8,
                checkBalancedPairs: 4,
                checkUniqueRowsColumns: 3,
                tryFillCells: 8
            },
            time_taken: 2.5
        },
        grid: [
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 0, 0, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [1, null, 0, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL10x10_d4_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL10x10_d4_PUZZLES = LEVEL10x10_d4_PUZZLES;
}
