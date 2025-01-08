import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            {/* Logo */}
            <a className="navbar-brand pt-0" href="./">
              <img
                src="./assets/images/logo.png"
                alt
                className="img-fluid diverge-logo"
              />
            </a>

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
                <li className="nav-item ml-0">
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

                <li className="nav-item">
                  <Link
                    className="nav-link text-decoration-none navbar-text-color"
                    to="/ourteam"
                  >
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-decoration-none navbar-text-color"
                    to="/blog"
                  >
                    Blog
                  </Link>
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
