import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/analytics';

export default class extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="application-TileColor" content='#0F172A' />
                    <meta name="theme-color" content='#0F172A' />
                    <link rel="shortcut icon" href='/logo.gif' />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
                        rel='stylesheet'
                    />
                    <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){ dataLayer.push(arguments); }
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}');
                                `,
                            }}
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}