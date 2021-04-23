const Discord = require('discord.js');

const cmdhook = new Discord.WebhookClient('835185763452846140', '5P8wtrLsF1bfJ_9o53AovmBzFxUMuNTNURtuSygJ9hGWBm95SBesY_K7I2i57NROkI9T');
const errhook = new Discord.WebhookClient('835185449072984074', 'bGkv8gaP-VuvvaPP46r0eYmHIbNLfbLFLQrRho_AT-9l_N3r17QuBIjPoBzeKOpZSreW');
module.exports = async (bot, message) => {
if(message.author.bot) return
if (!message.guild) return;
	const Discord = require('discord.js')
const Levels = require('discord-xp')
Levels.setURL(process.env.MONGO)
var num;
	if(message.channel.id === '830003681402683415') {
		num = 20
		}else{
		num = 10
		}
    const db = require('../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {
if(!data) return;
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
  const Money = require('../schemas/Money')
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
  const prefixModel = require("../schemas/Guild")
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
  const black = require('../schemas/Ban')
  const blacklist = await black.findOne({id: message.author.id})
  if(blacklist) return;
  const commandName = args.shift().toLowerCase();
          
              const cmd = bot.commands.get(commandName)
                  //+ aliases: [""],
                  || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
          if(!cmd) {
            if(data.chatbox_channel !== null){
              if (message.channel.id !== data.chatbox_channel) return;
              if(message.author.bot) return
                const fetch = require('node-fetch')
                fetch(`https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(message.content)}&scNyfoysHunZd79reAL5VEsQV`)
                .then(res => res.json())
                .then(json => message.channel.send(json.response))
                .catch(console.error);
            } else return
          }
          bot.ADDcmdsUSED(message.author.id)
            if(message.author.bot || !message.content.startsWith(prefix)) return;
            const args = message.content.slice(prefix.length).split(/ +/g);
            if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
            const commandName = args.shift().toLowerCase();
        
            const cmd = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            const cooldown = cmd.cooldown;
            const pcooldown = cmd.cooldowny
          
            const timestamps = bot.cooldown.get(commandName);
            if (timestamps.has(message.author.id)) {
              if(user.premium === '1') {
                const expirationTime = timestamps.get(message.author.id) + pcooldown;
                if (Date.now() < expirationTime) {
                  const timeLeft = utils.timer(expirationTime);
                  return message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, ayo slow...`).setDescription(`This command is on cooldown for **${timeLeft}** \nThe default cooldown for this command is **\`${bot.timer(cooldown + Date.now())}\`** but since you are a [donator](https://rickroll), you only need to wait for **\`${bot.timer(pcooldown + Date.now())}!\`**`).setColor('RED'));
                }
              }
              else {
                const expirationTime = timestamps.get(message.author.id) + cooldown;
                if (Date.now() < expirationTime) {
                  const timeLeft = utils.timer(expirationTime);
                  return message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, ayo slow...`).setDescription(`This command is on cooldown for **${timeLeft}** \nThe default cooldown for this command is **\`${bot.timer(cooldown + Date.now())}\`** but for [__**donators**__](https://rickroll), its only **\`${bot.timer(pcooldown + Date.now())}\` !**`).setColor('RED'));
                }
              }
            }
            if (commandFile) {
                    try {
                        if (client.user.id === '809496186905165834') {
                            if (!command) return;
                            const m = new Discord.MessageEmbed().setTitle(`Command used in ${message.guild.name}`).setColor('RANDOM').addField('User:', `${message.author.tag}`).addField('User ID:', `${message.author.id}`).addField('Command:', `${command}`).addField('Message Content:', `${message.content}`).addField('Guild ID:', `${message.guild.id}`);
                            await cmdhook.send(m);
                        }
                        await timestamps.set(message.author.id, Date.now());
                        await cmd.execute(bot, message, args);
                    }
                    catch (error) {
                        // Command Errors
                        if (bot.user.id === '809496186905165834') {
                            const errEmbed = new Discord.MessageEmbed().setTitle(`Command error in ${message.guild.name}`).addField('Additional Details', `**Guild ID :** ${message.guild.id}\n**Author :** ${message.author.tag}(${message.author.id})\n**Command :** ${commandFile.help.name}\n**Content :** ${message.content}`, false).setDescription(`**Error:**\n\`\`\`js\n${error}\n\`\`\``).setTimestamp();
                            errhook.send(errEmbed);
                        }
                        return message.channel.send(new Discord.MessageEmbed().setTitle('Something went wrong!').setDescription('Report it in our [server](https://discord.gg/Sr2U5WuaSN)').setColor('RED'));
                    }
                }
                    }
                      setTimeout(() => timestamps.delete(message.author.id), cooldownyAmount);
                          if (cmd.guildOnly && message.channel.type === 'dm') {
                             return
                          }
                          if (cmd.dmOnly && message.channel.type === 'text') {
                              return
                          }
                          const o = require("../schemas/cmds")
                          let datab = o.findOne({ Guild: message.guild.id})
if(datab){
  if(datab.Cmds.includes(cmd.name) || datab.Cmds.includes(cmd.aliases)){
                              return
                            } else {
                              cmd.execute(bot, message, args);
                            }
                           } else {
                            cmd.execute(bot, message, args);
                   }
  return;}