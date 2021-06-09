import settings from '../settings.json';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Error404() {
    const [ loader, setLoader ] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setLoader(router.asPath.length > 25 ? (router.asPath.slice(0, 22) + '...') : router.asPath)
        }, 500);
    }, []);

    return (
        <>
            <Head>
                <title>404 | {settings.brand.name}</title>
            </Head>
            <div className="page-404 w-full h-screen flex items-center justify-center">
                <div className="rounded-md text-white">
                    <div className="w-full flex items-center justify-center shadow-lg bg-dark-1 rounded-md p-5">
                        <b className="text-2xl pr-3 border-r-2 border-gray-300">404</b> <h1 className="pl-3 text-xl">{loader == true ? <i className="fad fa-spinner-third fa-spin mr-1"></i> : <b>{loader}</b>} sayfası bulunamadı!</h1>
                    </div>
                    <div className="w-full flex items-center justify-center mt-3">
                        <a onClick={() => router.back()} className="bg-dark-1 py-3 px-6 rounded-md shadow-lg cursor-pointer text-white"><i className="fas fa-caret-left mr-2"></i> Geri Dön</a>
                    </div>
                </div>
            </div>
        </>
    );
};