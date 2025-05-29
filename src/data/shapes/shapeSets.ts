export interface ShapeSet {
  id: string;
  name: string;
  colors: {
    shape1: string;
    shape2: string;
  };
  shapes: {
    shape1: string;
    shape2: string;
  };
}

export const shapeSets: ShapeSet[] = [
  {
    id: 'set-1',
    name: 'Circle and Diamond',
    colors: {
      shape1: '#2196F3', // Blue
      shape2: '#FFC107'  // Yellow
    },
    shapes: {
      shape1: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M91.5 50C91.5 72.9198 72.9198 91.5 50 91.5C27.0802 91.5 8.5 72.9198 8.5 50C8.5 27.0802 27.0802 8.5 50 8.5C72.9198 8.5 91.5 27.0802 91.5 50Z" fill="currentColor"></path></svg>`,
      shape2: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 5L95 50L50 95L5 50L50 5Z" fill="currentColor"></path></svg>`
    }
  }
]; 