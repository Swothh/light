import Link from 'next/link';

export default function Card({ id, img, title, author }) {
    return (
        <div className="w-full rounded-md shadow-lg bg-dark-1">
            <img className="w-full rounded-md" src={img} />
            <div className="w-full p-10">
                <h1 className="font-semibold text-gray-100 leading-none text-xl mt-1 capitalize truncate">{title}</h1>
                <div className="flex items-center my-5">
                    <img className="w-10 h-10 rounded-full" src={author.img} />
                    <h3 className="ml-3 text-gray-200">{author.username}</h3>
                </div>
                <Link href="/blog/[id]" as={"/blog/" + id}>
                    <a className="hover:text-blue-400 transition-all text-gray-100 font-semibold">
                        Postu oku <i className="fa fa-arrow-right ml-1"></i>
                    </a>
                </Link>
            </div>
        </div>
    );
};