import { CartStoreStateType, CartStoreActionType } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,

      // Your (state) => { ... } inside set is the callback function — you pass it into set, and Zustand calls it with the current state so you can return the new cart.
      // Here () => { state } is argument where pass a parameter state and return a new state object.
      addToCart: (product) =>
        set((state) => {
          // Check if the product already exists in cart
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedColor === product.selectedColor &&
              p.selectedSize === product.selectedSize
          );

          // If it exists, update the quantity of that product.
          if (existingIndex !== -1) {
            const updateCart = [...state.cart]; // copy current cart (immutability)
            updateCart[existingIndex].quantity += product.quantity || 1;

            return { cart: updateCart }; // callback returns new state
          }

          // If no matching product was found, it creates a new cart item.
          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedColor: product.selectedColor,
                selectedSize: product.selectedSize,
              },
            ],
          }; // callback returns new state
        }),

      removeFromCart: (product) =>
        set((state) => {
          const index = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedColor === product.selectedColor &&
              p.selectedSize === product.selectedSize
          );

          if (index === -1) return state;

          const updatedCart = [...state.cart];

          if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            return { cart: updatedCart };
          } else {
            return {
              cart: state.cart.filter((_, i) => i !== index),
            };
          }
        }),

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore;

/* removeFromCart: (product) => set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === product.id &&
              p.selectedColor === product.selectedColor &&
              p.selectedSize === product.selectedSize
          );

          if (existingIndex !== -1) {
            const updateCart = [...state.cart]; // copy current cart (immutability)
            updateCart[existingIndex].quantity -= 1;

            if (updateCart[existingIndex].quantity === 0) {
              // If quantity is 0, remove item from cart
              return { cart: updateCart.filter((p) => p.id !== product.id) };
            }

            return { cart: updateCart }; // callback returns new state
          }

          return state; // If no matching product was found, return current state
        }),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) =>
              !(
                p.id === product.id &&
                p.selectedColor === product.selectedColor &&
                p.selectedSize === product.selectedSize
              )
          ),
        })),
*/

/*      addToCart: (product) =>
        set((state) => { ... })

Here, set is a function from Zustand.
    = We are passing a function (state) => { ... } into set.
    = That inner function is the callback.

    = set = the main function.
    = (state) => { ... } = the callback you pass in.

  2. How Zustand uses the callback
      = When you call set((state) => { ... }):
      = Zustand will run your callback function.
      = It gives your callback the current state as an argument (state).
      = Your callback must return the new state.

  This is why your callback looks like:
    (state) => {
       do something with state
      return { cart: ... };
    }

  3. The callback in action
      A callback is a function passed into another function, so the other function can call it later.

      = You passed (state) => { ... } into set.
      = Later, set calls it and gives you the state.
      = You then decide how to update the cart.

  4. Simple analogy with your code
      = You give Zustand (set) your recipe (the callback) for how to update the cart.
      = Zustand says: “When I need to update, I’ll call your function and give you the latest cart (state). You tell me what the new cart should be.”

      = That recipe = the callback function.
*/

/* A callback is just a function that you give to / passed into another function as an argument, so that function can call it later.

👉 In other words: “I’m handing you this function. Please call it when you’re ready.”

      function greet(name, callback) {
        console.log("Hello, " + name);
        callback(); // call the function we were given
      }

      function sayBye() {
        console.log("Goodbye!");
      }

      greet("Alice", sayBye);

      = sayBye is a callback.
      = We didn’t call it directly → we gave it to greet.
      = greet decided when to run it.

      Instead of defining sayBye, you can just write the callback inline:

      greet("Bob", () => {
        console.log("See you later!");
      });
*/
