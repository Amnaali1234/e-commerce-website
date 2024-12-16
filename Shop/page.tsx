import Hero from "@/Shop/components/Hero";

import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Link href="/Navbar">Navbar</Link>
    </div>
  );
};

export default Shop;
