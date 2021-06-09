import swr from '../../lib/swr.js';

export default function Developers() {
    let { data: fetchConfig } = swr('/api/@data/config');
    let developers = fetchConfig ? (fetchConfig.config ? fetchConfig.config.developers : []) : [];

    return (
      <div className="py-12 bg-dark-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Peki ya biz kimiz?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
          Ekibimiz ile tanışın ;)
          </p>
        </div>

        <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {developers.length > 0 && developers.map((developer) => (
                  <div key={developer.id} className="w-full bg-dark-2 shadow-lg p-5 rounded-md">
                      <img src={`https://cdn.discordapp.com/avatars/${developer.id}/${developer.avatar}`} className="shadow-md mx-auto rounded-full" style={{ width: '128px' }} />
                      <h1 className="text-gray-100 text-xl font-semibold text-center mt-5">{developer.username}
                        <span className="text-sm opacity-75">#{developer.discriminator}</span>
                      </h1>
                      <h6 className="text-sm mt-3 text-gray-200 text-center">Geliştirici</h6>
                  </div>
              ))}
              {developers.length == 0 && (
                <h3 className="py-2 px-4 text-center w-full md:col-span-4 text-4xl text-white font-bold"><i className="fad fa-spinner-third fa-spin"></i></h3>
              )}
            </dl>
        </div>
        </div>
    </div>
    );
};