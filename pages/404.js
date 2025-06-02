// React Basic and Bootstrap
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import img404 from "../assets/images/404.png";

class PageError extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="back-to-home rounded d-none d-sm-block">
          <a href="/" className="btn btn-icon btn-soft-primary">
            <i>
              <FeatherIcon icon="home" className="icons" />
            </i>
          </a>
        </div>

        <section className="bg-home d-flex align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} md={12} className="text-center">
                <Image
                  layout="intrinsic"
                  width={420}
                  height={204}
                  src={img404}
                  className="img-fluid"
                  alt="Error 404"
                />
                <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                <div className="text-capitalize mb-4 error-page">
                  Page Not Found
                </div>
                <p className="text-muted para-desc mx-auto">
                  Start working with{" "}
                  <span className="text-primary font-weight-bold">
                    Spotless Apps
                  </span>{" "}
                  that can provide everything you need to boost your business,
                  drive traffic, connect.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md="12" className="text-center">
                <a
                  href="/"
                  //   onClick={this.props.history.goBack}
                  className="btn btn-outline-primary mt-4 mr-1 error-btn"
                >
                  Go Back
                </a>
                <a
                  href="/"
                  className="btn btn-primary mt-4 ml-2 error-btn mx-3"
                >
                  Go To Home
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageError;
