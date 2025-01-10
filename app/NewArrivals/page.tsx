// File: src/app/components/HeroSection.js
export default function HeroSection() {
  const products = [
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      rating: "4.5",
      discount: "20%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Polo with Tipping Details",
      price: "$180",
      rating: "4.5",
      discount: "30%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Black Striped T-shirt",
      price: "$120",
      rating: "4.5",
      discount: "50%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Skinny Fit Jeans",
      price: "$240",
      rating: "4.5",
      discount: "20%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Checkered Shirt",
      price: "$180",
      rating: "4.5",
      discount: "10%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sleeve Striped T-shirt",
      price: "$130",
      rating: "4.5",
      discount: "30%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Vertical Striped Shirt",
      price: "$160",
      rating: "4.5",
      discount: "15%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Courage Graphic T-shirt",
      price: "$90",
      rating: "4.5",
      discount: "25%",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Loose Fit Bermuda Shorts",
      price: "$110",
      rating: "4.5",
      discount: "10%",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li className="text-gray-700 cursor-pointer hover:text-black">
                T-shirts
              </li>
              <li className="text-gray-700 cursor-pointer hover:text-black">
                Shorts
              </li>
              <li className="text-gray-700 cursor-pointer hover:text-black">
                Shirts
              </li>
              <li className="text-gray-700 cursor-pointer hover:text-black">
                Jeans
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Price</h3>
            <input type="range" min="50" max="500" className="w-full" />
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Colors</h3>
            <div className="flex space-x-2">
              <span className="w-6 h-6 rounded-full bg-red-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"></span>
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              <button className="px-2 py-1 border rounded-lg text-gray-700 hover:bg-gray-200">
                S
              </button>
              <button className="px-2 py-1 border rounded-lg text-gray-700 hover:bg-gray-200">
                M
              </button>
              <button className="px-2 py-1 border rounded-lg text-gray-700 hover:bg-gray-200">
                L
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold mb-6">Casual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-sm font-bold mt-2">{product.name}</h3>
                <p className="text-gray-700 mt-1">{product.price}</p>
                <p className="text-green-500 mt-1">{product.discount}</p>
                <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
