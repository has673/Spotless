// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../landing/SectionTitle";
import SectionTitleLeft from "../landing/SectionTitleLeft";

// Import Images
import Process from "../../assets/newimages/1.png";
import mobileNotificationSVG from "../../assets/images/illustrator/Mobile_notification_SVG.svg";

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            {/* render Section title */}
            <SectionTitle title="Let's Develop Your App" desc=" " />
            <Row className="align-items-center">
              <Col
                lg="7"
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <SectionTitleLeft
                    desc="Spotless Apps has worked with clients across industries such as real estate, law firms, restaurants, retail stores, non-profits, healthcare, education, technology companies, financial institutions, and more. 
                      We work closely with our clients to understand their business goals and objectives, and then we develop an effective strategy to achieve those goals.Our team of experts will contact you, gather the project requirements and do their magic to give you the best possible product."
                    features={this.state.features1}
                    class=""
                  >
                    <h4 className="title mb-4">
                      Share your idea with us and let's get started!
                    </h4>
                  </SectionTitleLeft>
                  <i className="mdi mdi-chevron-right"></i>
                  <Link href="about" className="mt-3 text-primary">
                    Find Out More
                  </Link>
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
                              />
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
                              />
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
                                className="form-control pl-5"
                                placeholder="Subject"
                                required
                              />
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
                                className="form-control pl-5"
                                placeholder="Your Message :"
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                            <input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary btn-block"
                              value="Send Message"
                            />
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
