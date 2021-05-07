import React from 'react';
import PropTypes from 'prop-types';
import MessageStyled from './MessageStyled';

const Notification = ({ message }) => <MessageStyled>{message}</MessageStyled>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
