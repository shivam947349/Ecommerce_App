/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../Components/Products/Index';

const CategoriesProducts = () => {
    const {name} = useParams()
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
          const data = await response.json();
          console.log(data);
          setProducts(data);
        };
        fetchProducts();
      }, []);

      if(Products.length === 0) return <div>Loading.....</div>
  return (
    <Products products={products}/>
  )
}

export default CategoriesProducts