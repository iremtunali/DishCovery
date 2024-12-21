import Layout from '../components/Layout';
import {Box, Typography} from '@mui/material';


export default function Home() {
    return (
        <Layout>
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