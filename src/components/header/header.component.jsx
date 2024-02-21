import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Nav from "../nav/nav.component";

import "./header.styles.scss";

const Header = () => (
  <header role="banner" className="header">
    <div className="header-container">
      <Link to="/">
        <img src={Logo} alt="Little Lemon restaurant logo" />
      </Link>
      <Nav />
    </div>
  </header>
);

export default Header;
