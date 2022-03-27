export const HEXAGON_SHAPE = "SHAPES@HEXAGON_SHAPE";

const shapes = [HEXAGON_SHAPE];

let currentShapeIndex = -1;
export function getNextShape() {
  currentShapeIndex += 1;
  if (currentShapeIndex >= shapes.length) {
    currentShapeIndex = 0;
  }

  return shapes[currentShapeIndex];
}

export function getShapeCssMask(shape) {
  switch (shape) {
    case HEXAGON_SHAPE: {
      return "polygon(100% 50%, 75% 93%, 25% 93%, 0% 50%, 25% 7%, 75% 7%)";
    }

    default: {
      throw new Error("Wrong shape");
    }
  }
}
