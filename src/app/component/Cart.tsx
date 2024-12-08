
// 'use client'
// // import Footer from './Footer'
// import Image from "next/image";



  
//   import React, { useState } from "react";
// import Pagination from "./Pagination";
// import Footer from "./Footer";
// import Header from "./Header";
  
//   export default function Cart() {
//     const [quantity, setQuantity] = useState(1);
//     const price = 250000;
//     const subtotal = price * quantity;
  
//     const handleQuantityChange = (e) => {
//       const value = Math.max(1, parseInt(e.target.value) || 1);
//       setQuantity(value);
//     };
  
//     return (

//         <div>
//               <Header/>
//         <div className=" mt-[80px]">
//       {/* Hero Section */}
//      <div
//         className="bg-cover bg-center h-56 flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/img4.png')",
//         }}
//       >
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
//           <p className="text-gray-500 mt-2">
//             <span className="text-gray-400">Home</span> &gt; Shop
//           </p>
//         </div>
//       </div>
//       </div>
       
//       <div className="min-h-screen  flex justify-center items-center">
//         <div className="w-11/12 max-w-5xl  rounded-lg p-5 flex flex-col lg:flex-row gap-5">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             <table className="w-full text-left border-collapse">
//               <thead className="bg-yellow-100">
//                 <tr>
//                   <th className="p-3">Product</th>
//                   <th className="p-3">Price</th>
//                   <th className="p-3">Quantity</th>
//                   <th className="p-3">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t">
//                   <td className="p-3 flex items-center gap-3">
//                     <Image
//                       src="/img3.png"
//                       alt="Asgaard sofa"
//                       className="w-16 h-16 rounded"
//                       width={300} height={300}
//                     />
//                     <span>Asgaard sofa</span>
//                   </td>
//                   <td className="p-3">Rs. {price.toLocaleString()}</td>
//                   <td className="p-3">
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       className="w-12 border text-center"
//                       min="1"
//                     />
//                   </td>
//                   <td className="p-3">Rs. {subtotal.toLocaleString()}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
  
//           {/* Cart Totals Section */}
//           <div className="bg-yellow-100 p-5 rounded-lg w-full lg:w-1/3 h-[300px]">
//             <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>Rs. {subtotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span>Total</span>
//               <span className="font-bold text-lg">Rs. {subtotal.toLocaleString()}</span>
//             </div>
//             <button className="w-full bg-yellow-500 text-white py-2 rounded shadow hover:bg-yellow-600">
//               Check Out
//             </button>
//           </div>
//         </div>


   
//       </div>

//       <Pagination/>
//       <Footer/>
//       </div>
//     );
//   }
  
  
  'use client'
// import Footer from './Footer'
import Image from "next/image";
import React, { useState } from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Header from "./Header";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 250000;
  const subtotal = price * quantity;

  const handleQuantityChange = (e: { target: { value: string; }; }) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  return (
    <div>
      <Header />
      <div className="mt-[80px]">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-56 flex items-center justify-center"
          style={{
            backgroundImage: "url('/img4.png')",
          }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
            <p className="text-gray-500 mt-2">
              <span className="text-gray-400">Home</span> &gt; Shop
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="w-11/12 max-w-5xl rounded-lg p-5 flex flex-col lg:flex-row gap-5">
          {/* Cart Items Section */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 flex items-center gap-3">
                    <Image
                      src="/img3.png"
                      alt="Asgaard sofa"
                      className="w-16 h-16 rounded"
                      width={300} height={300}
                    />
                    <span>Asgaard sofa</span>
                  </td>
                  <td className="p-3">Rs. {price.toLocaleString()}</td>
                  <td className="p-3">
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 border text-center"
                      min="1"
                    />
                  </td>
                  <td className="p-3">Rs. {subtotal.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="bg-yellow-100 p-5 rounded-lg w-full lg:w-1/3 h-[300px]">
            <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold text-lg">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded shadow hover:bg-yellow-600">
              Check Out
            </button>
          </div>
        </div>
      </div>

      <Pagination />
      <Footer />
    </div>
  );
}
