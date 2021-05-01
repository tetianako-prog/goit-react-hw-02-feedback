import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageStyled = styled.p`
  font-size: 26px;
`;
const Notification = ({ message }) => <MessageStyled>{message}</MessageStyled>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
