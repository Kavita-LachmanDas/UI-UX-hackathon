import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card(Props: { img: string | StaticImport; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; veiw: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] px-4 py-6">
        <div className="img">
            <Image src={Props.img} alt='hi' width={700} height={500} />
        </div>
        <div className="text mb-11">
            <h1 className='font-bold text-3xl'>{Props.name}</h1>
            <Link className='underline' href={'#'}>{Props.veiw}</Link>
        </div>
    </div>
  )
}
