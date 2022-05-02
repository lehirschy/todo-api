import dotenv from 'dotenv'
import joi from 'joi'

import logger from './logger'

dotenv.config()

const envSchema = joi
.object()
.keys({
    Node_ENV: joi.string().valid('developement', 'production').required(),
    Port: joi.number().positive().required()
 })
.unknown()

const { value: env, error } = envSchema.prefs({errors: { label: 'key' }}).validate(process.env)

if (error) {
    logger.log.error (new Error('Config validation error: ${error.message}'))
}

export default env