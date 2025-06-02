//next
import Image from "next/image"
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

//Import Icons
import FeatherIcon from "feather-icons-react";

import workData from "../../components/landing/workDetails.json";

class cafeGitana extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Contactvisible: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ Contactvisible: true });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        window.scrollTo(0, 0)
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

    render() {
        return (
            <React.Fragment>
                {/* breadcrumb */}
                {/* <PageBreadcrumb pathItems={this.state.pathItems}> */}
                <h3 className="title-detail"> Cafe Gitana: Restraunt Website </h3>
                <ul className="list">
                    <li className="list-inline-item h6 user text-muted">
                        {" "}
                        <span className="text-dark">Client:</span> Victor
                    </li>
                    <li className="list-inline-item h6 date text-muted ml-2">
                        {" "}
                        <span className="text-dark">Date:</span>18 Aug 2021
                    </li>
                </ul>
                {/* </PageBreadcrumb> */}

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


        
                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} className="text-center">
                                <Image src={'/portfolio/cafe-gitana/landing.jpg'} layout="intrinsic" width={1110} height={3858} className="img-fluid rounded" alt="Portfolio" />
                            </Col>

                            <Col md={10} className="mt-4 pt-2">
                                <div className="bg-light rounded p-4">
                                    {
                                        <p className="text-muted font-italic mb-0">
                                            Restaurant Website for Cafe Gitana located in Montreal, QC, Canada. Website features a very modern and attractive design with all the menu displayed. Users can also order through the website and checkout using online payment methods..
                                        </p>
                                    }
                                </div>
                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <Image src={"/portfolio/cafe-gitana/1.jpg"} layout="intrinsic" width={445} height={300} className="img-fluid rounded" alt="Portfolio" />
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <Image src={"/portfolio/cafe-gitana/2.jpg"} layout="intrinsic" width={445} height={300} className="img-fluid rounded" alt="Portfolio" />
                                    </Col>
                                </Row>

                                <div className="bg-light rounded p-4 mt-4 pt-2">
                                    <h5 className="card-title border-bottom pb-3 mb-3">
                                        Features :
                                    </h5>

                                    <ul className="list-unstyled feature-list text-muted mt-2">
                                    
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Admin Panel
                                        </li>
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Professional and Attractive Design
                                        </li>
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Flexible Menu
                                        </li>
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Cart
                                        </li>
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Online Payment
                                        </li>
                                        <li className="list-item features-list  mt-2">
                                            <i>
                                                <FeatherIcon
                                                icon="check-circle"
                                                className="fea icon-sm text-success mr-1 ml-3"
                                                />
                                            </i>
                                            Free Live Demo
                                        </li>
                                    </ul>
                                </div>

                                <Row className="align-items-center">
                                    <Col md={6} className="mt-4 pt-2">
                                        <Card className="work-details rounded bg-light border-0">
                                            <CardBody>
                                                <h5 className="card-title border-bottom pb-3 mb-3">
                                                Project Info :
                                                </h5>
                                                <dl className="row mb-0">
                                                    <dt className="col-md-4 col-5">Client :</dt>
                                                    <dd className="col-md-8 col-7 text-muted">
                                                        Ben Perlmutter
                                                    </dd>

                                                    <dt className="col-md-4 col-5">Category :</dt>
                                                    <dd className="col-md-8 col-7 text-muted">
                                                        {"Website, Food"}
                                                    </dd>

                                                    <dt className="col-md-4 col-5">Date :</dt>
                                                    <dd className="col-md-8 col-7 text-muted">
                                                        18 Aug 2021
                                                    </dd>
                                                </dl>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <Image src={"/portfolio/portfolio-3.jpg"} layout="intrinsic" width={445} height={333} className="img-fluid rounded" alt="Portfolio" />
                                    </Col>
                                </Row>

                                {/* comments */}
                                {/* <CommentsBox comments={this.state.comments} /> */}


                                <Card className="rounded bg-light border-0 mt-5">
                                    <CardBody className="py-5">
                                        <h4 className="card-title">Like what you see? Get In Touch!</h4>
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
export default cafeGitana;
