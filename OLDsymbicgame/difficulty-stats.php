<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puzzle Difficulty Statistics</title>
    <script src="../node_modules/chart.js/dist/chart.umd.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        .chart-container {
            margin-bottom: 40px;
            position: relative;
            height: 400px;
        }
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .stat-box h3 {
            margin-top: 0;
            color: #444;
        }
        .stat-box p {
            margin: 5px 0;
            color: #666;
        }
        .difficulty-range {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
        }
        .difficulty-range p {
            margin: 3px 0;
        }
        .easy { color: #28a745; }
        .medium { color: #ffc107; }
        .hard { color: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Puzzle Difficulty Statistics</h1>
        
        <div class="stats-container">
            <div class="stat-box">
                <h3>6x6 Puzzles</h3>
                <div id="stats-6x6"></div>
            </div>
            <div class="stat-box">
                <h3>8x8 Puzzles</h3>
                <div id="stats-8x8"></div>
            </div>
            <div class="stat-box">
                <h3>10x10 Puzzles</h3>
                <div id="stats-10x10"></div>
            </div>
        </div>

        <div class="chart-container">
            <canvas id="difficultyChart"></canvas>
        </div>
    </div>

    <script>
        // Fetch puzzle data from the server
        async function fetchPuzzleData() {
            const response = await fetch('get-puzzle-stats.php');
            return await response.json();
        }

        // Calculate statistics for a dataset
        function calculateStats(difficulties) {
            const sorted = [...difficulties].sort((a, b) => a - b);
            const q1 = sorted[Math.floor(sorted.length * 0.25)];
            const median = sorted[Math.floor(sorted.length * 0.5)];
            const q3 = sorted[Math.floor(sorted.length * 0.75)];
            const min = sorted[0];
            const max = sorted[sorted.length - 1];
            return { q1, median, q3, min, max };
        }

        // Count puzzles in each difficulty range
        function countDifficultyRanges(difficulties) {
            return {
                easy: difficulties.filter(d => d < 3).length,
                medium: difficulties.filter(d => d >= 3 && d <= 10).length,
                hard: difficulties.filter(d => d > 10).length
            };
        }

        // Initialize charts and statistics
        async function initializeCharts() {
            const data = await fetchPuzzleData();
            
            // Process data for each size
            const sizes = [6, 8, 10];
            const datasets = [];
            const colors = {
                6: 'rgba(54, 162, 235, 0.5)',
                8: 'rgba(255, 99, 132, 0.5)',
                10: 'rgba(75, 192, 192, 0.5)'
            };

            sizes.forEach(size => {
                const sizeData = data[size] || [];
                const difficulties = sizeData.map(p => p.difficulty).sort((a, b) => a - b);
                
                // Calculate statistics
                const stats = calculateStats(difficulties);
                const avg = difficulties.reduce((a, b) => a + b, 0) / difficulties.length;
                const ranges = countDifficultyRanges(difficulties);
                
                // Update statistics display
                const statsDiv = document.getElementById(`stats-${size}x${size}`);
                statsDiv.innerHTML = `
                    <p>Total Puzzles: ${difficulties.length}</p>
                    <p>Average Difficulty: ${avg.toFixed(2)}</p>
                    <p>Min Difficulty: ${stats.min.toFixed(2)}</p>
                    <p>Max Difficulty: ${stats.max.toFixed(2)}</p>
                    <p>Median Difficulty: ${stats.median.toFixed(2)}</p>
                    <div class="difficulty-range">
                        <p>Difficulty Ranges:</p>
                        <p class="easy">Easy (0-2.99): ${ranges.easy} puzzles</p>
                        <p class="medium">Medium (3-10): ${ranges.medium} puzzles</p>
                        <p class="hard">Hard (>10): ${ranges.hard} puzzles</p>
                    </div>
                `;

                // Create scatter plot data
                const scatterData = difficulties.map((difficulty, index) => ({
                    x: index,
                    y: difficulty
                }));

                // Add dataset for the chart
                datasets.push({
                    label: `${size}x${size} Puzzles`,
                    data: scatterData,
                    backgroundColor: colors[size],
                    borderColor: colors[size].replace('0.5', '1'),
                    borderWidth: 1,
                    pointRadius: 4,
                    pointHoverRadius: 6
                });
            });

            // Create the chart
            new Chart(document.getElementById('difficultyChart'), {
                type: 'scatter',
                data: {
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Puzzle Difficulty Distribution by Size'
                        },
                        legend: {
                            position: 'top'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `Difficulty: ${context.raw.y.toFixed(2)}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Puzzle Index'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Difficulty Score'
                            }
                        }
                    }
                }
            });
        }

        // Initialize when the page loads
        document.addEventListener('DOMContentLoaded', initializeCharts);
    </script>
</body>
</html> 