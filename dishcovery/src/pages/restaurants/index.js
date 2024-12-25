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
            <div
                style={{
                    background: 'linear-gradient(135deg, #ff7e29, #4caf50)', // Degrade arka plan
                    minHeight: '100vh',
                    padding: '50px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <img
                        src="/logo.jpg"
                        alt="DishCovery Logo"
                        style={{
                            width: '150px',
                            height: 'auto',
                            marginBottom: '10px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                    <p style={{ fontSize: '20px', color: '#fff', marginTop: '10px' }}>
                        En iyi restoranları keşfedin!
                    </p>
                </div>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        maxWidth: '600px',
                        width: '100%',
                    }}
                >
                    <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Restoran Ara</h1>
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            placeholder="Şehir veya anahtar kelime girin"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            style={{
                                padding: '12px',
                                marginRight: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: 'calc(100% - 130px)',
                                maxWidth: '400px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <button
                            onClick={handleSearch}
                            style={{
                                padding: '12px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, transform 0.2s',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#45a049';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#4CAF50';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Ara
                        </button>
                    </div>
                    {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
                </div>
                {restaurants.length > 0 && (
                    <div
                        style={{
                            marginTop: '30px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            width: '100%',
                            maxWidth: '1200px',
                        }}
                    >
                        {restaurants.map((restaurant) => (
                            <div
                                key={restaurant.id}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    backgroundColor: 'white',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    cursor: 'pointer',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.boxShadow =
                                        '0 8px 16px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.boxShadow =
                                        '0 4px 8px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                <Link href={`/restaurants/${restaurant.id}`}>
                                    <img
                                        src={restaurant.photoUrl}
                                        alt={restaurant.name}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Link>
                                <div style={{ padding: '10px', textAlign: 'center' }}>
                                    <h3>{restaurant.name}</h3>
                                    <p>{restaurant.address}</p>
                                    <p>{restaurant.rating} ⭐</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Restaurants;
