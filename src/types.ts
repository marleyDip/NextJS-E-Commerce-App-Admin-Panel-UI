export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}
export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity: number,
    selectedSize: string,
    selectedColor: string,
}
export type CartItemsType = CartItemType[]

// Strict Product Type
// export type ProductType<ColorKeys extends string = string> = {
//   id: string | number
//   name: string
//   shortDescription: string
//   description: string
//   price: number
//   sizes: string[]
//   colors: ColorKeys[]
//   images: Record<ColorKeys, string>
// }


/* images: Record<string, string>;

    What it means:

        => Record<K, T> is a TypeScript utility type.

            => It creates an object type where:

            => K = the type of keys (here string)
            => T = the type of values (here string)

    👉 Record<string, string> means “an object whose keys are strings, and whose values are strings.”

                Example
                const productImages: Record<string, string> = {
                gray: "/products/1g.png",
                purple: "/products/1p.png",
                green: "/products/1gr.png",
                };

                => gray, purple, green → keys (all strings)
                => "/products/1g.png" etc. → values (all strings)

    Why useful here?
    Because in your products:

        images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
        }
    => The keys (gray, purple, green) are dynamic color names → they aren’t fixed in advance.
    => Using Record<string, string> lets you keep it flexible instead of hardcoding all possible color names.

⚡ If you wanted to be stricter, you could narrow it down, e.g.:
        images: Record<"gray" | "purple" | "green", string>;
        This would enforce that only "gray" | "purple" | "green" can be keys. 
*/