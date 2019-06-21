const fs = require('fs')


const helper = {


    port: process.env.PORT = 5000,

    getPage: (path) => {

        fs.exists(path, () => {
            fs.readFile(path, (err, data) => {
                return data
            })
        })
    },
    contentType: {
        application: {

            json: "application/json",
            ldjson: "application/ld+json",
            xml: "application/xml",
            zip: "application/zip",
            urlencode: "application/x-www-form-urlencoded",
            xhtml: "application/xhtml-xml",
        },
        text: {
            html: "text/html",
            plain: "text/plain",
            css: "text/css",
            csv: "text/csv",
            xml: "text/xml",
        },

    },

    code: {

        error: {
            BAD_REQUEST: 400,
            FORBBIDEN: 403,
            INVALID_METHOD: 405,
            RESOURCE_NOT_FOUND: 404,
            RESOURCES_MOVED: 301,
            UNAUTHORIZED: 401,
            NO_RESPONSE: 444,
            HEADER_LENGTH_TOO_LONG: 431,
            SERVER_UNAVAILABLE: 505,
            SERVER_ERROR: 500,
            SERVER_BAD_GATEWAY: 502,
            SERVER_TIMEDOUT: 599
        },
        success: 200

    },
    page: {
        home: '/',
        list: '/list'
    }

}

module.exports = helper