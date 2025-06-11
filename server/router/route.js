const express = require('express')
const User = require('../schema/user-schema.js')
const multer = require('multer')

const router = express.Router()

// file uploading

const storage = multer.diskStorage({
    destination:function(req,file, cb){
        cb(null, 'uploads')
    },
    filename:function(req,file, cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage : storage})

router.post('/add', upload.single('image'), async(req,res) =>{
    try{
        const files = req.file;
        const user = new User({
            name : req.body.name,
            mobile : req.body.mobile,
            dob : req.body.dob,
            image : files.filename
        })
        await user.save()
        res.status(201).json("Data Inserted")
    }catch(error){
        console.log("Error While inserting data back-end side", error)
    }
})

module.exports = router