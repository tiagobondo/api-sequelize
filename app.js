import express from 'express'
import indexRouter from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/', indexRouter)

export default app