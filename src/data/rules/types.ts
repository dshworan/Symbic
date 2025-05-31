export interface HintStep {
  row: number;
  col: number;
  value: number;
  rule: string;
  message: string;
}

export interface Rule {
  name: string;
  description: string;
  findStep(puzzle: number[][], size: number): HintStep | null;
}

export interface RuleManager {
  getRules(): Rule[];
  getRule(name: string): Rule | null;
} 