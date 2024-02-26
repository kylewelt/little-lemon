import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/home-page/home-page.component";
import AboutPage from "../../pages/about-page/about-page.component";
import MenuPage from "../../pages/menu-page/menu-page.component";
import BookingPage from "../../pages/booking-page/booking-page.component";
import OrderPage from "../../pages/order-page/order-page.component";

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
        <Route path="/" element={<HomePage specials={menu} />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/menu" element={<MenuPage menu={menu} />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
