import React from 'react';
import { Flex, Box } from 'rebass';
import World from '../World';
import Controls from '../Controls';
import Rules from '../Rules';
import { nextWorld, initialWorld, buildNewWorld } from '../../lib/world';

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2);

const defaultRules = [
  {
    id: generateId(),
    is: 1,
    has: [2, 3],
    becomes: 1,
  },
  {
    id: generateId(),
    is: 0,
    has: [3],
    becomes: 1,
  },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

class Simulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      step: 0,
      rows: initialWorld.rows,
      cols: initialWorld.cols,
      speed: 500,
      world: buildNewWorld(initialWorld.rows, initialWorld.cols),
      rules: defaultRules,
    };
  }

  start = () => {
    this.setState({ started: true }, this.step);
  };

  stop = () => {
    this.setState({ started: false });
  };

  clear = () => {
    const { rows, cols } = this.state;
    this.setState({ world: buildNewWorld(rows, cols) });
  };

  step = async () => {
    if (this.state.started) {
      requestAnimationFrame(() => {
        this.setState(({ step, world, rules }) => ({
          step: step + 1,
          world: nextWorld(world, rules),
        }));
      });
      await sleep(1000 - this.state.speed);
      this.step();
    }
  };

  updateWorldSize = (rows, cols) => {
    this.setState({ rows, cols, world: buildNewWorld(rows, cols) });
  };

  updateSpeed = speed => {
    this.setState({ speed });
  };

  addRule = newRule => {
    this.setState(({ rules }) => ({
      rules: [
        ...rules,
        {
          id: generateId(),
          is: parseInt(newRule.is, 10),
          has: newRule.has.filter(n => n).map(n => parseInt(n, 10)),
          becomes: parseInt(newRule.becomes, 10),
        },
      ],
    }));
  };

  removeRule = id => {
    this.setState(({ rules }) => ({
      rules: rules.filter(r => r.id !== id),
    }));
  };

  toggleCell = (row, col) => {
    const { world } = this.state;
    const currentValue = world[row][col];
    const newValue = 1 - currentValue;
    world[row].splice(col, 1, newValue);
    this.setState({ world });
  };

  applyTemplate = world => {
    this.setState({ world });
  };

  render() {
    const { started, step, rows, cols, speed, rules, world } = this.state;
    return (
      <Flex m={12}>
        <Box width={200} mr={12}>
          <Controls
            onStart={this.start}
            onStop={this.stop}
            onClear={this.clear}
            onUpdateWorldSize={this.updateWorldSize}
            onUpdateSpeed={this.updateSpeed}
            onApplyTemplate={this.applyTemplate}
            started={started}
            step={step}
            rows={rows}
            cols={cols}
            speed={speed}
          />
        </Box>
        <Box>
          <Box mb={12}>
            <Rules
              rules={rules}
              onAddRule={this.addRule}
              onRemoveRule={this.removeRule}
            />
          </Box>
          <Box>
            <World world={world} onToggleCell={this.toggleCell} />
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default Simulator;
