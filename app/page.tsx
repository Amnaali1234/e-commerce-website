import Customer from "./components/Customer";
import DressStyle from "./components/DressStyle";

import Hero from "./components/Hero";

import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import LogoSection from "./components/LogoSection";

export default function Home() {
  return (
    <div className="max-w-full h-full flex-grow justify-start items-center">
      <Hero />
      <LogoSection />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Customer />
    </div>
  );
}

// Define the Product type
// "use client";

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { allproducts } from "@/sanity/lib/queries";
// import { Product } from "@/types/product";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const Home = () => {
//   const [Products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allproducts);

//         // Filter products to exclude those with missing required fields
//         const validProducts = fetchedProducts.filter(
//           (product) =>
//             product.image && // Ensure the product has an image
//             product.name && // Ensure the product has a name
//             product.price && // Ensure the product has a price
//             product.slug?.current // Ensure the product has a valid slug
//         );

//         setProducts(validProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//         Our Latest Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {Products.map((product) => (
//           <div
//             key={product?._id}
//             className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             {product?.slug?.current ? (
//               <Link href={`/product/${product.slug.current}`}>
//                 <div>
//                   {product.image && (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.name || "Product Image"}
//                       width={300}
//                       height={300}
//                       className="w-full h-64 object-cover"
//                     />
//                   )}
//                   <div className="p-4">
//                     <h2 className="text-lg font-semibold text-gray-900 mb-2">
//                       {product.name}
//                     </h2>
//                     {/* <p className="text-sm text-gray-600 mb-2">
//                       {product.description || "No description available"}
//                     </p> */}
//                     <p className="text-xl font-bold text-gray-800 mb-4">
//                       ${product.price.toFixed(2)}
//                     </p>
//                     <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
