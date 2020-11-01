import Head from 'next/head';
import { Page } from '../../components';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <Page>
            <Head>
                <title>Rowan Krishnan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Hi</p>
        </Page>
    );
};
