import React from "react";
import product from "./Images/product-1.jpg";
import Container from "react-bootstrap/esm/Container";
import { BsHeart, BsHeartFill, BsCart } from "react-icons/bs";
import Item from "./Item";
import { useParams } from "react-router-dom";
import Data from "./ItemData";

function ItemDetails({ data }) {
  console.log(data);
  const array = [1, 2, 3, 4];
  const { title } = useParams();
  // const { price } = data;
  // console.log(price);
  let count = 0;
  return (
    <div>
      <Container>
        {data.map((item) => {
          if (item.title === title)
            return (
              <div>
                <div className="flex flex-col md:flex-row mt-5 item-details">
                  <div className="basis-2/5 flex md:flex-col overflow-x-auto overscroll-auto">
                    <img
                      src={`${item.image}`}
                      alt="product"
                      className="item-details-image"
                    ></img>
                    {array.map((e) => {
                      return (
                        <img
                          src={product}
                          alt="product"
                          className="md:hidden"
                        ></img>
                      );
                    })}
                    <div className="flex overflow-x-auto overscroll-auto">
                      {array.map((e) => {
                        return (
                          <img
                            src={product}
                            alt="product"
                            className="alternative-image ml-3"
                          ></img>
                        );
                      })}
                    </div>
                  </div>

                  <div className="basis-2/5 ml-4">
                    <h4>{title}</h4>
                    <div className="inline-block">N {item.price}</div>
                    <span className="ml-4 line-through text-gray-600">
                      N 2,000
                    </span>
                    <div className="mt-3">
                      <p>Variations:</p>
                      <div className="flex sizes">
                        <p className="size">2XL</p>
                        <p className="size">XL</p>
                        <p className="size">L</p>
                        <p className="size">M</p>
                        <p className="size">S</p>
                      </div>
                    </div>
                    <div>
                      <p>Color:</p>
                      <div className="flex colors">
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                      </div>
                    </div>

                    <div className="flex">
                      <button className="flex add-to-cart mt-5">
                        <span className="pt-1 mr-4">
                          <BsCart />
                        </span>
                        Add to cart
                      </button>
                      <div className="mt-10 ml-8 pt-3 block md:hidden">
                        <BsHeart />
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/5 pt-3 hidden md:block">
                    <BsHeart />
                  </div>
                </div>
                <div className="description mt-2">
                  <h4 className="">Product Details</h4>
                  <p className="">{item.description && item.description}</p>
                </div>
                <div className="specifications">
                  <h4>Specifications</h4>
                  <p>
                    Slim-fitting style, contrast raglan long sleeve,
                    three-button henley placket, light weight & soft fabric for
                    breathable and comfortable wearing. And Solid stitched
                    shirts with round neck made for durability and a great fit
                    for casual fashion wear and diehard baseball fans. The
                    Henley style round neckline includes a three-button placket.
                  </p>
                </div>
              </div>
            );
        })}
        <div className="mt-4 mb-4 ">
          <h4>You may also like</h4>
          <div className="flex overflow-x-auto overscroll-auto">
            {Data.map((e) => {
              count++;
              return count < 5 ? (
                <Item
                  key={e.id}
                  id={e.id}
                  image={e.image}
                  title={e.title}
                  description={e.description}
                  category={e.category}
                  price={e.price}
                  rating={e.rating}
                />
              ) : null;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ItemDetails;
