/* eslint-disable react/jsx-key */

/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
] 

const Header = () => {

  const items = useSelector((state)=>state.cart)
  return (
    <header className=" max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 fixed -top-2 l-0 r-o bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-Commerce</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation,i)=>{
              return(

                <Link to={navigation.path} key={i} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'}>
          <button className="inline-flex items-center bg-yellow-300 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 font-bold rounded text-base mt-4 md:mt-0 text-red-700">
            🛒 {items.length}
          </button>
        </Link>

      </div>
    </header>
  );
};

export default Header;
