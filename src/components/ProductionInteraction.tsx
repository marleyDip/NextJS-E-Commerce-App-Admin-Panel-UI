"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductionInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { addToCart } = useCartStore();

  const [quantity, setQuantity] = useState(1);

  // Handle type change (size/color)
  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Handle quantity change
  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
    // } else {
    //   if (quantity > 1) {
    //     setQuantity((prev) => prev - 1);
    //   }
    // }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
    toast.success(`${product.name} Added to cart!`, { autoClose: 1000 });
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Size */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 font-medium">Size</span>

        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`p-0.5 border-1 hover:shadow-md rounded cursor-pointer ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 rounded-sm text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Size */}

      {/* Color */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 font-medium">Color</span>

        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <div
              className={`p-0.5 border-1 hover:shadow-md rounded cursor-pointer ${
                selectedColor === color ? "border-gray-300" : "border-white"
              }`}
              key={color}
              onClick={() => handleTypeChange("color", color)}
            >
              <div
                className={`w-6 h-6 rounded-sm`}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Color */}

      {/* Quantity */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500 font-medium">Quantity</span>

        <div className="flex items-center gap-2">
          {/* Decrement */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 bg-gray-50 hover:shadow-md hover:bg-gray-100 active:scale-95 cursor-pointer transition"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4 text-gray-700" />
          </button>
          {/* Decrement */}

          {/* Quantity */}
          <span className="px-4 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-md shadow-sm border border-gray-200">
            {quantity}
          </span>
          {/* Quantity */}

          {/* Increment */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 hover:shadow-md active:scale-95 cursor-pointer transition"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4 text-gray-700" />
          </button>
          {/* Increment */}
        </div>
      </div>
      {/* Quantity */}

      {/* Add Button */}
      <div className="relative inline-block p-0.5 rounded-md overflow-hidden transition duration-300 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
        <button
          onClick={handleAddToCart}
          className="w-full relative flex items-center justify-center gap-2 z-10 bg-gray-800 hover:bg-gray-900 text-white rounded-md shadow-lg px-8 py-2.5 font-medium text-sm hover:translate-x-0.5 transition-transform duration-200 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      {/* Add Button */}

      {/* Buy Btn */}
      <button className="flex items-center justify-center gap-2 text-sm font-medium px-8 py-2.5 rounded-md shadow-lg ring-1 ring-gray-400 text-gray-800 bg-white hover:text-blue-400 hover:bg-blue-400/10 hover:ring-blue-400/30 hover:translate-x-0.5 transition-transform duration-200 cursor-pointer">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button>
      {/* Buy Btn */}
    </div>
  );
};

export default ProductionInteraction;
