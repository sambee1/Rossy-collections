import React from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import product from "./Images/product-1.jpg";
import { BsCart } from "react-icons/bs";

function Product({ data }) {
  const { category } = useParams();
  const displayItem = data.map((e) => {
    if (category.toLowerCase() === e.category)
      return (
        <Item
          title={e.title}
          id={e.id}
          price={e.price}
          category={e.category}
          image={e.image}
          description={e.description}
          amount={e.amount}
        />
      );
    return true;
  });
  return (
    <div>
      <Container className="mb-5 mt-5 container ">
        <h3 className="text-center ">{`${category}`} </h3>
        <div className=" gap-x-8 gap-y-4 grid-cols-3 hidden sm:grid">
          {displayItem}
        </div>
        {/* Displays as landscape mode on smaller screens */}
        {data.map((e) => {
          return (
            <div className="block sm:hidden">
              <div className="flex flex-col product-display">
                <div className="flex flex-row">
                  <div className="basis-1/3 product-image">
                    <img src={e.image} alt="product" />
                  </div>
                  <div className="basis-2/3 ml-2">
                    <div className="mt-3">{e.title}</div>
                    <div className="mt-3 font-bold mb-8">
                      N {e.price}{" "}
                      <span className="line-through gray-500">N 5,000 </span>
                    </div>
                    <button className="flex mt-5">
                      <span className="pt-1 mr-4">
                        <BsCart />
                      </span>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Product;
