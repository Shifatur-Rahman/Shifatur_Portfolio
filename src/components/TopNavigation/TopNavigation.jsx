import React, { Component } from "react";
import "./TopNavigation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navTitle: "navbarTitle",
      navBackgroundColor: "navigation",
      navbarItem: "navItem",
      navVariant: "dark",
      pageTitle: props.title,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navTitle: "navbarTitleScroll",
        navBackgroundColor: "navigationScroll",
        navbarItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navTitle: "navbarTitle",
        navBackgroundColor: "navigation",
        navbarItem: "navItem",
        navVariant: "dark",
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
  };

  render() {
    return (
      <>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBackgroundColor}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVariant}
        >
          <Link to="/">
            <Navbar.Brand className={this.state.navTitle} href="#home">
              S.R. Novel
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/">
                  {" "}
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/services">
                  Services
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/portfolio">
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/contact">
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/about">
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNavigation;
