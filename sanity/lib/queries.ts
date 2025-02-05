import { groq } from "next-sanity";

export const allproducts = groq`*[_type == "products"]`;

export const four = groq`*[_type == "products"][9..16]`;
export const five = groq`*[_type == "products"][19..22]`;
export const six = groq`*[_type == "products"][22..25]`;
