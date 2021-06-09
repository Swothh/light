import settings from '../../settings.json';
import { useRouter } from 'next/router';
import swr from '../../lib/swr.js';
import Head from 'next/head';
import Link from 'next/link';

export default function Text() {
    const router = useRouter();
    let id = router.query['id'];

    let { data: fetchText } = swr('/api/@blog/fetch?id=' + id);
	let text = fetchText ? (fetchText.text || {}) : {};

    return (
        <>
            <Head>
                <title>{text.title || 'Yükleniyor...'} | {settings.brand.name}</title>
            </Head>
            <div className="w-11/12 mx-auto py-20">
                <div className="w-full grid grid-cols-3">
                    <div className="pr-5">
                        <div className="w-full flex items-center text-sm pb-1 text-white opacity-50 font-semibold">
                            <hr className="w-1/12 mr-3" /> Görsel <hr className="w-full ml-3" />
                        </div>
                        {text.img ? <img className="rounded-lg shadow-lg w-full" src={text.img} /> : <h3 className="text-center"><i className="fad fa-spinner-third fa-spin"></i></h3>}
                        <div className="w-full flex items-center text-sm mt-5 pb-1 text-white opacity-50 font-semibold">
                            <hr className="w-1/12 mr-3" /> Yazar <hr className="w-full ml-3" />
                        </div>
                        {text.author ? <div className="w-full flex items-center justify-between">
                            <div className="flex items-center">
                                <img src={text.author.img} className="w-12 h-12 rounded-full shadow-md" />
                                <h3 className="ml-3 text-lg text-white font-semibold">{text.author.username}</h3>
                            </div>
                            <span className="py-1.5 px-3 rounded-md bg-green text-gray shadow-md text-xs font-semibold"><i className="fas fa-cogs mr-2"></i> Geliştirici</span>
                        </div> : <h3 className="text-center"><i className="fad fa-spinner-third fa-spin"></i></h3>}
                    </div>
                    <div className="col-span-2 pl-5">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h6 className="text-sm text-gray-300 mb-1 opacity-75 font-semibold"><i className="mr-2 fal fa-calendar"></i> {text.date}</h6>
                                <h1 className="text-3xl font-bold text-white rounded-md">{text.title || <i className="fad fa-spinner-third fa-spin"></i>}</h1>
                            </div>
                            <Link href="/blog">
                                <a className="py-1.5 px-3 rounded-md bg-dark-1 text-white">
                                    <i className="mr-2 fal fa-caret-left"></i> Geri Dön
                                </a>
                            </Link>
                        </div>
                        <hr className="opacity-20 my-3" />
                        <div className="blog-preview text-white" dangerouslySetInnerHTML={{ __html: text.text ? ('<style>.blog-preview a { color: var(--green); }</style>' + text.text) : '<h3 class="text-center"><i class="fad fa-spinner-third fa-spin"></i></h3>' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};