import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserContextProvider, { useUserContext } from "./context/UserContext";
import Cart from "./pages/Cart";
import Item from "./pages/Item";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
const App  = () =>  {
  const {user} = useUserContext();
  console.log(user);
  return (
    <UserContextProvider>
      <div>
          <Routes>
            <Route path="/product">
              <Route path="" element={<Product />} />
              <Route path=":id" element={<Item />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
      
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
