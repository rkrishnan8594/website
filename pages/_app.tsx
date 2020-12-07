import React from 'react';
import { ThemeProvider } from '../src/components';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
