// File: src/app/components/HeroSection.js
export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Categories</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">T-shirts</li>
                <li className="text-gray-700">Shorts</li>
                <li className="text-gray-700">Shirts</li>
                <li className="text-gray-700">Jeans</li>
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
                <span className="w-6 h-6 rounded-full bg-red-500"></span>
                <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                <span className="w-6 h-6 rounded-full bg-yellow-500"></span>
              </div>
            </div>
            {/* Size */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                <button className="px-2 py-1 border rounded-lg text-gray-700">
                  S
                </button>
                <button className="px-2 py-1 border rounded-lg text-gray-700">
                  M
                </button>
                <button className="px-2 py-1 border rounded-lg text-gray-700">
                  L
                </button>
              </div>
            </div>
          </div>
          {/* Products Grid */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-6">Casual</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Product Card */}
              {[
                {
                  name: "Gradient Graphic T-shirt",
                  price: "$145",
                  image: "https://via.placeholder.com/150",
                },
                {
                  name: "Polo with Tipping Details",
                  price: "$180",
                  image: "https://via.placeholder.com/150",
                },
              ].map((product, index) => (
                <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-sm font-bold mt-2">{product.name}</h3>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
