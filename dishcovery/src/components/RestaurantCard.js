import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function RestaurantCard({ name, description }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View More</Button>
            </CardActions>
        </Card>
    );
}