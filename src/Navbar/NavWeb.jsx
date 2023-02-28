import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavWeb.css";
import { Route, Routes, Link } from "react-router-dom";
import { dataMobileContext } from "../Data/DataMobile";

export default function NavWeb() {
  const { isLoggedIn, counterCart } = useContext(dataMobileContext);
  let loginUserNotJson = localStorage.getItem("loginUser");
  let loginUser = JSON.parse(loginUserNotJson);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          E&I Mobile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/homePage">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/storePage">
                Store
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/loginPage">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registerPage">
                    Register
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && loginUser.email === "admin@gmail.com" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/adminPage">
                    Hello: {loginUser.firstName}
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && loginUser.email !== "admin@gmail.com" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profilePage">
                    Hello: {loginUser.firstName}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cartPage">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="yellow"
                      class="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">{counterCart}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
