"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1)
      handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed.",
          "success"
        );
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen mb-40 bg-gray-100 py-8 px-4 md:px-8">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
        Shopping Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="max-w-5xl mx-auto grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-6">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-20 h-20 object-cover rounded-md"
                    alt={item.name}
                    width={500}
                    height={500}
                  />
                )}
                <div>
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
                >
                  -
                </button>
                <span className="text-gray-700 font-semibold">
                  {item.inventory}
                </span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white p-6 rounded-lg shadow-md text-right">
            <h3 className="text-xl font-bold text-gray-900">
              Total: ${calculatedTotal().toFixed(2)}
            </h3>
            <button
              onClick={handleProceed}
              className="mt-4 px-8 py-3 w-full bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-16">
          <p className="text-lg">Your cart is currently empty.</p>
          <p className="mt-2">Start adding items to see them here.</p>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
