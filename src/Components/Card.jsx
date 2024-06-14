import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, description, price, category, image, title, rating }) => {
  const navigate = useNavigate();

  const productClickHandler = () => {
    try {
      navigate(`/products/${id}`);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer" onClick={productClickHandler}>
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt={title}
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;