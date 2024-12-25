import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

const ProfilePage = () => {
    const user = {
        username: "john_doe",
        profilePicture: "/ProfilePhoto.jpg",
        bio: "Food lover, traveler, and photographer 🌍🍴📸",
        postsCount: 34,
        followersCount: 1200,
        followingCount: 200,
    };

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Beğenilen restoranları al
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        // Beğenilen restoranların detaylarını getir
        fetchFavorites(likedRestaurants);
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

    return (
        <Layout>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <img src={user.profilePicture} alt='Profile' style={{ width: '100px', borderRadius: '50%' }} />
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
                <div>
                    <strong>{user.postsCount}</strong> Posts | <strong>{user.followersCount}</strong> Followers |{' '}
                    <strong>{user.followingCount}</strong> Following
                </div>
            </div>
            <h3 style={{ margin: '20px 0' }}>❤️ Favorites</h3>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {favorites.map((favorite) => (
                    <div key={favorite.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={favorite.imageUrl} alt={favorite.name} style={{ width: '100%' }} />
                        <h4>{favorite.name}</h4>
                        <p>{favorite.address}</p>
                        <p>Rating: {favorite.rating} ⭐</p>
                        {favorite.phone && <p><strong>Telefon:</strong> {favorite.phone}</p>}
                        {favorite.website && (
                            <p>
                                <strong>Web Sitesi:</strong>{' '}
                                <a href={favorite.website} target="_blank" rel="noopener noreferrer">
                                    {favorite.website}
                                </a>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default ProfilePage;
