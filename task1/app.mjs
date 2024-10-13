//У консольний додаток передають через параметр пенсійний вік. Наприклад
// node app.mjs –-pension=65
// Потім питаємо у терміналі користувача скільки йому років (використати “readline”) і кажемо чи він є пенсіонером.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const paramsString = process.argv.slice(2).join('&');
const paramsObj = new URLSearchParams(paramsString);
const pensionAge = parseInt(paramsObj.get('--pension'));



rl.question('Введіть ваш вік?', (answer) => {
  if (parseInt(answer) < pensionAge) console.log('Ви не є пенсіонером');
  else console.log('Ви пенсіонер');

  rl.close();
});
