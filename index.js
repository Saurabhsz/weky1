const Discord = require('discord.js');
const bot = new Discord.Client({disableMentions: "everyone"});
require('dotenv').config();
require(`./reply`)
require('./currencyFunctions')(bot)
const ascii = require('ascii-table');
const fs = require("fs");
const util = require('util');
const readdir = util.promisify(fs.readdir);
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
const cooldowns = new Discord.Collection();
const cooldowny = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    } 
}
const eventtable = new ascii('Event\'s');
	eventtable.setHeading('Event', 'Load status');
	const eventFiles = fs
		.readdirSync('./events/')
		.filter((file) => file.endsWith('.js'));
	console.log(`Loading a total of ${eventFiles.length} events.`);
	for (const file of eventFiles) {
		const event = require(`./src/events/${file}`);
		const eventName = file.split('.')[0];
		eventtable.addRow(eventName, '✔');
		bot.on(eventName, event.bind(null, bot));
	}
  console.log(eventtable.toString());

bot.login(process.env.token);