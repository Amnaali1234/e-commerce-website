import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const products = [
    {
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 4.5,
      discount: "20%",
      image: "/images/product-2.png",
    },
    {
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      discount: "30%",
      image: "/images/product-3.png",
    },
    {
      name: "Black Striped T-shirt",
      price: 120,
      rating: 4.5,
      discount: "50%",
      image: "/images/product-4.png",
    },
    {
      name: "Skinny Fit Jeans",
      price: 240,
      rating: 4.5,
      discount: "20%",
      image: "/images/blue-paint.png",
    },
    {
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      discount: "10%",
      image: "/images/shirt.png",
    },
    {
      name: "Sleeve Striped T-shirt",
      price: 130,
      rating: 4.5,
      discount: "30%",
      image: "/images/orange.png",
    },
    {
      name: "Vertical Striped Shirt",
      price: 160,
      rating: 4.5,
      discount: "15%",
      image: "/images/sale1.png",
    },
    {
      name: "Courage Graphic T-shirt",
      price: 90,
      rating: 4.5,
      discount: "25%",
      image: "/images/sale2.png",
    },
    {
      name: "Loose Fit Bermuda Shorts",
      price: 110,
      rating: 4.5,
      discount: "10%",
      image: "/images/sale3.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen mb-32 py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 py-6 px-10 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/shop" className="hover:text-gray-900">
          Casual
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg md:col-span-1">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Categories */}
          <ul className="mb-6 space-y-2">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
              (category, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex justify-between items-center hover:underline cursor-pointer"
                >
                  {category} <IoIosArrowForward />
                </li>
              )
            )}
          </ul>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Price</h3>
            <input type="range" min="50" max="500" className="w-full" />
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Colors</h3>
            <div className="flex space-x-5">
              <span className="w-6 h-6 rounded-full bg-green-500"></span>
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
              <span className="w-6 h-6 rounded-full bg-orange-500"></span>
              <span className="w-6 h-6 rounded-full bg-sky-500"></span>
            </div>
            <div className="flex space-x-5 mt-8">
              <span className="w-6 h-6 rounded-full bg-blue-700"></span>
              <span className="w-6 h-6 rounded-full bg-purple-700"></span>
              <span className="w-6 h-6 rounded-full bg-pink-500"></span>
              <span className="w-6 h-6 rounded-full bg-gray-400"></span>
              <span className="w-6 h-6 rounded-full bg-black"></span>
            </div>
          </div>

          {/* Size Section */}
          <div className="flex flex-col gap-5 w-full mt-12">
            <div className="flex justify-between items-center">
              <div className="text-black font-bold text-lg">Size</div>
              <FaChevronDown />
            </div>
          </div>

          {/* 9 Buttons below Size */}
          <div className="mt-8 grid grid-cols-2 w-full h-14 gap-3">
            {[
              "XX-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
              "3X-Large",
              "4X-Large",
            ].map((size, index) => (
              <div
                key={index}
                className={`${
                  size === "Large" ? "bg-black text-white" : "bg-gray-200"
                } px-5 py-2.5 rounded-full w-32`}
              >
                <span className="text-sm">{size}</span>
              </div>
            ))}
          </div>

          {/* Dress Style Section */}
          <div className="mt-60">
            <h3 className="text-[20px] font-bold mb-4 flex items-center justify-between">
              Dress Style <FaChevronDown />
            </h3>

            <ul className="space-y-2">
              {["Casual", "Formal", "Party", "Gym"].map((dress, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex justify-between items-center cursor-pointer hover:text-gray-900"
                >
                  <span>{dress}</span>
                  <IoIosArrowForward />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-4">
            <button className="px-20 py-3 mt-6 bg-black text-white rounded-full hover:bg-gray-700 transition duration-200">
              Apply Filter
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="md:col-span-3">
          <h2 className="text-4xl font-extrabold mb-6">Casual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const discountValue = parseFloat(product.discount);
              const originalPrice = product.price / (1 - discountValue / 100);

              return (
                <div
                  key={index}
                  className="p-4 shadow-sm rounded-lg hover:shadow-xl transition duration-200 flex flex-col justify-between"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                    {/* Display "Previous" Button below Green Shirt */}
                    {product.name === "Checkered Shirt" && (
                      <div className="absolute bottom-0 w-full flex justify-center mb-4">
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center">
                          <BiLeftArrowAlt className="w-5 h-5 text-gray-600" />
                          <span className="ml-2 text-sm font-medium text-gray-600">
                            Previous
                          </span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm font-bold mt-2">{product.name}</h3>
                  {/* Rating */}
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar
                        key={i}
                        className={`${
                          i < Math.round(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-500 ml-2">
                      {product.rating}/5
                    </span>
                  </div>
                  {/* Price and Discount */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <p className="text-lg font-bold text-gray-800 mr-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        ${originalPrice.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded-lg">
                      {product.discount}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-28 relative">
            <div className="absolute bottom-10 flex items-start gap-4">
              <Button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center ">
                <BiLeftArrowAlt className="w-5 h-5 text-black" />
                <span className="ml-2 text-sm font-medium text-black ">
                  Previous
                </span>
              </Button>
            </div>
            <div className="absolute bottom-10 flex items-start gap-4 ml-80">
              <Button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md flex items-center ">
                <BiRightArrowAlt className="w-5 h-5 text-black" />
                <span className="ml-2 text-sm font-medium text-black ">
                  Next
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
