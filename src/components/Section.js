import React from 'react';
import './Section.scss';

const Section = ({ title, children }) => (
  <section className="Section">
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

export default Section;
