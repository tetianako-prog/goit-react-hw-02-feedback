import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="Statistics">
    <li className="item">good: {good}</li>
    <li className="item">neutral: {neutral}</li>
    <li className="item">bad: {bad}</li>
    <li className="item">total: {total}</li>
    <li className="item">positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
