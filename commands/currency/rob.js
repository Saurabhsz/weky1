
        /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

const { MessageEmbed } = require("discord.js")

    const membe = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    if(!membe) return message.channel.send(`Who,The fk, the lord,wants to rob :rolling_eyes:`)
if(membe.id === message.author.id) return message.reply(`Learn what you cant rob urself means`);
if(membe.id === 778518819055861761) return message.reply('no.')
var ran;
    if(100 >= await bot.bal(membe.id)) {return message.reply(`This kid don't even have 100 coins.`)}else
    if(membe.user.bot) {return message.reply(`This kid think bots are robbable lol.`)}
    if(250 >= await bot.bal(message.author.id)) {return message.reply(`You need 250 coins to rob mf.`)}else {
    var num;
    const inventory = require("../../schemas/inventory")
            inventory.findOne({ User: message.author.id }, async (err, ata) => {
    if(0 >= ata.EnergyBolt){
        ran = Math.floor(Math.random() * 12)
    } else {
        ran = Math.floor(Math.random() * 20)
    }
    if(ran < 1){
        num = await bot.bal(membe.id)
        message.reply(`You stole ALL THEIR MONEYYY🤑🤑🤑🤑🤑, in total **${num}** coins, GG.`)
        bot.add(message.author.id, Math.round(num), message)
        bot.rmv(membe.id, Math.round(num))
        membe.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
            return;
          })
    } else if(ran < 2){
        num = await bot.bal(membe.id)/2
        message.reply(`You stole a part of their money💸💸, in total **${num}** coins, gg bruh.`)
        bot.add(message.author.id, Math.round(num), message)
        bot.rmv(membe.id, Math.round(num))
        membe.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
            return;
          })
    } else if(ran < 4){
        num = Math.floor(Math.random() * await bot.bal(membe.id)) + 100
        message.reply(`You stole some money💰💰💰, in total **${num}** coins, gg bruh.`)
        bot.add(message.author.id, Math.round(num), message)
        bot.rmv(membe.id, Math.round(num))
        membe.user.send(`${message.author.username} stole from you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
            return;
          })
    } else {
            message.reply(`You paid 250 coins for nothing, sad.`)
            bot.rmv(message.author.id, 250)
            bot.add(membe.id, 250, message)
            membe.user.send(`${message.author.username} TRIED TO steal from you coins in **${message.guild.name}**`).catch(e => {
                return;
              })
        }})}
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
