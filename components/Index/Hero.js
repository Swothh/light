import settings from '../../settings.json';
import { useRouter } from 'next/router';
import swr from '../../lib/swr.js';
import Link from 'next/link';

export default function Hero() {
  let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;
  const router = useRouter();

  return (
    <div className="relative bg-dark-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-dark-2 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-dark-2 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{(settings.brand.name).split(' ').slice(0, (settings.brand.name).split(' ').length - 1).join(' ')}</span>{' '}
                <span className="block text-blurple xl:inline">{(settings.brand.name).split(' ').slice(-1).join(' ')}</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Gelişmiş <b className="text-blurple">Discord</b> deneyimini yaşayın, sunucunuza şimdi partner bulun ve büyümenizi <b className="text-blurple">kontrol paneliden</b> izleyin.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/invite">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Davet Et
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {identify ? (
                    user ? (
                      <Link href="/dashboard">
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-indigo-200 bg-opacity-10 hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                            Dashboard
                        </a>
                      </Link>
                    ) : (
                      <Link href={"/api/auth/login?url=" + router.asPath}>
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-indigo-200 bg-opacity-10 hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                            Giriş Yap
                        </a>
                      </Link>
                    )
                  ) : (
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-400 bg-indigo-200 bg-opacity-10 hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                      <i className="fad fa-spinner-third fa-spin"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.imgur.com/czjEef3.png"
          alt="Banner"
        />
      </div>
    </div>
  );
};