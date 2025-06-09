import { Shape } from '../types/levelTypes';
import { shapeSets } from './shapeSets';
import { colorSets } from './colorSets';

export interface LevelAssets {
  shapes: Shape[];
  colors: [string, string];
}

export class AssetManager {
  private static instance: AssetManager;
  private readonly SHAPE_PRIME = 17;
  private readonly COLOR_PRIME = 13;

  private constructor() {}

  public static getInstance(): AssetManager {
    if (!AssetManager.instance) {
      AssetManager.instance = new AssetManager();
    }
    return AssetManager.instance;
  }

  public getLevelAssets(packIndex: number, levelIndex: number): LevelAssets {
    // Shapes: use both pack and level indices to determine the shape set
    //const shapeSetIndex = (packIndex + levelIndex) % shapeSets.length;
    const shapeSetIndex = (packIndex * this.SHAPE_PRIME + levelIndex) % shapeSets.length;

    // Colors: walk first, then formula
    const colorSetIndex = levelIndex < colorSets.length
      ? levelIndex
      : ((packIndex * this.COLOR_PRIME + levelIndex) % colorSets.length + colorSets.length) % colorSets.length;

    const [shape0, shape1] = shapeSets[shapeSetIndex];
    const [color0, color1] = colorSets[colorSetIndex];

    // Create new shape objects with the selected colors
    const coloredShape0: Shape = {
      ...shape0,
      fill: color0
    };

    const coloredShape1: Shape = {
      ...shape1,
      fill: color1
    };

    return {
      shapes: [coloredShape0, coloredShape1],
      colors: [color0, color1]
    };
  }
} 