import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  Badge,
} from "reactstrap";
import Link from "next/link";
import classnames from "classnames";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Import Components
import SectionTitle from "../landing/SectionTitle";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      successMsg: false,
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          {/* render Section title */}
          <SectionTitle
            title="Our Pricing Plans"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row className="justify-content-center">
            <Col xs={12} className="mt-4 pt-2">
              <div className="text-center">
                <Nav
                  pills
                  className="rounded-pill justify-content-center d-inline-block border"
                  id="pills-tab"
                  role="tablist"
                >
                  <NavItem className="d-inline-block">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "1" },
                        "rounded-pill",
                        "monthly",
                        "px-3",
                        "py-2"
                      )}
                      onClick={() => {
                        this.toggleTab("1");
                      }}
                      id="Monthly"
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem className="d-inline-block">
                    <NavLink
                      className={classnames(
                        { active: this.state.activeTab === "2" },
                        "rounded-pill",
                        "yearly",
                        "px-3",
                        "py-2"
                      )}
                      onClick={() => {
                        this.toggleTab("2");
                      }}
                      id="Yearly"
                    >
                      Yearly{" "}
                      <Badge pill color="danger" className="ml-1">
                        10% Off{" "}
                      </Badge>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
            <Col lg={7} md={12} className="text-center">
              <TabContent
                activeTab={this.state.activeTab}
                id="pills-tabContent"
              >
                <TabPane tabId="1">
                  <Row className="align-items-center">
                    <Col md={6} xs={12} className="mt-4 pt-4 pl-md-0 pr-md-0">
                      <Card className="pricing-rates starter-plan text-center shadow rounded border-0">
                        <CardBody className="py-5">
                          <h6 className="title text-uppercase text-primary mb-4">
                            Starter
                          </h6>
                          <div className="d-flex justify-content-center mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">0</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="feature list-unstyled pl-0">
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Full Access
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Source Files
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Free Appointments
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link href="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0"
                    >
                      <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                        <CardBody className=" py-5">
                          <h6 className="title text-uppercase text-primary mb-4">
                            Professional
                          </h6>
                          <div className="d-flex justify-content-center mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">59</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="feature list-unstyled pl-0">
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Full Access
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Source Files
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Free Appointments
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link href="#" className="btn btn-primary mt-4">
                            Try it now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row className="align-items-center">
                    <Col md={6} xs={12} className="mt-4 pt-4 pl-md-0 pr-md-0">
                      <Card className="pricing-rates starter-plan text-center shadow rounded border-0">
                        <CardBody className="py-5">
                          <h6 className="title text-uppercase text-primary mb-4">
                            Starter
                          </h6>
                          <div className="d-flex justify-content-center mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">9</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="feature list-unstyled pl-0">
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Full Access
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Source Files
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Free Appointments
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link href="#" className="btn btn-primary mt-4">
                            Get Started
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col
                      md={6}
                      xs={12}
                      className="mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0"
                    >
                      <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                        <CardBody className="py-5">
                          <h6 className="title text-uppercase text-primary mb-4">
                            Professional
                          </h6>
                          <div className="d-flex justify-content-center mb-4">
                            <span className="h4 mb-0 mt-2">$</span>
                            <span className="price h1 mb-0">49</span>
                            <span className="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul className="feature list-unstyled pl-0">
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Full Access
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Source Files
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Free Appointments
                            </li>
                            <li className="feature-list text-muted">
                              <i>
                                <FeatherIcon
                                  icon="check"
                                  className="fea icon-sm text-success mr-2"
                                />
                              </i>
                              Enhanced Security
                            </li>
                          </ul>
                          <Link href="#" className="btn btn-primary mt-4">
                            Try it now
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Pricing;
