import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { json, useNavigate } from "react-router-dom";
import { dataMobileContext } from "../Data/DataMobile";

export default function Login() {
  let navigate = useNavigate();

  const { setIsLoggedIn } = useContext(dataMobileContext);

  const getingUsers = localStorage.getItem("localUsers");
  const TransferUsersToJson = JSON.parse(getingUsers);

  let email;
  let password;

  const NavigateToAdminPage = () => {
    navigate("/adminPage");
  };

  const NavigateToHomePage = () => {
    navigate("/homePage");
  };

  const FillEmail = (event) => {
    email = event.target.value;
    console.log(email);
  };

  const FillPassword = (event) => {
    password = event.target.value;
  };

  const SumbitToSignIn = () => {
    debugger;
    console.log(TransferUsersToJson);
    console.log(email);
    let emailExisits = TransferUsersToJson.find((user) => user.email === email);
    let passwordExisits = TransferUsersToJson.find(
      (user) => user.password === password
    );

    if (emailExisits !== undefined && passwordExisits !== undefined) {
      if (emailExisits.email == "admin@gmail.com") {
        NavigateToAdminPage();
        setIsLoggedIn(true);
        localStorage.setItem("loginUser", JSON.stringify(emailExisits));
      } else {
        NavigateToHomePage();
        setIsLoggedIn(true);
        localStorage.setItem("loginUser", JSON.stringify(emailExisits));
      }
    }
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-flex bg-image"></div>

          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4">Sign In</h3>
                    <p class="text-muted mb-4">
                      To sign in please fill the following
                    </p>
                    <form>
                      <div class="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required=""
                          autofocus=""
                          class="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={(event) => FillEmail(event)}
                        />
                      </div>
                      <div class="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required=""
                          class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          onChange={(event) => FillPassword(event)}
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        onClick={SumbitToSignIn}
                      >
                        Sign in
                      </button>
                      <div class="text-center d-flex justify-content-between mt-4">
                        <p>
                          Don't have an account?
                          <a
                            href="/registerPage"
                            class="font-italic text-muted"
                          >
                            <u>Go to Register</u>
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
