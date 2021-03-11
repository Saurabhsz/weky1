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
const cooldowny = new Discord.Collection();
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
bot.on("message", async message=>{
    const black = require('./schemas/Ban')
    black.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        const Money = require('./schemas/premium')
        Money.findOne({
          id: message.author.id
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
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
                      const a = cmd.cooldown
                      const b = cmd.cooldowny
                      const cooldownAmount = (cmd.cooldown || 3) * 1000;
                      
                      if (timestamps.has(message.author.id)) {
                          const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
                      
                          if (now < expirationTime) {
                              const timeLeft = (expirationTime - now) / 1000;
                              const embed = new Discord.MessageEmbed()
                              .setAuthor(`Wait god damn`)
                              .setDescription(`😡 This command have a cooldown, not like your life, wait \`${timeLeft.toFixed(1)}s\`\nThe default cooldown is \`${a}s\`, for premium users is \`${b}s\``)
                              message.channel.send(embed);
                          } 
                      } else {timestamps.set(message.author.id, now);
                        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
            
                    //+ args: true/false,
                             
                            //+ guildOnly: true/false,
                            if (cmd.guildOnly && message.channel.type === 'dm') {
                                return
                            }
            
                            //+ dmOnly: true/false,
                            if (cmd.dmOnly && message.channel.type === 'text') {
                                return
                            }
            
            
                    cmd.execute(bot, message, args);}
                      
              }catch(err){
                  message.reply(`there was an error in the console.`);
                  console.log(err);
              }
          } else {
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
                    if (!cooldowny.has(cmd.name)) {
                        cooldowny.set(cmd.name, new Discord.Collection());
                    }
                    
                    const now = Date.now();
                    const timestamps = cooldowny.get(cmd.name);
                    const a = cmd.cooldown
                    const b = cmd.cooldowny
                    const cooldownyAmount = (cmd.cooldowny || 3) * 1000;
                    
                    if (timestamps.has(message.author.id)) {
                        const expirationTime = timestamps.get(message.author.id) + cooldownyAmount;
                    
                        if (now < expirationTime) {
                            const timeLeft = (expirationTime - now) / 1000;
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(`Wait god damn`)
                            .setDescription(`😡 This command have a cooldown, not like your life, wait \`${timeLeft.toFixed(1)}s\`\nThe default cooldown is \`${a}s\`, for you as premium is \`${b}s\``)
                            message.channel.send(embed);
                        } 
                    } else {timestamps.set(message.author.id, now);
                      setTimeout(() => timestamps.delete(message.author.id), cooldownyAmount);
          
                  //+ args: true/false,
                           
                          //+ guildOnly: true/false,
                          if (cmd.guildOnly && message.channel.type === 'dm') {
                             return
                          }
          
                          //+ dmOnly: true/false,
                          if (cmd.dmOnly && message.channel.type === 'text') {
                              return
                          }
          
          
                  cmd.execute(bot, message, args);}
                    
            }catch(err){
                message.reply(`there was an error in the console.`);
                console.log(err);
            }
  }
  })
      } else {
return;
      }
    });
//Event - message
})



bot.login(process.env.token);
