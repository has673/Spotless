import Image from "next/image";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Typist from "react-typist";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="d-table w-100"
          style={{
            background: `url(${"/assets/images/digital/home-bg.png"}) center center`,
            padding: "200px 0",
          }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading mt-4">
                  <h1 className="heading font-weight-bold mt-2 mb-3">
                    We Develop &nbsp;
                    <Typist>
                      <span className="element text-primary">
                        Custom Websites
                      </span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Web Apps</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">Mobile Apps</span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">
                        SAAS Products
                      </span>
                      <Typist.Backspace count={15} delay={400} />
                      <span className="element text-primary">
                        Restaurants Websites
                      </span>
                      <Typist.Backspace count={20} delay={400} />
                      <span className="element text-primary">
                        Real Estate Websites
                      </span>
                      <Typist.Backspace count={21} delay={400} />
                      <span className="element text-primary">
                        Educational Website
                      </span>
                      <Typist.Backspace count={21} delay={400} />
                      <span className="element text-primary">Your Web App</span>
                    </Typist>
                  </h1>
                  <p className="para-desc text-muted">
                    Get your website developed in the Modern stacks like
                    React.js with Django.
                  </p>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Image
                  src="/assets/images/digital/seo.gif"
                  width="540px"
                  height="350px"
                  layout="intrinsic"
                  className="img-fluid"
                  alt="SEO"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
