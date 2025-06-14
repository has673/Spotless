import Head from "next/head";
import Image from "next/image";
import React, { Component } from "react";
import CountUp from "react-countup";
import { Col, Container, Row } from "reactstrap";

import SectionTitle from "../components/about/SectionTitle";
import TeamBox from "../components/about/TeamBox";

//Import Images

import WorkProcess from "../components/about/WorkProcess";

export default class PageAboutusTwo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   activeTab: "1",
    //   candidates: [
    //     {
    //       id: 1,
    //       image: team1,
    //       name: "Waiz Shahid",
    //       designation: "C.E.O",
    //       link: "",
    //       socialIds: [
    //         { icon: "facebook", link: "https://www.facebook.com/waiz.shahid/" },
    //         {
    //           icon: "linkedin",
    //           link: "https://linkedin.com/in/waiz-shahid-67476a121",
    //         },
    //         { icon: "github", link: "https://github.com/waizshahid" },
    //         {
    //           icon: "instagram",
    //           link: "https://www.instagram.com/waiz.shahid/",
    //         },
    //       ],
    //     },
    //     {
    //       id: 2,
    //       image: team2,
    //       name: "Waleed Shahid",
    //       designation: "Director",
    //       link: "",
    //       socialIds: [
    //         {
    //           icon: "facebook",
    //           link: "https://www.facebook.com/raowaleed.shahid/",
    //         },
    //         {
    //           icon: "linkedin",
    //           link: "https://www.linkedin.com/in/waleed-shahid-02b0b0198/",
    //         },
    //         { icon: "github", link: "https://github.com/raowaleedshahid" },
    //         {
    //           icon: "instagram",
    //           link: "https://www.instagram.com/raowaleedshahid/",
    //         },
    //       ],
    //     },
    //     {
    //       id: 3,
    //       image: team3,
    //       name: "M Shahrukh Khan",
    //       designation: "Project Manager",
    //       link: "",
    //       socialIds: [
    //         {
    //           icon: "facebook",
    //           link: "https://www.facebook.com/usama.khan.984786/",
    //         },
    //         {
    //           icon: "linkedin",
    //           link: "https://www.linkedin.com/in/shahrukh-khan-6696a8188/",
    //         },
    //         { icon: "github", link: "https://github.com/usama2410" },
    //         {
    //           icon: "instagram",
    //           link: "https://www.instagram.com/m_usamakhan007/",
    //         },
    //       ],
    //     },
    //     {
    //       id: 4,
    //       image: team4,
    //       name: "Muhammad Bin Rashid",
    //       designation: "Marketing Manager",
    //       link: "",
    //       socialIds: [
    //         { icon: "facebook", link: "www.facebook.com/buttmohammad" },
    //         {
    //           icon: "linkedin",
    //           link: "https://www.linkedin.com/in/muhammad-bin-rashid-ab279147/",
    //         },
    //         {
    //           icon: "instagram",
    //           link: "https://www.instagram.com/muhammadbr/",
    //         },
    //       ],
    //     },
    //   ],
    //   partners: [
    //     {
    //       id: 1,
    //       img: amazon,
    //     },
    //     {
    //       id: 2,
    //       img: google,
    //     },
    //     {
    //       id: 3,
    //       img: lenovo,
    //     },
    //     {
    //       id: 4,
    //       img: paypal,
    //     },
    //     {
    //       id: 5,
    //       img: shopify,
    //     },
    //     {
    //       id: 6,
    //       img: spotify,
    //     },
    //   ],
    // };
    this.state = {
      activeTab: "1",
      candidates: [
        {
          id: 1,
          image: "/assets/images/client/Wmoiz.jpg",
          name: " Moiz Umer",
          designation: "Chief Executive Officer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "https://www.facebook.com/waiz.shahid/" },
            {
              icon: "linkedin",
              link: "https://linkedin.com/in/waiz-shahid-67476a121",
            },
            { icon: "github", link: "https://github.com/waizshahid" },
            {
              icon: "instagram",
              link: "https://www.instagram.com/waiz.shahid/",
            },
          ],
        },
        {
          id: 2,
          image: "/assets/images/client/waiz.png",
          name: "Waiz Shahid",
          designation: "Chief Technical Officer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "https://www.facebook.com/waiz.shahid/" },
            {
              icon: "linkedin",
              link: "https://linkedin.com/in/waiz-shahid-67476a121",
            },
            { icon: "github", link: "https://github.com/waizshahid" },
            {
              icon: "instagram",
              link: "https://www.instagram.com/waiz.shahid/",
            },
          ],
        },
        {
          id: 3,
          image: "/assets/images/client/harisarif.jpeg",
          name: "Haris Arif",
          designation: "Chief Operating Officer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "https://www.facebook.com/waiz.shahid/" },
            {
              icon: "linkedin",
              link: "https://linkedin.com/in/waiz-shahid-67476a121",
            },
            { icon: "github", link: "https://github.com/waizshahid" },
            {
              icon: "instagram",
              link: "https://www.instagram.com/waiz.shahid/",
            },
          ],
        },
        {
          id: 4,
          image: "/assets/images/client/cheifmarketing.jpg",
          name: "Philipp Tschochohei",
          designation: "Chief Marketing Officer",
          link: "",
          socialIds: [
            { icon: "facebook", link: "https://www.facebook.com/waiz.shahid/" },
            {
              icon: "linkedin",
              link: "https://linkedin.com/in/waiz-shahid-67476a121",
            },
            { icon: "github", link: "https://github.com/waizshahid" },
            {
              icon: "instagram",
              link: "https://www.instagram.com/waiz.shahid/",
            },
          ],
        },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  componentDidMount() {
    document.body.classList = "";
    document.getElementById("top-menu").classList.add("nav-light");
    document.getElementById("brandLogo").src = "/assets/images/logo-light.png"; // ✅ Correct path
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const brandLogo = document.getElementById("brandLogo");

    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
      brandLogo.src = "/newlogo.png"; // ✅ from public folder
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      brandLogo.src = "/newlogo.png";
    }
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="/newlogo.png" sizes="13" />
          <title>About | Spotless Apps</title>
          <meta
            name="description"
            content="Spotless Apps is a globally recognised digital agency providing solutions for your business in Website, Mobile Applications and other managed Services"
          />
        </Head>
        <section className="bg-half d-table w-100 working">
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level title-heading">
                  <h1 className="text-white title-dark"> About Us </h1>
                  <p className="text-white-50 para-desc mb-0 mx-auto">
                    At Spotless Apps, We make IT happen!
                  </p>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item">
                          <a href="/">Spotless Apps</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          About us
                        </li>
                      </ul>
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
        <section className="section">
          <Container>
            <Row className="align-items-center" id="counter">
              <Col md={6}>
                <Image
                  src="/assets/images/company/about2.png"
                  className="img-fluid"
                  alt="About"
                  layout="intrinsic"
                  width={540}
                  height={540}
                />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ml-lg-4">
                  {/* === Counters Row === */}
                  <div className="d-flex flex-wrap gap-4 mb-4">
                    {/* Years Experience */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={0} end={5} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Years <br /> Experience
                      </span>
                    </div>

                    {/* Projects Completed */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={15} end={40} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Projects <br /> Completed
                      </span>
                    </div>

                    {/* Happy Clients */}
                    <div className="d-flex align-items-center">
                      <span className="text-primary h1 mb-0">
                        <span className="counter-value display-4 font-weight-bold">
                          <CountUp start={10} end={30} duration={3} />
                        </span>
                        +
                      </span>
                      <span className="h6 align-self-end ml-2">
                        Happy <br /> Clients
                      </span>
                    </div>
                  </div>

                  {/* === Who We Are Section === */}
                  <div className="section-title">
                    <h4 className="title mb-4">Who are we?</h4>
                    <p className="text-muted">
                      At{" "}
                      <span className="text-primary font-weight-bold">
                        Spotless Apps
                      </span>
                      , We make IT happen. We are a team of 25+ experienced
                      designers, developers and project managers who can provide
                      everything you need to create a modern Website, Web App,
                      Mobile App and more. We use the latest tech stack like
                      MERN (React.js & Node.js), React Native and Flutter to
                      create our apps. Share your idea with us and let's get
                      started right now!
                    </p>
                    <a href="/contact" className="btn btn-primary mt-3">
                      Contact us
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-light">
          {/* Work process render */}
          <WorkProcess />
        </section>

        {/* <ExperienceTeam /> */}
        <section className="section bg-light">
          <Container>
            {/* Render Section Title */}
            <SectionTitle
              title="Our Greatest Minds"
              desc="Meet our Experienced Team Members."
            />

            <Row>
              {/* teambox */}
              <TeamBox
                candidates={this.state.candidates}
                isTransparent={true}
              />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
