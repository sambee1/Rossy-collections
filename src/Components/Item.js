import React from "react";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill, BsCart } from "react-icons/bs";
import product from "./Images/product-1.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Cart/cartSlice";

function Item(props) {
  const dispatch = useDispatch();
  function shorten(text, max = 17) {
    return text && text.length > max
      ? text.slice(0, max).split(" ").slice(0, -1).join(" ") + "..."
      : text;
  }

  return (
    <div className="single-product ml-4">
      <div className="product-image">
        <img src={props.image} alt="#" />
        <span className="sale-tag">-50%</span>
        <div className="button" onClick={() => dispatch(addToCart(props))}>
          <div className="flex">
            <span className="sm:mt-1 mr-1 sm:mr-2">
              <BsCart />
            </span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="product-info">
        <span className="category hidden md:block">{props.category}</span>
        <h4 className="title mt-3">
          <Link to={`/${props.category}/${props.title}`}>
            {shorten(props.title)}
          </Link>
        </h4>
        <div className="flex flex-row">
          <div className="price basis-4/5 ">
            <span>${props.price}</span>
            <span class="discount-price hidden">$200.00</span>
          </div>
          <div className="saved basis-1/5 hidden md:inline-block">
            <span>
              <BsHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
