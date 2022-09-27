import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Features/Cart/cartSlice";
import data from "./ItemData";
import Item from "./Item";
import { Link } from "react-router-dom";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  // console.log(amount);
  if (amount < 1) {
    return (
      <div className="container ">
        <div className="flex justify-center">
          <div className="mt-4 mb-4">
            <h3 className="mt-4">Your bag</h3>

            <h6 className="mt-4">Is currently empty</h6>
            <Link to="/">
              {" "}
              <button className="start-shopping mt-4">Start Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container cart">
        <div className="flex ">
          <h4 className="mt-4 ml-2">Cart({`${amount}`})</h4>
          <button
            className="clear-cart justify-end"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.map((e) => {
          return (
            <CartItem
              id={e.id}
              title={e.title}
              price={e.price}
              amount={e.amount}
            />
          );
        })}
        <div className="flex justify-center">
          <div className=" checkout text-center">
            Checkout (N {`${total.toFixed(2)}`})
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
