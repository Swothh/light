import fetch from 'isomorphic-unfetch';

export default async function List(req, res) {
    if (req.method === 'GET') {
        try {
            let _page = req.query['p'];
            if (!_page) _page = 1;
            if (isNaN(_page)) _page = 1;
            if (parseInt(_page) < 1) _page = 1;

            const _fetch = await fetch('https://api.lightbot.me/blog/list/' + _page);
            const _list = await _fetch.json();

            res.json({
                success: true,
                message: "200: Success",
                list: _list
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