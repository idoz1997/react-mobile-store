import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataMobileContext } from "../Data/DataMobile";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { updateSetIsLogin } = useContext(dataMobileContext);
  let navigate = useNavigate();

  let userLogin = JSON.parse(localStorage.getItem("loginUser"));

  const ReturenToLoginPage = () => {
    navigate("/loginPage");
  };

  const GoToPurchase = () => {
    navigate("/storePage");
  };

  const HandleLogout = () => {
    updateSetIsLogin();
    ReturenToLoginPage();
  };
  return (
    <div>
      <div class="container emp-profile">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201809270954"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>Welcome To Profile</h5>
              <h6>Store with passion!</h6>
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    onClick={() => GoToPurchase()}
                  >
                    Go Back To store
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <button class="profile-edit-btn" onClick={() => HandleLogout()}>
              Logout
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>First Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userLogin.firstName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Last Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userLogin.lastName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userLogin.email}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Password</label>
                  </div>
                  <div class="col-md-6">
                    <p>{userLogin.password}</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
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
