import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="w-full h-[122px] bg-black flex items-center justify-center">
      <div className="flex flex-wrap justify-between items-center w-[90%] sm:w-[80%] md:w-[70%]">
        {/* Logo 1 */}
        <div className="flex justify-center items-center mb-4 sm:mb-0 w-1/2 sm:w-1/4">
          <Image
            src="/images/logo-1.png"
            alt="logo-1"
            width={111}
            height={58}
          />
        </div>

        {/* Logo 2 */}
        <div className="flex justify-center items-center mb-4 sm:mb-0 w-1/2 sm:w-1/4">
          <Image
            src="/images/logo-2.png"
            alt="logo-2"
            width={111}
            height={58}
          />
        </div>

        {/* Logo 3 */}
        <div className="flex justify-center items-center mb-4 sm:mb-0 w-1/2 sm:w-1/4">
          <Image
            src="/images/logo-3.png"
            alt="logo-3"
            width={111}
            height={58}
          />
        </div>

        {/* Logo 4 */}
        <div className="flex justify-center items-center w-1/2 sm:w-1/4">
          <Image
            src="/images/logo-4.png"
            alt="logo-4"
            width={111}
            height={58}
          />
        </div>
      </div>
    </div>
  );
}
