import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/productContext";
import Loader from "./Loader";

const ProductFullScreen = () => {
  const { productId } = useParams();
  const { products, error } = useProducts();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const numericProductId = await Number(productId);
        const foundProduct = await products.find(
          (eachProduct) => eachProduct.id === numericProductId
        );
        setProduct(foundProduct);
      } catch (err) {
        console.log("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [productId, products]);

  if (error) {
    return <div>Error fetching product details!</div>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                PRODUCT NAME
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">
                {product.title || "Not found"}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                {product.description || "Not found"}
              </p>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Category</span>
                <span className="ml-auto text-white">
                  {product.category || "Not found"}
                </span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Rating</span>
                <span className="ml-auto text-white">
                  {product.rating.rate || "Not found"}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                <span className="text-gray-500">Rating count</span>
                <span className="ml-auto text-white">
                  {product.rating.count || "Not found"}
                </span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  ${product.price || "Not found"}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image || "Not found"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFullScreen;
