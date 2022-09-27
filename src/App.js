import "./App.css";
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import data from "./Components/ItemData";
import Product from "./Components/Product";
import ItemDetails from "./Components/ItemDetails";
import { BsChevronUp } from "react-icons/bs";
import CartContainer from "./Components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./Features/Cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";
import SavedItems from "./Components/Account/SavedItems";
import Orders from "./Components/Account/Orders";
import Account from "./Components/Account/Account";
import Details from "./Components/Account/Details";
import ChangePassword from "./Components/Account/ChangePassword";
import CloseAccount from "./Components/Account/CloseAccount";
import Inbox from "./Components/Account/Inbox";
import AddAddress from "./Components/Account/AddAddress";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  window.onscroll = function () {
    // show or hide the back-top-top button
    var backToTop = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="/:category" element={<Product data={data} />} />
        <Route path="/:category/:title" element={<ItemDetails data={data} />} />
        <Route path="cart" element={<CartContainer />} />
        <Route path="account/orders" element={<Orders />} />
        <Route path="account/saved-items" element={<SavedItems />} />
        <Route path="account/account-details" element={<Details />} />
        <Route path="account/change-password" element={<ChangePassword />} />
        <Route path="account/close-account" element={<CloseAccount />} />
        <Route path="account/inbox" element={<Inbox />} />
        <Route path="account/add-address" element={<AddAddress />} />
        <Route path="account" element={<Account />} />
      </Routes>

      <Footer />
      <button className="scroll-top">
        <div className="flex justify-center">
          <BsChevronUp />
        </div>
      </button>
    </div>
  );
}

export default App;
