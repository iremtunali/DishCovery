import Layout from '../../components/Layout';
import RestaurantCard from '../../components/RestaurantCard';
import { Box, Typography } from '@mui/material';

export default function Restaurants() {
    return (
        <Layout>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" color="primary">Restaurant List</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                    <RestaurantCard name="Example Restaurant" description="A great place for food." />
                    <RestaurantCard name="Another Restaurant" description="Delicious cuisine awaits." />
                </Box>
            </Box>
        </Layout>
    );
}