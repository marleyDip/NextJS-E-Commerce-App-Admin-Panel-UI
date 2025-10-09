import { PaymentFormInputs, paymentFormSchema } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  //const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = () => {
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      {/* Card Holder */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on Card
        </label>

        <div className="relative">
          <input
            id="cardHolder"
            type="text"
            placeholder="Marley Dip"
            {...register("cardHolder")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      {/* Card Number */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card Number
        </label>

        <div className="relative">
          <input
            id="cardNumber"
            type="text"
            placeholder="123456789123"
            {...register("cardNumber")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      {/* Expiration Date */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>

        <div className="relative">
          <input
            id="expirationDate"
            type="text"
            placeholder="01/32"
            {...register("expirationDate")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.expirationDate && (
          <p className="text-xs text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      {/* CVV */}
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>

        <div className="relative">
          <input
            id="cvv"
            type="text"
            placeholder="123"
            {...register("cvv")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      {/* Card Image */}
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

      {/* Btn */}
      <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-xl hover:scale-[1.01] transition duration-300 active:scale-95">
        <button
          type="submit"
          className="group w-full p-2.5 text-sm sm:text-base font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-xl cursor-pointer"
        >
          <p className="relative h-6 overflow-hidden">
            {/* Default text */}
            <span className="flex items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-full">
              Checkout
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:scale-105" />
            </span>

            {/* Hover text */}
            <span className="absolute w-full top-full left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 transition-transform duration-300 group-hover:translate-y-[-100%]">
              Checkout
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:scale-105" />
            </span>
          </p>
        </button>
      </div>
      {/* Btn */}
    </form>
  );
};

export default PaymentForm;
