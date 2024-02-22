import { Routes, Route } from "react-router-dom";

import Home from "../home/home.component";
import About from "../about/about.component";
import Menu from "../menu/menu.component";
import Reservations from "../reservations/reservations.component";
import Order from "../order/order.component";

import GreekSalad from "../../assets/greek salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

import "./main.styles.scss";

const Main = () => {
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

  return (
    <main role="main" className="main">
      <Routes>
        <Route path="/" element={<Home specials={menu} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu menu={menu} />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
