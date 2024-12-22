import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import Product from "./components/Product";
import Review from "./components/Review";
import { Button } from "@/components/ui/button";
import { TiTick } from "react-icons/ti";

export default function Shop() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {" "}
      {/* Prevent horizontal scroll */}
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 py-6 px-10 text-sm text-gray-600">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <IoIosArrowForward />
        <Link href="/shop" className="hover:text-gray-900">
          Shop
        </Link>
        <IoIosArrowForward />
        <Link href="/shop/men" className="hover:text-gray-900">
          Men
        </Link>
        <IoIosArrowForward />
        <span className="text-black">T-shirts</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Image Thumbnails */}
        <div className="lg:col-span-2 flex flex-col items-start space-y-4">
          <Image
            src="/images/shop-img-2.png"
            alt="Thumbnail 1"
            width={152}
            height={167}
            className="w-[152px] h-[167px] border border-black rounded-[20px] object-cover"
          />
          <Image
            src="/images/shop-img-3.png"
            alt="Thumbnail 2"
            width={152}
            height={167}
            className="w-[152px] h-[167px] border hover:border-black rounded-[20px] object-cover"
          />
          <Image
            src="/images/shop-img-1.png"
            alt="Thumbnail 3"
            width={152}
            height={167}
            className="w-[152px] h-[167px] border hover:border-black rounded-[20px] object-cover"
          />
        </div>

        {/* Center Column - Main Image */}
        <div className="lg:col-span-5 flex justify-center">
          <Image
            src="/images/shop-img-2.png"
            alt="Main Product"
            width={444}
            height={530}
            className="w-[444px] h-[530px] border border-gray-300 rounded-[20px] object-cover"
          />
        </div>

        {/* Right Column - Product Details */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-[40px] font-bold leading-[48px] text-black">
            One Life Graphic T-shirt
          </h1>

          {/* Product Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <IoIosStar key={index} size={24} />
            ))}
            <span className="text-black text-[16px]">4.5/5</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4">
            <p className="text-[32px] font-bold text-black">$260</p>
            <p className="text-[32px] font-bold text-black/30 line-through">
              $300
            </p>
            <p className="text-lg text-red-500 rounded-xl bg-red-100 px-2">
              -40%
            </p>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 border-b-2 border-gray-100 mt-6">
            This graphic T-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Select Colors:
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <Button className="w-8 h-8 rounded-full bg-[#4F4631] border border-gray-300">
                <TiTick size={20} />
              </Button>
              <Button className="w-8 h-8 rounded-full bg-[#314F4A] border border-gray-300"></Button>
              <Button className="w-8 h-8 rounded-full bg-[#31344F] border border-gray-300"></Button>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mt-6">
              Choose Size:
            </h3>
            <div className="flex flex-row justify-center items-center px-6 py-3 gap-3 w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] flex-none order-0 flex-grow-0 flex-row">
              <span className="w-[38px] h-[22px] font-satoshi font-normal text-[16px] leading-[22px] text-[#00000099] flex-none order-0 flex-grow-0">
                Small
              </span>
            </div>
            <div className="flex flex-row justify-center items-center p-[12px_24px] gap-[12px] w-[105px] h-[46px] bg-[#F0F0F0] rounded-[62px] flex-none order-1 flex-grow-0">
              <div className="w-[57px] h-[22px] text-[rgba(0,0,0,0.6)] font-satoshi text-[16px] leading-[22px] flex-none order-0 flex-grow-0">
                Medium
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews and Product Suggestions */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <Review />
        <Product />
      </div>
    </main>
  );
}
