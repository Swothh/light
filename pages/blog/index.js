import Main from '../../components/Blog/Main.js';
import Hero from '../../components/Blog/Hero.js';
import settings from '../../settings.json';
import Head from 'next/head';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | {settings.brand.name}</title>
            </Head>
            <div className="w-full">
                <Hero />
                <Main />
            </div>
        </>
    );
};