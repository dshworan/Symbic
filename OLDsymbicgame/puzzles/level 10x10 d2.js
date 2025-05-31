/**
 * level 10x10 d2 - 10x10 medium
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

const LEVEL10x10_d2_PUZZLES = [
    {
        id: "P10_2_1",
        name: "P10_2_1",
        description: "10x10 Easy #1",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 23:46:57",
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
            initial_empty: 78,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0062189102172852
        },
        grid: [
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, 1, null, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 1, null, null],
            [null, null, 1, null, null, 1, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, null, 0, null, null, null, 0, null],
            [null, 1, null, 0, 0, null, null, 1, 0, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_2",
        name: "P10_2_2",
        description: "10x10 Easy #2",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 23:46:58",
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
            initial_empty: 74,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 7,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0074880123138428
        },
        grid: [
            [null, null, 1, null, 1, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [1, null, null, 0, null, null, null, null, 1, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, 1, null, 0, null, 0, null, null],
            [null, null, 0, 1, null, null, 1, null, null, 0],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, null, 1, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_3",
        name: "P10_2_3",
        description: "10x10 Easy #3",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 23:47:00",
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
            initial_empty: 78,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0054161548614502
        },
        grid: [
            [null, 1, null, null, null, 1, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, 0, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, null, null, 1, 1, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_4",
        name: "P10_2_4",
        description: "10x10 Easy #4",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 23:47:01",
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
            time_taken: 0.0029850006103516
        },
        grid: [
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, 1, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, 1, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, 0, null, null, null],
            [null, null, 1, null, 1, null, 0, null, null, null],
            [null, 0, 0, null, null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_5",
        name: "P10_2_5",
        description: "10x10 Easy #5",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 23:47:03",
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
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0055301189422607
        },
        grid: [
            [1, null, 1, null, null, 1, null, null, null, 0],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, 0, null, 0, null, 1, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1, null, 1],
            [1, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, null, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, 1, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_6",
        name: "P10_2_6",
        description: "10x10 Easy #6",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 23:47:04",
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
            initial_empty: 75,
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
            time_taken: 0.0036380290985107
        },
        grid: [
            [0, 0, null, null, 0, null, null, null, 0, null],
            [null, 0, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, null, 0, null, null, null, 1, null, null, 0],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, null, 0, null, null, null, null, 0],
            [0, null, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_7",
        name: "P10_2_7",
        description: "10x10 Easy #7",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 23:47:06",
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
            initial_empty: 78,
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
            time_taken: 0.0036230087280273
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, 1, 1, null, 1, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 1, 1, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 0, null, null],
            [0, null, 1, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_8",
        name: "P10_2_8",
        description: "10x10 Easy #8",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 23:47:08",
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
            initial_empty: 75,
            logic_iterations: 5,
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
            time_taken: 0.0032038688659668
        },
        grid: [
            [null, null, null, null, 1, 1, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [null, null, 0, 1, null, null, null, null, 0, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, 0, null, null],
            [1, null, 1, 0, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, 0, 1, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_9",
        name: "P10_2_9",
        description: "10x10 Easy #9",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 23:47:09",
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
            initial_empty: 77,
            logic_iterations: 5,
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
            time_taken: 0.006091833114624
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 0, null, null],
            [null, 1, null, 0, null, null, 1, null, 0, null],
            [0, null, null, null, 1, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, 1, null, 0, null, null, null, null, 1, null],
            [0, null, null, null, null, 0, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_10",
        name: "P10_2_10",
        description: "10x10 Easy #10",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 23:47:11",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0028910636901855
        },
        grid: [
            [null, null, 0, 0, null, null, null, null, 1, null],
            [null, 1, null, null, 1, 1, null, null, null, 1],
            [1, null, 1, null, null, null, 1, null, null, 1],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, 0, null, null, 1],
            [1, null, null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, 0, null, 1, null],
            [null, null, null, 0, 0, null, null, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_11",
        name: "P10_2_11",
        description: "10x10 Easy #11",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 23:47:12",
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
            initial_empty: 79,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0073988437652588
        },
        grid: [
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, 0, 0, null, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, 1],
            [null, 0, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, null, 1, 1, null, null, 0, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_12",
        name: "P10_2_12",
        description: "10x10 Easy #12",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 23:47:14",
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
            initial_empty: 79,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0088739395141602
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, 0],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, 0, null, null, null, null, 0],
            [null, null, 1, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [1, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_13",
        name: "P10_2_13",
        description: "10x10 Easy #13",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 23:47:15",
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
            initial_empty: 77,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0051360130310059
        },
        grid: [
            [null, 0, null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, 0, null, 1],
            [null, null, 0, null, null, null, null, null, null, 1],
            [null, null, 0, null, 1, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, 1, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_14",
        name: "P10_2_14",
        description: "10x10 Easy #14",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 23:47:17",
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
            time_taken: 0.0032899379730225
        },
        grid: [
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [null, 1, null, null, 0, null, null, 1, 1, null],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [1, null, null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, 0, null, 1, null, 0],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_15",
        name: "P10_2_15",
        description: "10x10 Easy #15",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 23:47:19",
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
            time_taken: 0.0047690868377686
        },
        grid: [
            [null, 1, null, 0, null, null, 1, null, null, null],
            [null, 1, 1, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [1, null, 1, null, null, null, null, 1, null, null],
            [1, null, null, null, 1, null, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_16",
        name: "P10_2_16",
        description: "10x10 Easy #16",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 23:47:20",
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
            time_taken: 0.002528190612793
        },
        grid: [
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, 0],
            [null, null, 1, null, null, null, null, null, null, 0],
            [0, 0, null, 1, null, null, null, 0, 0, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, 0, null, null, null, 1, null, 0, 0],
            [null, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_17",
        name: "P10_2_17",
        description: "10x10 Easy #17",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 23:47:22",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 6,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0073249340057373
        },
        grid: [
            [null, null, null, null, null, null, 0, null, 1, 1],
            [0, null, 0, 0, null, null, null, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, 1, null, 1, null, null],
            [null, null, 1, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, 0, null, 1, null, 0],
            [null, 0, 0, null, null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_18",
        name: "P10_2_18",
        description: "10x10 Easy #18",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 23:47:23",
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
            initial_empty: 74,
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
                tryFillCells: 4
            },
            time_taken: 0.0049519538879395
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, 1, 1, null, null, null, 1, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [0, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [0, null, null, 1, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_19",
        name: "P10_2_19",
        description: "10x10 Easy #19",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 23:47:25",
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
            time_taken: 0.0023999214172363
        },
        grid: [
            [null, null, null, null, 0, 1, null, null, 1, null],
            [0, 0, null, null, null, 1, null, null, null, 0],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, 0, null, null, 1, null],
            [null, 0, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [0, null, 0, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [0, null, 0, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_20",
        name: "P10_2_20",
        description: "10x10 Easy #20",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 23:47:26",
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
            initial_empty: 78,
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
            time_taken: 0.0043790340423584
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, 1, null, 0, null, 0, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [0, null, null, 1, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_21",
        name: "P10_2_21",
        description: "10x10 Easy #21",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 23:47:28",
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
            initial_empty: 72,
            logic_iterations: 7,
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
                tryFillCells: 5
            },
            time_taken: 0.0047731399536133
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 1, null],
            [0, null, 0, null, null, null, 0, null, 0, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, 0, null, null, 0, 0, null, null, null],
            [0, null, null, 0, null, null, null, null, 0, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, 0, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_22",
        name: "P10_2_22",
        description: "10x10 Easy #22",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 23:47:29",
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
            initial_empty: 76,
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
            time_taken: 0.0042128562927246
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, null, 0, null, null],
            [1, null, null, null, null, null, null, 0, null, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, 0],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 1],
            [null, null, null, 0, null, null, 1, 0, null, null],
            [0, 0, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_23",
        name: "P10_2_23",
        description: "10x10 Easy #23",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 23:47:31",
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
            initial_empty: 74,
            logic_iterations: 5,
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
            time_taken: 0.0051798820495605
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 1, null],
            [0, null, 0, null, null, null, null, null, 1, 0],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [null, null, null, null, 1, null, 0, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, 1, 1, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, 1, null, null, 0, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_24",
        name: "P10_2_24",
        description: "10x10 Easy #24",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 23:47:32",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0049788951873779
        },
        grid: [
            [null, null, null, 0, 0, null, null, null, 0, null],
            [null, 1, null, null, 0, null, null, 1, 0, null],
            [1, null, 0, null, null, null, null, null, null, null],
            [1, null, 0, null, 1, null, 1, null, null, null],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, 0, 0, null],
            [null, 0, null, 1, null, null, null, 0, 1, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, 0, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_25",
        name: "P10_2_25",
        description: "10x10 Easy #25",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 23:47:34",
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
            initial_empty: 77,
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
            time_taken: 0.003277063369751
        },
        grid: [
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, 1, null, 0, 0, null, null],
            [null, null, 0, 0, null, null, null, null, 1, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_26",
        name: "P10_2_26",
        description: "10x10 Easy #26",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 23:47:36",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0049819946289062
        },
        grid: [
            [null, 0, null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, 1],
            [0, 0, null, null, 0, null, null, null, 1, null],
            [1, null, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 1, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_27",
        name: "P10_2_27",
        description: "10x10 Easy #27",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 23:47:37",
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
            initial_empty: 75,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0042250156402588
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, 1, null, 0, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [0, null, 0, null, 0, null, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, null, 0],
            [null, null, null, null, null, 0, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_28",
        name: "P10_2_28",
        description: "10x10 Easy #28",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 23:47:39",
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
            initial_empty: 76,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0047149658203125
        },
        grid: [
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, 1, 1, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, 1, null],
            [null, null, null, 1, null, 1, null, null, 1, null],
            [0, null, null, 1, 1, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_29",
        name: "P10_2_29",
        description: "10x10 Easy #29",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 23:47:41",
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
            initial_empty: 77,
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
            time_taken: 0.0040240287780762
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, 0, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, 1],
            [null, 1, null, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, 1, null, 0, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_30",
        name: "P10_2_30",
        description: "10x10 Easy #30",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 23:47:42",
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
            initial_empty: 77,
            logic_iterations: 6,
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
                tryFillCells: 5
            },
            time_taken: 0.004828929901123
        },
        grid: [
            [null, null, 0, 0, null, null, 0, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 0, null, null, 0],
            [null, null, null, 1, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, 0, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, 1, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_31",
        name: "P10_2_31",
        description: "10x10 Easy #31",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 23:47:44",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0028491020202637
        },
        grid: [
            [0, null, 0, 1, null, 1, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 1, null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [0, null, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_32",
        name: "P10_2_32",
        description: "10x10 Easy #32",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 23:47:45",
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
            initial_empty: 75,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 5,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0061149597167969
        },
        grid: [
            [null, null, 1, null, 1, null, 1, null, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, 1, null, 1, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 0, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, 0],
            [1, null, null, null, null, 0, 0, null, null, null],
            [null, 0, null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_33",
        name: "P10_2_33",
        description: "10x10 Easy #33",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 23:47:47",
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
            initial_empty: 75,
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
            time_taken: 0.0038509368896484
        },
        grid: [
            [null, 1, 1, null, null, 1, null, 0, null, null],
            [null, 1, 1, null, null, 0, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, null, 1, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, 0, 0, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [0, null, 1, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_34",
        name: "P10_2_34",
        description: "10x10 Easy #34",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 23:47:48",
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
            initial_empty: 76,
            logic_iterations: 6,
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
            time_taken: 0.0043141841888428
        },
        grid: [
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, null, 0, 0, null],
            [null, null, null, null, 1, null, 0, null, 1, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, null, 0, 0, null, null, null, null],
            [1, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, 0, null, null, null, 0, 0, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_35",
        name: "P10_2_35",
        description: "10x10 Easy #35",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 23:47:50",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0029129981994629
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 0],
            [null, null, null, 0, null, 0, null, null, null, 0],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, 0, null, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, 1],
            [1, null, null, null, 0, null, 0, 0, null, null],
            [0, null, null, 0, 0, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_36",
        name: "P10_2_36",
        description: "10x10 Easy #36",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 23:47:51",
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
            initial_empty: 73,
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
            time_taken: 0.0045859813690186
        },
        grid: [
            [null, null, 1, null, null, null, null, null, 0, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, 0, null, 0],
            [0, null, null, 1, null, null, 0, 0, null, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, null, 1, 1, null, null, null, null, null, null],
            [0, 0, null, null, null, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, 1, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_37",
        name: "P10_2_37",
        description: "10x10 Easy #37",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 23:47:53",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018179416656494
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, 1, null, 0, null, 1, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, 1, null, null, null, null, 1, 1, null],
            [0, null, null, null, 0, 0, null, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_38",
        name: "P10_2_38",
        description: "10x10 Easy #38",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 23:47:55",
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
            initial_empty: 74,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0043139457702637
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, null, 0, null, 0, 0, null],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, 1, null, 0, null, null],
            [1, null, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [0, null, null, null, null, 1, 1, null, null, 0],
            [0, null, 1, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_39",
        name: "P10_2_39",
        description: "10x10 Easy #39",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 23:47:56",
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
            initial_empty: 80,
            logic_iterations: 6,
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
            time_taken: 0.0072309970855713
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null, null, 1],
            [1, null, null, 1, null, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, 1, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_40",
        name: "P10_2_40",
        description: "10x10 Easy #40",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 23:47:58",
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
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.006274938583374
        },
        grid: [
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, null, 0, 0, null, 0, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, null, null, 0, null, 1, null, 0, null, null],
            [null, null, null, 1, null, 1, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_41",
        name: "P10_2_41",
        description: "10x10 Easy #41",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 23:47:59",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0047299861907959
        },
        grid: [
            [1, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 0, 0, null, 1, null, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 0, 0, null, null, 1, 0, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, 0, 1, null, null],
            [null, 1, null, null, 0, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_42",
        name: "P10_2_42",
        description: "10x10 Easy #42",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 23:48:01",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0047881603240967
        },
        grid: [
            [null, 1, 1, null, null, null, null, 0, 0, null],
            [null, null, null, null, 0, null, null, null, 0, null],
            [1, null, 1, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [0, null, null, 1, null, null, 1, null, null, null],
            [null, 1, null, 1, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_43",
        name: "P10_2_43",
        description: "10x10 Easy #43",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 23:48:02",
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
            initial_empty: 75,
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
                tryFillCells: 4
            },
            time_taken: 0.0038340091705322
        },
        grid: [
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [0, 1, null, null, null, null, null, null, 0, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, 0, 0, null],
            [1, null, null, null, null, 0, null, 1, null, 1],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, 0, null],
            [null, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_44",
        name: "P10_2_44",
        description: "10x10 Easy #44",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 23:48:04",
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
            initial_empty: 74,
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
            time_taken: 0.0040838718414307
        },
        grid: [
            [null, null, null, null, null, null, 0, null, null, null],
            [0, null, null, 1, null, 1, null, 1, 0, null],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, null, 1, 1, null, null, 0],
            [null, null, 0, null, null, null, null, 1, null, null],
            [0, null, null, null, null, 0, null, null, null, 0],
            [0, null, null, 1, null, null, null, 1, null, null],
            [null, null, 1, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_45",
        name: "P10_2_45",
        description: "10x10 Easy #45",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 23:48:05",
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
            initial_empty: 78,
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
            time_taken: 0.0030429363250732
        },
        grid: [
            [null, 0, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, 0, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_46",
        name: "P10_2_46",
        description: "10x10 Easy #46",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 23:48:07",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.004094123840332
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, 1, null],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, 0, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_47",
        name: "P10_2_47",
        description: "10x10 Easy #47",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 23:48:09",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0023632049560547
        },
        grid: [
            [1, null, null, null, null, null, null, 1, null, 1],
            [null, null, 1, 1, null, null, null, null, 1, null],
            [null, null, 1, null, 0, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null, 1, null],
            [null, null, null, null, null, 1, null, 1, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_48",
        name: "P10_2_48",
        description: "10x10 Easy #48",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 23:48:10",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0038340091705322
        },
        grid: [
            [null, 0, 0, null, 1, null, 0, null, 0, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, 0, null, 0, null],
            [null, 1, null, null, null, null, 1, 1, null, null],
            [0, null, null, 1, null, 1, null, null, null, null],
            [null, null, null, 0, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_49",
        name: "P10_2_49",
        description: "10x10 Easy #49",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 23:48:12",
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
            initial_empty: 76,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.005159854888916
        },
        grid: [
            [null, null, null, 0, null, null, 1, null, null, 0],
            [null, 1, 1, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 1, 1, null, null, 0, 1, null, 1],
            [1, null, 1, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_50",
        name: "P10_2_50",
        description: "10x10 Easy #50",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 23:48:13",
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
            initial_empty: 76,
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
                tryFillCells: 6
            },
            time_taken: 0.0045480728149414
        },
        grid: [
            [0, null, null, 0, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 0, null, null, null, 0, 0, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, 1, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_51",
        name: "P10_2_51",
        description: "10x10 Easy #51",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 23:48:15",
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
            initial_empty: 75,
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
            time_taken: 0.0042297840118408
        },
        grid: [
            [0, null, null, null, null, 0, 0, null, null, null],
            [null, 0, 1, null, null, null, null, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, 0, null],
            [1, null, null, 1, null, 1, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, 0, null],
            [null, null, null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_52",
        name: "P10_2_52",
        description: "10x10 Easy #52",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 23:48:16",
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
            initial_empty: 74,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0031380653381348
        },
        grid: [
            [null, 0, null, null, null, 1, 1, null, null, null],
            [null, null, 1, null, null, 1, null, null, 0, null],
            [null, 0, null, 0, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 0, null, 0, null, null, 0, 0, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [1, null, 0, null, null, null, 0, null, null, 1],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_53",
        name: "P10_2_53",
        description: "10x10 Easy #53",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 23:48:18",
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
            initial_empty: 74,
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
            time_taken: 0.0034301280975342
        },
        grid: [
            [1, null, null, 0, null, null, null, null, 0, 0],
            [null, null, null, 0, null, 1, 1, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, 0, 0, null],
            [1, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [1, null, 0, null, null, 0, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_54",
        name: "P10_2_54",
        description: "10x10 Easy #54",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 23:48:20",
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
            initial_empty: 77,
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
            time_taken: 0.0035181045532227
        },
        grid: [
            [null, null, null, null, 0, null, 1, null, null, null],
            [1, null, null, 1, null, 1, null, null, 0, null],
            [null, 0, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, 0, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_55",
        name: "P10_2_55",
        description: "10x10 Easy #55",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 23:48:21",
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
            initial_empty: 76,
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
            time_taken: 0.0037350654602051
        },
        grid: [
            [0, null, null, null, null, null, 0, null, 0, 0],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, 1, null, null, null, null, 1, null],
            [0, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 0, null],
            [null, 0, null, null, null, null, 1, 1, null, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, null, 0, null, null, null, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_56",
        name: "P10_2_56",
        description: "10x10 Easy #56",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 23:48:23",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 6,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0084490776062012
        },
        grid: [
            [null, null, null, null, 1, null, 1, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 0, null, null, null, 0],
            [null, 0, null, null, null, 1, null, null, 1, null],
            [null, 0, 0, null, null, null, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 1, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, 0, null, 0, null, null, null, 0, null, 1],
            [null, null, 1, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_57",
        name: "P10_2_57",
        description: "10x10 Easy #57",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 23:48:24",
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
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0066831111907959
        },
        grid: [
            [null, 0, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, 1, null, 0, null, null, null, null, 0],
            [null, null, null, null, 0, null, 0, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, null, 0, null, null, 0, null, 1],
            [null, null, 1, null, null, null, null, null, 1, null],
            [0, 0, null, null, 1, 1, null, null, null, null],
            [1, null, null, 0, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_58",
        name: "P10_2_58",
        description: "10x10 Easy #58",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 23:48:26",
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
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0060651302337646
        },
        grid: [
            [1, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, 1, null, null, 0],
            [null, null, null, 0, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, 0, null, 0, null, null, null, null, 0, null],
            [null, 0, null, null, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, 0, null, 0, null, 0, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_59",
        name: "P10_2_59",
        description: "10x10 Easy #59",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 23:48:27",
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
            time_taken: 0.0022702217102051
        },
        grid: [
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, 0],
            [0, null, null, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 1, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, 0, null, null, 0, null, null],
            [null, 0, 0, null, 0, null, null, 0, 1, null],
            [1, null, null, 0, null, 0, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_60",
        name: "P10_2_60",
        description: "10x10 Easy #60",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 23:48:29",
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
            initial_empty: 78,
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
            time_taken: 0.0055820941925049
        },
        grid: [
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, 0],
            [null, null, 1, null, null, null, null, 0, 0, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, 1, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, 1, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_61",
        name: "P10_2_61",
        description: "10x10 Easy #61",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 23:48:30",
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
            initial_empty: 76,
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
            time_taken: 0.0055079460144043
        },
        grid: [
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, 1, null],
            [null, null, null, null, 1, 1, null, null, 1, null],
            [1, null, 0, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_62",
        name: "P10_2_62",
        description: "10x10 Easy #62",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 23:48:32",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0047569274902344
        },
        grid: [
            [null, 0, 0, null, 0, null, 0, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 1],
            [null, 1, null, null, 1, 1, null, null, null, null],
            [1, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, 1, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, 0, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_63",
        name: "P10_2_63",
        description: "10x10 Easy #63",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 23:48:34",
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
            initial_empty: 75,
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
            time_taken: 0.0033340454101562
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, 0],
            [null, null, 1, null, 0, null, null, 1, 1, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, 1, null, null, 0, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, 1, null, 1, null, null, 1, null, 1, null],
            [0, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_64",
        name: "P10_2_64",
        description: "10x10 Easy #64",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 23:48:35",
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
            initial_empty: 77,
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
            time_taken: 0.0048089027404785
        },
        grid: [
            [0, null, 0, null, null, 0, 0, null, null, null],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, 1, null, null, null, 1],
            [0, 0, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, 1],
            [null, null, 0, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_65",
        name: "P10_2_65",
        description: "10x10 Easy #65",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 23:48:37",
        difficulty: "Easy",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0015699863433838
        },
        grid: [
            [0, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, 0, 1, null, 1, null, null, 1],
            [null, 1, 1, null, 1, null, null, 1, null, 1],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 0, null, null, 0, 0, null],
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [1, null, null, 0, 0, null, 1, null, 0, null],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_66",
        name: "P10_2_66",
        description: "10x10 Easy #66",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 23:48:38",
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
            initial_empty: 75,
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
                tryFillCells: 5
            },
            time_taken: 0.00901198387146
        },
        grid: [
            [null, 1, null, 0, null, 1, null, null, null, 0],
            [0, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, 0, null, null, 0],
            [0, null, null, 0, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, null, 0, null],
            [1, null, null, null, null, 1, null, 1, null, null],
            [1, null, 1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_67",
        name: "P10_2_67",
        description: "10x10 Easy #67",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 23:48:40",
        difficulty: "Easy",
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0020809173583984
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [1, null, 0, null, null, 0, 0, null, 0, null],
            [null, null, 0, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null, 0, null],
            [null, null, 0, 0, null, null, null, 1, null, null],
            [null, null, 0, null, 1, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, 0, null, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_68",
        name: "P10_2_68",
        description: "10x10 Easy #68",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 23:48:41",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0053958892822266
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, 0, null, 1],
            [0, null, null, null, null, 0, 1, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, 1],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, 1, null, 0, null],
            [null, 1, null, 1, null, null, null, null, 0, null],
            [1, null, null, 1, 1, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_69",
        name: "P10_2_69",
        description: "10x10 Easy #69",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 23:48:43",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0055410861968994
        },
        grid: [
            [null, null, null, null, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, 0, 0, null],
            [1, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [0, null, 0, null, null, 0, 0, null, null, 0],
            [null, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_70",
        name: "P10_2_70",
        description: "10x10 Easy #70",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 23:48:45",
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
            initial_empty: 76,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0039558410644531
        },
        grid: [
            [null, 1, 1, null, null, null, 1, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, 1, 1, null, 0, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, 1, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, 0, null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_71",
        name: "P10_2_71",
        description: "10x10 Easy #71",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 23:48:46",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023958683013916
        },
        grid: [
            [0, null, null, 1, null, null, 1, 1, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, 1, 1, null, null, null, null, 0, null, null],
            [null, 1, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 1, 0, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, 1, null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_72",
        name: "P10_2_72",
        description: "10x10 Easy #72",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 23:48:48",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0046360492706299
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, 0, null, null],
            [0, null, null, 1, 0, null, 0, null, null, 1],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, 0, null, null, null, 0, null, null, 0, null],
            [1, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 0, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_73",
        name: "P10_2_73",
        description: "10x10 Easy #73",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 23:48:49",
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
            initial_empty: 74,
            logic_iterations: 5,
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
            time_taken: 0.004086971282959
        },
        grid: [
            [1, null, null, null, null, 1, null, null, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [1, null, null, 1, null, null, null, 1, 1, null],
            [null, null, null, null, 0, null, 1, 1, null, 1],
            [null, 0, null, null, null, null, null, null, null, null],
            [1, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, 1, null, 0, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, 0, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_74",
        name: "P10_2_74",
        description: "10x10 Easy #74",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 23:48:51",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0055010318756104
        },
        grid: [
            [1, null, 0, 0, null, null, 1, null, 1, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 0],
            [null, null, 0, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [null, 0, null, 1, null, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 1, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_75",
        name: "P10_2_75",
        description: "10x10 Easy #75",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 23:48:53",
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
            initial_empty: 76,
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
            time_taken: 0.0043141841888428
        },
        grid: [
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, 1, null, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, 0, null, null, 0, 0, null, 1],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, 1, null],
            [null, null, 1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_76",
        name: "P10_2_76",
        description: "10x10 Easy #76",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 23:48:54",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.005047082901001
        },
        grid: [
            [1, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [null, 0, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, 0, null, null, null, 0, null],
            [null, null, 1, null, 0, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 0, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [null, 0, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_77",
        name: "P10_2_77",
        description: "10x10 Easy #77",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 23:48:56",
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
            initial_empty: 75,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 6,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.006101131439209
        },
        grid: [
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null, null, 0],
            [null, 1, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, 0],
            [null, 1, 0, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [1, 1, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_78",
        name: "P10_2_78",
        description: "10x10 Easy #78",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 23:48:57",
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
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.004802942276001
        },
        grid: [
            [0, null, null, 0, 0, null, 0, null, null, 0],
            [null, null, 1, null, null, 1, null, null, null, 0],
            [0, null, null, null, null, null, 0, null, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, 0, null, null],
            [1, 1, null, null, null, null, null, 1, null, null],
            [0, 1, null, null, null, 0, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_79",
        name: "P10_2_79",
        description: "10x10 Easy #79",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 23:48:59",
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
            initial_empty: 77,
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
            time_taken: 0.0029008388519287
        },
        grid: [
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, 1, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 0, 0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, 0, null, 1, null],
            [null, null, 0, null, null, null, 0, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_80",
        name: "P10_2_80",
        description: "10x10 Easy #80",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 23:49:01",
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
            initial_empty: 76,
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
                tryFillCells: 5
            },
            time_taken: 0.0040760040283203
        },
        grid: [
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, 1, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [0, null, null, null, null, 0, 0, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, 1, null, null, 1, 0, null],
            [null, 0, 1, null, null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_81",
        name: "P10_2_81",
        description: "10x10 Easy #81",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 23:49:02",
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
            initial_empty: 75,
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
            time_taken: 0.0085301399230957
        },
        grid: [
            [null, null, null, 0, null, null, null, null, 0, null],
            [1, null, null, null, null, null, 0, null, null, 1],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, 1, null, 1, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, 1],
            [0, null, null, 1, null, 0, null, null, 1, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_82",
        name: "P10_2_82",
        description: "10x10 Easy #82",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 23:49:04",
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
                completeRowsColumns: 5,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0071220397949219
        },
        grid: [
            [null, null, null, 1, null, 0, null, null, null, null],
            [1, null, null, 1, null, null, 1, 1, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, 1, null, null, null, 0, null],
            [null, 1, null, 1, null, null, null, null, 0, 0],
            [1, null, null, null, 1, null, 1, null, null, null],
            [null, 0, null, null, 1, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_83",
        name: "P10_2_83",
        description: "10x10 Easy #83",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 23:49:05",
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
            initial_empty: 76,
            logic_iterations: 6,
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
            time_taken: 0.007004976272583
        },
        grid: [
            [null, 1, null, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, null, 1, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [0, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, 0, null, null],
            [null, 0, 0, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_84",
        name: "P10_2_84",
        description: "10x10 Easy #84",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 23:49:07",
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
            initial_empty: 75,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0079710483551025
        },
        grid: [
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, 1, 1, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, null, null, 0],
            [1, null, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, 1, null, null],
            [0, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_85",
        name: "P10_2_85",
        description: "10x10 Easy #85",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 23:49:08",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 4,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 80,
            logic_iterations: 10,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 6,
                preventTrio: 7,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 8
            },
            time_taken: 0.012353897094727
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 1, 1, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, null, 1, null, null, null, null, 1, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [0, null, null, 0, null, 1, null, null, 0, null],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_86",
        name: "P10_2_86",
        description: "10x10 Easy #86",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 23:49:10",
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
            initial_empty: 77,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.005803108215332
        },
        grid: [
            [1, null, null, null, null, null, null, 0, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, 1, null, null, null, 1, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [1, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_87",
        name: "P10_2_87",
        description: "10x10 Easy #87",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 23:49:11",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0028629302978516
        },
        grid: [
            [null, null, null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, null, null, null, 1, 1],
            [null, 0, null, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, null, 0, null],
            [null, 1, 1, null, 0, null, null, null, 0, null],
            [1, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, null, 0, 1, null, 0, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_88",
        name: "P10_2_88",
        description: "10x10 Easy #88",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 23:49:13",
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
            initial_empty: 76,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0054361820220947
        },
        grid: [
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 1, 1, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, 0, null, null, 1, null],
            [1, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, 0, null, 1, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, 0, null, 1, 1, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 1, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_89",
        name: "P10_2_89",
        description: "10x10 Easy #89",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 23:49:15",
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
                completeRowsColumns: 1,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.007133960723877
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, 1],
            [1, null, 0, null, null, 1, null, 1, null, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [0, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [0, null, null, null, 1, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, 1, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [0, 1, null, 0, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_90",
        name: "P10_2_90",
        description: "10x10 Easy #90",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 23:49:16",
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
            initial_empty: 76,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.010073184967041
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 0, null, 0, null],
            [null, 0, 0, null, 1, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 1, 1],
            [null, 0, null, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 0, 0, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_91",
        name: "P10_2_91",
        description: "10x10 Easy #91",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 23:49:18",
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
            initial_empty: 69,
            logic_iterations: 7,
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
                tryFillCells: 5
            },
            time_taken: 0.004741907119751
        },
        grid: [
            [null, null, 0, 1, null, null, 1, 0, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, 0, null, null, 1],
            [null, null, 1, null, null, null, 0, null, null, 1],
            [null, 0, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [0, 1, null, null, null, 1, null, null, null, 0],
            [null, 1, null, 0, null, null, null, 1, null, 1],
            [1, null, 1, null, null, 1, null, null, null, null],
            [1, null, null, null, null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_92",
        name: "P10_2_92",
        description: "10x10 Easy #92",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 23:49:19",
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
            initial_empty: 78,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0040340423583984
        },
        grid: [
            [null, 0, 0, null, null, null, 0, null, null, 0],
            [null, null, 0, null, 1, 1, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, 0, 1, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, null, null, null, null],
            [0, null, 0, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_93",
        name: "P10_2_93",
        description: "10x10 Easy #93",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 23:49:21",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0032389163970947
        },
        grid: [
            [null, 0, null, 1, 1, null, 0, null, 1, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, 0],
            [0, null, null, null, 1, null, null, 0, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 1, 1],
            [1, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, 0, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_94",
        name: "P10_2_94",
        description: "10x10 Easy #94",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 23:49:22",
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
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0043821334838867
        },
        grid: [
            [null, 0, null, 0, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, 1, 1, null, 0, null, 0, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, 1, 1, null, null, null, null, 0, 0, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [0, null, 1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_95",
        name: "P10_2_95",
        description: "10x10 Easy #95",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 23:49:24",
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
            initial_empty: 74,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0049660205841064
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, null],
            [1, null, 1, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, 0],
            [null, null, 0, null, null, 0, null, null, null, 0],
            [1, null, null, 1, null, null, 1, null, null, null],
            [1, null, null, null, null, 1, null, 1, 1, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [1, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_96",
        name: "P10_2_96",
        description: "10x10 Easy #96",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 23:49:25",
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
            initial_empty: 75,
            logic_iterations: 7,
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
                tryFillCells: 6
            },
            time_taken: 0.0049037933349609
        },
        grid: [
            [null, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, null, null, 0, null, 0, null],
            [null, null, 1, null, 1, 0, null, null, null, null],
            [0, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, 1, 1, null, null, 0, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 1, null, null, 1, null, null, 0],
            [null, 1, null, 1, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_97",
        name: "P10_2_97",
        description: "10x10 Easy #97",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 23:49:27",
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
            initial_empty: 78,
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
                tryFillCells: 2
            },
            time_taken: 0.0027139186859131
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, 1, null, 0, null, null, null, null, null],
            [null, null, 1, 1, null, null, 0, null, null, null],
            [0, null, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, null, 0, null, null, null],
            [null, 0, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_98",
        name: "P10_2_98",
        description: "10x10 Easy #98",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 23:49:29",
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
            initial_empty: 75,
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
            time_taken: 0.0032811164855957
        },
        grid: [
            [null, null, 1, 1, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, 0, null, null, 0, null, null, null, 1, null],
            [1, null, null, null, null, 1, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, 1, null, 1, null],
            [null, null, 0, null, null, null, null, 0, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 0, 0, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_99",
        name: "P10_2_99",
        description: "10x10 Easy #99",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 23:49:30",
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
            initial_empty: 78,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.010976076126099
        },
        grid: [
            [null, 1, null, null, null, null, null, null, 1, null],
            [null, null, null, null, 0, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, 1, 1, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, 1, 1, null, 0, null, null],
            [null, null, null, 1, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, 1, null, null, null, null, 1, 1]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_100",
        name: "P10_2_100",
        description: "10x10 Easy #100",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 23:49:32",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 70,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 8
            },
            time_taken: 0.010791063308716
        },
        grid: [
            [1, null, null, 0, null, 1, 0, null, 0, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [1, null, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, null, null, 1],
            [null, 1, null, null, null, 1, null, null, 1, null],
            [0, 1, null, null, 0, null, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null, 1, 1],
            [0, null, null, 0, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_101",
        name: "P10_2_101",
        description: "10x10 Easy #101",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 23:49:33",
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
            initial_empty: 77,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.005342960357666
        },
        grid: [
            [1, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, 1, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, 0, null, 1, null, 0, null],
            [null, 1, null, null, null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_102",
        name: "P10_2_102",
        description: "10x10 Easy #102",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 23:49:35",
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
            initial_empty: 75,
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
            time_taken: 0.003838062286377
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, 0, 0, null, 1, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, null, null, 1],
            [0, null, 0, null, null, null, 1, null, 1, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [null, null, 0, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_103",
        name: "P10_2_103",
        description: "10x10 Easy #103",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 23:49:37",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 6,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0086820125579834
        },
        grid: [
            [1, null, null, null, null, null, null, 1, 0, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, 1, null, 0, null, 0, null],
            [null, 0, 1, null, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, 1, 0, null, 0, null, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [1, null, 0, null, 0, null, null, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_104",
        name: "P10_2_104",
        description: "10x10 Easy #104",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 23:49:38",
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
            initial_empty: 76,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0058779716491699
        },
        grid: [
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, 1, null, null, null, 1, null],
            [1, null, null, null, 1, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, 1, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_105",
        name: "P10_2_105",
        description: "10x10 Easy #105",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 23:49:40",
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
            initial_empty: 75,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 7,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0048878192901611
        },
        grid: [
            [null, 0, 0, null, null, 1, null, 1, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, null, 1, 1, null, null, 1, null, null, null],
            [null, null, null, 1, 1, null, null, null, 0, null],
            [null, 1, null, null, null, 0, null, 0, null, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_106",
        name: "P10_2_106",
        description: "10x10 Easy #106",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 23:49:41",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0023269653320312
        },
        grid: [
            [0, null, 1, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 0, 0, null, null, 1, null, 1, 0],
            [1, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, 1, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_107",
        name: "P10_2_107",
        description: "10x10 Easy #107",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 23:49:43",
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
            initial_empty: 75,
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
            time_taken: 0.004673957824707
        },
        grid: [
            [null, null, 1, 1, null, null, null, null, null, 1],
            [null, null, 0, null, 0, 0, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [1, null, null, 0, null, null, 1, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, 0, 0, null, null, 1, 0, null, 0, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, 1, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_108",
        name: "P10_2_108",
        description: "10x10 Easy #108",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 23:49:44",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0026791095733643
        },
        grid: [
            [null, null, 1, 1, null, 1, 1, null, null, 1],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, 0, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, 0, 0],
            [null, null, 1, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_109",
        name: "P10_2_109",
        description: "10x10 Easy #109",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 23:49:46",
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
            initial_empty: 73,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.003572940826416
        },
        grid: [
            [null, null, null, null, null, 0, null, null, 0, 0],
            [1, null, 0, null, null, null, null, null, null, null],
            [1, null, null, 0, null, 0, null, null, null, null],
            [null, 1, null, 0, null, 0, null, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, 1, null, null, 0, 0, null],
            [1, null, null, null, null, null, null, null, null, 0],
            [1, null, 1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_110",
        name: "P10_2_110",
        description: "10x10 Easy #110",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 23:49:48",
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
            initial_empty: 76,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0057399272918701
        },
        grid: [
            [0, 0, null, null, 1, null, 0, null, 0, null],
            [null, 0, null, null, null, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [0, null, null, 1, 1, null, null, null, null, 0],
            [null, null, 0, null, null, 0, null, null, 1, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_111",
        name: "P10_2_111",
        description: "10x10 Easy #111",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 23:49:49",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0023598670959473
        },
        grid: [
            [null, 0, 0, null, null, null, null, null, 1, null],
            [null, 0, null, 0, null, null, null, 1, null, null],
            [null, null, 0, null, 1, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, 1, null, 1, 1, null, null, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, 0, null, 0, null],
            [0, null, null, 1, 1, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_112",
        name: "P10_2_112",
        description: "10x10 Easy #112",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 23:49:51",
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
            initial_empty: 78,
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
            time_taken: 0.0034511089324951
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, 0, 0, null, 1],
            [null, 1, null, 1, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [0, null, null, null, 1, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, 0],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_113",
        name: "P10_2_113",
        description: "10x10 Easy #113",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 23:49:52",
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
            initial_empty: 76,
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
            time_taken: 0.0049939155578613
        },
        grid: [
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, null],
            [null, 0, null, 0, null, null, null, 0, null, 1],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [0, null, null, null, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [null, 0, 0, null, null, 0, null, null, 0, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_114",
        name: "P10_2_114",
        description: "10x10 Easy #114",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 23:49:54",
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
            initial_empty: 75,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 6,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0072958469390869
        },
        grid: [
            [null, 0, null, null, null, null, null, null, 0, 1],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, 0, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, 1, 1, null, null, 1, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_115",
        name: "P10_2_115",
        description: "10x10 Easy #115",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 23:49:55",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0029468536376953
        },
        grid: [
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, 0, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 1, null, null, 1, null, 0, null, 0, null],
            [1, null, null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, 0, null, null, 0, null, null],
            [1, 0, null, null, 1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_116",
        name: "P10_2_116",
        description: "10x10 Easy #116",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 23:49:57",
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
            initial_empty: 76,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 7,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0095219612121582
        },
        grid: [
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, 1, 1, null, 0, null, 1, null, 0, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, 0, null, null, 1],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, 1, 1, null, null, 0],
            [1, 1, null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_117",
        name: "P10_2_117",
        description: "10x10 Easy #117",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 23:49:58",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0025711059570312
        },
        grid: [
            [null, 0, null, null, 0, null, 0, null, 0, 0],
            [1, null, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, null, 0, null],
            [1, 0, null, 0, null, null, null, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, 0, null],
            [null, null, null, 0, null, 0, 0, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, null, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_118",
        name: "P10_2_118",
        description: "10x10 Easy #118",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 23:50:00",
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
            initial_empty: 73,
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
            time_taken: 0.003046989440918
        },
        grid: [
            [null, null, null, null, 0, null, 0, null, null, 0],
            [0, null, 0, null, null, null, 0, null, 1, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, 1],
            [null, 0, null, null, null, 0, null, null, null, 1],
            [null, null, 1, null, 1, null, null, 0, null, null],
            [null, null, 1, null, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_119",
        name: "P10_2_119",
        description: "10x10 Easy #119",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 23:50:02",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0030760765075684
        },
        grid: [
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, 0, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, 1],
            [0, null, null, null, null, 0, null, 0, 0, null],
            [0, 0, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [1, null, null, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_120",
        name: "P10_2_120",
        description: "10x10 Easy #120",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 23:50:03",
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
            initial_empty: 76,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 3,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0043740272521973
        },
        grid: [
            [null, 1, 1, null, null, 1, null, null, null, null],
            [null, null, 1, null, null, 1, 1, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, 1, null, null, null, null, null, null],
            [1, null, null, null, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, 0, null, 1, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, 1, null, null, null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_121",
        name: "P10_2_121",
        description: "10x10 Easy #121",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 23:50:05",
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
            initial_empty: 75,
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
            time_taken: 0.0072791576385498
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, null, 1, null, null, 0],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 0],
            [0, null, null, null, null, 1, null, 1, null, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 1, null],
            [null, 1, null, null, 1, null, null, null, null, 0],
            [null, null, null, 0, null, null, null, 1, null, null],
            [0, null, 1, null, 1, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_122",
        name: "P10_2_122",
        description: "10x10 Easy #122",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 23:50:06",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0042440891265869
        },
        grid: [
            [null, null, null, null, 0, null, null, 1, null, null],
            [0, null, 1, null, 0, 1, null, null, null, null],
            [null, null, 1, null, null, 1, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, 0, 0],
            [1, null, 0, null, null, 1, 1, null, null, 0],
            [1, null, 0, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_123",
        name: "P10_2_123",
        description: "10x10 Easy #123",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 23:50:08",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0044341087341309
        },
        grid: [
            [1, null, null, null, null, null, null, 0, 0, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, 0, 0, null, 0, null, null, 1, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, 0, 0, null, null],
            [null, null, 1, 1, null, null, null, null, 1, null],
            [null, 0, null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_124",
        name: "P10_2_124",
        description: "10x10 Easy #124",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 23:50:10",
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
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0032508373260498
        },
        grid: [
            [null, 1, null, null, null, null, null, null, null, 1],
            [null, null, null, 0, null, null, 1, null, 1, null],
            [null, null, 1, 0, null, null, null, 1, null, null],
            [1, null, 1, null, null, null, null, null, 0, null],
            [null, null, null, null, 0, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, 1, null, 1, null],
            [0, 1, null, 0, null, null, null, null, null, null],
            [1, null, 0, 0, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_125",
        name: "P10_2_125",
        description: "10x10 Easy #125",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 23:50:11",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 7,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 8
            },
            time_taken: 0.0082290172576904
        },
        grid: [
            [null, 1, null, null, 0, null, null, 0, 0, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, null, 0, null, null, 0, null, 0],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, 0],
            [1, 1, null, null, null, null, 1, null, null, null],
            [null, 1, null, null, 0, null, null, 0, null, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_126",
        name: "P10_2_126",
        description: "10x10 Easy #126",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 23:50:13",
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
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.005706787109375
        },
        grid: [
            [1, null, 0, 0, null, null, 1, null, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1],
            [null, null, null, 1, 1, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, 0, null, 0, null, null, 0, null, 1, 1],
            [null, null, null, null, null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_127",
        name: "P10_2_127",
        description: "10x10 Easy #127",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 23:50:14",
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
            initial_empty: 77,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0065929889678955
        },
        grid: [
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, 0, 0, null, 1, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, null, null, 1, null],
            [0, 0, null, 1, null, null, null, null, 1, 0],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, null, 1, null, 1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_128",
        name: "P10_2_128",
        description: "10x10 Easy #128",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 23:50:16",
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
            initial_empty: 77,
            logic_iterations: 7,
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
                tryFillCells: 5
            },
            time_taken: 0.0042300224304199
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, null, null, 0],
            [null, 0, null, 0, null, 0, null, null, 0, 0],
            [null, null, null, null, null, null, null, 1, null, null],
            [1, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, 1, 1, null],
            [1, 1, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_129",
        name: "P10_2_129",
        description: "10x10 Easy #129",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 23:50:17",
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
            initial_empty: 78,
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
            time_taken: 0.0047109127044678
        },
        grid: [
            [null, null, null, 1, null, 0, 0, null, null, 1],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [0, 0, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 0, 1, null, 0, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_130",
        name: "P10_2_130",
        description: "10x10 Easy #130",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 23:50:19",
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
            initial_empty: 77,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0033440589904785
        },
        grid: [
            [0, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 0, null, 0, null, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 1, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_131",
        name: "P10_2_131",
        description: "10x10 Easy #131",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 23:50:21",
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
            initial_empty: 76,
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
            time_taken: 0.0036230087280273
        },
        grid: [
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, 1, 1, null, null, null, 1, null, null, 0],
            [null, 0, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [1, null, null, null, 1, null, null, null, 1, null],
            [null, 0, 0, null, null, null, 0, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [1, null, null, 1, null, 0, null, null, null, null],
            [null, null, 0, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_132",
        name: "P10_2_132",
        description: "10x10 Easy #132",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 23:50:23",
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
            initial_empty: 76,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0076851844787598
        },
        grid: [
            [0, null, null, null, null, null, null, null, 0, 1],
            [null, 1, null, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null, null, 1],
            [0, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_133",
        name: "P10_2_133",
        description: "10x10 Easy #133",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 23:50:24",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0033628940582275
        },
        grid: [
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, 1],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 0, null, 0, 1],
            [null, null, null, 0, null, null, null, null, null, 1],
            [0, null, 1, null, 1, null, null, null, 0, null],
            [0, null, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 0, null, null, null, 0, 1, null, 1, null],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_134",
        name: "P10_2_134",
        description: "10x10 Easy #134",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 23:50:26",
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
            initial_empty: 73,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0050361156463623
        },
        grid: [
            [1, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, 0, 0, null, 0],
            [null, null, null, null, 0, null, null, 1, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, 1, null, 0, null, null, null],
            [1, 1, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 1, 0, null, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_135",
        name: "P10_2_135",
        description: "10x10 Easy #135",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 23:50:28",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.003587007522583
        },
        grid: [
            [null, 1, 1, null, null, 1, null, 1, 1, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, null, 0, null, 1, null, null, null, 1, null],
            [null, 0, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, 0],
            [null, 0, null, null, 1, null, null, 0, null, null],
            [0, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_136",
        name: "P10_2_136",
        description: "10x10 Easy #136",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 23:50:29",
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
            initial_empty: 77,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.00642991065979
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, null, 1, null, null, 1, 0, null],
            [null, null, null, 0, 1, null, null, 1, null, 1],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, null],
            [0, null, null, null, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, 0, 0, null, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_137",
        name: "P10_2_137",
        description: "10x10 Easy #137",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 23:50:31",
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
                preventTrio: 2,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0066568851470947
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 1],
            [null, 1, 1, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, null, 0, null, null, 1, null],
            [null, null, null, null, null, null, null, 0, 1, null],
            [null, 0, null, 0, 0, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1, 1, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, 0, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_138",
        name: "P10_2_138",
        description: "10x10 Easy #138",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 23:50:32",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0048589706420898
        },
        grid: [
            [1, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, 0, null, null, 0, null],
            [1, null, null, null, null, 0, null, null, null, 1],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [1, null, 0, null, null, null, null, 1, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, 1, null, 1],
            [null, null, 1, null, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_139",
        name: "P10_2_139",
        description: "10x10 Easy #139",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 23:50:34",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0027241706848145
        },
        grid: [
            [null, 0, null, 0, null, 1, 1, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 1, null, 1],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, 1, null, null, null, null, 1],
            [0, null, null, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, null, 1, 1, null, 1, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_140",
        name: "P10_2_140",
        description: "10x10 Easy #140",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 23:50:35",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0043928623199463
        },
        grid: [
            [null, null, 0, null, null, null, null, 1, null, 0],
            [null, null, 0, null, 1, null, 0, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 0, null, 1],
            [0, null, null, null, null, 1, null, null, null, null],
            [null, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, null, 0, null, null, 1, null, 1],
            [null, 1, null, null, null, 1, 1, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_141",
        name: "P10_2_141",
        description: "10x10 Easy #141",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 23:50:37",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0059599876403809
        },
        grid: [
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, 1, null, null, 0, null, 1, null, 0, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 0, null],
            [null, null, null, 1, 1, null, 0, null, null, null],
            [null, null, null, 1, null, 0, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, 1, 1],
            [null, null, null, null, 0, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_142",
        name: "P10_2_142",
        description: "10x10 Easy #142",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 23:50:38",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0023109912872314
        },
        grid: [
            [null, 1, 1, null, 0, null, 0, null, 0, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [1, null, null, null, null, null, null, null, 0, null],
            [null, null, 0, 1, null, null, null, 1, null, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, 0, null, 1, 1, null],
            [null, 0, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, 0, null, null],
            [null, 1, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_143",
        name: "P10_2_143",
        description: "10x10 Easy #143",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 23:50:40",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0087580680847168
        },
        grid: [
            [null, 1, null, null, null, null, 0, null, null, 0],
            [null, null, 0, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, 0, 0],
            [null, 0, null, null, null, 0, null, null, null, null],
            [0, null, null, 0, null, null, 1, null, 1, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, 0, null, null, 0, null, null, 1, null, 0],
            [null, null, 0, null, null, null, 1, null, null, 0],
            [null, null, null, 1, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_144",
        name: "P10_2_144",
        description: "10x10 Easy #144",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 23:50:42",
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
            initial_empty: 72,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0082440376281738
        },
        grid: [
            [0, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, 1, 1, null, null, 1],
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [null, 0, null, null, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 1, null, null, null, null, null],
            [1, null, 0, null, 1, 0, null, 0, null, 0],
            [null, 0, null, null, null, null, null, 0, null, null],
            [1, 1, null, 1, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_145",
        name: "P10_2_145",
        description: "10x10 Easy #145",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 23:50:43",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.003223180770874
        },
        grid: [
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, 0, 0, null, 1, null],
            [null, 1, null, null, 1, null, null, 1, null, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, 1],
            [null, null, 0, 0, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 0, 0, null],
            [0, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [0, null, null, null, 1, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_146",
        name: "P10_2_146",
        description: "10x10 Easy #146",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 23:50:45",
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
            initial_empty: 77,
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
            time_taken: 0.0040678977966309
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, null, 1, null, null, 1],
            [1, 1, null, null, null, 0, null, null, null, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, null, null, 1, 1, null, null, null],
            [0, null, 0, null, null, null, null, null, 0, null],
            [null, null, 0, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_147",
        name: "P10_2_147",
        description: "10x10 Easy #147",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 23:50:47",
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
            initial_empty: 77,
            logic_iterations: 5,
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
                tryFillCells: 3
            },
            time_taken: 0.0028641223907471
        },
        grid: [
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, 1, null, null, null, null, 1, null, 0, null],
            [null, 1, null, 1, 1, null, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, 0, null, 1, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_148",
        name: "P10_2_148",
        description: "10x10 Easy #148",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 23:50:48",
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
            initial_empty: 75,
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
            time_taken: 0.0038089752197266
        },
        grid: [
            [null, 1, null, null, null, null, null, 1, 1, null],
            [null, null, null, 1, 1, null, null, 1, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, null, 1],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, 0, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [0, null, null, 0, null, 0, null, null, null, 0],
            [null, null, 0, null, null, null, null, 1, null, 1],
            [0, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_149",
        name: "P10_2_149",
        description: "10x10 Easy #149",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 23:50:50",
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
                completeRowsColumns: 2,
                preventTrio: 4,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0045549869537354
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, 1, null, null, 0, null, 0],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, null, 0, 0, null],
            [null, 1, null, 0, 0, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, 0, null, null, null, null],
            [0, 1, null, null, null, null, null, null, 0, 0],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, null, 0, null, 0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_150",
        name: "P10_2_150",
        description: "10x10 Easy #150",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 23:50:51",
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
            time_taken: 0.0024011135101318
        },
        grid: [
            [null, null, 1, null, 1, null, 0, null, null, 1],
            [null, 0, null, null, null, null, null, 0, null, 1],
            [1, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, 1],
            [null, 0, null, 1, 1, null, null, null, 0, null],
            [null, null, null, 0, null, null, null, 1, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, 0, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_151",
        name: "P10_2_151",
        description: "10x10 Easy #151",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 23:50:53",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0050220489501953
        },
        grid: [
            [0, null, null, 1, null, null, 0, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 1, null],
            [0, null, null, null, 0, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, null, 0, 0, null, null, 0, 1, null],
            [null, null, null, null, null, 1, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_152",
        name: "P10_2_152",
        description: "10x10 Easy #152",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 23:50:54",
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
            initial_empty: 74,
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
            time_taken: 0.0032389163970947
        },
        grid: [
            [null, null, null, 1, null, 1, null, null, null, null],
            [0, null, 0, 1, null, 1, null, 1, 0, null],
            [1, 1, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 0, null, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [0, null, 1, null, null, 1, null, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 0, null, null],
            [0, null, null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_153",
        name: "P10_2_153",
        description: "10x10 Easy #153",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 23:50:56",
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
            initial_empty: 74,
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
            time_taken: 0.0032129287719727
        },
        grid: [
            [null, 0, null, 0, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, 0, null, 1, 1, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, 0, 0, null, null, 0, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [0, null, null, 0, null, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, null, 0, 1],
            [null, null, null, 0, null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_154",
        name: "P10_2_154",
        description: "10x10 Easy #154",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 23:50:58",
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
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0042009353637695
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, null, null, null, 1, null],
            [null, 1, null, null, 1, null, 1, null, 1, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, null, 0],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, 1, null, 1, null, null, null, 0, null, null],
            [null, null, null, 1, 0, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_155",
        name: "P10_2_155",
        description: "10x10 Easy #155",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 23:50:59",
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
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0060989856719971
        },
        grid: [
            [0, null, null, 1, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, null, null, 1, null],
            [null, null, null, null, null, 1, null, 1, null, null],
            [1, null, null, 1, 1, null, null, null, 1, null],
            [0, null, null, 0, null, null, null, 0, null, null],
            [null, null, 0, null, null, 0, null, 0, 0, null],
            [0, null, 0, null, null, null, null, null, null, 1],
            [null, null, null, null, 1, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_156",
        name: "P10_2_156",
        description: "10x10 Easy #156",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 23:51:01",
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
            initial_empty: 76,
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
            time_taken: 0.0083410739898682
        },
        grid: [
            [null, null, null, null, 0, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, 0, null, 0],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, 0, null, 1, null, null, null, 1],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 0, null, null, null, null, 1, 1, null],
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_157",
        name: "P10_2_157",
        description: "10x10 Easy #157",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 23:51:02",
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
            initial_empty: 76,
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
            time_taken: 0.0033950805664062
        },
        grid: [
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, 1, null, null, null, 1, null, null, null, null],
            [0, null, 1, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, null, null, 1, null, 0, null, null, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, null, 0, 0, null, null, 1, null, null],
            [null, 0, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_158",
        name: "P10_2_158",
        description: "10x10 Easy #158",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 23:51:04",
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
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0056400299072266
        },
        grid: [
            [0, null, null, null, 1, null, null, null, 0, null],
            [null, 1, null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, 0, null, null, null, 1, null, null, null, 1],
            [null, null, null, 0, null, null, null, null, null, 1],
            [null, 0, 1, null, null, 0, null, null, null, null],
            [0, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 0, 1, null],
            [null, null, 1, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_159",
        name: "P10_2_159",
        description: "10x10 Easy #159",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 23:51:05",
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
            initial_empty: 76,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 5,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0054740905761719
        },
        grid: [
            [null, 1, null, 1, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 0, 0, null, 0, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, 1, null, 0, null, null, null, null, null, null],
            [null, null, 0, 0, null, null, null, null, 1, 1],
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, 1, 1, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_160",
        name: "P10_2_160",
        description: "10x10 Easy #160",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 23:51:07",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 5,
                preventTrio: 3,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0066430568695068
        },
        grid: [
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, 0, null, 0, null, null, 1, null, null],
            [null, null, null, null, 0, null, null, null, 0, null],
            [null, 1, null, null, null, 1, null, null, 0, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, 0, null, 0, null, 0, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, null, null, 1, null, null, 0, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, null, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_161",
        name: "P10_2_161",
        description: "10x10 Easy #161",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 23:51:09",
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
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0049488544464111
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, 0, null, 1, null],
            [null, null, 1, null, null, 1, null, null, null, null],
            [null, 0, null, null, null, null, null, null, null, 0],
            [1, null, null, null, 1, 0, null, 1, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, 1, null, 1, 1, null, null, null, null],
            [null, null, 0, 0, null, null, null, 1, 1, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, 0, null, null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_162",
        name: "P10_2_162",
        description: "10x10 Easy #162",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 23:51:10",
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
            initial_empty: 77,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 6,
                fillSandwiches: 6,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.010251045227051
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, 0, null, 0, null, 1, null, null, null, 1],
            [null, 0, null, null, 1, null, null, null, null, 1],
            [null, null, 1, null, null, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, 1, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_163",
        name: "P10_2_163",
        description: "10x10 Easy #163",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 23:51:12",
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
            initial_empty: 78,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0077998638153076
        },
        grid: [
            [null, 0, 1, null, 1, 0, null, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, 0, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [null, null, null, 0, 0, null, null, null, null, 0],
            [null, null, null, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, 1, 1],
            [null, null, 0, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_164",
        name: "P10_2_164",
        description: "10x10 Easy #164",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 23:51:13",
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
                completeRowsColumns: 4,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0035200119018555
        },
        grid: [
            [null, null, null, 1, null, null, 1, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, 0, null, 0, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [0, null, null, null, 0, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, 0, 0, null, 0, 0, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 0, null, 1, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_165",
        name: "P10_2_165",
        description: "10x10 Easy #165",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 23:51:15",
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
            initial_empty: 74,
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
            time_taken: 0.0043060779571533
        },
        grid: [
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 1, 1, null, null, null, null, 0, null, null],
            [null, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, 0, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 1, null, null, null, 0],
            [null, 0, 0, null, null, 1, null, 0, null, null],
            [null, null, 0, null, null, null, 0, null, null, 1],
            [1, null, null, null, 1, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_166",
        name: "P10_2_166",
        description: "10x10 Easy #166",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 23:51:16",
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
            initial_empty: 75,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.00649094581604
        },
        grid: [
            [0, null, null, 1, 1, null, 0, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, 1],
            [null, 0, null, null, null, null, 1, null, null, null],
            [null, 1, 1, null, null, 0, null, 0, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, 0, 1, null, null],
            [null, 1, null, null, null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_167",
        name: "P10_2_167",
        description: "10x10 Easy #167",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 23:51:18",
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
            initial_empty: 74,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 4,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0045320987701416
        },
        grid: [
            [null, null, null, null, null, 1, null, null, 0, null],
            [1, 1, null, 0, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, 1, 1, null, 1, 1, null, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, 1, null],
            [null, null, 0, null, null, null, null, null, null, 0],
            [null, null, null, null, 1, 1, null, 0, null, null],
            [null, 1, null, null, null, null, null, 1, null, null],
            [0, null, null, 1, null, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_168",
        name: "P10_2_168",
        description: "10x10 Easy #168",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 23:51:20",
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
            initial_empty: 72,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 4,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0053620338439941
        },
        grid: [
            [null, null, null, null, null, 1, null, 0, null, 0],
            [null, 0, 0, null, null, 0, 0, null, null, null],
            [1, null, null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 0, null, 1],
            [null, null, null, null, 0, null, null, null, 1, null],
            [null, null, 0, null, null, 1, null, null, null, null],
            [1, null, null, null, 0, null, null, null, 1, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 0, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_169",
        name: "P10_2_169",
        description: "10x10 Easy #169",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 23:51:21",
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
            initial_empty: 72,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 5,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.004918098449707
        },
        grid: [
            [null, null, null, null, null, null, 0, null, null, 0],
            [1, null, 1, null, 1, null, null, 1, null, null],
            [1, null, 1, 0, null, 0, null, null, null, 1],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 0, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [0, null, null, 1, 1, null, null, null, null, 1],
            [null, null, 0, null, null, null, 0, null, 0, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_170",
        name: "P10_2_170",
        description: "10x10 Easy #170",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 23:51:23",
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
            initial_empty: 74,
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
                tryFillCells: 3
            },
            time_taken: 0.0048248767852783
        },
        grid: [
            [null, null, null, null, 1, null, 1, null, 0, null],
            [null, 0, 0, null, null, null, null, null, 0, null],
            [1, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, 1, 1, null, null, null],
            [null, null, null, null, 1, null, null, 0, null, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [0, 0, null, null, 0, 1, null, null, null, 1],
            [1, null, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_171",
        name: "P10_2_171",
        description: "10x10 Easy #171",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 23:51:24",
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
            initial_empty: 74,
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
                tryFillCells: 4
            },
            time_taken: 0.0043468475341797
        },
        grid: [
            [0, null, null, null, 0, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, null, null, 1, null, null, null, null],
            [1, null, null, null, 0, 1, null, null, 0, null],
            [null, null, null, 0, null, null, null, null, 0, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, null, null, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, 1, null, 0, null, 0, null, 1, null],
            [null, null, 0, null, 0, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_172",
        name: "P10_2_172",
        description: "10x10 Easy #172",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 23:51:26",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 74,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 5,
                preventTrio: 6,
                fillSandwiches: 5,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0089230537414551
        },
        grid: [
            [0, 0, null, null, 0, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [0, null, null, 0, null, null, null, 1, 1, null],
            [null, null, null, null, null, 1, null, 0, null, null],
            [null, null, 1, 1, null, null, null, null, 1, 0],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, 1, null, null, 0, null, 1],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_173",
        name: "P10_2_173",
        description: "10x10 Easy #173",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 23:51:27",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0045948028564453
        },
        grid: [
            [null, null, null, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, 0, null, 1, 1, null, null, 1, 0, null],
            [1, null, null, null, null, 0, 0, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, null],
            [0, null, null, null, null, 0, null, null, null, 1],
            [null, 0, null, 1, null, null, null, null, 0, null],
            [0, 0, null, null, null, null, 1, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null],
            [0, 0, null, null, null, null, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_174",
        name: "P10_2_174",
        description: "10x10 Easy #174",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 23:51:29",
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
            time_taken: 0.0034799575805664
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, 0, 1, null, 1, null],
            [null, 0, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, 1, null, null, null, null],
            [null, null, 1, 1, null, null, null, null, 0, null],
            [null, null, 0, null, null, 1, null, null, null, 1],
            [1, null, null, null, null, null, null, 1, 1, null],
            [null, null, 0, 0, null, null, 0, null, 0, 1],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_175",
        name: "P10_2_175",
        description: "10x10 Easy #175",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 23:51:31",
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
            initial_empty: 75,
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
            time_taken: 0.0040090084075928
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, 1, 0, null, 1, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [0, null, 0, null, null, null, 1, null, null, null],
            [null, null, null, null, null, 0, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, 0, 0],
            [null, null, null, 0, null, 1, 1, null, null, null],
            [null, 0, null, null, null, 1, 1, null, null, 0],
            [1, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_176",
        name: "P10_2_176",
        description: "10x10 Easy #176",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 23:51:32",
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
            initial_empty: 74,
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
            time_taken: 0.0038411617279053
        },
        grid: [
            [null, null, null, 1, 1, null, null, 0, 1, null],
            [null, 1, null, null, 1, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, 0, null, null, 1, 1, null],
            [0, null, null, null, null, null, 0, null, 1, null],
            [null, 0, 0, null, 0, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, null, null, null, null, 1, null, null, 1, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [1, null, null, null, 1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_177",
        name: "P10_2_177",
        description: "10x10 Easy #177",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 23:51:34",
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
                preventTrio: 3,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0033140182495117
        },
        grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 1, 1, null, null, null, 0, 0],
            [null, 1, null, 1, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, 0, null, 0, null, null],
            [null, 1, null, 1, null, 0, null, null, 1, null],
            [0, null, 0, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_178",
        name: "P10_2_178",
        description: "10x10 Easy #178",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 23:51:35",
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
            initial_empty: 71,
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
            time_taken: 0.0036811828613281
        },
        grid: [
            [1, null, null, null, null, null, null, null, null, 0],
            [null, null, 0, 1, null, null, 1, 1, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, 0, 1, null, 1, 0],
            [null, 0, null, null, null, null, null, null, null, 0],
            [null, null, 0, 0, null, null, null, 0, null, null],
            [null, null, 0, null, null, 1, null, 1, 1, null],
            [null, 1, null, null, null, 1, null, null, 1, 0],
            [null, 1, 0, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_179",
        name: "P10_2_179",
        description: "10x10 Easy #179",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 23:51:37",
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
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0040781497955322
        },
        grid: [
            [null, 1, null, 0, 0, null, null, null, null, null],
            [1, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, 1, null, null, null, 1, null, null],
            [null, 0, null, 1, null, 0, null, 1, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, null, null, 0, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, 1, null, null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_180",
        name: "P10_2_180",
        description: "10x10 Easy #180",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 23:51:38",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0037450790405273
        },
        grid: [
            [null, null, 0, null, 0, null, 0, null, 0, null],
            [null, null, 0, 0, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, null, null, null, 1],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [null, null, 0, null, null, 0, null, 0, null, null],
            [1, null, null, null, null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_181",
        name: "P10_2_181",
        description: "10x10 Easy #181",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 23:51:40",
        difficulty: "Easy",
        difficulty_score: 14,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 3.6,
            backtracking_score: 0,
            size_score: 10,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 73,
            logic_iterations: 9,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 7
            },
            time_taken: 0.0086760520935059
        },
        grid: [
            [null, null, 1, null, null, 1, null, 1, 1, null],
            [null, 0, null, null, 1, null, null, null, null, null],
            [1, null, null, null, null, null, null, 0, null, null],
            [null, 1, null, 1, null, 1, null, null, null, 0],
            [null, null, 0, null, null, null, 1, null, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, 0, null, null, null, null, null],
            [1, 1, null, null, null, null, null, 1, null, 0],
            [null, null, null, null, null, null, 0, null, null, 0],
            [null, 1, null, null, 1, 0, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_182",
        name: "P10_2_182",
        description: "10x10 Easy #182",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 23:51:41",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0054640769958496
        },
        grid: [
            [null, null, null, 1, null, null, null, null, 0, null],
            [null, 0, null, null, 0, null, 1, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, 0],
            [1, null, null, null, null, null, null, null, 1, null],
            [1, null, null, null, 1, null, 1, null, null, null],
            [null, null, 0, null, null, null, 1, null, null, null],
            [1, null, null, 1, null, null, null, null, 0, null],
            [null, null, null, null, null, 0, 1, null, null, 0],
            [null, null, 0, 0, null, null, null, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_183",
        name: "P10_2_183",
        description: "10x10 Easy #183",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 23:51:43",
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
            initial_empty: 71,
            logic_iterations: 6,
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
            time_taken: 0.0085480213165283
        },
        grid: [
            [null, 0, 0, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, 1, 1, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, 0],
            [1, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, 1, null, null, null],
            [0, null, null, null, 1, null, null, null, 1, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, 0, null, null, 0, 0, null, null, null],
            [null, 1, null, null, null, null, 0, null, null, 0],
            [null, null, 1, 1, null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_184",
        name: "P10_2_184",
        description: "10x10 Easy #184",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 23:51:45",
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
            initial_empty: 73,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0091331005096436
        },
        grid: [
            [null, null, null, 0, 0, null, null, 0, null, 1],
            [null, null, null, null, 1, null, null, null, null, 1],
            [1, 1, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 1, null, null, null, null],
            [null, null, 0, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, null, 1, 0, null, 0],
            [null, null, 0, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, 0, null, null, null, 1],
            [null, 1, null, null, null, null, null, null, 1, 1],
            [null, null, 0, null, null, 0, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_185",
        name: "P10_2_185",
        description: "10x10 Easy #185",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 23:51:46",
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
            initial_empty: 75,
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
            time_taken: 0.00376296043396
        },
        grid: [
            [null, null, null, 0, null, 0, 0, null, null, null],
            [null, 0, null, null, 1, null, 0, null, null, 0],
            [null, null, 0, null, null, null, null, null, 1, null],
            [0, 1, null, null, null, null, null, null, null, null],
            [null, 1, null, 0, null, null, null, null, 1, null],
            [0, null, null, null, null, null, null, 0, null, 0],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, 1, null, null, null, null, 1, null],
            [1, null, null, null, null, null, null, 1, null, null],
            [null, null, 1, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_186",
        name: "P10_2_186",
        description: "10x10 Easy #186",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 23:51:48",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0050089359283447
        },
        grid: [
            [null, null, null, null, 1, null, 1, null, null, null],
            [null, null, 0, null, null, null, 1, null, null, 1],
            [0, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, null, 0, null, null, null],
            [null, null, null, 0, null, null, null, null, 1, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [1, 1, null, 1, 1, null, null, null, 0, 0],
            [0, null, null, 1, null, 0, null, null, 0, null],
            [null, 1, null, null, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_187",
        name: "P10_2_187",
        description: "10x10 Easy #187",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 23:51:49",
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
            initial_empty: 76,
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
            time_taken: 0.0024430751800537
        },
        grid: [
            [null, 0, null, null, null, null, 1, 1, null, null],
            [null, 0, null, 0, 0, null, null, null, null, null],
            [null, null, null, 0, null, null, 1, null, null, 1],
            [null, null, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, 1],
            [null, null, null, 0, null, null, null, null, 0, null],
            [0, 0, null, null, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_188",
        name: "P10_2_188",
        description: "10x10 Easy #188",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 23:51:51",
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
            initial_empty: 76,
            logic_iterations: 8,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 4,
                preventTrio: 6,
                fillSandwiches: 4,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0066649913787842
        },
        grid: [
            [null, null, null, 0, null, null, null, null, 0, 0],
            [null, 0, null, 1, null, 0, null, 1, null, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [0, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [null, 0, null, 0, null, null, null, 0, 0, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, 0, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, 1, null, null],
            [1, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_189",
        name: "P10_2_189",
        description: "10x10 Easy #189",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 23:51:52",
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
            initial_empty: 75,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0039060115814209
        },
        grid: [
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, null, 0, null, 1, 1, null, null, 1],
            [null, 1, null, null, null, null, null, null, null, 1],
            [0, 1, null, 1, 0, null, null, 0, null, null],
            [null, null, null, 1, null, 1, null, null, null, null],
            [null, null, null, null, null, null, 1, 1, null, null],
            [0, null, null, 0, null, null, null, null, null, null],
            [0, null, null, null, 1, null, null, null, 0, null],
            [null, null, 1, null, 1, null, 1, null, null, null],
            [0, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P10_2_190",
        name: "P10_2_190",
        description: "10x10 Easy #190",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 23:51:54",
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
            initial_empty: 76,
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
            time_taken: 0.0055088996887207
        },
        grid: [
            [null, null, 1, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, 0, null, null],
            [1, null, null, null, null, 1, null, 0, null, 0],
            [null, null, null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, 0, null, null, null],
            [null, 1, null, 1, null, null, null, null, null, 0],
            [null, null, null, null, null, null, 0, null, null, 0],
            [0, null, null, null, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, 1, null, null, null, 1, null, 1, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_191",
        name: "P10_2_191",
        description: "10x10 Easy #191",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 23:51:55",
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
            initial_empty: 74,
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
            time_taken: 0.0041160583496094
        },
        grid: [
            [null, 1, null, 0, null, null, 0, null, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [null, null, 0, 0, null, null, null, 1, null, 1],
            [0, null, null, null, null, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, 1, null],
            [null, 1, null, null, 0, null, null, null, null, 1],
            [0, null, null, null, null, 1, null, null, 0, null],
            [null, null, null, 0, null, null, null, 0, null, null],
            [null, null, 0, 0, null, null, 1, null, null, null],
            [null, null, null, null, null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_192",
        name: "P10_2_192",
        description: "10x10 Easy #192",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 23:51:57",
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
                preventTrio: 5,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0045859813690186
        },
        grid: [
            [null, null, null, null, null, null, null, 1, null, 1],
            [null, null, null, 1, 0, null, null, 0, null, null],
            [null, 0, 0, null, null, null, null, null, null, 1],
            [1, null, null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 0, 0, null, null, 1],
            [0, null, null, null, null, null, 0, null, null, 0],
            [null, null, null, null, 1, null, null, null, null, null],
            [null, 0, null, 0, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, 1, 1, null],
            [null, 1, null, null, 0, 0, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_193",
        name: "P10_2_193",
        description: "10x10 Easy #193",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 23:51:58",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0029060840606689
        },
        grid: [
            [null, 0, null, null, 0, null, null, 1, null, null],
            [null, null, 1, null, null, null, 0, null, 0, null],
            [null, null, null, null, null, null, null, null, 0, null],
            [1, null, 1, null, 0, null, null, null, null, null],
            [null, null, null, 1, null, 1, null, 1, null, 0],
            [1, null, 1, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, 1, null, 1, null, null, 1, null, null, null],
            [null, 0, null, 1, 1, null, null, 0, 1, null],
            [null, null, null, null, 0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_194",
        name: "P10_2_194",
        description: "10x10 Easy #194",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 23:52:00",
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
            time_taken: 0.0048220157623291
        },
        grid: [
            [null, null, null, null, 0, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, 1, null],
            [null, 1, null, null, null, 0, null, null, 1, null],
            [null, null, 0, null, 0, null, 1, null, null, 0],
            [1, null, null, null, 0, null, null, 1, null, null],
            [null, null, 0, null, null, null, 0, null, null, null],
            [1, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, 1, null, null, null],
            [1, null, null, null, 0, null, null, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
            [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P10_2_195",
        name: "P10_2_195",
        description: "10x10 Easy #195",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 23:52:02",
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
            initial_empty: 77,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 5,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0059690475463867
        },
        grid: [
            [null, null, null, null, 1, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, 1, 0, null, null, null, null, null, null, 0],
            [null, 1, null, null, null, null, 0, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, null],
            [1, null, null, null, null, null, 1, null, null, 0],
            [1, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, null, 1, null, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P10_2_196",
        name: "P10_2_196",
        description: "10x10 Easy #196",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 23:52:03",
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
            initial_empty: 74,
            logic_iterations: 8,
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
                tryFillCells: 6
            },
            time_taken: 0.0061569213867188
        },
        grid: [
            [null, 0, null, 1, null, null, null, 0, 1, null],
            [1, 0, null, null, 1, null, null, null, 1, null],
            [null, null, 0, null, null, null, 0, null, null, null],
            [null, 1, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, 0, null, null, 1, null],
            [1, null, 1, null, null, null, 1, null, null, null],
            [null, null, null, null, 0, null, 1, null, null, 0],
            [null, null, null, 1, null, null, null, null, null, null],
            [1, null, null, 1, null, null, null, null, null, null],
            [null, null, 0, null, null, null, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P10_2_197",
        name: "P10_2_197",
        description: "10x10 Easy #197",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 23:52:05",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0023860931396484
        },
        grid: [
            [null, 0, null, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1, null, null],
            [null, 0, 0, null, null, null, null, 1, 1, null],
            [1, null, null, null, null, 1, null, null, null, null],
            [null, null, null, 0, null, null, null, 0, 1, null],
            [null, null, null, 0, null, 0, 0, null, null, 0],
            [1, null, null, null, 1, null, null, null, null, null],
            [1, null, 1, null, null, null, 1, null, 1, null],
            [null, null, 1, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_198",
        name: "P10_2_198",
        description: "10x10 Easy #198",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 23:52:07",
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
            initial_empty: 77,
            logic_iterations: 7,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 5,
                fillSandwiches: 5,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 6
            },
            time_taken: 0.0068979263305664
        },
        grid: [
            [null, null, null, null, null, null, 1, 1, null, null],
            [null, 0, 0, null, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null, null, 0],
            [null, 1, null, null, null, null, null, null, null, 0],
            [null, null, null, 1, null, null, 1, null, null, null],
            [null, null, 0, null, null, null, null, null, 0, null],
            [null, null, null, 1, null, 0, null, 1, null, null],
            [0, null, null, null, null, null, null, 1, null, null],
            [1, null, null, 1, 1, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P10_2_199",
        name: "P10_2_199",
        description: "10x10 Easy #199",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 23:52:08",
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
            initial_empty: 77,
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
            time_taken: 0.003568172454834
        },
        grid: [
            [null, null, 0, null, null, null, null, null, null, null],
            [null, null, 0, 0, null, 1, null, null, 0, null],
            [0, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, 1, null, null, null, 1],
            [null, null, null, null, null, null, 1, null, null, null],
            [null, null, 1, 1, null, null, null, 0, null, null],
            [null, null, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, 1, null, null, 0, null, 0],
            [1, null, null, null, 0, null, 1, 1, null, null],
            [null, null, null, null, null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P10_2_200",
        name: "P10_2_200",
        description: "10x10 Easy #200",
        size: 10,
        source_url: "https://binarypuzzle.com/puzzles.php?size=10&level=2&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 23:52:10",
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
                preventTrio: 4,
                fillSandwiches: 4,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0050430297851562
        },
        grid: [
            [null, null, null, null, null, null, null, 1, 1, null],
            [null, null, null, null, null, null, 1, null, null, 0],
            [0, null, null, 0, 0, null, null, null, 1, null],
            [null, 1, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, 0, null, null, null, 0, null],
            [null, null, null, 0, 0, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, 1, 1, null, 0, null, 1, null, null],
            [null, null, null, 1, null, null, null, null, 1, null],
            [1, null, null, null, 0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL10x10_d2_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL10x10_d2_PUZZLES = LEVEL10x10_d2_PUZZLES;
}
