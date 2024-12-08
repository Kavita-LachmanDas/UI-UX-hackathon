// import React from 'react'
// import Image from 'next/image'

// export default function Card2(Props) {
//   return (
//     <div>
//       <div className="p-8">
//         <div className="w-[250px]">
//           <Image src={Props.img} width={300} height={300} alt='hi'/>
//         </div>
//         <div className="text">
//           <p className='text-gray-700'>{Props.para} <br /> {Props.para2}</p>
//           <h1 className='font-bold text-black text-3xl'>{Props.price}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import Image from "next/image";

export default function Card2({
  img,
  para,
  para2,
  price,
}: {
  img: string;
  para: string;
  para2?: string; // Optional field
  price: string;
}) {
  return (
    <div className="p-8">
      <div className="w-[250px]">
        <Image src={img} width={300} height={300} alt={para} />
      </div>
      <div className="text">
        <p className="text-gray-700">
          {para} <br /> {para2 || ""}
        </p>
        <h1 className="font-bold text-black text-3xl">{price}</h1>
      </div>
    </div>
  );
}
