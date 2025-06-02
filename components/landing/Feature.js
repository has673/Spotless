// React Basic and Bootstrap
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from 'next/link'

import UilReact from '@iconscout/react-unicons/icons/uil-react'


class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row className="w-100 " style={{justifyContent:'space-evenly'}}>
          {/* <Col md={10} xs={12}> */}
            {this.props.featureArray.map((feat, i) => {
              return (
                <Col className={""} md={5} xs={12} key={i} name="featurebox">
                  <Link href={`/${feat.link}`}>
                    <div className={"text-center features mt-4 service-box"}>
                      <div className="image position-relative d-inline-block">
                        <i className={feat.icon}></i>
                      </div>
                      <div className="content mt-4">
                        <h5 className="title-2">{feat.title}</h5>
                        <p className="text-muted mb-0">{feat.description} </p>
                        <Link href={feat.link} className="link mt-4 link-text">Learn More</Link>
                      </div>
                    </div>
                  </Link>              
                </Col>
              );
            })}
          {/* </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}

export default Feature;
