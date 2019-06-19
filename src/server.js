const http = require('http')
const url = require('url')


const util = require('./miscellaneous/helper')


const server = function(req, res) {

    res.writeHead(util.code.success, {
        'Content-Type': util.contentType.application.json
    })
    let ctx = true;
    getUrl = function(u) {
        return new Promise((resolve, reject) => {
            if (typeof req.url === 'undefined')
                reject(req.url)

            if (req.url === u)
                resolve(req.url)

            ctx = false;
        });
    }


    getUrl('/').then(re => {
        let d = {
            response: "Welcome Home"
        }


        res.write(JSON.stringify(d))
        res.end()
    }).catch(err => res.end())


    getUrl('/usr').then(re => {
        let d = util.getPage('./page/index.html');
        res.write(d)
        res.end()
    }).catch(err => res.end())

    if (ctx)
        res.end()
}

module.exports = server;