import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { useRouter } from 'next/router'; // useRouter hook'u eklendi

export default function Navbar() {
    const router = useRouter(); // Router kullanılarak aktif sayfa tespit edildi

    return (
        <AppBar position="static" sx={{ backgroundColor: '#f5f0e1' }}> {/* Pastel krem rengi arka plan */}
            <Toolbar>
                {/* Logo veya Başlık */}
                <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Roboto, sans-serif', color: '#d15a40' }}> {/* Restoran havası için kırmızımsı ton */}
                    Dishcovery
                </Typography>

                {/* Navigasyon Butonları */}
                <Box>
                    <Link href="/" passHref>
                        <IconButton
                            color={router.pathname === '/' ? 'secondary' : 'inherit'} // Ana sayfa için renk değişir
                            aria-label="Anasayfa"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <HomeIcon sx={{ fontSize: 30 }} /> {/* İkon boyutunu büyüttüm */}
                        </IconButton>
                    </Link>
                    <Link href="/restaurants" passHref>
                        <IconButton
                            color={router.pathname === '/restaurants' ? 'secondary' : 'inherit'} // Restoranlar sayfası için renk değişir
                            aria-label="Restoranlar"
                            sx={{ '&:hover': { backgroundColor: '#f5c6a5' } }}
                        >
                            <SearchIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Link>
                    <Link href="/profile" passHref>
                        <IconButton
                            color={router.pathname === '/profile' ? 'secondary' : 'inherit'} // Profil sayfası için renk değişir
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
