const mongoose =require('mongoose')
const contactSchema = mongoose.Schema(
{
    name:String,
    email: { type: String, required: true},
    password: { type: String, required: true},
    address:{
         city:String,
         code:Number
}
}
)
const Contact = mongoose.model('Contact',contactSchema)
module.exports = Contact