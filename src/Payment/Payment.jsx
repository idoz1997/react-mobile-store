import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataMobileContext } from "../Data/DataMobile";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [totalPrice, setTotalPrice] = useState(
    localStorage.getItem("totalLocal")
  );

  const { cart, ClearCart } = useContext(dataMobileContext);

  let navigate = useNavigate();

  const GoToProfile = () => {
    navigate("/profilePage");
  };

  let chose3years;
  let choseFree;

  const ItemBghout = () => {
    debugger;
    let itemInLocalCart = JSON.parse(localStorage.getItem("localCart"));
    let purches = [
      JSON.stringify(itemInLocalCart),
      Number(localStorage.getItem("totalLocal")),
    ];
    localStorage.setItem("purches", purches);
    alert("Successfully Purchased!");
    ClearCart();
    GoToProfile();
  };

  const Chose3YearsWarrenty = (event) => {
    chose3years = event.target.value;
    console.log(chose3years);
    setTotalPrice(Number(totalPrice) + 45.99);
    localStorage.setItem("totalLocal", totalPrice);
  };

  const ChosefreeWarrenty = (event) => {
    debugger;
    choseFree = event.target.value;
    let checkIfIncludeDecimal = totalPrice.toString().includes(".");
    console.log(checkIfIncludeDecimal);
    if (checkIfIncludeDecimal === true) {
      setTotalPrice(Number(totalPrice) - 45.99);
      localStorage.setItem("totalLocal", totalPrice);
    }
  };

  return (
    <div>
      <div class="container my-container ">
        <div class="card bg-white px-5">
          <div class="card-header">
            <div class="jumbotron mb-1 bg-white ">
              <h1 class="display-5">
                <b>You'r almost there</b>
              </h1>
            </div>
          </div>
          <div class="card-body">
            <div class="row ">
              <div class="col-md-5 ">
                <div class="card mt-0 border-0 first-card">
                  <div class="card-body">
                    <h5 class="card-title">1. Choose your Warrenty </h5>
                    <div class="row">
                      <div class="col-md-auto ">
                        <div class="custom-control custom-radio custom-control-inline ">
                          {" "}
                          <input
                            id="customRadioInline1"
                            type="radio"
                            name="customRadioInline1"
                            class="custom-control-input"
                            onChange={(event) => Chose3YearsWarrenty(event)}
                          />{" "}
                          <label
                            for="customRadioInline1"
                            class="custom-control-label label-radio"
                          >
                            3 years Warrenty
                          </label>{" "}
                        </div>
                        <p class="my-0"> $45.99 / 3 year</p>{" "}
                        <del class="text-success">
                          <p>$82.50 / 3 year</p>
                        </del>
                      </div>
                      <div class="col-md-auto ">
                        <div class="custom-control custom-radio custom-control-inline ">
                          {" "}
                          <input
                            id="customRadioInline2"
                            type="radio"
                            name="customRadioInline1"
                            class="custom-control-input"
                            onChange={(event) => ChosefreeWarrenty(event)}
                          />{" "}
                          <label
                            for="customRadioInline2"
                            class="custom-control-label label-radio"
                          >
                            1 year Warrenty
                          </label>{" "}
                        </div>
                        <p> $0 / year</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-2 border-0 second-card">
                  <div class="card-body">
                    <h5 class="card-title">2. Enter Payment details</h5>
                    <div class="row">
                      <div class="col-md-auto col-sm-auto ">
                        <div class="custom-control custom-radio custom-control-inline ">
                          {" "}
                          <input
                            id="customRadioInline11"
                            type="radio"
                            name="customRadioInline11"
                            class="custom-control-input"
                            checked="true"
                          />{" "}
                          <label
                            for="customRadioInline11"
                            class="custom-control-label label-radio"
                          >
                            <img
                              src="https://img.icons8.com/color/48/000000/visa.png"
                              class="card-image"
                            />{" "}
                          </label>{" "}
                        </div>
                      </div>
                      <div class="col-md-auto col-sm">
                        <div class="custom-control custom-radio custom-control-inline ">
                          {" "}
                          <input
                            id="customRadioInline22"
                            type="radio"
                            name="customRadioInline11"
                            class="custom-control-input"
                          />{" "}
                          <label
                            for="customRadioInline22"
                            class="custom-control-label label-radio"
                          >
                            <img
                              src="https://img.icons8.com/officel/48/000000/discover.png"
                              class="card-image"
                            />
                          </label>{" "}
                        </div>
                      </div>
                    </div>
                    <form>
                      <div class="form-group ">
                        {" "}
                        <label for="cc-number" class="control-label mt-3">
                          Card number
                        </label>{" "}
                        <input class=" form-control form-control-lg cc-exp" />{" "}
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6 col-sm-6">
                          {" "}
                          <label for="cc-exp" class="control-label ">
                            Expiration date
                          </label>{" "}
                          <input
                            id="cc-exp"
                            type="tel"
                            class=" form-control form-control-lg cc-exp"
                            autocomplete="cc-exp"
                            placeholder="MM / YY"
                            required
                          />{" "}
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                          {" "}
                          <label for="cc-cvc" class="control-label ">
                            CVV
                            <span>
                              <i
                                class="fa fa-info-circle px-2"
                                aria-hidden="true"
                              ></i>{" "}
                            </span>{" "}
                          </label>{" "}
                          <input
                            id="cc-cvc"
                            type="tel"
                            class="form-control-lg form-control cc-cvc "
                            autocomplete="off"
                            placeholder="&bull;&bull;&bull;"
                            required
                          />{" "}
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-8 col-sm-6">
                          {" "}
                          <label for="inputState">State</label>{" "}
                          <select
                            id="inputState"
                            class="form-control form-control-lg"
                          >
                            <option selected>United State</option>
                            <option>India</option>
                            <option>UK</option>
                            <option>China</option>
                          </select>{" "}
                        </div>
                        <div class="form-group col-md-4 col-sm-6">
                          {" "}
                          <label for="inputZip">Zip</label>{" "}
                          <input
                            type="text"
                            class="form-control form-control-lg"
                            id="inputZip"
                            placeholder="111111"
                          />{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-1 d-none d-sm-block"></div>
              <div class="col-md-6">
                <div class="card right-card ">
                  <div class="card-header ">
                    <h3 class="font-weight">
                      <b>Thank you For Buy from Us</b>
                    </h3>
                    <h4>
                      <b>Total is : {totalPrice}$</b>
                    </h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      A smartphone store is a retail store that{" "}
                      <span class="text-primary">
                        specializes in selling smartphones and related
                      </span>{" "}
                      accessories to consumers. These stores are typically
                      <span class="text-primary">
                        {" "}
                        found in shopping malls, downtown
                      </span>
                      areas, and other retail locations.
                    </p>
                    <div class="custom-control custom-checkbox checkbox-lg">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkbox-2"
                        required
                      />
                      <label class="custom-control-label" for="checkbox-2">
                        I agree{" "}
                        <span class="text-primary cursor-pointer">
                          <u> E&I Terms</u>{" "}
                        </span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                  <div class="card-footer">
                    {" "}
                    <button
                      class="btn btn-primary btn-lg"
                      onClick={() => ItemBghout()}
                    >
                      Buy now
                    </button>{" "}
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
