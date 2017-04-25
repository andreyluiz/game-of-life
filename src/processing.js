// @flow
const World = require('./world');
const isEmpty = require('lodash/isEmpty');

type Rule = {
  is: number,
  has: Array<number>,
  becomes: number,
};

export default (input: Array<Object>, rules: Array<Rule>) => {
  const output = [];

  const world = new World(input);

  for (let row = 0; row < input.length; row += 1) {
    const rowArray = [];

    for (let column = 0; column < input[row].length; column += 1) {
      world.setCell(row, column);

      const status = world.getCellStatus();
      const neighbors = world.getNeighborsCount();
      const matchedRule = rules.find(rule =>
        (rule.is === status && rule.has.includes(neighbors)));

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
