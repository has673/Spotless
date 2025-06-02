import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        { image: "/assets/newimages/xd.png" },
        { image: "/assets/newimages/ps.png" },
        { image: "/assets/newimages/figma.png" },
        { image: "/assets/newimages/sketch.png" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="py-4 mt-5">
          <Container>
            <Row
              style={{ minHeight: "150px" }}
              className="justify-content-center"
            >
              {this.state.partners.map((partner, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  key={key}
                  className="text-center py-4"
                >
                  <Image
                    src={partner.image}
                    className="design-logos"
                    layout="intrinsic"
                    width={80}
                    height={80}
                    alt="SoftThrive"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Partners;
