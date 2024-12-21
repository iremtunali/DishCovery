import React from "react";
import "../styles/global.css"; // Global CSS dosyasını kullanmak için

const Home = () => {
    return (
        <div>
            {/* Hoşgeldiniz Mesajı */}
            <header style={styles.header}>
                <h1>Hoşgeldiniz Dishcovery!</h1>
                <p>Keşfet, Paylaş ve Tadını Çıkar!</p>
            </header>

            <div style={styles.container}>

                {/* Popüler Restoranlar */}
                <section style={styles.section}>
                    <h2>Popüler Restoranlar</h2>
                    <div style={styles.card}>
                        <img src="/images/restaurant1.png" alt="Restoran 1" style={styles.image} />
                        <h3>Restoran 1</h3>
                        <p>Lezzetli yemekleri ve harika ambiyansı ile ünlü.</p>
                    </div>
                    <div style={styles.card}>
                        <img src="/images/restaurant2.png" alt="Restoran 2" style={styles.image} />
                        <h3>Restoran 2</h3>
                        <p>Şehrin en iyi burgerlerini burada bulabilirsiniz.</p>
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
    card: {
        background: "white",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        marginBottom: "10px",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "5px",
    },
};

export default Home;