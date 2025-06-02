//next
import Image from "next/image";
import dynamic from "next/dynamic";
// React basic and bootstrap
import React, { Component } from "react";
import Typist from "react-typist";

// Import  Images
import rocket from "../../assets/images/home/rocket.svg";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

//Import Images
import bootstrap2 from "../../assets/images/hero/bootstrap2.png";
import scss2 from "../../assets/images/hero/scss2.png";
import html2 from "../../assets/images/hero/html2.png";
import css2 from "../../assets/images/hero/css2.png";
import w3c2 from "../../assets/images/hero/w3c2.png";
import ui2 from "../../assets/images/hero/ui2.png";
import logo_dark from "../../assets/images/logo-dark.png";
import logo from "../../assets/images/newlogo.png";

import bg_slider_1 from "../../assets/newimages/bg-slider-1.png";
import bg_slider_2 from "../../assets/newimages/bg-slider-2.png";
import bg_slider_3 from "../../assets/newimages/bg-slider-3.png";
import bg_slider_4 from "../../assets/newimages/bg-slider-4.png";
import bg_slider_5 from "../../assets/newimages/bg-slider-5.png";
import bg_slider_6 from "../../assets/newimages/bg-slider-6.png";

import * as $ from "jquery";

const ScrollspyNav = dynamic(() => import("./Scrollspynav"), { ssr: false });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $(document).ready(function () {
      $(document).mousemove(function (e) {
        $(".layer_1").animate(
          {
            left: e.pageX / 50 + 301 + "px",
          },
          0
        );

        $(".layer_2").animate(
          {
            left: e.pageX / 50 + 456 + "px",
          },
          0
        );

        $(".layer_3").animate(
          {
            left: e.pageX / 50 + 918 + "px",
          },
          0
        );
      });
    });
  }

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <section
          className="home-wrapper d-table w-100"
          id="home"
          style={{ paddingTop: "130px", paddingBottom: "220px" }}
        >
          <div className="home-itms-contaner">
            <div>
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={6}>
                    <div className="title-heading">
                      <Image
                        src={logo}
                        alt="section_logo"
                        width={300}
                        height={200}
                      />
                      <h1 className="heading font-weight-bold mt-4 mb-3">
                        Let's Build &nbsp;
                        <Typist>
                          <span className="element text-primary">Websites</span>
                          <Typist.Backspace count={15} delay={400} />
                          <span className="element text-primary">
                            Healthcare Platforms
                          </span>
                          <Typist.Backspace count={21} delay={400} />
                          <span className="element text-primary">
                            Mobile Apps
                          </span>
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
                          <span className="element text-primary">
                            Ecommerce Websites
                          </span>
                          <Typist.Backspace count={21} delay={400} />
                          <span className="element text-primary">
                            Your Custom Web App
                          </span>
                        </Typist>
                      </h1>
                      <p className="para-desc text-muted">
                        Spotless Apps is a global, full service digital partner
                        specialising in Website Design, Development, Strategy
                        and Managed Services. Share your idea with us and let's
                        get started right now!{" "}
                      </p>

                      <div className="mt-4 pt-2">
                        <a
                          href="contact"
                          className="btn btn-primary rounded mouse-down mr-2 mb-2 px-4 py-2"
                        >
                          Contact us
                        </a>
                        <a
                          href="#portfolio"
                          className="btn btn-outline-primary rounded ml-1 mb-2 px-4 py-2 mx-2"
                        >
                          Portfolio
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="layers-dv position-relative">
              <div className="layer_1">
                <Image
                  src={bg_slider_1}
                  alt="Slider_img1"
                  className="slider-bg1"
                  layout="intrinsic"
                  width={237}
                  height={280}
                  sizes="100vw"
                />
              </div>
              <div className="layer_2">
                <Image
                  src={bg_slider_2}
                  alt="Slider_img2"
                  className="slider-bg2"
                  layout="intrinsic"
                  width={797}
                  height={641}
                />
              </div>
              <div className="layer_3">
                <Image
                  src={bg_slider_3}
                  alt="Slide_img3"
                  className="slider-bg3"
                  layout="intrinsic"
                  width={493}
                  height={397}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
