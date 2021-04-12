const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const mongoose = require('mongoose')
const { loadCommands } = require('./util/loadCommands');
const bot = new Discord.Client({disableMentions: "everyone"});
mongoose.connect('mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)
require(`./reply`)
require('./currencyFunctions')(bot)
const fs = require("fs");
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
bot.on("guildMemberAdd", async (member) => {
if(member.guild.id !== '830003680983646278') return
const Canvacord = require('canvacord')
const image = new Canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setMemberCount(member.guild.memberCount)
  .setGuildName(member.guild.name)
  .setAvatar(member.user.displayAvatarURL({ format: "jpg", size: 1024 }))
  .setColor("border", "#00FF00")
  .setColor("username-box", "#00FF00")
  .setColor("discriminator-box", "#00FF00")
  .setColor("message-box", "#00FF00")
  .setColor("title", "#00FF00")
  .setColor("avatar", "#00FF00")
  .setBackground("https://wallpapercave.com/wp/wp7951233.jpg")

image.build()
  .then(data => {
    bot.channels.cache.get('830003681402683415').send(new Discord.MessageAttachment(data, 'welcome-image.png'))
  })
})
const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.setMaxListeners(0)
process.on('warning', e => console.warn(e.stack));
bot.on("message", async message=>{
  if(message.author.bot) return
	const Discord = require('discord.js')
const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://eusuntgabi:eusuntgabi@cluster0.0bpkf.mongodb.net/Data")
var num;
	if(message.channel.id === '830003681402683415') {
		num = 20
		}else{
		num = 10
		}
    const db = require('./schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {

      if(data.leveling === "1") {
    const randomXp = Math.floor(Math.random() * num) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
if(user.level === 5){
  message.member.roles.add("830003680991510648")
} else if(user.level === 10){
  message.member.roles.remove("830003680991510648")
  message.member.roles.add("830003680991510649")
} else if(user.level === 15){
  message.member.roles.remove("830003680991510649")
  message.member.roles.add("830003680991510650")
} else if(user.level === 20){
  message.member.roles.remove("830003680991510650")
  message.member.roles.add("830003680991510651")
}
		message.channel.send(
			new Discord.MessageEmbed()
		.setTitle('Level Up')
		.setDescription(`
		You have been upgraded to level ${user.level}!
		`)
		.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
		.setColor('RANDOM')
		.setFooter(`..lbrank for leaderboard!`)
		.setTimestamp()
);
    }
  }else return
  })
  const Money = require('./schemas/Money')
  Money.findOne({
    id: message.author.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: message.author.id
      });
    } else {
    const thesame = data.Bank >= data.space
    if(thesame){
      data.Wallet += data.Bank - data.space
      data.Bank -= data.Bank - data.space
      data.save()
    }
  }
})
  const prefixModel = require("./schemas/Guild")
  const data = await prefixModel.findOne({
    GuildID: message.guild.id
});

if(!data){
  newD = new prefixModel({
    GuildID: message.guild.id,
    prefix: "..",
    logs_channel: null,
    chatbox_channel: null,
    leveling: null
  });
  newD.save();
  message.channel.send(`Thanks for adding me in ${message.guild.name}, use \`..help\` for more categories and commands!\nUse \`..setprefix\` to set a new prefix, the current one it ..`)
} else {
const prefix = data.prefix
  const args = message.content.slice(prefix.length).split(/ +/g);

  const commandName = args.shift().toLowerCase();
          
              const cmd = bot.commands.get(commandName)
                  //+ aliases: [""],
                  || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
          if(!cmd) {
            if(data.chatbox_channel !== null){
              if (message.channel.id !== data.chatbox_channel) return;
              if(message.author.bot) return
                const fetch = require('node-fetch')
                fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&scNyfoysHunZd79reAL5VEsQV`)
                .then(res => res.json())
                .then(json => message.channel.send(json.response))
                .catch(console.error);
            } else {return}
            setInterval(function(){ if(data.automeme_channel !== null){
              if (message.channel.id !== data.automeme_channel) return;
              if(message.author.bot) return
                const got = require('got')
                const embed = new Discord.MessageEmbed()
                got('https://www.reddit.com/r/memes/random/.json').then(response => {
                    let content = JSON.parse(response.body);
                    let permalink = content[0].data.children[0].data.permalink;
                    let memeUrl = `https://reddit.com${permalink}`;
                    let memeImage = content[0].data.children[0].data.url;
                    let memeTitle = content[0].data.children[0].data.title;
                    let memeUpvotes = content[0].data.children[0].data.ups;
                    let memeDownvotes = content[0].data.children[0].data.downs;
                    let memeNumComments = content[0].data.children[0].data.num_comments;
                    embed.setTitle(`${memeTitle}`)
                    embed.setURL(`${memeUrl}`)
                    embed.setImage(memeImage)
                    embed.setColor('#303030')
                    embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} | When the bots get restarted, you need to type something here to activate the automeme`)
                    bot.channels.cache.get(data.automeme_channel).send(embed);
               })
            } else {return} }, 60000)
          }
          bot.ADDcmdsUSED(message.author.id)
    const black = require('./schemas/Ban')
    black.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        const Money = require('./schemas/Money')
        Money.findOne({
          id: message.author.id
        }, (err,data) => {
          if(err) console.log(err)
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
          } else {
          if(0 >= data.premium){
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
                            const o = require("./schemas/cmds")
                            let datab = o.findOne({ Guild: message.guild.id}, async (err, data) => {
                              if(!data){ 
                                new o({
                                Guild: message.guild.id
                              }).save()}
  
                              if(!data.Cmds.includes(cmd)){
                                cmd.execute(bot, message, args);
                              } else {
                                return
                              }
                            })}
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
                  bot.ADDcmdsUSED(message.author.id)
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
                          const o = require("./schemas/cmds")
                          let datab = o.findOne({ Guild: message.guild.id}, async (err, data) => {
                            if(!data){ 
                              new o({
                              Guild: message.guild.id
                            }).save()}

                            if(!data.Cmds.includes(cmd)){
                              cmd.execute(bot, message, args);
                            } else {
                              return
                            }
                          })}
                
                    
            }catch(err){
                message.reply(`there was an error in the console.`);
                console.log(err);
            }
  }
}
  })
      } else {
  return;
      }
    });
  //Event - message
  }
  })
bot.login(process.env.token);