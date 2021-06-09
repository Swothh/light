import Logout from '../../../lib/session.js';

export default Logout(async (req, res, session) => {
    req.session.destroy();
    res.redirect(req.query.url !== 'undefined' ? (req.query.url || '/') : '/');
});