import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard"; // RestaurantCard bileşeni
import "../styles/global.css"; // Global CSS dosyası

const Home = () => {
    const [restaurants, setRestaurants] = useState([]); // Restoranları tutacak state

    useEffect(() => {
        // Restoran verilerini API'den çekmek için useEffect kullanıyoruz
        async function fetchRestaurants() {
            try {
                const response = await fetch("/api/restaurants"); // API endpoint çağrısı
                const data = await response.json();
                setRestaurants(data); // Restoranları state'e kaydet
            } catch (error) {
                console.error("Restoran verileri alınırken hata oluştu:", error);
            }
        }

        fetchRestaurants();
    }, []); // İlk yüklemede çağrılır

    return (
        <div>
            {/* Hoşgeldiniz Mesajı */}
            <header style={styles.header}>
                <h1>Hoşgeldiniz Dishcovery!</h1>
                <p>Keşfet, Paylaş ve Tadını Çıkar!</p>
            </header>

            <div style={styles.container}>
                {/* Restoran Listesi */}
                <section style={styles.section}>
                    <h2>Popüler Restoranlar</h2>
                    <div style={styles.grid}>
                        {restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                </section>

                {/* Yeni Postlar */}
                <section style={{ marginTop: "40px" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Yeni Postlar</h2>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        {/* Post 1 */}
                        <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", width: "300px" }}>
                            <img
                                src="/images/post1.png"
                                alt="Post 1"
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>Kullanıcı Adı</h3>
                            <p>Bu restoranda harika bir akşam yemeği yedim!</p>
                        </div>
                        {/* Post 2 */}
                        <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", width: "300px" }}>
                            <img
                                src="/images/post2.png"
                                alt="Post 2"
                                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                            />
                            <h3 style={{ marginTop: "10px" }}>Kullanıcı Adı</h3>
                            <p>Harika bir kahve ve tatlı deneyimi yaşadım!</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const styles = {
    header: {
        backgroundColor: "#ff6f61",
        color: "white",
        padding: "1rem",
        textAlign: "center",
    },
    container: {
        margin: "20px",
    },
    section: {
        marginBottom: "20px",
    },
    grid: {
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
    },
};

export default Home;
