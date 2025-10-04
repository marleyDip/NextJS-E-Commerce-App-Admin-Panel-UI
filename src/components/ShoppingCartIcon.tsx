"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;

  return (
    <Link href="/cart" className="relative group">
      <ShoppingCart className="w-4 h-4 text-gray-600 hover:text-black cursor-pointer" />

      <span className="absolute -top-2 -right-2 w-4 h-4 text-xs font-medium flex items-center justify-center bg-amber-400 text-gray-600 rounded-full group-hover:-translate-y-1 duration-300">
        {cart.reduce((total, item) => total + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
