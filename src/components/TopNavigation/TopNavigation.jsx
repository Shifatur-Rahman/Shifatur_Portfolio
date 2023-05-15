import React, { Component } from "react";
import "./TopNavigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import talukderLogo from "../../asset/images/talukderLogo.png";
import talukderLogo from "../../asset/images/Logo/talukderLogo.png";
//import Card from "react-bootstrap/Card";
import { AiOutlineCaretDown } from "react-icons/ai";

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: "navbarTitle",
      navBackgroundColor: "navigation",
      navbarItem: "navItem",
      navVariant: "dark",
      pageTitle: props.title,
      portfolioDropdownOpen: false,
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
              <img
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="100"
                data-aos-duration="1000"
                className="logo"
                src={talukderLogo}
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              {/* Home */}

              <Nav.Link>
                <NavLink
                  className={this.state.navbarItem}
                  to="/"
                  activeClassName="active to-empty"
                >
                  {" "}
                  Home
                </NavLink>
              </Nav.Link>

              {/* Portfolio */}

              <Nav.Link>
                <div className="dropdown">
                  <a
                    className={this.state.navbarItem}
                    to="#"
                    activeClassName="active to-empty"
                    onClick={() =>
                      this.setState((prevState) => ({
                        portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                      }))
                    }
                  >
                    Portfolio
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink className="navDropdown" to="/portfolio/gallery">
                      Gallery
                    </NavLink>
                    <NavLink
                      className="navDropdown"
                      to="/portfolio/achievement"
                    >
                      Achivement
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Product & services */}

              <Nav.Link>
                <div className="dropdown">
                  <a
                    className={this.state.navbarItem}
                    to=""
                    activeClassName="active to-empty"
                  >
                    Product & services
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink
                      className="navDropdown"
                      to="/product&services/advertisement"
                    >
                      Advertisement
                    </NavLink>
                    <NavLink className="navDropdown" to="/portfolio">
                      Product Gallery
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Our clients */}

              <Nav.Link>
                <div className="dropdown">
                  <a
                    className={this.state.navbarItem}
                    to=""
                    activeClassName="active to-empty"
                    onClick={() =>
                      this.setState((prevState) => ({
                        portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                      }))
                    }
                  >
                    Our Clients
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink
                      className="navDropdown"
                      to="/client/corporateClient"
                    >
                      Corporate Client
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Our Concern */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/concern">
                  Our Concern
                </NavLink>
              </Nav.Link>

              {/* <Nav.Link>
                <div className="dropdown">
                  <a
                    className={this.state.navbarItem}
                    to=""
                    activeClassName="active to-empty"
                    onClick={() =>
                      this.setState((prevState) => ({
                        portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                      }))
                    }
                  >
                    Our Concern
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink to="/concern/plastic">Talukder Plastic</NavLink>

                    <NavLink className="navDropdown" to="/concern/foundry">
                      Talukder Foundry
                    </NavLink>

                    <NavLink className="navDropdown" to="/concern/upvc">
                      Talukder uPVC
                    </NavLink>

                    <NavLink className="navDropdown" to="/concern/distribution">
                      Talukder Distribution
                    </NavLink>

                    <NavLink className="navDropdown" to="/concern/furniture">
                      Talukder Furniture
                    </NavLink>

                    <NavLink
                      className="navDropdown"
                      to="/concern/j&jenterprise"
                    >
                      J & J Enterprise
                    </NavLink>
                  </div>
                </div>
              </Nav.Link> */}

              {/* career */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/career">
                  Career
                </NavLink>
              </Nav.Link>

              {/* About Us */}

              <Nav.Link>
                <div className="dropdown">
                  <a
                    className={this.state.navbarItem}
                    to=""
                    activeClassName="active to-empty"
                    onClick={() =>
                      this.setState((prevState) => ({
                        portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                      }))
                    }
                  >
                    About Us
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink className="navDropdown" to="/about/director">
                      {" "}
                      Board of Director
                    </NavLink>
                    <NavLink className="navDropdown" to="/about/managementTeam">
                      {" "}
                      Management Team
                    </NavLink>
                    <NavLink
                      className="navDropdown"
                      to="/about/chairman-message"
                    >
                      {" "}
                      Message from Chairman
                    </NavLink>
                    <NavLink className="navDropdown" to="/about/md-message">
                      {" "}
                      Message from Md
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Contact */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/contact">
                  Contact
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
