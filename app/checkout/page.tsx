"use client";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
  });
  const [formErrors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    zipCode: false,
    city: false,
  });
  useEffect(() => {
    setCartItems(getCartItems());
    const appliesDiscount = localStorage.getItem("appliedDiscount");
    if (appliesDiscount) {
      setDiscount(Number(appliesDiscount));
    }
  }, []);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  return <div></div>;
};

export default CheckOut;
