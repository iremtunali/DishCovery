import Navbar from './Navbar';
import { Container } from '@mui/material';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 2 }}>
                {children}
            </Container>
        </>
    );
}