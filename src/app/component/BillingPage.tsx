// import Footer from "./Footer";
// import Header from "./Header";
// import Pagination from "./Pagination";

// export default function BillingPage() {
//     return (
// <div>
// <Header/>

// <div className=" mt-[80px]">
//       {/* Hero Section */}
//       <div
//         className="bg-cover bg-center h-56 flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/img4.png')",
//         }}
//       >
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800">CheckOut</h1>
//           <p className="text-gray-500 mt-2">
//             <span className="text-gray-400">Home</span> &gt; CheckOut
//           </p>
//         </div>
//       </div>
//       </div>

//       <div className="min-h-screen bg-gray-50 py-12">

//         <div className="max-w-7xl mx-auto px-[99px]">
//           <h1 className="text-2xl font-bold mb-6">Billing details</h1>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Billing Form */}
//             <form className="space-y-6">
//               {/* First Name & Last Name */}
//               <div className="grid grid-cols-3 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
  
//               {/* Company Name */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Country/Region */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Country / Region</label>
//                 <select
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="sri-lanka">Sri Lanka</option>
//                   {/* Add more options if needed */}
//                 </select>
//               </div>
  
//               {/* Street Address */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Street Address</label>
//                 <input
//                   type="text"
//                   placeholder="House number and street name"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Town / City */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Town / City</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Province */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Province</label>
//                 <select
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="western-province">Western Province</option>
//                   {/* Add more options if needed */}
//                 </select>
//               </div>
  
//               {/* ZIP Code */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Phone */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Email Address */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
  
//               {/* Additional Information */}
//               <div>
                
//                 <textarea
//                   rows="2"
//                   placeholder="Additional Information"
//                   className="mt-1 block w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </form>
  
//             {/* Order Summary */}
//             <div className="space-y-6">
//               <div className=" p-6 rounded-lg ">
//                 <h2 className="text-lg font-bold mb-4">Your Order</h2>
//                 <div className="flex justify-between text-sm text-gray-700">
//                   <p>Product</p>
//                   <p>Subtotal</p>
//                 </div>
//                 <div className="flex justify-between text-sm font-medium mt-2">
//                   <p>Asgaard sofa x 1</p>
//                   <p>Rs. 250,000.00</p>
//                 </div>
//                 <div className="flex justify-between text-sm mt-4">
//                   <p>Subtotal</p>
//                   <p>Rs. 250,000.00</p>
//                 </div>
//                 <div className="flex justify-between text-sm font-bold mt-2">
//                   <p>Total</p>
//                   <p>Rs. 250,000.00</p>
//                 </div>
//               </div>
  
//               {/* Payment Method */}
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     name="payment"
//                     id="bank-transfer"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="bank-transfer" className="ml-2 text-sm text-black font-bold">
//                     Direct Bank Transfer
//                   </label> <br /> 
                 
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     name="payment"
//                     id="cod"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="cod" className="ml-2 text-sm text-black font-bold">
//                     Cash on Delivery
//                   </label>
//                 </div>
//                 <p className="text-sm text-gray-600">
//                   Your personal data will be used to support your experience throughout this website,
//                   to manage access to your account, and for other purposes described in our{" "}
//                   <a href="#" className="text-blue-600 hover:underline">
//                     privacy policy
//                   </a>
//                   .
//                 </p>
//               </div>
  
//               {/* Place Order Button */}
//               <button
//                 type="button"
//                 className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               >
//                 Place order
//               </button>
//             </div>
//           </div>
//         </div>


//         <Pagination/>
//         <Footer/>
//       </div>
//       </div>
//     );
//   }
  




// //   Make your payment directly into our bank account. please use your order id as the payment refernce. your order will not e shipped untill the funds have cleared in our account











import Footer from "./Footer";
import Header from "./Header";
import Pagination from "./Pagination";

export default function BillingPage() {
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
            <h1 className="text-3xl font-bold text-gray-800">CheckOut</h1>
            <p className="text-gray-500 mt-2">
              <span className="text-gray-400">Home</span> &gt; CheckOut
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-6">Billing details</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Form */}
            <form className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country / Region
                </label>
                <select
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="sri-lanka">Sri Lanka</option>
                </select>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Town / City */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town / City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Province */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Province
                </label>
                <select
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="western-province">Western Province</option>
                </select>
              </div>

              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Additional Information */}
              <div>
                <textarea
                  rows="2"
                  placeholder="Additional Information"
                  className="mt-1 block w-full sm:w-[300px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </form>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-white shadow">
                <h2 className="text-lg font-bold mb-4">Your Order</h2>
                <div className="flex justify-between text-sm text-gray-700">
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                <div className="flex justify-between text-sm font-medium mt-2">
                  <p>Asgaard sofa x 1</p>
                  <p>Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between text-sm mt-4">
                  <p>Subtotal</p>
                  <p>Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between text-sm font-bold mt-2">
                  <p>Total</p>
                  <p>Rs. 250,000.00</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    id="bank-transfer"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="bank-transfer"
                    className="ml-2 text-sm text-black font-bold"
                  >
                    Direct Bank Transfer
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    id="cod"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="cod"
                    className="ml-2 text-sm text-black font-bold"
                  >
                    Cash on Delivery
                  </label>
                </div>
                <p className="text-sm text-gray-600">
                  Your personal data will be used to support your experience throughout this website,
                  to manage access to your account, and for other purposes described in our{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              {/* Place Order Button */}
              <button
                type="button"
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Place order
              </button>
            </div>
          </div>
        </div>

        <Pagination />
        <Footer />
      </div>
    </div>
  );
}
