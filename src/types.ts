import z from "zod";

// Product Type
export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};
export type ProductsType = ProductType[];

// Cart Item Type
export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];

// Shipping Form Inputs
export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 15 digits!")
    .max(15, "Phone number must be between 7 and 15 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "city is required!"),
});
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

// Payment Form Inputs
export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card Holder is required!"),
  cardNumber: z
    .string()
    .min(16, "card Number is required!")
    .max(16, "Card Number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0?[1-9]|1[0-2])\/(\d{2}|\d{4})$/,
      "Expiration date must be in MM/YY format!"
    ),
  cvv: z.string().min(3, "CVV is required!").max(3, "CVV is required!"),
});
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

// cart state type
export type CartStoreStateType = {
  cart: CartItemsType;
};

// cart action type
export type CartStoreActionType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};

/* (product: CartItemType) is a function parameter with a type annotation.

  = this function takes a product object as input, and it must follow CartItemType
  = It says: “this function receives one argument called product, and its type must be CartItemType”.
  = TypeScript will check at compile-time that you pass an object that matches the CartItemType structure.

  = void means these functions don’t return anything useful. It updates the state but doesn’t return a value.
  = I promise this function doesn’t give you back anything useful. Perfect for actions like updating state, logging, clearing, etc.

  = CartStoreStateType defines the state (here cart).
  = CartStoreActionType defines the methods to manipulate the state.
  = Each method works with a product of type CartItemType.
*/

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

/*
    ^ and $
    = ^ → start of string
    = $ → end of string
    => So the whole string must match this pattern, nothing extra allowed.

    2. (0?[1-9]|1[0-2])
    This is the month part:
    = 0?[1-9] → matches 01, 02, 1, 2 … up to 09, 9, here ? means optional
    = 1[0-2] → matches 10, 11, or 12
    => So together, it only allows valid months 01–12.

    3. \/
    = This is a literal forward slash / (escaped with \).
    => So the format must be like: MM/YY

    4. \d{2}
    = \d → any digit (0–9)
    = {2} → exactly 2 digits
    => This is the year part (YY).
*/
