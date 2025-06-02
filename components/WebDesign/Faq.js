// React Basic and Bootstrap
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../landing/SectionTitle";
import SectionTitleLeft from "../landing/SectionTitleLeft";


class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        { title: "Requirment Gathering" },
        { title: "Adobe XD" },
        { title: "Figma" },
        { title: "Zeplin" },
        { title: "Documenting" },
      ],
      features1: [
        { title: "Wireframing" },
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
        <section className="section bg-light border-bottom">
          <Container>
            {/* render Section title */}
            <SectionTitle
              title="Let's Design Your App"
              desc=" "
            />
            <Row className="align-items-center">
              <Col
                lg="7"
                md={{ size: 6, order: 1 }}
                xs={{ order: 2 }}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0"
              >
                <div className="section-title">
                  <SectionTitleLeft
                    desc="With more than 50% of the Internet’s traffic coming from mobile users, it’s imperative to provide support for users on-the-go. It’s also best practice for SEO, as Google now follows a mobile-first index, meaning it crawls and views websites from the perspective of a mobile user, not a desktop user. If your website doesn’t support mobile users, Google sees that — and modifies your ranking in search results. That can lead to a lower ranking, pushing your site to page two of search results and away from your target audience. With our responsive design option, we prevent that from happening to your business."
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
                        Contact details sent successfully. Our Team will be with you shortly.
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
                                Email{" "}
                                <span className="text-danger">*</span>
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
