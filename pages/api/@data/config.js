import fetch from 'isomorphic-unfetch';

export default async function Config(req, res) {
    if (req.method === 'GET') {
        try {
            const _fetch = await fetch('https://api.lightbot.me/data/config');
            const _config = await _fetch.json();

            res.json({
                success: true,
                message: "200: Success",
                config: _config
            });
        } catch {
            res.json({
                success: false,
                message: "400: Bad Request"
            });
        };
    } else {
        res.json({
            success: false,
            message: "405: Method Not Allowed"
        });
    };
};