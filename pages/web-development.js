import React, { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
//Import Components
import Section from "../components/WebDevelopment/Section";
import Partners from "../components/WebDesign/Partners1";
import Features from "../components/WebDevelopment/Features";
import SmallFeatures from "../components/WebDevelopment/SmallFeatures";
import Services from "../components/WebDevelopment/Services";
import About from "../components/WebDevelopment/About";
import Testimonial from "../components/WebDevelopment/Testimonial";
import Pricing from "../components/WebDevelopment/Pricing";
import Faq from "../components/WebDevelopment/Faq";
import Frontend from "../components/WebDevelopment/Frontend";

const Backend = dynamic(() => import("../components/WebDevelopment/Backend"), {
  ssr: false,
});

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
        <link rel="icon" href="/newlogo.png" sizes="13" />
        <Head>Website Development | Spotless Apps</Head>

        <Section />

        <section className="section overflow-hidden">
          <Features />
        </section>

        <Frontend />
        <Backend />

        <Faq />
      </React.Fragment>
    );
  }
}

export default WebDevelopment;
