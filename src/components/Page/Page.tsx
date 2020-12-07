import React, { useContext } from 'react';
import Head from 'next/head';
import { ThemeContext, Theme } from 'context/theme';
import { Nav } from 'components';
import styles from './Page.module.scss';

type PageProps = {
    title?: string;
    children: React.ReactNode;
};

export function Page({ title, children }: PageProps): JSX.Element {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${styles.container} ${theme === Theme.Light ? styles.containerLight : ''}`}>
            <Head>
                <title>{title || 'Rowan Krishnan'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            {children}
        </div>
    );
}
