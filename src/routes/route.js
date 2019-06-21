const express = require('express')
const router = express.Router()

const home = require('./controller/home')
const list = require('./controller/list')

// router.get('/*', (req, res) => {
//     res.send("Page Not Found")
// })

module.exports = {
    controller: {
        check: router,
        home,
        list
    }
}