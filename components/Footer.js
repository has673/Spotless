import Link from "next/link";
import Image from "next/image";

//library
import { Container, Row, Col, Form, Input, Label } from "reactstrap";

//icons
import FeatherIcon from "feather-icons-react";

//images
import americanEx from "../assets/images/payments/american-ex.png";
import discover from "../assets/images/payments/discover.png";
import masterCard from "../assets/images/payments/master-card.png";
import paypal from "../assets/images/payments/paypal.png";
import visa from "../assets/images/payments/visa.png";
import logolight from "../assets/images/logo-light.png";
import logo from "../assets/images/newlogo.png";

const Footer = () => {
  return (
    <footer className="footer footer-border">
      <Container>
        <Row>
          <Col lg="4" xs="12" className="mb-1" name="footercolumn">
            <Link href="#" className="logo-footer">
              <Image width={180} height={100} src={logo} alt="logo" />
            </Link>
            <p className="mt-2">We make IT happen</p>
            <ul className="list-unstyled social-icon social mb-0 mt-2">
              <li className="list-inline-item ml-1">
                <Link
                  href="https://www.facebook.com/softthrive"
                  className="rounded"
                >
                  <FeatherIcon
                    icon="facebook"
                    className="fea icon-sm fea-social"
                  />
                </Link>
              </li>
              <li className="list-inline-item ml-1">
                <Link
                  href="https://www.linkedin.com/company/softthrive"
                  className="rounded"
                >
                  <FeatherIcon
                    icon="linkedin"
                    className="fea icon-sm fea-social"
                  />
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="2" md="4" xs="12" className="mt-4" name="footercolumn">
            <h5 className="text-light footer-head">Company</h5>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <Link href="/about" className="text-foot">
                  <a>
                    <i className="mdi mdi-chevron-right mr-1"></i> About us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foot">
                  <a>
                    <i className="mdi mdi-chevron-right mr-1"></i> Contact us
                  </a>
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="3" md="4" xs="12" className="mt-4" name="footercolumn"></Col>
          <Col lg="3" md="4" xs="12" className="mt-4 " name="footercolumn">
            <h5 className="text-light footer-head">Contact Us</h5>
            <p className="mt-4">
              Share your idea with us and let's get started right now!
            </p>
            <Form>
              <Row>
                <Col lg="12">
                  <div className="foot-subscribe form-group position-relative">
                    <Label className="">Write to us</Label>
                    <i>
                      <div className="position-relative">
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </div>
                    </i>
                    <Input
                      type="email"
                      name="email"
                      id="emailsubscribe"
                      className="form-control pl-5 rounded"
                      placeholder="Your email : "
                      required
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <div className="foot-subscribe form-group position-relative">
                    <i>
                      <div className="position-relative">
                        <FeatherIcon
                          icon="edit"
                          className="fea icon-sm icons"
                        />
                      </div>
                    </i>
                    <Input
                      type="string"
                      name="message"
                      id="message"
                      className="form-control pl-5 rounded"
                      placeholder="Your message"
                      required
                    />
                  </div>
                </Col>
                <Col lg="12">
                  <Input
                    type="submit"
                    id="submitsubscribefooter"
                    name="send"
                    className="btn btn-soft-primary btn-block"
                    readOnly
                    value="Send"
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className="text-center">
        <Row className="align-items-center">
          <Col sm="12">
            <div className="text-sm-center">
              <p className="mb-0">© 2025 Spotless Apps. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
