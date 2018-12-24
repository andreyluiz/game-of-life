import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rule, { RulePropType } from '../Rule/Rule';
import RuleForm from '../Rule/RuleForm';

const Header = styled.th`
  text-align: left;
`;

const Rules = ({ rules, onAddRule, onRemoveRule }) => (
  <table>
    <thead>
      <tr>
        <Header>Is</Header>
        <Header>Has</Header>
        <Header>Becomes</Header>
      </tr>
    </thead>
    <tbody>
      {rules.map(rule => (
        <Rule key={rule.id} {...rule} onDelete={onRemoveRule} />
      ))}
      <RuleForm onSubmit={onAddRule} />
    </tbody>
  </table>
);

Rules.propTypes = {
  rules: PropTypes.arrayOf(RulePropType).isRequired,
  onAddRule: PropTypes.func.isRequired,
  onRemoveRule: PropTypes.func.isRequired,
};

export default Rules;
