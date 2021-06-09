import settings from '../../settings.json';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Maintenance() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Bakım | {settings.brand.name}</title>
            </Head>
            <div className="w-full h-full flex items-center justify-center p-5">
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-md">
                    <div className="w-full bg-dark-1 py-3 px-6 rounded-md shadow-lg text-white">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-white text-xl font-bold">Site bakımda!</h1>
                            <i className="text-white fas fa-cogs text-3xl"></i>
                        </div>
                        <hr className="my-2 opacity-25" />
                        <p className="text-sm text-gray-300">Bot'a ve siteye bakım yapılmaktadır, lütfen daha sonra tekrar deneyiniz. İletişim için <a href="/discord"><b>Discord</b></a> sunucumuza katılabilirsiniz.</p>
                    </div>
                    <div className="mt-5 flex items-center justify-center">
                        <h3 className="mr-5 text-white text-sm">Geliştirici misin?</h3>
                        <Link href={"/api/auth/login?url=" + router.asPath}>
                            <a className="bg-green text-gray text-sm py-2 px-4 rounded-md cursor-pointer">
                                <i className="far fa-sign-in mr-3"></i> Giriş Yap
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};