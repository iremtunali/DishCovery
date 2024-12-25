import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const fetchRestaurants = async () => {
        try {
            const response = await fetch(`/api/restaurants?query=${query}`);
            const data = await response.json();

            if (response.ok) {
                setRestaurants(data);
                setError(null);
            } else {
                setError(data.error || 'Bir hata oluştu.');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSearch = () => {
        if (query.trim() === '') {
            setError('Lütfen bir şehir veya anahtar kelime girin.');
            return;
        }
        fetchRestaurants();
    };

    return (
        <Layout>
            <div style={{ padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Restoranlar</h1>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <input
                        type="text"
                        placeholder="Şehir veya anahtar kelime girin"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ padding: '10px', marginRight: '10px' }}
                    />
                    <button onClick={handleSearch} style={{ padding: '10px' }}>
                        Ara
                    </button>
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {restaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '10px',
                                textAlign: 'center',
                            }}
                        >
                            <Link href={`/restaurants/${restaurant.id}`}>
                                <img
                                    src={restaurant.photoUrl} // API'den dönen resim URL'sini buraya bağlayın
                                    alt={restaurant.name}
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Link>
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.address}</p>
                            <p>{restaurant.rating} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Restaurants;
