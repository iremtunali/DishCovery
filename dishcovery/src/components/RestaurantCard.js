import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const RestaurantCard = ({ restaurant }) => {
    return (
        <Card sx={{ width: "300px", boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography color="text.secondary">{restaurant.address}</Typography>
                <Typography color="text.secondary">Puan: {restaurant.rating}</Typography>
                <Box sx={{ marginTop: "10px" }}>
                    <Typography variant="body2" color="textSecondary">
                        Toplam Yorum: {restaurant.totalRatings}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default RestaurantCard;
