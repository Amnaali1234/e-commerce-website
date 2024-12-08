import { RxCross2 } from "react-icons/rx";

export default function Header() {
  return (
    <header className="top-0 left-0 w-full bg-black flex items-center justify-center py-2 px-4">
      <div className="w-full max-w-[429px] flex justify-between items-center text-white">
        <p className="font-satoshi text-[12px] md:text-[14px] leading-[16px] text-center flex-1">
          Sign up and get 20% off on your first order. Sign Up Now
        </p>
        <RxCross2 size={20} className="ml-2 cursor-pointer shrink-0" />
      </div>
    </header>
  );
}
