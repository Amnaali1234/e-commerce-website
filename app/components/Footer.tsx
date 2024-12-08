import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F2F0F1] text-black pt-20 relative">
      {/* Newsletter Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 w-[90%] sm:w-[80%] bg-black rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-0 text-center sm:text-left">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        <form className="flex flex-col w-full sm:w-[400px] space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="py-2 px-4 text-sm rounded-3xl outline-none h-[48px] w-full sm:w-[300px] bg-white text-gray-500 placeholder:text-gray-400"
          />
          <input
            type="text"
            placeholder="Subscribe to newsletter"
            className="py-2 px-4 text-sm rounded-3xl outline-none w-full sm:w-[300px] h-[48px] bg-white text-gray-500 placeholder:text-black font-semibold"
          />
        </form>
      </div>

      {/* Footer Container */}
      <div className="max-w-[1240px] mx-auto px-4 flex flex-col space-y-16 mt-20">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-500 mt-12">
          {/* SHOP.CO Section */}
          <div>
            <h3 className="text-black font-extrabold text-3xl mb-3">SHOP.CO</h3>
            <p>
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook size={24} className="text-black" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram size={24} className="text-black" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter size={24} className="text-black" />
              </Link>
              <Link href="https://github.com" target="_blank">
                <FaGithub size={24} className="text-black" />
              </Link>
            </div>
          </div>

          {/* COMPANY Section */}
          <div>
            <h3 className="text-black font-bold mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* HELP Section */}
          <div>
            <h3 className="text-black font-bold mb-3">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-black">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES Section */}
          <div>
            <h3 className="text-black font-bold mb-3">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-black">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  YouTube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-10 text-gray-600 text-sm">
          <p>© 2000-2023, All Rights Reserved | Shop.co</p>
          <Image
            src="/images/footerimage.png"
            alt="footer logo"
            width={450}
            height={450}
            className="mt-4 sm:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
