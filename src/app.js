const express = require('express')
const app = express()

const { port } = require('./miscellaneous/helper')
const { controller } = require('./routes/route')

app.use(controller.home)
app.use(controller.list.router)
    // app.use(controller.check)

app.listen(port)
console.log('listening');