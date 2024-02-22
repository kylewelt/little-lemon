import { Link } from "react-router-dom";

import DishIcon from "../../assets/Dish icon.svg";

import "./delivery-link.styles.scss";

const DeliveryLink = () => {
  return (
    <div className="delivery-link">
      <Link to="/order">
        <div className="link">
          <p>Order a delivery</p>
          <img src={DishIcon} alt="Delivery icon" />
        </div>
      </Link>
    </div>
  );
};

export default DeliveryLink;
