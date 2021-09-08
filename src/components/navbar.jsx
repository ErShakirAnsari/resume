import ProfileLogo from "../images/linked-in-copy.jpg";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-v-grad fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger px-3" href="#page-top">
        <span className="d-block d-lg-none">Shakir A. Ansari</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={ProfileLogo}
            alt="Dp"
          />
        </span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </a>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link js-scroll-trigger"
              target="_blank"
              href="https://github.com/ErShakirAnsari/ErShakirAnsari.github.io/raw/master/cdn/cv/Shakir_A_Resume_v2021-04-05.pdf"
              rel="noreferrer"
              //   download
            >
              <i className="bi bi-download"></i> resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
