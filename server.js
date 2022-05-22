const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const port = 3000
    const host = 'localhost'

    const server = Hapi.server({
        port: port,
        host: host,
    })

    server.route(routes);

    await server.start()
    console.info(`Server Started - ${server.info.uri}`)
}

init()