import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md sticky top-0 z-50">
            <div className="text-white font-bold text-2xl">
                <Link href="/" className="font-poppins">
                    Dishcovery
                </Link>
            </div>
            <div className="flex gap-5">
                {["🏠", "🔍", "👤"].map((icon, index) => (
                    <Link
                        key={index}
                        href={icon === "🏠" ? "/" : icon === "🔍" ? "/restaurants" : "/profile"}
                        className={`text-white text-lg transition-transform duration-200 ${
                            hovered === index ? "scale-110 text-yellow-200" : ""
                        }`}
                        onMouseOver={() => setHovered(index)}
                        onMouseOut={() => setHovered(null)}
                    >
                        {icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
