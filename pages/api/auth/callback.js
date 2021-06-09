import Callback from '../../../lib/session.js';
import fetch from 'isomorphic-unfetch';

export default Callback(async (req, res, session) => {
    const _fetchUser = await fetch('https://discord.com/api/v8/users/@me', { headers: { Authorization: 'Bearer ' + req.query['code'] } });
    const _user = await _fetchUser.json();

    if (_user.message && _user.message === '401: Unauthorized') return res.redirect('/auth/login?url=' + (req.query['url'] || '/'));
    req.session.set('user', Object.assign(_user, { accessToken: req.query['code'] }));

    await req.session.save();
    res.redirect(req.query.url !== 'undefined' ? (req.query.url || '/') : '/');
});