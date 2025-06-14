import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
//Import Icons
import FeatherIcon from "feather-icons-react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col
              lg={6}
              md={{ size: 6, order: 1 }}
              xs={{ size: 12, order: 2 }}
              className="mt-4 mt-sm-0 pt-2 pt-sm-0"
            >
              <Image src="/assets/images/illustrator/app.svg" alt="about" />
            </Col>

            <Col lg={6} md={{ size: 6, order: 2 }} xs={{ size: 12, order: 2 }}>
              <div className="section-title">
                <h4 className="title mb-4">
                  A marketing agency that <br /> helps you succeed
                </h4>
                <p className="text-muted">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                  If the distribution of letters visual impact.
                </p>
                <i>
                  <FeatherIcon icon="arrow-right" className="fea icon-sm" />
                </i>
                <Link href="#" className="btn btn-primary">
                  Find More{" "}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;
