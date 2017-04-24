// @flow
const World = require('./world');

export default (input: Array<Object>) => {
  const output = [];

  const world = new World(input);

  for (let row = 0; row < input.length; row += 1) {
    const rowArray = [];

    for (let column = 0; column < input[row].length; column += 1) {
      world.setCell(row, column);

      if (world.isCellAlive() &&
         (world.getNeighborsCount() === 2 || world.getNeighborsCount() === 3)) {
        rowArray.push(World.ALIVE);
      } else if (!world.isCellAlive() && world.getNeighborsCount() === 3) {
        rowArray.push(World.ALIVE);
      } else {
        rowArray.push(World.DEAD);
      }
    }

    output.push(rowArray);
  }

  return output;
};
