import settings from '../../settings.json';
import Head from 'next/head';

export default function Blacklist() {
    return (
        <>
            <Head>
                <title>Karaliste | {settings.brand.name}</title>
            </Head>
            <div className="w-full h-full flex items-center justify-center p-5">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md">
                    <div className="w-full bg-dark-1 py-3 px-6 rounded-md shadow-lg text-white">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-white text-xl font-bold">Erişim engellendi!</h1>
                            <i className="text-white fas fa-cogs text-3xl"></i>
                        </div>
                        <hr className="my-2 opacity-25" />
                        <p className="text-sm text-gray-300">Bot'a ve siteye erişiminiz karaliste'de olduğunuz için engellenmiştir. İtiraz etmek istiyorsanız <a href="/discord"><b>Discord</b></a> sunucumuza katılabilirsiniz.</p>
                    </div>
                </div>
            </div>
        </>
    );
};