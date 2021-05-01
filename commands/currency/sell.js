

/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const items = require("../../shopItems")
        const inventory = require("../../schemas/inventory")
        inventory.findOne({ User: message.author.id }, async (err, ata) => {
        if(!args[0]) return message.reply(`No item specificated :/`)
        const itemToBuy = args[0].toLowerCase()
        const validItem = !!items.find(
    (val) => val.aliases.includes(itemToBuy)
);
if(!validItem) return message.channel.send(`This item is not a real item :rolling_eyes:`)
const itemIcon = items.find((val) => val.aliases.includes(itemToBuy)).emoji
const validName = items.find((val) => val.aliases.includes(itemToBuy)).realItem
const sell = items.find((val) => val.aliases.includes(itemToBuy)).sell
const se = items.find((val) => val.aliases.includes(itemToBuy)).sellable
if(sell == false || se == false){
    return message.channel.send(`This item is not sellable.`)
} else{
            var num = parseFloat(args[1])
            if(!num) {
                if(ata[validName] == 0) {return message.reply(`You dont have ${num} ${validName} bruh`)}else{
                    client.removeItem(message.author.id, validName, 1)
                    client.add(message.author.id, sell, message)
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                    .setDescription(`You sold ${itemIcon} 1 ${validName} for **${sell}** coins.`)
                    message.channel.send(embed)
            }}
            if(!args[1]) return message.channel.send(`Please use this format:\n\`..sell amount <item>\``)

if(ata[validName] < num) {return message.reply(`You dont have ${num} ${validName} bruh`)}else{
client.removeItem(message.author.id, validName, num)
client.add(message.author.id, num*sell, message)
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
.setDescription(`You sold ${itemIcon} ${num} ${validName} for **${sell*num}** coins.`)
message.channel.send(embed)
}}})
};

module.exports.help = {
    aliases: [],
      name: 'sell',
      description: 'Selling items.',
      usage: config.prefix + 'sell /item/ ~amount~',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 7000,
};
