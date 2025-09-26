"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";
//import { useRouter } from "next/router";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },

  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  //console.log(searchParams);

  // Get currently selected category from URL
  const selectedCategory = searchParams.get("category");
  //console.log(selectedCategory);

  const handleChange = (value: string | null) => {
    router.push(`/?category=${value}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-2 mb-4 mt-1 gap-2 text-sm bg-gray-100 rounded-lg">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleChange(category.slug)}
          className={`flex items-center justify-center px-2 py-1 gap-2 rounded-md cursor-pointer ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;

/* Using Next.js 13+ App Router with the useSearchParams hook.

Here’s what’s happening in your code:

        const searchParams = useSearchParams()
        const selectedCategory = searchParams.get("category")

    🔎 Explanation
    => useSearchParams() → gives you access to the current query string in the URL.

    Example:
    /products?category=shoes

    → searchParams.get("category") returns "shoes".    
    If category is not in the URL → it returns null.

    📌 Notes
    
    => useSearchParams is reactive: when you change the query string (like with router.push("?category=men")), the component re-renders automatically.
    
    => Unlike URLSearchParams in plain JS, this is read-only. You can’t call .set(). To update, you need useRouter(). 
*/

/* const selectedCategory = searchParams.get("category") refers to the name of the query parameter in the URL.

        🔎 Example
        If your URL is:
        /products?category=shoes
        
        => category → is the query parameter key
        => shoes → is its value
        => searchParams.get("category") reads that value ("shoes") from the URL.

            📌 Another Example
            /products?category=tshirts&color=red
            
            You can read multiple params:

            const selectedCategory = searchParams.get("category") // "tshirts"
            const selectedColor = searchParams.get("color")       // "red"

    => The argument to .get() must exactly match the query key in the URL.
    => So "category" is not special, you could also use "color" or "sort" — it just matches whatever query string key you want to read.
*/
