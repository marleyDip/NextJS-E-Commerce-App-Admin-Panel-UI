"use client";

import Link from "next/link";
import { ProductType } from "../types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    color: product.colors[0],
    size: product.sizes[0],
  });

  const { addToCart } = useCartStore(); // destructure addToCart from the store

  // Function to handle size and color selection
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });

    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
      {/* Image */}
      <Link href="/products/${product.id}">
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
      {/* Image */}

      {/* Product Details */}
      <div className="flex flex-col p-4 gap-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-600">{product.shortDescription}</p>

        {/* Types */}
        <div className="flex items-center text-xs gap-4">
          {/* Sizes */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
              className="ring ring-gray-300 rounded-md px-2 py-1 cursor-pointer"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* Sizes */}

          {/* colors */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                  className={`cursor-pointer p-[1.2px] border-1 rounded-full ${
                    productTypes.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  }`}
                  key={color}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* colors */}
        </div>
        {/* Types */}

        {/* Price & Add to cart btn */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            {new Intl.NumberFormat("en-BD", {
              style: "currency",
              currency: "BDT",
            }).format(product.price)}
          </p>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 px-2 py-1 text-sm font-medium ring-1 ring-gray-200 shadow-lg rounded-md hover:text-white hover:bg-black hover:translate-x-1 transition-all duration-300 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
        {/* Price & Add to cart btn */}
      </div>
      {/* Product Details */}
    </div>
  );
};

export default ProductCard;

/* 🔹onClick

    When it fires:
        => Triggered when a user clicks an element (button, link, div, etc.).

    Example use cases:
    = Submitting a form
    = Opening a modal
    = Navigating to another page

        <button onClick={() => alert("Button clicked!")}>
        Click Me
        </button>
    => Here, the event fires when the button is clicked.

🔹 onChange

    When it fires:
        => Triggered when the value of an input element changes (text field, checkbox, select, radio button, etc.).

    Example use cases:
    = Typing in an input
    = Selecting a dropdown option
    = Checking/unchecking a checkbox

            <input
            type="text"
            onChange={(e) => console.log("New value:", e.target.value)}
            />
    => Here, the event fires whenever the input value changes (e.g., typing in the box).

🔑 Key Difference:

    = onClick → Responds to a click action.
    = onChange → Responds to a value change inside form elements.

    = Use onClick for actions (buttons, links).
    = Use onChange for form input changes.
*/
