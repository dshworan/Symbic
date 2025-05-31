/**
 * level 6x6 d4 - 6x6 extreme
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

const LEVEL6x6_d4_PUZZLES = [
    {
        id: "P6_4_1",
        name: "P6_4_1",
        description: "6x6 Medium #1",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 15:44:20",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 27.6
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.0011098384857178
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, 1, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, 0, null]
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
        id: "P6_4_2",
        name: "P6_4_2",
        description: "6x6 Hard #2",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 15:44:21",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.3,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 20,
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
            time_taken: 0.0025558471679688
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, 0, null],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_3",
        name: "P6_4_3",
        description: "6x6 Medium #3",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 15:44:22",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 34.1,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 14.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.0011539459228516
        },
        grid: [
            [null, null, null, 0, null, 0],
            [null, null, 1, null, null, null],
            [null, 0, null, 1, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
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
        id: "P6_4_4",
        name: "P6_4_4",
        description: "6x6 Easy #4",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 15:44:24",
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
            time_taken: 0.0005648136138916
        },
        grid: [
            [null, null, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, 0, null, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, 0]
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
        id: "P6_4_5",
        name: "P6_4_5",
        description: "6x6 Hard #5",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 15:44:25",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 40,
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
            time_taken: 0.0039689540863037
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 0, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_6",
        name: "P6_4_6",
        description: "6x6 Hard #6",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 15:44:26",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 58,
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
            time_taken: 0.0052220821380615
        },
        grid: [
            [null, null, null, null, 1, 1],
            [1, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, 0],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_7",
        name: "P6_4_7",
        description: "6x6 Easy #7",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 15:44:28",
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
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00093317031860352
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_8",
        name: "P6_4_8",
        description: "6x6 Hard #8",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 15:44:29",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 22,
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
            time_taken: 0.0027720928192139
        },
        grid: [
            [0, null, null, null, 0, null],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, 1, 1, null, 0, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_9",
        name: "P6_4_9",
        description: "6x6 Easy #9",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 15:44:31",
        difficulty: "Easy",
        difficulty_score: 21,
        difficulty_factors: {
            logic_fill_score: 10.8,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 73.1
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.00056910514831543
        },
        grid: [
            [null, 1, null, null, 0, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 0, 0, null, null, 0],
            [null, null, null, 0, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_10",
        name: "P6_4_10",
        description: "6x6 Medium #10",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 15:44:32",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 1.2,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0017058849334717
        },
        grid: [
            [null, null, 1, null, 0, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_11",
        name: "P6_4_11",
        description: "6x6 Hard #11",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 15:44:33",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 34.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 13.3
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 2,
            backtrack_iterations: 46,
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
            time_taken: 0.004755973815918
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [1, 1, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_12",
        name: "P6_4_12",
        description: "6x6 Hard #12",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 15:44:35",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 9,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0018460750579834
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [0, null, null, 0, 1, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_13",
        name: "P6_4_13",
        description: "6x6 Easy #13",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 15:44:36",
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
            time_taken: 0.00045895576477051
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [0, 0, null, null, 0, null],
            [null, null, null, 1, null, 0],
            [null, 1, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_14",
        name: "P6_4_14",
        description: "6x6 Easy #14",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 15:44:37",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00066781044006348
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 0, 1, null, 1],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, 1],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, 0]
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
        id: "P6_4_15",
        name: "P6_4_15",
        description: "6x6 Medium #15",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 15:44:39",
        difficulty: "Medium",
        difficulty_score: 38,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 3,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0015120506286621
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 0, null, null, null, null]
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
        id: "P6_4_16",
        name: "P6_4_16",
        description: "6x6 Medium #16",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 15:44:40",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 60.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.001366138458252
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, 0, null],
            [1, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_17",
        name: "P6_4_17",
        description: "6x6 Medium #17",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 15:44:42",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 21.4,
            logic_iterations_score: 1.2,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 46.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 12,
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
            time_taken: 0.0031979084014893
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, null, 0, null, null, null],
            [null, 0, null, null, 0, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_18",
        name: "P6_4_18",
        description: "6x6 Easy #18",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 15:44:43",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00088095664978027
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, null, null, 0],
            [null, 0, null, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, 0, null, 1, null]
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
        id: "P6_4_19",
        name: "P6_4_19",
        description: "6x6 Hard #19",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 15:44:44",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 21.3,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 46.7
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 3,
            backtrack_iterations: 28,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0030548572540283
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, 1, 1, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null]
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
        id: "P6_4_20",
        name: "P6_4_20",
        description: "6x6 Easy #20",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 15:44:46",
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
            initial_empty: 28,
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
            time_taken: 0.00030207633972168
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, 1, null, 0],
            [null, null, null, 1, 1, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_21",
        name: "P6_4_21",
        description: "6x6 Medium #21",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 15:44:47",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 21.5,
            logic_iterations_score: 0.8,
            backtracking_score: 22.6,
            size_score: 5,
            percent_filled_by_logic: 46.2
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 10,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0015411376953125
        },
        grid: [
            [0, null, null, null, null, null],
            [null, 0, 0, null, 0, null],
            [null, null, null, null, 0, null],
            [0, null, 1, null, null, null],
            [null, null, 0, null, 0, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_22",
        name: "P6_4_22",
        description: "6x6 Easy #22",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 15:44:48",
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
            time_taken: 0.00053715705871582
        },
        grid: [
            [null, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [0, null, 0, 0, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_23",
        name: "P6_4_23",
        description: "6x6 Easy #23",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 15:44:50",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00081610679626465
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 1, 0, null, null, 0],
            [null, null, null, null, null, null],
            [1, null, null, 0, null, null],
            [1, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_24",
        name: "P6_4_24",
        description: "6x6 Hard #24",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 15:44:51",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.6,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 67,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0060269832611084
        },
        grid: [
            [0, null, null, 0, 0, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, null, null],
            [0, null, 1, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_4_25",
        name: "P6_4_25",
        description: "6x6 Hard #25",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 15:44:53",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 33.8,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 15.4
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 55,
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
            time_taken: 0.0079820156097412
        },
        grid: [
            [1, null, null, 1, null, null],
            [1, null, 0, 0, null, null],
            [null, null, null, null, 0, 1],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, null],
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
        id: "P6_4_26",
        name: "P6_4_26",
        description: "6x6 Medium #26",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 15:44:54",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 1.2,
            backtracking_score: 21.2,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 2,
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
            time_taken: 0.00091910362243652
        },
        grid: [
            [1, 1, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, 0, null, 1],
            [null, 1, null, null, null, null],
            [null, null, null, 0, null, null]
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
        id: "P6_4_27",
        name: "P6_4_27",
        description: "6x6 Easy #27",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 15:44:55",
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
            time_taken: 0.00060701370239258
        },
        grid: [
            [0, null, null, null, 0, null],
            [0, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null],
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
        id: "P6_4_28",
        name: "P6_4_28",
        description: "6x6 Hard #28",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 15:44:57",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 39,
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
            time_taken: 0.0065619945526123
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [1, null, 1, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [1, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_29",
        name: "P6_4_29",
        description: "6x6 Easy #29",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 15:44:58",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00058102607727051
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [1, 1, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, 1, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_30",
        name: "P6_4_30",
        description: "6x6 Hard #30",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 15:45:00",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 34.5,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 5,
            percent_filled_by_logic: 13.8
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 156,
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
            time_taken: 0.014734983444214
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, 0, null, 1],
            [0, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_31",
        name: "P6_4_31",
        description: "6x6 Hard #31",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 15:45:01",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.6,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 27,
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
            time_taken: 0.0037670135498047
        },
        grid: [
            [null, 1, 1, null, null, 0],
            [null, null, null, null, null, 0],
            [0, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_32",
        name: "P6_4_32",
        description: "6x6 Easy #32",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 15:45:02",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0011169910430908
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, 0, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_33",
        name: "P6_4_33",
        description: "6x6 Medium #33",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 15:45:04",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 13.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.7,
            size_score: 5,
            percent_filled_by_logic: 66.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 11,
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
            time_taken: 0.0016720294952393
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null],
            [0, null, null, 0, 0, null],
            [null, 1, null, null, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_34",
        name: "P6_4_34",
        description: "6x6 Easy #34",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 15:45:05",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00066709518432617
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, 0, null, null],
            [0, 1, null, null, null, null],
            [0, null, null, null, null, null]
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
        id: "P6_4_35",
        name: "P6_4_35",
        description: "6x6 Hard #35",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 15:45:07",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.1,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 44,
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
            time_taken: 0.0041608810424805
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_36",
        name: "P6_4_36",
        description: "6x6 Hard #36",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 15:45:08",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 23.4,
            logic_iterations_score: 0.8,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 41.4
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.0015890598297119
        },
        grid: [
            [null, 1, null, null, null, 1],
            [null, 1, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_37",
        name: "P6_4_37",
        description: "6x6 Hard #37",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 15:45:09",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 33.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25,
            size_score: 5,
            percent_filled_by_logic: 17.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 98,
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
            time_taken: 0.010679960250854
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, null, 1, 1],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, null, null]
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
        id: "P6_4_38",
        name: "P6_4_38",
        description: "6x6 Hard #38",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 15:45:11",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 0.4,
            backtracking_score: 6.4,
            size_score: 5,
            percent_filled_by_logic: 0
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 1,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00094389915466309
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [0, null, 1, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [1, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_39",
        name: "P6_4_39",
        description: "6x6 Medium #39",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 15:45:12",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 0.8,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.0010948181152344
        },
        grid: [
            [null, 1, 0, null, 0, null],
            [null, null, null, null, 0, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_40",
        name: "P6_4_40",
        description: "6x6 Hard #40",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 15:45:14",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 37,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 5,
            percent_filled_by_logic: 7.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 208,
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
            time_taken: 0.016406059265137
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, null, 1, null, null],
            [null, 1, null, null, 1, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_41",
        name: "P6_4_41",
        description: "6x6 Hard #41",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 15:45:15",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 61,
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
            time_taken: 0.0052800178527832
        },
        grid: [
            [0, null, null, 1, null, 0],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_42",
        name: "P6_4_42",
        description: "6x6 Medium #42",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 15:45:16",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 13.8,
            logic_iterations_score: 1.2,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 65.5
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 9,
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
            time_taken: 0.0027990341186523
        },
        grid: [
            [null, 0, null, null, 0, 0],
            [null, null, 1, null, null, null],
            [0, null, null, 0, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_43",
        name: "P6_4_43",
        description: "6x6 Hard #43",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 15:45:18",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.9,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 36,
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
            time_taken: 0.0052390098571777
        },
        grid: [
            [null, 1, 1, null, null, null],
            [0, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, 1],
            [null, null, null, null, null, null]
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
        id: "P6_4_44",
        name: "P6_4_44",
        description: "6x6 Easy #44",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 15:45:19",
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
                fillSandwiches: 3,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00075483322143555
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [1, 1, null, null, 0, null],
            [null, null, 0, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_45",
        name: "P6_4_45",
        description: "6x6 Easy #45",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 15:45:20",
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
            initial_empty: 30,
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
            time_taken: 0.0004580020904541
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_46",
        name: "P6_4_46",
        description: "6x6 Easy #46",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 15:45:22",
        difficulty: "Easy",
        difficulty_score: 18,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
                tryFillCells: 1
            },
            time_taken: 0.0011501312255859
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, null, 1, null, 1],
            [0, 1, null, 1, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null]
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
        id: "P6_4_47",
        name: "P6_4_47",
        description: "6x6 Easy #47",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 15:45:23",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00093603134155273
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, 0, 0, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_48",
        name: "P6_4_48",
        description: "6x6 Easy #48",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 15:45:25",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00047993659973145
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_49",
        name: "P6_4_49",
        description: "6x6 Easy #49",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 15:45:26",
        difficulty: "Easy",
        difficulty_score: 21,
        difficulty_factors: {
            logic_fill_score: 11.4,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 71.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001276969909668
        },
        grid: [
            [0, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, 1, null],
            [null, null, null, null, null, 1],
            [null, null, 0, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_50",
        name: "P6_4_50",
        description: "6x6 Hard #50",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 15:45:27",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 23,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 1
            },
            time_taken: 0.0020530223846436
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [0, 1, null, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_51",
        name: "P6_4_51",
        description: "6x6 Medium #51",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 15:45:29",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 1.6,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 4,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0031740665435791
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, 0, null],
            [1, 1, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, 1, null],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_52",
        name: "P6_4_52",
        description: "6x6 Hard #52",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 15:45:30",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 57,
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
            time_taken: 0.005950927734375
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [0, null, null, 1, 0, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_53",
        name: "P6_4_53",
        description: "6x6 Hard #53",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 15:45:32",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 21,
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
            time_taken: 0.0047180652618408
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, 0, null, null],
            [null, null, null, null, null, 1],
            [0, 1, null, null, 1, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_54",
        name: "P6_4_54",
        description: "6x6 Hard #54",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 15:45:33",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 22.1,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 44.8
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 16,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0029630661010742
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, null],
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
        id: "P6_4_55",
        name: "P6_4_55",
        description: "6x6 Hard #55",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 15:45:34",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.9,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 87,
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
            time_taken: 0.0068788528442383
        },
        grid: [
            [null, null, null, 0, null, null],
            [0, 1, null, 0, null, null],
            [null, 1, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_56",
        name: "P6_4_56",
        description: "6x6 Hard #56",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 15:45:36",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 26,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 242,
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
            time_taken: 0.034832000732422
        },
        grid: [
            [null, 0, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [1, null, null, null, 1, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_57",
        name: "P6_4_57",
        description: "6x6 Hard #57",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 15:45:37",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 40,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0066277980804443
        },
        grid: [
            [null, 0, null, null, null, 0],
            [null, null, null, 0, null, null],
            [null, 0, null, null, null, null],
            [0, 1, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_58",
        name: "P6_4_58",
        description: "6x6 Medium #58",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 15:45:38",
        difficulty: "Medium",
        difficulty_score: 29,
        difficulty_factors: {
            logic_fill_score: 17.8,
            logic_iterations_score: 1.6,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 55.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0026249885559082
        },
        grid: [
            [0, null, 0, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [1, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_59",
        name: "P6_4_59",
        description: "6x6 Hard #59",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 15:45:40",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.0059809684753418
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, 0, null, null, 1, null],
            [0, null, null, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_60",
        name: "P6_4_60",
        description: "6x6 Medium #60",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 15:45:41",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 22.1,
            size_score: 5,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.002655029296875
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, 0, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 0, 0, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_61",
        name: "P6_4_61",
        description: "6x6 Easy #61",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 15:45:43",
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
            initial_empty: 30,
            logic_iterations: 4,
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
                tryFillCells: 3
            },
            time_taken: 0.00078201293945312
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, null, 1, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_62",
        name: "P6_4_62",
        description: "6x6 Hard #62",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 15:45:44",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 24,
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
            time_taken: 0.0026898384094238
        },
        grid: [
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, null, null, null],
            [null, null, null, 1, null, 0],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_63",
        name: "P6_4_63",
        description: "6x6 Easy #63",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 15:45:45",
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
            time_taken: 0.00051116943359375
        },
        grid: [
            [null, null, 0, null, 1, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, 1, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_64",
        name: "P6_4_64",
        description: "6x6 Easy #64",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 15:45:47",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.00095295906066895
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, 1, null, 1, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_65",
        name: "P6_4_65",
        description: "6x6 Easy #65",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 15:45:48",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00079202651977539
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 1, null, null, 1, null],
            [null, 1, null, 0, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, null, null, null]
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
        id: "P6_4_66",
        name: "P6_4_66",
        description: "6x6 Medium #66",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 15:45:49",
        difficulty: "Medium",
        difficulty_score: 49,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 17,
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
            time_taken: 0.0024950504302979
        },
        grid: [
            [null, null, 0, null, null, null],
            [0, null, null, null, 0, null],
            [0, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_67",
        name: "P6_4_67",
        description: "6x6 Easy #67",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 15:45:51",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016641616821289
        },
        grid: [
            [null, null, null, 0, 1, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_68",
        name: "P6_4_68",
        description: "6x6 Easy #68",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 15:45:52",
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
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0011610984802246
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, 1, null, 0, null],
            [null, 1, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null]
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
        id: "P6_4_69",
        name: "P6_4_69",
        description: "6x6 Easy #69",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 15:45:54",
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
            initial_empty: 30,
            logic_iterations: 4,
            backtrack_iterations: 0,
            solved_with_logic_only: true,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0012137889862061
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [0, 0, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, null],
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
        id: "P6_4_70",
        name: "P6_4_70",
        description: "6x6 Medium #70",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 15:45:55",
        difficulty: "Medium",
        difficulty_score: 31,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.00076198577880859
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, 0],
            [null, 1, null, null, 1, null],
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
        id: "P6_4_71",
        name: "P6_4_71",
        description: "6x6 Easy #71",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 15:45:56",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00071811676025391
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, null, null, null, 1, 0],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_72",
        name: "P6_4_72",
        description: "6x6 Hard #72",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 15:45:58",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 35.4,
            logic_iterations_score: 0.8,
            backtracking_score: 22.9,
            size_score: 5,
            percent_filled_by_logic: 11.5
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 13,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0022459030151367
        },
        grid: [
            [null, 0, 1, null, null, 0],
            [1, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, 0],
            [null, null, 1, null, null, null],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_73",
        name: "P6_4_73",
        description: "6x6 Hard #73",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 15:45:59",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 22,
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
            time_taken: 0.0025770664215088
        },
        grid: [
            [null, null, 1, null, null, 1],
            [null, 0, null, null, null, 1],
            [1, 0, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [1, null, null, null, null, null]
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
        id: "P6_4_74",
        name: "P6_4_74",
        description: "6x6 Hard #74",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 15:46:00",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 37.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.1,
            size_score: 5,
            percent_filled_by_logic: 7.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 43,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0049271583557129
        },
        grid: [
            [null, null, 1, null, null, 1],
            [0, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 1],
            [1, null, null, 0, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_75",
        name: "P6_4_75",
        description: "6x6 Easy #75",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 15:46:02",
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
            initial_empty: 30,
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
            time_taken: 0.0011060237884521
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_76",
        name: "P6_4_76",
        description: "6x6 Medium #76",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 15:46:03",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.0015299320220947
        },
        grid: [
            [null, null, null, 0, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [0, null, 1, 0, null, null],
            [0, null, 1, null, null, null],
            [null, 0, null, null, null, null]
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
        id: "P6_4_77",
        name: "P6_4_77",
        description: "6x6 Hard #77",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 15:46:05",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 23.3,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 20,
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
            time_taken: 0.0022978782653809
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, null, 0, null, 1],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 0, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_78",
        name: "P6_4_78",
        description: "6x6 Hard #78",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 15:46:06",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 24.6,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 71,
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
            time_taken: 0.01025390625
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_79",
        name: "P6_4_79",
        description: "6x6 Easy #79",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 15:46:07",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00040984153747559
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 1, 1, null, null]
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
        id: "P6_4_80",
        name: "P6_4_80",
        description: "6x6 Medium #80",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 15:46:09",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 2,
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
            time_taken: 0.0012240409851074
        },
        grid: [
            [0, null, 1, null, 1, null],
            [null, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, null],
            [null, 1, null, null, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_81",
        name: "P6_4_81",
        description: "6x6 Medium #81",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 15:46:10",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0013217926025391
        },
        grid: [
            [null, 0, null, null, 0, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, 1, null, 0, null, null],
            [1, 0, null, null, null, 1],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_82",
        name: "P6_4_82",
        description: "6x6 Easy #82",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 15:46:11",
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
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0010249614715576
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, 1, null],
            [null, 0, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, null, null]
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
        id: "P6_4_83",
        name: "P6_4_83",
        description: "6x6 Medium #83",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 15:46:13",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 14.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 64.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0014939308166504
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [0, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [1, null, null, null, null, null],
            [null, null, 0, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_84",
        name: "P6_4_84",
        description: "6x6 Hard #84",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 15:46:14",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 31,
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
            time_taken: 0.0036020278930664
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, 1],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 1, null],
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
        id: "P6_4_85",
        name: "P6_4_85",
        description: "6x6 Hard #85",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 15:46:16",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 20,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0042171478271484
        },
        grid: [
            [null, null, null, null, 1, 1],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, 0, 1, null, null],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_86",
        name: "P6_4_86",
        description: "6x6 Easy #86",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 15:46:17",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 14.8,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 63
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00092911720275879
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, 1, null],
            [0, null, null, 0, null, 0],
            [0, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_87",
        name: "P6_4_87",
        description: "6x6 Medium #87",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 15:46:19",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 17.1,
            logic_iterations_score: 1.6,
            backtracking_score: 22.7,
            size_score: 5,
            percent_filled_by_logic: 57.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 11,
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
            time_taken: 0.003568172454834
        },
        grid: [
            [null, null, null, 0, null, null],
            [0, 0, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_88",
        name: "P6_4_88",
        description: "6x6 Easy #88",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 15:46:20",
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
                tryFillCells: 2
            },
            time_taken: 0.0003960132598877
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [1, null, 1, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_89",
        name: "P6_4_89",
        description: "6x6 Hard #89",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 15:46:21",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 45,
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
            time_taken: 0.0044450759887695
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, 0, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, 1, null, null, null, null],
            [null, null, 1, 1, null, 1],
            [0, null, 1, null, null, null]
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
        id: "P6_4_90",
        name: "P6_4_90",
        description: "6x6 Hard #90",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 15:46:23",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 0.8,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 12,
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
            time_taken: 0.0028629302978516
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 0, null, 0, null, 0],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_91",
        name: "P6_4_91",
        description: "6x6 Hard #91",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 15:46:24",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.9,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 37,
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
            time_taken: 0.005918025970459
        },
        grid: [
            [0, null, null, null, null, null],
            [0, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [1, null, 0, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null]
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
        id: "P6_4_92",
        name: "P6_4_92",
        description: "6x6 Hard #92",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 15:46:25",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 17,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0024130344390869
        },
        grid: [
            [1, 1, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 1, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, 1, null]
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
        id: "P6_4_93",
        name: "P6_4_93",
        description: "6x6 Easy #93",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 15:46:27",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 10.4,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 74.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00070691108703613
        },
        grid: [
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, 0, null, 1, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_94",
        name: "P6_4_94",
        description: "6x6 Hard #94",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 15:46:28",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 85,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.011650085449219
        },
        grid: [
            [1, null, null, 1, null, 1],
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 0],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_95",
        name: "P6_4_95",
        description: "6x6 Hard #95",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 15:46:30",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 0.8,
            backtracking_score: 22.9,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 13,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.003093957901001
        },
        grid: [
            [0, 1, null, 1, null, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_96",
        name: "P6_4_96",
        description: "6x6 Hard #96",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 15:46:31",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 155,
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
            time_taken: 0.011889934539795
        },
        grid: [
            [0, null, null, null, null, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, 1, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_97",
        name: "P6_4_97",
        description: "6x6 Easy #97",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 15:46:32",
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
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00055503845214844
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, null, null, 1, 1],
            [0, null, 1, 1, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_98",
        name: "P6_4_98",
        description: "6x6 Easy #98",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 15:46:34",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010271072387695
        },
        grid: [
            [null, 0, null, null, 0, 0],
            [null, 1, null, null, null, 1],
            [null, null, 0, null, null, null],
            [null, 1, null, 1, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_99",
        name: "P6_4_99",
        description: "6x6 Medium #99",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 15:46:35",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 21.5,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 46.2
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.0014379024505615
        },
        grid: [
            [null, null, 0, 1, null, null],
            [null, null, null, null, 1, 1],
            [null, null, 0, null, null, 0],
            [null, null, null, null, 1, null],
            [null, null, 1, 1, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_100",
        name: "P6_4_100",
        description: "6x6 Medium #100",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 15:46:37",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 6,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0012800693511963
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [0, null, 1, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, 0, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_101",
        name: "P6_4_101",
        description: "6x6 Medium #101",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 15:46:38",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 0.8,
            backtracking_score: 21.2,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00094890594482422
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [0, null, 0, null, 0, null],
            [0, null, 0, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_102",
        name: "P6_4_102",
        description: "6x6 Easy #102",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 15:46:39",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0007631778717041
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, 0],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_103",
        name: "P6_4_103",
        description: "6x6 Easy #103",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 15:46:41",
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
            initial_empty: 28,
            logic_iterations: 6,
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
                tryFillCells: 5
            },
            time_taken: 0.0019478797912598
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, 1, null, null, null],
            [1, null, null, null, 1, null],
            [null, null, null, 1, 1, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_104",
        name: "P6_4_104",
        description: "6x6 Hard #104",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 15:46:42",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 23.1,
            logic_iterations_score: 0.8,
            backtracking_score: 22.6,
            size_score: 5,
            percent_filled_by_logic: 42.3
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 10,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0026569366455078
        },
        grid: [
            [null, null, 1, null, 1, 1],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 1, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_105",
        name: "P6_4_105",
        description: "6x6 Hard #105",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 15:46:44",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 48.3
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 29,
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
            time_taken: 0.0061409473419189
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, 0, 0, null, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_106",
        name: "P6_4_106",
        description: "6x6 Hard #106",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 15:46:45",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 37,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0073959827423096
        },
        grid: [
            [1, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, 0, 0, null],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 0],
            [null, null, null, 1, null, null]
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
        id: "P6_4_107",
        name: "P6_4_107",
        description: "6x6 Medium #107",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 15:46:46",
        difficulty: "Medium",
        difficulty_score: 26,
        difficulty_factors: {
            logic_fill_score: 15.4,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 61.5
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 4,
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
            time_taken: 0.0018091201782227
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, 0],
            [null, 0, null, 0, 0, null],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_108",
        name: "P6_4_108",
        description: "6x6 Hard #108",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 15:46:48",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0016899108886719
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, 1, 0, null],
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_109",
        name: "P6_4_109",
        description: "6x6 Easy #109",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 15:46:49",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00061607360839844
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_110",
        name: "P6_4_110",
        description: "6x6 Hard #110",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 15:46:50",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 34.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 5,
            percent_filled_by_logic: 14.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 162,
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
            time_taken: 0.01321005821228
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, 1, 1, null, null],
            [null, null, null, 0, null, null],
            [null, 1, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_111",
        name: "P6_4_111",
        description: "6x6 Medium #111",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 15:46:52",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0012757778167725
        },
        grid: [
            [null, 1, 1, null, null, 1],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_112",
        name: "P6_4_112",
        description: "6x6 Hard #112",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 15:46:53",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 0.4,
            backtracking_score: 25.7,
            size_score: 5,
            percent_filled_by_logic: 0
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 1,
            backtrack_iterations: 190,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.017926931381226
        },
        grid: [
            [null, null, 0, null, null, 0],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 1],
            [1, null, null, 0, null, null],
            [null, null, null, 1, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_113",
        name: "P6_4_113",
        description: "6x6 Hard #113",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 15:46:55",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 0.4,
            backtracking_score: 26.7,
            size_score: 5,
            percent_filled_by_logic: 0
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 1,
            backtrack_iterations: 483,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.045032978057861
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, 1, null, null, 1, null],
            [null, null, null, 0, null, 1],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_114",
        name: "P6_4_114",
        description: "6x6 Easy #114",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 15:46:56",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00069999694824219
        },
        grid: [
            [0, null, null, null, null, null],
            [0, null, null, 0, 0, null],
            [null, 1, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_115",
        name: "P6_4_115",
        description: "6x6 Medium #115",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 15:46:57",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 17.6,
            logic_iterations_score: 1.2,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 56
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 12,
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
            time_taken: 0.00180983543396
        },
        grid: [
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 0, 1, null, 1],
            [1, null, null, null, null, null],
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_116",
        name: "P6_4_116",
        description: "6x6 Hard #116",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 15:46:59",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.6,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 30,
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
            time_taken: 0.0061888694763184
        },
        grid: [
            [null, null, 1, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [0, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_117",
        name: "P6_4_117",
        description: "6x6 Easy #117",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 15:47:00",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00029301643371582
        },
        grid: [
            [null, null, 1, 1, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_118",
        name: "P6_4_118",
        description: "6x6 Medium #118",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 15:47:02",
        difficulty: "Medium",
        difficulty_score: 38,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.00096607208251953
        },
        grid: [
            [null, 1, null, 1, null, null],
            [0, null, null, null, 0, null],
            [null, null, 1, null, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_119",
        name: "P6_4_119",
        description: "6x6 Hard #119",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 15:47:03",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 31,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0030078887939453
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [null, null, null, null, 0, null],
            [1, null, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_120",
        name: "P6_4_120",
        description: "6x6 Medium #120",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 15:47:04",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 27.1,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 32.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.001615047454834
        },
        grid: [
            [null, null, null, null, 1, null],
            [0, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 0],
            [null, null, 1, null, null, null],
            [0, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_121",
        name: "P6_4_121",
        description: "6x6 Easy #121",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 15:47:06",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0013401508331299
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 0, null, null, 1, null],
            [1, null, null, null, 1, null],
            [null, 1, null, null, null, 0],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null]
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
        id: "P6_4_122",
        name: "P6_4_122",
        description: "6x6 Hard #122",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 15:47:07",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 1.6,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 4,
            backtrack_iterations: 21,
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
            time_taken: 0.0034358501434326
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, 0, null, null, null, null],
            [1, 0, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 0],
            [1, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_123",
        name: "P6_4_123",
        description: "6x6 Medium #123",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 15:47:09",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 6,
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
            time_taken: 0.0016860961914062
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 0],
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
        id: "P6_4_124",
        name: "P6_4_124",
        description: "6x6 Easy #124",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 15:47:10",
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
            time_taken: 0.00085806846618652
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, 0, null, 1, 0, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, 1, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_125",
        name: "P6_4_125",
        description: "6x6 Easy #125",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 15:47:12",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00034403800964355
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, 0, 0],
            [null, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_126",
        name: "P6_4_126",
        description: "6x6 Hard #126",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 15:47:13",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 12,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0035018920898438
        },
        grid: [
            [null, 0, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, 0, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_127",
        name: "P6_4_127",
        description: "6x6 Medium #127",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 15:47:14",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 17.1,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 57.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 4,
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
            time_taken: 0.001154899597168
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_128",
        name: "P6_4_128",
        description: "6x6 Medium #128",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 15:47:16",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 21.4,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 46.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.00085687637329102
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, 1, null]
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
        id: "P6_4_129",
        name: "P6_4_129",
        description: "6x6 Easy #129",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 15:47:17",
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
            time_taken: 0.00052714347839355
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, null],
            [null, 0, null, 1, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_130",
        name: "P6_4_130",
        description: "6x6 Hard #130",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 15:47:18",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.2,
            backtracking_score: 25.3,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 136,
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
            time_taken: 0.014111042022705
        },
        grid: [
            [0, null, null, null, 1, 0],
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_131",
        name: "P6_4_131",
        description: "6x6 Hard #131",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 15:47:20",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.2,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 18,
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
            time_taken: 0.0022339820861816
        },
        grid: [
            [null, 1, null, 1, null, null],
            [0, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [1, null, null, null, null, 1],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_132",
        name: "P6_4_132",
        description: "6x6 Hard #132",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 15:47:21",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.3,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 7,
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
            time_taken: 0.0019261837005615
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, 1, 1, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, 1, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_133",
        name: "P6_4_133",
        description: "6x6 Hard #133",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 15:47:23",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 23.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 42.3
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 16,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0020630359649658
        },
        grid: [
            [1, null, null, 1, null, 1],
            [null, null, null, 0, null, null],
            [null, null, 1, null, 0, null],
            [null, null, null, null, null, null],
            [null, 0, null, 1, null, 1],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_134",
        name: "P6_4_134",
        description: "6x6 Easy #134",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 15:47:24",
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0011270046234131
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, null, null, 0, null, 1],
            [null, null, null, null, null, null],
            [null, null, 0, 1, null, 1],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_135",
        name: "P6_4_135",
        description: "6x6 Medium #135",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 15:47:25",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 4,
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
            time_taken: 0.0013210773468018
        },
        grid: [
            [null, null, 0, null, null, null],
            [0, null, null, null, null, 1],
            [0, null, 1, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, 1, null, 1],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_136",
        name: "P6_4_136",
        description: "6x6 Easy #136",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 15:47:27",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00067877769470215
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 0, null, 0, null, null],
            [0, null, null, 0, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_137",
        name: "P6_4_137",
        description: "6x6 Easy #137",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 15:47:28",
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
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00060009956359863
        },
        grid: [
            [null, 1, 1, null, null, 1],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_138",
        name: "P6_4_138",
        description: "6x6 Easy #138",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 15:47:30",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00097084045410156
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, 1, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [1, null, null, 0, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_139",
        name: "P6_4_139",
        description: "6x6 Easy #139",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 15:47:31",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 12.9,
            logic_iterations_score: 1.6,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 67.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0019118785858154
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, 0, null],
            [null, 1, null, null, null, 1]
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
        id: "P6_4_140",
        name: "P6_4_140",
        description: "6x6 Hard #140",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 15:47:32",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 97,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0077269077301025
        },
        grid: [
            [0, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [0, null, null, null, null, 0],
            [null, null, 0, null, 1, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_141",
        name: "P6_4_141",
        description: "6x6 Hard #141",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 15:47:34",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 35.6,
            logic_iterations_score: 0.8,
            backtracking_score: 22.7,
            size_score: 5,
            percent_filled_by_logic: 11.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 11,
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
            time_taken: 0.0037760734558105
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 0, 0, null, null],
            [null, 0, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_142",
        name: "P6_4_142",
        description: "6x6 Medium #142",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 15:47:35",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.0012261867523193
        },
        grid: [
            [null, null, 1, 1, null, null],
            [0, null, null, null, null, null],
            [null, 0, null, 0, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_143",
        name: "P6_4_143",
        description: "6x6 Hard #143",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 15:47:36",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 17,
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
            time_taken: 0.0023097991943359
        },
        grid: [
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, 0, null, null, null],
            [null, null, 0, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_144",
        name: "P6_4_144",
        description: "6x6 Medium #144",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 15:47:38",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 60.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 5,
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
            time_taken: 0.0014650821685791
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, 0, null, 1, 1],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_145",
        name: "P6_4_145",
        description: "6x6 Hard #145",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 15:47:39",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 25.2,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 117,
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
            time_taken: 0.0088839530944824
        },
        grid: [
            [null, null, 0, null, null, null],
            [0, 0, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, null, 0, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_146",
        name: "P6_4_146",
        description: "6x6 Medium #146",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 15:47:41",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 22.3,
            size_score: 5,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 7,
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
            time_taken: 0.0019431114196777
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, 0, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_147",
        name: "P6_4_147",
        description: "6x6 Easy #147",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 15:47:42",
        difficulty: "Easy",
        difficulty_score: 20,
        difficulty_factors: {
            logic_fill_score: 10.8,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 73.1
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00075101852416992
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, 1, null, 0],
            [null, 1, null, null, null, 0],
            [null, 1, null, 1, null, null],
            [null, null, null, 1, null, 0],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_148",
        name: "P6_4_148",
        description: "6x6 Hard #148",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 15:47:43",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 65,
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
            time_taken: 0.0056390762329102
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 1, null, null, 0, null],
            [0, null, null, null, null, null],
            [0, 0, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_149",
        name: "P6_4_149",
        description: "6x6 Hard #149",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 15:47:45",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.2,
            backtracking_score: 22.6,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 10,
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
            time_taken: 0.0022640228271484
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [1, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, null, 0, 0, null, null]
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
        id: "P6_4_150",
        name: "P6_4_150",
        description: "6x6 Hard #150",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 15:47:46",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 30.8,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 23.1
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 23,
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
            time_taken: 0.0029869079589844
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 1, null, 1, null, null],
            [null, 1, 1, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_151",
        name: "P6_4_151",
        description: "6x6 Medium #151",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 15:47:47",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 11.4,
            logic_iterations_score: 0.8,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 71.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.0013501644134521
        },
        grid: [
            [null, null, 1, null, null, 1],
            [null, 1, 1, null, null, null],
            [0, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_152",
        name: "P6_4_152",
        description: "6x6 Medium #152",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 15:47:49",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 1.2,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 18.5
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 6,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0017299652099609
        },
        grid: [
            [null, null, null, null, 1, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, null, 1, 0, null, null]
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
        id: "P6_4_153",
        name: "P6_4_153",
        description: "6x6 Easy #153",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 15:47:50",
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
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00068807601928711
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, 1, null],
            [1, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null]
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
        id: "P6_4_154",
        name: "P6_4_154",
        description: "6x6 Easy #154",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 15:47:52",
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
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00026988983154297
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_155",
        name: "P6_4_155",
        description: "6x6 Easy #155",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 15:47:53",
        difficulty: "Easy",
        difficulty_score: 24,
        difficulty_factors: {
            logic_fill_score: 13.8,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 65.4
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00086402893066406
        },
        grid: [
            [null, 0, null, 1, null, 1],
            [null, null, null, 1, null, 1],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_156",
        name: "P6_4_156",
        description: "6x6 Hard #156",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 15:47:54",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 16,
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
            time_taken: 0.0021390914916992
        },
        grid: [
            [null, 1, null, 1, null, 1],
            [null, 1, null, null, null, 1],
            [null, null, null, 0, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_4_157",
        name: "P6_4_157",
        description: "6x6 Easy #157",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 15:47:56",
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00077605247497559
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, 1, null, 1, null],
            [1, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [null, 1, null, null, null, null],
            [1, null, 0, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_158",
        name: "P6_4_158",
        description: "6x6 Medium #158",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 15:47:57",
        difficulty: "Medium",
        difficulty_score: 49,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 17,
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
            time_taken: 0.003148078918457
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, 1, 0, null, null],
            [0, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [1, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_159",
        name: "P6_4_159",
        description: "6x6 Hard #159",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 15:47:59",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 1.2,
            backtracking_score: 23.9,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 1
            },
            time_taken: 0.0043151378631592
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, null, null, 1],
            [0, null, null, 0, null, null],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_160",
        name: "P6_4_160",
        description: "6x6 Easy #160",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 15:48:00",
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
                tryFillCells: 3
            },
            time_taken: 0.00061798095703125
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, 0],
            [null, null, null, 0, null, null],
            [null, 0, 0, null, null, 0],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_161",
        name: "P6_4_161",
        description: "6x6 Easy #161",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 15:48:02",
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
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 3,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0013160705566406
        },
        grid: [
            [0, null, null, null, null, 1],
            [0, null, 1, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_162",
        name: "P6_4_162",
        description: "6x6 Hard #162",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 15:48:03",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 34.5,
            logic_iterations_score: 0.8,
            backtracking_score: 26.1,
            size_score: 5,
            percent_filled_by_logic: 13.8
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 269,
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
            time_taken: 0.030704975128174
        },
        grid: [
            [0, null, null, 0, null, null],
            [0, 0, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 0],
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
        id: "P6_4_163",
        name: "P6_4_163",
        description: "6x6 Hard #163",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 15:48:04",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 23,
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
            time_taken: 0.0028619766235352
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, null, 1, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, 1],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_164",
        name: "P6_4_164",
        description: "6x6 Easy #164",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 15:48:06",
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
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00081801414489746
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 0, null, null, null, 1],
            [null, null, 1, null, null, null],
            [null, 0, null, null, 0, null],
            [null, null, 1, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_165",
        name: "P6_4_165",
        description: "6x6 Hard #165",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 15:48:07",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 0.8,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 38,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.003654956817627
        },
        grid: [
            [null, 0, null, null, 0, 0],
            [null, null, 0, null, null, null],
            [null, 0, null, 1, 0, null],
            [null, null, null, null, 0, 1],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_166",
        name: "P6_4_166",
        description: "6x6 Hard #166",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 15:48:08",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 28,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0032060146331787
        },
        grid: [
            [null, null, null, null, 0, 1],
            [null, 0, null, null, null, null],
            [0, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_167",
        name: "P6_4_167",
        description: "6x6 Medium #167",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 15:48:10",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 11.9,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 70.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0021939277648926
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, 0],
            [null, null, null, null, null, 0],
            [null, null, null, null, 0, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 0, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_168",
        name: "P6_4_168",
        description: "6x6 Hard #168",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 15:48:11",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 18.5
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 23,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.002716064453125
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, null, 0, 1],
            [null, null, 1, null, null, null],
            [0, null, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_169",
        name: "P6_4_169",
        description: "6x6 Medium #169",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 15:48:13",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 1.2,
            backtracking_score: 22.7,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 11,
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
            time_taken: 0.0018539428710938
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, null, 1],
            [0, 0, null, 0, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [1, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_170",
        name: "P6_4_170",
        description: "6x6 Hard #170",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 15:48:14",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 25,
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
            time_taken: 0.0036129951477051
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 0, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [1, null, 0, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_171",
        name: "P6_4_171",
        description: "6x6 Hard #171",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 15:48:15",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.0069389343261719
        },
        grid: [
            [0, null, null, 0, 1, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, 0, null],
            [null, 1, null, 0, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_4_172",
        name: "P6_4_172",
        description: "6x6 Hard #172",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 15:48:17",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 17,
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
            time_taken: 0.0027759075164795
        },
        grid: [
            [null, null, 0, null, 1, null],
            [0, 1, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_173",
        name: "P6_4_173",
        description: "6x6 Easy #173",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 15:48:18",
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
            time_taken: 0.00057697296142578
        },
        grid: [
            [null, null, 1, null, null, 0],
            [null, null, null, null, 1, 0],
            [null, null, 1, null, 1, null],
            [null, 0, null, null, null, null],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_174",
        name: "P6_4_174",
        description: "6x6 Medium #174",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 15:48:19",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 17.1,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 57.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.00081801414489746
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [1, 1, null, null, null, null],
            [null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_175",
        name: "P6_4_175",
        description: "6x6 Hard #175",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 15:48:21",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 9,
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
            time_taken: 0.0037441253662109
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null],
            [1, 1, null, null, 0, null],
            [1, null, null, 1, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_176",
        name: "P6_4_176",
        description: "6x6 Easy #176",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 15:48:22",
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
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00048995018005371
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 1],
            [1, null, 1, null, null, 1],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_177",
        name: "P6_4_177",
        description: "6x6 Hard #177",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 15:48:24",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 25.2,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 122,
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
            time_taken: 0.013849973678589
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, null, null, 0, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [1, null, null, null, null, null],
            [null, 0, null, null, 1, null]
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
        id: "P6_4_178",
        name: "P6_4_178",
        description: "6x6 Hard #178",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 15:48:25",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 25,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0035929679870605
        },
        grid: [
            [null, 1, null, null, 1, null],
            [null, null, null, null, 1, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_179",
        name: "P6_4_179",
        description: "6x6 Medium #179",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 15:48:26",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00086402893066406
        },
        grid: [
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, 0, null, null, 0],
            [0, null, null, 0, 0, null],
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
        id: "P6_4_180",
        name: "P6_4_180",
        description: "6x6 Medium #180",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 15:48:28",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 0.8,
            backtracking_score: 21.2,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 2,
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
            time_taken: 0.00072288513183594
        },
        grid: [
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [1, null, 0, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, 0, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_181",
        name: "P6_4_181",
        description: "6x6 Hard #181",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 15:48:29",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 0.8,
            backtracking_score: 25.9,
            size_score: 5,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 219,
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
            time_taken: 0.029478073120117
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null]
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
        id: "P6_4_182",
        name: "P6_4_182",
        description: "6x6 Hard #182",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 15:48:30",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 17,
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
            time_taken: 0.0024261474609375
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [null, null, null, null, null, null],
            [1, null, null, 0, 0, null],
            [1, 0, null, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_183",
        name: "P6_4_183",
        description: "6x6 Hard #183",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 15:48:32",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 25.5,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 152,
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
            time_taken: 0.011980056762695
        },
        grid: [
            [null, null, 1, 1, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [0, null, null, null, 0, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_184",
        name: "P6_4_184",
        description: "6x6 Medium #184",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 15:48:33",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010361671447754
        },
        grid: [
            [null, 1, null, null, null, null],
            [1, null, 0, null, 1, null],
            [1, null, null, null, 1, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 0, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_185",
        name: "P6_4_185",
        description: "6x6 Hard #185",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 15:48:35",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 59,
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
            time_taken: 0.0055179595947266
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [0, null, 1, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_4_186",
        name: "P6_4_186",
        description: "6x6 Easy #186",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 15:48:36",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 14.8,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 63
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.00089216232299805
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, 1, null, null],
            [1, null, 0, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, 0, null, 1, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_187",
        name: "P6_4_187",
        description: "6x6 Easy #187",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 15:48:37",
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
            time_taken: 0.0011129379272461
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, null, 0, 1],
            [1, null, null, null, 0, null],
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null]
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
        id: "P6_4_188",
        name: "P6_4_188",
        description: "6x6 Medium #188",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 15:48:39",
        difficulty: "Medium",
        difficulty_score: 29,
        difficulty_factors: {
            logic_fill_score: 17.9,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 55.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012350082397461
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_189",
        name: "P6_4_189",
        description: "6x6 Medium #189",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 15:48:40",
        difficulty: "Medium",
        difficulty_score: 46,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 0.8,
            backtracking_score: 6.4,
            size_score: 5,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 8,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0014181137084961
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 0, null, 1],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_190",
        name: "P6_4_190",
        description: "6x6 Hard #190",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 15:48:41",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 23.4,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 41.4
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 22,
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
            time_taken: 0.0022790431976318
        },
        grid: [
            [1, null, null, 1, null, 1],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_191",
        name: "P6_4_191",
        description: "6x6 Hard #191",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 15:48:43",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 29,
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
            time_taken: 0.0060210227966309
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, 1, null],
            [1, null, 0, null, null, null],
            [0, null, null, 1, null, null],
            [null, 0, null, 1, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_4_192",
        name: "P6_4_192",
        description: "6x6 Easy #192",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 15:48:44",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.00071287155151367
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [1, null, null, null, null, 1],
            [null, 0, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_4_193",
        name: "P6_4_193",
        description: "6x6 Hard #193",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 15:48:46",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 45,
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
            time_taken: 0.0043189525604248
        },
        grid: [
            [null, null, 1, null, 0, null],
            [null, 0, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [0, 1, null, null, null, 1],
            [null, null, 0, null, null, null]
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
        id: "P6_4_194",
        name: "P6_4_194",
        description: "6x6 Medium #194",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 15:48:47",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00089502334594727
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, 0, 0, null, null, 0],
            [null, null, null, null, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_4_195",
        name: "P6_4_195",
        description: "6x6 Medium #195",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 15:48:48",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 8.3,
            logic_iterations_score: 2,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 79.3
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 5,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0016229152679443
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [0, null, null, null, 1, null],
            [null, 1, null, null, null, null],
            [null, 1, null, 1, null, null]
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
        id: "P6_4_196",
        name: "P6_4_196",
        description: "6x6 Hard #196",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 15:48:50",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 1.2,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 38,
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
            time_taken: 0.0042510032653809
        },
        grid: [
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, null, 1, null],
            [0, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_197",
        name: "P6_4_197",
        description: "6x6 Medium #197",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 15:48:51",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 19.2,
            logic_iterations_score: 1.2,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 52
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 5,
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
            time_taken: 0.0016260147094727
        },
        grid: [
            [null, null, null, 0, null, null],
            [0, null, 1, 0, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 1],
            [0, 1, null, 0, null, null],
            [1, null, null, null, 1, null]
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
        id: "P6_4_198",
        name: "P6_4_198",
        description: "6x6 Hard #198",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 15:48:53",
        difficulty: "Hard",
        difficulty_score: 67,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 25.9,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 226,
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
            time_taken: 0.018944025039673
        },
        grid: [
            [0, 1, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 1, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_4_199",
        name: "P6_4_199",
        description: "6x6 Medium #199",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 15:48:54",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 2,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 5,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.0018458366394043
        },
        grid: [
            [null, 0, null, null, null, 1],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 1, null, 1],
            [null, null, 0, null, null, null],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_4_200",
        name: "P6_4_200",
        description: "6x6 Medium #200",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=4&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 15:48:56",
        difficulty: "Medium",
        difficulty_score: 26,
        difficulty_factors: {
            logic_fill_score: 16.9,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 57.7
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00071001052856445
        },
        grid: [
            [null, null, null, 0, 1, null],
            [0, 1, null, null, null, null],
            [0, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [0, 1, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL6x6_d4_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL6x6_d4_PUZZLES = LEVEL6x6_d4_PUZZLES;
}
