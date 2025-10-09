import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between pb-4 border-b border-gray-200">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="company-logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />

        <p className="hidden md:block text-lg font-medium tracking-wider">
          Sofian <span className="text-indigo-600 font-sans">Store</span>
        </p>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-6">
        <SearchBar />

        <Link href="/">
          <Home className="w-4 h-4 text-gray-600 hover:text-black" />
        </Link>

        <Bell className="w-4 h-4 text-gray-600 hover:text-black cursor-pointer" />

        <ShoppingCartIcon />

        <Link
          href="/login"
          className="relative font-medium text-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-teal-600 hover:to-red-600  hover:bg-clip-text hover:text-transparent after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-teal-500 after:to-red-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
