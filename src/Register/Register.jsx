import React, { useContext } from "react";
import "./Register.css";
import { dataMobileContext } from "../Data/DataMobile";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { UpdateUsers } = useContext(dataMobileContext);
  let navigate = useNavigate();

  const GoToLoginPage = () => {
    navigate("/loginPage");
  };

  let firstName;
  let lastName;
  let email;
  let password;

  const FillFirstName = (event) => {
    firstName = event.target.value;
    console.log(firstName);
  };

  const FillLastName = (event) => {
    lastName = event.target.value;
  };

  const FillEmail = (event) => {
    email = event.target.value;
  };

  const FillPassword = (event) => {
    password = event.target.value;
  };

  const SubmitNewUser = () => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    console.log(user);

    UpdateUsers(user);
    GoToLoginPage();
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4">Sign Up</h3>
                    <p class="text-muted mb-4">
                      To sign up please fill the following
                    </p>

                    <div class="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="text"
                        placeholder="First Name"
                        required
                        autofocus=""
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                        onChange={(event) => FillFirstName(event)}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="text"
                        placeholder="Last Name"
                        required
                        autofocus=""
                        class="form-control rounded-pill border-0 shadow-sm px-4"
                        onChange={(event) => FillLastName(event)}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required
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
                        required
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        onChange={(event) => FillPassword(event)}
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      onClick={SubmitNewUser}
                    >
                      Sign in
                    </button>
                    <div class="text-center d-flex justify-content-between mt-4">
                      <p>
                        Already have an account?
                        <a href="/loginPage" class="font-italic text-muted">
                          <u>Go to Login</u>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 d-none d-md-flex bg-image-register"></div>
        </div>
      </div>
    </div>
  );
}
