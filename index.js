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
bot.cooldowns = new Discord.Collection();
bot.cooldowny = new Discord.Collection();
async function startUp() {
const tble = new ascii('Commands');
	tble.setHeading('Command', 'Load status');
	const folders = await readdir('./commands/');
	console.log(`Loading a total of ${folders.length} categories.`);
	folders.forEach((direct) => {
		const commandFiles = fs.readdirSync('./commands/' + direct + '/').filter((file) => file.endsWith('.js'));
		for (const file of commandFiles) {
			const props = require(`./commands/${direct}/${file}`);
			props.fileName = file;
			bot.commands.set(props.name, props);
			bot.cooldowns.set(props.name, new Discord.Collection());
			bot.cooldowny.set(props.name, new Discord.Collection());
			props.aliases.forEach((alias) => {
				bot.aliases.set(alias, props.name);
			});
			tble.addRow(props.name, '✔');
		}
	});

	console.log(tble.toString());
const eventtable = new ascii('Event\'s');
	eventtable.setHeading('Event', 'Load status');
	const eventFiles = fs
		.readdirSync('./events/')
		.filter((file) => file.endsWith('.js'));
	console.log(`Loading a total of ${eventFiles.length} events.`);
	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
		const eventName = file.split('.')[0];
		eventtable.addRow(eventName, '✔');
		bot.on(eventName, event.bind(null, bot));
	}
  console.log(eventtable.toString());
}
startUp()
bot.login(process.env.token);