import { Card, CardContent, Typography } from '@mui/material';

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