var fs = require('fs');
var path = require('path');

exports.dispatch = function(req, res) {

  var filePath = '.' + req.url;
  if (filePath == './')
      filePath = './views/index.html';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.css':
          contentType = 'text/css';
          break;
  }

  var _serverError = function(code, content){
    res.writeHead(code, {'Content-Type': 'text/plain'});
    res.end(content);
  };

  var _renderHTML = function(content){
    res.writeHead(200, {'Content-Type': contentType });
    res.end(content, 'utf-8');
  };

  fs.readFile(filePath, function(error, content){
      if (error){
        _serverError(500);
      } else {
        _renderHTML(content);
      }
  });

};
