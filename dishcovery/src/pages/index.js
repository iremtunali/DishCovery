import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const HomePage = () => {
    const [popularRestaurants, setPopularRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPopularRestaurants = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/highRatedRestaurants");
            const data = await response.json();

            if (response.ok) {
                setPopularRestaurants(data);
            } else {
                setError(data.error || "Bir hata oluştu.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularRestaurants();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
                    Popüler Restoranlar
                </h1>
                {loading && <p className="text-center text-lg text-gray-500">Yükleniyor...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {popularRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant.id}
                            href={`/restaurants/${restaurant.id}`} // Dinamik rota
                            className="block bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
                        >
                            <img
                                src={restaurant.imageUrl}
                                alt={restaurant.name}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {restaurant.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    {restaurant.address}
                                </p>
                                <p className="text-yellow-500 font-bold text-center">
                                    ⭐ {restaurant.rating}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
