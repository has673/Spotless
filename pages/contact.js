// React Basic and Bootstrap
import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images

class PageContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Spotless Apps", link: "/" },
        { id: 2, name: "Contact", link: "#" },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  sendMail() {
    window.location.href = "mailto:sales@softthrive.com";
  }

  callNumber() {
    window.location.href = "tel:+923114388760";
  }

  render() {
    const length = this.state.pathItems.length;
    return (
      <React.Fragment>
        <Head>
          <title>Contact us | Spotless Apps</title>
          <meta
            name="description"
            content="Got a proposal to discuss? Our customer sales service is available 24/7. Contact us by filling the form"
          />
        </Head>
        <section className="bg-half bg-light d-table w-100 background_contact">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <div className="page-next-level">
                  <h1 className="title"> Contact Us</h1>
                  <div className="page-next">
                    <nav className="d-inline-block">
                      <Breadcrumb
                        aria-label="breadcrumb"
                        listClassName="bg-white rounded shadow mb-0"
                      >
                        {this.state.pathItems.map((item, key) =>
                          item.id !== length ? (
                            <BreadcrumbItem key={key}>
                              <Link
                                href={item.link}
                                className="text-uppercase font-weight-bold text-dark mr-1"
                              >
                                {item.name}
                              </Link>
                            </BreadcrumbItem>
                          ) : (
                            <BreadcrumbItem
                              key={key}
                              active
                              aria-current="page"
                            >
                              {item.name}
                            </BreadcrumbItem>
                          )
                        )}
                      </Breadcrumb>
                    </nav>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="introduction">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} className="">
                <h1>
                  <span>Spotless Apps</span> provides agile solutions to evolve
                  your business digitally
                </h1>
                <p style={{ color: "#8492a6" }}>
                  Spotless Apps is a global, full-service digital partner that
                  combines Strategy, Experience & Design, Engineering and
                  Managed Services. We build digital solutions that deliver real
                  impact today and serve as foundations for future growth. We
                  are a team of 25+ talented developers who have been working in
                  the domain of website development since 2015. We have
                  extensive portfolio in this regard. You can find some of our
                  previous works in the portfolio section. Please visit
                  <Link href="/#portfolio">
                    <span style={{ color: "#2a9df4" }}>
                      {" PORTFOLIO SECTION"}
                    </span>
                  </Link>{" "}
                  to view our work that we are so proud of
                </p>
                <p style={{ color: "#8492a6" }}>
                  Our web development team here at Spotless Apps works
                  tirelessly to deliver the product you are looking forward to.
                  Get in touch and let's find out how we can transform your
                  industry together.
                </p>
                <p></p>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Card className="map map-height-two rounded map-gray border-0 w-100 h-100">
                  <CardBody className="p-0 h-100 w-100">
                    <iframe
                      title="test"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.481520851547!2d74.27774721868958!3d31.442658016460772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81d0b13f9953b84c!2sSoftThrive!5e0!3m2!1sen!2s!4v1628161329595!5m2!1sen!2s"
                      className="rounded b-0 h-100 w-100"
                      allowFullScreen=""
                    ></iframe>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <Container>
            <Row>
              <Col lg={12} className="mt-4 pt-2">
                <Card className="rounded border-0">
                  <CardBody className="py-5">
                    <h1 className="card-title">Get In Touch!</h1>
                    <p>
                      To contact us, simply fill out the form. To send us an
                      RFP, RFI or other project specifications, email us at{" "}
                      <span style={{ color: "#2a9df4" }}>
                        <b>sales@softthrive.com</b>
                      </span>
                      .
                    </p>
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
                                Your Name <span className="text-danger">*</span>
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
                                placeholder="First Name :"
                                required
                              />
                            </div>
                          </Col>
                          <Col md={6} sm={12}>
                            <div className="form-group position-relative">
                              <Label>
                                Your Email{" "}
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
                                placeholder="Your email :"
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

          <Container>
            <Row className="mt-100 mt-60">
              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Phone</h4>
                    <p className="text-muted">
                      Start working with Spotless Apps
                    </p>
                    <Link
                      href="#"
                      onClick={this.callNumber}
                      className="text-primary"
                    >
                      +92 311 4388760
                    </Link>
                    <br />
                    <Link
                      href="#"
                      onClick={this.callNumber}
                      className="text-primary"
                    >
                      +92 315 4388760
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Email</h4>
                    <p className="text-muted">
                      Start working with Spotless Apps
                    </p>
                    <Link
                      href="#"
                      onClick={this.sendMail}
                      className="text-primary"
                    >
                      sales@softthrive.com
                    </Link>
                    <br />
                    <Link
                      href="#"
                      onClick={this.sendMail}
                      className="text-primary"
                    >
                      career@softthrive.com
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Location</h4>
                    <p className="text-muted">
                      221 D, PIA Society
                      <br />
                      Lahore, Pakistan.
                    </p>
                    <a
                      href="https://www.google.com/maps?ll=31.442655,74.27997&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=9354171312761976908"
                      className="video-play-icon h6 text-primary"
                    >
                      View on Google map
                    </a>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageContactThree;
