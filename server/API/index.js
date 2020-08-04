const routes = require('express').Router();
var fs = require('fs');
var api_cache = []
//Get all folders in ./server/API/
var getDirs = function (rootDir, cb) {
    fs.readdir(rootDir, function (err, files) {
        var dirs = [];
        for (var index = 0; index < files.length; ++index) {
            var file = files[index];
            if (file[0] !== '.') {
                var filePath = rootDir + '/' + file;
                fs.stat(filePath, function (err, stat) {
                    if (stat.isDirectory()) {
                        dirs.push(this.file);
                    }
                    if (files.length === (this.index + 1)) {
                        return cb(dirs);
                    }
                }.bind({
                    index: index,
                    file: file
                }));
            }
        }
    });
}

function setRoutes(vars) { //
    console.log("API: Initializing Routes")
    api_cache = []; // clear cache
    routes.stack = []
    for (let version of vars) {
        api_cache.push(version)

        routes.use(`/${version}`, require(`./${version}`))
    }
    routes.all("*", (req, res, next) => {
        // Options Request, send Public endpoints
        if (req.method == "OPTIONS") {
            return res.status(200).json(api_cache.filter((endpoint) => {
                return !endpoint.startsWith("_")
            }))
        }
        next()
    })
    // PATCH /api/.update will reload the api list
    // Used for hotpatching a new route in.
    routes.patch("/.update", (req,res,next)=>{
        getDirs('./server/API', setRoutes);
        res.sendStatus(204)
    })

    // catchall - send error with API list if invalid endpoint.
    routes.all("*", (req, res) => {
        res.status(400).json({
            error: "Supply valid api version",
            'Versions': api_cache.filter((endpoint) => {
                /* ignore underscore files */
                return !endpoint.startsWith("_")
            })
        })
    })
    console.log("API: Routes Initialized")
}

getDirs('./server/API', setRoutes) // init


module.exports = routes;