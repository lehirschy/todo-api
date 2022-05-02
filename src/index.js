import express from 'express'
import env from './utils/config'
import logger from './utils/logger'

const app = express()

const port = env.Port

app.use(logger.middleware)

app.get('/', (req, res) => {
    logger.log.success('Calling Root')
    res.send({msg: 'Hello There!'})
})

app.listen(port)