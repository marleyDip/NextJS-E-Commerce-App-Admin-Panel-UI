import { ShippingFormInputs, shippingFormSchema } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);

    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>

        <div className="relative">
          <input
            id="name"
            type="text"
            placeholder="Marley Dip"
            {...register("name")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Email
        </label>

        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="marleyDip@gmail.com"
            {...register("email")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>

        <div className="relative">
          <input
            id="phone"
            type="text"
            placeholder="0123456789"
            {...register("phone")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>

        <div className="relative">
          <input
            id="address"
            type="text"
            placeholder="Somespur, Belkuchi"
            {...register("address")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>

        <div className="relative">
          <input
            id="city"
            type="text"
            placeholder="Sirajganj"
            {...register("city")}
            className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-neutral-400 focus:outline-none peer"
          />
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-emerald-400 transition-all duration-300 peer-focus:w-full" />
        </div>

        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
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
      {/* Btn */}
    </form>
  );
};

export default ShippingForm;

/* In TypeScript, that void means the function doesn’t return anything useful.

    Here’s the breakdown:
      setShippingForm: (data: ShippingFormInputs) => void;

  => setShippingForm is a prop.
  => It’s a function that takes one argument:
  => data of type ShippingFormInputs

  => The return type of this function is void → meaning it doesn’t (and isn’t expected to) return a value.

  Why use void?
    Because most "setter" functions only update state or perform a side effect — they don’t produce a value you need to capture.

  => void is used because setShippingForm is only meant to store/update the form data, not return something.
*/
