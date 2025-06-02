// React Basic and Bootstrap
import Image from "next/image";
import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "./SectionTitle";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 1,
          image: "/assets/images/client/client1.png",
          name: "NESCO - United States",
          desc: "I had no idea where to start with my website but they were patient and walked me through the whole process. The results are amazing.",
        },
        {
          id: 2,
          image: "/assets/images/client/client2.png",
          name: "BEN - United States",
          desc: "Spotless Apps is incredible and very responsive (I’m not sure when they sleep!), I Recommend them to everyone needing Website Services",
        },
        {
          id: 3,
          image: "/assets/images/client/client3.png",
          name: "ANTONY - United States",
          desc: "These guys know their stuff. They strove for the best, and I felt like they are customer obsessed. We will definitely be back for more!",
        },
        {
          id: 4,
          image: "/assets/images/client/client4.png",
          name: "CARLOS FILIPE - Portugal",
          desc: "The team was present all the time. Was available for all type of changes and made all the work in the available time. Totally Recommend this team.",
        },
        {
          id: 5,
          image: "/assets/images/client/client5.png",
          name: "ITSLUCAB - Germany",
          desc: "They were perfect help for my project! They mastered all the difficulties and even managed to do extremely complex animations and functions.",
        },
        {
          id: 6,
          image: "/assets/images/client/client6.png",
          name: "SCHULZ - Germany",
          desc: "Ordered front-end snippet. Product matched the design perfectly, then i ordered the backend and i was suprised to see their great work.",
        },
      ],
      cols: 4,
      step1: true,
      step2: false,
      successMsg: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWindowSize.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ successMsg: true });
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-0">
          {/* section title */}
          <SectionTitle
            title="Our Happy Customers"
            desc=" We take care of our clients and belive in long-term relationship with them. We are proud to have a vast clientel in our portfolio"
          />

          <Row>
            <Col xs="12" className="mt-4">
              <div
                id="customer-testi"
                className="owl-carousel owl-theme owl-loaded owl-drag"
              >
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <Row>
                      {this.state.step1 === true
                        ? this.state.clients.map((client, key) =>
                            key >= 0 && key <= 2 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center review-card m-2">
                                  <CardBody>
                                    <Image
                                      layout="intrinsic"
                                      width={60}
                                      height={60}
                                      src={client.image}
                                      className="img-fluid review-image avatar mx-auto"
                                      alt="Review"
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                    </p>
                                    <h6 className="text-primary">
                                      {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null
                          )
                        : this.state.clients.map((client, key) =>
                            key >= 3 && key <= 5 ? (
                              <Col
                                key={key}
                                md={this.state.cols}
                                className="mb-1"
                              >
                                <Card className="customer-testi text-center review-card m-2">
                                  <CardBody>
                                    <Image
                                      src={client.image}
                                      layout="intrinsic"
                                      width={60}
                                      height={60}
                                      className="img-fluid review-image avatar mx-auto"
                                      alt="Review"
                                    />
                                    <p className="text-muted mt-4">
                                      " {client.desc} "
                                    </p>
                                    <h6 className="text-primary">
                                      {client.name}
                                    </h6>
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null
                          )}
                    </Row>
                  </div>
                </div>
                <div className="custom-owl-dots">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ step1: true, step2: false });
                    }}
                    className={
                      this.state.step1
                        ? "indicator-active"
                        : "indicator-inactive"
                    }
                  ></button>
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({ step1: false, step2: true });
                    }}
                    className={
                      this.state.step2
                        ? "indicator-active"
                        : "indicator-inactive"
                    }
                  ></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
