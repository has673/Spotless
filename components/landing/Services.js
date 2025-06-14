import PropTypes from "prop-types";
import React from "react";
import IconBoxData from "./icon-box.json";
import IconBox from "./IconBox";
import SectionTitle from "./SectionTitle";
import Feature from "./Feature";
import { Container } from "reactstrap";

const ServiceIconBox = ({ classOption }) => {
  const features = [
    {
      id: 1,
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Web Design",
      link: "web-design",
      description:
        "We design websites with visual appeal, functional fullness and usability of web apps. Our clients see increased web conversions, better ROI from optimized business operations.",
    },
    {
      id: 2,
      icon: "uil uil-web-section-alt h1 text-primary",
      title: "Website Development",
      link: "web-development",
      description:
        "We take a proactive approach to web development and elaborate on ways to uncover less obvious business requirements, save costs and envisage risks for your project.",
    },
    {
      id: 3,
      icon: "uil uil-mobile-android h1 text-primary",
      title: "Mobile App Development",
      link: "app-development",
      description:
        "We build high-performance mobile apps tailored to your business needs using modern technologies. From idea to deployment, we ensure seamless user experience and scalable architecture.",
    },
    {
      id: 4,
      icon: "uil uil-sliders-v-alt h1 text-primary",
      title: "Admin & Technician Panels",
      link: "contact",
      description:
        "We design and develop powerful admin and technician dashboards with role-based access, real-time insights, and intuitive controls — ensuring efficient management and operations for your apps or platforms.",
    },
  ];
  return (
    <div className={`section1 section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          title="Services"
          subTitle="We provide a wide range of IT services."
        />

        <Container>
          {/* feature box */}
          <Feature featureArray={features} />
        </Container>
      </div>
    </div>
  );
};

ServiceIconBox.propTypes = {
  classOption: PropTypes.string,
};
ServiceIconBox.defaultProps = {
  classOption: "section section-padding-t90-b100",
};

export default ServiceIconBox;
