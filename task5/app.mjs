// Задача 5. Створити додаток з історією. У файлі json зберігаємо усі роути та кількість відвідувань.
// У налаштуваннях settings.json зберігати який роут треба використати для перегляду історії та назву файлу де зберігається історія

import { createServer } from 'node:http';
import fs from 'fs';
import { writeFile } from 'node:fs/promises';
import settingsObject from './settings.json' assert { type: 'json' };
import historyObject from './history.json' assert { type: 'json' };

const server = createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204, { 'Content-Type': 'text/plain' });
    res.end();
    return;
  }
  //   console.log(settingsObject);
  if (req.url === settingsObject.historyRoute) {
    if (fs.existsSync(settingsObject.historyFilePath)) {
      fs.readFile(settingsObject.historyFilePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Sorry file corrupted!\n');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(data);
      });
    }
  } else {
    if (historyObject[req.url]) {
      historyObject[req.url]++;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('History updated\n');
    } else {
      historyObject[req.url] = 1;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Added new path to history \n');
    }
    writeFile(settingsObject.historyFilePath, JSON.stringify(historyObject));
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
