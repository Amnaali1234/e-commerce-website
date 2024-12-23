export default function Review() {
  return (
    <main className="flex flex-row justify-center items-center">
      <div className="absolute w-[133px] h-[14px] left-[240px] top-[826px] font-satoshi font-normal text-[20px] leading-[22px] text-[rgba(0,0,0,0.6)]">
        Product Details
      </div>

      <div className="absolute w-[154px] h-[14px] left-[calc(50%-154px/2-1px)] top-[826px] font-satoshi font-medium text-[20px] leading-[22px] text-[#000000] text-center">
        Rating & Reviews
      </div>

      <div className="absolute w-[47px] h-[14px] left-[calc(50%-47px/2+413.5px)] top-[826px] font-satoshi font-normal text-[20px] leading-[22px] text-[rgba(0,0,0,0.6)] text-right">
        FAQs
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
