import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const HomePage = () => {
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPopularRestaurants = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/highRatedRestaurants"); // Yeni endpoint
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
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Popüler Restoranlar</h1>
            {loading && <p style={{ textAlign: "center" }}>Yükleniyor...</p>}
            {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                {popularRestaurants.map((restaurant) => (
                    <div
                        key={restaurant.id}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "200px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <img
                            src={restaurant.imageUrl}
                            alt={restaurant.name}
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "8px 8px 0 0",
                            }}
                        />
                        <h3 style={{ textAlign: "center", margin: "10px 0" }}>{restaurant.name}</h3>
                        <p style={{ textAlign: "center", color: "gray", fontSize: "14px" }}>{restaurant.address}</p>
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>⭐ {restaurant.rating}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default HomePage;
