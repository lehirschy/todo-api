import consola from "consola"
import morgan from "morgan"

const middleware = morgan('dev')
const log = consola

export default {middleware, log}

