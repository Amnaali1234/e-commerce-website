import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Shop() {
  return (
    <main className="min-h-screen">
      <div className="relative flex flex-row items-center gap-3 w-[259px] h-[22px] left-[100px] top-[30px]">
        {/* Home Section */}
        <div className="flex flex-row items-center gap-1 w-[63px] h-[16px]">
          <div className="w-[43px] h-[11px] font-satoshi font-normal text-[rgba(0,0,0,0.6)] text-[16px] leading-[22px]">
            Home <IoIosArrowForward className="ml-1" />
          </div>
        </div>
        {/* Shop Section */}
        <div className="flex flex-row items-center gap-1 w-[57px] h-[16px]">
          <div className="w-[37px] h-[11px] font-satoshi font-normal text-[rgba(0,0,0,0.6)] text-[16px] leading-[22px]">
            Shop <IoIosArrowForward />
          </div>

          {/* Rotating Arrow inside Shop */}
          <div className="w-[16px] h-[16px] transform rotate-[-90deg]"></div>
        </div>
        {/* Men Section */}
        <div className="flex flex-row items-center gap-1 w-[57px] h-[16px]">
          <div className="w-[37px] h-[11px] font-satoshi font-normal text-[rgba(0,0,0,0.6)] text-[16px] leading-[22px]">
            Men <IoIosArrowForward />
          </div>

          {/* Rotating Arrow inside Men */}
          <div className="w-[16px] h-[16px] transform rotate-[-90deg]"></div>
        </div>
        {/* T-shirt Section */}
        <div className="w-[100px] h-[22px] mt-3 font-satoshi font-normal text-[16px] leading-[22px] text-black flex-none order-3 flex-grow-0">
          T-shirts
        </div>
        {/* <div className="w-[152px] h-[167px] left-[100px] top-[216px] rounded-[20px]">
          <Image
            src="/images/product-1.png" // Replace with your actual image path
            alt="image description"
            width={152}
            height={167}
            className="object-cover rounded-[20px]" // Ensures the image covers the area with rounded corners
          />
        </div> */}
        <div className="absolute w-[444px] h-[530px] left-[266px] mt-30 bg-[#F0EEED] rounded-[20px]">
          <Image
            src="/images/shop-img-2.png"
            alt="product image"
            width={444}
            height={530}
          />
        </div>

        {/* Link */}
        <Link href="/Navbar"></Link>
      </div>
    </main>
  );
}
