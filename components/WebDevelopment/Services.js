import React, { Component } from "react";
import Image from "next/link";
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
        <Container className="mt-100 mt-60">
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
                      <h4 className="title font-weight-bold">
                        Management Tools
                      </h4>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
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
                      <h4 className="title font-weight-bold">
                        Increase Effectiveness
                      </h4>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
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
                      <h4 className="title font-weight-bold">Data Analysis</h4>
                      <p className="text-muted tab-para mb-0">
                        Dummy text is text that is used in the publishing
                        industry or by web designers to occupy the space which
                        will later be filled with 'real' content.
                      </p>
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
                      src="/assets/images/digital/1.png"
                      className="img-fluid mx-auto d-block"
                      layout="intrinsic"
                      alt="digital"
                    />
                  </TabPane>

                  <TabPane tabId="2">
                    <Image
                      src="/assets/images/digital/2.png"
                      className="img-fluid mx-auto d-block"
                      layout="intrinsic"
                      alt="digital"
                    />
                  </TabPane>

                  <TabPane tabId="3">
                    <Image
                      src="/assets/images/digital/3.png"
                      className="img-fluid mx-auto d-block"
                      layout="intrinsic"
                      alt="digital"
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
