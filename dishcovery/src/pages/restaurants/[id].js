import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function RestaurantDetails() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <h1>Restaurant Details for ID: {id}</h1>
            {/* Render restaurant details and comments */}
        </Layout>
    );
}

