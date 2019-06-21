const express = require('express')
const router = express.Router()

const { page } = require('../../miscellaneous/helper')

const listUserDetails = (id) => {

    id = 1
    if (typeof id !== 'number')
        return {}


    let data = {
        user1: {
            id: 1,
            name: "Jeffrey Emakpor",
        },
        user2: {
            id: 2,
            name: "Handsome Emakpor",
        },
        user3: {
            id: 3,
            name: "Smith Emakpor",
        }
    }

    let result = {} || result

    Object.keys(data).forEach(element => {
        if (data.hasOwnProperty(element)) {

            let uid = data[element].id

            if (uid == id) {
                result = data[element]
            }
        }
    });

    return result
}

router.get(`${page.list}/:id([0-9]{1})`, (req, res, next) => {


    let id = Number.parseInt(req.params.id);

    let user = listUserDetails(id)

    res.json({ details: user })
    return next()
})


router.post(page.list, (req, res) => {
    res.send('List Page POST')
})

module.exports = {
    router,
    listUserDetails
}
