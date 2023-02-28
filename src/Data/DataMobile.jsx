import React, { createContext, useState, useEffect } from "react";

export const dataMobileContext = createContext();

export default function DataMobile(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //used for checking if someone signin

  const [users, setUsers] = useState([
    {
      firstName: "Admin",
      lastName: "Admin",
      email: "admin@gmail.com",
      password: "12345678",
    },
    {
      firstName: "ido",
      lastName: "zalma",
      email: "ido@gmail.com",
      password: "12345678",
    },
    {
      firstName: "elad",
      lastName: "grossman",
      email: "elad@gmail.com",
      password: "12345678",
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 154781514,
      title: "Iphone 14 pro max",
      storage: "256gb",
      img: "https://www.ifixstore.co.il/wp-content/uploads/images/d506d6da-4fd9-11ed-9e71-f2212fdfa659.png",
      price: 1100,
      brand: "Apple",
    },
    {
      id: 123781515,
      title: "Samsung galaxy s23 ultra",
      storage: "512gb",
      img: "https://shipi.co.il/wp-content/uploads/2023/01/samsung312-galaxy-s23-series-106-600x600.jpg",
      price: 950,
      brand: "Samsung",
    },
    {
      id: 148781519,
      title: "Xiaomi 13 pro",
      storage: "128gb",
      img: "https://i02.appmifile.com/718_operator_in/30/01/2021/4bc80e2b01c24e904217cef5503193c2!800x800!85.png",
      price: 550,
      brand: "Xiaomi",
    },
  ]);

  const [cart, setCart] = useState([]);

  const AdditemToCart = (product) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        alert("Item already in your cart. you can chose amount");
        return;
      }
    }
    const cartChose = {
      id: product.id,
      title: product.title,
      storage: product.storage,
      img: product.img,
      price: product.price,
      brand: product.brand,
    };
    setCart([...cart, cartChose]);
    let counter = counterCart + 1;
    setCounterCart(counter);
    alert("Item added Succsesfully");
  };

  const DeleteFromCart = (id) => {
    debugger;
    const newCartList = cart.filter((product) => product.id !== id);
    let counter = counterCart - 1;
    setCounterCart(counter);
    setCart(newCartList);
    localStorage.setItem("localCart", newCartList);
  };

  const ClearCart = () => {
    setCart([]);
    setCounterCart(0);
    localStorage.setItem("localCart", cart);
  };

  const [counterCart, setCounterCart] = useState(0);

  useEffect(() => {
    let usersExisits = JSON.stringify(users);
    localStorage.setItem("localUsers", usersExisits);
    let productsExisits = JSON.stringify(products);
    localStorage.setItem("localProducts", productsExisits);
    let cartExisits = JSON.stringify(cart);
    localStorage.setItem("localCart", cartExisits);
  }, [users, products, cart]);

  const UpdateUsers = (user) => {
    let newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    setUsers([...users, newUser]);
  };

  const deleteUser = (email) => {
    debugger;
    const updateUsers = users.filter((user) => user.email !== email);
    setUsers(updateUsers);
    localStorage.setItem("localUsers", updateUsers);
  };

  const updateSetIsLogin = () => {
    setIsLoggedIn(false);
  };

  const UpdateProductsInStore = (newProduct) => {
    setProducts([...products, newProduct]);
    localStorage.setItem("localProducts", newProduct);
  };

  const deleteProduct = (id) => {
    let idExisits = products.filter((product) => product.id !== id);
    setProducts(idExisits);
    localStorage.setItem("localProducts", idExisits);
  };

  return (
    <div>
      <dataMobileContext.Provider
        value={{
          UpdateUsers,
          isLoggedIn,
          setIsLoggedIn,
          users,
          deleteUser,
          updateSetIsLogin,
          products,
          UpdateProductsInStore,
          deleteProduct,
          AdditemToCart,
          cart,
          DeleteFromCart,
          ClearCart,
          counterCart,
        }}
      >
        {props.children}
        {console.log(users)}
      </dataMobileContext.Provider>
    </div>
  );
}
