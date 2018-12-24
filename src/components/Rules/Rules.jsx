import React from 'react';
import PropTypes from 'prop-types';
import Rule, { RulePropType } from '../Rule/Rule';
import RuleForm from '../Rule/RuleForm';

const Rules = ({ rules, onAddRule, onRemoveRule }) => (
  <div className="rules">
    <div className="ruleset">
      {rules.map(rule => (
        <Rule key={rule.id} {...rule} onDelete={onRemoveRule} />
      ))}
    </div>
    <div className="add">
      <RuleForm onSubmit={onAddRule} />
    </div>
  </div>
);

Rules.propTypes = {
  rules: PropTypes.arrayOf(RulePropType).isRequired,
  onAddRule: PropTypes.func.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
};

export default Rules;
