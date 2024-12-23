import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (city) => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`/api/restaurants?query=${city}`);
            const data = await response.json();

            if (response.ok) {
                setRestaurants(data); // Gelen restoran verilerini state'e ata
            } else {
                setError(data.error || "Bir hata oluştu.");
            }
        } catch (err) {
            setError("Sunucuyla bağlantı kurulamadı.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Şehir arama çubuğu */}
            <FilterBar onSearch={handleSearch} />

            {/* Yükleniyor durumu */}
            {loading && <p>Restoranlar yükleniyor...</p>}

            {/* Hata mesajı */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Restoran listesi */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
                {restaurants.length > 0 ? (
                    restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))
                ) : (
                    !loading && <p>Restoran bulunamadı.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
