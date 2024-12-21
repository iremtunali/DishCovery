import { Card, CardContent, Typography, Box } from '@mui/material';

export default function RestaurantCard({ restaurant }) {
    return (
        <Card sx={{ width: '250px', boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography color="text.secondary">{restaurant.city}</Typography>
                <Typography color="text.secondary">{restaurant.category}</Typography>
                <Box sx={{ marginTop: '10px' }}>
                    <Typography variant="body2" color="textSecondary">
                        A great place to eat!
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

