// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { BiCalendar, BiTime } from 'react-icons/bi'
// import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// export default function Card3(Props: { img: string | StaticImport; para: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
//   return (
//     <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[350px] p-4 overflow-x-hidden">
//       <div className="img">
//         <Image
//           width={300}
//           height={300}
//           src={Props.img} // Place your image in the public folder
//           alt="Rocket single seater"
//           className="w-full max-w-xs md:max-w-md lg:max-w-full object-contain"
//         />
//       </div>
//       <div className="text mt-4">
//         <p className="text-center">{Props.para}</p>
//         <Link className="underline block text-center" href={'#'}>Read More</Link>
//         <div className="flex items-center justify-center mt-2 text-sm">
//           <h1 className="flex items-center space-x-2">
//             <BiTime /> <span>5 min</span>
//             <BiCalendar /> <span>12<sup>th</sup> Oct 2022</span>
//           </h1>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar, BiTime } from 'react-icons/bi';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
  img: string | StaticImport;
  para: string | number | React.ReactNode; // Using React.ReactNode for diverse React elements
}

export default function Card3({ img, para }: CardProps) {
  return (
    <div className="w-full sm:w-[350px] md:w-[300px] lg:w-[350px] p-4 overflow-x-hidden">
      <div className="img">
        <Image
          width={300}
          height={300}
          src={img} // Place your image in the public folder
          alt="Rocket single seater"
          className="w-full max-w-xs md:max-w-md lg:max-w-full object-contain"
        />
      </div>
      <div className="text mt-4">
        <p className="text-center">{para}</p>
        <Link className="underline block text-center" href={'#'}>Read More</Link>
        <div className="flex items-center justify-center mt-2 text-sm">
          <h1 className="flex items-center space-x-2">
            <BiTime /> <span>5 min</span>
            <BiCalendar /> <span>12<sup>th</sup> Oct 2022</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
