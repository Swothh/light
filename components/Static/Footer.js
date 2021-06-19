import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import settings from '../../settings.json';
import Link from 'next/link';

const languages = [
    { code : 'ab', name : 'Abkhazian' },
    { code : 'aa', name : 'Afar' },
    { code : 'af', name : 'Afrikaans' },
    { code : 'ak', name : 'Akan' },
    { code : 'sq', name : 'Albanian' },
    { code : 'am', name : 'Amharic' },
    { code : 'ar', name : 'Arabic' },
    { code : 'an', name : 'Aragonese' },
    { code : 'hy', name : 'Armenian' },
    { code : 'as', name : 'Assamese' },
    { code : 'av', name : 'Avaric' },
    { code : 'ae', name : 'Avestan' },
    { code : 'ay', name : 'Aymara' },
    { code : 'az', name : 'Azerbaijani' },
    { code : 'bm', name : 'Bambara' },
    { code : 'ba', name : 'Bashkir' },
    { code : 'eu', name : 'Basque' },
    { code : 'be', name : 'Belarusian' },
    { code : 'bn', name : 'Bengali' },
    { code : 'bh', name : 'Bihari languages' },
    { code : 'bi', name : 'Bislama' },
    { code : 'bs', name : 'Bosnian' },
    { code : 'br', name : 'Breton' },
    { code : 'bg', name : 'Bulgarian' },
    { code : 'my', name : 'Burmese' },
    { code : 'ca', name : 'Catalan, Valencian' },
    { code : 'km', name : 'Central Khmer' },
    { code : 'ch', name : 'Chamorro' },
    { code : 'ce', name : 'Chechen' },
    { code : 'ny', name : 'Chichewa, Chewa, Nyanja' },
    { code : 'zh', name : 'Chinese' },
    { code : 'cu', name : 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
    { code : 'cv', name : 'Chuvash' },
    { code : 'kw', name : 'Cornish' },
    { code : 'co', name : 'Corsican' },
    { code : 'cr', name : 'Cree' },
    { code : 'hr', name : 'Croatian' },
    { code : 'cs', name : 'Czech' },
    { code : 'da', name : 'Danish' },
    { code : 'dv', name : 'Divehi, Dhivehi, Maldivian' },
    { code : 'nl', name : 'Dutch, Flemish' },
    { code : 'dz', name : 'Dzongkha' },
    { code : 'en', name : 'English' },
    { code : 'eo', name : 'Esperanto' },
    { code : 'et', name : 'Estonian' },
    { code : 'ee', name : 'Ewe' },
    { code : 'fo', name : 'Faroese' },
    { code : 'fj', name : 'Fijian' },
    { code : 'fi', name : 'Finnish' },
    { code : 'fr', name : 'French' },
    { code : 'ff', name : 'Fulah' },
    { code : 'gd', name : 'Gaelic, Scottish Gaelic' },
    { code : 'gl', name : 'Galician' },
    { code : 'lg', name : 'Ganda' },
    { code : 'ka', name : 'Georgian' },
    { code : 'de', name : 'German' },
    { code : 'ki', name : 'Gikuyu, Kikuyu' },
    { code : 'el', name : 'Greek (Modern)' },
    { code : 'kl', name : 'Greenlandic, Kalaallisut' },
    { code : 'gn', name : 'Guarani' },
    { code : 'gu', name : 'Gujarati' },
    { code : 'ht', name : 'Haitian, Haitian Creole' },
    { code : 'ha', name : 'Hausa' },
    { code : 'he', name : 'Hebrew' },
    { code : 'hz', name : 'Herero' },
    { code : 'hi', name : 'Hindi' },
    { code : 'ho', name : 'Hiri Motu' },
    { code : 'hu', name : 'Hungarian' },
    { code : 'is', name : 'Icelandic' },
    { code : 'io', name : 'Ido' },
    { code : 'ig', name : 'Igbo' },
    { code : 'id', name : 'Indonesian' },
    { code : 'ia', name : 'Interlingua (International Auxiliary Language Association)' },
    { code : 'ie', name : 'Interlingue' },
    { code : 'iu', name : 'Inuktitut' },
    { code : 'ik', name : 'Inupiaq' },
    { code : 'ga', name : 'Irish' },
    { code : 'it', name : 'Italian' },
    { code : 'ja', name : 'Japanese' },
    { code : 'jv', name : 'Javanese' },
    { code : 'kn', name : 'Kannada' },
    { code : 'kr', name : 'Kanuri' },
    { code : 'ks', name : 'Kashmiri' },
    { code : 'kk', name : 'Kazakh' },
    { code : 'rw', name : 'Kinyarwanda' },
    { code : 'kv', name : 'Komi' },
    { code : 'kg', name : 'Kongo' },
    { code : 'ko', name : 'Korean' },
    { code : 'kj', name : 'Kwanyama, Kuanyama' },
    { code : 'ku', name : 'Kurdish' },
    { code : 'ky', name : 'Kyrgyz' },
    { code : 'lo', name : 'Lao' },
    { code : 'la', name : 'Latin' },
    { code : 'lv', name : 'Latvian' },
    { code : 'lb', name : 'Letzeburgesch, Luxembourgish' },
    { code : 'li', name : 'Limburgish, Limburgan, Limburger' },
    { code : 'ln', name : 'Lingala' },
    { code : 'lt', name : 'Lithuanian' },
    { code : 'lu', name : 'Luba-Katanga' },
    { code : 'mk', name : 'Macedonian' },
    { code : 'mg', name : 'Malagasy' },
    { code : 'ms', name : 'Malay' },
    { code : 'ml', name : 'Malayalam' },
    { code : 'mt', name : 'Maltese' },
    { code : 'gv', name : 'Manx' },
    { code : 'mi', name : 'Maori' },
    { code : 'mr', name : 'Marathi' },
    { code : 'mh', name : 'Marshallese' },
    { code : 'ro', name : 'Moldovan, Moldavian, Romanian' },
    { code : 'mn', name : 'Mongolian' },
    { code : 'na', name : 'Nauru' },
    { code : 'nv', name : 'Navajo, Navaho' },
    { code : 'nd', name : 'Northern Ndebele' },
    { code : 'ng', name : 'Ndonga' },
    { code : 'ne', name : 'Nepali' },
    { code : 'se', name : 'Northern Sami' },
    { code : 'no', name : 'Norwegian' },
    { code : 'nb', name : 'Norwegian BokmÃ¥l' },
    { code : 'nn', name : 'Norwegian Nynorsk' },
    { code : 'ii', name : 'Nuosu, Sichuan Yi' },
    { code : 'oc', name : 'Occitan (post 1500)' },
    { code : 'oj', name : 'Ojibwa' },
    { code : 'or', name : 'Oriya' },
    { code : 'om', name : 'Oromo' },
    { code : 'os', name : 'Ossetian, Ossetic' },
    { code : 'pi', name : 'Pali' },
    { code : 'pa', name : 'Panjabi, Punjabi' },
    { code : 'ps', name : 'Pashto, Pushto' },
    { code : 'fa', name : 'Persian' },
    { code : 'pl', name : 'Polish' },
    { code : 'pt', name : 'Portuguese' },
    { code : 'qu', name : 'Quechua' },
    { code : 'rm', name : 'Romansh' },
    { code : 'rn', name : 'Rundi' },
    { code : 'ru', name : 'Russian' },
    { code : 'sm', name : 'Samoan' },
    { code : 'sg', name : 'Sango' },
    { code : 'sa', name : 'Sanskrit' },
    { code : 'sc', name : 'Sardinian' },
    { code : 'sr', name : 'Serbian' },
    { code : 'sn', name : 'Shona' },
    { code : 'sd', name : 'Sindhi' },
    { code : 'si', name : 'Sinhala, Sinhalese' },
    { code : 'sk', name : 'Slovak' },
    { code : 'sl', name : 'Slovenian' },
    { code : 'so', name : 'Somali' },
    { code : 'st', name : 'Sotho, Southern' },
    { code : 'nr', name : 'South Ndebele' },
    { code : 'es', name : 'Spanish, Castilian' },
    { code : 'su', name : 'Sundanese' },
    { code : 'sw', name : 'Swahili' },
    { code : 'ss', name : 'Swati' },
    { code : 'sv', name : 'Swedish' },
    { code : 'tl', name : 'Tagalog' },
    { code : 'ty', name : 'Tahitian' },
    { code : 'tg', name : 'Tajik' },
    { code : 'ta', name : 'Tamil' },
    { code : 'tt', name : 'Tatar' },
    { code : 'te', name : 'Telugu' },
    { code : 'th', name : 'Thai' },
    { code : 'bo', name : 'Tibetan' },
    { code : 'ti', name : 'Tigrinya' },
    { code : 'to', name : 'Tonga (Tonga Islands)' },
    { code : 'ts', name : 'Tsonga' },
    { code : 'tn', name : 'Tswana' },
    { code : 'tr', name : 'Turkish' },
    { code : 'tk', name : 'Turkmen' },
    { code : 'tw', name : 'Twi' },
    { code : 'ug', name : 'Uighur, Uyghur' },
    { code : 'uk', name : 'Ukrainian' },
    { code : 'ur', name : 'Urdu' },
    { code : 'uz', name : 'Uzbek' },
    { code : 've', name : 'Venda' },
    { code : 'vi', name : 'Vietnamese' },
    { code : 'vo', name : 'Volap_k' },
    { code : 'wa', name : 'Walloon' },
    { code : 'cy', name : 'Welsh' },
    { code : 'fy', name : 'Western Frisian' },
    { code : 'wo', name : 'Wolof' },
    { code : 'xh', name : 'Xhosa' },
    { code : 'yi', name : 'Yiddish' },
    { code : 'yo', name : 'Yoruba' },
    { code : 'za', name : 'Zhuang, Chuang' },
    { code : 'zu', name : 'Zulu' }
];

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
                                    {languages.map(x => (}
                                    <option>{x.name}</option>
                                    { )) }
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
                                    <Link href="https://vcodes.xyz/bot/789918433495875584/vote">
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
