import Image from "next/image";
import React, { Component } from "react";
import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";
import SectionTitle from "./SectionTitle";
export default class AboutHome extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <SectionTitle title="Who We Are?" desc=" " />
          <Container>
            <Row className="align-items-center" id="counter">
              <Col md={6}>
                <Image
                  src="/assets/images/company/about2.png"
                  className="img-fluid"
                  alt="About"
                  layout="intrinsic"
                  width={540}
                  height={540}
                />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ml-lg-4">
                  {/* === Counters Row === */}
                  <div className="d-flex flex-wrap gap-4 mb-4">
                    {/* Years Experience */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={0} end={5} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Years <br /> Experience
                      </span>
                    </div>

                    {/* Projects Completed */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={15} end={40} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Projects <br /> Completed
                      </span>
                    </div>

                    {/* Happy Clients */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={10} end={30} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Happy <br /> Clients
                      </span>
                    </div>
                  </div>

                  {/* === Who We Are Section === */}
                  <div className="section-title">
                    <h4 className="title mb-4">Who are we?</h4>

                    <a href="/contact" className="btn btn-primary mt-3">
                      More About Us
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
