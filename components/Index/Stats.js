import swr from '../../lib/swr.js';

export default function Stats() {
    let { data: fetchStats } = swr('/api/@data/stats');
    let stats = fetchStats ? fetchStats.stats : null;

    return (
        <div className="py-12 bg-dark-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Birazda Sayısal Konuşalım</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                    İstatistikler
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-server"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
                                {fetchStats ? (
                                    stats ? (
                                        parseInt(stats.guilds).toLocaleString() || 0
                                    ) : (
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    )
                                ) : (
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                )}
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Sunucu Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-users"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
                                {fetchStats ? (
                                    stats ? (
                                        parseInt(stats.users).toLocaleString() || 0
                                    ) : (
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    )
                                ) : (
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                )}
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Kullanıcı Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-terminal"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
                                {fetchStats ? (
                                    stats ? (
                                        parseInt(stats.commands).toLocaleString() || 0
                                    ) : (
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    )
                                ) : (
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                )}
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Komut Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-icons"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
                                {fetchStats ? (
                                    stats ? (
                                        parseInt(stats.emojis).toLocaleString() || 0
                                    ) : (
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    )
                                ) : (
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                )}
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Emoji Sayısı</h6>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};