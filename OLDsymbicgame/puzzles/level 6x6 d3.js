/**
 * level 6x6 d3 - 6x6 hard
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

const LEVEL6x6_d3_PUZZLES = [
    {
        id: "P6_3_1",
        name: "P6_3_1",
        description: "6x6 Hard #1",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=1",
        puzzle_number: 1,
        date_saved: "2025-04-23 15:31:53",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 18.5
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.002345085144043
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, 1],
            [0, null, null, null, 0, null],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, 0, null]
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
        id: "P6_3_2",
        name: "P6_3_2",
        description: "6x6 Medium #2",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=2",
        puzzle_number: 2,
        date_saved: "2025-04-23 15:31:54",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011842250823975
        },
        grid: [
            [null, 1, 1, null, null, 1],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 0],
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
        id: "P6_3_3",
        name: "P6_3_3",
        description: "6x6 Hard #3",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=3",
        puzzle_number: 3,
        date_saved: "2025-04-23 15:31:55",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 33.8,
            logic_iterations_score: 0.8,
            backtracking_score: 25,
            size_score: 5,
            percent_filled_by_logic: 15.4
        },
        solver_metrics: {
            initial_empty: 26,
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
                tryFillCells: 0
            },
            time_taken: 0.0084140300750732
        },
        grid: [
            [1, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null],
            [null, 1, null, null, 1, null],
            [null, null, null, null, null, 0],
            [null, null, 0, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_4",
        name: "P6_3_4",
        description: "6x6 Hard #4",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=4",
        puzzle_number: 4,
        date_saved: "2025-04-23 15:31:57",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
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
                tryFillCells: 0
            },
            time_taken: 0.0034089088439941
        },
        grid: [
            [null, null, 1, 1, null, 1],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_5",
        name: "P6_3_5",
        description: "6x6 Hard #5",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=5",
        puzzle_number: 5,
        date_saved: "2025-04-23 15:31:58",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 33.3
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0015561580657959
        },
        grid: [
            [1, 1, null, 0, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 0, null, null, null]
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
        id: "P6_3_6",
        name: "P6_3_6",
        description: "6x6 Hard #6",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=6",
        puzzle_number: 6,
        date_saved: "2025-04-23 15:32:00",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.1,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 42,
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
            time_taken: 0.0041689872741699
        },
        grid: [
            [0, null, 0, null, null, 0],
            [null, 1, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, 0, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_7",
        name: "P6_3_7",
        description: "6x6 Hard #7",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=7",
        puzzle_number: 7,
        date_saved: "2025-04-23 15:32:01",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.6,
            size_score: 5,
            percent_filled_by_logic: 10.7
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
            time_taken: 0.0080220699310303
        },
        grid: [
            [null, null, null, null, 0, 0],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [1, null, 1, null, null, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_8",
        name: "P6_3_8",
        description: "6x6 Hard #8",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=8",
        puzzle_number: 8,
        date_saved: "2025-04-23 15:32:02",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 25,
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
            time_taken: 0.0037310123443604
        },
        grid: [
            [0, null, null, null, null, null],
            [0, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_9",
        name: "P6_3_9",
        description: "6x6 Easy #9",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=9",
        puzzle_number: 9,
        date_saved: "2025-04-23 15:32:04",
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
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00075316429138184
        },
        grid: [
            [null, null, 1, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, 0, null, 0, null],
            [null, null, 0, 0, null, null],
            [0, null, null, 0, 0, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_10",
        name: "P6_3_10",
        description: "6x6 Medium #10",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=10",
        puzzle_number: 10,
        date_saved: "2025-04-23 15:32:05",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 33.6,
            logic_iterations_score: 0.8,
            backtracking_score: 6,
            size_score: 5,
            percent_filled_by_logic: 16
        },
        solver_metrics: {
            initial_empty: 25,
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
                tryFillCells: 0
            },
            time_taken: 0.0018939971923828
        },
        grid: [
            [null, null, 0, null, null, null],
            [1, null, 0, null, 0, null],
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [0, 1, null, null, 0, null],
            [1, null, null, null, null, 1]
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
        id: "P6_3_11",
        name: "P6_3_11",
        description: "6x6 Medium #11",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=11",
        puzzle_number: 11,
        date_saved: "2025-04-23 15:32:06",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 48.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 5,
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
            time_taken: 0.0011680126190186
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, null],
            [1, 1, null, null, 1, null],
            [null, null, null, null, null, null],
            [0, null, null, 0, null, null],
            [0, null, null, null, null, 0]
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
        id: "P6_3_12",
        name: "P6_3_12",
        description: "6x6 Hard #12",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=12",
        puzzle_number: 12,
        date_saved: "2025-04-23 15:32:08",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 35.6,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 11.1
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0032892227172852
        },
        grid: [
            [0, null, null, 1, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 1, 1, null, null, null],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_13",
        name: "P6_3_13",
        description: "6x6 Hard #13",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=13",
        puzzle_number: 13,
        date_saved: "2025-04-23 15:32:10",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 24.3,
            logic_iterations_score: 1.2,
            backtracking_score: 23.3,
            size_score: 5,
            percent_filled_by_logic: 39.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 20,
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
            time_taken: 0.0030579566955566
        },
        grid: [
            [null, null, 0, null, null, 1],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, 1, null, null, null, null],
            [0, null, 0, null, null, null]
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
        id: "P6_3_14",
        name: "P6_3_14",
        description: "6x6 Medium #14",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=14",
        puzzle_number: 14,
        date_saved: "2025-04-23 15:32:11",
        difficulty: "Medium",
        difficulty_score: 33,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 1
            },
            time_taken: 0.00082993507385254
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [null, 1, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, 0]
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
        id: "P6_3_15",
        name: "P6_3_15",
        description: "6x6 Hard #15",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=15",
        puzzle_number: 15,
        date_saved: "2025-04-23 15:32:13",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
                tryFillCells: 1
            },
            time_taken: 0.0032551288604736
        },
        grid: [
            [0, null, null, 1, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [null, 1, null, 0, 0, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_16",
        name: "P6_3_16",
        description: "6x6 Medium #16",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=16",
        puzzle_number: 16,
        date_saved: "2025-04-23 15:32:15",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 17.9,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 55.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 2,
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
            time_taken: 0.0010101795196533
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, 0, 0, null, null, null],
            [0, null, 0, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_17",
        name: "P6_3_17",
        description: "6x6 Easy #17",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=17",
        puzzle_number: 17,
        date_saved: "2025-04-23 15:32:17",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00039100646972656
        },
        grid: [
            [null, 0, null, null, 0, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [1, null, 1, null, null, 1],
            [null, null, null, 0, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_18",
        name: "P6_3_18",
        description: "6x6 Medium #18",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=18",
        puzzle_number: 18,
        date_saved: "2025-04-23 15:32:18",
        difficulty: "Medium",
        difficulty_score: 49,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 48.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0017521381378174
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, null, null, null, null, null],
            [0, null, 0, null, 1, null],
            [null, null, null, null, 1, null],
            [null, null, null, 0, null, null],
            [0, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_19",
        name: "P6_3_19",
        description: "6x6 Hard #19",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=19",
        puzzle_number: 19,
        date_saved: "2025-04-23 15:32:20",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 21.5,
            logic_iterations_score: 1.6,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 46.2
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 4,
            backtrack_iterations: 29,
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
            time_taken: 0.0036289691925049
        },
        grid: [
            [0, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, 1, null, null],
            [null, null, null, null, 0, 0],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_20",
        name: "P6_3_20",
        description: "6x6 Easy #20",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=20",
        puzzle_number: 20,
        date_saved: "2025-04-23 15:32:21",
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
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00033307075500488
        },
        grid: [
            [1, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [1, null, 1, 1, null, null],
            [null, null, null, 1, null, 0],
            [1, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_21",
        name: "P6_3_21",
        description: "6x6 Hard #21",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=21",
        puzzle_number: 21,
        date_saved: "2025-04-23 15:32:23",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 1.2,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 27.6
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 55,
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
            time_taken: 0.0054359436035156
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, 1],
            [null, null, null, 0, null, null],
            [null, 1, null, 0, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_22",
        name: "P6_3_22",
        description: "6x6 Medium #22",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=22",
        puzzle_number: 22,
        date_saved: "2025-04-23 15:32:24",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 35.6,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 11.1
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0018601417541504
        },
        grid: [
            [null, 1, 1, null, null, null],
            [null, null, null, 0, null, 1],
            [null, 0, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_23",
        name: "P6_3_23",
        description: "6x6 Hard #23",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=23",
        puzzle_number: 23,
        date_saved: "2025-04-23 15:32:25",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 0.4,
            backtracking_score: 26.8,
            size_score: 5,
            percent_filled_by_logic: 0
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 1,
            backtrack_iterations: 527,
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
            time_taken: 0.069488048553467
        },
        grid: [
            [null, 0, 1, null, null, 0],
            [1, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, 0],
            [null, null, null, null, 1, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_24",
        name: "P6_3_24",
        description: "6x6 Medium #24",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=24",
        puzzle_number: 24,
        date_saved: "2025-04-23 15:32:27",
        difficulty: "Medium",
        difficulty_score: 38,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
            time_taken: 0.0013201236724854
        },
        grid: [
            [0, null, 0, 1, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 1, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_25",
        name: "P6_3_25",
        description: "6x6 Hard #25",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=25",
        puzzle_number: 25,
        date_saved: "2025-04-23 15:32:28",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 22.9,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 14,
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
            time_taken: 0.0033218860626221
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [1, 1, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
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
        id: "P6_3_26",
        name: "P6_3_26",
        description: "6x6 Medium #26",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=26",
        puzzle_number: 26,
        date_saved: "2025-04-23 15:32:30",
        difficulty: "Medium",
        difficulty_score: 35,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0018270015716553
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, null, 1, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_27",
        name: "P6_3_27",
        description: "6x6 Hard #27",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=27",
        puzzle_number: 27,
        date_saved: "2025-04-23 15:32:31",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23.2,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 18,
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
            time_taken: 0.0034849643707275
        },
        grid: [
            [0, null, null, 1, null, 0],
            [0, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0]
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
        id: "P6_3_28",
        name: "P6_3_28",
        description: "6x6 Hard #28",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=28",
        puzzle_number: 28,
        date_saved: "2025-04-23 15:32:32",
        difficulty: "Hard",
        difficulty_score: 71,
        difficulty_factors: {
            logic_fill_score: 38.6,
            logic_iterations_score: 0.8,
            backtracking_score: 26.2,
            size_score: 5,
            percent_filled_by_logic: 3.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 315,
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
            time_taken: 0.025512933731079
        },
        grid: [
            [0, 0, null, null, null, null],
            [1, null, 0, null, null, 1],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null]
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
        id: "P6_3_29",
        name: "P6_3_29",
        description: "6x6 Medium #29",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=29",
        puzzle_number: 29,
        date_saved: "2025-04-23 15:32:34",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 0
            },
            time_taken: 0.0011649131774902
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, null, null, null, null, 1],
            [null, null, 0, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_30",
        name: "P6_3_30",
        description: "6x6 Hard #30",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=30",
        puzzle_number: 30,
        date_saved: "2025-04-23 15:32:35",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 34.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 5,
            percent_filled_by_logic: 14.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 216,
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
            time_taken: 0.017690896987915
        },
        grid: [
            [null, null, null, null, null, 0],
            [0, null, null, null, null, 0],
            [null, null, null, 0, null, null],
            [null, null, 1, null, null, 1],
            [null, null, null, null, 0, null],
            [1, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_31",
        name: "P6_3_31",
        description: "6x6 Medium #31",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=31",
        puzzle_number: 31,
        date_saved: "2025-04-23 15:32:37",
        difficulty: "Medium",
        difficulty_score: 34,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 5,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.001223087310791
        },
        grid: [
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, 0, null],
            [null, 0, null, 0, null, 1],
            [null, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_32",
        name: "P6_3_32",
        description: "6x6 Hard #32",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=32",
        puzzle_number: 32,
        date_saved: "2025-04-23 15:32:38",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 40,
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
            time_taken: 0.0062990188598633
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, null, null, null, null, 0],
            [null, 0, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 1, 1, null, null]
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
        id: "P6_3_33",
        name: "P6_3_33",
        description: "6x6 Hard #33",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=33",
        puzzle_number: 33,
        date_saved: "2025-04-23 15:32:39",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.7,
            size_score: 5,
            percent_filled_by_logic: 18.5
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 77,
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
            time_taken: 0.0069169998168945
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_34",
        name: "P6_3_34",
        description: "6x6 Hard #34",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=34",
        puzzle_number: 34,
        date_saved: "2025-04-23 15:32:41",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 17,
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
            time_taken: 0.0025451183319092
        },
        grid: [
            [0, null, 1, null, null, null],
            [null, null, null, null, null, 1],
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_35",
        name: "P6_3_35",
        description: "6x6 Medium #35",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=35",
        puzzle_number: 35,
        date_saved: "2025-04-23 15:32:42",
        difficulty: "Medium",
        difficulty_score: 26,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 60.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.0010619163513184
        },
        grid: [
            [1, null, null, 1, 1, null],
            [null, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_36",
        name: "P6_3_36",
        description: "6x6 Hard #36",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=36",
        puzzle_number: 36,
        date_saved: "2025-04-23 15:32:44",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 22,
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
            time_taken: 0.0025858879089355
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 1, null, 1, null],
            [null, null, null, 0, null, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_37",
        name: "P6_3_37",
        description: "6x6 Easy #37",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=37",
        puzzle_number: 37,
        date_saved: "2025-04-23 15:32:45",
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
            time_taken: 0.0006248950958252
        },
        grid: [
            [1, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, 1, 1, null, null],
            [null, null, null, 1, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_38",
        name: "P6_3_38",
        description: "6x6 Medium #38",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=38",
        puzzle_number: 38,
        date_saved: "2025-04-23 15:32:46",
        difficulty: "Medium",
        difficulty_score: 26,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 59.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0012478828430176
        },
        grid: [
            [null, null, null, 1, 1, null],
            [null, 0, null, null, 1, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 1, null, null, 0],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_39",
        name: "P6_3_39",
        description: "6x6 Hard #39",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=39",
        puzzle_number: 39,
        date_saved: "2025-04-23 15:32:48",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 38.5,
            logic_iterations_score: 0.8,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 3.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 28,
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
            time_taken: 0.003648042678833
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, 0, null, 1],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_40",
        name: "P6_3_40",
        description: "6x6 Hard #40",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=40",
        puzzle_number: 40,
        date_saved: "2025-04-23 15:32:49",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.3,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 19,
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
            time_taken: 0.0024731159210205
        },
        grid: [
            [null, 1, 0, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, 0, null],
            [null, null, null, 1, 0, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_41",
        name: "P6_3_41",
        description: "6x6 Hard #41",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=41",
        puzzle_number: 41,
        date_saved: "2025-04-23 15:32:50",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 12,
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
            time_taken: 0.0023269653320312
        },
        grid: [
            [1, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_42",
        name: "P6_3_42",
        description: "6x6 Hard #42",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=42",
        puzzle_number: 42,
        date_saved: "2025-04-23 15:32:52",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 22,
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
            time_taken: 0.0048530101776123
        },
        grid: [
            [null, null, null, null, 1, null],
            [1, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [1, 1, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, 1, 1, null, null, null]
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
        id: "P6_3_43",
        name: "P6_3_43",
        description: "6x6 Easy #43",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=43",
        puzzle_number: 43,
        date_saved: "2025-04-23 15:32:53",
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
                completeRowsColumns: 0,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00091910362243652
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, null, null, 1, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, 0, null],
            [null, null, null, null, 0, null],
            [0, null, 1, null, null, null]
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
        id: "P6_3_44",
        name: "P6_3_44",
        description: "6x6 Medium #44",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=44",
        puzzle_number: 44,
        date_saved: "2025-04-23 15:32:55",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.00087380409240723
        },
        grid: [
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, null],
            [1, null, null, 0, null, null],
            [null, 1, null, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_45",
        name: "P6_3_45",
        description: "6x6 Easy #45",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=45",
        puzzle_number: 45,
        date_saved: "2025-04-23 15:32:56",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 13.3,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 66.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
                tryFillCells: 2
            },
            time_taken: 0.00094699859619141
        },
        grid: [
            [1, null, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, null, null, 1],
            [null, 0, null, null, 0, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_46",
        name: "P6_3_46",
        description: "6x6 Easy #46",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=46",
        puzzle_number: 46,
        date_saved: "2025-04-23 15:32:57",
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
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00091791152954102
        },
        grid: [
            [null, null, 1, 1, null, null],
            [0, null, null, null, 0, null],
            [null, 1, null, 1, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_47",
        name: "P6_3_47",
        description: "6x6 Easy #47",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=47",
        puzzle_number: 47,
        date_saved: "2025-04-23 15:32:59",
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
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00067496299743652
        },
        grid: [
            [1, null, null, null, null, 1],
            [null, null, 0, 1, null, null],
            [1, null, null, null, null, 0],
            [null, 0, null, null, null, 0],
            [null, null, 1, null, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_48",
        name: "P6_3_48",
        description: "6x6 Medium #48",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=48",
        puzzle_number: 48,
        date_saved: "2025-04-23 15:33:00",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 17.8,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 55.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 4,
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
                tryFillCells: 3
            },
            time_taken: 0.0012660026550293
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_49",
        name: "P6_3_49",
        description: "6x6 Easy #49",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=49",
        puzzle_number: 49,
        date_saved: "2025-04-23 15:33:02",
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
                fillSandwiches: 3,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0011980533599854
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, null, 0, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_50",
        name: "P6_3_50",
        description: "6x6 Hard #50",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=50",
        puzzle_number: 50,
        date_saved: "2025-04-23 15:33:03",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 8,
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
            time_taken: 0.0017950534820557
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, 1, null],
            [null, 1, null, 0, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 0, null, 0]
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
        id: "P6_3_51",
        name: "P6_3_51",
        description: "6x6 Hard #51",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=51",
        puzzle_number: 51,
        date_saved: "2025-04-23 15:33:05",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 1.2,
            backtracking_score: 22.9,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 14,
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
            time_taken: 0.0030539035797119
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null],
            [null, 0, null, 1, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_52",
        name: "P6_3_52",
        description: "6x6 Medium #52",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=52",
        puzzle_number: 52,
        date_saved: "2025-04-23 15:33:06",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 4,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013837814331055
        },
        grid: [
            [null, null, 0, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, 0, 1, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, 0, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_53",
        name: "P6_3_53",
        description: "6x6 Medium #53",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=53",
        puzzle_number: 53,
        date_saved: "2025-04-23 15:33:07",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 17.9,
            logic_iterations_score: 1.6,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 55.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 4,
            backtrack_iterations: 9,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.002284049987793
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, 0, null, null],
            [null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_54",
        name: "P6_3_54",
        description: "6x6 Medium #54",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=54",
        puzzle_number: 54,
        date_saved: "2025-04-23 15:33:09",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 1.6,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
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
            time_taken: 0.0014650821685791
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 1, 1],
            [null, 1, null, null, null, null],
            [1, 1, null, 0, null, null],
            [1, null, null, null, null, 1],
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
        id: "P6_3_55",
        name: "P6_3_55",
        description: "6x6 Hard #55",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=55",
        puzzle_number: 55,
        date_saved: "2025-04-23 15:33:10",
        difficulty: "Hard",
        difficulty_score: 68,
        difficulty_factors: {
            logic_fill_score: 37,
            logic_iterations_score: 0.8,
            backtracking_score: 25,
            size_score: 5,
            percent_filled_by_logic: 7.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 95,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.015429019927979
        },
        grid: [
            [null, null, 1, null, 1, null],
            [null, 0, null, null, null, 0],
            [1, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_56",
        name: "P6_3_56",
        description: "6x6 Medium #56",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=56",
        puzzle_number: 56,
        date_saved: "2025-04-23 15:33:11",
        difficulty: "Medium",
        difficulty_score: 49,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 22.9,
            size_score: 5,
            percent_filled_by_logic: 50
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 13,
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
            time_taken: 0.0020408630371094
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 0, 1, null, null],
            [0, null, null, null, 0, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, 1, null, 1]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_57",
        name: "P6_3_57",
        description: "6x6 Hard #57",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=57",
        puzzle_number: 57,
        date_saved: "2025-04-23 15:33:13",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 44.4
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
                preventTrio: 1,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.002669095993042
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, null, null, 0, null, null],
            [null, 0, 0, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, 0]
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
        id: "P6_3_58",
        name: "P6_3_58",
        description: "6x6 Medium #58",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=58",
        puzzle_number: 58,
        date_saved: "2025-04-23 15:33:14",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 21.5,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 46.2
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0018179416656494
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, 1, null, 1, null],
            [0, null, null, 0, null, null],
            [null, null, 1, null, null, 0],
            [null, 1, 0, null, null, null],
            [0, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_59",
        name: "P6_3_59",
        description: "6x6 Medium #59",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=59",
        puzzle_number: 59,
        date_saved: "2025-04-23 15:33:16",
        difficulty: "Medium",
        difficulty_score: 34,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
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
                tryFillCells: 0
            },
            time_taken: 0.00079083442687988
        },
        grid: [
            [0, null, null, null, 0, null],
            [null, null, null, null, 0, null],
            [null, 0, 1, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [null, 1, 1, null, null, null]
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
        id: "P6_3_60",
        name: "P6_3_60",
        description: "6x6 Medium #60",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=60",
        puzzle_number: 60,
        date_saved: "2025-04-23 15:33:17",
        difficulty: "Medium",
        difficulty_score: 38,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 5,
            percent_filled_by_logic: 34.5
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 2,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0027279853820801
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [1, null, null, 0, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_61",
        name: "P6_3_61",
        description: "6x6 Hard #61",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=61",
        puzzle_number: 61,
        date_saved: "2025-04-23 15:33:19",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.6,
            size_score: 5,
            percent_filled_by_logic: 37
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
                tryFillCells: 1
            },
            time_taken: 0.0032510757446289
        },
        grid: [
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, null],
            [0, null, 1, null, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 1, 1, null, null],
            [null, null, null, null, 0, null]
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
        id: "P6_3_62",
        name: "P6_3_62",
        description: "6x6 Hard #62",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=62",
        puzzle_number: 62,
        date_saved: "2025-04-23 15:33:20",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 39,
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
            time_taken: 0.0044910907745361
        },
        grid: [
            [1, null, null, null, 0, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, 1],
            [null, 0, null, null, null, null]
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
        id: "P6_3_63",
        name: "P6_3_63",
        description: "6x6 Medium #63",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=63",
        puzzle_number: 63,
        date_saved: "2025-04-23 15:33:21",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 0
            },
            time_taken: 0.0019359588623047
        },
        grid: [
            [null, null, null, 0, null, 1],
            [null, null, 1, null, null, 1],
            [null, null, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_64",
        name: "P6_3_64",
        description: "6x6 Easy #64",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=64",
        puzzle_number: 64,
        date_saved: "2025-04-23 15:33:23",
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
            time_taken: 0.00060296058654785
        },
        grid: [
            [null, null, 1, 1, null, 1],
            [0, null, null, 1, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_65",
        name: "P6_3_65",
        description: "6x6 Easy #65",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=65",
        puzzle_number: 65,
        date_saved: "2025-04-23 15:33:24",
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
            time_taken: 0.00022506713867188
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, 1, null, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, 1, null, null],
            [0, 0, null, null, 0, null]
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
        id: "P6_3_66",
        name: "P6_3_66",
        description: "6x6 Easy #66",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=66",
        puzzle_number: 66,
        date_saved: "2025-04-23 15:33:25",
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
                fillSandwiches: 2,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00067687034606934
        },
        grid: [
            [null, 0, null, null, 1, 1],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, 1, 1, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_67",
        name: "P6_3_67",
        description: "6x6 Medium #67",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=67",
        puzzle_number: 67,
        date_saved: "2025-04-23 15:33:27",
        difficulty: "Medium",
        difficulty_score: 35,
        difficulty_factors: {
            logic_fill_score: 24.6,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 38.5
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
            time_taken: 0.0010919570922852
        },
        grid: [
            [0, null, null, null, 0, null],
            [null, 0, null, 0, null, null],
            [null, 0, null, null, 1, null],
            [null, null, 1, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_68",
        name: "P6_3_68",
        description: "6x6 Medium #68",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=68",
        puzzle_number: 68,
        date_saved: "2025-04-23 15:33:28",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 48.3
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 25,
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
            time_taken: 0.0027029514312744
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, 1, 1, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
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
        id: "P6_3_69",
        name: "P6_3_69",
        description: "6x6 Medium #69",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=69",
        puzzle_number: 69,
        date_saved: "2025-04-23 15:33:30",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 0.8,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 9,
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
            time_taken: 0.0016050338745117
        },
        grid: [
            [0, 0, null, null, null, null],
            [0, null, 0, null, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_70",
        name: "P6_3_70",
        description: "6x6 Medium #70",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=70",
        puzzle_number: 70,
        date_saved: "2025-04-23 15:33:31",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0010049343109131
        },
        grid: [
            [0, null, null, 0, 0, null],
            [0, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 1, null, null, null, null]
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
        id: "P6_3_71",
        name: "P6_3_71",
        description: "6x6 Hard #71",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=71",
        puzzle_number: 71,
        date_saved: "2025-04-23 15:33:32",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 37.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 5,
            percent_filled_by_logic: 7.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 200,
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
            time_taken: 0.026489973068237
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, 0, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, null, null, null, null],
            [1, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_72",
        name: "P6_3_72",
        description: "6x6 Hard #72",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=72",
        puzzle_number: 72,
        date_saved: "2025-04-23 15:33:34",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0018229484558105
        },
        grid: [
            [1, 1, null, null, 0, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 0],
            [null, 1, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_73",
        name: "P6_3_73",
        description: "6x6 Hard #73",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=73",
        puzzle_number: 73,
        date_saved: "2025-04-23 15:33:35",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 79,
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
            time_taken: 0.0066821575164795
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [0, null, null, 1, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null]
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
        id: "P6_3_74",
        name: "P6_3_74",
        description: "6x6 Hard #74",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=74",
        puzzle_number: 74,
        date_saved: "2025-04-23 15:33:37",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.4,
            logic_iterations_score: 0.8,
            backtracking_score: 25.3,
            size_score: 5,
            percent_filled_by_logic: 11.5
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 128,
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
            time_taken: 0.01018214225769
        },
        grid: [
            [null, 0, null, 0, null, 0],
            [null, 1, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [1, null, 0, null, null, 1],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_75",
        name: "P6_3_75",
        description: "6x6 Medium #75",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=75",
        puzzle_number: 75,
        date_saved: "2025-04-23 15:33:38",
        difficulty: "Medium",
        difficulty_score: 41,
        difficulty_factors: {
            logic_fill_score: 30.4,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 24
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.00085806846618652
        },
        grid: [
            [1, null, null, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 0],
            [1, null, 0, null, 1, null],
            [null, 0, null, 0, null, null],
            [0, null, null, null, null, null]
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
        id: "P6_3_76",
        name: "P6_3_76",
        description: "6x6 Medium #76",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=76",
        puzzle_number: 76,
        date_saved: "2025-04-23 15:33:39",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.00083088874816895
        },
        grid: [
            [1, 0, null, 0, null, null],
            [null, 0, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, null]
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
        id: "P6_3_77",
        name: "P6_3_77",
        description: "6x6 Easy #77",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=77",
        puzzle_number: 77,
        date_saved: "2025-04-23 15:33:41",
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
                completeRowsColumns: 3,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0011348724365234
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, 0, null, 0],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null]
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
        id: "P6_3_78",
        name: "P6_3_78",
        description: "6x6 Medium #78",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=78",
        puzzle_number: 78,
        date_saved: "2025-04-23 15:33:42",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 1.2,
            backtracking_score: 6,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 7,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 1,
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.001629114151001
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [null, 0, null, null, null, null],
            [1, null, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, 0, null, null, 0, 0]
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
        id: "P6_3_79",
        name: "P6_3_79",
        description: "6x6 Hard #79",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=79",
        puzzle_number: 79,
        date_saved: "2025-04-23 15:33:44",
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
            time_taken: 0.0029659271240234
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, 0, 0, null, 1, null],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [null, 1, null, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_80",
        name: "P6_3_80",
        description: "6x6 Hard #80",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=80",
        puzzle_number: 80,
        date_saved: "2025-04-23 15:33:45",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 29.6
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
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.004302978515625
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, null, null, 0, null],
            [null, 0, null, null, null, 0],
            [null, null, 0, 0, null, 0],
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_81",
        name: "P6_3_81",
        description: "6x6 Easy #81",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=81",
        puzzle_number: 81,
        date_saved: "2025-04-23 15:33:46",
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
                fillSandwiches: 0,
                checkBalancedPairs: 2,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.00061416625976562
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, null, 0, 0, null, 1],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, 0, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_82",
        name: "P6_3_82",
        description: "6x6 Medium #82",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=82",
        puzzle_number: 82,
        date_saved: "2025-04-23 15:33:48",
        difficulty: "Medium",
        difficulty_score: 37,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 1.6,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
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
                tryFillCells: 2
            },
            time_taken: 0.0012621879577637
        },
        grid: [
            [null, 0, null, 1, 1, null],
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_83",
        name: "P6_3_83",
        description: "6x6 Hard #83",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=83",
        puzzle_number: 83,
        date_saved: "2025-04-23 15:33:49",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 38.5,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 3.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 61,
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
            time_taken: 0.0054872035980225
        },
        grid: [
            [null, null, null, 0, null, 1],
            [0, null, null, null, null, 1],
            [null, 1, null, null, 1, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 0, null],
            [0, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_84",
        name: "P6_3_84",
        description: "6x6 Easy #84",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=84",
        puzzle_number: 84,
        date_saved: "2025-04-23 15:33:51",
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00072097778320312
        },
        grid: [
            [0, 0, null, null, 0, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, 1, 0, null, 0, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_85",
        name: "P6_3_85",
        description: "6x6 Medium #85",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=85",
        puzzle_number: 85,
        date_saved: "2025-04-23 15:33:52",
        difficulty: "Medium",
        difficulty_score: 29,
        difficulty_factors: {
            logic_fill_score: 18.6,
            logic_iterations_score: 1.2,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 53.6
        },
        solver_metrics: {
            initial_empty: 28,
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
            time_taken: 0.0011799335479736
        },
        grid: [
            [1, null, null, null, null, 1],
            [null, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [null, 1, null, 1, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_86",
        name: "P6_3_86",
        description: "6x6 Hard #86",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=86",
        puzzle_number: 86,
        date_saved: "2025-04-23 15:33:53",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 1.2,
            backtracking_score: 24.1,
            size_score: 5,
            percent_filled_by_logic: 30.8
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 43,
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
            time_taken: 0.0074570178985596
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, 0, null, 1, 0, null],
            [null, null, null, null, 0, null],
            [null, 0, null, 0, null, null],
            [0, null, null, null, null, 0],
            [0, null, null, null, null, null]
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
        id: "P6_3_87",
        name: "P6_3_87",
        description: "6x6 Hard #87",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=87",
        puzzle_number: 87,
        date_saved: "2025-04-23 15:33:55",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 44.4
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
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0026810169219971
        },
        grid: [
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [0, null, null, null, 0, null],
            [null, 1, 0, null, null, 1],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, null]
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
        id: "P6_3_88",
        name: "P6_3_88",
        description: "6x6 Hard #88",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=88",
        puzzle_number: 88,
        date_saved: "2025-04-23 15:33:56",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 29,
            logic_iterations_score: 0.8,
            backtracking_score: 25.8,
            size_score: 5,
            percent_filled_by_logic: 27.6
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 203,
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
            time_taken: 0.016681909561157
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, 0, null, null, 1],
            [null, null, 0, null, null, null],
            [null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_89",
        name: "P6_3_89",
        description: "6x6 Medium #89",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=89",
        puzzle_number: 89,
        date_saved: "2025-04-23 15:33:58",
        difficulty: "Medium",
        difficulty_score: 47,
        difficulty_factors: {
            logic_fill_score: 18.6,
            logic_iterations_score: 1.2,
            backtracking_score: 21.7,
            size_score: 5,
            percent_filled_by_logic: 53.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 4,
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
            time_taken: 0.0014700889587402
        },
        grid: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 1, null, null, null],
            [0, null, 1, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_90",
        name: "P6_3_90",
        description: "6x6 Medium #90",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=90",
        puzzle_number: 90,
        date_saved: "2025-04-23 15:33:59",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.2,
            backtracking_score: 21.7,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 4,
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
            time_taken: 0.0015368461608887
        },
        grid: [
            [1, null, 0, null, 1, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_91",
        name: "P6_3_91",
        description: "6x6 Medium #91",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=91",
        puzzle_number: 91,
        date_saved: "2025-04-23 15:34:00",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 48.1
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
                preventTrio: 0,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0027649402618408
        },
        grid: [
            [null, null, 0, null, 0, 0],
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, 1, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_92",
        name: "P6_3_92",
        description: "6x6 Hard #92",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=92",
        puzzle_number: 92,
        date_saved: "2025-04-23 15:34:02",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 30.3,
            logic_iterations_score: 0.8,
            backtracking_score: 25.9,
            size_score: 5,
            percent_filled_by_logic: 24.1
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 218,
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
            time_taken: 0.015944004058838
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, 0, null, null, null],
            [0, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_93",
        name: "P6_3_93",
        description: "6x6 Easy #93",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=93",
        puzzle_number: 93,
        date_saved: "2025-04-23 15:34:03",
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
            time_taken: 0.0014939308166504
        },
        grid: [
            [1, null, null, 1, null, null],
            [1, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0],
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
        id: "P6_3_94",
        name: "P6_3_94",
        description: "6x6 Easy #94",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=94",
        puzzle_number: 94,
        date_saved: "2025-04-23 15:34:05",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 59.3
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
            time_taken: 0.0005800724029541
        },
        grid: [
            [null, null, 0, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, 0, null, 0, null],
            [1, null, null, null, null, null],
            [null, 0, null, 0, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_95",
        name: "P6_3_95",
        description: "6x6 Hard #95",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=95",
        puzzle_number: 95,
        date_saved: "2025-04-23 15:34:06",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 21.5,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.0010991096496582
        },
        grid: [
            [null, 0, null, null, 0, null],
            [1, 0, null, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, 1, null, null, null]
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
        id: "P6_3_96",
        name: "P6_3_96",
        description: "6x6 Medium #96",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=96",
        puzzle_number: 96,
        date_saved: "2025-04-23 15:34:07",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 21.4,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 46.4
        },
        solver_metrics: {
            initial_empty: 28,
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
            time_taken: 0.0010960102081299
        },
        grid: [
            [1, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [null, null, null, null, 0, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 0, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_97",
        name: "P6_3_97",
        description: "6x6 Hard #97",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=97",
        puzzle_number: 97,
        date_saved: "2025-04-23 15:34:09",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 27.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 30.8
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0020480155944824
        },
        grid: [
            [1, null, null, 1, 1, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [1, null, null, null, 1, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_98",
        name: "P6_3_98",
        description: "6x6 Easy #98",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=98",
        puzzle_number: 98,
        date_saved: "2025-04-23 15:34:10",
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
            time_taken: 0.00050210952758789
        },
        grid: [
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [1, null, null, 0, null, 0],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_99",
        name: "P6_3_99",
        description: "6x6 Easy #99",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=99",
        puzzle_number: 99,
        date_saved: "2025-04-23 15:34:11",
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
            time_taken: 0.00076603889465332
        },
        grid: [
            [null, null, 0, null, null, 0],
            [null, null, null, 1, null, null],
            [0, 0, null, null, null, null],
            [null, 0, null, null, 1, null],
            [null, null, null, null, 1, 0],
            [1, null, null, null, null, null]
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
        id: "P6_3_100",
        name: "P6_3_100",
        description: "6x6 Easy #100",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=100",
        puzzle_number: 100,
        date_saved: "2025-04-23 15:34:13",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00069093704223633
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, 1, null, null, 1],
            [null, 0, null, null, null, null],
            [0, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_101",
        name: "P6_3_101",
        description: "6x6 Hard #101",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=101",
        puzzle_number: 101,
        date_saved: "2025-04-23 15:34:14",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 0.8,
            backtracking_score: 22.1,
            size_score: 5,
            percent_filled_by_logic: 35.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 6,
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
            time_taken: 0.0014050006866455
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, null, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, 0],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_102",
        name: "P6_3_102",
        description: "6x6 Hard #102",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=102",
        puzzle_number: 102,
        date_saved: "2025-04-23 15:34:16",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.9,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 92,
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
            time_taken: 0.0073840618133545
        },
        grid: [
            [null, null, 1, null, 1, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, null, 1, 1]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_103",
        name: "P6_3_103",
        description: "6x6 Easy #103",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=103",
        puzzle_number: 103,
        date_saved: "2025-04-23 15:34:17",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 15.2,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 62.1
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 3,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013179779052734
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_104",
        name: "P6_3_104",
        description: "6x6 Hard #104",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=104",
        puzzle_number: 104,
        date_saved: "2025-04-23 15:34:18",
        difficulty: "Hard",
        difficulty_score: 72,
        difficulty_factors: {
            logic_fill_score: 40,
            logic_iterations_score: 0.4,
            backtracking_score: 26.2,
            size_score: 5,
            percent_filled_by_logic: 0
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 1,
            backtrack_iterations: 300,
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
            time_taken: 0.022668838500977
        },
        grid: [
            [0, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, 1, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_105",
        name: "P6_3_105",
        description: "6x6 Medium #105",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=105",
        puzzle_number: 105,
        date_saved: "2025-04-23 15:34:20",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 27.2,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 32
        },
        solver_metrics: {
            initial_empty: 25,
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
                tryFillCells: 0
            },
            time_taken: 0.00076103210449219
        },
        grid: [
            [1, null, null, 1, 1, null],
            [null, null, 0, null, null, 1],
            [0, null, null, null, null, 1],
            [null, null, null, 0, null, null],
            [null, null, 0, null, null, null],
            [null, 0, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_106",
        name: "P6_3_106",
        description: "6x6 Hard #106",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=106",
        puzzle_number: 106,
        date_saved: "2025-04-23 15:34:21",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 58,
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
            time_taken: 0.0089850425720215
        },
        grid: [
            [null, null, null, 1, null, null],
            [null, null, null, null, 0, null],
            [null, null, 0, 0, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [null, null, 1, 1, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_107",
        name: "P6_3_107",
        description: "6x6 Medium #107",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=107",
        puzzle_number: 107,
        date_saved: "2025-04-23 15:34:22",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 0.8,
            backtracking_score: 22.6,
            size_score: 5,
            percent_filled_by_logic: 50
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0023119449615479
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, 1, 0, null, 1],
            [null, null, 1, null, null, null],
            [0, null, null, null, null, null],
            [null, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_108",
        name: "P6_3_108",
        description: "6x6 Hard #108",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=108",
        puzzle_number: 108,
        date_saved: "2025-04-23 15:34:24",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 1.2,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 12,
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
            time_taken: 0.0022449493408203
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, 0, null, null, 0, null],
            [null, null, null, 0, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 1, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_109",
        name: "P6_3_109",
        description: "6x6 Medium #109",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=109",
        puzzle_number: 109,
        date_saved: "2025-04-23 15:34:25",
        difficulty: "Medium",
        difficulty_score: 30,
        difficulty_factors: {
            logic_fill_score: 20,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 50
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0012118816375732
        },
        grid: [
            [null, null, null, 1, null, 1],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, 0, null],
            [null, null, 1, null, 0, null],
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
        id: "P6_3_110",
        name: "P6_3_110",
        description: "6x6 Easy #110",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=110",
        puzzle_number: 110,
        date_saved: "2025-04-23 15:34:27",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 60.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 2,
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
            time_taken: 0.0013120174407959
        },
        grid: [
            [null, null, 1, 1, null, null],
            [null, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, 1, 1, null, null, null],
            [null, null, null, null, 0, 0],
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
        id: "P6_3_111",
        name: "P6_3_111",
        description: "6x6 Hard #111",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=111",
        puzzle_number: 111,
        date_saved: "2025-04-23 15:34:28",
        difficulty: "Hard",
        difficulty_score: 62,
        difficulty_factors: {
            logic_fill_score: 31.4,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 21.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 61,
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
            time_taken: 0.005530834197998
        },
        grid: [
            [null, null, 1, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_112",
        name: "P6_3_112",
        description: "6x6 Easy #112",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=112",
        puzzle_number: 112,
        date_saved: "2025-04-23 15:34:29",
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
                preventTrio: 1,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00060296058654785
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, null, null, 1],
            [0, null, 1, null, null, null],
            [null, 1, 1, null, null, 1],
            [null, null, null, null, null, null],
            [0, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_113",
        name: "P6_3_113",
        description: "6x6 Medium #113",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=113",
        puzzle_number: 113,
        date_saved: "2025-04-23 15:34:31",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 24.6,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 38.5
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
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00083494186401367
        },
        grid: [
            [1, null, 0, null, 1, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_114",
        name: "P6_3_114",
        description: "6x6 Hard #114",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=114",
        puzzle_number: 114,
        date_saved: "2025-04-23 15:34:32",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 12,
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
            time_taken: 0.0018959045410156
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 0, null, null, 0, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, 0, 0, null, null, null]
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
        id: "P6_3_115",
        name: "P6_3_115",
        description: "6x6 Medium #115",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=115",
        puzzle_number: 115,
        date_saved: "2025-04-23 15:34:34",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 33.3
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
            time_taken: 0.00071215629577637
        },
        grid: [
            [1, null, null, 0, 0, null],
            [1, null, null, null, null, 1],
            [null, null, 1, null, null, null],
            [null, 1, null, null, null, null],
            [0, null, null, 0, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_116",
        name: "P6_3_116",
        description: "6x6 Medium #116",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=116",
        puzzle_number: 116,
        date_saved: "2025-04-23 15:34:35",
        difficulty: "Medium",
        difficulty_score: 32,
        difficulty_factors: {
            logic_fill_score: 21.4,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 46.4
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0011730194091797
        },
        grid: [
            [null, null, null, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, 0, 0, null, null, 0],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_117",
        name: "P6_3_117",
        description: "6x6 Hard #117",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=117",
        puzzle_number: 117,
        date_saved: "2025-04-23 15:34:36",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 23.7,
            logic_iterations_score: 0.8,
            backtracking_score: 21.9,
            size_score: 5,
            percent_filled_by_logic: 40.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.0013060569763184
        },
        grid: [
            [null, 0, null, null, 1, null],
            [null, null, null, null, 1, null],
            [null, 1, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, 0, null],
            [1, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_118",
        name: "P6_3_118",
        description: "6x6 Hard #118",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=118",
        puzzle_number: 118,
        date_saved: "2025-04-23 15:34:38",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 25,
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
            time_taken: 0.00313401222229
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, 1, 0],
            [0, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_119",
        name: "P6_3_119",
        description: "6x6 Easy #119",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=119",
        puzzle_number: 119,
        date_saved: "2025-04-23 15:34:39",
        difficulty: "Easy",
        difficulty_score: 25,
        difficulty_factors: {
            logic_fill_score: 15.7,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 60.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00088715553283691
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, 0, 0, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 0]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_120",
        name: "P6_3_120",
        description: "6x6 Medium #120",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=120",
        puzzle_number: 120,
        date_saved: "2025-04-23 15:34:40",
        difficulty: "Medium",
        difficulty_score: 50,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 48.3
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 21,
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
            time_taken: 0.0022549629211426
        },
        grid: [
            [null, null, 0, null, 0, null],
            [null, null, 0, 0, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null]
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
        id: "P6_3_121",
        name: "P6_3_121",
        description: "6x6 Easy #121",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=121",
        puzzle_number: 121,
        date_saved: "2025-04-23 15:34:42",
        difficulty: "Easy",
        difficulty_score: 18,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00090479850769043
        },
        grid: [
            [null, null, 0, 0, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, 0],
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
        id: "P6_3_122",
        name: "P6_3_122",
        description: "6x6 Medium #122",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=122",
        puzzle_number: 122,
        date_saved: "2025-04-23 15:34:43",
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010128021240234
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [0, 0, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, 1, 1, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_123",
        name: "P6_3_123",
        description: "6x6 Hard #123",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=123",
        puzzle_number: 123,
        date_saved: "2025-04-23 15:34:45",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 29.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23.6,
            size_score: 5,
            percent_filled_by_logic: 26.9
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 27,
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
            time_taken: 0.0027592182159424
        },
        grid: [
            [0, 0, null, null, 0, null],
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, 0],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, 0, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_124",
        name: "P6_3_124",
        description: "6x6 Medium #124",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=124",
        puzzle_number: 124,
        date_saved: "2025-04-23 15:34:46",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 0.8,
            backtracking_score: 5.6,
            size_score: 5,
            percent_filled_by_logic: 18.5
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
                preventTrio: 1,
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.001147985458374
        },
        grid: [
            [0, 1, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, 0, 0, null, 0, null],
            [0, null, null, null, null, null],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_125",
        name: "P6_3_125",
        description: "6x6 Medium #125",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=125",
        puzzle_number: 125,
        date_saved: "2025-04-23 15:34:47",
        difficulty: "Medium",
        difficulty_score: 42,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 22.2
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
            time_taken: 0.001107931137085
        },
        grid: [
            [null, null, 1, null, null, 0],
            [null, 0, null, null, null, 0],
            [1, null, 0, null, null, null],
            [null, null, 0, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_126",
        name: "P6_3_126",
        description: "6x6 Hard #126",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=126",
        puzzle_number: 126,
        date_saved: "2025-04-23 15:34:49",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 32.9,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 17.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 60,
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
            time_taken: 0.0062940120697021
        },
        grid: [
            [null, 1, null, null, 0, null],
            [0, null, 1, null, null, 0],
            [null, null, 1, null, null, null],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_127",
        name: "P6_3_127",
        description: "6x6 Hard #127",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=127",
        puzzle_number: 127,
        date_saved: "2025-04-23 15:34:50",
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
            time_taken: 0.0073120594024658
        },
        grid: [
            [null, null, null, null, null, null],
            [null, 1, null, 0, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, 0, 0],
            [1, null, null, 0, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_128",
        name: "P6_3_128",
        description: "6x6 Medium #128",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=128",
        puzzle_number: 128,
        date_saved: "2025-04-23 15:34:51",
        difficulty: "Medium",
        difficulty_score: 48,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 6.7,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 1
            },
            time_taken: 0.0016889572143555
        },
        grid: [
            [0, null, null, 1, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_129",
        name: "P6_3_129",
        description: "6x6 Easy #129",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=129",
        puzzle_number: 129,
        date_saved: "2025-04-23 15:34:53",
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
            time_taken: 0.00048589706420898
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, 1],
            [null, 0, 1, null, 1, null],
            [1, null, null, null, null, 1],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_130",
        name: "P6_3_130",
        description: "6x6 Hard #130",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=130",
        puzzle_number: 130,
        date_saved: "2025-04-23 15:34:54",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 34.5,
            logic_iterations_score: 0.8,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 13.8
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 8,
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
            time_taken: 0.0020310878753662
        },
        grid: [
            [null, 0, 1, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 1],
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
        id: "P6_3_131",
        name: "P6_3_131",
        description: "6x6 Easy #131",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=131",
        puzzle_number: 131,
        date_saved: "2025-04-23 15:34:56",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 9.2,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 76.9
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00058507919311523
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [null, 0, 1, null, null, null],
            [0, null, null, null, 0, null],
            [1, null, 1, null, null, 1],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_132",
        name: "P6_3_132",
        description: "6x6 Medium #132",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=132",
        puzzle_number: 132,
        date_saved: "2025-04-23 15:34:57",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 25.7,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 35.7
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
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0013599395751953
        },
        grid: [
            [null, 1, null, 0, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, 0, 0, null, null],
            [null, 1, null, null, null, 1],
            [null, null, null, null, null, null]
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
        id: "P6_3_133",
        name: "P6_3_133",
        description: "6x6 Hard #133",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=133",
        puzzle_number: 133,
        date_saved: "2025-04-23 15:34:58",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.4,
            logic_iterations_score: 0.8,
            backtracking_score: 25.1,
            size_score: 5,
            percent_filled_by_logic: 11.5
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 109,
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
            time_taken: 0.015632152557373
        },
        grid: [
            [1, null, null, 1, null, null],
            [null, 0, null, null, 0, null],
            [0, null, null, null, null, 0],
            [null, null, 0, null, null, null],
            [1, 1, null, null, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_134",
        name: "P6_3_134",
        description: "6x6 Medium #134",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=134",
        puzzle_number: 134,
        date_saved: "2025-04-23 15:35:00",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 16.6,
            logic_iterations_score: 1.2,
            backtracking_score: 22.7,
            size_score: 5,
            percent_filled_by_logic: 58.6
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 11,
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
            time_taken: 0.0021030902862549
        },
        grid: [
            [null, null, null, null, 1, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, 1, null],
            [null, 1, null, null, null, null],
            [null, null, 0, null, null, null],
            [null, null, 0, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_135",
        name: "P6_3_135",
        description: "6x6 Hard #135",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=135",
        puzzle_number: 135,
        date_saved: "2025-04-23 15:35:01",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
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
                tryFillCells: 1
            },
            time_taken: 0.0026159286499023
        },
        grid: [
            [null, 0, null, null, 1, null],
            [1, null, null, null, 1, null],
            [1, 1, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_136",
        name: "P6_3_136",
        description: "6x6 Hard #136",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=136",
        puzzle_number: 136,
        date_saved: "2025-04-23 15:35:02",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 34.3,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 14.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 65,
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
            time_taken: 0.0095992088317871
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [1, null, null, null, null, 1],
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_137",
        name: "P6_3_137",
        description: "6x6 Hard #137",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=137",
        puzzle_number: 137,
        date_saved: "2025-04-23 15:35:04",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 21.5,
            logic_iterations_score: 1.2,
            backtracking_score: 22.8,
            size_score: 5,
            percent_filled_by_logic: 46.2
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.0033860206604004
        },
        grid: [
            [null, null, null, null, 0, null],
            [0, null, null, null, 0, null],
            [null, 1, null, 1, null, null],
            [null, null, null, null, 1, null],
            [1, null, null, 1, null, null],
            [null, null, 0, 0, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_138",
        name: "P6_3_138",
        description: "6x6 Medium #138",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=138",
        puzzle_number: 138,
        date_saved: "2025-04-23 15:35:05",
        difficulty: "Medium",
        difficulty_score: 39,
        difficulty_factors: {
            logic_fill_score: 11.9,
            logic_iterations_score: 1.2,
            backtracking_score: 21.2,
            size_score: 5,
            percent_filled_by_logic: 70.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
            time_taken: 0.00095510482788086
        },
        grid: [
            [null, 1, 1, null, null, null],
            [0, null, null, null, null, null],
            [null, null, 0, 0, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, 1, null]
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
        id: "P6_3_139",
        name: "P6_3_139",
        description: "6x6 Hard #139",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=139",
        puzzle_number: 139,
        date_saved: "2025-04-23 15:35:07",
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
            backtrack_iterations: 35,
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
            time_taken: 0.0060520172119141
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, 1, null],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 0, 0, null]
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
        id: "P6_3_140",
        name: "P6_3_140",
        description: "6x6 Hard #140",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=140",
        puzzle_number: 140,
        date_saved: "2025-04-23 15:35:08",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 38.6,
            logic_iterations_score: 0.8,
            backtracking_score: 26.1,
            size_score: 5,
            percent_filled_by_logic: 3.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 276,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.025445938110352
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, 0, null, null, null],
            [null, 0, null, null, null, null],
            [1, null, null, null, null, 1]
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
        id: "P6_3_141",
        name: "P6_3_141",
        description: "6x6 Hard #141",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=141",
        puzzle_number: 141,
        date_saved: "2025-04-23 15:35:09",
        difficulty: "Hard",
        difficulty_score: 64,
        difficulty_factors: {
            logic_fill_score: 33.1,
            logic_iterations_score: 0.8,
            backtracking_score: 25.6,
            size_score: 5,
            percent_filled_by_logic: 17.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 2,
            backtrack_iterations: 170,
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
            time_taken: 0.015589952468872
        },
        grid: [
            [null, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [0, 0, null, null, null, null],
            [null, 0, null, null, null, 0],
            [null, null, null, null, null, 0],
            [null, null, 0, null, null, null]
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
        id: "P6_3_142",
        name: "P6_3_142",
        description: "6x6 Medium #142",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=142",
        puzzle_number: 142,
        date_saved: "2025-04-23 15:35:11",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 17.8,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 55.6
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
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0010058879852295
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, 1, null, 0, null],
            [0, null, null, null, null, null],
            [null, 1, null, null, null, 0],
            [null, null, 1, null, null, 0],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_143",
        name: "P6_3_143",
        description: "6x6 Hard #143",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=143",
        puzzle_number: 143,
        date_saved: "2025-04-23 15:35:12",
        difficulty: "Hard",
        difficulty_score: 65,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 23.2,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 18,
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
            time_taken: 0.0031349658966064
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, null, null, null, 0],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 0, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_144",
        name: "P6_3_144",
        description: "6x6 Hard #144",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=144",
        puzzle_number: 144,
        date_saved: "2025-04-23 15:35:14",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.6,
            size_score: 5,
            percent_filled_by_logic: 11.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 68,
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
            time_taken: 0.010682106018066
        },
        grid: [
            [null, null, null, 0, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, 0, null],
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, 0, null, 0]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_145",
        name: "P6_3_145",
        description: "6x6 Hard #145",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=145",
        puzzle_number: 145,
        date_saved: "2025-04-23 15:35:15",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 31.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 22.2
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 32,
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
            time_taken: 0.0036609172821045
        },
        grid: [
            [1, null, null, null, null, null],
            [null, null, 1, null, null, 0],
            [1, 1, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 1, null, null, 1],
            [null, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_146",
        name: "P6_3_146",
        description: "6x6 Hard #146",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=146",
        puzzle_number: 146,
        date_saved: "2025-04-23 15:35:16",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.8,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 83,
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
            time_taken: 0.0069689750671387
        },
        grid: [
            [1, 1, null, null, null, null],
            [null, null, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [0, 0, null, null, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_147",
        name: "P6_3_147",
        description: "6x6 Hard #147",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=147",
        puzzle_number: 147,
        date_saved: "2025-04-23 15:35:18",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 1.2,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 34.6
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 3,
            backtrack_iterations: 24,
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
            time_taken: 0.0037910938262939
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, null, 1],
            [null, 0, null, 1, 0, null],
            [1, null, null, 1, null, null],
            [null, 0, null, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_148",
        name: "P6_3_148",
        description: "6x6 Hard #148",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=148",
        puzzle_number: 148,
        date_saved: "2025-04-23 15:35:19",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 30.8,
            logic_iterations_score: 0.8,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 23.1
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 49,
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
            time_taken: 0.0050041675567627
        },
        grid: [
            [null, 0, 0, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, null, null, null, 0, null],
            [0, null, null, 1, null, null],
            [0, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_149",
        name: "P6_3_149",
        description: "6x6 Hard #149",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=149",
        puzzle_number: 149,
        date_saved: "2025-04-23 15:35:21",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 24,
            logic_iterations_score: 0.8,
            backtracking_score: 23.2,
            size_score: 5,
            percent_filled_by_logic: 40
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 2,
            backtrack_iterations: 18,
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
            time_taken: 0.0028650760650635
        },
        grid: [
            [0, null, null, null, null, null],
            [null, null, null, 0, null, 1],
            [1, null, null, null, null, null],
            [null, null, null, 0, 0, null],
            [null, null, 0, null, 0, null],
            [0, 1, null, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_150",
        name: "P6_3_150",
        description: "6x6 Easy #150",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=150",
        puzzle_number: 150,
        date_saved: "2025-04-23 15:35:22",
        difficulty: "Easy",
        difficulty_score: 24,
        difficulty_factors: {
            logic_fill_score: 14.3,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 64.3
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
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
            time_taken: 0.00083804130554199
        },
        grid: [
            [null, 0, null, null, 0, 0],
            [null, null, null, null, null, null],
            [null, null, null, 0, null, null],
            [null, 0, null, 0, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null]
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
        id: "P6_3_151",
        name: "P6_3_151",
        description: "6x6 Hard #151",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=151",
        puzzle_number: 151,
        date_saved: "2025-04-23 15:35:23",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 10.7
        },
        solver_metrics: {
            initial_empty: 28,
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
            time_taken: 0.0061781406402588
        },
        grid: [
            [null, 1, null, null, 1, null],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, 0, null, 1, null],
            [0, null, null, null, null, 0],
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
        id: "P6_3_152",
        name: "P6_3_152",
        description: "6x6 Hard #152",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=152",
        puzzle_number: 152,
        date_saved: "2025-04-23 15:35:25",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 23.6,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 27,
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
            time_taken: 0.0027709007263184
        },
        grid: [
            [1, 1, null, 0, null, null],
            [null, null, null, 0, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, 1],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_153",
        name: "P6_3_153",
        description: "6x6 Easy #153",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=153",
        puzzle_number: 153,
        date_saved: "2025-04-23 15:35:26",
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
                fillSandwiches: 0,
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 4
            },
            time_taken: 0.001446008682251
        },
        grid: [
            [1, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [null, null, null, 1, null, 0],
            [null, null, null, 1, null, 0],
            [null, 1, null, null, 1, null],
            [1, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_154",
        name: "P6_3_154",
        description: "6x6 Hard #154",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=154",
        puzzle_number: 154,
        date_saved: "2025-04-23 15:35:27",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 0.8,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 9,
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
            time_taken: 0.0016741752624512
        },
        grid: [
            [0, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, 0, null, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_155",
        name: "P6_3_155",
        description: "6x6 Hard #155",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=155",
        puzzle_number: 155,
        date_saved: "2025-04-23 15:35:29",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.1,
            size_score: 5,
            percent_filled_by_logic: 28.6
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 41,
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
            time_taken: 0.0055630207061768
        },
        grid: [
            [null, 1, null, 1, null, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, 0, 0]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_156",
        name: "P6_3_156",
        description: "6x6 Medium #156",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=156",
        puzzle_number: 156,
        date_saved: "2025-04-23 15:35:30",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 35.4,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 11.5
        },
        solver_metrics: {
            initial_empty: 26,
            logic_iterations: 2,
            backtrack_iterations: 3,
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
            time_taken: 0.0009920597076416
        },
        grid: [
            [0, null, null, 1, null, 0],
            [0, null, null, 0, null, null],
            [null, null, 0, null, 1, null],
            [1, null, null, 1, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_157",
        name: "P6_3_157",
        description: "6x6 Hard #157",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=157",
        puzzle_number: 157,
        date_saved: "2025-04-23 15:35:32",
        difficulty: "Hard",
        difficulty_score: 66,
        difficulty_factors: {
            logic_fill_score: 35.6,
            logic_iterations_score: 0.8,
            backtracking_score: 24.5,
            size_score: 5,
            percent_filled_by_logic: 11.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 60,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: false,
            solved_with_hard_backtracking: true,
            rules_used: {
                completeRowsColumns: 0,
                preventTrio: 0,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.0057058334350586
        },
        grid: [
            [null, 0, null, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, 1],
            [null, 0, null, null, null, null],
            [null, null, null, null, 0, null],
            [1, null, 0, null, null, 1]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_158",
        name: "P6_3_158",
        description: "6x6 Hard #158",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=158",
        puzzle_number: 158,
        date_saved: "2025-04-23 15:35:33",
        difficulty: "Hard",
        difficulty_score: 55,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 22.4,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 8,
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
            time_taken: 0.0022399425506592
        },
        grid: [
            [null, null, null, null, 0, null],
            [null, null, null, null, null, 1],
            [null, 1, null, null, 1, null],
            [null, null, 0, null, null, 0],
            [null, null, null, null, null, 0],
            [null, 1, null, null, 0, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_159",
        name: "P6_3_159",
        description: "6x6 Hard #159",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=159",
        puzzle_number: 159,
        date_saved: "2025-04-23 15:35:34",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 2,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 48.1
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 5,
            backtrack_iterations: 21,
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
            time_taken: 0.003305196762085
        },
        grid: [
            [null, null, null, null, null, 0],
            [null, null, null, 0, 0, null],
            [null, 1, null, null, 0, 0],
            [1, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_160",
        name: "P6_3_160",
        description: "6x6 Medium #160",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=160",
        puzzle_number: 160,
        date_saved: "2025-04-23 15:35:36",
        difficulty: "Medium",
        difficulty_score: 30,
        difficulty_factors: {
            logic_fill_score: 20.7,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 48.1
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00079703330993652
        },
        grid: [
            [null, 0, null, 1, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, 0, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_161",
        name: "P6_3_161",
        description: "6x6 Hard #161",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=161",
        puzzle_number: 161,
        date_saved: "2025-04-23 15:35:37",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 29.6,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 25.9
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 48,
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
            time_taken: 0.008234977722168
        },
        grid: [
            [null, 0, null, null, null, null],
            [1, null, null, 1, null, null],
            [null, null, 0, null, 0, null],
            [1, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, 1]
        ],
        solution: [
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_162",
        name: "P6_3_162",
        description: "6x6 Hard #162",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=162",
        puzzle_number: 162,
        date_saved: "2025-04-23 15:35:39",
        difficulty: "Hard",
        difficulty_score: 61,
        difficulty_factors: {
            logic_fill_score: 30.7,
            logic_iterations_score: 0.8,
            backtracking_score: 24.9,
            size_score: 5,
            percent_filled_by_logic: 23.3
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 2,
            backtrack_iterations: 88,
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
            time_taken: 0.013334035873413
        },
        grid: [
            [null, null, null, 0, 0, null],
            [1, null, null, null, null, null],
            [1, 1, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_163",
        name: "P6_3_163",
        description: "6x6 Hard #163",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=163",
        puzzle_number: 163,
        date_saved: "2025-04-23 15:35:40",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.3,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
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
                tryFillCells: 0
            },
            time_taken: 0.0052061080932617
        },
        grid: [
            [null, null, null, null, 1, 0],
            [null, 0, null, null, 1, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 1],
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, null]
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
        id: "P6_3_164",
        name: "P6_3_164",
        description: "6x6 Hard #164",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=164",
        puzzle_number: 164,
        date_saved: "2025-04-23 15:35:41",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 25,
            logic_iterations_score: 0.8,
            backtracking_score: 21.7,
            size_score: 5,
            percent_filled_by_logic: 37.5
        },
        solver_metrics: {
            initial_empty: 24,
            logic_iterations: 2,
            backtrack_iterations: 4,
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
            time_taken: 0.0013399124145508
        },
        grid: [
            [null, null, null, 1, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [1, 0, null, null, 0, null],
            [null, 0, null, null, null, null],
            [null, null, 0, null, 0, 1]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_165",
        name: "P6_3_165",
        description: "6x6 Hard #165",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=165",
        puzzle_number: 165,
        date_saved: "2025-04-23 15:35:43",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 31.7,
            logic_iterations_score: 1.2,
            backtracking_score: 25.2,
            size_score: 5,
            percent_filled_by_logic: 20.7
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 118,
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
            time_taken: 0.010102987289429
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 1, null, 0, 0, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, 1, null, null, null]
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
        id: "P6_3_166",
        name: "P6_3_166",
        description: "6x6 Easy #166",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=166",
        puzzle_number: 166,
        date_saved: "2025-04-23 15:35:44",
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
            time_taken: 0.00064992904663086
        },
        grid: [
            [null, 1, null, null, 0, null],
            [null, null, 0, null, 0, null],
            [null, null, 0, null, null, null],
            [null, 1, null, null, null, null],
            [null, null, null, null, null, 1],
            [0, null, null, 1, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_167",
        name: "P6_3_167",
        description: "6x6 Hard #167",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=167",
        puzzle_number: 167,
        date_saved: "2025-04-23 15:35:45",
        difficulty: "Hard",
        difficulty_score: 53,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 1.6,
            backtracking_score: 23.6,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
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
            time_taken: 0.0076718330383301
        },
        grid: [
            [null, 1, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, 1, 0, null, 0, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_168",
        name: "P6_3_168",
        description: "6x6 Hard #168",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=168",
        puzzle_number: 168,
        date_saved: "2025-04-23 15:35:47",
        difficulty: "Hard",
        difficulty_score: 51,
        difficulty_factors: {
            logic_fill_score: 22.9,
            logic_iterations_score: 0.8,
            backtracking_score: 22.3,
            size_score: 5,
            percent_filled_by_logic: 42.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 7,
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
            time_taken: 0.0014548301696777
        },
        grid: [
            [0, null, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, 1, null, null, null, null],
            [0, null, null, 0, 0, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0]
        ]
    },
    {
        id: "P6_3_169",
        name: "P6_3_169",
        description: "6x6 Hard #169",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=169",
        puzzle_number: 169,
        date_saved: "2025-04-23 15:35:48",
        difficulty: "Hard",
        difficulty_score: 52,
        difficulty_factors: {
            logic_fill_score: 22.1,
            logic_iterations_score: 1.2,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 44.8
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 46,
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
            time_taken: 0.0043339729309082
        },
        grid: [
            [0, 0, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, null],
            [null, null, 1, 1, null, null],
            [null, null, null, null, null, 1]
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
        id: "P6_3_170",
        name: "P6_3_170",
        description: "6x6 Easy #170",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=170",
        puzzle_number: 170,
        date_saved: "2025-04-23 15:35:50",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 8.9,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 77.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 2,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 3,
                preventTrio: 2,
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.0014538764953613
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, 1, null, null, 1, 1],
            [1, null, null, 0, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_171",
        name: "P6_3_171",
        description: "6x6 Hard #171",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=171",
        puzzle_number: 171,
        date_saved: "2025-04-23 15:35:51",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 38.5,
            logic_iterations_score: 0.8,
            backtracking_score: 24.2,
            size_score: 5,
            percent_filled_by_logic: 3.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 48,
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
            time_taken: 0.0050759315490723
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 0, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [null, null, 1, null, null, 1],
            [null, null, 1, 0, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_172",
        name: "P6_3_172",
        description: "6x6 Hard #172",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=172",
        puzzle_number: 172,
        date_saved: "2025-04-23 15:35:52",
        difficulty: "Hard",
        difficulty_score: 70,
        difficulty_factors: {
            logic_fill_score: 38.5,
            logic_iterations_score: 0.8,
            backtracking_score: 25.6,
            size_score: 5,
            percent_filled_by_logic: 3.7
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 172,
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
            time_taken: 0.015778064727783
        },
        grid: [
            [null, null, 0, null, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, null, 1, null],
            [1, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 1, 0, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_173",
        name: "P6_3_173",
        description: "6x6 Medium #173",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=173",
        puzzle_number: 173,
        date_saved: "2025-04-23 15:35:54",
        difficulty: "Medium",
        difficulty_score: 33,
        difficulty_factors: {
            logic_fill_score: 22.2,
            logic_iterations_score: 1.6,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 44.4
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 4,
            backtrack_iterations: 3,
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
            time_taken: 0.001629114151001
        },
        grid: [
            [null, null, null, 1, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, 1],
            [1, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [null, null, 0, null, null, null]
        ],
        solution: [
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_174",
        name: "P6_3_174",
        description: "6x6 Easy #174",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=174",
        puzzle_number: 174,
        date_saved: "2025-04-23 15:35:55",
        difficulty: "Easy",
        difficulty_score: 19,
        difficulty_factors: {
            logic_fill_score: 9.6,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 76
        },
        solver_metrics: {
            initial_empty: 25,
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
            time_taken: 0.0007021427154541
        },
        grid: [
            [null, 0, null, null, null, 0],
            [null, null, 0, 0, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, null],
            [1, 0, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_175",
        name: "P6_3_175",
        description: "6x6 Hard #175",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=175",
        puzzle_number: 175,
        date_saved: "2025-04-23 15:35:57",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 27.1,
            logic_iterations_score: 0.8,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 32.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 58,
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
            time_taken: 0.0050199031829834
        },
        grid: [
            [null, 0, null, null, null, 0],
            [null, null, 1, null, null, 0],
            [null, null, 1, null, null, null],
            [null, null, null, null, null, 0],
            [1, null, null, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_176",
        name: "P6_3_176",
        description: "6x6 Easy #176",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=176",
        puzzle_number: 176,
        date_saved: "2025-04-23 15:35:58",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 2
            },
            time_taken: 0.00056099891662598
        },
        grid: [
            [null, 1, null, null, 1, null],
            [null, null, null, null, null, null],
            [null, null, 1, null, null, 1],
            [null, 1, 1, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, null, 0]
        ],
        solution: [
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_177",
        name: "P6_3_177",
        description: "6x6 Easy #177",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=177",
        puzzle_number: 177,
        date_saved: "2025-04-23 15:35:59",
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
                checkBalancedPairs: 1,
                checkUniqueRowsColumns: 0,
                tryFillCells: 3
            },
            time_taken: 0.0010750293731689
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [0, null, 1, 1, null, null],
            [null, null, null, null, 0, 0],
            [null, 0, null, null, null, null],
            [1, null, null, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_178",
        name: "P6_3_178",
        description: "6x6 Easy #178",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=178",
        puzzle_number: 178,
        date_saved: "2025-04-23 15:36:01",
        difficulty: "Easy",
        difficulty_score: 23,
        difficulty_factors: {
            logic_fill_score: 12.9,
            logic_iterations_score: 1.2,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 67.9
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 3,
            solved_with_logic_only: false,
            solved_with_standard_backtracking: true,
            solved_with_hard_backtracking: false,
            rules_used: {
                completeRowsColumns: 2,
                preventTrio: 2,
                fillSandwiches: 2,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.00071883201599121
        },
        grid: [
            [null, null, null, null, null, 1],
            [1, null, null, 1, null, 1],
            [1, null, 1, null, null, null],
            [null, null, null, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_179",
        name: "P6_3_179",
        description: "6x6 Hard #179",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=179",
        puzzle_number: 179,
        date_saved: "2025-04-23 15:36:02",
        difficulty: "Hard",
        difficulty_score: 58,
        difficulty_factors: {
            logic_fill_score: 27.1,
            logic_iterations_score: 1.6,
            backtracking_score: 24.4,
            size_score: 5,
            percent_filled_by_logic: 32.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 4,
            backtrack_iterations: 57,
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
            time_taken: 0.0057339668273926
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, 1, null, 1, null, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, 0, null, 0],
            [null, null, null, 0, 0, null]
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
        id: "P6_3_180",
        name: "P6_3_180",
        description: "6x6 Medium #180",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=180",
        puzzle_number: 180,
        date_saved: "2025-04-23 15:36:03",
        difficulty: "Medium",
        difficulty_score: 30,
        difficulty_factors: {
            logic_fill_score: 19.3,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 51.9
        },
        solver_metrics: {
            initial_empty: 27,
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
            time_taken: 0.00079798698425293
        },
        grid: [
            [null, null, null, 1, 0, null],
            [0, null, null, null, 0, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_181",
        name: "P6_3_181",
        description: "6x6 Medium #181",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=181",
        puzzle_number: 181,
        date_saved: "2025-04-23 15:36:05",
        difficulty: "Medium",
        difficulty_score: 36,
        difficulty_factors: {
            logic_fill_score: 26.2,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 34.6
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
                tryFillCells: 0
            },
            time_taken: 0.00091099739074707
        },
        grid: [
            [null, null, null, null, null, 0],
            [1, null, 0, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, 0, 0, null, null],
            [null, null, 0, null, null, 1],
            [1, null, null, 0, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_182",
        name: "P6_3_182",
        description: "6x6 Hard #182",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=182",
        puzzle_number: 182,
        date_saved: "2025-04-23 15:36:06",
        difficulty: "Hard",
        difficulty_score: 69,
        difficulty_factors: {
            logic_fill_score: 37.3,
            logic_iterations_score: 0.8,
            backtracking_score: 25.4,
            size_score: 5,
            percent_filled_by_logic: 6.7
        },
        solver_metrics: {
            initial_empty: 30,
            logic_iterations: 2,
            backtrack_iterations: 141,
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
            time_taken: 0.011744976043701
        },
        grid: [
            [null, null, 1, null, null, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 0]
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
        id: "P6_3_183",
        name: "P6_3_183",
        description: "6x6 Hard #183",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=183",
        puzzle_number: 183,
        date_saved: "2025-04-23 15:36:08",
        difficulty: "Hard",
        difficulty_score: 63,
        difficulty_factors: {
            logic_fill_score: 34.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 14.8
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 16,
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
            time_taken: 0.0026071071624756
        },
        grid: [
            [1, null, null, null, 1, null],
            [null, null, null, 0, null, null],
            [0, null, 0, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 0, null, null, 0, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0]
        ]
    },
    {
        id: "P6_3_184",
        name: "P6_3_184",
        description: "6x6 Medium #184",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=184",
        puzzle_number: 184,
        date_saved: "2025-04-23 15:36:09",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 4.7,
            size_score: 5,
            percent_filled_by_logic: 25
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
                fillSandwiches: 0,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 0
            },
            time_taken: 0.00093507766723633
        },
        grid: [
            [null, 1, null, null, 1, null],
            [0, null, null, 0, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, 1, null],
            [0, null, null, null, null, 0],
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
        id: "P6_3_185",
        name: "P6_3_185",
        description: "6x6 Medium #185",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=185",
        puzzle_number: 185,
        date_saved: "2025-04-23 15:36:10",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 17.6,
            logic_iterations_score: 1.2,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 56
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 3,
            backtrack_iterations: 2,
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
            time_taken: 0.0014410018920898
        },
        grid: [
            [null, null, null, 0, null, 1],
            [null, 0, null, null, 1, null],
            [0, 0, null, null, null, null],
            [null, null, null, null, 1, null],
            [null, 0, 0, null, 0, null],
            [0, null, null, null, null, null]
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
        id: "P6_3_186",
        name: "P6_3_186",
        description: "6x6 Easy #186",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=186",
        puzzle_number: 186,
        date_saved: "2025-04-23 15:36:12",
        difficulty: "Easy",
        difficulty_score: 18,
        difficulty_factors: {
            logic_fill_score: 8.6,
            logic_iterations_score: 1.6,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 78.6
        },
        solver_metrics: {
            initial_empty: 28,
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
            time_taken: 0.00092196464538574
        },
        grid: [
            [null, null, 1, null, null, null],
            [null, null, null, null, 1, null],
            [null, null, null, 0, null, 0],
            [null, null, null, 0, null, null],
            [null, null, null, null, null, null],
            [0, null, null, 0, null, 0]
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
        id: "P6_3_187",
        name: "P6_3_187",
        description: "6x6 Hard #187",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=187",
        puzzle_number: 187,
        date_saved: "2025-04-23 15:36:13",
        difficulty: "Hard",
        difficulty_score: 56,
        difficulty_factors: {
            logic_fill_score: 27.1,
            logic_iterations_score: 0.8,
            backtracking_score: 23.5,
            size_score: 5,
            percent_filled_by_logic: 32.1
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 23,
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
            time_taken: 0.0038039684295654
        },
        grid: [
            [null, 1, null, null, 0, null],
            [1, null, null, 1, null, 1],
            [null, null, null, null, null, null],
            [null, null, null, null, 0, null],
            [null, null, null, null, null, null],
            [1, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_188",
        name: "P6_3_188",
        description: "6x6 Medium #188",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=188",
        puzzle_number: 188,
        date_saved: "2025-04-23 15:36:15",
        difficulty: "Medium",
        difficulty_score: 29,
        difficulty_factors: {
            logic_fill_score: 17.9,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 55.2
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 3,
            backtrack_iterations: 5,
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
            time_taken: 0.0011940002441406
        },
        grid: [
            [null, null, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 1, 1, null, null],
            [null, 1, null, 1, null, null],
            [0, null, null, null, 0, null]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_189",
        name: "P6_3_189",
        description: "6x6 Hard #189",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=189",
        puzzle_number: 189,
        date_saved: "2025-04-23 15:36:16",
        difficulty: "Hard",
        difficulty_score: 54,
        difficulty_factors: {
            logic_fill_score: 25.2,
            logic_iterations_score: 0.8,
            backtracking_score: 23.4,
            size_score: 5,
            percent_filled_by_logic: 37
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
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
                tryFillCells: 0
            },
            time_taken: 0.00376296043396
        },
        grid: [
            [null, null, 1, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, 1, null, 0, null],
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, 0, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_190",
        name: "P6_3_190",
        description: "6x6 Medium #190",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=190",
        puzzle_number: 190,
        date_saved: "2025-04-23 15:36:17",
        difficulty: "Medium",
        difficulty_score: 45,
        difficulty_factors: {
            logic_fill_score: 16.3,
            logic_iterations_score: 0.8,
            backtracking_score: 22.5,
            size_score: 5,
            percent_filled_by_logic: 59.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 2,
            backtrack_iterations: 9,
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
            time_taken: 0.0021438598632812
        },
        grid: [
            [1, null, null, null, null, 1],
            [null, null, null, 0, 0, null],
            [null, null, null, null, null, null],
            [null, 1, null, null, 0, null],
            [null, null, null, 0, null, null],
            [null, 0, null, 0, null, null]
        ],
        solution: [
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_191",
        name: "P6_3_191",
        description: "6x6 Medium #191",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=191",
        puzzle_number: 191,
        date_saved: "2025-04-23 15:36:19",
        difficulty: "Medium",
        difficulty_score: 40,
        difficulty_factors: {
            logic_fill_score: 28.1,
            logic_iterations_score: 1.2,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 29.6
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
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
            time_taken: 0.0014181137084961
        },
        grid: [
            [null, null, 0, null, 1, 1],
            [null, null, null, null, null, null],
            [null, null, null, 1, null, null],
            [0, null, null, null, null, 0],
            [null, null, null, 0, null, 0],
            [null, 1, null, null, null, null]
        ],
        solution: [
            [0, 1, 0, 0, 1, 1],
            [1, 0, 1, 1, 0, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_192",
        name: "P6_3_192",
        description: "6x6 Hard #192",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=192",
        puzzle_number: 192,
        date_saved: "2025-04-23 15:36:20",
        difficulty: "Hard",
        difficulty_score: 59,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 1.2,
            backtracking_score: 23.1,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 3,
            backtrack_iterations: 16,
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
            time_taken: 0.003460168838501
        },
        grid: [
            [1, null, 1, null, null, null],
            [null, null, null, 0, null, 0],
            [null, 0, null, null, 0, null],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, null],
            [null, null, 1, null, null, null]
        ],
        solution: [
            [1, 0, 1, 1, 0, 0],
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [0, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_193",
        name: "P6_3_193",
        description: "6x6 Medium #193",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=193",
        puzzle_number: 193,
        date_saved: "2025-04-23 15:36:21",
        difficulty: "Medium",
        difficulty_score: 27,
        difficulty_factors: {
            logic_fill_score: 18.5,
            logic_iterations_score: 0.8,
            backtracking_score: 3.2,
            size_score: 5,
            percent_filled_by_logic: 53.8
        },
        solver_metrics: {
            initial_empty: 26,
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
            time_taken: 0.00073003768920898
        },
        grid: [
            [null, 1, 1, null, null, null],
            [null, null, null, null, null, 1],
            [null, null, null, 0, null, 1],
            [0, null, null, null, null, null],
            [null, null, null, null, 0, 0],
            [0, null, 1, null, null, null]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [1, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_194",
        name: "P6_3_194",
        description: "6x6 Medium #194",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=194",
        puzzle_number: 194,
        date_saved: "2025-04-23 15:36:23",
        difficulty: "Medium",
        difficulty_score: 43,
        difficulty_factors: {
            logic_fill_score: 13.8,
            logic_iterations_score: 1.6,
            backtracking_score: 22.1,
            size_score: 5,
            percent_filled_by_logic: 65.5
        },
        solver_metrics: {
            initial_empty: 29,
            logic_iterations: 4,
            backtrack_iterations: 6,
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
            time_taken: 0.0016701221466064
        },
        grid: [
            [null, null, null, null, null, null],
            [1, null, null, null, null, null],
            [null, null, null, null, null, 0],
            [null, null, null, 1, 1, null],
            [null, null, null, null, 1, null],
            [null, null, 0, null, null, 1]
        ],
        solution: [
            [0, 1, 1, 0, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    },
    {
        id: "P6_3_195",
        name: "P6_3_195",
        description: "6x6 Medium #195",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=195",
        puzzle_number: 195,
        date_saved: "2025-04-23 15:36:24",
        difficulty: "Medium",
        difficulty_score: 33,
        difficulty_factors: {
            logic_fill_score: 22.4,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 44
        },
        solver_metrics: {
            initial_empty: 25,
            logic_iterations: 2,
            backtrack_iterations: 5,
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
            time_taken: 0.00086188316345215
        },
        grid: [
            [null, null, null, null, 1, null],
            [0, null, null, 0, null, null],
            [1, null, null, 0, null, null],
            [null, 1, null, null, null, 0],
            [0, null, null, null, null, null],
            [null, null, 1, 0, null, 0]
        ],
        solution: [
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_196",
        name: "P6_3_196",
        description: "6x6 Hard #196",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=196",
        puzzle_number: 196,
        date_saved: "2025-04-23 15:36:26",
        difficulty: "Hard",
        difficulty_score: 60,
        difficulty_factors: {
            logic_fill_score: 30,
            logic_iterations_score: 0.8,
            backtracking_score: 23.8,
            size_score: 5,
            percent_filled_by_logic: 25
        },
        solver_metrics: {
            initial_empty: 28,
            logic_iterations: 2,
            backtrack_iterations: 31,
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
            time_taken: 0.0060160160064697
        },
        grid: [
            [null, null, null, 0, null, null],
            [null, 1, null, null, null, null],
            [null, 1, null, null, null, 1],
            [0, null, null, null, null, null],
            [null, 0, 0, null, null, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_197",
        name: "P6_3_197",
        description: "6x6 Hard #197",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=197",
        puzzle_number: 197,
        date_saved: "2025-04-23 15:36:27",
        difficulty: "Hard",
        difficulty_score: 57,
        difficulty_factors: {
            logic_fill_score: 26.7,
            logic_iterations_score: 1.2,
            backtracking_score: 23.7,
            size_score: 5,
            percent_filled_by_logic: 33.3
        },
        solver_metrics: {
            initial_empty: 27,
            logic_iterations: 3,
            backtrack_iterations: 30,
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
            time_taken: 0.0036327838897705
        },
        grid: [
            [null, 0, null, null, null, null],
            [null, 0, null, 1, null, 0],
            [null, null, null, 1, null, 0],
            [null, null, null, null, null, null],
            [1, null, null, null, 1, null],
            [null, null, null, null, 1, null]
        ],
        solution: [
            [1, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0, 0],
            [0, 1, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 0, 0, 1, 1]
        ]
    },
    {
        id: "P6_3_198",
        name: "P6_3_198",
        description: "6x6 Medium #198",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=198",
        puzzle_number: 198,
        date_saved: "2025-04-23 15:36:28",
        difficulty: "Medium",
        difficulty_score: 28,
        difficulty_factors: {
            logic_fill_score: 17.8,
            logic_iterations_score: 0.8,
            backtracking_score: 4,
            size_score: 5,
            percent_filled_by_logic: 55.6
        },
        solver_metrics: {
            initial_empty: 27,
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
                tryFillCells: 0
            },
            time_taken: 0.00063610076904297
        },
        grid: [
            [0, null, 0, null, null, null],
            [null, null, null, null, null, null],
            [null, null, 0, null, null, 1],
            [null, 1, null, null, null, 1],
            [null, null, 0, null, null, null],
            [0, null, null, null, 1, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [1, 0, 0, 1, 0, 1],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 1, 0]
        ]
    },
    {
        id: "P6_3_199",
        name: "P6_3_199",
        description: "6x6 Medium #199",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=199",
        puzzle_number: 199,
        date_saved: "2025-04-23 15:36:30",
        difficulty: "Medium",
        difficulty_score: 44,
        difficulty_factors: {
            logic_fill_score: 32.6,
            logic_iterations_score: 0.8,
            backtracking_score: 5.2,
            size_score: 5,
            percent_filled_by_logic: 18.5
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
            time_taken: 0.0012099742889404
        },
        grid: [
            [null, null, null, null, null, 1],
            [null, 0, null, 0, null, null],
            [0, null, null, null, 0, null],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, null],
            [null, null, null, 0, 0, null]
        ],
        solution: [
            [0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 0, 1],
            [1, 1, 0, 0, 1, 0],
            [0, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1]
        ]
    },
    {
        id: "P6_3_200",
        name: "P6_3_200",
        description: "6x6 Medium #200",
        size: 6,
        source_url: "https://binarypuzzle.com/puzzles.php?size=6&level=3&nr=200",
        puzzle_number: 200,
        date_saved: "2025-04-23 15:36:31",
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
                fillSandwiches: 1,
                checkBalancedPairs: 0,
                checkUniqueRowsColumns: 0,
                tryFillCells: 1
            },
            time_taken: 0.0013768672943115
        },
        grid: [
            [1, null, 1, null, null, 0],
            [null, null, null, 1, null, null],
            [null, null, null, null, 1, null],
            [1, null, 0, null, 1, null],
            [null, null, null, null, null, null],
            [null, 0, 0, null, null, null]
        ],
        solution: [
            [1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1],
            [0, 1, 1, 0, 1, 0],
            [1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1]
        ]
    }
];

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LEVEL6x6_d3_PUZZLES };
} else {
    // Expose to window object in browser environment
    window.LEVEL6x6_d3_PUZZLES = LEVEL6x6_d3_PUZZLES;
}
