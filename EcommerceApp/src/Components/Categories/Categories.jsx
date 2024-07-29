/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import FeatureCart from '../FeaturesCart/Index';
import Products from '../Products/Index';

const Categories = () => {
    const[categories, setCategorie] = useState([])

    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        console.log(data);
        setCategorie(data);
      };
      fetchCategories();
    }, []);
  
    if(categories.length === 0){
      return <div>Loading.....</div>
    }
  
    return (
      <>
      <FeatureCart cards = {categories}/>
      </>
      
    )
}
export default Categories