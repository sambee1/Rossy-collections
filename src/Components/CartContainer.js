import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Features/Cart/cartSlice";
import data from "./ItemData";
import Item from "./Item";
import { Link } from "react-router-dom";

function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  //   const itemDisplay = cartItems.map((item) => {
  //     data.map((e) => {
  //       if (item === e.id) {
  //         return (
  //           <h3> The id is {`${e.id}`}</h3>
  //           //   <CartItem
  //           //     key={e.id}
  //           //     title={e.title}
  //           //     price={e.price}
  //           //     image={e.image}
  //           //   />
  //         );
  //       }
  //       return true;
  //     });
  //     return true;
  //   });

  if (amount < 1) {
    return (
      <div>
        <h3>Your bag</h3>

        <h6>Is currently empty</h6>
        <Link to="/">
          {" "}
          <button className="start-shopping">Start Shopping</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container cart">
      <div className="flex ">
        <h4 className="mt-4 ml-2">Cart(2)</h4>
        <button
          className="clear-cart justify-end"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((e) => {
        return <CartItem id={e.id} title={e.title} price={e.price} />;
      })}
      <div className="flex justify-center">
        <div className=" checkout text-center">Checkout (N 5, 000)</div>
      </div>
    </div>
  );
}

export default CartContainer;
