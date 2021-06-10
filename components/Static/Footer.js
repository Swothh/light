import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import settings from '../../settings.json';
import Link from 'next/link';

export default function Footer() {
    const [ open, setOpen ] = useState(false);
    const cancelButtonRef = useRef(null);

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-dark-1 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-dark-1 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-600 sm:mx-0 sm:h-10 sm:w-10">
                                <i className="fas text-white fa-language"></i>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-100">
                                Dil Değiştir
                                </Dialog.Title>
                                <div className="mt-2">
                                <select>
                                    <option>Yakında!</option>
                                </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="bg-dark-1 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setOpen(false)}
                            >
                            Kapat
                            </button>
                        </div>
                        </div>
                    </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="w-full bg-dark-1">
                <div className="w-11/12 max-w-screen-xl mx-auto bg-dark-1">
                    <div className="w-full p-5">
                        <div className="w-11/12 mx-auto" style={{ borderBottom: '3px solid var(--dark-3)' }}>
                            <img className="h-16 pb-3" src={settings.brand.logo} />
                        </div>
                    </div>
                    <div style={{ borderBottom: '3px solid var(--dark-3)' }} className="w-11/12 mx-auto p-5 space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        <div>
                            <h3 className="font-bold text-xl text-white">Hızlı Menü</h3>
                            <ul className="mt-2 text-gray-100 opacity-75">
                                <li className="my-1">
                                    <Link href="/">
                                        Ana Sayfa
                                    </Link>
                                </li>
                                <li className="my-1">
                                    <Link href="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-1">
                                    <Link href="/premium">
                                        Premium
                                    </Link>
                                </li>
                                <li className="my-1">
                                    <Link href="/commands">
                                        Komutlar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white">Oy Bağlantıları</h3>
                            <ul className="mt-2 text-gray-100 opacity-75">
                                <li className="my-1">
                                    <Link rel="nofollow" href="https://vcodes.xyz/bot/789918433495875584/vote">
                                        vcodes.xyz
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white">Ekstra</h3>
                            <ul className="mt-2 text-gray-100 opacity-75">
                                <li className="my-1">
                                    <a className="cursor-pointer" onClick={() => setOpen(true)}>
                                        Dil Değiştir
                                    </a>
                                </li>
                                <li className="my-1">
                                    <Link href="/discord">
                                        Destek Sunucusu
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white">Politikalar</h3>
                            <ul className="mt-2 text-gray-100 opacity-75">
                                <li className="my-1">
                                    <Link href="/privacy">
                                        Gizlilik Politikası
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-5 w-11/12 mx-auto flex items-center">
                        <div className="w-1/2">
                            <h6 className="text-gray-100 opacity-75 text-sm">© 2021 {settings.brand.name} | Tüm hakları saklıdır.</h6>
                        </div>
                        <div className="w-1/2 flex items-center justify-end">
                            <a rel="nofollow" href="//www.dmca.com/Protection/Status.aspx?ID=619a08e7-c821-45a9-bc8f-56e9e2957b1c" title="DMCA.com Protection Status" className="dmca-badge"> 
                                <img src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-02.png?ID=619a08e7-c821-45a9-bc8f-56e9e2957b1c"  alt="DMCA.com Protection Status" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
