import React from "react";
import PropTypes from 'prop-types'; 

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  
};