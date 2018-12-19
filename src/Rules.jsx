import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rule, { RulePropType } from './Rule';
import RuleForm from './RuleForm';
import { addRule, removeRule } from './state';

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

const mapStateToProps = state => ({
  rules: state.simulation.rules,
});

export default connect(
  mapStateToProps,
  { removeRule, addRule }
)(Rules);
