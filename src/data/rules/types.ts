import { Shape } from '../types/levelTypes';

export interface HintStep {
  row: number;
  col: number;
  value: number;
  rule: string;
  message: string;
  hintCellSets?: Array<{row: number; col: number}>;
}

export interface Rule {
  name: string;
  description: string;
  findStep(puzzle: number[][], size: number, shapes?: Shape[]): HintStep | null;
}

export interface RuleManager {
  getRules(): Rule[];
  getRule(name: string): Rule | null;
} 