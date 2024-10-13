// Задача 3. Через параметри запиту передають операцію (add, subtract, mult) і числа (розділені дефісами), які треба опрацювати.
// Знайти результат і повернути користувачу. Наприклад при запиті:
// http://localhost:3000/add/12-4-23-45   - треба знайти суму чисел 12,4,23,45

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  if (req.url.includes('add')) {
    let sum;
    let numsArr = req.url.split('/')[2].split('-').map(Number);
    if (numsArr.length) {
      sum = numsArr.reduce((prevSum, el) => prevSum + el);
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Sum ${sum}`);
  }
  if (req.url.includes('mult')) {
    let mult;
    let numsArr = req.url.split('/')[2].split('-').map(Number);
    if (numsArr.length) {
      mult = numsArr.reduce((prevMult, el) => prevMult * el);
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Mult ${mult}`);
  }
  if (req.url.includes('substract')) {
    let substract;
    let numsArr = req.url.split('/')[2].split('-').map(Number);
    if (numsArr.length) {
        substract = numsArr.reduce((prevSubstr, el) => prevSubstr - el);
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Substract ${substract}`);
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
