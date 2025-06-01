export interface Shape {
  id: string;
  path: string;
  fill: string;
}

export interface LevelColors {
  primary: string;
  secondary: string;
}

export interface Puzzle {
  grid: (number | null)[][];
  solution: number[][];
  difficulty: number;
}

export interface Level {
  id: number;
  packId: number;
  shapes: Shape[];
  colors: LevelColors;
  puzzles: Puzzle[];
}

export interface Pack {
  id: number;
  name: string;
  levels: Level[];
} 