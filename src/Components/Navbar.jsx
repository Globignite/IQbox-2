import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            {/* Logo */}
            <Link className="navbar-brand pt-0" to="/">
              <img
                src="./assets/images/whiz-cyber-logo.png"
                alt="Logo"
                className="img-fluid diverge-logo"
              />
            </Link>

            {/* Mobile Toggle Button */} 
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Content */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link
                    className="nav-link text-decoration-none navbar-text-color home-margin-top"
                    to="/"
                  >
                    Home<span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-decoration-none navbar-text-color"
                    to="/about"
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-decoration-none navbar-text-color"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>

                {/* Dropdown: Pages */}
                <li className="nav-item dropdown redlight-dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu dropdown-content-redlight">
                    <ul className="list-unstyled">
                      <li className="nav-item">
                        <Link className="dropdown-item nav-link" to="/faq">
                          FAQs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="dropdown-item nav-link" to="/our-team">
                          Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="dropdown-item nav-link" to="/pricing">
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Dropdown: Blog */}
                <li className="nav-item dropdown redlight-dropdown blogs-li">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu dropdown-content-redlight blogs-section-drop-down">
                    <ul className="list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/single-post"
                        >
                          Single Post
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/infinite-scroll"
                        >
                          Infinite Scroll
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/load-more"
                        >
                          Load More
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/one-column"
                        >
                          One Column
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/two-column"
                        >
                          Two Column
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/three-column"
                        >
                          Three Column
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/four-column"
                        >
                          Four Column
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dropdown-item fierce-menu nav-link"
                          to="/six-column"
                        >
                          Six Column
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              {/* Contact Button */}
              <div className="btn-talk ml-auto">
                <ul className="m-0 p-0">
                  <li className="list-unstyled d-lg-inline-block">
                    <Link className="nav-link contact" to="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
