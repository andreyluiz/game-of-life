import isEmpty from 'lodash/isEmpty';

export class World {
  constructor(world) {
    this.world = world;
    this.row = 0;
    this.column = 0;
  }

  setCell(row, column) {
    this.row = row;
    this.column = column;
  }

  getCellStatus() {
    return this.world[this.row][this.column];
  }

  isCellAlive() {
    return this.getCellStatus() === World.ALIVE;
  }

  getTopLeft() {
    if (this.world[this.row - 1] && this.world[this.row - 1][this.column - 1]) {
      return this.world[this.row - 1][this.column - 1];
    }
    return 0;
  }

  getTop() {
    if (this.world[this.row - 1]) {
      return this.world[this.row - 1][this.column];
    }
    return 0;
  }

  getTopRight() {
    if (this.world[this.row - 1] && this.world[this.row - 1][this.column + 1]) {
      return this.world[this.row - 1][this.column + 1];
    }
    return 0;
  }

  getRight() {
    if (this.world[this.row] && this.world[this.row][this.column + 1]) {
      return this.world[this.row][this.column + 1];
    }
    return 0;
  }

  getBottomRight() {
    if (this.world[this.row + 1] && this.world[this.row + 1][this.column + 1]) {
      return this.world[this.row + 1][this.column + 1];
    }
    return 0;
  }

  getBottom() {
    if (this.world[this.row + 1]) {
      return this.world[this.row + 1][this.column];
    }
    return 0;
  }

  getBottomLeft() {
    if (this.world[this.row + 1] && this.world[this.row + 1][this.column - 1]) {
      return this.world[this.row + 1][this.column - 1];
    }
    return 0;
  }

  getLeft() {
    if (this.world[this.row] && this.world[this.row][this.column - 1]) {
      return this.world[this.row][this.column - 1];
    }
    return 0;
  }

  getAllNeighbors() {
    return [
      this.getTop(),
      this.getRight(),
      this.getBottom(),
      this.getLeft(),
      this.getTopLeft(),
      this.getTopRight(),
      this.getBottomRight(),
      this.getBottomLeft()
    ];
  }

  getNeighborsCount() {
    const top = this.getTop();
    const right = this.getRight();
    const bottom = this.getBottom();
    const left = this.getLeft();
    const topLeft = this.getTopLeft();
    const topRight = this.getTopRight();
    const bottomRight = this.getBottomRight();
    const bottomLeft = this.getBottomLeft();
    return (
      top +
      right +
      bottom +
      left +
      topLeft +
      topRight +
      bottomRight +
      bottomLeft
    );
  }
}

World.ALIVE = 1;
World.DEAD = 0;

export const nextWorld = (input, rules) => {
  const output = [];

  const world = new World(input);

  for (let row = 0; row < input.length; row += 1) {
    const rowArray = [];

    for (let column = 0; column < input[row].length; column += 1) {
      world.setCell(row, column);

      const status = world.getCellStatus();
      const neighbors = world.getNeighborsCount();
      const matchedRule = rules.find(
        rule => rule.is === status && rule.has.includes(neighbors)
      );

      if (!matchedRule || isEmpty(matchedRule)) {
        rowArray.push(0);
      } else {
        rowArray.push(matchedRule.becomes);
      }
    }

    output.push(rowArray);
  }

  return output;
};

export const initialWorld = {
  cols: 20,
  rows: 20
};

export const buildNewWorld = (rows, cols) => {
  const world = new Array(cols);
  for (var i = 0; i < cols; i++) {
    world[i] = new Array(rows).fill(0);
  }
  return world;
};
