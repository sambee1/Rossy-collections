import React from "react";
import product from "./Images/product-1.jpg";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increase, decrease } from "../Features/Cart/cartSlice";
import { MdDelete } from "react-icons/md";

function CartItem(props) {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const styles = {
    backgroundColor: props.amount === 1 ? "#4e8ce2" : "#0167f3",
  };
  return (
    <div>
      <Container>
        <div className="flex flex-col mt-3 cart-item">
          <div className="flex flex-row">
            <div className="basis-1/4">
              <img src={product} alt="item"></img>
              {/* <button
                className="flex  remove mr-5"
                onClick={() => dispatch(removeItem(props.id))}
              >
                <span className="pt-1 mr-2">
                  <MdDelete />
                </span>{" "}
                Remove
              </button> */}
            </div>
            <div className="basis-2/4 ml-4 mt-4">
              <p className="title">{props.title}</p>
              <p className="price">
                {props.price}{" "}
                <span className="discount-price line-through">N 300</span>
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <button
                className="flex  remove mr-5"
                onClick={() => dispatch(removeItem(props.id))}
              >
                <span className="pt-1 mr-2">
                  <MdDelete />
                </span>{" "}
                Remove
              </button>
              <div className="flex flex-row   count">
                <button
                  className="increase"
                  onClick={() => dispatch(increase(props.id))}
                >
                  +
                </button>
                <p className="amount">{props.amount}</p>
                <button
                  className="decrease"
                  style={styles}
                  onClick={() => {
                    if (props.amount === 1) return;
                    dispatch(decrease(props.id));
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartItem;
