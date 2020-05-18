require('dotenv').config();
const { Client, Collection } = require('discord.js');

const bot = new Client();

['commands', 'aliases'].forEach(c => bot[c] = new Collection());
['commandHandler', 'eventHandler'].forEach(h => require(`./utils/handlers/${h}`)(bot));

bot.login(process.env.botTOKEN);