import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    const [sortOption, setSortOption] = useState("highestRated");//Restoranların sıralama seçeneği (başlangıçta "highestRated")

    useEffect(() => {
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        fetchFavorites(likedRestaurants);//fetchFavorites fonksiyonu çağrılarak restoran detayları sunucudan çekilir
    }, []);

    const fetchFavorites = async (likedRestaurants) => {
        const favoriteDetails = [];
        for (const restaurantId of likedRestaurants) {
            try {
                const response = await fetch(`/api/restaurantDetails?id=${restaurantId}`);
                const data = await response.json();
                if (response.ok) {
                    favoriteDetails.push({
                        id: restaurantId,
                        name: data.name,
                        imageUrl: data.photoUrl,
                        address: data.address,
                        rating: data.rating,
                        phone: data.phone,
                        website: data.website,
                    });
                }
            } catch (error) {
                console.error('Favori restoran detayları getirilemedi:', error);
            }
        }
        setFavorites(favoriteDetails);
    };

    const handleSort = (option) => {
        let sortedFavorites = [...favorites];
        if (option === "highestRated") {
            sortedFavorites.sort((a, b) => b.rating - a.rating);
        } else if (option === "alphabetical") {
            sortedFavorites.sort((a, b) => a.name.localeCompare(b.name));
        }
        setFavorites(sortedFavorites);
        setSortOption(option);
    };

    const handleRemoveFavorite = (id) => {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem('likedRestaurants', JSON.stringify(updatedFavorites.map((f) => f.id)));
    };

    return (
        <Layout>
            <div
                style={{
                    background: 'linear-gradient(135deg, #ff7e29, #4caf50)', // Restaurants sayfasındaki degrade renkler
                    color: '#fff',
                    minHeight: '100vh',
                    padding: '20px',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>❤️ Favori Restoranlarım</h1>
                    <div style={{ marginBottom: '20px' }}>
                        <button
                            onClick={() => handleSort("highestRated")}
                            style={{
                                padding: '10px 20px',
                                marginRight: '10px',
                                backgroundColor: sortOption === "highestRated" ? '#fff' : '#ddd',
                                color: sortOption === "highestRated" ? '#4CAF50' : '#000',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            En Yüksek Puan
                        </button>
                        <button
                            onClick={() => handleSort("alphabetical")}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: sortOption === "alphabetical" ? '#fff' : '#ddd',
                                color: sortOption === "alphabetical" ? '#4CAF50' : '#000',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Alfabetik
                        </button>
                    </div>

                    {favorites.length === 0 ? (
                        <div style={{ marginTop: '50px', color: '#ddd' }}>
                            <h2>Hiç favori restoranınız yok!</h2>
                            <p>Favori restoranlarınızı ekleyerek buradan görüntüleyebilirsiniz. 😊</p>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '20px',
                                padding: '20px',
                            }}
                        >
                            {favorites.map((favorite) => (
                                <div
                                    key={favorite.id}
                                    style={{
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        backgroundColor: '#fff',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        cursor: 'pointer',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <img
                                        src={favorite.imageUrl}
                                        alt={favorite.name}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div style={{ padding: '15px', textAlign: 'center' }}>
                                        <h4 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>
                                            {favorite.name}
                                        </h4>
                                        <p style={{ fontSize: '14px', color: '#555', marginBottom: '5px' }}>
                                            {favorite.address}
                                        </p>
                                        <p style={{ fontSize: '14px', color: '#777' }}>
                                            Rating: <strong>{favorite.rating} ⭐</strong>
                                        </p>
                                        <div style={{ marginTop: '10px' }}>
                                            <Link href={`/restaurants/${favorite.id}`}>
                                                <button
                                                    style={{
                                                        padding: '8px 15px',
                                                        backgroundColor: '#4CAF50',
                                                        color: '#fff',
                                                        borderRadius: '5px',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        marginRight: '10px',
                                                    }}
                                                >
                                                    Detayları Gör
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleRemoveFavorite(favorite.id)}
                                                style={{
                                                    padding: '8px 15px',
                                                    backgroundColor: '#f44336',
                                                    color: '#fff',
                                                    borderRadius: '5px',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Favorilerden Kaldır
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default FavoritesPage;
