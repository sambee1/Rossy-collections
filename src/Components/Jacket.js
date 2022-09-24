import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import Data from "./ItemData";

function Jacket(props) {
  let count = 0;
  const itemDisplay = Data.map((e) => {
    if (props.category.toLowerCase() === e.category) {
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
    }
    return true;
  });
  return (
    <div className="collection">
      <h5 className="collection-title pt-4 pl-3">{props.category}</h5>
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 lg:flex lg:flex-row">
        {itemDisplay}
      </div>
      <p className="see-more flex justify-end pr-5">
        <Link to={`${props.category}`}>See More</Link>
      </p>
    </div>
  );
}

export default Jacket;
