const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')
const { loadCommands } = require('./util/loadCommands');
const bot = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  fetchAllMembers: true
  //ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', "DIRECT_MESSAGE_TYPING"]}
});
mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
require('./util/loadEvents')(bot);
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
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js") 
  if(jsfile.length <= 0) {
       return console.log("[LOGS] Couldn't Find Commands!");
  }

  jsfile.forEach((f, i) => {
      let pull = require(`./commands/${f}`);
      bot.commands.set(pull.config.name, pull);  
      pull.config.aliases.forEach(alias => {
          bot.aliases.set(alias, pull.config.name)
      });
  });
});      
bot.on("message", (message) => {
  if (message.mentions.has(bot.user.id)) {
    message.channel.send("My prefix is \`..`, run ..help for info.");
};
})  
bot.on('guildMemberAdd', (member) => {
    const embed = new MessageEmbed();
    const { MessageEmbed } = require("discord.js");
    const Embed = new MessageEmbed()
    .setDescription(`Welcome **<@${member.id}>**, have fun there!`)
    .setTimestamp()
    const channel = bot.channels.cache.get('811222075053572106')
    channel.send(Embed);
  });
  bot.on("message", async message => {
    bot.user.setActivity(`in ${bot.guilds.cache.size} servers | ..help`,  {type: "PLAYING"})

    if(message.author.bot || message.channel.type === "dm") return;
    const black = require('./schemas/Ban')
    black.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        let prefix = botsettings.prefix;
        let messageArray = message.content.toLowerCase().split(" ");
        const input = message.content.toLowerCase().slice(prefix.length).trim().split(' ');
          const commandArgs = input.join(' ');
          const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
          let cmd = messageArray[0];
 
    
        if(!message.content.startsWith(prefix)) return;
        let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
        if(commandfile) commandfile.run(bot,message,args).catch(err => message.channel.send("`\❌ ERROR`\n ```css\n" +  err + "\n```"))
        
      } else {
return;
      }
    });

    

})




bot.login(process.env.token);
