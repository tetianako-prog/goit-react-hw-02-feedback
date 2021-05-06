import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyled = styled.section`
  margin: 20px;
  padding: 20px;
  .title {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Section = ({ title, children }) => (
  <SectionStyled>
    <h2 className="title">{title}</h2>
    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
