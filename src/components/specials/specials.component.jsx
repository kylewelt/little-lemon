import Button from "../button/button.component";
import Card from "../card/card.component";
import DeliveryLink from "../delivery-link/delivery-link.component";

import "./specials.styles.scss";

const Specials = ({ specials }) => {
  return (
    <div className="specials">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </div>
      <div className="specials-items">
        {specials.map((special, index) => (
          <Card image={special.image} key={index}>
            <div className="special">
              <div className="special-label">
                <p className="special-name">{special.name}</p>
                <p className="special-price">{special.price}</p>
              </div>
              <p>{special.description}</p>
              <DeliveryLink />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Specials;
