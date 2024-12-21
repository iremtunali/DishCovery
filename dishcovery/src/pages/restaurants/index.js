import { useState } from 'react';
import Layout from '../../components/Layout';
import FilterBar from '../../components/FilterBar';
import RestaurantCard from '../../components/RestaurantCard';
import { Box, Typography } from '@mui/material';

// Örnek restoran verileri
const sampleRestaurants = [
    { id: 1, name: 'Example Restaurant', city: 'Istanbul', category: 'Turkish' },
    { id: 2, name: 'Another Restaurant', city: 'Ankara', category: 'Italian' },
    { id: 3, name: 'Seafood Delight', city: 'Izmir', category: 'Seafood' },
    { id: 4, name: 'Ankara Grill', city: 'Ankara', category: 'Turkish' },
    { id: 5, name: 'Pizza Delight', city: 'Istanbul', category: 'Italian' },
];

export default function Restaurants() {
    const [searchFilters, setSearchFilters] = useState({
        name: '',
        city: '',
        category: '',
    });

    // Filtreleme işlemi
    const filteredRestaurants = sampleRestaurants.filter((restaurant) => {
        const { name, city, category } = searchFilters;
        return (
            (name === '' || restaurant.name.toLowerCase().includes(name.toLowerCase())) &&
            (city === '' || restaurant.city === city) &&
            (category === '' || restaurant.category === category)
        );
    });

    return (
        <Layout>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                    Restaurant List
                </Typography>
                <FilterBar setSearchFilters={setSearchFilters} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))
                    ) : (
                        <Typography variant="body1" color="textSecondary">
                            No restaurants found.
                        </Typography>
                    )}
                </Box>
            </Box>
        </Layout>
    );
}
