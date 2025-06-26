import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-200">
      <div className="flex justify-center items-center">
        <img
          src={product.image} // Assuming product has an image property
          alt={product.name}
          className="w-50 h-70 object-contain p-5 "
        />
      </div>
      <div className="p-4 h-full">
        <p className="text-sm bg-teal-300 text-slate-800 inline px-4 rounded-full">
          {product.category}
        </p>
        <h1 className="text-xl font-semibold mt-2">{product.name}</h1>
        <p className="text-lg text-green-800 mt-1">${product.price}</p>
        <button className="mt-4 w-full bg-amber-500  py-2 rounded-md hover:bg-amber-400 transition-colors duration-300 cursor-pointer">
          Add to Cart
        </button>
        <button
          onClick={() => navigate(`/product-details/${product.id}`)}
          className="mt-4 w-full bg-teal-500  py-2 rounded-md hover:bg-teal-400 transition-colors duration-300 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
