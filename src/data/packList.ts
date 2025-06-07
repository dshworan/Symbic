interface LevelData {
  level: number;
  puzzles: number;
  size: string;
  difficulty: number;
}

interface PackData {
  pack: number;
  levels: LevelData[];
}

const packList: PackData[] = [
  {
    "pack": 1,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "4x4", "difficulty": 1.9 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 2.2 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 2.4 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 2.4 }
    ]
  },
  {
    "pack": 2,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 2.8 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 2.4 }
    ]
  },
  {
    "pack": 3,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 2.7 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 2.4 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 2.4 }
    ]
  },
  {
    "pack": 4,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 2.2 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 2.6 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 3.6 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 5.5 }
    ]
  },
  {
    "pack": 5,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 2.5 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 3.6 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 5.6 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 8.3 }
    ]
  },
  {
    "pack": 6,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 3.3 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 3.6 }
    ]
  },
  {
    "pack": 7,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 3.1 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 5.1 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 7 }
    ]
  },
  {
    "pack": 8,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 2.4 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 2.5 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 3.1 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 3.3 }
    ]
  },
  {
    "pack": 9,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 2.4 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 3.4 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 3.7 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 6.4 }
    ]
  },
  {
    "pack": 10,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 2.1 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 2.3 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 2.4 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 11,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 2.5 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 12,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 2.4 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 2.5 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 13,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 6.4 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 7.1 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 8.5 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 10.2 }
    ]
  },
  {
    "pack": 14,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 6 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 6.1 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 7.1 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 8.8 }
    ]
  },
  {
    "pack": 15,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 6.4 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 6.1 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 6.6 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 7.4 }
    ]
  },
  {
    "pack": 16,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 11.2 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 11.4 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 12.9 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 15.5 }
    ]
  },
  {
    "pack": 17,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 11.3 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 11.5 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 11.8 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 15 }
    ]
  },
  {
    "pack": 18,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 11.1 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 11.4 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 12 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 14.2 }
    ]
  },
  {
    "pack": 19,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 2.2 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 2.3 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 2.5 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 20,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 2.4 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 2.5 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 21,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 2.3 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 2.4 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 2.5 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 2.5 }
    ]
  },
  {
    "pack": 22,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 3.8 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 5.1 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 5.7 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 5.9 }
    ]
  },
  {
    "pack": 23,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 4.4 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 4.4 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 4.7 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 4.7 }
    ]
  },
  {
    "pack": 24,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 4 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 4.9 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 5 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 4.9 }
    ]
  },
  {
    "pack": 25,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 7 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 8.7 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 9.2 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 10.1 }
    ]
  },
  {
    "pack": 26,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 6.1 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 6.4 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 7.5 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 9.5 }
    ]
  },
  {
    "pack": 27,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 6.1 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 7.2 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 8.4 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 10.3 }
    ]
  },
  {
    "pack": 28,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "6x6", "difficulty": 12.2 },
      { "level": 2, "puzzles": 5, "size": "6x6", "difficulty": 15 },
      { "level": 3, "puzzles": 5, "size": "6x6", "difficulty": 17.2 },
      { "level": 4, "puzzles": 5, "size": "6x6", "difficulty": 21.2 }
    ]
  },
  {
    "pack": 29,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "8x8", "difficulty": 11.7 },
      { "level": 2, "puzzles": 5, "size": "8x8", "difficulty": 12.8 },
      { "level": 3, "puzzles": 5, "size": "8x8", "difficulty": 14.1 },
      { "level": 4, "puzzles": 5, "size": "8x8", "difficulty": 17.1 }
    ]
  },
  {
    "pack": 30,
    "levels": [
      { "level": 1, "puzzles": 5, "size": "10x10", "difficulty": 11.4 },
      { "level": 2, "puzzles": 5, "size": "10x10", "difficulty": 12.3 },
      { "level": 3, "puzzles": 5, "size": "10x10", "difficulty": 13.3 },
      { "level": 4, "puzzles": 5, "size": "10x10", "difficulty": 15.3 }
    ]
  }
];

export default packList;