import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartPage() {
  return (
    <div className="bg-gray-100 min-h-screen mb-14 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 py-6 px-2 sm:px-10 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/shop" className="hover:text-gray-900">
          Cart
        </Link>
      </div>
      <h1 className="font-extrabold text-2xl sm:text-4xl leading-tight text-black mb-6">
        Your cart
      </h1>
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {/* Left Side - Cart Items */}
        <div className="flex flex-col items-start p-4 sm:p-6 gap-6 w-full lg:w-2/3 border border-gray-300 rounded-2xl">
          {/* Product Card 1 */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-none">
              <Image
                src="/images/product-2.png"
                alt="Gradiant Graphic T-shirt"
                width={124}
                height={124}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <div className="font-bold text-lg sm:text-xl text-black">
                Gradiant Graphic T-shirt
              </div>
              <div className="text-sm text-gray-600">
                Size: <span className="font-normal text-black">Large</span>
              </div>
              <div className="text-sm text-gray-600">
                Color: <span className="font-normal text-black">White</span>
              </div>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="text-black font-bold">$145</div>
                <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
                  <Image
                    src="/images/sub.png"
                    alt="Minus Icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <span>1</span>
                  <Image
                    src="/images/add.png"
                    alt="Plus Icon"
                    width={18}
                    height={18}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="text-red-500 text-xl cursor-pointer">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-none">
              <Image
                src="/images/shirt.png"
                alt="Polo with Tipping Details"
                width={124}
                height={124}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <div className="font-bold text-lg sm:text-xl text-black">
                Checkered Shirt
              </div>
              <div className="text-sm text-gray-600">
                Size: <span className="font-normal text-black">Medium</span>
              </div>
              <div className="text-sm text-gray-600">
                Color: <span className="font-normal text-black">Red</span>
              </div>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="text-black font-bold">$180</div>
                <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
                  <Image
                    src="/images/sub.png"
                    alt="Minus Icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <span>1</span>
                  <Image
                    src="/images/add.png"
                    alt="Plus Icon"
                    width={18}
                    height={18}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="text-red-500 text-xl cursor-pointer">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="flex items-center gap-4 w-full">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex-none">
              <Image
                src="/images/blue-paint.png"
                alt="Black Striped T-shirt"
                width={124}
                height={124}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full">
              <div className="font-bold text-lg sm:text-xl text-black">
                Skinny Fit Jeans
              </div>
              <div className="text-sm text-gray-600">
                Size: <span className="font-normal text-black">Large</span>
              </div>
              <div className="text-sm text-gray-600">
                Color: <span className="font-normal text-black">Blue</span>
              </div>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="text-black font-bold">$240</div>
                <div className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
                  <Image
                    src="/images/sub.png"
                    alt="Minus Icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <span>1</span>
                  <Image
                    src="/images/add.png"
                    alt="Plus Icon"
                    width={18}
                    height={18}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="text-red-500 text-xl cursor-pointer">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Line Divider */}
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-gray-100 p-4 sm:p-6 rounded w-full lg:w-1/3 border border-gray-300">
          <h2 className="font-bold text-lg sm:text-xl mb-4">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold">$445</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Discount (-20%)</span>
            <span className="text-red-500 font-bold">-$89</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Delivery Fee</span>
            <span className="font-bold">$15</span>
          </div>

          <div className="w-full h-px bg-gray-300 mb-4"></div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>$371</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-gray-200 rounded-full p-3">
              <GoTag />
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-gray-200 w-full outline-none"
              />
            </div>

            <button className="h-12 bg-black text-white rounded-full flex items-center justify-center">
              Apply
            </button>
          </div>

          <button className="w-full mt-4 h-14 bg-black text-white rounded-full flex items-center justify-center gap-2">
            Go to Checkout
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
