var http = require('http')
var fs = require('fs')
var path = require('path')

var app = http.createServer(function (request, response) {
  var url = request.url
  console.log('urlRequest : ' + url)
  response.writeHead(200)
  response.end('requested : ' + url)
})

app.listen(3000)
console.log('server is initialized...')
