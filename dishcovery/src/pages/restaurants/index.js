import Layout from '../../components/Layout';
import FilterBar from '../../components/FilterBar';
import RestaurantCard from '../../components/RestaurantCard';
import { Box, Typography, Grid } from '@mui/material';
import { useState } from "react";

const restaurantsData = [
    { id: 1, name: "Italiano", description: "A great place for Italian food.", city: "Istanbul", category: "Italian", rating: 4.5 },
    { id: 2, name: "Burger King", description: "Delicious fast food.", city: "Ankara", category: "Fast Food", rating: 3.8 },
    { id: 3, name: "Kebapci İskender", description: "Authentic Turkish cuisine.", city: "Izmir", category: "Turkish", rating: 4.9 },
    { id: 4, name: "Coffee Break", description: "Relax with a cup of coffee.", city: "Istanbul", category: "Cafe", rating: 4.2 },
];

export default function Restaurants() {
    const [filteredData, setFilteredData] = useState(restaurantsData);

    const handleFilterChange = (filters) => {
        const { search, city, category } = filters;

        const filtered = restaurantsData.filter((restaurant) => {
            const matchesSearch = restaurant.name.toLowerCase().includes(search.toLowerCase());
            const matchesCity = city ? restaurant.city === city : true;
            const matchesCategory = category ? restaurant.category === category : true;

            return matchesSearch && matchesCity && matchesCategory;
        });

        setFilteredData(filtered);
    };

    return (
        <Layout>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" color="primary">Restaurant List</Typography>
                <FilterBar onFilterChange={handleFilterChange} />
                <Grid container spacing={2}>
                    {filteredData.map((restaurant) => (
                        <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                            <RestaurantCard restaurant={restaurant} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}
