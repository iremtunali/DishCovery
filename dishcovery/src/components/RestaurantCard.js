import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

export default function RestaurantCard({ restaurant }) {
    return (
        <Card sx={{ width: '100%', maxWidth: '300px', boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography color="text.secondary">{restaurant.city}</Typography>
                <Typography color="text.secondary">{restaurant.category}</Typography>
                <Box sx={{ marginTop: '10px' }}>
                    <Rating value={restaurant.rating} readOnly />
                </Box>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    {restaurant.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
