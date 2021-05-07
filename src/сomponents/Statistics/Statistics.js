import React from 'react';
import PropTypes from 'prop-types';
import ItemStyled from './ItemStyled';
import StatisticsStyled from './StatisticsStyled';

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
