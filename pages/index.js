import settings from '../settings.json';
import Head from 'next/head';

import Hero from '../components/Index/Hero.js';
import Features from '../components/Index/Features.js';
import Blog from '../components/Index/Blog.js';
import Developers from '../components/Index/Developers.js';
import Stats from '../components/Index/Stats.js';

export default function Index() {
	return (
		<>
			<Head>
				<title>Ana Sayfa | {settings.brand.name}</title>
			</Head>
			<Hero />
			<Features />
			<Blog />
			<Developers />
			<Stats />
		</>
	);
};