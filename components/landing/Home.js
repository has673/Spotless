//next
import dynamic from "next/dynamic";
import Image from "next/image";
// React basic and bootstrap
import { Component } from "react";
import Typist from "react-typist";

// Import  Images
import { Col, Container, Row } from "reactstrap";

//Import Images
import logo from "../../assets/images/newlogo.png";

import bg_slider_1 from "../../assets/newimages/bg-slider-1.png";
import bg_slider_2 from "../../assets/newimages/bg-slider-2.png";
import bg_slider_3 from "../../assets/newimages/bg-slider-3.png";

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
                        src="/assets/images/newlogo.png"
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
                  src="/assets/newimages/bg-slider-1.png"
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
                  src="/assets/newimages/bg-slider-1.png"
                  alt="Slider_img2"
                  className="slider-bg2"
                  layout="intrinsic"
                  width={797}
                  height={641}
                />
              </div>
              <div className="layer_3">
                <Image
                  src="/assets/newimages/bg-slider-1.png"
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
