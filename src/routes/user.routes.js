import express from 'express'
const router = express.Router()
import User from '../models/user.model'
import {serverResponse} from '../utils/helpers'

router.get('/', (req, res) => {
  serverResponse(res, 'Welcome to the User routes')
})

router.get('/me', (req, res) => {

  serverResponse(res, 'This is my profile')
})

router.post('/new', async(req, res) => {
  
    try {
      const user = new User(req.body)
      await user.save().then(()=> console.log(user))
      serverResponse(res, 'User saved', 201)
    } catch (error) {
      serverResponse(res, 'Error User not saved', 404, 'error')
    }

  
})


export default router
