"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import { url } from "inspector";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

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
        setCartItems([]);
      }
    });
  };

  return (
    <div className="h-screen mb-8 bg-gray-100 py-8 px-4 md:px-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Your Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div>
                  <h2 className="font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-gray-700 font-medium">
                  {item.inventory}
                </span>
                <button
                  onClick={() => handleIncrement(item._id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="bg-white p-4 rounded-lg shadow-md text-right">
            <h3 className="text-lg font-bold text-gray-800">
              Total: ${calculatedTotal().toFixed(2)}
            </h3>
            <button
              onClick={handleProceed}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
