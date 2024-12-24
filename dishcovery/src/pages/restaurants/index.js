import React, { useState } from 'react';
import Layout from '@/components/Layout';

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
                <h1>Restoranlar</h1>
                <div>
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                            <strong>{restaurant.name}</strong> - {restaurant.address} ({restaurant.rating}⭐)
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Restaurants;
