import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ProductPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      date: "August 14, 2023",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex M.",
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
      rating: 4,
    },
    {
      id: 3,
      name: "Ethan R.",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt!",
      date: "August 16, 2023",
      rating: 5,
    },
    {
      id: 4,
      name: "Olivia P.",
      review:
        "As a UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
      rating: 5,
    },
    {
      id: 5,
      name: "Liam K.",
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
      rating: 4,
    },
    {
      id: 6,
      name: "Ava H.",
      review:
        "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The careful and thoughtful layout of the design makes this t-shirt a masterpiece.",
      date: "August 19, 2023",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Tabs Section */}
      <div className="flex items-center space-x-64 border-b border-gray-200 pb-3 mb-8">
        <button className="px-4 py-2 font-semibold text-gray-800 ">
          Product Details
        </button>
        <button className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700 border-b-2 border-black">
          Rating & Reviews
        </button>
        <button className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700">
          FAQs
        </button>
      </div>

      {/* Review Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Reviews (45)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
            >
              <div className="absolute flex flex-row items-start p-0 gap-2.5 w-[354px] h-[48px] left-[986px] top-[888px]">
                <div className="flex flex-row justify-between items-center p-[16px_20px] gap-3 w-[48px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex-none order-0 flex-grow-0">
                  <div className="m-auto w-[24px] h-[24px] flex-none order-0 flex-grow-0">
                    <div className="m-auto w-[24px] h-[24px] flex-none order-0 flex-grow-0">
                      <Image
                        src="/images/vector.png"
                        alt="vector-image"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center p-[16px_20px] gap-3 w-[120px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex-none order-1 flex-grow-0">
                  <div className="m-auto w-[43px] h-[22px] text-[16px] leading-[22px] font-satoshi font-medium text-black flex-none order-0 flex-grow-0">
                    Latest
                  </div>
                  <div className="m-auto w-[16px] h-[16px] flex-none order-1 flex-grow-0">
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center p-[16px_20px] gap-3 w-[166px] h-[48px] bg-black rounded-[62px] flex-none order-2 flex-grow-0">
                  <div className="m-auto w-[107px] h-[22px] text-[16px] leading-[22px] font-satoshi font-medium text-white flex-none order-0 flex-grow-0">
                    Write a Review
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="text-yellow-500 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="mt-8 px-10 py-3 bg-white text-black rounded-3xl border border-black hover:bg-gray-200">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
