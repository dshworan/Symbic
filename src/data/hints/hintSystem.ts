import { RuleManager } from '../rules/ruleManager';
import { HintStep } from '../rules/types';

export class HintSystem {
  private ruleManager: RuleManager;
  private debug: boolean;

  constructor() {
    this.ruleManager = new RuleManager();
    this.debug = false;
  }

  /**
   * Find the next hint for the current puzzle state
   * @param puzzle The current puzzle state
   * @param size The size of the puzzle
   * @returns A hint step or null if no hint is available
   */
  findHint(puzzle: number[][], size: number): HintStep | null {
    const rules = this.ruleManager.getRules();
    
    for (const rule of rules) {
      if (this.debug) {
        console.log(`Trying ${rule.name} rule...`);
      }
      
      const step = rule.findStep(puzzle, size);
      
      if (step) {
        if (this.debug) {
          console.log(`Found hint using ${rule.name} rule:`, step);
        }
        return step;
      }
    }
    
    if (this.debug) {
      console.log("No hint found with any rule");
      // Print the current puzzle state for debugging
      console.log("Current puzzle state:");
      for (let row = 0; row < size; row++) {
        console.log(puzzle[row].map(cell => cell === null ? '.' : cell).join(' '));
      }
    }
    
    return null;
  }

  /**
   * Enable or disable debug logging
   * @param enable Whether to enable debug logs
   */
  setDebug(enable: boolean) {
    this.debug = enable;
  }
} 