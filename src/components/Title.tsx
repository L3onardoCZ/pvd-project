"use client"

import Head from 'next/head';

export default function Title() {
    return(
        <Head>
            <title>Moje stránka</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Popis mé webové stránky" />
            <meta name="keywords" content="klíčová slova, pro, mou, webovou, stránku" />
        </Head>
    );
}
