import React from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = ({ message }) => <p className="message">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
