import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function Categories() {
  const categories = [
    "New Arrivals",
    "Best Sellers",
    "Hot Deals",
    "Men's Clothing",
    "Women's Clothing",
    "Skincare",
    "Wigs",
    "Facials",
    "Groceries",
    "Electronics",
    "Jewelry",
  ];
  const catMap = categories.map((e) => {
    return (
      <li>
        <Link to={`${e}`}>{e}</Link>
      </li>
    );
  });
  return (
    <div className="categories pt-2 pb-1">
      <ul>{catMap}</ul>
    </div>
  );
}

export default Categories;
