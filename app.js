import express from 'express'
import cors from 'cors'

import indexRouter from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Routes
app.use('/', indexRouter)

export default app