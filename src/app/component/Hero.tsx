import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#FBEBB5] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:ml-[210px] px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug max-w-lg mx-auto lg:mx-0">
            Rocket single <br /> seater
          </h1>
          <a
            href="#"
            className="inline-block text-lg text-black underline hover:text-gray-700"
          >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end px-4">
          <Image
            width={300}
            height={300}
            src="/heroimg.PNG" // Place your image in the public folder and name it chair.png
            alt="Rocket single seater"
            className="w-full max-w-xs md:max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
