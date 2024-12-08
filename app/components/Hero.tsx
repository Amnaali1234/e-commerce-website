import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[663px] md:min-h-[700px] lg:min-h-[800px] bg-[#F2F0F1] overflow-hidden flex items-end">
      {/* Container to center and limit content width */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between w-full h-full pb-8 md:pb-16">
        {/* Text Content */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pr-8 lg:pr-16">
          <h1 className="font-IntegralCF font-extrabold text-[32px] md:text-[48px] lg:text-[64px] leading-[40px] md:leading-[48px] lg:leading-[64px] text-black">
            FIND CLOTHES
            <br />
            THAT&nbsp;MATCHES
            <br />
            YOUR STYLE
          </h1>
          <p className="mt-4 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-gray-700">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 md:mt-8 px-6 md:px-10 py-2 md:py-3 bg-black text-white rounded-3xl hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        {/* Image Positioned Below Content on Mobile */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
          <Image
            src="/images/Rectangle 2.png"
            alt="Fashionable Couple"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            priority
          />
        </div>
      </div>

      {/* Star Icons */}
      <div className="absolute top-[18%] right-[10%] w-[24px] h-[24px] md:top-[22%] md:right-[12%] md:w-[32px] md:h-[32px]">
        <Image
          src="/images/starhero.png"
          alt="Star Icon"
          width={32}
          height={32}
        />
      </div>

      <div className="absolute bottom-[25%] right-[30%] w-[24px] h-[24px] md:bottom-[35%] md:right-[25%] md:w-[32px] md:h-[32px]">
        <Image
          src="/images/starhero.png"
          alt="Star Icon"
          width={32}
          height={32}
        />
      </div>
    </section>
  );
}
