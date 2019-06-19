const express = require('express')
const app = express()


app.get('/s', function(req, res) {
    res.send('dsd')
    res.end()
})

app.listen('5000')
console.log('listening');