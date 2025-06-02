import PropTypes from "prop-types";
import React from "react";

const SectionTitleTwo = ({ subTitle, title, classOption }) => {
  return (
    <div className={`section-title-two ${classOption}`} data-aos="fade-up">
      <h5 className="sub-title">{subTitle}</h5>
      <h1 style={{fontSize:'30px', fontWeight: 600}} className="title" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

SectionTitleTwo.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  classOption: PropTypes.string,
};
SectionTitleTwo.defaultProps = {
  classOption: "section-title-two",
};

export default SectionTitleTwo;
