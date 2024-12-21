import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

export default function Navbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* Logo veya Başlık */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Dishcovery
                </Typography>

                {/* Navigasyon Butonları */}
                <Box>
                    <Link href="/" passHref>
                        <IconButton color="inherit" aria-label="Anasayfa">
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link href="/restaurants" passHref>
                        <IconButton color="inherit" aria-label="Restoranlar">
                            <SearchIcon />
                        </IconButton>
                    </Link>
                    <Link href="/profile" passHref>
                        <IconButton color="inherit" aria-label="Profil">
                            <AccountCircleIcon />
                        </IconButton>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
