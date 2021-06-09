import fetch from 'isomorphic-unfetch';

export default async function Stats(req, res) {
    if (req.method === 'GET') {
        try {
            const _fetch = await fetch('https://api.lightbot.me/data/stats');
            const _stats = await _fetch.json();

            res.json({
                success: true,
                message: "200: Success",
                stats: _stats
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