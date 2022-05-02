import express from 'express'
import helmet from 'helmet'
import env from './utils/config'
import logger from './utils/logger'
import cors from 'cors'
import { config } from 'dotenv'
import errors from './utils/errors'

const app = express()

const port = env.Port

app.use(logger.middleware)
app.use(helmet())
app.use(
    cors({
        origin: config.origin
    })
)

app.get('/', (req, res) => {
    logger.log.success('Calling Root')
    res.send({msg: 'Hello There!'})
})
app.use(errors.notFound)
app.use(errors.errorHandler)
app.listen(port)