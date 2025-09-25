import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <div className="mt-16 p-8 bg-gray-800 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 rounded-lg">
      {/* logo */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="company-logo" width={36} height={36} />

          <p className="hidden md:block text-lg font-medium tracking-wider text-white">
            Sofian <span className="text-orange-600 font-sans">Store</span>
          </p>
        </Link>

        <p className="text-sm font-medium text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://marleydip.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 font-sans transition-colors"
          >
            Md Sofian Hasan
          </a>
          .
        </p>

        <p className="text-sm font-medium text-gray-400">
          All rights reserved.
        </p>
      </div>
      {/* logo */}

      {/* Link 1 */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start ">
        <p className="text-sm font-medium text-amber-50">Links</p>

        <NavLink href="/" variant="slideRight">
          Home
        </NavLink>

        <NavLink href="/" variant="slideRight">
          Contact
        </NavLink>

        <NavLink href="/" variant="slideRight">
          Terms of Services
        </NavLink>

        <NavLink href="/" variant="slideRight">
          Privacy Policy
        </NavLink>
      </div>
      {/* Link 1 */}

      {/* Link 2 */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start ">
        <p className="text-sm font-medium text-amber-50">Links</p>

        <NavLink href="/" variant="center">
          All Products
        </NavLink>

        <NavLink href="/" variant="center">
          New Arrivals
        </NavLink>

        <NavLink href="/" variant="center">
          Best Sellers
        </NavLink>

        <NavLink href="/" variant="center">
          Sale
        </NavLink>
      </div>
      {/* Link 2 */}

      {/* Link 3 */}
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start ">
        <p className="text-sm font-medium text-amber-50">Links</p>

        <NavLink href="/" variant="slideLeft">
          About
        </NavLink>

        <NavLink href="/" variant="slideLeft">
          Contact
        </NavLink>

        <NavLink href="/" variant="slideLeft">
          Blog
        </NavLink>

        <NavLink href="/" variant="slideLeft">
          Affiliate Program
        </NavLink>
      </div>
      {/* Link 3 */}
    </div>
  );
};

export default Footer;
