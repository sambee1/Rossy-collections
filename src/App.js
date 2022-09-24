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

function App() {
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
