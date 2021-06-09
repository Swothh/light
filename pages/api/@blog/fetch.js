import fetch from 'isomorphic-unfetch';

export default async function Fetch(req, res) {
    if (req.method === 'GET') {
        try {
            let _id = req.query['id'];
            if (!_id) return res.json({ success: false, message: "404: Not Found" });

            const _fetch = await fetch('https://api.lightbot.me/blog/fetch/' + _id);
            const _text = await _fetch.json();

            res.json({
                success: true,
                message: "200: Success",
                text: _text
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