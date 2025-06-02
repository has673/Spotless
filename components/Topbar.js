import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "reactstrap";
//Import images
import logodark from "../assets/images/logo-dark.png";
import logo from "../assets/images/newlogo.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      navLinks: [
        //Note : each child and nested child must have unique id
        { id: 1, title: "Home", link: "/" },
        {
          id: 2,
          title: "Services",
          link: "/#",
          isOpenSubMenu: false,
          child: [
            { title: "UI UX Design", link: "/web-design" },
            { title: "Web Development", link: "/web-development" },
          ],
        },
        { id: 4, title: "About us", link: "/about" },
      ],
      wishlistModal: false,
      dropdownIsOpen: false,
    };
  }

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? (tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu)
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
            //if level1 id is matched then match level 3 id
            tmpchild.id === level3_id
              ? //if id is matched then update status(level 3 sub menu will be open)
                (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
              : (tmpchild.isOpenNestedSubMenu = false)
          )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container className="d-flex justify-content-between">
            <div className="align-self-center">
              <Link className="logo" href="/">
                <Image
                  src={logo}
                  id="brandLogo"
                  layout="intrinsic"
                  width={140}
                  height={90}
                  alt="logo"
                />
              </Link>
            </div>

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul
                className="navigation-menu"
                id="top-menu"
                style={{ justifyContent: "center" }}
              >
                {this.state.navLinks.map((navLink, key) =>
                  navLink.child ? (
                    <li className="has-submenu" key={key}>
                      {/* child item(menu Item) - Level 1 */}
                      <a
                        href={navLink.link}
                        onClick={(event) => {
                          event.preventDefault();
                          this.openBlock(navLink.id);
                        }}
                      >
                        {navLink.title}
                      </a>
                      {/* <i className="mdi mdi-chevron-right mr-1"></i> */}
                      <span className="menu-arrow"></span>
                      {navLink.isMegaMenu ? (
                        // if menu is mega menu(2 columns grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu
                              ? "submenu megamenu open"
                              : "submenu megamenu"
                          }
                        >
                          <li style={{ overflowY: "auto" }}>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 18 ? (
                                  <li key={childKey}>
                                    <Link href={item.link}>{item.title}</Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li style={{ overflowY: "auto" }}>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 33 && item.id > 17 ? (
                                  <li key={childKey}>
                                    <Link href={item.link}>{item.title}</Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id > 32 ? (
                                  <li key={childKey}>
                                    <Link href={item.link}>
                                      {item.title}
                                      {item.isOnePage ? (
                                        <span className="badge badge-warning rounded ml-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill badge-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        // if menu is not mega menu(1grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu ? "submenu open" : "submenu"
                          }
                        >
                          {navLink.child.map((childArray, childKey) =>
                            childArray.nestedChild ? (
                              // sub menu item - Level 2
                              <li className="has-submenu" key={childKey}>
                                <Link
                                  href={childArray.link}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    this.openNestedBlock(
                                      navLink.id,
                                      childArray.id
                                    );
                                  }}
                                >
                                  {childArray.title}{" "}
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul
                                  className={
                                    childArray.isOpenNestedSubMenu
                                      ? "submenu open"
                                      : "submenu"
                                  }
                                >
                                  {childArray.nestedChild.map(
                                    (nestedChildArray, nestedKey) => (
                                      // nested sub menu item - Level 3
                                      <li
                                        key={nestedKey}
                                        className="has-submenu"
                                      >
                                        <Link href={nestedChildArray.link}>
                                          {nestedChildArray.title}{" "}
                                        </Link>
                                        {nestedChildArray?.child ? (
                                          <>
                                            <span className="submenu-arrow" />
                                            <ul
                                              className={
                                                nestedChildArray.isOpenNestedSubMenu
                                                  ? "submenu open"
                                                  : "submenu"
                                              }
                                              style={{
                                                overflowY: "auto",
                                                overflowX: "auto",
                                              }}
                                            >
                                              {nestedChildArray?.child.map(
                                                (
                                                  doubleNestedChildArray,
                                                  doubleNestedKey
                                                ) => (
                                                  // nested sub menu item - Level 3
                                                  <li
                                                    key={doubleNestedKey}
                                                    className="has-submenu"
                                                    style={{
                                                      overflowY: "auto",
                                                      overflowX: "auto",
                                                    }}
                                                  >
                                                    <Link
                                                      href={
                                                        doubleNestedChildArray.link
                                                      }
                                                    >
                                                      {
                                                        doubleNestedChildArray.title
                                                      }{" "}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li key={childKey}>
                                <Link href={childArray.link}>
                                  {childArray.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link href={navLink.link}>{navLink.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div style={{ alignSelf: "center" }}>
              <div className="buy-button" id="buyButton">
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="buyButton"
                  className="btn btn-primary"
                >
                  Contact Us
                </Link>
              </div>
              <div className="menu-extras">
                <div className="menu-item">
                  <div
                    onClick={this.toggleLine.bind(this)}
                    className={
                      this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                    }
                  >
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;
