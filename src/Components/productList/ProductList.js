import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import React from "react";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">LOGICALLY MINDED // CREATIVE AT HEART</h1>
        <p className="pl-desc">
          Care to know more about me? Just click on any of the following link and get to know more about me.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;