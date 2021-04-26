import React from 'react';
import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="Statistics">
    <li className="item">
      <span>good: </span>
      <span>{good}</span>
    </li>
    <li className="item">
      <span>neutral: </span>
      <span>{neutral}</span>
    </li>
    <li className="item">
      <span>bad: </span>
      <span>{bad}</span>
    </li>
    <li className="item">
      <span>total: </span>
      <span>{total}</span>
    </li>
    <li className="item">
      <span>positive feedback: </span>
      <span>{positivePercentage}%</span>
    </li>
  </ul>
);

export default Statistics;
