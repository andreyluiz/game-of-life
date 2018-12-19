class World {
  static ALIVE = 1
  static DEAD = 0

  constructor(source = []) {
    this.source = source;
    this.row = 0;
    this.column = 0;
  }

  setCell(row, column) {
    this.row = row;
    this.column = column;
  }

  getCellStatus() {
    return this.source[this.row][this.column];
  }

  isCellAlive() {
    return this.getCellStatus() === World.ALIVE;
  }

  getTopLeft() {
    if (this.source[this.row - 1] && this.source[this.row - 1][this.column - 1]) {
      return this.source[this.row - 1][this.column - 1];
    }
    return 0;
  }

  getTop() {
    if (this.source[this.row - 1]) {
      return this.source[this.row - 1][this.column];
    }
    return 0;
  }

  getTopRight() {
    if (this.source[this.row - 1] && this.source[this.row - 1][this.column + 1]) {
      return this.source[this.row - 1][this.column + 1];
    }
    return 0;
  }

  getRight() {
    if (this.source[this.row] && this.source[this.row][this.column + 1]) {
      return this.source[this.row][this.column + 1];
    }
    return 0;
  }

  getBottomRight() {
    if (this.source[this.row + 1] && this.source[this.row + 1][this.column + 1]) {
      return this.source[this.row + 1][this.column + 1];
    }
    return 0;
  }

  getBottom() {
    if (this.source[this.row + 1]) {
      return this.source[this.row + 1][this.column];
    }
    return 0;
  }

  getBottomLeft() {
    if (this.source[this.row + 1] && this.source[this.row + 1][this.column - 1]) {
      return this.source[this.row + 1][this.column - 1];
    }
    return 0;
  }

  getLeft() {
    if (this.source[this.row] && this.source[this.row][this.column - 1]) {
      return this.source[this.row][this.column - 1];
    }
    return 0;
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
    return (top + right + bottom + left +
            topLeft + topRight + bottomRight + bottomLeft);
  }
}

export default World;
