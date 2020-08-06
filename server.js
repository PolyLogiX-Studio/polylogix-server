// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const path = require("path")


/*
///  Cors Disabled  ///
const cors = require("cors")
app.use(cors())
*/
function checkHttps(req, res, next) {
  // protocol check, if http, redirect to https
  if (req.get("X-Forwarded-Proto").indexOf("https") != -1) {
    return next();
  } else {
    res.redirect("https://" + req.hostname + req.url);
  }
}
app.set("trust proxy");
// Log incoming requests
app.all("*", (req, res, next) => {
  console.log(`${req.ip}-${req.method}: ${req.url}`)
  next()
})

/* /// Routing /// */

// Api - ./server/api/index.html
app.use('/api', require("./server/API"))

/* Static Assets
  serves: css, img, js
*/
app.get("/:assetType/:assetFile", (req, res, next) => {
  switch (req.params.assetType) {
    //serve css, img, and js files
    case "css":
    case "img":
    case "js":
      // Send file from dist, and handle 404 if File does not exist. 
      // If not Asset continue to other routes.
      return res.sendFile(path.join(__dirname, `/dist/${req.params.assetType}/${req.params.assetFile}`), {
        dotfiles: "ignore"
      }, /* File not found, Serve 404 */ (err) => err ? res.sendStatus(404) : console.log(`SENT /dist/${req.params.assetType}/${req.params.assetFile}`));
    default:
      // Not a static asset, Continue to other Routes
      return next();
  }
})
//Hard Code for Favicon file.
app.get("/favicon.ico", (req, res, next) => {
  console.log("SENT /dist/favicon.ico")
  res.sendFile(path.join(__dirname, "dist/favicon.ico"))
})
// Route everything else to Vue app
app.get("*", (req, res, next) => {
  console.log("SENT /dist/index.html")
  res.sendFile(path.join(__dirname, "dist/index.html"))
})
// listen for requests :)
const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});