import ProductionInteraction from "@/components/ProductionInteraction";
import { ProductType } from "@/types";
import Image from "next/image";
import { metadata } from "../../layout";

// Temporary
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription: "Lightweight, breathable tee for everyday comfort.",
  description:
    "The Adidas CoreFit T-Shirt is crafted from premium cotton-blend fabric with moisture-wicking technology to keep you dry and comfortable. Perfect for workouts or casual outings, it offers a classic fit with durable stitching for long-lasting wear.",
  price: 899,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

// SEO
// export const generateMetaData = async ({
//   params,
// }: {
//   params: { id: string };
// }) => {
//   // get / fetch product by id from db
//   //const product = await getProductById(params.id);
//   return {
//     title: product.name,
//     description: product.description,
//     keywords: [product.name, "Adidas", "T-Shirt", "Clothing", "Apparel"],
//   };
// };

// type ProductPageProps = {
//   params: { id: string };
//   searchParams: { color?: string; size?: string };
// };

const productPage = async ({
  //params,
  searchParams,
}: {
  //params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedColor = color || (product.colors[0] as string);
  const selectedSize = size || (product.sizes[0] as string);

  return (
    <div className="flex flex-col lg:flex-row mt-12 md:gap-12 shadow-md bg-white">
      {/* Image */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3] hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 cursor-pointer">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* Image */}

      {/* Details */}
      <div className="p-5 w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>

        <p className="text-gray-500 text-justify">{product.description}</p>

        <h2 className="text-2xl font-semibold flex items-center gap-1">
          <Image src="/taka.png" alt="BD Taka Icon" width={24} height={24} />
          {product.price.toFixed(2)}
        </h2>

        <ProductionInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />

        {/* Card Info */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md cursor-pointer"
          />

          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md cursor-pointer"
          />

          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md cursor-pointer"
          />
        </div>
        {/* Card Info */}

        {/* Terms & Conditions */}
        <p className="text-gray-500 text-xs font-semibold">
          By Clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black hover:cursor-pointer">
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span className="underline hover:text-black hover:cursor-pointer">
            Privacy Policy
          </span>
          . You authorized us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black hover:cursor-pointer">
            Refund Policies
          </span>
        </p>
        {/* Terms & Conditions */}
      </div>
      {/* Details */}
    </div>
  );
};

export default productPage;
