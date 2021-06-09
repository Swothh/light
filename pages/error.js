import settings from '../settings.json';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Error() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Hata: {router.query['code'] || 404} | {settings.brand.name}</title>
            </Head>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-full mx-5 rounded-md md:mx-0 md:w-1/2 lg:w-1/3">
                    <div className="overflow-hidden w-full rounded-md bg-dark-1 shadow-lg p-5 text-white">
                        <h1 className="text-xl"><i className="bg-red py-3 px-4 text-xl rounded-full text-dark-1 fas fa-exclamation-triangle mr-2"></i> Hata: <span className="text-lg opacity-75 font-bold">{router.query['code'] || 404}</span></h1>
                        <h4 className="text-md text-gray-300 italic text-center mt-3">{router.query['message'] || 'Bir hata oluştu!'}</h4>
                    </div>
                    <div className="w-full flex items-center justify-center mt-3">
                        <Link href="/">
                            <a className="py-3 px-6 rounded-md bg-dark-1 shadow-lg text-white">
                                <i className="far fa-home mr-2"></i> Ana Sayfa
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};