import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataMobileContext } from "../Data/DataMobile";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, DeleteFromCart, ClearCart } = useContext(dataMobileContext);
  let navigate = useNavigate();

  const GoToStore = () => {
    navigate("/storePage");
  };

  const GoToPayment = () => {
    localStorage.setItem("totalLocal", sum);
    navigate("/paymentPage");
  };

  const GettingImageSource = (product) => {
    let checkHttp = product.img.indexOf("https");
    if (checkHttp !== -1) {
      return product.img;
    } else {
      return "data:image/jpeg;base64," + product.img;
    }
  };

  const [chose, setChose] = useState(1);

  const ChoosingAmount = (event, price) => {
    debugger;
    let number = Number(event.target.value);
    console.log(number);
    console.log("in chose " + chose);
    let addPrices = number * price;
    if (cart.length > 1) {
      setSum(price * (number - 1) + sum);
    } else {
      setSum(addPrices);
    }
  };

  const SubtotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }

    return total;
  };

  const [sum, setSum] = useState(() => SubtotalPrice());
  const [coupon, setCoupon] = useState("");

  const FillCoupon = (event) => {
    setCoupon(event.target.value);
  };

  const SumbitCoupon = () => {
    debugger;
    if (coupon === "Ido10") {
      setSum(sum * 0.9);
    } else if (coupon === "Nirc7") {
      setSum(sum * 0.3);
    } else if (coupon === "Shay15") {
      setSum(sum * 0.85);
    } else {
      alert("The coupon doesn't Exisits");
    }
  };

  const UpdateSumWhenRemoveItem = (price, id) => {
    setSum(sum - price);
    DeleteFromCart(id);
  };

  const ClearCartAndSubtotal = () => {
    setSum(0);
    ClearCart();
  };

  return (
    <div className="mt-4">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container padding-bottom-3x mb-1">
        <div class="table-responsive shopping-cart">
          <table class="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th class="text-center">Quantity</th>
                <th class="text-center">Price</th>

                <th class="text-center">
                  <button
                    class="btn btn-sm btn-outline-danger"
                    onClick={() => ClearCartAndSubtotal()}
                  >
                    Clear Cart
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  {console.log(product.title)}
                  <td>
                    <div class="product-item">
                      <img
                        style={{ height: 50, width: 50 }}
                        src={GettingImageSource(product)}
                        alt="Product"
                      />
                      <div class="product-info">
                        <h4 class="product-title">{product.title}</h4>
                        <span>
                          <em>Storage:</em> {product.storage}
                        </span>
                        <span>
                          <em>Brand:</em> {product.brand}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <div>
                      <input
                        type="number"
                        onChange={(event) =>
                          ChoosingAmount(event, product.price)
                        }
                        defaultValue="1"
                      />
                    </div>
                  </td>
                  <td class="text-center text-lg text-medium">
                    {product.price}$
                  </td>

                  <td class="text-center">
                    <button
                      className="remove-from-cart btn btn-sm btn-outline-danger"
                      onClick={() =>
                        UpdateSumWhenRemoveItem(product.price, product.id)
                      }
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="shopping-cart-footer">
          <div class="column">
            <div class="coupon-form">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Coupon code"
                required=""
                onChange={(event) => FillCoupon(event)}
              />
              <button
                class="btn btn-outline-primary btn-sm"
                onClick={() => SumbitCoupon()}
              >
                Apply Coupon
              </button>
            </div>
          </div>
          <div class="column text-lg">
            Subtotal: <span class="text-medium">{sum}$</span>
          </div>
        </div>
        <div class="shopping-cart-footer">
          <div class="column">
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => GoToStore()}
            >
              <i class="icon-arrow-left"></i>Back to Shopping
            </button>
          </div>
          <div class="column">
            <button class="btn btn-success" onClick={() => GoToPayment()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
