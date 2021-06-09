import fetch from 'isomorphic-unfetch';

export default async function Commands(req, res) {
    if (req.method === 'GET') {
        try {
            const _fetch = await fetch('https://api.lightbot.me/data/commands');
            const _commands = await _fetch.json();

            res.json({
                success: true,
                message: "200: Success",
                commands: _commands
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