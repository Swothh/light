export default function Login(req, res) {
    res.redirect('https://api.lightbot.me/auth/login?url=' + (req.query.url !== 'undefined' ? (req.query.url || '/') : '/'));
};