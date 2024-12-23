import '../styles/global.css'; // Eğer bir stil dosyanız varsa
import Layout from '../components/Layout'; // Layout bileşenini içe aktarın

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
