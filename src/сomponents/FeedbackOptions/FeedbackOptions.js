import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  background-color: #3f51b5;
  color: #fff;
  margin-right: 20px;
  width: 70px;
  padding: 6px;
  border-radius: 5px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <ButtonStyled key={item} onClick={() => onLeaveFeedback(item)}>
          {item}
        </ButtonStyled>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
