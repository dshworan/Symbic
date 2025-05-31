/**
 * level 6x6 d2 - 6x6 medium
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

const LEVEL6x6_d2_PUZZLES = [
    {
        id: "P6_2_1",
        name: "P6_2_1",
        description: "6x6 Easy #1",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 15:24:36",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00068879127502441
        },
        grid: [
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [0, 1, null, 1, null, null],
            [0, null, null, null, 0, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_2",
        name: "P6_2_2",
        description: "6x6 Easy #2",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 15:24:38",
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
            time_taken: 0.00054597854614258
        },
        grid: [
            [null, 0, null, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, null, 1, 1, null, null],
            [1, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_3",
        name: "P6_2_3",
        description: "6x6 Easy #3",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 15:24:39",
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
            initial_empty: 28,
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
            time_taken: 0.0010600090026855
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 0, null, 0],
            [null, null, null, null, null, null]
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
        id: "P6_2_4",
        name: "P6_2_4",
        description: "6x6 Easy #4",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 15:24:40",
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
            time_taken: 0.00034189224243164
        },
        grid: [
            [null, 1, null, null, 0, null],
            [0, null, null, null, null, 0],
            [null, null, null, 1, 0, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_5",
        name: "P6_2_5",
        description: "6x6 Easy #5",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 15:24:42",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00037813186645508
        },
        grid: [
            [null, 0, null, 0, 0, null],
            [null, null, 1, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [0, null, 0, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_6",
        name: "P6_2_6",
        description: "6x6 Easy #6",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 15:24:43",
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
            initial_empty: 28,
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
            time_taken: 0.00044918060302734
        },
        grid: [
            [1, 0, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_7",
        name: "P6_2_7",
        description: "6x6 Easy #7",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 15:24:45",
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
            initial_empty: 28,
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
            time_taken: 0.00095081329345703
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, null, 0, 0, null],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_8",
        name: "P6_2_8",
        description: "6x6 Easy #8",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 15:24:46",
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
            initial_empty: 27,
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
            time_taken: 0.00058197975158691
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, null, null, null, null, null],
            [0, null, null, 1, null, null],
            [null, 0, 0, null, null, 1],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_9",
        name: "P6_2_9",
        description: "6x6 Easy #9",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 15:24:47",
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
            initial_empty: 28,
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
            time_taken: 0.0013830661773682
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, null, 1, 1],
            [null, null, 1, null, null, null]
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
        id: "P6_2_10",
        name: "P6_2_10",
        description: "6x6 Easy #10",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 15:24:49",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0004730224609375
        },
        grid: [
            [null, 0, null, null, 1, null],
            [null, null, null, 0, null, 0],
            [1, 0, null, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null]
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
        id: "P6_2_11",
        name: "P6_2_11",
        description: "6x6 Easy #11",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 15:24:50",
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
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012438297271729
        },
        grid: [
            [0, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, 1, null, 1, null, null],
            [null, null, null, 0, null, 0],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_12",
        name: "P6_2_12",
        description: "6x6 Easy #12",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 15:24:51",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00019407272338867
        },
        grid: [
            [0, null, 0, null, null, null],
            [0, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [null, 0, null, null, 1, 1],
            [null, null, null, 1, null, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_13",
        name: "P6_2_13",
        description: "6x6 Easy #13",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 15:24:53",
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
            time_taken: 0.00084400177001953
        },
        grid: [
            [0, null, null, null, null, null],
            [0, null, null, 0, null, null],
            [null, null, 0, null, null, 1],
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_14",
        name: "P6_2_14",
        description: "6x6 Easy #14",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 15:24:54",
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
            initial_empty: 27,
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
            time_taken: 0.0002589225769043
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 0, 0, null, null, 0],
            [1, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_15",
        name: "P6_2_15",
        description: "6x6 Easy #15",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 15:24:56",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00036096572875977
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 0, 0],
            [null, null, null, null, null, null],
            [null, 1, null, 1, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_16",
        name: "P6_2_16",
        description: "6x6 Easy #16",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 15:24:57",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00035405158996582
        },
        grid: [
            [0, null, 1, null, null, null],
            [0, 0, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, 1, null, null]
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
        id: "P6_2_17",
        name: "P6_2_17",
        description: "6x6 Easy #17",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 15:24:58",
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
            time_taken: 0.00038003921508789
        },
        grid: [
            [null, 0, 0, null, null, 1],
            [1, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [1, null, null, null, 1, null],
            [null, null, null, 0, null, 1],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_18",
        name: "P6_2_18",
        description: "6x6 Easy #18",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 15:25:00",
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
            time_taken: 0.00021696090698242
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, 0, null, null, null, null],
            [0, null, null, 1, null, 0],
            [1, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_19",
        name: "P6_2_19",
        description: "6x6 Easy #19",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 15:25:01",
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
            initial_empty: 29,
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
            time_taken: 0.0005030632019043
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_20",
        name: "P6_2_20",
        description: "6x6 Easy #20",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 15:25:03",
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
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00042891502380371
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, 0, null],
            [0, 0, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, 0]
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
        id: "P6_2_21",
        name: "P6_2_21",
        description: "6x6 Easy #21",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 15:25:04",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00047111511230469
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_22",
        name: "P6_2_22",
        description: "6x6 Easy #22",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 15:25:05",
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
            initial_empty: 27,
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
            time_taken: 0.00070405006408691
        },
        grid: [
            [null, 1, null, 0, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, 1, 1, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_23",
        name: "P6_2_23",
        description: "6x6 Easy #23",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 15:25:07",
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
            initial_empty: 27,
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
            time_taken: 0.00087118148803711
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, null, null, null, 1, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_24",
        name: "P6_2_24",
        description: "6x6 Easy #24",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 15:25:08",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043296813964844
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [null, 1, null, null, 1, null],
            [null, null, 0, null, null, null],
            [0, 0, null, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_25",
        name: "P6_2_25",
        description: "6x6 Easy #25",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 15:25:09",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0003819465637207
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, 1, null, null, 1],
            [null, null, null, null, 0, null],
            [1, 0, null, null, 0, null],
            [1, null, null, null, null, null],
            [null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_26",
        name: "P6_2_26",
        description: "6x6 Easy #26",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 15:25:11",
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
            initial_empty: 28,
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
            time_taken: 0.00069308280944824
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [null, 0, null, null, 1, null],
            [1, null, null, 0, null, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_27",
        name: "P6_2_27",
        description: "6x6 Easy #27",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 15:25:12",
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
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0011041164398193
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, 0, null, 0, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_28",
        name: "P6_2_28",
        description: "6x6 Easy #28",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 15:25:14",
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
            initial_empty: 29,
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
            time_taken: 0.0011329650878906
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [0, 0, null, null, null, null],
            [null, 0, null, null, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_29",
        name: "P6_2_29",
        description: "6x6 Easy #29",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 15:25:15",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00046610832214355
        },
        grid: [
            [null, null, 0, null, null, 1],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [1, 1, null, null, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_30",
        name: "P6_2_30",
        description: "6x6 Easy #30",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 15:25:16",
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
            initial_empty: 27,
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
            time_taken: 0.00077295303344727
        },
        grid: [
            [0, null, null, 0, 0, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, 1, 1],
            [0, null, null, 1, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_31",
        name: "P6_2_31",
        description: "6x6 Easy #31",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 15:25:18",
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
                tryFillCells: 2
            },
            time_taken: 0.00045609474182129
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, 1],
            [null, 1, null, null, 0, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_32",
        name: "P6_2_32",
        description: "6x6 Easy #32",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 15:25:19",
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
            initial_empty: 29,
            logic_iterations: 5,
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
            time_taken: 0.00099897384643555
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, null, null, null],
            [0, null, null, null, null, 0],
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_33",
        name: "P6_2_33",
        description: "6x6 Easy #33",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 15:25:21",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00033187866210938
        },
        grid: [
            [null, 0, 1, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_34",
        name: "P6_2_34",
        description: "6x6 Easy #34",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 15:25:22",
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
            initial_empty: 27,
            logic_iterations: 5,
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
            time_taken: 0.00099492073059082
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, 0, null, null, null, null],
            [null, 0, null, 0, null, null],
            [null, null, 1, null, 1, null],
            [1, 1, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_35",
        name: "P6_2_35",
        description: "6x6 Easy #35",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 15:25:23",
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
            initial_empty: 27,
            logic_iterations: 4,
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
                tryFillCells: 2
            },
            time_taken: 0.0012199878692627
        },
        grid: [
            [null, null, 1, null, 1, null],
            [1, null, null, null, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, null, 1, null, null]
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
        id: "P6_2_36",
        name: "P6_2_36",
        description: "6x6 Easy #36",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 15:25:25",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00038719177246094
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, 1, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 1, null, null],
            [1, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_37",
        name: "P6_2_37",
        description: "6x6 Easy #37",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 15:25:26",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0005638599395752
        },
        grid: [
            [null, null, 0, null, null, 0],
            [null, null, 0, null, 1, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [1, 1, null, 1, null, null],
            [0, 0, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_38",
        name: "P6_2_38",
        description: "6x6 Easy #38",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 15:25:28",
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
            time_taken: 0.00040984153747559
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, 1, null, null, 0, null],
            [null, 0, null, 1, null, null],
            [null, null, null, 1, null, 1],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_39",
        name: "P6_2_39",
        description: "6x6 Easy #39",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 15:25:30",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00073480606079102
        },
        grid: [
            [1, null, null, null, 0, 1],
            [null, 0, 0, null, 0, null],
            [null, null, null, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, null]
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
        id: "P6_2_40",
        name: "P6_2_40",
        description: "6x6 Easy #40",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 15:25:31",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00022506713867188
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, 1, 1, null],
            [null, null, null, 1, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_41",
        name: "P6_2_41",
        description: "6x6 Easy #41",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 15:25:32",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0007779598236084
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 1, null, null, 1],
            [0, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [1, 0, null, 0, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_42",
        name: "P6_2_42",
        description: "6x6 Easy #42",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 15:25:34",
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
                tryFillCells: 2
            },
            time_taken: 0.00077915191650391
        },
        grid: [
            [null, null, null, 1, null, 0],
            [0, null, null, null, null, 0],
            [null, null, 1, null, null, null],
            [null, 0, 0, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_43",
        name: "P6_2_43",
        description: "6x6 Easy #43",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 15:25:35",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00042009353637695
        },
        grid: [
            [0, null, null, null, null, 0],
            [0, null, null, null, 1, 0],
            [null, null, 0, null, null, null],
            [null, null, 0, 1, null, null],
            [0, null, null, null, 0, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_44",
        name: "P6_2_44",
        description: "6x6 Easy #44",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 15:25:37",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00052690505981445
        },
        grid: [
            [null, 1, 1, null, 1, null],
            [null, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [null, null, null, 0, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_45",
        name: "P6_2_45",
        description: "6x6 Easy #45",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 15:25:38",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00062894821166992
        },
        grid: [
            [0, null, null, null, null, null],
            [null, 1, 0, null, null, 1],
            [null, null, null, null, 1, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_46",
        name: "P6_2_46",
        description: "6x6 Easy #46",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 15:25:39",
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
            initial_empty: 27,
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
            time_taken: 0.00016999244689941
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, 0, null, null],
            [null, null, 1, null, null, 0],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_47",
        name: "P6_2_47",
        description: "6x6 Easy #47",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 15:25:41",
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
            initial_empty: 27,
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
            time_taken: 0.00058197975158691
        },
        grid: [
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, 1, null, 1, null, 0],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_48",
        name: "P6_2_48",
        description: "6x6 Easy #48",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 15:25:42",
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
            initial_empty: 27,
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
            time_taken: 0.0013608932495117
        },
        grid: [
            [null, 0, null, null, null, 0],
            [null, 0, null, null, null, null],
            [1, null, null, null, 1, null],
            [0, null, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, 1, null, null, null]
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
        id: "P6_2_49",
        name: "P6_2_49",
        description: "6x6 Easy #49",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 15:25:44",
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
            initial_empty: 27,
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
                tryFillCells: 2
            },
            time_taken: 0.00075793266296387
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, 1, null, 0, null, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_50",
        name: "P6_2_50",
        description: "6x6 Easy #50",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 15:25:45",
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
            initial_empty: 28,
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
                tryFillCells: 2
            },
            time_taken: 0.00050902366638184
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, null, null, 0, null]
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
        id: "P6_2_51",
        name: "P6_2_51",
        description: "6x6 Easy #51",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 15:25:46",
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
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00062108039855957
        },
        grid: [
            [null, 0, 1, null, 1, 0],
            [null, null, null, 0, null, null],
            [null, 1, null, null, 1, null],
            [null, null, null, 0, null, null],
            [0, null, 1, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_52",
        name: "P6_2_52",
        description: "6x6 Easy #52",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 15:25:48",
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
            initial_empty: 27,
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
            time_taken: 0.00027108192443848
        },
        grid: [
            [0, null, null, 0, 0, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_53",
        name: "P6_2_53",
        description: "6x6 Easy #53",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 15:25:49",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00050783157348633
        },
        grid: [
            [1, null, null, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_54",
        name: "P6_2_54",
        description: "6x6 Easy #54",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 15:25:50",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0001368522644043
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, null, null, 0, null],
            [1, null, null, null, null, null],
            [1, null, 1, null, 1, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_55",
        name: "P6_2_55",
        description: "6x6 Easy #55",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 15:25:52",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.4,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 6,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 5
            },
            time_taken: 0.0011329650878906
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, null, 0, null, null, 1],
            [0, 0, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, null, null, null],
            [1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_56",
        name: "P6_2_56",
        description: "6x6 Easy #56",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 15:25:53",
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
            initial_empty: 28,
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
                tryFillCells: 3
            },
            time_taken: 0.00065994262695312
        },
        grid: [
            [0, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_57",
        name: "P6_2_57",
        description: "6x6 Easy #57",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 15:25:55",
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
            time_taken: 0.00034999847412109
        },
        grid: [
            [1, null, null, null, null, 0],
            [null, 0, null, null, 0, null],
            [null, null, null, 1, 1, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_58",
        name: "P6_2_58",
        description: "6x6 Easy #58",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 15:25:56",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00037503242492676
        },
        grid: [
            [0, null, null, null, null, null],
            [null, 1, null, 1, null, 1],
            [null, null, null, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_59",
        name: "P6_2_59",
        description: "6x6 Easy #59",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 15:25:57",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00063395500183105
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, null, 1],
            [null, 1, 0, null, null, null],
            [null, 1, null, 1, 1, null],
            [null, null, null, 0, null, 0],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_60",
        name: "P6_2_60",
        description: "6x6 Easy #60",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 15:25:59",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0005190372467041
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [0, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_61",
        name: "P6_2_61",
        description: "6x6 Easy #61",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 15:26:00",
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
            initial_empty: 28,
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
            time_taken: 0.00059199333190918
        },
        grid: [
            [null, null, null, null, 0, 0],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_62",
        name: "P6_2_62",
        description: "6x6 Easy #62",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 15:26:01",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00024986267089844
        },
        grid: [
            [null, 0, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 0, null, 1, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_63",
        name: "P6_2_63",
        description: "6x6 Easy #63",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 15:26:03",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00049901008605957
        },
        grid: [
            [null, null, 0, 0, null, 0],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, 0],
            [null, null, 1, null, 1, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_64",
        name: "P6_2_64",
        description: "6x6 Easy #64",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 15:26:04",
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
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00066900253295898
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [0, 1, null, 1, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_65",
        name: "P6_2_65",
        description: "6x6 Easy #65",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 15:26:06",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0003509521484375
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, null, null, 1, null],
            [null, 1, null, 0, null, null],
            [0, 0, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_66",
        name: "P6_2_66",
        description: "6x6 Easy #66",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 15:26:07",
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
                tryFillCells: 2
            },
            time_taken: 0.00047397613525391
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, 1, 0, null, 0],
            [1, null, null, null, null, 0],
            [null, 0, null, null, null, null]
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
        id: "P6_2_67",
        name: "P6_2_67",
        description: "6x6 Easy #67",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 15:26:08",
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
            initial_empty: 27,
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
            time_taken: 0.00024604797363281
        },
        grid: [
            [null, 1, 1, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [0, null, null, 1, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_68",
        name: "P6_2_68",
        description: "6x6 Easy #68",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 15:26:10",
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
            initial_empty: 28,
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
            time_taken: 0.0011391639709473
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_69",
        name: "P6_2_69",
        description: "6x6 Easy #69",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 15:26:11",
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
            initial_empty: 29,
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
                tryFillCells: 3
            },
            time_taken: 0.00077295303344727
        },
        grid: [
            [null, null, null, null, 1, null],
            [1, null, null, 0, null, null],
            [null, null, 1, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null]
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
        id: "P6_2_70",
        name: "P6_2_70",
        description: "6x6 Easy #70",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 15:26:12",
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
            initial_empty: 27,
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
            time_taken: 0.00017380714416504
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, 0, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, 0, 0, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_71",
        name: "P6_2_71",
        description: "6x6 Easy #71",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 15:26:14",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00064802169799805
        },
        grid: [
            [0, 0, null, null, null, null],
            [null, null, null, 0, null, 1],
            [null, null, 1, null, 1, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_72",
        name: "P6_2_72",
        description: "6x6 Easy #72",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 15:26:15",
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
                tryFillCells: 2
            },
            time_taken: 0.00046896934509277
        },
        grid: [
            [null, 0, null, null, null, 0],
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_73",
        name: "P6_2_73",
        description: "6x6 Easy #73",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 15:26:17",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00060105323791504
        },
        grid: [
            [null, null, 0, null, 0, 1],
            [null, null, null, null, 1, 1],
            [null, null, 0, null, null, null],
            [0, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_74",
        name: "P6_2_74",
        description: "6x6 Easy #74",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 15:26:18",
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
            time_taken: 0.00049209594726562
        },
        grid: [
            [null, null, 1, null, 1, null],
            [null, 0, null, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, 0, null, 0],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_75",
        name: "P6_2_75",
        description: "6x6 Easy #75",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 15:26:19",
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
            initial_empty: 29,
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
            time_taken: 0.00094699859619141
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, 0, null, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_2_76",
        name: "P6_2_76",
        description: "6x6 Easy #76",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 15:26:21",
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00060319900512695
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, 1],
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_77",
        name: "P6_2_77",
        description: "6x6 Easy #77",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 15:26:22",
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
            initial_empty: 26,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 4,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0015029907226562
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, null, null, null, null],
            [0, null, 0, null, null, null],
            [null, 1, null, 0, null, null],
            [null, null, null, null, 1, 1],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_78",
        name: "P6_2_78",
        description: "6x6 Easy #78",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 15:26:23",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00031805038452148
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, 0, null, null, 0, null],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, 1, null, 0, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_79",
        name: "P6_2_79",
        description: "6x6 Easy #79",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 15:26:25",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00049400329589844
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, 0, 0, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_80",
        name: "P6_2_80",
        description: "6x6 Easy #80",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 15:26:26",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0004580020904541
        },
        grid: [
            [null, 1, null, 0, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, 0],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null]
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
        id: "P6_2_81",
        name: "P6_2_81",
        description: "6x6 Easy #81",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 15:26:28",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00017118453979492
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, 1, 1, null],
            [null, 1, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, 0],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_82",
        name: "P6_2_82",
        description: "6x6 Easy #82",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 15:26:29",
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
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0010590553283691
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 1, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, 1, 0, null, 0],
            [null, 1, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_83",
        name: "P6_2_83",
        description: "6x6 Easy #83",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 15:26:30",
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
            initial_empty: 27,
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
            time_taken: 0.00028109550476074
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [1, null, 1, null, 1, null],
            [1, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 0, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_84",
        name: "P6_2_84",
        description: "6x6 Easy #84",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 15:26:32",
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
            time_taken: 0.00039100646972656
        },
        grid: [
            [null, null, 0, null, 1, null],
            [null, null, 0, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, 0, null, null, 0, null],
            [null, null, 1, null, null, null],
            [1, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_85",
        name: "P6_2_85",
        description: "6x6 Easy #85",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 15:26:33",
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
            initial_empty: 27,
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
            time_taken: 0.00095295906066895
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 0, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_86",
        name: "P6_2_86",
        description: "6x6 Easy #86",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 15:26:34",
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
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0006101131439209
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, null, 1, 1, null],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_87",
        name: "P6_2_87",
        description: "6x6 Easy #87",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 15:26:36",
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
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00012898445129395
        },
        grid: [
            [null, null, 1, 1, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, 0],
            [null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_88",
        name: "P6_2_88",
        description: "6x6 Easy #88",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 15:26:37",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00059819221496582
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [1, 1, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, 0],
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
        id: "P6_2_89",
        name: "P6_2_89",
        description: "6x6 Easy #89",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 15:26:39",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00061297416687012
        },
        grid: [
            [null, null, null, null, null, 1],
            [0, null, 0, null, null, null],
            [0, null, null, 1, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_90",
        name: "P6_2_90",
        description: "6x6 Easy #90",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 15:26:40",
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
            initial_empty: 27,
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
            time_taken: 0.00023198127746582
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, null, 0, null],
            [null, 1, null, 1, null, null],
            [0, null, null, 1, null, null],
            [null, 1, null, null, null, null],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_91",
        name: "P6_2_91",
        description: "6x6 Easy #91",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 15:26:41",
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
            time_taken: 0.00041985511779785
        },
        grid: [
            [null, 0, null, 0, null, 1],
            [null, 0, null, null, null, 1],
            [1, null, null, null, 1, null],
            [0, null, 0, null, null, 1],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_92",
        name: "P6_2_92",
        description: "6x6 Easy #92",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 15:26:43",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00041890144348145
        },
        grid: [
            [null, 0, null, 0, 0, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, 1, null, 0, null, 1],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_93",
        name: "P6_2_93",
        description: "6x6 Easy #93",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 15:26:44",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00066900253295898
        },
        grid: [
            [null, null, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, 0, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_94",
        name: "P6_2_94",
        description: "6x6 Easy #94",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 15:26:46",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00074100494384766
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_95",
        name: "P6_2_95",
        description: "6x6 Easy #95",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 15:26:47",
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
            initial_empty: 28,
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
            time_taken: 0.00058317184448242
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [1, null, 1, null, 1, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_96",
        name: "P6_2_96",
        description: "6x6 Easy #96",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 15:26:49",
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
            time_taken: 0.00054192543029785
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, null, null, null, 0, null],
            [0, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_97",
        name: "P6_2_97",
        description: "6x6 Easy #97",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 15:26:51",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00052499771118164
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, null, 0, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 1],
            [0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_98",
        name: "P6_2_98",
        description: "6x6 Easy #98",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 15:26:53",
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
            time_taken: 0.00046300888061523
        },
        grid: [
            [null, 0, null, null, null, null],
            [0, null, null, 1, 0, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_99",
        name: "P6_2_99",
        description: "6x6 Easy #99",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 15:26:54",
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
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00057387351989746
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, 1, null, 1],
            [1, null, 1, null, null, null],
            [null, null, null, 0, 0, null],
            [null, 1, null, null, null, null],
            [0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_100",
        name: "P6_2_100",
        description: "6x6 Easy #100",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 15:26:56",
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
            initial_empty: 27,
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
            time_taken: 0.00014615058898926
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [1, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_101",
        name: "P6_2_101",
        description: "6x6 Easy #101",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 15:26:57",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00030398368835449
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, 1, null, null, null],
            [0, null, 1, null, 1, null],
            [0, null, null, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_102",
        name: "P6_2_102",
        description: "6x6 Easy #102",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 15:26:59",
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
            initial_empty: 27,
            logic_iterations: 4,
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
            time_taken: 0.00093507766723633
        },
        grid: [
            [1, 0, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, 0],
            [1, null, 1, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_103",
        name: "P6_2_103",
        description: "6x6 Easy #103",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 15:27:01",
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
            initial_empty: 28,
            logic_iterations: 4,
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
            time_taken: 0.00068402290344238
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 1, null, 1, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_104",
        name: "P6_2_104",
        description: "6x6 Easy #104",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 15:27:02",
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
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00029802322387695
        },
        grid: [
            [0, 0, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_105",
        name: "P6_2_105",
        description: "6x6 Easy #105",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 15:27:03",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00043010711669922
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, 0, 0, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_106",
        name: "P6_2_106",
        description: "6x6 Easy #106",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 15:27:05",
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
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00090193748474121
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [0, null, null, null, 1, null],
            [0, null, null, 1, null, null]
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
        id: "P6_2_107",
        name: "P6_2_107",
        description: "6x6 Easy #107",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 15:27:06",
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
            initial_empty: 27,
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
            time_taken: 0.00024986267089844
        },
        grid: [
            [null, null, null, 0, 0, null],
            [null, 0, null, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, 1, 1, null],
            [null, null, null, null, null, 0],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_108",
        name: "P6_2_108",
        description: "6x6 Easy #108",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 15:27:08",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0002601146697998
        },
        grid: [
            [1, null, 1, null, 1, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 0],
            [null, null, null, null, null, null],
            [1, 0, null, 0, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_109",
        name: "P6_2_109",
        description: "6x6 Easy #109",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 15:27:09",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00045490264892578
        },
        grid: [
            [1, null, null, null, null, null],
            [1, 1, null, 0, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, 0, 1, null]
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
        id: "P6_2_110",
        name: "P6_2_110",
        description: "6x6 Easy #110",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 15:27:11",
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
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043106079101562
        },
        grid: [
            [1, null, null, null, 0, null],
            [null, null, 0, null, 0, null],
            [1, null, null, null, null, null],
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_111",
        name: "P6_2_111",
        description: "6x6 Easy #111",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 15:27:12",
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
            time_taken: 0.00046205520629883
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, 0, null, null, null],
            [1, 1, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, null, 0, 1, null, 1]
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
        id: "P6_2_112",
        name: "P6_2_112",
        description: "6x6 Easy #112",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 15:27:13",
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
            time_taken: 0.00046992301940918
        },
        grid: [
            [null, null, 1, null, null, 1],
            [0, 0, null, 1, null, null],
            [null, null, null, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, 1, null, 1, null],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_113",
        name: "P6_2_113",
        description: "6x6 Easy #113",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 15:27:15",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00082898139953613
        },
        grid: [
            [null, null, 1, 1, null, 1],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_114",
        name: "P6_2_114",
        description: "6x6 Easy #114",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 15:27:16",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00047993659973145
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, 1, 1, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [null, null, 0, null, null, null],
            [null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_115",
        name: "P6_2_115",
        description: "6x6 Easy #115",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 15:27:18",
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
            initial_empty: 27,
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
                tryFillCells: 3
            },
            time_taken: 0.00088286399841309
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, 0, null, null],
            [null, 1, 1, null, 0, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null]
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
        id: "P6_2_116",
        name: "P6_2_116",
        description: "6x6 Easy #116",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 15:27:19",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00041604042053223
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, 0, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_117",
        name: "P6_2_117",
        description: "6x6 Easy #117",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 15:27:20",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0004580020904541
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, null, null, 1],
            [0, 1, null, 1, null, null],
            [null, 1, null, null, 1, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_118",
        name: "P6_2_118",
        description: "6x6 Easy #118",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 15:27:22",
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
            initial_empty: 27,
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
            time_taken: 0.0003049373626709
        },
        grid: [
            [null, 1, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, 1, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_119",
        name: "P6_2_119",
        description: "6x6 Easy #119",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 15:27:23",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00043702125549316
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, null, 0, null],
            [null, 0, null, null, null, 0],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_120",
        name: "P6_2_120",
        description: "6x6 Easy #120",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 15:27:24",
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
            time_taken: 0.00032901763916016
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, 0, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, 1, 1, null],
            [null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_121",
        name: "P6_2_121",
        description: "6x6 Easy #121",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 15:27:26",
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
            time_taken: 0.00071883201599121
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 1],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [0, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_122",
        name: "P6_2_122",
        description: "6x6 Easy #122",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 15:27:27",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00038719177246094
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, 1, 1, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, 0],
            [0, 0, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_123",
        name: "P6_2_123",
        description: "6x6 Easy #123",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 15:27:29",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00054192543029785
        },
        grid: [
            [null, null, 0, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [1, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_124",
        name: "P6_2_124",
        description: "6x6 Easy #124",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 15:27:30",
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
            initial_empty: 29,
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
            time_taken: 0.00076007843017578
        },
        grid: [
            [null, null, 0, null, null, null],
            [1, 1, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null]
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
        id: "P6_2_125",
        name: "P6_2_125",
        description: "6x6 Easy #125",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 15:27:32",
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
                tryFillCells: 2
            },
            time_taken: 0.00043511390686035
        },
        grid: [
            [1, null, null, null, null, 1],
            [1, null, null, 0, null, null],
            [null, null, null, 0, null, null],
            [null, 0, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, 1, null]
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
        id: "P6_2_126",
        name: "P6_2_126",
        description: "6x6 Easy #126",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 15:27:33",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00037002563476562
        },
        grid: [
            [0, null, null, 0, 0, null],
            [1, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [1, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_127",
        name: "P6_2_127",
        description: "6x6 Easy #127",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 15:27:35",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00034809112548828
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 1, 1, null, null, 0],
            [1, null, null, null, null, null]
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
        id: "P6_2_128",
        name: "P6_2_128",
        description: "6x6 Easy #128",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 15:27:36",
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
            initial_empty: 27,
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
            time_taken: 0.00070309638977051
        },
        grid: [
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, 1, null, 1, null, 0],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_129",
        name: "P6_2_129",
        description: "6x6 Easy #129",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 15:27:37",
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
            initial_empty: 28,
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
            time_taken: 0.00055599212646484
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, 0, 1, null],
            [0, null, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null]
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
        id: "P6_2_130",
        name: "P6_2_130",
        description: "6x6 Easy #130",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 15:27:39",
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
            time_taken: 0.00034809112548828
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, null],
            [null, null, null, 1, 1, null],
            [null, 0, 1, null, 1, null],
            [null, 0, 1, null, null, 1],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_131",
        name: "P6_2_131",
        description: "6x6 Easy #131",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 15:27:40",
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
            initial_empty: 28,
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
            time_taken: 0.00066304206848145
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, 1, 1, null, null],
            [null, 1, 1, null, null, null],
            [null, 1, null, 1, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_132",
        name: "P6_2_132",
        description: "6x6 Easy #132",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 15:27:41",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00061798095703125
        },
        grid: [
            [null, null, 1, 0, null, null],
            [null, null, 1, null, null, 0],
            [null, null, null, 1, 1, null],
            [null, 0, null, null, null, null],
            [0, null, null, 1, 0, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_133",
        name: "P6_2_133",
        description: "6x6 Easy #133",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 15:27:43",
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
                completeRowsColumns: 3,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00066614151000977
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, 1, null, null, null],
            [null, null, 1, null, null, 1],
            [null, 1, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, 1, 1, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_134",
        name: "P6_2_134",
        description: "6x6 Easy #134",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 15:27:44",
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
            initial_empty: 27,
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
            [0, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_135",
        name: "P6_2_135",
        description: "6x6 Easy #135",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 15:27:46",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00049996376037598
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 0],
            [null, 1, null, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_136",
        name: "P6_2_136",
        description: "6x6 Easy #136",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 15:27:48",
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
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00058412551879883
        },
        grid: [
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0],
            [null, 1, null, 1, null, null],
            [null, null, 0, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_137",
        name: "P6_2_137",
        description: "6x6 Easy #137",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 15:27:49",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0003509521484375
        },
        grid: [
            [null, null, null, 0, null, null],
            [0, null, null, 0, null, 0],
            [null, null, null, null, null, null],
            [0, null, 0, null, null, 0],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_138",
        name: "P6_2_138",
        description: "6x6 Easy #138",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 15:27:50",
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
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00046396255493164
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, 1, null, null, null, null],
            [null, 0, null, null, null, 0],
            [0, null, null, 1, null, null],
            [null, null, null, 1, null, 0],
            [0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_139",
        name: "P6_2_139",
        description: "6x6 Easy #139",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 15:27:52",
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
            initial_empty: 27,
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
            time_taken: 0.00087618827819824
        },
        grid: [
            [0, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_140",
        name: "P6_2_140",
        description: "6x6 Easy #140",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 15:27:53",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00048017501831055
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, null, null, null, 0, null],
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
        id: "P6_2_141",
        name: "P6_2_141",
        description: "6x6 Easy #141",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 15:27:54",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00018000602722168
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, 0],
            [null, null, 0, null, null, 0],
            [1, null, null, null, null, null],
            [null, 1, null, null, null, 1],
            [null, 1, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_142",
        name: "P6_2_142",
        description: "6x6 Easy #142",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 15:27:56",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00036096572875977
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, 0, null, null, 0, null],
            [null, null, null, null, null, null],
            [1, 1, null, 1, null, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_143",
        name: "P6_2_143",
        description: "6x6 Easy #143",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 15:27:57",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0003960132598877
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, 1, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [1, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_144",
        name: "P6_2_144",
        description: "6x6 Easy #144",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 15:27:59",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00099492073059082
        },
        grid: [
            [1, null, 1, null, 1, null],
            [null, null, null, 0, null, null],
            [null, 1, null, null, null, null],
            [1, null, null, null, 0, 1],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_145",
        name: "P6_2_145",
        description: "6x6 Easy #145",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 15:28:00",
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
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00069785118103027
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 0, 1, null, null, null],
            [1, 0, null, 0, null, 1],
            [0, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_146",
        name: "P6_2_146",
        description: "6x6 Easy #146",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 15:28:01",
        difficulty: "Easy",
        difficulty_score: 7,
        difficulty_factors: {
            logic_fill_score: 0,
            logic_iterations_score: 2.4,
            backtracking_score: 0,
            size_score: 5,
            percent_filled_by_logic: 100
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 6,
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
            time_taken: 0.0010838508605957
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 1, 1, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0]
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
        id: "P6_2_147",
        name: "P6_2_147",
        description: "6x6 Easy #147",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 15:28:03",
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
            initial_empty: 27,
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
            time_taken: 0.0011920928955078
        },
        grid: [
            [null, null, null, 0, null, 1],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, 1, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_148",
        name: "P6_2_148",
        description: "6x6 Easy #148",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 15:28:04",
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
            time_taken: 0.00042986869812012
        },
        grid: [
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_149",
        name: "P6_2_149",
        description: "6x6 Easy #149",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 15:28:06",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0002748966217041
        },
        grid: [
            [null, null, 0, null, null, null],
            [1, null, null, 0, 1, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, null],
            [null, 1, null, 1, 1, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_150",
        name: "P6_2_150",
        description: "6x6 Easy #150",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 15:28:07",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0012061595916748
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [1, null, null, 1, null, 1],
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_151",
        name: "P6_2_151",
        description: "6x6 Easy #151",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 15:28:08",
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
            initial_empty: 27,
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
            time_taken: 0.00052404403686523
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, null, 1, 1, null, 1],
            [null, null, null, 1, 1, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_2_152",
        name: "P6_2_152",
        description: "6x6 Easy #152",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 15:28:10",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00063180923461914
        },
        grid: [
            [null, null, null, null, null, 0],
            [1, null, null, 1, null, null],
            [null, null, null, 0, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, 0, 0, null],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_153",
        name: "P6_2_153",
        description: "6x6 Easy #153",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 15:28:11",
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
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00011396408081055
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 0],
            [1, null, 1, null, 1, null],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_154",
        name: "P6_2_154",
        description: "6x6 Easy #154",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 15:28:12",
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00045990943908691
        },
        grid: [
            [null, 0, 0, null, null, null],
            [1, null, 1, null, null, 1],
            [null, null, null, null, 1, 1],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_155",
        name: "P6_2_155",
        description: "6x6 Easy #155",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 15:28:14",
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
            initial_empty: 29,
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
            time_taken: 0.00061702728271484
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, 1, null, null],
            [1, null, null, 1, 1, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_156",
        name: "P6_2_156",
        description: "6x6 Easy #156",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 15:28:15",
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
            initial_empty: 28,
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
            time_taken: 0.00072312355041504
        },
        grid: [
            [0, null, null, null, null, 1],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_157",
        name: "P6_2_157",
        description: "6x6 Easy #157",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 15:28:17",
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
            initial_empty: 28,
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
            time_taken: 0.00034904479980469
        },
        grid: [
            [null, 1, 1, null, 1, null],
            [0, 0, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_158",
        name: "P6_2_158",
        description: "6x6 Easy #158",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 15:28:18",
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
            initial_empty: 27,
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
            time_taken: 0.00060606002807617
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, 0, null, null, 1, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, null],
            [null, 1, null, 1, 1, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_159",
        name: "P6_2_159",
        description: "6x6 Easy #159",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 15:28:19",
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
            initial_empty: 27,
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
            time_taken: 0.00077390670776367
        },
        grid: [
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, 1],
            [0, null, 0, null, null, null],
            [null, null, 0, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_160",
        name: "P6_2_160",
        description: "6x6 Easy #160",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 15:28:21",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00033903121948242
        },
        grid: [
            [null, null, null, null, null, 0],
            [1, null, null, 1, null, null],
            [1, null, null, 0, null, 0],
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, 0],
            [1, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_161",
        name: "P6_2_161",
        description: "6x6 Easy #161",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 15:28:22",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00045394897460938
        },
        grid: [
            [0, null, null, 0, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_162",
        name: "P6_2_162",
        description: "6x6 Easy #162",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 15:28:24",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00020909309387207
        },
        grid: [
            [0, null, null, 1, null, 0],
            [null, null, null, null, null, null],
            [null, 0, null, 0, null, 0],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_163",
        name: "P6_2_163",
        description: "6x6 Easy #163",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 15:28:25",
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
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00066709518432617
        },
        grid: [
            [null, 1, null, null, null, null],
            [1, null, null, null, null, null],
            [1, null, 1, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_164",
        name: "P6_2_164",
        description: "6x6 Easy #164",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 15:28:26",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00065994262695312
        },
        grid: [
            [1, 1, null, 1, null, null],
            [null, 1, null, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, null],
            [1, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_165",
        name: "P6_2_165",
        description: "6x6 Easy #165",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 15:28:28",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00043606758117676
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [0, null, null, null, 0, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, 0, null, 0]
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
        id: "P6_2_166",
        name: "P6_2_166",
        description: "6x6 Easy #166",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 15:28:29",
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
            initial_empty: 26,
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
            time_taken: 0.00096797943115234
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, 1, null, 0, 1],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_167",
        name: "P6_2_167",
        description: "6x6 Easy #167",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 15:28:30",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00034189224243164
        },
        grid: [
            [0, 0, null, null, 0, null],
            [null, null, 1, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, 1, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_168",
        name: "P6_2_168",
        description: "6x6 Easy #168",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 15:28:32",
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
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00072002410888672
        },
        grid: [
            [0, null, 0, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, null, 0, null],
            [null, 1, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_169",
        name: "P6_2_169",
        description: "6x6 Easy #169",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 15:28:33",
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
            initial_empty: 27,
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
            time_taken: 0.0003058910369873
        },
        grid: [
            [null, 0, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, 1, 1, null, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, null, 0],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_170",
        name: "P6_2_170",
        description: "6x6 Easy #170",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 15:28:35",
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
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00071382522583008
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [0, null, null, 0, 0, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_171",
        name: "P6_2_171",
        description: "6x6 Easy #171",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 15:28:36",
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
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00062203407287598
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 0, null, 1, null],
            [1, 1, null, null, null, null],
            [null, 1, null, null, null, 1],
            [null, null, 1, 1, null, 0],
            [null, null, null, null, null, null]
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
        id: "P6_2_172",
        name: "P6_2_172",
        description: "6x6 Easy #172",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 15:28:37",
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
            initial_empty: 27,
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
                tryFillCells: 3
            },
            time_taken: 0.00088286399841309
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, 1],
            [0, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_173",
        name: "P6_2_173",
        description: "6x6 Easy #173",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 15:28:44",
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
            initial_empty: 27,
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
            time_taken: 0.00086116790771484
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, 0, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_174",
        name: "P6_2_174",
        description: "6x6 Easy #174",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 15:28:45",
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
            initial_empty: 27,
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
            time_taken: 0.00020480155944824
        },
        grid: [
            [null, 0, null, 0, null, 0],
            [null, null, null, null, null, null],
            [null, 0, 0, null, 1, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_175",
        name: "P6_2_175",
        description: "6x6 Easy #175",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 15:28:46",
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
            initial_empty: 27,
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
                tryFillCells: 2
            },
            time_taken: 0.00074005126953125
        },
        grid: [
            [null, null, null, 0, null, 1],
            [0, null, 1, null, null, null],
            [null, 0, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_176",
        name: "P6_2_176",
        description: "6x6 Easy #176",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 15:28:48",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00041389465332031
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_177",
        name: "P6_2_177",
        description: "6x6 Easy #177",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 15:28:49",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0006411075592041
        },
        grid: [
            [0, 0, null, null, 0, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, null],
            [1, null, 0, null, 0, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_178",
        name: "P6_2_178",
        description: "6x6 Easy #178",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 15:28:51",
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
            time_taken: 0.0003359317779541
        },
        grid: [
            [null, 0, null, 0, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [1, null, null, 1, 1, null],
            [1, null, 0, null, null, null],
            [null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_179",
        name: "P6_2_179",
        description: "6x6 Easy #179",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 15:28:52",
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
            initial_empty: 27,
            logic_iterations: 5,
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
                tryFillCells: 3
            },
            time_taken: 0.0015568733215332
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 0],
            [1, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_180",
        name: "P6_2_180",
        description: "6x6 Easy #180",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 15:28:53",
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
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00030899047851562
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 1, null, 1, 1],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, 1],
            [0, null, 0, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_181",
        name: "P6_2_181",
        description: "6x6 Easy #181",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 15:28:55",
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
            time_taken: 0.00050520896911621
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, 0, null],
            [null, null, 1, null, null, 0],
            [null, null, null, 1, null, 0],
            [0, 0, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_2_182",
        name: "P6_2_182",
        description: "6x6 Easy #182",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 15:28:56",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00045204162597656
        },
        grid: [
            [0, null, null, 0, null, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 1, null],
            [0, null, 0, null, null, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_183",
        name: "P6_2_183",
        description: "6x6 Easy #183",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 15:28:57",
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
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00068879127502441
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, 0, null, null, null, 1],
            [null, null, null, 1, null, null],
            [1, 1, null, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_184",
        name: "P6_2_184",
        description: "6x6 Easy #184",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 15:28:59",
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
            initial_empty: 28,
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
                tryFillCells: 2
            },
            time_taken: 0.00044798851013184
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, 1, 1, null],
            [1, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_2_185",
        name: "P6_2_185",
        description: "6x6 Easy #185",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 15:29:00",
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00037312507629395
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [1, 1, null, null, 1, null],
            [null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_186",
        name: "P6_2_186",
        description: "6x6 Easy #186",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 15:29:02",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00031399726867676
        },
        grid: [
            [null, 0, null, null, 1, null],
            [0, null, null, 1, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, 1, null],
            [0, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_187",
        name: "P6_2_187",
        description: "6x6 Easy #187",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 15:29:03",
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
            time_taken: 0.00037908554077148
        },
        grid: [
            [null, 0, null, null, null, null],
            [0, null, null, 1, 1, null],
            [null, null, 0, null, 1, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 0, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_188",
        name: "P6_2_188",
        description: "6x6 Easy #188",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 15:29:04",
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
            initial_empty: 29,
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
            time_taken: 0.00080299377441406
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [0, 0, null, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_189",
        name: "P6_2_189",
        description: "6x6 Easy #189",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 15:29:06",
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
            initial_empty: 28,
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
            time_taken: 0.00045609474182129
        },
        grid: [
            [null, null, 1, null, 1, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_2_190",
        name: "P6_2_190",
        description: "6x6 Easy #190",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 15:29:07",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00031399726867676
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, 0],
            [null, 0, 1, null, 1, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_191",
        name: "P6_2_191",
        description: "6x6 Easy #191",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 15:29:09",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00075602531433105
        },
        grid: [
            [null, null, 0, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [1, null, 0, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_192",
        name: "P6_2_192",
        description: "6x6 Easy #192",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 15:29:10",
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
            initial_empty: 27,
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
            time_taken: 0.00099420547485352
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [0, null, null, null, 1, 1],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, 1],
            [0, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_193",
        name: "P6_2_193",
        description: "6x6 Easy #193",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 15:29:11",
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0006101131439209
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 1, 1, null, 0, null],
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_194",
        name: "P6_2_194",
        description: "6x6 Easy #194",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 15:29:13",
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
            initial_empty: 28,
            logic_iterations: 5,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0010800361633301
        },
        grid: [
            [null, 1, null, 1, null, null],
            [null, 1, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, 0, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_2_195",
        name: "P6_2_195",
        description: "6x6 Easy #195",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 15:29:14",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00033187866210938
        },
        grid: [
            [null, null, 1, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, 0, null, null, null],
            [null, null, 0, null, null, 1],
            [1, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_196",
        name: "P6_2_196",
        description: "6x6 Easy #196",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 15:29:15",
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
                completeRowsColumns: 3,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00039911270141602
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, 0, null, null],
            [0, null, 0, null, null, 0],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [null, 1, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_2_197",
        name: "P6_2_197",
        description: "6x6 Easy #197",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 15:29:17",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00051999092102051
        },
        grid: [
            [1, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, null, 0, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_2_198",
        name: "P6_2_198",
        description: "6x6 Easy #198",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 15:29:18",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00040602684020996
        },
        grid: [
            [null, 0, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, null, 0, null, null, null],
            [null, 0, 0, null, 0, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_2_199",
        name: "P6_2_199",
        description: "6x6 Easy #199",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 15:29:20",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00044703483581543
        },
        grid: [
            [null, null, null, null, null, null],
            [1, 0, null, null, 1, null],
            [1, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, 1, 1],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_2_200",
        name: "P6_2_200",
        description: "6x6 Easy #200",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=2&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 15:29:21",
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
            initial_empty: 27,
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
            time_taken: 0.00063800811767578
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, null, null, null, null],
            [0, null, 1, 0, null, null],
            [null, null, null, null, null, null],
            [1, 0, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL6x6_d2_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL6x6_d2_PUZZLES = LEVEL6x6_d2_PUZZLES;
}
