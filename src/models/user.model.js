import { Schema, model } from 'mongoose'
import validator from 'validator'
 
const userSchema = Schema({
    name:{
        type: String,
        required: true,
        trim: true
        
    }
},{
    timestamps: true
})

const User = model('User', userSchema)

export default User