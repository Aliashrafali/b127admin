const express = require('express')
const app = express()
const Connection = require('./database/db.js')
const Routes = require('./router/route.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
app.use(cors())

Connection()
app.use(bodyParser.json({ extended : true}))
app.use(bodyParser.urlencoded({ extended : true }))
app.use('/', Routes)
app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT || 8000

app.listen(PORT,  () => console.log(`Server Running On Port Number ${PORT}`))