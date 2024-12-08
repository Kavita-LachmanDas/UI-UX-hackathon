import React from 'react'
import { BiFilter } from 'react-icons/bi'

export default function AboutShop() {
  return (
    <div>
          {/* Filter Section */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-500 rounded-md shadow hover:bg-gray-200">
              <span className="material-icons-outlined mr-2"></span>
              <BiFilter/> Filter
            </button>

            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200">
                <span className="material-icons-outlined">apps</span>
              </button>
              <button className="p-2 bg-gray-100 rounded shadow hover:bg-gray-200">
                <span className="material-icons-outlined">Veiw List</span>
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-gray-600">Show</p>
              <input
                type="number"
                className="w-12 p-2 border border-gray-300 rounded text-center focus:ring-2 focus:ring-gray-400 focus:outline-none"
                value="16"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-600">Short by</p>
              <select className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none">
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}
