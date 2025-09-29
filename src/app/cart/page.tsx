"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// Temporary
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lightweight, breathable tee for everyday comfort.",
    description:
      "The Adidas CoreFit T-Shirt is crafted from premium cotton-blend fabric with moisture-wicking technology to keep you dry and comfortable. Perfect for workouts or casual outings, it offers a classic fit with durable stitching for long-lasting wear.",
    price: 899,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Cozy zip-up hoodie for cold-weather comfort.",
    description:
      "Stay warm and stylish with the Puma Ultra Warm Zip. Made with soft fleece lining and a durable outer layer, this hoodie provides excellent insulation without compromising breathability. Its modern design and adjustable hood make it perfect for chilly days.",
    price: 1500,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "xl",
    selectedColor: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Classic pullover with premium comfort.",
    description:
      "The Nike Air Essentials Pullover combines soft fleece fabric with a relaxed fit for everyday wear. Featuring ribbed cuffs and hem for a snug feel, this hoodie is designed for both casual outings and active lifestyles.",
    price: 5599,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "black",
  },
];

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState(null);

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-12">
      {/* Title */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Title */}

      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`p-4 flex items-center justify-center text-white w-6 h-6 rounded-full ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              } `}
            >
              {step.id}
            </div>

            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* Steps */}

      {/* Steps & Details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 p-8 gap-8 flex flex-col border-1 border-gray-100 rounded-lg shadow-lg">
          {activeStep === 1 ? (
            cartItems.map((item) => (
              // Single Cart Item
              <div className="flex items-center justify-between" key={item.id}>
                {/* Image & Details */}
                <div className="flex gap-8">
                  {/* Image */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg hover:object-cover overflow-hidden cursor-pointer">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain hover:scale-105 active:scale-100 transition-all duration-200"
                    />
                  </div>
                  {/* Image */}

                  {/* Details */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>

                      <p className="text-xs text-gray-500 font-medium">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-xs text-gray-500 font-medium">
                        Size: {item.selectedSize}
                      </p>

                      <p className="text-xs text-gray-500 font-medium">
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <p className="font-medium flex items-center gap-0.5">
                      <Image
                        src="/taka.png"
                        alt=""
                        width={4}
                        height={4}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                      {item.price.toFixed(2)}
                    </p>
                  </div>
                  {/* Details */}
                </div>
                {/* Image & Details */}

                {/* Delete Btn */}
                <div className="w-8 h-8 rounded-full hover:shadow-md bg-red-100 hover:bg-red-200 text-red-400 flex items-center justify-center transition-all duration-300 cursor-pointer">
                  <Trash2 className="w-3 h-3" />
                </div>
                {/* Delete Btn */}
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm font-medium text-gray-500">
              Please fill in the shipping form to Continue.
            </p>
          )}
        </div>
        {/* Steps */}

        {/* Cart Details */}
        <div className="w-full lg:w-5/12 p-8 gap-8 flex flex-col border-1 border-gray-100 rounded-lg shadow-lg">
          <h1 className="font-semibold">Cart Details</h1>

          {/* Details */}
          <div className="flex flex-col gap-4">
            {/* Sub Total */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>

              <p className="font-medium flex items-center">
                <Image
                  src="/taka.png"
                  alt=""
                  width={4}
                  height={4}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            {/* Sub Total */}

            {/* Discount */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount (10%)</p>
              <p className="font-medium flex items-center">
                <Image
                  src="/taka.png"
                  alt=""
                  width={4}
                  height={4}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                {(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
              </p>
            </div>
            {/* Discount */}

            {/* Shipping */}
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium flex items-center">
                <Image
                  src="/taka.png"
                  alt=""
                  width={4}
                  height={4}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                10
              </p>
            </div>
            {/* Shipping */}

            <hr className="border-gray-200 border-1" />

            {/* Total */}
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium flex items-center">
                <Image
                  src="/taka.png"
                  alt=""
                  width={4}
                  height={4}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                {(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) - // subtotal
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) *
                    0.1 + // minus discount
                  10
                ) // add shipping
                  .toFixed(2)}
              </p>
            </div>
            {/* Total */}
          </div>
          {/* Details */}

          {/* Btn */}
          {activeStep === 1 && (
            <div
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="h-max rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-xl hover:scale-[1.01] transition duration-300 active:scale-95"
            >
              <button className="group w-full p-2.5 text-sm sm:text-base font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-xl cursor-pointer">
                <p className="relative h-6 overflow-hidden">
                  {/* Default text */}
                  <span className="flex items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-full">
                    Continue
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:scale-105" />
                  </span>

                  {/* Hover text */}
                  <span className="absolute w-full top-full left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 transition-transform duration-300 group-hover:translate-y-[-100%]">
                    Continue
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:scale-105" />
                  </span>
                </p>
              </button>
            </div>
          )}
          {/* Btn */}
        </div>
        {/* Cart Details */}
      </div>
      {/* Steps & Details */}
    </div>
  );
};

export default CartPage;
