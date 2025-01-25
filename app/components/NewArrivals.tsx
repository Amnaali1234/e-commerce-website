// import Image from "next/image";
// import { IoIosStar } from "react-icons/io";

// export default function NewArrivals() {
//   return (
//     <section className="py-16 px-4 bg-white">
//       {/* New Arrivals Heading */}
//       <h2 className="text-center text-4xl font-extrabold text-black mb-12">
//         NEW ARRIVALS
//       </h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {/* Product 1 */}
//         <div className="border border-gray-300 rounded-lg transition-transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg">
//           <Image
//             src="/images/t-shirt-image.png"
//             alt="T-shirt with Tape Details"
//             width={300}
//             height={300}
//             className="object-cover w-full h-60"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-black">
//               T-shirt with Tape Details
//             </h3>
//             <div className="flex text-[#FFAD33] items-center space-x-1">
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <span className="text-sm text-gray-500 mt-2">4.5/5</span>
//             </div>

//             <p className="text-sm text-black line-through mt-1 font-semibold">
//               $140
//             </p>
//           </div>
//         </div>

//         {/* Product 2 */}
//         <div className="border border-gray-300 rounded-lg transition-transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg">
//           <Image
//             src="/images/paint.png"
//             alt="Skinny Fit Jeans"
//             width={300}
//             height={300}
//             className="object-cover w-full h-60"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-black">
//               Skinny Fit Jeans
//             </h3>
//             <div className="flex text-[#FFAD33] items-center space-x-1">
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <span className="text-sm text-gray-500 mt-2">3.5/5</span>
//             </div>

//             <p className="text-sm text-black line-through mt-1 font-semibold">
//               $240
//             </p>
//           </div>
//         </div>

//         {/* Product 3 */}
//         <div className="border border-gray-300 rounded-lg transition-transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg">
//           <Image
//             src="/images/shirt.png"
//             alt="Checkered Shirt"
//             width={300}
//             height={300}
//             className="object-cover w-full h-60"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-black">
//               Checkered Shirt
//             </h3>
//             <div className="flex text-[#FFAD33] items-center space-x-1">
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <span className="text-sm text-gray-500 mt-2">4.5/5</span>
//             </div>

//             <p className="text-sm text-black mt-2 font-semibold">$180</p>
//           </div>
//         </div>

//         {/* Product 4 */}
//         <div className="border border-gray-300 rounded-lg transition-transform hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg">
//           <Image
//             src="/images/orange.png"
//             alt="Sleeve Striped T-shirt"
//             width={300}
//             height={300}
//             className="object-cover w-full h-60"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold text-black">
//               Sleeve Striped T-shirt
//             </h3>
//             <div className="flex text-[#FFAD33] items-center space-x-1">
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <IoIosStar />
//               <span className="text-sm text-gray-500 mt-2">4.5/5</span>
//             </div>
//             <p className="text-sm text-black font-semibold line-through mt-1">
//               $130
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* View All Button */}
//       <div className="text-center mt-8">
//         <button className="mt-8 px-10 py-3 bg-white text-black rounded-3xl border border-black hover:bg-gray-200">
//           View all
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allproducts, four } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import product from "@/sanity/schemaTypes/product";
import { Button } from "@/components/ui/button";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const Home = () => {
  const [Products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(four);

        // Filter products to exclude those with missing required fields
        const validProducts = fetchedProducts.filter(
          (product) =>
            product.image && // Ensure the product has an image
            product.name && // Ensure the product has a name
            product.price && // Ensure the product has a price
            product.slug?.current // Ensure the product has a valid slug
        );

        setProducts(validProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, Product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(Product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-black">
        New Arrivals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((product) => (
          <div
            key={product?._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {product?.slug?.current ? (
              <Link href={`/product/${product.slug.current}`}>
                <div>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name || "Product Image"}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h2>

                    <p className="text-xl font-bold text-gray-800 mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <Button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:lg hover:scale-110 transition-transform duration-300 ease-in-out"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
