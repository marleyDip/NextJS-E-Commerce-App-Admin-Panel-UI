"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "center" | "slideLeft" | "slideRight";
}

export function NavLink({
  href,
  children,
  className = "",
  variant = "center",
}: NavLinkProps) {
  const baseClasses =
    "relative font-medium text-gray-400 hover:text-teal-600 transition-colors duration-300";

  const variantClasses =
    variant === "center"
      ? "after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
      : variant === "slideLeft"
      ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-600 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
      : "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-600 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
