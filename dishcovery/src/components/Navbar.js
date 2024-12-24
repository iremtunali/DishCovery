import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#f4f4f4" }}>
            <div>
                <Link href="/" style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none" }}>
                    Dishcovery
                </Link>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
                <Link href="/">🏠</Link>
                <Link href="/restaurants">🔍</Link>
                <Link href="/profile">👤</Link>
            </div>
        </nav>
    );
};

export default Navbar;
