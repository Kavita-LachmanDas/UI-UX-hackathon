import React from 'react'

export default function Follow() {
  return (
    <div className="hi flex items-center justify-center  h-[400px] mt-7">
      <div className="text-center px-4">
        <h1 className="font-bold text-[40px] sm:text-3xl md:text-4xl mb-2">Our Instagram</h1>
        <p className="text-black text-lg mb-6">Follow our store on Instagram</p>
        <button className="bg-[#FAF4F4] w-[140px] text-black rounded-full shadow-lg hover:shadow-xl transition-all p-4 text-lg sm:p-3 sm:text-base">
          Follow Us
        </button>
      </div>
    </div>
  )
}
