"use client";

import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    zipCode: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    phone: false,
    zipCode: false,
    city: false,
  });
  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCartItems();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      address: !formValues.address,
      phone: !formValues.phone,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");

          Swal.fire(
            "Success!",
            "Your Order has been successfully processed!",
            "success"
          );
        } else {
          Swal.fire(
            "Error!",
            "Please fill in all the fields before proceeding.",
            "error"
          );
        }

        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item._id,
          })),
          total: subTotal,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
          localStorage.removeItem("appliedDiscount");
        } catch (error) {
          console.error("error creating order", error);
        }

        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          alert("Order Placed Successfully!");
        }
      }
    });
  };

  return (
    <div className="min-h-screen mb-20 bg-gray-100 py-10 px-4 md:px-8 lg:px-16 ">
      <nav className="flex items-center gap-2 text-gray-600 text-sm mb-6">
        <Link href="/cart" className="hover:text-black">
          Cart
        </Link>
        <CgChevronRight />
        <span className="text-black font-medium">Checkout</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b py-3"
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.inventory}
                  </p>
                </div>
                <p className="font-semibold">${item.price * item.inventory}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}
          <div className="text-right pt-4">
            <p>
              Subtotal: <span className="font-medium">${subTotal}</span>
            </p>
            <p>
              Discount: <span className="font-medium">-${discount}</span>
            </p>
            <p className="text-lg font-bold">
              Total: ${(subTotal - discount).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Billing Information
          </h2>

          <div className="space-y-4">
            {/* First Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter Your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-xs mt-1">
                  First Name is Required
                </p>
              )}
            </div>
            {/* Last Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-xs mt-1">
                  Last Name is Required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Your email"
                value={formValues.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            {/* Address Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                value={formValues.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.address && (
                <p className="text-red-500 text-xs mt-1">Address is Required</p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Your Phone Number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  Phone Number is Required
                </p>
              )}
            </div>

            {/* Zip Code Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                placeholder="Enter Your Zip Code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.zipCode && (
                <p className="text-red-500 text-xs mt-1">
                  Zip Code is Required
                </p>
              )}
            </div>

            {/* City Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter Your City"
                value={formValues.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {formErrors.city && (
                <p className="text-red-500 text-xs mt-1">City is Required</p>
              )}
            </div>
          </div>

          <Button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
