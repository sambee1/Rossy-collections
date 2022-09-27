import React from "react";
import Item from "./Item";
import Data from "./ItemData";
import { Link } from "react-router-dom";

function Collection(props) {
  let count = 0;
  const item = Data.map((e) => {
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
        amount={e.amount}
      />
    ) : null;
  });

  return (
    <div className="collection pr-3">
      <h5 className="collection-title pt-4 pl-3 pr-3">{props.title}</h5>
      <div className="flex overflow-x-auto overscroll-auto">{item}</div>
      <Link to={`${props.category}`}>
        <p className="see-more flex justify-end mr-4 pb-2 pt-2">See More </p>
      </Link>
    </div>
  );
}

export default Collection;
