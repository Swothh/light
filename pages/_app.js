import '../public/css/global.css';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Router from 'next/router';
import swr from '../lib/swr.js';
import Head from 'next/head';

import Links from '../components/Static/Links.js';
import Meta from '../components/Static/Meta.js';
import IndexHeader from '../components/Static/Header.js';
import IndexFooter from '../components/Static/Footer.js';
import Maintenance from '../components/Static/Maintenance.js';
import Blacklist from '../components/Static/Blacklist.js';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function LightPartner({ Component, pageProps }) {
	const indexRoutes = [ '/', '/blog', '/blog/[id]', '/commands', '/premium' ];
	const router = useRouter();

	let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;
	let { data: fetchConfig } = swr('/api/@data/config');
    let config = fetchConfig ? (fetchConfig.config || null) : null;
	let { data: blacklist } = swr('https://api.lightbot.me/blacklist/fetch' + (user ? ('?id=' + user.id) : ''));

	return (
		<>
			<Head>
				<Links />
				<Meta />
			</Head>
			{blacklist == true ? (
				<main id="blacklist" lang="tr">
					<Blacklist />
				</main>
			) : (config && config.maintenance == true && (user ? !config.developers.map(dev => dev.id).includes(user.id) : true) ? (
				<main id="maintenance" lang="tr">
					<Maintenance />
				</main>
			) : indexRoutes.includes(router.pathname) ? (
				<>
					<IndexHeader />
					<main id="index" lang="tr">
						<Component {...pageProps} />
					</main>
					<IndexFooter />
				</>
			) : (
				<main lang="tr">
					<Component {...pageProps} />
				</main>
			))}
		</>
	);
};
