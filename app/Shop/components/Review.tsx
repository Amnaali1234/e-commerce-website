import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ProductPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to t-shirt.",
      date: "Posted on August 14, 2023",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex M.",
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "Posted on August 15, 2023",
      rating: 5,
    },
    {
      id: 3,
      name: "Ethan R.",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect.",
      date: "Posted on August 16, 2023",
      rating: 5,
    },
    {
      id: 4,
      name: "Olivia P.",
      review:
        "As a UX/UI enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "Posted on August 17, 2023",
      rating: 5,
    },
    {
      id: 5,
      name: "Liam K.",
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about attention to detail. It’s still like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "Posted on August 18, 2023",
      rating: 5,
    },
    {
      id: 6,
      name: "Ava H.",
      review:
        "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
      date: "Posted on August 19, 2023",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Tabs Section */}
      <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-3 mb-8">
        <button className="px-4 py-2 font-semibold text-gray-800">
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
        <h2 className="text-4xl font-extrabold mb-6">All Reviews</h2>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full">
            <Image
              src="/images/vector.png"
              alt="vector-image"
              width={24}
              height={24}
              className="rounded-full"
            />
            Latest
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full">
            Sort By <IoIosArrowDown />
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full">
            Write a Review
          </button>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
              </div>

              {/* Name with Tick */}
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold mr-2">{review.name}</h3>
                <FaCheckCircle className="text-green-500 text-xl" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">{review.review}</p>

              {/* Date */}
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="mt-8 px-10 py-3 bg-white text-black rounded-3xl border border-black">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
