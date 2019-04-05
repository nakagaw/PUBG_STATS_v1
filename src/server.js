var http = require("http");
var fs = require('fs');
var test = require('../src/index.js');

function getType(url) {
  var types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "svg+xml"
  }
  for (var key in types) {
    if (url.endsWith(key)) {
      return types[key];
    }
  }
  return "text/plain";
}

var server = http.createServer(function (req, res) {
  var url = "public" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
  if (fs.existsSync(url)) {
    fs.readFile(url, "utf-8", (err, data) => {
      if (!err) {
        test().then(result => {
          var content = data.toString()
          .replace(/contnet_avgDamage/g, result.avgDamage.toFixed(1))
          .replace(/content_totalKills/g, result.totalKills);

          res.writeHead(200, {"Content-Type": getType(url)});
          res.write(content);
          res.end();
        });
      } else {
        res.statusCode = 500;
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});