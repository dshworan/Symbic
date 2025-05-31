<?php
// Get the puzzle ID from the URL if it exists
$puzzleId = isset($_GET['puzzle']) ? $_GET['puzzle'] : '';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Symbic Game</title>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="fontawesome-pro-6.7.2-web/css/all.min.css" />
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Symbic <a style="font-size: 12px;" href="puzzle-analyzer.html" target="_blank">Analyzer</a></h1>
            </header>

            <div class="game-controls">
                <div class="control-selectors">
                    <div class="grid-size-selector">
                        <label for="grid-size">Grid Size</label>
                        <select id="grid-size">
                            <option value="6">6x6</option>
                            <option value="8">8x8</option>
                            <option value="10">10x10</option>
                        </select>
                    </div>

                    <div class="puzzle-selector">
                        <label for="puzzle-select">Puzzle</label>
                        <select id="puzzle-select">
                            <option value=""></option>
                        </select>
                    </div>

                    <div class="icon-selector">
                        <label for="icon-set">Icons</label>
                        <select id="icon-set">
                            <option value="one-zero">1/0</option>
                            <option value="moon-sun">Moon/Sun</option>
                            <option value="star-heart">Star/Heart</option>
                            <option value="circle-square">Circle/Square</option>
                            <option value="cat-dog">Cat/Dog</option>
                            <option value="thumbs-up-down">Thumbs Up/Down</option>
                            <option value="smile-frown">Smile/Frown</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="puzzle-container">
                <div id="puzzle-grid" class="puzzle-grid"></div>
            </div>

            <div id="message-box" class="message-box"></div>

            <div class="action-buttons">
                <button id="hint-btn">Hint</button>
                <button id="solve-step-btn">Step</button>
                <button id="solve-all-btn">Solve</button>
                <button id="clear-btn">Clear</button>
                <button id="new-game-btn">New Game</button>
                <button id="blocked-solve-btn">Blocked Solve</button>
            </div>

            <footer></footer>
        </div>

        <!-- Load puzzle files first (from new location) -->
        <script src="puzzles/level 6x6 d1.js"></script>
        <script src="puzzles/level 6x6 d2.js"></script>
        <script src="puzzles/level 6x6 d3.js"></script>
        <script src="puzzles/level 6x6 d4.js"></script>
        <script src="puzzles/level 8x8 d1.js"></script>
        <script src="puzzles/level 8x8 d2.js"></script>
        <script src="puzzles/level 8x8 d3.js"></script>
        <script src="puzzles/level 8x8 d4.js"></script>
        <script src="puzzles/level 10x10 d1.js"></script>
        <script src="puzzles/level 10x10 d2.js"></script>
        <script src="puzzles/level 10x10 d3.js"></script>
        <script src="puzzles/level 10x10 d4.js"></script>
        <script src="puzzles/puzzles-loader.js"></script>

        <!-- Load original logic scripts -->
        <script src="js/puzzle.js"></script>
        <script src="js/rules.js"></script>
        <script src="js/solver.js"></script>
        <script src="js/difficulty-calculator.js"></script>

        <!-- Load game scripts -->
        <script src="js/icons.js"></script>
        <script src="js/game.js"></script>
        <script src="js/blocked-solver.js"></script>

        <?php if ($puzzleId): ?>
        <script>
            // Store the puzzle ID for the game to use
            window.initialPuzzleId = <?php echo json_encode($puzzleId); ?>;
            
            // Parse the puzzle ID to get grid size and level
            document.addEventListener('DOMContentLoaded', function() {
                if (window.initialPuzzleId) {
                    const [size, level] = window.initialPuzzleId.split('_');
                    // Remove the 'P' prefix from size
                    const gridSize = size.substring(1);
                    
                    // Set the grid size dropdown
                    const gridSizeSelect = document.getElementById('grid-size');
                    gridSizeSelect.value = gridSize;
                    
                    // Trigger the grid size change event to load puzzles
                    const event = new Event('change');
                    gridSizeSelect.dispatchEvent(event);
                    
                    // Wait for puzzles to load before setting the level
                    setTimeout(() => {
                        // Set the puzzle level
                        const puzzleSelect = document.getElementById('puzzle-select');
                        // Find the exact puzzle ID
                        const options = Array.from(puzzleSelect.options);
                        const targetOption = options.find(option => 
                            option.value === window.initialPuzzleId
                        );
                        if (targetOption) {
                            puzzleSelect.value = targetOption.value;
                            // Trigger the puzzle selection
                            puzzleSelect.dispatchEvent(new Event('change'));
                        }
                    }, 100);
                }
            });
        </script>
        <?php endif; ?>
    </body>
</html> 