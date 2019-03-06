import cors from '@koa/cors'
import createLogger from 'concurrency-logger'
import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import compress from 'koa-compress'
import 'reflect-metadata'
import { useContainer, useKoaServer } from 'routing-controllers'
import { Container } from 'typedi'
import * as middlewares from './middwares'
// load db config
import sequelize from './db'

(async () => {
    //@see: https://github.com/RobinBuschmann/sequelize-typescript-example/blob/5d9ca3e3487cd772581e29b1f1becf4116b96f51/lib/server.ts#L8
    //@see: https://github.com/sequelize/sequelize/issues/537#issuecomment-289677652
    await sequelize.sync({ alter: true })

    const app = new Koa()

    app.use(async (ctx, next) => {
        try {
            await next()
            ctx.set('PoweredBy', 'Koa2-Easy')
        } catch (e) {
            ctx.status = e.status || e.httpCode || 403
            ctx.body = {
                code: ctx.status || 403,
                message: e.message,
                data: e.errors ? e.errors : {}
            }
        }
    })

    app.use(compress({ threshold: 2048 }))
    app.use(cors())
    app.use(bodyparser())
    app.use(createLogger({
        timestamp: true
    }))

    useContainer(Container)
    useKoaServer(app, {
        controllers: [__dirname + "/controllers/*.{ts,js}"],
        defaults: { paramOptions: { required: true } },
        defaultErrorHandler: false,
        middlewares: Object.values(middlewares)
    })

    const port = process.env.PORT ? Number(process.env.PORT) : 3000

    app.listen(port)

    console.log(`Now server is listen http://localhost:${port}`)

})()