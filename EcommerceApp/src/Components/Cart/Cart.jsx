/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { remove } from '../../Redux/Cartslice';

const Cart = () => {

    const cartitems = useSelector((state)=>state.cart)
    const dispatch = useDispatch();


    const handleRemove = (id)=>{
        dispatch(remove(id)) ;
    }
    

  return (
    <div className=''>
        <div className='md:mt-20 mt-40 mb-5 px-1'>
            <h1 className='flex justify-center mt-20 font-semibold text-[2rem] md:mt-0'>Saved Items 👜</h1>

        </div>
        <div className=''>

            {cartitems.map((item)=>{
                return(

                    <div className="p-10 w-full shadow-md cursor-pointer md:flex md:justify-between  items-center">
                        <Link to={`/products/${item.id}`}>
                            <a className="block h-48 rounded overflow-hidden">
                                <img
                                alt={item.title}
                                className="object-contain object-center w-full h-full block"
                                src={item.image}
                                />
                            </a>
                            <div className="mt-4">
                             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                             {item.category}
                             </h3>
                             <h2 className="text-gray-900 title-font text-lg font-medium text-wrap w-96">
                             {item.title}
                             </h2>
                             <p className="mt-1 font-bold text-md">${item.price}</p>
                         </div>
                        </Link>

                        <button className='bg-green-600 w-20 h-10 rounded-md hover:bg-purple-600 font-semibold' onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Cart