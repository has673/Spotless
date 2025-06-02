import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image"
//Import Images
import img1 from "../../assets/newimages/xd.png";
import img2 from "../../assets/newimages/ps.png";
import img3 from "../../assets/newimages/figma.png";
import img4 from "../../assets/newimages/sketch.png";


class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="py-4 mt-5">
          <Container>
            <Row style={{minHeight:'150px'}} className="justify-content-center">
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
