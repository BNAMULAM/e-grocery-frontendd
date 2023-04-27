import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./component/signupandsignin/Register";
import Login from "./component/signupandsignin/login";
import Addproduct from "./component/Product/addproduct";
import Viewproducts from "./component/Product/viewproducts";
import UpdateProduct from "./component/Product/updateproduct";
import CustomerList from "./component/Product/customerlist";
import Logout from "./component/signupandsignin/logout";
import Home from "./component/Home";
import Resetpassword from "./component/signupandsignin/resetpassword";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateStatus from "./component/Order/updatestatus";
import AddressByUserId from "./component/Order/addressbyuserId";
import AddressForm from "./component/Order/addressForm";
import AddDeliverySlot from "./component/Delivery/bookdeliveryslot";
import Paybill from "./component/Payment/paybill";
import Viewbill from "./component/Payment/viewbill";
import Allorders from "./component/Order/allorders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Cart from "./component/Cart/cart";
import Wishlist from "./component/Cart/wishlist";
import ViewOrderByUsername from "./component/Order/vieworderbyusername";
import DeleteAddress from "./component/Order/deleteaddress";

const App = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/viewproducts" element={<Viewproducts />} />
            <Route path="/updateproduct/:id" element={<UpdateProduct />} />
            <Route path="/products" element={<CustomerList />} />
            <Route path="/updatestatus" element={<UpdateStatus />} />
            <Route path="/placeorder" element={<AddressByUserId />} />
            <Route path="/orderform" element={<AddressForm />} />
            <Route path="/deliveryslots" element={<AddDeliverySlot />} />
            <Route path="/payment" element={<Paybill />} />
            <Route path="/viewbill" element={<Viewbill />} />
            <Route path="/viewordersbyusername" element={<ViewOrderByUsername />} />
            <Route path="/allorders" element={<Allorders />} />   
            <Route path="/deleteaddress" element={<DeleteAddress />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} /> 
      </Routes>
    </Router>
  );
};

export default App;
