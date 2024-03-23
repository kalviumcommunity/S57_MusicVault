import express from 'express'
import SingerList from '../model/userSchema.js'
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controllers/controllers.js'

const router = express.Router()

router.get('/api',getAllUser)
router.get('/api/:id',getUser)
router.post('/api',createUser)
router.delete('/api/:id',deleteUser)
router.patch('/api/:id',updateUser)

export default router