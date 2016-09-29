var url = require("url");
var http = require("http");
var dispatcher = require("./server/dispatcher");

http.createServer(function (req, res) {
  try {
    console.log('Incoming Request from: ' +
                  req.connection.remoteAddress +
                  'for href: ' + url.parse(req.url).href
        );
        dispatcher.dispatch(req, res);
  }  catch (err) {
    console.log(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
}).listen(3000, "localhost", function() {
  console.log('Server is running at http://localhost:3000');
});
