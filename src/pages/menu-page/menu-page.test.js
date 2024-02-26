import { render, screen } from "@testing-library/react";
import MenuPage from "./menu-page.component";

import GreekSalad from "../../assets/greek salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

test("renders the MenuPage heading", () => {
  const menu = [
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
  render(<MenuPage menu={menu} />);
  const headingElement = screen.getByText("Menu");
  expect(headingElement).toBeInTheDocument();
});
