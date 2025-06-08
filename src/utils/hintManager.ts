import AsyncStorage from '@react-native-async-storage/async-storage';

const HINTS_STORAGE_KEY = '@game_hints';

class HintManager {
  private static instance: HintManager;
  private hints: number = 5; // Start with 5 hints
  private initialized: boolean = false;

  private constructor() {
    //console.log('HintManager constructor - initial hints:', this.hints);
  }

  public static getInstance(): HintManager {
    if (!HintManager.instance) {
      HintManager.instance = new HintManager();
    }
    return HintManager.instance;
  }

  public async initialize() {
    //console.log('HintManager initialize - before load, hints:', this.hints);
    // Don't load hints if we're already initialized
    if (!this.initialized) {
      await this.loadHints();
      this.initialized = true;
    }
    //console.log('HintManager initialize - after load, hints:', this.hints);
  }

  private async loadHints() {
    try {
      const savedHints = await AsyncStorage.getItem(HINTS_STORAGE_KEY);
      //console.log('HintManager loadHints - savedHints from storage:', savedHints);
      
      // Always set to 5 if we're loading for the first time
      this.hints = 5;
      await this.saveHints();
      //console.log('HintManager loadHints - hints after load:', this.hints);
    } catch (error) {
      console.error('Error loading hints:', error);
      // On error, ensure we have the default value
      this.hints = 5;
    }
  }

  private async saveHints() {
    try {
      //console.log('HintManager saveHints - saving hints:', this.hints);
      await AsyncStorage.setItem(HINTS_STORAGE_KEY, this.hints.toString());
    } catch (error) {
      console.error('Error saving hints:', error);
    }
  }

  public getHints(): number {
    //console.log('HintManager getHints - returning:', this.hints);
    return this.hints;
  }

  public async useHint(): Promise<boolean> {
    if (!this.initialized) {
      await this.initialize();
    }
    //console.log('HintManager useHint - before use, hints:', this.hints);
    if (this.hints > 0) {
      this.hints--;
      await this.saveHints();
      //console.log('HintManager useHint - after use, hints:', this.hints);
      return true;
    }
    return false;
  }

  public async addHints(amount: number) {
    if (!this.initialized) {
      await this.initialize();
    }
    //console.log('HintManager addHints - before add, hints:', this.hints);
    this.hints += amount;
    await this.saveHints();
    //console.log('HintManager addHints
  }

  public async resetHints() {
    //console.log('HintManager resetHints - before reset, hints:', this.hints);
    try {
      // Clear the storage first
      await AsyncStorage.removeItem(HINTS_STORAGE_KEY);
      // Reset the instance state
      this.hints = 5;
      this.initialized = false;
      // Save the new value
      await this.saveHints();
      //console.log('HintManager resetHints - after reset, hints:', this.hints);
    } catch (error) {
      //console.error('Error resetting hints:', error);
      // Ensure we have the default value even if there's an error
      this.hints = 5;
      this.initialized = false;
    }
  }
}

export const hintManager = HintManager.getInstance(); 