import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Layout from '../components/Layout'; // Layout bileşenini kullanıyoruz
import { offers } from '../data/offers'; // Kampanya verileri

export default function Offers() {
    return (
        <Layout>
            <Box sx={{ backgroundColor: '#f9f9f9', py: 4, px: 2, minHeight: '100vh' }}>
                {/* Sayfa Başlığı */}
                <Typography variant="h4" color="primary" align="center" gutterBottom>
                    Günün Fırsatları
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
                    Restoranlarımıza özel bugünkü fırsatları keşfedin.
                </Typography>

                {/* Kampanya Kartları */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
                    {offers.map((offer, index) => (
                        <Card key={index} sx={{ maxWidth: 300, boxShadow: 3, textAlign: 'center' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={offer.offerImage}
                                alt={offer.restaurantName}
                            />
                            <CardContent>
                                <Typography variant="h6" color="textPrimary">
                                    {offer.offerTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    {offer.offerDescription}
                                </Typography>
                                <Button
                                    href={`/offers/${index}`}
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                >
                                    Detaylar
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
}
