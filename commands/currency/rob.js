
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

  const { MessageEmbed } = require("discord.js")

  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
  if (!member) return message.channel.send(`For christ sake. Your trying to rob, yet you have not mentioned a user. That\'s an even bigger disappointment to god. :rolling_eyes:`)
  if (member.id === message.author.id) return message.reply(`Are you good? Are you really trying to rob yourself right now? <:LMFAO:841935653305843724>`);
  let CantBeRobbed = ["804525492332920895", "778518819055861761"]

  if (CantBeRobbed.includes(member.id)) {
  message.reply('Stop you noob.')
  }else {
  var ran;
  if (100 >= await client.bal(member.id)) { return message.reply(`This kid don't even have 100 coins.`) } else
    if (member.user.bot) { return message.reply(`This kid think bots are robbable lol.`) }
  if (250 >= await client.bal(message.author.id)) { return message.reply(`You need 250 coins to rob mf.`) } else {
    var num;
    const inventory = require("../../schemas/inventory")
    inventory.findOne({ User: message.author.id }, async (err, ata) => {
      if (0 >= ata.EnergyBolt) {
        ran = Math.floor(Math.random() * 12)
      } else {
        ran = Math.floor(Math.random() * 20)
      }
      if (ran < 1) {
        num = await client.bal(member.id)
        message.reply(`You stole ALL THEIR MONEYYY🤑🤑🤑🤑🤑, in total **${num}** coins, GG.||Got 5 evilness & lost 5 goodness||`)
        client.add(message.author.id, Math.round(num), message)
        client.rmv(member.id, Math.round(num))
        client.ADDEvilness(message.author.id, 5)
        client.RMVGoodness(message.author.id, 5)
        member.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
          return;
        })
      } else if (ran < 2) {
        num = await client.bal(member.id) / 2
        message.reply(`You stole a part of their money💸💸, in total **${num}** coins, gg bruh.||Got 3 evilness & lost 3 goodness||`)
        client.add(message.author.id, Math.round(num), message)
        client.rmv(member.id, Math.round(num))
        client.ADDEvilness(message.author.id, 3)
        client.RMVGoodness(message.author.id, 3)
        member.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
          return;
        })
      } else if (ran < 4) {
        num = Math.floor(Math.random() * await client.bal(member.id)) + 100
        message.reply(`You stole some money💰💰💰, in total **${num}** coins, gg bruh.||Got 1 evilness & lost 1 goodness||`)
        client.add(message.author.id, Math.round(num), message)
        client.rmv(member.id, Math.round(num))
        client.ADDEvilness(message.author.id, 1)
        client.RMVGoodness(message.author.id, 1)
        member.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
          return;
        })
      } else {
        message.reply(`You paid 250 coins for nothing, sad.`)
        client.rmv(message.author.id, 250)
        client.add(member.id, 250, message)
        member.user.send(`${message.author.username} TRIED TO steal from you coins in **${message.guild.name}**`).catch(e => {
          return;
        })
      }
    })
  }
  }
};

module.exports.help = {
  aliases: ['steal'],
  name: 'rob',
  description: 'Robbing users.',
  usage: config.prefix + 'rob @user',
};

module.exports.config = {
  args: false,
  restricted: false,
  category: 'currency',
  disable: false,
  cooldown: 40000,
};
