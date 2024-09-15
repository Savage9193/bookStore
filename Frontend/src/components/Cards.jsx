// import React from "react";
// import { Link } from "react-router-dom";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3 ">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img className="" src={item.image} alt="book" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 <Link to="/course">Buy Now</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;
import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="rounded-3xl p-4 m-7 w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure className="relative overflow-hidden h-80 rounded-md">
        <img
          className="object-cover w-full h-full"
          src={item.image}
          alt="book"
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
          <div className="cursor-pointer px-4 py-2 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
            <Link to="/course">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
