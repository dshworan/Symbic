export type CellValue = 0 | 1 | null;

export interface Puzzle {
  id: string;
  grid: CellValue[][];
  solution: (0 | 1)[][];
  difficulty: number;
  gridSize: number;
  level: number;
  shapeSetId: string;
} 