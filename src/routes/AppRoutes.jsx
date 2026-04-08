import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Status from "../pages/Status";
import Loyalty from "../pages/Loyalty";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import FloatingCart from "../components/FloatingCart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/status" element={<Status />} />
        <Route path="/loyalty" element={<Loyalty />} />
      </Routes>

      <FloatingCart />
      <BottomNav />
    </BrowserRouter>
  );
}

export default AppRoutes;
