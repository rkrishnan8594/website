import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
