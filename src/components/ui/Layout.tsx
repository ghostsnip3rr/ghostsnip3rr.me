import Head from "next/head";
import { ReactNode } from "react";
import Router from 'next/router';
import { trackPageview } from "../../lib/analytics";

type LayoutProps = {
    title: string,
    desc?: string,
    image?: string,
    url?: string,
    children: ReactNode;
}

Router.events.on('routeChangeComplete', (url) => {
    trackPageview(url);
});

export default function Layout({ title, desc, image, url, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={desc} />
                <meta property="image" content={image} />

                <meta property="og:type" content="Guide" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={image} />
                <meta property="og:image:secure_url" content={image} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                
                <meta property="twitter:url" content={url} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={desc} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@ghostsnip3rrr" />
                <meta property="twitter:image" content={image} />
                <meta property="twitter:creator" content="@ghostsnip3rrr" />
            </Head>

            <div className='fixed w-full h-screen bg-slate-900'>
                { children }
            </div>
        </>
    )
}