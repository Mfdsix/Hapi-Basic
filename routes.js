const routes = [
    {
        method: 'POST',
        path: '/auth/login',
        handler: (req, h) => {
            const { username, password } = req.payload
            console.log(req.payload)

            if (!username || !password)
                return "Please fill username and password"
            if (username == 'user123' && password == 'pass123')
                return "Login Success"
            return "Login Faild"
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'This Is a Homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'Method is Not Allowed'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return 'This Is About Page'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (req, h) => {
            return 'Method is Not Allowed'
        }
    },
    {
        method: 'GET',
        path: '/profile/{username?}',
        handler: (req, h) => {
            const { username = 'Guest' } = req.params
            const { lang = 'id' } = req.query

            switch (lang) {
                case 'en':
                    return `Welcome to ${username} Profile`
                default:
                    return `Selamat Datang di Profil ${username}`
            }
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return 'Page is Not Found'
        }
    },
]

module.exports = routes