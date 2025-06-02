// React Basic and Bootstrap
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import React, { Component } from "react";
import {
  Alert,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

//Import Components
import { postService } from "../services";
import SectionTitle from "./SectionTitle";
import SectionTitleLeft from "./SectionTitleLeft";

class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Requirment Gathering" },
        { title: "Well-Thought Milestones" },
        { title: "Devlopement" },
        { title: "QA Testing" },
        { title: "Documenting" },
      ],
      features1: [
        { title: "Quick Turn-Around Time" },
        { title: "Money Back Gaurantee" },
        { title: "Quality Work" },
        { title: "24/7 Availability" },
        { title: "100% Customer Satisfaction Guaranteed" },
        { title: "Flexible Timing" },
        { title: "Reasonable Cost" },
      ],
      Contactvisible: false,
      message: {
        name: "",
        email: "",
        subject: "",
        mess: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleSubmit(event) {
    // event.preventDefault();
    // this.setState({ Contactvisible: true });
  }
  emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{3,})$/i;
    if (
      !this.state.message.email ||
      regex.test(this.state.message.email) === false
    ) {
      this.setState({
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  }
  async submitMessage() {
    if (
      this.state.message.email !== "" &&
      this.state.message.name !== "" &&
      this.state.message.subject !== "" &&
      this.state.message.mess !== "" &&
      this.state.error !== "Email is not valid"
    ) {
      const response = await postService(
        "https://softthrive.herokuapp.com/api/contectus",
        this.state.message
      );
      this.setState({ Contactvisible: true });
    } else {
      if (this.state.message.name == "") {
        this.setState({
          requiredName: "Name is required",
        });
      }
      if (this.state.message.subject == "") {
        this.setState({
          requiredSubject: "Subject is required",
        });
      }
      if (this.state.message.mess == "") {
        this.setState({
          requiredDetail: "Detail is required",
        });
      }
      if (this.state.message.email == "") {
        this.setState({
          error: "Email is required",
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light border-bottom">
          <Container>
            {/* render Section title */}
            <SectionTitle title="How We Work?" desc=" " />

            <Row className="align-items-center">
              <Col lg="5" md="6" className="mt-4 pt-2">
                <Image
                  src="/assets/newimages/1.png"
                  layout="intrinsic"
                  width={350}
                  height={320}
                  className="process-image"
                  alt="Process"
                />
              </Col>

              <Col lg="7" md="6" className="mt-4 pt-2">
                <div className="section-title ml-lg-5">
                  <SectionTitleLeft
                    title="Get The best Websites built through our expert team and agile development process"
                    desc="Our developemnt process includes"
                    features={this.state.features}
                    class=""
                  />
                  <a href="about" className="mt-3 text-primary">
                    Find Out More <i className="mdi mdi-chevron-right"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg="7"
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <SectionTitleLeft
                    // desc={textSoftthrive}
                    features={this.state.features1}
                    class=""
                  >
                    <h4 className="title mb-4">
                      Share your idea with us and let's get started!
                    </h4>
                  </SectionTitleLeft>
                  <a href="about" className="mt-3 text-primary">
                    Find Out More <i className="mdi mdi-chevron-right"></i>
                  </a>
                </div>
              </Col>

              <Col lg="5" md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <Card className="rounded bg-light main-contact border-0 mt-5">
                  <CardBody className="py-5">
                    <h4 className="card-title">Get In Touch!</h4>
                    <div className="custom-form mt-4">
                      <div id="message"></div>
                      <Alert
                        color="info"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Contact details sent successfully. Our Team will be with
                        you shortly.
                      </Alert>
                      <Form
                        method="post"
                        onSubmit={this.handleSubmit}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md={6} sm={12}>
                            <div className="form-group position-relative">
                              <Label>
                                Name <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control pl-5"
                                placeholder="Name :"
                                required
                                onBlur={() => {
                                  if (this.state.message.name == "") {
                                    this.setState({
                                      requiredName: "Name is required",
                                    });
                                  } else {
                                    this.setState({
                                      requiredName: "",
                                    });
                                  }
                                }}
                                value={this.state.message.name}
                                onChange={(e) => {
                                  this.setState({
                                    message: {
                                      ...this.state.message,
                                      name: e.target.value,
                                    },
                                  });
                                }}
                              />
                              <span className="text-danger">
                                {this.state?.requiredName}
                              </span>
                            </div>
                          </Col>
                          <Col md={6} sm={12}>
                            <div className="form-group position-relative">
                              <Label>
                                Email <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control pl-5"
                                placeholder="Email :"
                                required
                                value={this.state.message.email}
                                onBlur={() => {
                                  if (this.emailValidation()) {
                                    this.setState({
                                      error: "",
                                    });
                                  }
                                }}
                                onChange={(e) => {
                                  this.setState({
                                    message: {
                                      ...this.state.message,
                                      email: e.target.value,
                                    },
                                  });
                                }}
                              />
                              <span className="text-danger">
                                {this.state?.error}
                              </span>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="form-group position-relative">
                              <Label>Subject </Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="subject"
                                id="subject"
                                type="text"
                                onBlur={() => {
                                  if (this.state.message.subject == "") {
                                    this.setState({
                                      requiredSubject: "Subject is required",
                                    });
                                  } else {
                                    this.setState({
                                      requiredSubject: "",
                                    });
                                  }
                                }}
                                value={this.state.message.subject}
                                className="form-control pl-5"
                                placeholder="Subject"
                                required
                                onChange={(e) =>
                                  this.setState({
                                    message: {
                                      ...this.state.message,
                                      subject: e.target.value,
                                    },
                                  })
                                }
                              />
                              <span className="text-danger">
                                {this.state?.requiredSubject}
                              </span>
                            </div>
                          </Col>
                          <Col md={12}>
                            <div className="form-group position-relative">
                              <Label>Details</Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                value={this.state.message.mess}
                                className="form-control pl-5"
                                placeholder="Your Message :"
                                onBlur={() => {
                                  if (this.state.message.mess == "") {
                                    this.setState({
                                      requiredDetail: "Detail is required",
                                    });
                                  } else {
                                    this.setState({
                                      requiredDetail: "",
                                    });
                                  }
                                }}
                                onChange={(e) =>
                                  this.setState({
                                    message: {
                                      ...this.state.message,
                                      mess: e.target.value,
                                    },
                                  })
                                }
                              ></textarea>
                              <span className="text-danger">
                                {this.state?.requiredDetail}
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                            <div
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary btn-block"
                              value="Send Message"
                              onClick={this.submitMessage}
                            >
                              Send Message
                            </div>
                            <div id="simple-msg"></div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
