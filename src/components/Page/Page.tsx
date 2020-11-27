import Head from 'next/head';
import { Nav } from 'components';
import styles from './Page.module.scss';

type PageProps = {
    title?: string;
    children: React.ReactNode;
};

export function Page({ title, children }: PageProps): JSX.Element {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title || 'Rowan Krishnan'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {children}
        </div>
    );
}
