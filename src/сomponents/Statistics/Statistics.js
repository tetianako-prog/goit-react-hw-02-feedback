import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsStyled = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 20px;
  text-transform: capitalize;
`;

const ItemStyled = styled.li`
  margin-bottom: 10px;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsStyled>
    <ItemStyled>good: {good}</ItemStyled>
    <ItemStyled>neutral: {neutral}</ItemStyled>
    <ItemStyled>bad: {bad}</ItemStyled>
    <ItemStyled>total: {total}</ItemStyled>
    <ItemStyled>positive feedback: {positivePercentage}%</ItemStyled>
  </StatisticsStyled>
);

Statistics.propTypes = PropTypes.objectOf(PropTypes.number).isRequired;

export default Statistics;
