import swr from '../../lib/swr.js';
import Link from 'next/link';

export default function Blog() {
    let { data: listBlogs } = swr('/api/@blog/list?p=1');
	let blogs = listBlogs ? (listBlogs.list ? listBlogs.list.slice(0 , 3) : []) : [];

    return (
        <div className="py-12 bg-dark-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Birisi yenilikler mi dedi?</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                        Blog
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                    {blogs.length > 0 && blogs.map((blog) => (
                        <div key={blog.id} className="w-full rounded-md shadow-lg bg-dark-2">
                            <img className="w-full rounded-md" src={blog.img} />
                            <div className="w-full p-10">
                                <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">{blog.title}</h1>
                                <div className="flex items-center my-5">
                                    <img className="w-10 h-10 rounded-full" src={blog.author.img} />
                                    <h3 className="ml-3 text-gray-200">{blog.author.username}</h3>
                                </div>
                                <Link href="/blog/[id]" as={"/blog/" + blog.id}>
                                    <a className="hover:text-blue-400 transition-all text-gray-100 font-semibold">
                                        Postu oku <i className="fa fa-arrow-right ml-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                    {blogs.length == 0 && (
                        <h3 className="py-2 px-4 text-center w-full md:col-span-3 text-4xl text-white font-bold"><i className="fad fa-spinner-third fa-spin"></i></h3>
                    )}
                    </dl>
                </div>
            </div>
        </div>
    );
};