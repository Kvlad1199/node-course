// Задача 2. Користувач через роут ‘/save_num/число’ може передати на сервер якесь число.
//  Ці числа поступово треба зберігати у текстовому файлі numbers.txt. Наприклад, використовуючи такий роут:
// http://localhost:3000/save_num/78  -  у файл треба додати число 78.
// А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.

import { createServer } from 'node:http';
import fs from 'fs';
import { unlink } from 'node:fs/promises';

const numbersFilePath = 'number.txt';
const server = createServer((req, res) => {
  if (req.url.includes('save_num')) {
    const numToAdd = req.url.split('/')[2];
    if (numToAdd) {
      fs.appendFileSync('number.txt', `${numToAdd},`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Num added`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Num not added \n`);
    }
  }

  if (req.url === '/sum') {
    if (fs.existsSync(numbersFilePath)) {
      fs.readFile(numbersFilePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Sorry file corrupted!\n');
          return;
        }
        let numbers = data.toString().split(',');
        numbers.length = numbers.length - 1;
        let sum = numbers
          .map((el) => parseInt(el))
          .reduce((prevSum, el) => prevSum + el);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Sum is ${sum}`);
      });
    }
  }
  if (req.url === '/mult') {
    if (fs.existsSync(numbersFilePath)) {
      fs.readFile(numbersFilePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Sorry file corrupted!\n');
          return;
        }
        let numbers = data.toString().split(',');
        numbers.length = numbers.length - 1;
        let mult = numbers
          .map((el) => parseInt(el))
          .reduce((prevMult, el) => prevMult * el);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`Mult is ${mult}`);
      });
    }
  }
  if (req.url === '/remove') {
    if (fs.existsSync(numbersFilePath)) {
      try {
        unlink(numbersFilePath);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File removed!\n');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error ${err}`);
      }
    }
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
