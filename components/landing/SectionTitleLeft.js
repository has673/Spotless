import React, { Component } from "react";

class SectionTitleLeft extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children ? (
          this.props.children
        ) : (
          <h4 className="title mb-4">{this.props.title}</h4>
        )}
        <p className="text-muted">
          {this.props.desc}
        </p>
        
        <ul
          className="list-unstyled feature-list text-muted"
          name="featurelines"
        >
          {this.props.features.map((feature, key) => (
            <li key={key} className="mb-0">
              <span className="text-primary h5 mr-2">
                <i
                  // className="uil uil-check-circle align-middle"
                  className={
                    "uil uil-check-circle align-middle" + this.props.class
                  }
                ></i>
              </span>
              {feature.title}
              
              
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default SectionTitleLeft;
