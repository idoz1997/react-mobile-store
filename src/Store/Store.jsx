import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { dataMobileContext } from "../Data/DataMobile";
import "./Store.css";

export default function Store() {
  const { AdditemToCart } = useContext(dataMobileContext);

  let products = JSON.parse(localStorage.getItem("localProducts"));

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageSelect = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  const GettingImageSource = (product) => {
    let checkHttp = product.img.indexOf("https");
    if (checkHttp !== -1) {
      return product.img;
    } else {
      return "data:image/jpeg;base64," + product.img;
    }
  };

  const renderProductCards = () => {
    return products.map((product, index) => (
      <div key={index} className="col-md-4">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            className="imgProduct"
            variant="top"
            src={GettingImageSource(product)}
          />
          <hr />
          <Card.Body className="bg-secondary">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button variant="primary" onClick={() => AdditemToCart(product)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <Carousel
            activeIndex={selectedImageIndex}
            onSelect={handleImageSelect}
          >
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Image+1"
                alt="First slide"
              /> */}

              <video controls muted autoPlay loop className="d-block w-100">
                <source
                  src="https://images.samsung.com/is/content/samsung/assets/il/2302/home/HOME_DM3_KV_Main-KV_1440x640_resizing_pc.mp4"
                  type="video/mp4"
                />
              </video>

              <Carousel.Caption>
                <h3>Samsung Galaxy s23 Ultra</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://fdn.gsmarena.com/imgroot/news/22/03/xiaomi-12-update-and-warranty/inline2/-1200/gsmarena_002.jpg"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row mt-3">{renderProductCards()}</div>
    </div>
  );
}
