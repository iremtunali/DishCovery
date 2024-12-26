import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <Link href="/" style={styles.logoLink}>
                    Dishcovery
                </Link>
            </div>
            <div style={styles.links}>
                {["🏠", "🔍", "👤"].map((icon, index) => (
                    <Link
                        key={index}
                        href={icon === "🏠" ? "/" : icon === "🔍" ? "/restaurants" : "/profile"}
                        style={{
                            ...styles.iconLink,
                            transform: hovered === index ? "scale(1.2)" : "scale(1)",
                            color: hovered === index ? "#FFB703" : "#FFF", // Hover durumunda değişen renk
                            transition: "transform 0.2s ease, color 0.3s",
                        }}
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

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #FF7E29, #FFB703)", // Degrade turuncu tonları
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Daha belirgin gölge
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    logoLink: {
        textDecoration: "none",
        color: "#FFF",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "28px",
    },
    links: {
        display: "flex",
        gap: "20px",
    },
    iconLink: {
        fontSize: "22px", // İkon boyutu biraz büyütüldü
        color: "#FFF",
        textDecoration: "none",
        cursor: "pointer",
    },
};

export default Navbar;
