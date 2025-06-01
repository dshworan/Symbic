import { MoveValidator } from './moveValidator';
import { LastCellRule } from './lastCellRule';
import { PairsRule } from './pairsRule';
import { SandwichRule } from './sandwichRule';
import { EqualNumberRule } from './equalNumberRule';
import { SpreadAntiTripletRule } from './spreadAntiTripletRule';
import { QuadAntiTripleRule } from './quadAntiTripleRule';
import { Clustered4EmptyCellsRule } from './clustered4EmptyCellsRule';
import { Clustered5EmptyCellsRule } from './clustered5EmptyCellsRule';
import { DuplicateRow2Rule } from './duplicateRow2Rule';
import { DuplicateRow3Rule } from './duplicateRow3Rule';
import { FarAntiTripletRule } from './farAntiTripletRule';
import { ShowErrorsRule } from './showErrorsRule';

export class RuleManager {
  private rules: MoveValidator[];

  constructor() {
    this.rules = [
      new ShowErrorsRule(),
      new LastCellRule(),
      new PairsRule(),
      new SandwichRule(),
      new EqualNumberRule(),
      new SpreadAntiTripletRule(),
      new QuadAntiTripleRule(),
      new Clustered4EmptyCellsRule(),
      new Clustered5EmptyCellsRule(),
      new DuplicateRow2Rule(),
      new DuplicateRow3Rule(),
      new FarAntiTripletRule()
    ];
  }

  getRules(): MoveValidator[] {
    return this.rules;
  }

  getRule(name: string): MoveValidator | null {
    return this.rules.find(rule => rule.getName() === name) || null;
  }
} 