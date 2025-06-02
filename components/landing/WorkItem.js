import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from "next/image"

const WorkItem = ({ portfolio }) => {
  //replace space with hypens for url
  const splitNameByColon = portfolio.title.split(":");
  //console.log(splitName)
  const splitNameBySpace = splitNameByColon[0].split(" ")
  // console.log(splitNameBySpace.length, splitNameBySpace)
  // console.log(splitNameByColon)
 
  
  
  return (
    <div className="single-portfolio">
      <div className="thumbnail-1">
      
        <Image
          className="img-fluid"
          src={`/${portfolio.homeImage}`}
          style={{ borderRadius: '8px' }}
          alt="Portfolio"
          layout="intrinsic"
          width={357}
          height={266}
        />
        {splitNameBySpace.length == 2 &&
          <Link href={`/portfolio/${splitNameBySpace[0].toLowerCase()}-${splitNameBySpace[1].toLowerCase()}`}>
            <div className="overlay-work bg-dark"></div>
          </Link>
        }
        {splitNameBySpace.length == 1 && 
          <Link href={`/portfolio/${splitNameBySpace[0].toLowerCase()}`}>
            <div className="overlay-work bg-dark"></div>
          </Link>} 
      </div>
      <div className="content-1">
        
        {splitNameBySpace.length == 1 &&
        <Link href={`/portfolio/${splitNameBySpace[0].toLowerCase()}`} className="title text-white d-block font-weight-bold">
           {portfolio.title}
        </Link>}
        {splitNameBySpace.length == 2 &&
        <Link href={`/portfolio/${splitNameBySpace[0].toLowerCase()}-${splitNameBySpace[1].toLowerCase()}`} className="title text-white d-block font-weight-bold">
         {portfolio.title}
        </Link>}
          <br/>
        <small className="text-light">{portfolio.categories.map((categories) => {return categories + " "})}</small>
      </div>
      <div className="client-1">
        <small className="text-light user d-block">
          <i className="mdi mdi-account"></i> {portfolio.client}
        </small>
        <small className="text-light date">
          <i className="mdi mdi-calendar-check"></i> {portfolio.date}
        </small>
      </div>
      
    </div>
  )
}

WorkItem.propTypes = {
  portfolio: PropTypes.object,
}

export default WorkItem
