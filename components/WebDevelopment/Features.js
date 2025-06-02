import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Link from "next/link";

//Import Icons
import * as Unicons from "@iconscout/react-unicons";
import FeatherIcon from "feather-icons-react";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row style={{justifyContent:'space-around'}}>
            <Col lg={4} md={6} xs={12}>
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uim uim-flip-v d-block rounded h3 mb-0">
                  <Unicons.UilLayerGroup size="39" />
                  </i>
                </div>

                <CardBody className="p-0 content mt-3">
                  <h5 className="mt-4">
                    <Link href="#" className="title text-dark">
                      Backend Web
                    </Link>
                  </h5>
                  <p className="text-muted">
                  Development in Node, Express, Django.
                  </p>
                  <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  <Link href="#" className="text-primary">
                    Read More
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-4 pt-sm-0">
              <Card className="border-0 text-center features feature-clean rounded">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uim uim-layer-group d-block rounded h3 mb-0">
                    
                    <Unicons.UilObjectGroup size="39" />
                  </i>
                </div>

                <CardBody className="p-0 content mt-3">
                  <h5 className="mt-4">
                    <Link href="#" className="title text-dark">
                      Frontend Web
                    </Link>
                  </h5>
                  <p className="text-muted">
                   Development in React, Angular
                  </p>
                  <i>
                    <FeatherIcon
                      icon="chevron-right"
                      className="fea icon-sm"
                    />
                  </i>
                  <Link href="#" className="text-primary">
                    Read More  
                  </Link>
                </CardBody>
              </Card>
            </Col>

          
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Features;
