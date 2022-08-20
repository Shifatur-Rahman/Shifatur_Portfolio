import React, { Component } from "react";
import "./TopNavigation.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class TopNavigation extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     navTitle: "navbarTitle",
  //     nav: "navigation",
  //     navLi: "navList",
  //   };
  // }

  // onScroll = () => {
  //   if (window.scrollY > 100) {
  //     this.setState({
  //       navTitle: "navbarTitleScroll",
  //       nav: "navigationScroll",
  //       navLi: "navListScroll",
  //     });
  //   } else if (window.scrollY < 100) {
  //     this.setState({
  //       navTitle: "navbarTitle",
  //       nav: "navigation",
  //       navLi: "navList",
  //     });
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.onScroll);
  // }

  constructor() {
    super();
    this.state = {
      navTitle: "navbarTitle",
      navBackgroundColor: "navigation",
      navbarItem: "navItem",
      navVariant: "dark",
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
        <Navbar
          className={this.state.navBackgroundColor}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVariant}
        >
          <Navbar.Brand className={this.state.navTitle} href="#home">
            S.R. Novel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                Home
              </Nav.Link>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                Services
              </Nav.Link>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                Projects
              </Nav.Link>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                Portfolio
              </Nav.Link>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                Contact
              </Nav.Link>
              <Nav.Link className={this.state.navbarItem} href="#deets">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Navbar fixed="top" className={this.state.nav} variant="dark">
          <Container fluid={true}>
            <Navbar.Brand href="#home" className={this.state.navTitle}>
              S.R. Novel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Nav className="ml-auto">
              <Nav.Link className={this.state.navLi} href="#">
                Home
              </Nav.Link>
              <Nav.Link className={this.state.navLi} href="#">
                Services
              </Nav.Link>
              <Nav.Link className={this.state.navLi} href="#">
                Portfolio
              </Nav.Link>
              <Nav.Link className={this.state.navLi} href="#">
                Contact
              </Nav.Link>
              <Nav.Link className={this.state.navLi} href="#">
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}
      </>
    );
  }
}

export default TopNavigation;
