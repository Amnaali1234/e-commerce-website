import Image from "next/image";
import { IoIosStar } from "react-icons/io";

export default function NewArrivals() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* New Arrivals Heading */}
      <h2 className="text-center text-4xl font-extrabold text-black mb-12">
        YOU MIGHT ALSO LIKE
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/product-1.png"
            alt="T-shirt with Tape Details"
            width={300}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black">
              Polo with Contrast Trims
            </h3>
            <div className="flex text-[#FFAD33] items-center space-x-1">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <span className="text-sm text-gray-500 mt-2">5.0/5</span>
            </div>

            <p className="text-sm text-black line-through mt-1 font-semibold">
              $212
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/product-2.png"
            alt="Skinny Fit Jeans"
            width={300}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black">
              Gradient Graphic T-shirt
            </h3>
            <div className="flex text-[#FFAD33] items-center space-x-1">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <span className="text-sm text-gray-500 mt-2">3.5/5</span>
            </div>

            <p className="text-sm text-black line-through mt-1 font-semibold">
              $145
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/product-3.png"
            alt="Checkered Shirt"
            width={300}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black">
              Polo with Tipping Details
            </h3>
            <div className="flex text-[#FFAD33] items-center space-x-1">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <span className="text-sm text-gray-500 mt-2">4.5/5</span>
            </div>

            <p className="text-sm text-black mt-2 font-semibold">$180</p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/product-4.png"
            alt="Sleeve Striped T-shirt"
            width={300}
            height={300}
            className="object-cover w-full h-60"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black">
              Black Striped T-shirt
            </h3>
            <div className="flex text-[#FFAD33] items-center space-x-1">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <span className="text-sm text-gray-500 mt-2">5.0/5</span>
            </div>
            <p className="text-sm text-black font-semibold line-through mt-1">
              $120
            </p>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="mt-8 px-10 py-3 bg-white text-black rounded-3xl border border-black hover:bg-gray-200">
          View all
        </button>
      </div>
    </section>
  );
}