import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  _type: string;
  image: string;
  description: string;
  category: string;
  price: number;
}

interface ProductPageProps {
  params: { slug: string };
}

// Function to fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  const query = groq`
    *[_type == "products" && slug.current == $slug][0]{
      _id,
      name,
      slug { current },
      _type,
      image,
      description,
      category,
      price
    }
  `;

  try {
    const product = await client.fetch(query, { slug });
    return product || null; // Return null if no product is found
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Component for rendering the product page
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // Fetch the product data
  const product = await getProduct(slug);

  // Handle cases where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-md shadow-lg h-120 w-80 mt-16"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold mt-8 text-black">{product.name}</h1>
          <p className="text-black font-medium text-lg">
            {product.description}
          </p>

          <p className="text-2xl font-sans">${product.price}</p>
          <Button className="w-full bg-black text-white py-6 rounded-3xl hover:bg-gray-600 transition duration-300">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
