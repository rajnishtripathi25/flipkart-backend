const express = require('express')
require('./database/db.js')
const cors = require('cors')
const DefaultData = require('./default.js')
const router = require('./routes/route.js')


const Port = process.env.port || 5001
const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use(cors())
app.use(router)

// call it for insert the data
//DefaultData();


app.listen(Port, () => console.log(`Server is running on port ${Port}`))

