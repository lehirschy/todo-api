import { Router } from 'express'
import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
    logger.log.success('Calling Root')
    res.send({ msg: 'Hello!!! My Name is Leah Eden Tomeny!' })
})

export default router