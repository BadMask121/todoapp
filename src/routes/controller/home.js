const express = require('express')
const router = express.Router()

const { page } = require('../../miscellaneous/helper')

router.get(page.home, (req, res) => {
    res.send('Welcome Home Router GET')
})

router.post(page.home, (req, res) => {
    res.send('Welcome Home Router POST')
})

module.exports = router