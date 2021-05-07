import React from 'react';
import PropTypes from 'prop-types';
import SectionStyled from './SectionStyled';

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
