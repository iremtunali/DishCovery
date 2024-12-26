import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const RestaurantDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [restaurant, setRestaurant] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (id) {
            fetchRestaurantDetails();
            checkLikedStatus();
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

    const checkLikedStatus = () => {
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        setLiked(likedRestaurants.includes(id));
    };

    const toggleLike = () => {
        const likedRestaurants = JSON.parse(localStorage.getItem('likedRestaurants')) || [];
        if (liked) {
            const updatedLikes = likedRestaurants.filter(restaurantId => restaurantId !== id);
            localStorage.setItem('likedRestaurants', JSON.stringify(updatedLikes));
        } else {
            likedRestaurants.push(id);
            localStorage.setItem('likedRestaurants', JSON.stringify(likedRestaurants));
        }
        setLiked(!liked);
    };

    if (loading) {
        return (
            <Layout>
                <p className="text-center text-xl py-10">Yükleniyor...</p>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <p className="text-red-500 text-center py-10">{error}</p>
            </Layout>
        );
    }

    const renderOpeningHours = () => (
        <div className="mt-10 border-t border-gray-200 pt-6">
            <h4 className="text-2xl font-bold mb-4">Çalışma Saatleri:</h4>
            <ul className="list-disc list-inside pl-4 space-y-2">
                {restaurant.openingHours.map((hour, index) => (
                    <li key={index} className="text-lg text-gray-700">{hour}</li>
                ))}
            </ul>
        </div>
    );

    const renderReviews = () => (
        <div className="mt-10 border-t border-gray-200 pt-6">
            <h4 className="text-2xl font-bold mb-4">Yorumlar:</h4>
            <div className="space-y-4">
                {restaurant.reviews.map((review, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-lg">
                        <p className="font-bold text-lg mb-2 text-gray-800">{review.authorName} ({review.rating} ⭐)</p>
                        <p className="text-lg text-gray-700">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderContactInfo = () => (
        <div className="mt-10 text-lg space-y-4 border-t border-gray-200 pt-6">
            {restaurant.phone && <p className="text-gray-600"><strong>Telefon:</strong> {restaurant.phone}</p>}
            {restaurant.website && (
                <p className="text-gray-600">
                    <strong>Web Sitesi:</strong>{' '}
                    <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {restaurant.website}
                    </a>
                </p>
            )}
        </div>
    );

    return (
        <Layout>
            <div className="container mx-auto p-5">
                {restaurant ? (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">{restaurant.name}</h1>
                        <div className="flex justify-center mb-8">
                            <img
                                src={restaurant.photoUrl}
                                alt={restaurant.name}
                                className="w-full max-w-4xl object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="text-lg space-y-4 mb-8">
                            <p className="text-gray-600"><strong>Adres:</strong> {restaurant.address}</p>
                            <p className="text-gray-600"><strong>Puan:</strong> {restaurant.rating} ⭐</p>
                            <p className="text-gray-600"><strong>Fiyat Seviyesi:</strong> {restaurant.priceLevel ? '₺'.repeat(restaurant.priceLevel) : 'Bilinmiyor'}</p>
                        </div>
                        <div className="flex justify-center mb-10">
                            <button
                                onClick={toggleLike}
                                className={`px-6 py-3 text-white rounded-full shadow-md flex items-center justify-center space-x-2 focus:outline-none transition-transform transform ${
                                    liked ? 'bg-red-500' : 'bg-gray-500'
                                } hover:scale-105`}
                            >
                                <span className="leading-none">{liked ? 'Beğeniyi Kaldır' : 'Beğen'}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill={liked ? 'currentColor' : 'none'}
                                    stroke={liked ? 'currentColor' : 'white'}
                                    className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-white'}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>
                            </button>
                        </div>

                        {restaurant.openingHours && renderOpeningHours()}
                        {restaurant.reviews && renderReviews()}
                        {renderContactInfo()}
                    </div>
                ) : (
                    <p className="text-center text-lg">Restoran bilgileri bulunamadı.</p>
                )}
            </div>
        </Layout>
    );
};

export default RestaurantDetails;
