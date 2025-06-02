import React from "react";
import SectionTitleTwo from "./SectionTitleTwo";
import useMasonry from "./use-masonry";
import WorkFilter from "./WorkFilter";
import WorkItem from "./WorkItem";
import workData from "./workDetails.json";
import { slugify } from "./utils";

const Portfolio = () => {
  // Isotope Categories list JS

  const { categories } = useMasonry(
    workData,
     ".masonryList",
     ".masonry-grid",
     ".messonry-button",
     ".messonry-button button"
  );
  return (
    <div className="section section-padding ag-masonary-wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div id="portfolio" className="col-lg-5">
            <SectionTitleTwo  subTitle="Portfolios" title="Selected works." />
          </div>
          <div
            className="col-lg-7 tabs-colum"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <WorkFilter categories={categories} />
          </div>
        </div>

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 masonryList">
          <div className="resizer col"/>
            {
            workData.map((portfolio) => (
              <div
                key={portfolio.id}
                className={`col masonry-grid ${portfolio.categories
                  .map((cat) => slugify(cat))
                  .join(" ")}`}
                style={{ paddingTop: "30px" }}
              >
                <WorkItem portfolio={portfolio} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
