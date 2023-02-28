import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import { dataMobileContext } from "../Data/DataMobile";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const {
    users,
    deleteUser,
    updateSetIsLogin,
    products,
    UpdateProductsInStore,
    deleteProduct,
  } = useContext(dataMobileContext);
  let navigate = useNavigate();

  const ReturnToLoginAndRegisterPage = () => {
    navigate("/loginPage");
  };

  const HandleLogout = () => {
    updateSetIsLogin();
    ReturnToLoginAndRegisterPage();
  };

  const [imageData, setImageData] = useState(null);
  const [productName, setProductName] = useState("");
  const [storage, setStorage] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");

  const ChangeProductName = (event) => {
    let newName = event.target.value;
    setProductName(newName);
  };

  const ChangeStorage = (event) => {
    let newStorage = event.target.value;
    setStorage(newStorage);
  };

  const ChangeImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      setImageData(base64String);
    };
  };

  const ChangePrice = (event) => {
    let newPrice = event.target.value;
    setPrice(newPrice);
  };

  const ChangeBrand = (event) => {
    let newBrand = event.target.value;
    setBrand(newBrand);
  };

  const AddItemToProducts = () => {
    let newId =
      Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
    let checkIfIdExisits = products.find((product) => product.id === newId);
    while (checkIfIdExisits !== undefined) {
      newId =
        Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
      checkIfIdExisits = products.find((product) => product.id === newId);
    }

    let newProduct = {
      id: newId,
      title: productName,
      storage: storage,
      img: imageData,
      price: price,
      brand: brand,
    };

    UpdateProductsInStore(newProduct);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center mb-3">
          <div className="col-10 text-center">
            <h1>Admin Page</h1>
          </div>
          <div className="col-15 text-end">
            <Button variant="outline-secondary" onClick={HandleLogout}>
              Logout
            </Button>
          </div>
        </div>
        <hr />
        <h2>Users</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(user.email)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <h2>Products</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Storage</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.storage}</td>
                <td>{product.price}$</td>
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <hr />
      <h2>Add product</h2>
      <div class="container mt-4">
        <div class="form-group row">
          <label for="input1" class="col-sm-2 col-form-label">
            Product Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Product name"
              required
              onChange={(event) => ChangeProductName(event)}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="input2" class="col-sm-2 col-form-label">
            Storage
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Storage"
              required
              onChange={(event) => ChangeStorage(event)}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="input3" class="col-sm-2 col-form-label">
            Price
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              placeholder="Price"
              required
              onChange={(event) => ChangePrice(event)}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="input4" class="col-sm-2 col-form-label">
            Brand
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Brand"
              required
              onChange={(event) => ChangeBrand(event)}
            />
          </div>
        </div>
        <div class="form-group row mt-2">
          <label for="fileInput" class="col-sm-2 col-form-label">
            Add File
          </label>
          <div class="col-sm-10">
            <input
              type="file"
              class="form-control-file"
              onChange={(event) => ChangeImage(event)}
            />
          </div>
        </div>
        <div class="form-group row mt-3">
          <div class="col-sm-10 offset-sm-2">
            <button class="btn btn-primary" onClick={AddItemToProducts}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
