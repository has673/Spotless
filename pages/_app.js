import "../styles/_topbar.scss";
import "../styles/_footer.scss";
import "../styles/_404.scss";
import "../styles/_portfolio.scss";
import "../styles/_contact.scss";
import "../styles/_about.scss";
import "../styles/_webdesign.scss";
import "../styles/custom.scss";
import "../styles/demo.scss";
import "../styles/features.scss";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v2.1.7/css/unicons.css"
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TKVM5NH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
