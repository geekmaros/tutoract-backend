import express from 'express'
const router = express.Router()
import {serverResponse} from '../utils/helpers'

router.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the User routes')
})

router.get('/me', (req, res) => {

  serverResponse(res, 'This is my profile')
})

export default router
