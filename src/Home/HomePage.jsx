import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card bg-dark text-white">
            <img
              src="https://cdn.discordapp.com/attachments/936966116138418176/1079467407594238034/resized-image-Promo.jpeg"
              className="card-img"
              alt="placeholder"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h1 className="card-title text-dark">
                Explore Our Shop With Great Prices
              </h1>

              <Link className="btn" to="/storePage">
                Shop Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn.discordapp.com/attachments/936966116138418176/1079469017263251546/resized-image-Promo_3.jpeg"
              className="card-img-top"
              alt="placeholder"
            />
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Samsung</h5>
              <p className="card-text text-white">
                Discover the latest in electronic & smart appliance technology
                with Samsung. Find the next big thing from smartphones & tablets
                to laptops & tvs & more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn.discordapp.com/attachments/936966116138418176/1079470181044191252/resized-image-Promo_4.jpeg"
              className="card-img-top"
              alt="placeholder"
            />
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Apple</h5>
              <p className="card-text text-white">
                Shop iPhone, iPad, Apple Watch, Mac, and Apple TV. Explore
                accessories, entertainment, and device support. smartphones &
                tablets to laptops & tvs & more.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn.discordapp.com/attachments/936966116138418176/1079472249343578323/resized-image-Promo_1.jpeg"
              className="card-img-top"
              alt="placeholder"
            />
            <div className="card-body bg-dark">
              <h5 className="card-title text-white">Xiaomi</h5>
              <p className="card-text text-white">
                Welcome to Xiaomi global official website to discover the latest
                Xiaomi Phones, Redmi Phones, Xiaomi Bands, Smart Home Devices
                and other popular products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
