import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <main>
      <div className="flex flex-row items-center p-0 gap-3 absolute w-[259px] h-[22px] left-[100px] top-[158px]">
        <div className="flex flex-row items-center p-0 gap-1 w-[63px] h-[16px] flex-none order-0 flex-grow-0">
          <span className="w-[43px] h-[11px] font-[400] text-[16px] leading-[22px] text-[rgba(0,0,0,0.6)] flex-none order-0 flex-grow-0">
            Home
          </span>
          <div className="w-[16px] h-[16px] rotate-[-90deg] flex-none order-1 flex-grow-0">
            <div className="absolute left-[32.8%] right-[-4.7%] top-[85.95%] bottom-[-26.6%] bg-[rgba(0,0,0,0.6)] rotate-[-90deg]">
              <Image src="/images/arrow-icon.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <Link href="/Navbar"></Link>
    </main>
  );
};

export default Shop;
