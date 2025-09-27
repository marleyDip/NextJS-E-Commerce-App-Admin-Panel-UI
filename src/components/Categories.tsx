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

import { useSearchParams, useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();
  //console.log(searchParams);

  // Get currently selected category from URL
  const selectedCategory = searchParams.get("category");
  //console.log(selectedCategory);

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams); // copy current params
    params.set("category", value || "all"); // update category

    router.push(`${pathname}?${params.toString()}`, { scroll: false }); // navigate with new URL

    //router.push(`${pathname}?category=${value}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-2 mb-4 mt-1 gap-2 text-sm bg-gray-100 rounded-lg">
      {categories.map((category) => (
        <div
          key={category.slug}
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

// URLSearchParams
/*  => URLSearchParams is not required if you’re already inside a server page (because Next.js gives you a plain object).
    => But in client-side hooks (useSearchParams), it’s the standard way to interact with query strings.

    => useSearchParams() returns an instance of URLSearchParams, not a plain object.

    Because it gives you a powerful API for working with query strings.

    For example:
      const params = new URLSearchParams("?category=shoes&page=2")

      params.get("category") // "shoes"
      params.get("page") // "2"
      params.has("category") // true
      params.set("page", "3")
      params.toString() // "category=shoes&page=3"


  This is very handy when:
    = You need to read multiple query params.
    = You want to add/remove/update query params dynamically.
    = You want to generate new URLs with query strings.

  4. When to use which

  => Server Component Page (App Router) → use the searchParams object directly (searchParams.category)

  => Client Component (with useSearchParams) → you’ll get URLSearchParams, so you must use .get()
*/

// useRouter
/* 🔹 What useRouter does in Next.js
      = useRouter (from next/navigation) is a client-side hook that lets you navigate or update the URL in your React components.

  You use it when you need to:
      = Programmatically navigate to another page (router.push("/login"))
      = Change query parameters (router.push("?category=shoes&page=2"))
      = Go back/forward (router.back(), router.forward())

 🔹 Why pair useRouter with useSearchParams
      = useSearchParams → reads the current query string (e.g. "category=shoes")
      = useRouter → writes/updates the URL query string

  They complement each other.
  For example, in an e-commerce filter:

🔹 Why not just use useSearchParams alone?
      = Because useSearchParams is read-only.
      = It can’t update the URL — it just tells you what’s currently in the query string.
      = To actually change the query, you need useRouter.

  ✅ Summary:

    => Use useSearchParams → to read query params
    => Use useRouter → to write/update query params (or navigate)
*/

// useSearchParams
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

/* 🔹 What usePathname does
        = usePathname (from next/navigation) is a client-side hook that gives you the current URL path, without query parameters or hash.

    🔹 How it fits with the others
        = usePathname → get the current route (useful for active links, conditional UI)
        = useSearchParams → get the query string values
        = useRouter → navigate / update the route and query
        = They each handle different pieces of the URL.
*/
