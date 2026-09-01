const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received:', req.url);
  res.end('Hello');
});

server.listen(8081, '0.0.0.0', () => {
  console.log('Test server listening on 8081');
  
  // Test the server from the same process
  http.get('http://127.0.0.1:8081/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Response:', data);
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });
  });
});