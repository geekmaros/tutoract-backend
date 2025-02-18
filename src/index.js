import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import dotenv from 'dotenv'
// import api routes
import api from './routes/index'
import { serverResponse } from './utils/helpers'
import { connect } from 'mongoose'

connect('mongodb://127.0.0.1:27017/tutoract', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

dotenv.config()

const app = express()

app.use(helmet())
  .disable('x-poweredBy')
  .use(cors())
  .use(json({
    limit: '1mb'
  }))
  .use(urlencoded({
    extended: false
  }))

// use api routes
app.use('/v1', api)
app.use('/api/v1', api)

app.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the Workshop')
})

app.all('*', (req, res) => {
  serverResponse(res, 'Invalid route', 404, 'error')
})

app.listen(6000, () => {
  console.log('Server is up on port 6000!')
})
