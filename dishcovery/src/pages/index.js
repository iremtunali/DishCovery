import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';

export default function Home() {
    return (
        <Layout>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h3" color="primary">Welcome to Dishcovery</Typography>
                <Typography variant="body1" color="textSecondary">Discover the best restaurants in your city!</Typography>
            </Box>
        </Layout>
    );
}
