import Button from "../button/button.component";

import HeroImage from "../../assets/restauranfood.jpg";

import "./hero.styles.scss";

const Hero = () => (
  <div className="hero">
    <div className="hero-row">
      <div className="hero-column hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a Table</Button>
      </div>
      <div className="hero-column hero-image">
        <img src={HeroImage} alt="A waiter presenting a tray of bruschetta." />
      </div>
    </div>
  </div>
);

export default Hero;
