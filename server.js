const PORT = 8080
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()

// const url = 
// const token = 


app.listen(PORT, () => console.log('server running on PORT' + PORT))
