import Layout from '../components/Layout';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';

const stories = [
    {
        avatar: "/images/user1.png",
        name: "Ahmet Yıldırım",
        story: "Dishcovery sayesinde yeni favori restoranımı keşfettim. Harika bir deneyimdi!"
    },
    {
        avatar: "/images/user2.png",
        name: "Zeynep Kaya",
        story: "Restoran seçimlerimde artık hiç kararsız kalmıyorum. Teşekkürler Dishcovery!"
    },
    {
        avatar: "/images/user3.png",
        name: "Mehmet Demir",
        story: "Sevdiklerimle harika bir akşam yemeği geçirmemi sağladınız, çok mutluyum!"
    }
];

export default function Home() {
    return (
        <Layout>
            {/* Kullanıcı Hikayeleri Bölümü */}
            <Box sx={{ backgroundColor: '#f9f9f9', py: 4 }}>
                <Typography variant="h4" color="primary" align="center" gutterBottom>
                    Kullanıcı Hikayeleri
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
                    Platformumuzda güzel deneyimler yaşayan kullanıcılarımızın hikayelerini keşfedin.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                        px: 2,
                    }}
                >
                    {stories.map((story, index) => (
                        <Card key={index} sx={{ maxWidth: 300, textAlign: 'center', boxShadow: 3 }}>
                            <CardContent>
                                <Avatar
                                    src={story.avatar}
                                    alt={story.name}
                                    sx={{ width: 60, height: 60, margin: '0 auto', mb: 2 }}
                                />
                                <Typography variant="h6" color="textPrimary">
                                    {story.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    {story.story}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
            {/* Ana Sayfa İçeriği */}
            <Box sx={{textAlign: 'center', mt: 4}}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Welcome to Dishcovery
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    Discover the best restaurants in your city!
                </Typography>
            </Box>
            {/* Popüler Restoranlar Bölümü */}
            <Box sx={{mt: 6}}>
                <Typography variant="h4" gutterBottom>
                    Popüler Restoranlar
                </Typography>
                <Box sx={{display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'left'}}>
                    {/* Restoran 1 */}
                    <Box sx={{border: '1px solid #a50054', borderRadius: 2, p: 2, width: 300}}>
                        <img
                            src="/images/restaurant1.png"
                            alt="Restoran 1"
                            style={{width: '100%', borderRadius: '8px', marginBottom: '16px'}}
                        />
                        <Typography variant="h6">Restoran 1</Typography>
                        <Typography variant="body2">Lezzetli yemekleri ve harika ambiyansı ile ünlü.</Typography>
                    </Box>

                    {/* Restoran 2 */}
                    <Box sx={{border: '1px solid #a50054', borderRadius: 2, p: 2, width: 300}}>
                        <img
                            src="/images/restaurant2.png"
                            alt="Restoran 2"
                            style={{width: '100%', borderRadius: '8px', marginBottom: '16px'}}
                        />
                        <Typography variant="h6">Restoran 2</Typography>
                        <Typography variant="body2">Şehrin en iyi burgerlerini burada bulabilirsiniz.</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Yeni Postlar Bölümü */}
            <Box sx={{mt: 6}}>
                <Typography variant="h4" gutterBottom>
                    Yeni Postlar
                </Typography>
                <Box sx={{display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'left'}}>
                    {/* Post 1 */}
                    <Box sx={{border: '1px solid #a50054', borderRadius: 2, p: 2, width: 300}}>
                        <img
                            src="/images/post1.png"
                            alt="Post 1"
                            style={{width: '100%', borderRadius: '8px', marginBottom: '16px'}}
                        />
                        <Typography variant="h6">Kullanıcı Adı</Typography>
                        <Typography variant="body2">Bu restoranda harika bir akşam yemeği yedim!</Typography>
                    </Box>

                    {/* Post 2 */}
                    <Box sx={{border: '1px solid #a50054', borderRadius: 2, p: 2, width: 300}}>
                        <img
                            src="/images/post2.png"
                            alt="Post 2"
                            style={{width: '100%', borderRadius: '8px', marginBottom: '16px'}}
                        />
                        <Typography variant="h6">Kullanıcı Adı</Typography>
                        <Typography variant="body2">Harika bir kahve ve tatlı deneyimi yaşadım!</Typography>
                    </Box>
                </Box>
            </Box>

        </Layout>
    );
}
