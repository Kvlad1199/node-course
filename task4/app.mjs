import { createServer } from 'node:http';
import fs from 'fs';

const server = createServer((req, res) => {
  if (req.url === '/' || req.url === '/coffe' || req.url === '/music') {
    if (req.url === '/') {
      if (fs.existsSync('index.html')) {
        fs.readFile('index.html', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Sorry file corrupted!\n');
            return;
          }

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      }
    }
    if (req.url === '/coffe') {
      if (fs.existsSync('coffe.html')) {
        fs.readFile('coffe.html', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Sorry file corrupted!\n');
            return;
          }

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      }
    }
    if (req.url === '/music') {
      if (fs.existsSync('music.html')) {
        fs.readFile('music.html', (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Sorry file corrupted!\n');
            return;
          }

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      }
    }
  }else{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('hello');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
