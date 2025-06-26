import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Loader from "../components/Loader";
const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/product/${id}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((err) => console.log("Erro fetching product: ", err));
  }, [id]);

  if (!productDetails)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="pb-10 px-8">
      <div className="max-w-2xl mx-auto  pt-4 space-y-5">
        <h1 className="text-3xl font-bold text-center my-8 flex gap-10 items-center">
          <Link to={"/"}>
            <IoArrowBackCircleOutline />
          </Link>
          {productDetails.name} details
        </h1>
        <img
          src={productDetails.image}
          alt={productDetails.name}
          className="w-100 h-50 sm:h-100 object-contain  mb-6"
        />
        <p className="text-sm bg-teal-300 text-slate-800 inline px-4 rounded-full">
          {productDetails.category}
        </p>
        <h2 className="text-3xl font-bold my-2">{productDetails.name}</h2>
        <p className="text-xl font-semibold text-green-700">
          ${productDetails.price}
        </p>
        <p className="text-gray-600 mb-4">{productDetails.description}</p>
        <div>
          <span>⭐{productDetails.rating}</span>
          <p>
            {productDetails.stock > 0
              ? `In Stock ${productDetails.stock}`
              : "Out of Stock"}
          </p>
        </div>
        <button
          disabled={productDetails.stock === 0}
          className={`${
            productDetails.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : " w-full bg-teal-500  py-2 rounded-md hover:bg-teal-400 transition-colors duration-300 cursor-pointer"
          }`}
        >
          {productDetails.stock === 0 ? "Unavalaible" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
