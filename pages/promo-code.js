import settings from '../settings.json';
import { useRouter } from 'next/router';
import { useState } from 'react';
import swr from '../lib/swr.js';
import Head from 'next/head';
import Link from 'next/link';

export default function PromoCode() {
    let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;

    const router = useRouter();
    const [ code, setCode ] = useState('');
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    function useCode() {
        if (user) {
            if (!code || code.length == 0) return setError({ type: 0, message: 'Lütfen bir kod yazınız!' });
            setLoading(true);

            fetch('https://api.lightbot.me/promo-code/use?code=' + code, { headers: { Authorization: 'Bearer ' + user.accessToken } })
                .then(res => res.json())
                .then(res => {
                    setLoading(false);
                    if (res.success == false) {
                        setError({ type: 0, message: res.message });
                    } else {
                        setError({ type: 1, message: 'Kod başarıyla kullanıldı hesabınıza ' + res.message.prize + ' coin eklenmiştir.' });
                    };
                });
        } else {
            return setError({ type: 0, message: 'Lütfen giriş yapınız!' });
        };
    };

    return (
        <>
            <Head>
                <title>Promosyon Kodu | {settings.brand.name}</title>
            </Head>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-full mx-5 rounded-md md:mx-0 md:w-1/2 lg:w-1/3">
                    <div className="w-full bg-dark-1 rounded-md shadow-lg p-5 text-white">
                        <h1 className="text-lg"><i className="far fa-gift mr-2"></i> Promosyon Kodu Kullan</h1>
                        <p className="text-sm opacity-75 pt-1 pb-5">Promosyon kodunu kullanmak için aşağıya yazınız, giriş yaptığınızdan emin olun.</p>
                        <input value={code} onChange={(e) => { setCode(e.target.value); setError(false); }} type="text" placeholder="Kodu yazınız..." className="w-full text-white bg-dark-3 text-md shadow-lg rounded-md py-2 px-4 mx-auto block focus:outline-none" />
                        <div className="w-full mt-3 grid grid-cols-3 gap-4">
                            {error ? <div className={"w-full col-span-2 text-sm " + (error.type == 0 ? 'text-red' : 'text-green')}>
                                <i className={"fas py-1 text-gray rounded-full mr-2 " + (error.type == 0 ? 'px-2 fa-exclamation bg-red' : 'px-1 fa-check bg-green')}></i> {error.message}
                            </div> : <div className="w-full col-span-2"></div>}
                            {identify ? (
                                user ? (
                                    loading ? (
                                        <a className="bg-gray w-full cursor-pointer text-green font-semibold py-2 flex items-center justify-center rounded-md shadow-lg">
                                            <i className="fad fa-spinner-third fa-spin"></i>
                                        </a>
                                    ) : (
                                        <a onClick={useCode} className="bg-gray w-full cursor-pointer text-green font-semibold py-2 flex items-center justify-center rounded-md shadow-lg">
                                            <i className="far fa-plus mr-2"></i> Kullan
                                        </a>
                                    )
                                ) : (
                                    <Link href={"/api/auth/login?url=" + router.asPath}>
                                        <a className="bg-gray w-full cursor-pointer text-green font-semibold py-2 flex items-center justify-center rounded-md shadow-lg">
                                            <i className="far fa-sign-in mr-2"></i> Giriş Yap
                                        </a>
                                    </Link>
                                )
                            ) : (
                                <a className="bg-gray w-full cursor-pointer text-green font-semibold py-2 flex items-center justify-center rounded-md shadow-lg">
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-3">
                        <Link href="/">
                            <a className="py-3 px-6 rounded-md shadow-lg bg-dark-1 text-white">
                                <i className="far fa-home mr-2"></i> Ana Sayfa
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};