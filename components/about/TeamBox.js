import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class TeamBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.candidates.map((candidate, key) => (
          <Col lg="3" md="6" key={key} className="mt-4 pt-2">
            <Card
              className={
                this.props.isTransparent === true
                  ? "team text-center bg-transparent border-0"
                  : "team text-center rounded border-0"
              }
              name="team"
              id="teambox"
            >
              <CardBody
                className={this.props.isTransparent === true ? "p-0" : ""}
              >
                <div className="position-relative">
                  <Image
                    layout="intrinsic"
                    width={180}
                    height={180}
                    src={candidate.image}
                    className="img-fluid avatar avatar-ex-large rounded-circle shadow"
                    alt="Candidate"
                  />
                  <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                    {candidate.socialIds.map((id, key) => (
                      <li key={key} className="list-inline-item mr-1">
                        <a href={id.link} className="rounded">
                          <i>
                            <FeatherIcon
                              icon={id.icon}
                              className="fea icon-sm fea-social"
                            />
                          </i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={
                    this.props.isTransparent === true
                      ? "content pt-3 pb-3"
                      : "content pt-3"
                  }
                >
                  <h5 className="mb-0">
                    <a
                      href={candidate.link}
                      className="name text-dark"
                      style={{ color: "#000" }}
                    >
                      {candidate.name}
                    </a>
                  </h5>
                  <small className="designation text-muted">
                    {candidate.designation}
                  </small>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default TeamBox;
