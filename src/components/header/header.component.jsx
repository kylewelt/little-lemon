import Logo from "../../assets/Logo.svg";
import Nav from "../nav/nav.component";

import "./header.styles.scss";

const Header = () => (
  <header role="banner" className="header">
    <div className="header-container">
      <img src={Logo} alt="Little Lemon restaurant logo" />
      <Nav />
    </div>
  </header>
);

export default Header;
