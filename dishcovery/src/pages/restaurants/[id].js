import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const RestaurantDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false); // Beğeni durumu

    useEffect(() => {
        if (id) {
            fetchRestaurantDetails();
            checkLikedStatus(); // Beğeni durumunu kontrol et
        }
    }, [id]);

    const fetchRestaurantDetails = async () => {
        try {
            const response = await fetch(`/api/restaurantDetails?id=${id}`);
            const data = await response.json();

            if (response.ok) {
                setRestaurant(data);
                setError(null);
            } else {
                setError(data.error || 'Bir hata oluştu.');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Beğeni durumunu kontrol et
    const checkLikedStatus = () => {
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        setLiked(likedRestaurants.includes(id));
    };

    // Beğeni durumunu güncelle
    const toggleLike = () => {
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        if (liked) {
            // Beğeniyi kaldır
            const updatedLikes = likedRestaurants.filter(restaurantId => restaurantId !== id);
            localStorage.setItem('likedRestaurants', JSON.stringify(updatedLikes));
        } else {
            // Beğeniyi ekle
            likedRestaurants.push(id);
            localStorage.setItem('likedRestaurants', JSON.stringify(likedRestaurants));
        }
        setLiked(!liked);
    };

    if (loading) {
        return (
            <Layout>
                <p>Yükleniyor...</p>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <p style={{ color: 'red' }}>{error}</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                {restaurant ? (
                    <div>
                        <h1>{restaurant.name}</h1>
                        <img
                            src={restaurant.photoUrl}
                            alt={restaurant.name}
                            style={{
                                width: '100%',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />
                        <p><strong>Adres:</strong> {restaurant.address}</p>
                        <p><strong>Puan:</strong> {restaurant.rating} ⭐</p>
                        <p><strong>Fiyat Seviyesi:</strong> {restaurant.priceLevel ? '₺'.repeat(restaurant.priceLevel) : 'Bilinmiyor'}</p>
                        <button
                            onClick={toggleLike}
                            style={{
                                padding: '10px 20px',
                                marginTop: '10px',
                                backgroundColor: liked ? 'red' : 'gray',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {liked ? 'Beğeniyi Kaldır' : 'Beğen'}
                        </button>

                        {/* Çalışma Saatleri */}
                        {restaurant.openingHours && (
                            <div style={{ marginTop: '20px' }}>
                                <strong>Çalışma Saatleri:</strong>
                                <ul>
                                    {restaurant.openingHours.map((hour, index) => (
                                        <li key={index}>{hour}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Yorumlar */}
                        {restaurant.reviews && (
                            <div style={{ marginTop: '20px' }}>
                                <strong>Yorumlar:</strong>
                                {restaurant.reviews.map((review, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            borderBottom: '1px solid #ccc',
                                            paddingBottom: '10px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <p>
                                            <strong>{review.authorName}</strong> ({review.rating} ⭐)
                                        </p>
                                        <p>{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Telefon ve Web Sitesi */}
                        {restaurant.phone && <p><strong>Telefon:</strong> {restaurant.phone}</p>}
                        {restaurant.website && (
                            <p>
                                <strong>Web Sitesi:</strong>{' '}
                                <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                                    {restaurant.website}
                                </a>
                            </p>
                        )}
                    </div>
                ) : (
                    <p>Restoran bilgileri bulunamadı.</p>
                )}
            </div>
        </Layout>
    );
};

export default RestaurantDetails;
