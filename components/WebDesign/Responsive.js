import React, { Component } from "react";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import SectionTitle from "../landing/SectionTitle";

class Services extends Component {
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
        <Container className="mt-100 mt-4">
          <SectionTitle
            title="Fully Responsive Design"
            desc="Our website designing services also offer the option of responsive design. However, we recommend responsive design because it supports mobile users, which can consist of shoppers using their tablet or smartphone to browse the web."
          />
          <Row className="align-items-center">
            <Col md={5}>
              <Nav
                pills
                justified
                className="flex-column rounded"
                id="pills-tab"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "1" },
                      "rounded"
                    )}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                    id="pills-cloud-tab"
                  >
                    <div className="p-3 text-left">
                      <h4 className="font-weight-bold" style={{ color: "fff" }}>
                        Desktop View
                      </h4>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "2" },
                      "rounded",
                      "border-top"
                    )}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                    id="pills-smart-tab"
                  >
                    <div className="p-3 text-left">
                      <h4
                        style={{ color: "fff" }}
                        className="nav-title font-weight-bold"
                      >
                        Tablet View
                      </h4>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={classnames(
                      { active: this.state.activeTab === "3" },
                      "rounded",
                      "border-top"
                    )}
                    onClick={() => {
                      this.toggleTab("3");
                    }}
                    id="pills-apps-tab"
                  >
                    <div className="p-3 text-left">
                      <h4
                        style={{ color: "fff" }}
                        className="nav-title font-weight-bold"
                      >
                        Mobile View
                      </h4>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col md={7} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="saas-feature-shape-right position-relative">
                <TabContent
                  activeTab={this.state.activeTab}
                  className="ml-lg-4"
                  id="pills-tabContent"
                >
                  <TabPane tabId="1">
                    <Image
                      src="/assets/newimages/responsive/desktop.png"
                      className="img-fluid mx-auto d-block"
                      alt="desktop"
                      layout="intrinsic"
                      width={611}
                      height={458}
                    />
                  </TabPane>

                  <TabPane tabId="2">
                    <Image
                      src="/assets/newimages/responsive/tablet.png"
                      className="img-fluid mx-auto d-block"
                      alt="tablet"
                      layout="intrinsic"
                      width={611}
                      height={475}
                    />
                  </TabPane>

                  <TabPane tabId="3">
                    <Image
                      src="/assets/newimages/responsive/mobile.png"
                      className="img-fluid mx-auto d-block"
                      alt="mobile"
                      layout="intrinsic"
                      width={611}
                      height={475}
                    />
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Services;
