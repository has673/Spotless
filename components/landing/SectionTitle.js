import PropTypes from 'prop-types'
import React from 'react'

const SectionTitle = ({ title, subTitle, titleOption, headingOption }) => {
  return (
    <div className={`section-title1 ${titleOption}`} data-aos="fade-up">
      <h1
        className={`title ${headingOption} font-weight-bold`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p className="sub-title1">{subTitle}</p>
    </div>
  )
}

SectionTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  titleOption: PropTypes.string,
  headingOption: PropTypes.string,
}
SectionTitle.defaultProps = {
  titleOption: 'text-center',
  headingOption: 'title',
}

export default SectionTitle
