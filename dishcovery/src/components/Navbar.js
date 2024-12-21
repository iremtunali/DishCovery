import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Yeni icon
import Link from 'next/link';
import { useRouter } from 'next/router'; // Aktif sayfayı belirlemek için

export default function Navbar() {
    const router = useRouter();

    return (
        <AppBar position="static" sx={{ backgroundColor: '#f5f0e1' }}> {/* Pastel krem rengi arka plan */}
            <Toolbar>
                {/* Logo veya Başlık */}
                <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif', color: '#d15a40' }}>
                    Dishcovery
                </Typography>

                {/* Navigasyon Butonları */}
                <Box>
                    <Link href="/" passHref>
                        <IconButton
                            color={router.pathname === '/' ? 'secondary' : 'inherit'}
                            aria-label="Anasayfa"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <HomeIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                    <Link href="/restaurants" passHref>
                        <IconButton
                            color={router.pathname === '/restaurants' ? 'secondary' : 'inherit'}
                            aria-label="Restoranlar"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <SearchIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                    <Link href="/offers" passHref>
                        <IconButton
                            color={router.pathname === '/offers' ? 'secondary' : 'inherit'} // İndirim sayfası için renk değişir
                            aria-label="Kampanyalar"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <LocalOfferIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                    <Link href="/profile" passHref>
                        <IconButton
                            color={router.pathname === '/profile' ? 'secondary' : 'inherit'}
                            aria-label="Profil"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <AccountCircleIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
