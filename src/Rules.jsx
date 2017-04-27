// @flow
import React from 'react';
import { connect } from 'react-redux';
import Rule from './Rule';
import RuleForm from './RuleForm';
import { addRule, removeRule } from './state';
import type { $Rule } from './Rule';

type Props = {
  rules: Array<$Rule>,
  addRule: Function,
  removeRule: Function,
};

const Rules = ({
  rules,
  addRule,
  removeRule,
}: Props) => (
  <div className="rules">
    <div className="ruleset">
      {rules.map(rule => (
        <Rule key={rule.id} {...rule} onDelete={removeRule} />
      ))}
    </div>
    <div className="add">
      <RuleForm onSubmit={addRule} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  rules: state.simulation.rules,
});

export default connect(mapStateToProps, { removeRule, addRule })(Rules);
