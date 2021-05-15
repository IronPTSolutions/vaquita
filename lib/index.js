const chalk = require('chalk');
const ShuffledList = require('./models/shuffled-list');
const cow = require('cowsay');
const names = require('../data/names.json');
const readline = require('readline-sync');


const shuffled = new ShuffledList(names);
let input;
do {
  console.log('\u001b[H\u001b[2J\u001b[3J'); // clear console
  console.log(chalk.gray("Press any key to get a random name or type 'exit' to finish"))

  const name = cow.say({ text: shuffled.next() });
  console.log(chalk.white(name));

  input = readline.question('');
} while (input !== 'exit');
