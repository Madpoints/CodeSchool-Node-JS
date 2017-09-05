var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  
  fs.readFile("readFile.html", function(error, contents) {
    response.write(contents);
    response.end();
  });
  
}).listen(8081);

console.log('Listening on port ' + process.env.PORT + '...')