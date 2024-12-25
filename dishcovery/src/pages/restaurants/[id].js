import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const RestaurantDetails = () => {
    const router = useRouter();
    const { id } = router.query; // URL'deki 'id' parametresi

    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetchRestaurantDetails();
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
                        <p><strong>Toplam Yorum:</strong> {restaurant.totalRatings}</p>
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
