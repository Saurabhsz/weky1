const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')
const { loadCommands } = require('./util/loadCommands');
const prefix = botsettings.prefix
const bot = new Discord.Client({disableMentions: "everyone"});
mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
require(`./reply`)
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.on("message", (message) => {
  if(message.content.startsWith('weky')) {
    let pref = 'weky';
    const args = message.content.substring(pref.length).split(' ');
    let chatbo = require('alexa-bot-api')
    let chatbot = new chatbo()
    chatbot.getReply(args.slice(1).join(" ")).then(reply => message.reply(reply))
    if (message.channel.type === "dm") return;

      if (message.author.bot) return
 
  }
})
const cooldowns = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    } 

    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args, bot, commandFiles, folder));
	} else {
		bot.on(event.name, (...args) => event.execute(...args, bot, commandFiles, folder));
    	}
    }
} 

//Event - message
bot.on("message", async message => {
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/g);
    if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
    const commandName = args.shift().toLowerCase();

    const cmd = bot.commands.get(commandName)
        //+ aliases: [""],
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        try{
if(!cmd) return;
            //+ cooldown 1, //seconds(s)
            if (!cooldowns.has(cmd.name)) {
                cooldowns.set(cmd.name, new Discord.Collection());
            }
            
            const now = Date.now();
            const timestamps = cooldowns.get(cmd.name);
            const cooldownAmount = (cmd.cooldown || 3) * 1000;
            
            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            
                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(`Wait god damn`)
                    .setDescription(`😡 This command have a cooldown, not like your life, wait \`${timeLeft.toFixed(1)}s\``)
                    .setFooter(`This timer dont update in real time`)
                    message.channel.send(embed);
                }
            }
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        //+ args: true/false,
                 
                //+ guildOnly: true/false,
                if (cmd.guildOnly && message.channel.type === 'dm') {
                    return message.reply('I can\'t execute that command inside DMs!');
                }

                //+ dmOnly: true/false,
                if (cmd.dmOnly && message.channel.type === 'text') {
                    return message.reply('I can\'t execute that command inside the server!');
                }


        cmd.execute(bot, message, args);
    }catch(err){
        message.reply(`there was an error in the console.`);
        console.log(err);
    }
})



bot.login(process.env.token);
