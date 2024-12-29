import Image from "next/image";
export default function Review() {
  return (
    <main className="flex justify-between items-center w-full max-w-screen px-8 top-[826px] left-0">
      {/* Product Details */}
      <div className="font-satoshi font-normal text-[20px] leading-[22px] text-black/60">
        Product Details
      </div>

      {/* Rating & Reviews */}
      <div className="font-satoshi font-medium text-[20px] leading-[22px] text-center text-black">
        Rating & Reviews
      </div>

      {/* FAQs */}
      <div className="font-satoshi font-normal text-[20px] leading-[22px] text-black/60 text-right">
        FAQs
      </div>
      <div className="absolute w-[1240px] h-0 left-[100px] top-[864px] border border-[rgba(0,0,0,0.1)]"></div>
      <div className="absolute w-[414px] h-0 left-[513px] top-[864px] border-2 border-black"></div>
      <div className="flex flex-row justify-between ">
        <div className="absolute w-[125px] h-[32px] left-[100px] top-[896px] font-satoshi font-bold text-[24px] leading-[32px] flex items-center text-black">
          All Reviews
        </div>
        <div className="absolute w-[33px] h-[11px] left-[233px] top-[910px] font-satoshi font-normal text-[16px] leading-[22px] text-black/60">
          (451)
        </div>
      </div>
      <div className="flex flex-row items-start p-0 gap-[10px] absolute w-[354px] h-[48px] left-[986px] top-[888px]">
        <div className="flex flex-row justify-between items-center p-[16px_20px] gap-[12px] w-[48px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex-none order-0 flex-grow-0">
          <div className="m-auto w-[24px] h-[24px] flex-none order-0 flex-grow-0">
            <div className="absolute left-[7.81%] right-[7.81%] top-[10.94%] bottom-[10.94%]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

// import { IoIosStar } from "react-icons/io";

// export default function Reviewr() {
//   return (
//     <section
//       id="customer-testimonial"
//       className="bg-[#fff] py-[112px] flex flex-col gap-[64px] items-center"
//     >
//       {/* Heading */}
//       <div className="w-full text-start mx-4 sm:ml-16 lg:ml-60">
//         <h2 className="text-4xl font-extrabold leading-[57.6px]">
//           OUR HAPPY CUSTOMERS
//         </h2>
//       </div>

//       {/* Testimonials Container */}
//       <div className="w-full max-w-[1152px] flex flex-col sm:flex-row sm:justify-between gap-[32px] px-4">
//         {/* Card 1 */}
//         <div className="w-full sm:w-[400px] h-[240px] p-8 flex flex-col gap-6 border border-black rounded-lg shadow-lg bg-white">
//           {/* Stars */}
//           <div className="flex gap-1 text-yellow-500">
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//           </div>
//           {/* Customer Name */}
//           <h3 className="text-xl font-semibold">Sarah M.</h3>
//           {/* Testimonial Text */}
//           <p className="text-[18px] leading-[27px] text-gray-700">
//             &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Suspendisse tristique.&quot;
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="w-full sm:w-[400px] h-[240px] p-8 flex flex-col gap-6 border border-black rounded-lg shadow-lg bg-white">
//           {/* Stars */}
//           <div className="flex gap-1 text-yellow-500">
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//           </div>
//           {/* Customer Name */}
//           <h3 className="text-xl font-semibold">Alex K.</h3>
//           {/* Testimonial Text */}
//           <p className="text-[18px] leading-[27px] text-gray-700">
//             &quot;Excellent service and great quality products. Highly
//             recommended!&quot;
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="w-full sm:w-[400px] h-[240px] p-8 flex flex-col gap-6 border border-black rounded-lg shadow-lg bg-white">
//           {/* Stars */}
//           <div className="flex gap-1 text-yellow-500">
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//             <IoIosStar size={24} />
//           </div>
//           {/* Customer Name */}
//           <h3 className="text-xl font-semibold">James L.</h3>
//           {/* Testimonial Text */}
//           <p className="text-[18px] leading-[27px] text-gray-700">
//             &quot;Great experience! The team was very professional and
//             attentive.&quot;
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
