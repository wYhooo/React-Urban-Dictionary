const fetchDefId = require('./crawler');
const http = require('http');

http.createServer((request, response) => {

  if (request.url === '/api/today') {
    fetchDefId().then(res => {
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Request-Method', '*');
      response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      response.setHeader('Access-Control-Allow-Headers', '*');
      response.writeHead(200, { 'Content-Type': 'text/json' });
      response.end(JSON.stringify(res));
    }).catch(err => {
      console.log(err);
    });
  } else {
    response.writeHead(404);
    response.end('404 Not Found');
  }
}).listen(3001, '127.0.0.1');

console.log('server set up');