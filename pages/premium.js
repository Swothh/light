import settings from '../settings.json';
import Head from 'next/head';
import Link from 'next/link';

export default function Premium() {
    return (
        <>
            <Head>
                <title>Premium | {settings.brand.name}</title>
            </Head>
            <div className="w-full p-10">
                <h1 className="text-blurple font-bold text-5xl text-center">Premium</h1>
                <h4 className="text-lg text-white text-center">Kendinizi veya sunucunuzu özel hissedin.</h4>
                <div className="w-full mt-10 md:grid md:grid-cols-2 md:gap-8 w-10/12 lg:w-8/12 mx-auto">
                    <div className="rounded-md shadow-lg px-8 py-5" style={{ background: 'linear-gradient(to right, #bc4e9c, #f80759)' }}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white">Kullanıcı Üyeliği</h3>
                            <span className="text-sm text-white bg-gray py-2 px-4 rounded-md">10₺</span>
                        </div>
                        <hr className="my-3 opacity-50" />
                        <ul>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-fuchsia bg-gray p-1 rounded-full"></i>
                                Günlük ödülde 2 katı coin.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-fuchsia bg-gray p-1 rounded-full"></i>
                                Yazı/Tura'da kaybetmeme özelliği.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-fuchsia bg-gray p-1 rounded-full"></i>
                                Bekleme süresinin kaldırılması.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-fuchsia bg-gray p-1 rounded-full"></i>
                                Sunucumuzda özel rol.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-fuchsia bg-gray p-1 rounded-full"></i>
                                Hesabınıza +150 coin.
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-md shadow-lg px-8 py-5 mt-5 md:mt-0" style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)' }}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white">Sunucu Üyeliği</h3>
                            <span className="text-sm text-white bg-gray py-2 px-4 rounded-md">25₺</span>
                        </div>
                        <hr className="my-3 opacity-50" />
                        <ul>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-green bg-gray p-1 rounded-full"></i>
                                1 aylık özel davet kodu.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-green bg-gray p-1 rounded-full"></i>
                                Partner bulma komudunda ilk sayfa.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-green bg-gray p-1 rounded-full"></i>
                                Sunucu sahibine hediye premium.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-green bg-gray p-1 rounded-full"></i>
                                Bekleme süresinin yarıya indirilmesi.
                            </li>
                            <li className="text-white mb-2 italic">
                                <i className="fas fa-check-circle mr-2 text-green bg-gray p-1 rounded-full"></i>
                                Sunucu sahibine sunucumuzda rol.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <Link href="/discord">
                        <a className="bg-dark-1 rounded-2xl shadow-lg text-white font-bold py-3 px-6 text-xl cursor-pointer">
                            SATIN AL
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};