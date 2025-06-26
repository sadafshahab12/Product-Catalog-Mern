import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/product`)
      .then((res) => {
        setProducts(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterProduct =
    filter === "All"
      ? products
      : products.filter((prod) => prod.category === filter);

  // console.log(filterProduct);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center my-8">Product Catalogue</h1>
      <div className=" max-w-4xl mx-auto ">
        <h1 className="text-xl font-bold mb-4 text-center">
          Filter by Category
        </h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 p-2 rounded-md shadow-m w-full border-2 border-amber-500 outline-none"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filterProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
