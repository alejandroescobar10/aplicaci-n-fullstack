import mongoose from 'mongoose';
//trim es para borrar los espacios '      alejo     '
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
})
export default mongoose.model('user',userSchema);