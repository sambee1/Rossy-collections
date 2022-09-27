import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import product from "../Images/product-1.jpg";
import { MdDelete } from "react-icons/md";

function SavedItems() {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // const styles = {
  //   backgroundColor: props.amount === 1 ? "#4e8ce2" : "#0167f3",
  // };
  return (
    <div>
      <Container className="sub-account mt-3">
        <h4 className="section-title">Saved Items</h4>
        <div className="flex flex-col mt-3 cart-item">
          <div className="flex flex-row">
            <div className="basis-1/4">
              <img src={product} alt="item"></img>
            </div>
            <div className="basis-2/4 ml-4 mt-4">
              <p className="price">
                N 5, 000
                <span className="discount-price line-through">N 300</span>
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-row">
              <button
                className="flex  remove mr-5"
                // onClick={() => dispatch(removeItem(props.id))}
              >
                <span className="pt-1 mr-2">
                  <MdDelete />
                </span>{" "}
                Remove
              </button>
              <div className="flex flex-row   count">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
}

export default SavedItems;
