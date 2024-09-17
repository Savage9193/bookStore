
import React from "react";
import store from "../app/store";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; // Adjust path if necessary
import toast from "react-hot-toast";


function Cards({ item }) {
  const dispatch = useDispatch();

  const handleBuyNow = () => {
    console.log('Adding item to cart:', item);
    toast.success("Adding item to cart");
    dispatch(addToCart(item));
    console.log('Cart after dispatch:', store.getState().cart.cart); 
    console.log(store.getState().cart.cart)
    
  };


  return (
    <div className="rounded-3xl p-4 m-7 w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure className="relative overflow-hidden h-80 rounded-md">
        <img
          className="object-cover w-full h-full"
          src={item.image}
          alt={item.name}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title flex items-center justify-between">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <div className="badge badge-outline">${item.price}</div>
          <button
            className="cursor-pointer px-4 py-2 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

