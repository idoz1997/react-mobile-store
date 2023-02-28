import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavWeb from "./Navbar/NavWeb";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Admin from "./Login/Admin";
import HomePage from "./Home/HomePage";
import Store from "./Store/Store";
import Cart from "./Store/Cart";
import Payment from "./Payment/Payment";
import ProfilePage from "./ProfilePage/ProfilePage";
import Purchase from "./Store/Purchase";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/homePage");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavWeb />

      <Routes>
        <Route path="/loginPage" element={<Login />} />
        <Route path="/RegisterPage" element={<Register />} />
        <Route path="/adminPage" element={<Admin />} />
        <Route path="/homePage" element={<HomePage />} initial={true} />
        <Route path="/storePage" element={<Store />} />
        <Route path="/cartPage" element={<Cart />} />
        <Route path="/paymentPage" element={<Payment />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/purchasePage" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
