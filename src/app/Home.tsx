import React from "react";
import { Products } from "./data/Products";

import Link from "next/link";
import Card2 from "./component/Card2";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center p-8">
      {Products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <div className="cursor-pointer">
            <Card2
              img={product.img}
              para={product.name}
              para2={product.description}
              price={`Rs. ${product.price}`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
