const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')
const { loadCommands } = require('./util/loadCommands');

const bot = new Discord.Client({disableEveryone: true});

mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
require('./util/loadEvents')(bot);
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
fs.readdir("./commands/currency", (err, files, dir) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/currency/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(` "${commandName}" LOADED`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});  
fs.readdir("./commands/fun", (err, files, dir) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/fun/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(` "${commandName}" LOADED`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});  
fs.readdir("./commands/image", (err, files, dir) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/image/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(` "${commandName}" LOADED`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});  
fs.readdir("./commands/utility", (err, files, dir) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/utility/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(` "${commandName}" LOADED`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});
bot.on('guildMemberAdd', (member) => {
    const embed = new MessageEmbed();
    const { MessageEmbed } = require("discord.js");
    const Embed = new MessageEmbed()
    .setDescription(`Welcome **<@${member.id}>**, have fun there!`)
    .setTimestamp()
    bot.channels.cache.get('811222075053572106').send(Embed);
  });
bot.on("message", async message => {
    bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers | /help`,  {type: "PLAYING"})

    if(message.author.bot || message.channel.type === "dm") return;
    const black = require('./schemas/Ban')
    black.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        let prefix = botsettings.prefix;
        let messageArray = message.content.split(" ");
        const input = message.content.slice(prefix.length).trim().split(' ');
          const commandArgs = input.join(' ');
          const args = message.content.slice(prefix.length).trim().split(/ +/);
          let cmd = messageArray[0];
    
        if(!message.content.startsWith(prefix)) return;
        let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
        if(commandfile) commandfile.run(bot,message,args)
        
      } else {
return;
      }
    });

    

})


bot.login(process.env.token);