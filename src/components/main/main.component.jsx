import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import HomePage from "../../pages/home-page/home-page.component";
import AboutPage from "../../pages/about-page/about-page.component";
import MenuPage from "../../pages/menu-page/menu-page.component";
import BookingPage from "../../pages/booking-page/booking-page.component";
import ConfirmedBookingPage from "../../pages/confirmed-booking-page/confirmed-booking-page.component";
import OrderPage from "../../pages/order-page/order-page.component";

import GreekSalad from "../../assets/greek salad.jpg";
import Bruschetta from "../../assets/bruchetta.svg";
import LemonDessert from "../../assets/lemon dessert.jpg";

import "./main.styles.scss";

const Main = () => {
  const navigate = useNavigate();

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

  const [availableTimes, setAvailableTimes] = useState([]);

  const fetchAvailableDates = async (date) => {
    try {
      const response = await fetch(
        `https://fakerapi.it/api/v1/custom?_quantity=12&available=boolean`
      );
      const json = await response.json();
      const data = await json.data;

      const availableTimes = await data.reduce((times, time, index) => {
        if (time.available) {
          times.push(`${index + 12}:00`);
        }
        return times;
      }, []);

      setAvailableTimes(availableTimes);
    } catch (error) {
      console.log("finding dates encountered an error", error);
      setAvailableTimes([]);
    }
  };

  const updateTimes = (resDate) => {
    fetchAvailableDates(resDate);
  };

  const onSubmitForm = async (formData) => {
    try {
      const response = await fetch(
        `https://fakerapi.it/api/v1/custom?_quantity=1&success=boolean`
      );

      navigate("/booking-confirmed");
    } catch (error) {
      console.log("booking encountered an error", error);
    }
  };

  return (
    <main role="main" className="main">
      <Routes>
        <Route path="/" element={<HomePage specials={menu} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage menu={menu} />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dateChanged={updateTimes}
              submitForm={onSubmitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBookingPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </main>
  );
};

export default Main;
