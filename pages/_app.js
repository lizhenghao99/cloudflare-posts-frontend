import HeadComponent from '../components/contents/HeadComponent';
import Layout from '../components/layouts/Layout';
import { Chakra } from '../lib/chakra';
import '../styles/styles.css';
import theme from '../themes/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Chakra theme={theme} cookies={pageProps.cookies}>
            <HeadComponent/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Chakra>
    );
};

export default MyApp;

export { getServerSideProps } from '/lib/chakra';