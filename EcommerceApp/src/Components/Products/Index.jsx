/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../../Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ products }) => {
  const cartproduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [warning, setWarning] = useState(false);

  const handleAdd = (p) => {
    let isPresent = false;
    cartproduct.forEach((product) => {
      if (p.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    dispatch(add(p));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="flex justify-end sticky">
        {warning && (
          <div className="text-white bg-red-400 font-semibold  h-10 w-80 flex justify-center px-2 rounded-lg">
            Item is Already Present in the Cart !
          </div>
        )}
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products?.map((p) => {
            console.log(p, "product");

            return (
              <>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer md:mt-0 mt-20">
                  <Link to={`/products/${p.id}`}>
                    <a className="block  h-48 rounded overflow-hidden">
                      <img
                        alt={p.title}
                        className="object-contain object-center w-full h-full block"
                        src={p.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                        {p.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {p.title}
                      </h2>
                      <p className="mt-1 font-bold text-md">${p.price}</p>
                    </div>
                  </Link>
                  <button
                    className="border bg-purple-600 text-white p-1.5 rounded-lg mt-2"
                    onClick={() => handleAdd(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
