import React, { Component } from "react";
import "./TopNavigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import talukderLogo from "../../asset/images/Logo/talukderLogo.png";
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
              <img alt="logo"
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
            // data-aos="fade-down"
            // data-aos-anchor="#example-anchor"
            // data-aos-offset="500"
            // data-aos-duration="1000"
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
                  <button style={{ border: "none", background: "none" }}
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
                  </button>
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
                  <button style={{ border: "none", background: "none" }}
                    className={this.state.navbarItem}
                    to=""
                    activeClassName="active to-empty"
                  >
                    Product & services
                    <AiOutlineCaretDown />
                  </button>
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
                  <button style={{ border: "none", background: "none" }}
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
                  </button>

                  <div className="dropdown-content">
                    <NavLink
                      className="navDropdown"
                      to="/client/corporateClient"
                    >
                      Corporate Client
                    </NavLink>
                    <NavLink className="navDropdown" to="/client/govtClient">
                      Government Client
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Our Concern */}

              {/* <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/concern">
                  Our Concern
                </NavLink>
              </Nav.Link> */}

              <Nav.Link>
                <div className="dropdown">
                  <button style={{ border: "none", background: "none" }}
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
                  </button>

                  <div className="dropdown-content">
                    <NavLink
                      className="navDropdown"
                      to="/concern/plasticItem"
                    >
                      Talukder Plastic Co. Ltd.
                    </NavLink>
                    <NavLink className="navDropdown" to="/concern/foundry">
                      Talukder Foundry Ltd.
                    </NavLink>
                    <NavLink className="navDropdown" to="/concern/upvc">
                      Talukder uPVC Fittings Ind. Ltd.
                    </NavLink>
                    <NavLink className="navDropdown" to="/concern/distribution">
                      Talukder Distribution Co. Ltd.
                    </NavLink>
                    <NavLink className="navDropdown" to="/concern/furniture">
                      Talukder Furniture Ltd.
                    </NavLink>
                    <NavLink className="navDropdown" to="/concern/j&j">
                      J & J Enterprise Ltd.
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* career */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/career">
                  Career
                </NavLink>
              </Nav.Link>

              {/* About Us */}     

              <Nav.Link>
                <div className="dropdown">
                  <button style={{ border: "none", background: "none" }}
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
                  </button>
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
