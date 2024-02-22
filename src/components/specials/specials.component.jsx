import Button from "../button/button.component";
import Card from "../card/card.component";
import DeliveryLink from "../delivery-link/delivery-link.component";

import GreekSalad from "../../assets/greek salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

import "./specials.styles.scss";

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: GreekSalad,
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description:
        "Our bruschetta is made from grilled bread that has been smashed with garlic and seasoned with salt and olive oil.",
      image: Bruschetta,
    },
    {
      name: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient is as authentic as can be imagined.",
      image: LemonDessert,
    },
  ];

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
