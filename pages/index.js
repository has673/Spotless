//next
import dynamic from "next/dynamic";
// React basic and bootstrap
import React, { Component, Suspense, useEffect } from "react";
import Head from "next/head";
// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from "feather-icons-react";

import { Row } from "reactstrap";

// Import sub components

import Asset190 from "../assets/images/illustrator/Asset190.svg";
import Asset189 from "../assets/images/illustrator/Asset189.svg";
import Asset192 from "../assets/images/illustrator/Asset192.svg";
import Asset187 from "../assets/images/illustrator/Asset187.svg";

const Home = dynamic(() => import("../components/landing/Home"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("../components/landing/Portfolio"), {
  ssr: false,
});
const Services = dynamic(() => import("../components/landing/Services"), {
  ssr: false,
});
const Reviews = dynamic(() => import("../components/landing/Reviews"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("../components/landing/HowItWorks"), {
  ssr: false,
});

const CustomDot = () => {
  return (
    <i>
      <FeatherIcon icon="arrow-up" className="icons" />
    </i>
  );
};

const IndexRoot = () => {
  const scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  useEffect(() => {
    //componentdidmount
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);

    return () => {
      //componentwillunmount
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {/* Meta Tags */}
      <Head>
        <link rel="icon" href="/newlogo.png" sizes="13" />
        <title>Spotless Apps: We make IT happen</title>
        <meta
          name="description"
          content="Spotless Apps is a global, full service digital partner specialising in Website Design, Development, Strategy and Managed Services"
        />
      </Head>

      <Suspense fallback={Loader()}>
        {/* First Section */}
        <Home />
        {/* Portfolio */}
        <section>
          <Portfolio />
        </section>
        {/* Counter */}
        {/* <section>
            
          </section> */}
        {/* Our Services */}
        <section>
          <Services />
        </section>
        {/* Reviews */}
        <section className="review-section">
          <Reviews />
        </section>
        {/* Contact */}
        <section className="contact-section">
          <HowItWorks />
        </section>

        {/* scrollup button */}
        <ScrollUpButton
          ContainerClassName="classForContainer"
          style={{ height: 36, width: 36 }}
          TransitionClassName="classForTransition"
        >
          <CustomDot />
        </ScrollUpButton>
      </Suspense>
    </React.Fragment>
  );
};

export default IndexRoot;
