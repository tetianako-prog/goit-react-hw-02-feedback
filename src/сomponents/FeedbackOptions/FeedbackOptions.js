import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <ButtonStyled key={item} name={item} onClick={onLeaveFeedback}>
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
