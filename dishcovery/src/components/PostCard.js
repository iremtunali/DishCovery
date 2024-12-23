import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

// İlk PostCard bileşeni
export default function PostCard({ user, content }) {
    return (
        <Card sx={{ minWidth: 275, mt: 2 }}>
            <CardContent>
                <Typography variant="h6" color="primary">
                    {user}
                </Typography>
                <Typography variant="body1">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
}

// İkinci PostCard bileşenini farklı bir isimle yeniden adlandırın
export function ImageCard({ imageUrl }) {
    return (
        <div className="post-card">
            <img src={imageUrl} alt="Post" />
        </div>
    );
}
