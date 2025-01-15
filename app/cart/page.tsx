import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="flex items-center gap-2 py-6 px-10 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/shop" className="hover:text-gray-900">
          Cart
        </Link>
      </div>
      <h1 className="absolute left-12 top-[220px] font-extrabold text-4xl leading-[48px] text-black">
        Your cart
      </h1>
      <div className="absolute left-24 top-[276px] flex flex-col md:flex-row items-start gap-6 w-full">
        {/* Left Side - Cart Items */}
        <div className="flex flex-col items-start p-6 gap-6 w-full md:w-[715px] h-auto border border-gray-300 rounded-2xl">
          {/* First Product */}
          <div className="flex items-center gap-4 w-full h-auto">
            <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-[8px] flex-none">
              <Image
                src="/images/product-2.png"
                alt="product1"
                width={124}
                height={124}
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full md:w-[227px] h-[118px]">
              <div className="font-satoshi font-bold text-[18px] text-black">
                Gradient Graphic T-shirt
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-sm text-gray-600">
                  Size: <span className="font-normal text-black">Large</span>
                </div>
                <div className="text-sm text-gray-600">
                  Color: <span className="font-normal text-black">White</span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[54px] h-[32px] font-satoshi font-bold text-[20px] leading-[32px] text-black">
                  $145
                </div>
                <div className="flex flex-row justify-center items-center p-[12px_20px] gap-5 mx-auto w-[126px] h-[44px] bg-[#F0F0F0] rounded-full flex-none order-1 flex-grow-0">
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
            <div className="flex justify-center items-center w-[44px] h-[44px] text-[#FF3333] text-2xl cursor-pointer absolute right-0 top-5 mr-6">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Second Product */}
          <div className="flex items-center gap-4 w-full h-auto">
            <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-[8px] flex-none">
              <Image
                src="/images/shirt.png"
                alt="product1"
                width={124}
                height={124}
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full md:w-[227px] h-[118px]">
              <div className="font-satoshi font-bold text-[18px] text-black">
                Checkered Shirt
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-sm text-gray-600">
                  Size: <span className="font-normal text-black">Medium</span>
                </div>
                <div className="text-sm text-gray-600">
                  Color: <span className="font-normal text-black">Red</span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[54px] h-[32px] font-satoshi font-bold text-[20px] leading-[32px] text-black">
                  $180
                </div>
                <div className="flex flex-row justify-center items-center p-[12px_20px] gap-5 mx-auto w-[126px] h-[44px] bg-[#F0F0F0] rounded-full flex-none order-1 flex-grow-0">
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
            <div className="flex justify-center items-center w-[44px] h-[44px] text-[#FF3333] text-2xl cursor-pointer absolute right-0 top-5 mr-6">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Third Product */}
          <div className="flex items-center gap-4 w-full h-auto">
            <div className="w-[124px] h-[124px] bg-[#F0EEED] rounded-[8px] flex-none">
              <Image
                src="/images/blue-paint.png"
                alt="product1"
                width={124}
                height={124}
              />
            </div>
            <div className="flex flex-col justify-between items-start w-full md:w-[227px] h-[118px]">
              <div className="font-satoshi font-bold text-[18px] text-black">
                Skinny Fit Jeans
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="text-sm text-gray-600">
                  Size: <span className="font-normal text-black">Large</span>
                </div>
                <div className="text-sm text-gray-600">
                  Color: <span className="font-normal text-black">Blue</span>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[54px] h-[32px] font-satoshi font-bold text-[20px] leading-[32px] text-black">
                  $240
                </div>
                <div className="flex flex-row justify-center items-center p-[12px_20px] gap-5 mx-auto w-[126px] h-[44px] bg-[#F0F0F0] rounded-full flex-none order-1 flex-grow-0">
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
            <div className="flex justify-center items-center w-[44px] h-[44px] text-[#FF3333] text-2xl cursor-pointer absolute right-0 top-5 mr-6">
              <RiDeleteBinLine />
            </div>
          </div>

          {/* Line Divider */}
          <div className="w-full h-px border border-[#0000001a] flex-none order-1 self-stretch flex-grow-0"></div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-gray-100 p-6 rounded max-w-full md:max-w-[505px] h-auto border border-gray-300">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-bold">$565</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Discount (-20%)</span>
            <span className="text-red-500 font-bold">-$113</span>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Delivery Fee</span>
            <span className="font-bold">$15</span>
          </div>

          <div className="w-full h-px border border-[#0000001a] mb-4"></div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>$467</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
            <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-full p-3 w-full max-w-[326px] h-[48px]">
              <div className="w-[24px] h-[24px]">
                <GoTag />
              </div>
              <input
                type="text"
                placeholder="Add promo code"
                className=" font-satoshi text-bold bg-[#F0F0F0]"
              />
            </div>

            <button className="h-[48px] w-full sm:w-[119px] bg-black text-white font-medium rounded-full flex items-center justify-center px-4 mt-4 sm:mt-0">
              Apply
            </button>
          </div>

          <div className="flex justify-center items-center p-[16px_54px] gap-[12px] w-full sm:w-[457px] h-[60px] bg-black rounded-[62px]">
            <button className="w-full text-white font-satoshi font-medium text-[16px] leading-[22px] flex items-center justify-center gap-2">
              Go to Checkout
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
