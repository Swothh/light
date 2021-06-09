module.exports = {
    async redirects() {
        return [
            {
                source: '/invite',
                destination: 'https://discord.com/oauth2/authorize?client_id=789918433495875584&permissions=8&redirect_uri=https%3A%2F%2Flightpartner.xyz%2Fauth%2Fcallback&response_type=code&scope=bot%20guilds%20guilds.join%20identify',
                permanent: true
            },
            {
                source: '/discord',
                destination: 'https://discord.gg/C4t6dkhBYN',
                permanent: true
            }
        ];
    }
};