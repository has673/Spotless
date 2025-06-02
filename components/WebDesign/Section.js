import Image from "next/image";
import React, { Component } from "react";
import { Alert, Col, Container, Row } from "reactstrap";
import Typist from "react-typist";
import Partners from "./Partners1";

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
          className="mt-100 d-table w-100"
          style={{
            background: `url(${"/assets/images/digital/home-bg.png"}) center center`,
          }}
          id="home"
        >
          <Container>
            <Row className="align-items-center">
              <Col lg={6} md={6}>
                <div className="title-heading">
                  <Alert
                    color="light"
                    className="alert-pills shadow"
                    role="alert"
                  >
                    <span className="content">
                      {" "}
                      We Design <span className="text-primary">
                        anything
                      </span>{" "}
                      you want - Spotless Apps.
                    </span>
                  </Alert>
                  <h1 className="heading font-weight-bold mt-2 mb-3">
                    We Design &nbsp;
                    <Typist>
                      <span className="element text-primary">Websites</span>
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
                    Spotless Apps offers you to convert your idea into a
                    stunning, beautiful UI/UX design with your preferred color
                    scheme. it’s essential that your website captures your
                    brand, which is why our web design services include
                    unlimited style options.
                  </p>
                  <p className="para-desc text-muted">
                    If your company requires a sophisticated design that
                    emphasizes the quality and price range of your products, our
                    team can achieve that for you. Share your idea with us and
                    let's get started right now!
                  </p>
                </div>
              </Col>

              <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <Image
                  src="/assets/newimages/webdesign.png"
                  className="img-fluid"
                  layout="intrinsic"
                  width={540}
                  height={532}
                  alt="Web Design"
                />
              </Col>
            </Row>
          </Container>
          <Partners />
          {/* <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="99025203"
            onClose={() => this.setState({ isOpen: false })}
          /> */}
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
