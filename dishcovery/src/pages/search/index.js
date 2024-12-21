import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import FilterBar from '../../components/FilterBar';
import RestaurantCard from '../../components/RestaurantCard';
import { Box, Typography } from '@mui/material';

export default function SearchPage() {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('/api/restaurants');
                const data = await response.json();
                if (data.success) {
                    setRestaurants(data.data);
                    setFilteredRestaurants(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch restaurants:', error);
            }
        };
        fetchRestaurants();
    }, []);

    useEffect(() => {
        const filtered = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchTerm, restaurants]);

    return (
        <Layout>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" color="primary">Search Restaurants</Typography>
                <FilterBar setSearchTerm={setSearchTerm} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                    {filteredRestaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant._id}
                            name={restaurant.name}
                            city={restaurant.city}
                            category={restaurant.category}
                            description={restaurant.description}
                        />
                    ))}
                </Box>
            </Box>
        </Layout>
    );
}
