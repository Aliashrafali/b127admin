const mongoose = require('mongoose')

const Connection = async () =>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("DB Conneted")
    }catch(error){
        console.log("Error While Connecting Database", error)
        process.exit(1)
    }
}

module.exports = Connection