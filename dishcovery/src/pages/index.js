import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const HomePage = () => {
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPopularRestaurants = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/highRatedRestaurants");
            const data = await response.json();

            if (response.ok) {
                setPopularRestaurants(data);
            } else {
                setError(data.error || "Bir hata oluştu.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularRestaurants();
    }, []);

    return (
        <Layout>
            <div
                style={{
                    background: "linear-gradient(135deg, #ff7e29, #4caf50)", // Degrade arka plan
                    minHeight: "100vh",
                    padding: "50px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: "30px",
                    }}
                >
                    <img
                        src="/logo.jpg"
                        alt="DishCovery Logo"
                        style={{
                            width: "150px",
                            height: "auto",
                            marginBottom: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            color: "#fff",
                            marginTop: "0", // Üstte fazladan boşluk bırakmaz
                            marginBottom: "5px",
                        }}
                    >
                        Popüler Restoranlar
                    </h1>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#fff",
                            marginTop: "0", // Üstte fazladan boşluk bırakmaz
                        }}
                    >
                        En iyi restoranları keşfedin!
                    </p>
                </div>


                {loading && (
                    <p style={{color: "#fff", fontSize: "18px"}}>Yükleniyor...</p>
                )}
                {error && (
                    <p style={{color: "red", fontSize: "18px"}}>{error}</p>
                )}
                <div
                    style={{
                        marginTop: "30px",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                        width: "100%",
                        maxWidth: "1200px",
                    }}
                >
                    {popularRestaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "white",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                cursor: "pointer",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 16px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0 4px 8px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <Link href={`/restaurants/${restaurant.id}`} legacyBehavior>
                                <a>
                                    <img
                                        src={restaurant.imageUrl}
                                        alt={restaurant.name}
                                        style={{
                                            width: "100%",
                                            height: "150px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div style={{padding: "10px", textAlign: "center"}}>
                                        <h3 style={{margin: "10px 0", color: "#333"}}>
                                            {restaurant.name}
                                        </h3>
                                        <p style={{color: "#555"}}>{restaurant.address}</p>
                                        <p style={{color: "#ff9800"}}>⭐ {restaurant.rating}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
