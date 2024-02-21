import { Routes, Route, Link } from "react-router-dom";

import Home from "../home/home.component";
import About from "../about/about.component";
import Menu from "../menu/menu.component";
import Reservations from "../reservations/reservations.component";
import Order from "../order/order.component";

import "./main.styles.scss";

const Main = () => (
  <main role="main" className="main">
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/reservations" element={<Reservations />}></Route>
      <Route path="/order" element={<Order />}></Route>
    </Routes>
  </main>
);

export default Main;
