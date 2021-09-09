import axios from "axios";
import { useEffect, useState } from "react";
import ProfileLogo from "../images/linked-in-copy.jpg";
import NavLink from "./common/navLink";
import config from "../utils/config.json";

const endPoint = config.apiBaseUrl + "/navItems.json";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(endPoint);

      if (response && response.data && response.data.navItems) {
        setNavItems(response.data.navItems);
      } else {
        alert("Something went wrong!");
      }
    }
    getData();
  }, []);

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
          {navItems.map((item) => (
            <NavLink key={item.id} navItem={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
