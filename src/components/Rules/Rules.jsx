import React from 'react';
import PropTypes from 'prop-types';
import Rule, { RulePropType } from '../Rule/Rule';
import RuleForm from '../Rule/RuleForm';

const Rules = ({ rules, addRule, removeRule }) => (
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

Rules.propTypes = {
  rules: PropTypes.arrayOf(RulePropType).isRequired,
  addRule: PropTypes.func.isRequired,
  removeRule: PropTypes.func.isRequired,
};

export default Rules;
