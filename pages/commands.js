import settings from '../settings.json';
import swr from '../lib/swr.js';
import Head from 'next/head';

export default function Commands() {
    let { data: fetchCommands } = swr('/api/@data/commands');
	let commands = fetchCommands ? fetchCommands.commands : [];

    return (
        <>
            <Head>
                <title>Komutlar | {settings.brand.name}</title>
            </Head>
            <h1 className="text-center text-white text-3xl font-bold mt-10"><i className="fal fa-list mr-3"></i> Komutlar</h1>
            <div className="flex flex-col mb-10 mt-5 w-11/12 mx-auto shadow-lg">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-800">
                            <thead className="bg-dark-1">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Komut
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Yetkiler
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Durum
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-dark-2 divide-y divide-gray-700">
                                {commands.length > 0 && commands.map(cmd => (
                                    <tr key={cmd.name}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-white">{cmd.name}</div>
                                                    <div className="text-sm text-gray-300">{cmd.description}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-white">{cmd.perms.length == 0 ? 'Gerekmiyor' : cmd.perms.map(perm => {
                                                let parts = perm.split('_');
                                                return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
                                            }).join(', ')}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {cmd.status == 1 ? (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green text-gray">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red text-white">
                                                    De-Aktif
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {commands.length == 0 && (
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-white"><i className="fad fa-spinner-third fa-spin"></i></div>
                                                    <div className="text-sm text-gray-300"><i className="fad fa-spinner-third fa-spin"></i></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-white"><i className="fad fa-spinner-third fa-spin"></i></div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <i className="fad fa-spinner-third text-white fa-spin"></i>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};