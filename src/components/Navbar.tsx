import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="">
            {/* Left */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="company-logo"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className="text-xl font-bold tracking-wider">
                    Sofian Shop.
                </p>
            </Link>
        </nav>
    )
}

export default Navbar;