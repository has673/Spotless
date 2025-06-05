import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Component } from "react";
//Import Components
import Faq from "../components/WebDevelopment/Faq";

import BackendApp from "../components/AppDevelopment/BackendApp";
import FeaturesApp from "../components/AppDevelopment/FeaturesApp";
import FrontendApp from "../components/AppDevelopment/FrontendApp";
import SectionApp from "../components/AppDevelopment/SectionApp";

class AppDevelopment extends Component {
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
        <link rel="icon" href="/newlogo.png" sizes="13" />
        <Head>App Development | Spotless Apps</Head>

        <SectionApp />

        <section className="section overflow-hidden">
          <FeaturesApp />
        </section>

        <FrontendApp />
        <BackendApp />

        <Faq />
      </React.Fragment>
    );
  }
}

export default AppDevelopment;
