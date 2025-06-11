const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type : String},
    mobile : {type : Number},
    dob : {type : Date},
    image : {type : String},
    status : {type : Number, default : 0}
})

const User = mongoose.model('user', userSchema)

module.exports = User