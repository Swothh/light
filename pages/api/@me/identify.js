import Identify from '../../../lib/session.js';
import AES from 'crypto-js/aes';

export default Identify(async (req, res, session) => {
    if (req.method === 'GET') {
        let _year = new Date().getFullYear();
        let _user = req.session.get('user');
        let _token = _user ? _user.accessToken : null;
        if (_user) delete _user.accessToken;

        if (_user) {
            const _updateUser = await fetch('https://discord.com/api/v8/users/@me', { headers: { Authorization: 'Bearer ' + _token } });
            const _newUser = await _updateUser.json();

            if (_newUser.message && _newUser.message === '401: Unauthorized') {
                req.session.destroy();
                res.json({
                    success: false,
                    message: "403: Access Denied"
                });
            } else {
                _newUser.accessToken = AES
                    .encrypt(_token, (_year * _year).toString())
                    .toString();

                res.json({
                    success: true,
                    message: "200: Success",
                    user: _newUser
                });
            };
        } else {
            res.json({
                success: false,
                message: "403: Access Denied"
            });
        };
    } else {
        res.json({
            success: false,
            message: "405: Method Not Allowed"
        });
    };
});