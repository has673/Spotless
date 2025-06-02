import React, { Component } from "react";
import Head from "next/head";
//Import Components
import Section from "../components/WebDesign/Section";
import Responsive from "../components/WebDesign/Responsive";
import Faq from "../components/WebDesign/Faq";

class WebDevelopment extends Component {
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
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
        <Head>
          <link rel="icon" href="/newlogo.png" type="image/png" />
          <title>Website Design | Spotless Apps</title>
          <meta
            name="description"
            content="Spotless Apps offers you to convert your idea into a stunning, beautiful UI/UX design with your preferred color scheme."
          />
        </Head>

        <Section />

        <section className="section overflow-hidden">
          <Responsive />
        </section>

        <section>
          <Faq />
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WebDevelopment;
