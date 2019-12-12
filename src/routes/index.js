import express from 'express'
import { serverResponse } from '../utils/helpers'

// import routes
import userRoutes from './user.routes'
const router = express.Router()

router.use('/users', userRoutes)

export default router
