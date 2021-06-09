import { useRouter } from 'next/router';
import swr from '../../lib/swr.js';
import Link from 'next/link';
import Card from './Card.js';

export default function Main() {
    const router = useRouter();
    let page = router.query['p'] || 1;

    if (isNaN(page)) page = 1;
    if (parseInt(page) < 1) page = 1;

    let { data: listBlogs } = swr('/api/@blog/list?p=' + page);
	let blogs = listBlogs ? (listBlogs.list || []) : [];

    return (
        <>
            <div className="w-full p-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.length == 0 && (
                    <h1 className="font-bold text-2xl col-span-3 text-center text-white"><i className="fad fa-spinner-third fa-spin"></i></h1>
                )}
                {blogs.length > 0 && blogs.map(blog => (
                    <Card key={blog.id} id={blog.id} img={blog.img} title={blog.title} author={{ username: blog.author.username, img: blog.author.img }} />
                ))}
            </div>
            <div className="mb-10 flex items-center justify-center w-full w-full max-w-screen-xl mx-auto">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Sayfalama">
                    <Link href={page == 1 ? '/blog?p=1' : ('/blog?p=' + (parseInt(page) - 1))}>
                        <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-dark-1 text-sm font-medium text-gray-500 hover:opacity-90">
                            <span className="sr-only">Önceki</span>
                            <i className="text-white fas fa-caret-left"></i>
                        </a>
                    </Link>
                    <a aria-current="sayfa" className="cursor-pointer z-10 bg-dark-1 font-bold border-gray-600 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        {page || <i className="fad fa-spinner-third fa-spin"></i>}
                    </a>
                    <Link href={'/blog?p=' + (parseInt(page) + 1)}>
                        <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-600 bg-dark-1 text-sm font-medium text-gray-500 hover:opacity-90">
                            <span className="sr-only">Sonraki</span>
                            <i className="text-white fas fa-caret-right"></i>
                        </a>
                    </Link>
                </nav>
            </div>
        </>
    );
};