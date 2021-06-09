import settings from '../../settings.json';

export default function Meta() {
	return (
		<>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Best Discord Partner Bot" />
            <link rel="icon" href={settings.brand.favicon} type="image/x-icon" />
            <meta name='dmca-site-verification' content='YkZMenZRRlJBNWtvOC9QVEJUY0pWQTV3Mi9NdXJxV3ZabEZhNzMyTjZkVT01' />

            <link rel="canonical" href="" />
            <meta name="publisher" content={"2021, " + settings.brand.name} />
            <meta property="title" content={settings.brand.name} />
            <meta name="robots" content="noindex,nofollow" />
            <meta name="author" content={settings.brand.name} />
            <meta name="generator" content="" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={settings.brand.name} />
            <meta name="twitter:creator" content={settings.brand.name} />
            <meta name="twitter:title" content={settings.brand.name} />
            <meta name="twitter:description" content={settings.brand.desc} />
            <meta name="twitter:image" content={settings.brand.favicon} />

            <meta property="og:url" content="/" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:title" content={settings.brand.name} />
            <meta name="theme-color" content={settings.brand.color} />
            <meta property="og:description" content={settings.brand.desc} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={settings.brand.favicon} />
		</>
	);
};