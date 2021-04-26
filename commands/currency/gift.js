/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const items = require("../../shopItems")
        if(!args[1]) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[2]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(2).join(" ") || x.user.username === args[2]);
        if(member.id === message.author.id) return message.reply(`Learn what you cant gift urself means`);
        if(!member) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
            var num = parseFloat(args[0])
            if(!num) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
            if(!args[1]) return message.channel.send(`Please use this format:\n\`..gift amount <item> @user\``)
            const itemToBuy = args[1].toLowerCase()
            const validItem = !!items.find(
    (val) => val.aliases.includes(itemToBuy)
);
if(!validItem) return message.channel.send(`This item is not a real item :rolling_eyes:`)
const itemIcon = items.find((val) => val.aliases.includes(itemToBuy)).emoji
const validName = items.find((val) => val.aliases.includes(itemToBuy)).realItem
const inventory = require("../../schemas/inventory")
inventory.findOne({ User: message.author.id }, async (err, data) => {
    if(num > data[validName]) {
    return message.channel.send("You dont have " + num + " " + validName);
  } else {
client.addItem(member.id, validName, num)
client.removeItem(message.author.id, validName, num)
message.reply(message.author.username + ` gave ` + member.user.tag + ` ` + itemIcon + ` ` + num + ` ` + validName)
member.user.send(`${message.author.username} gave you ` + itemIcon + ` ` + num + ` ` + validName).catch(e => {
    return;
  })
}})
};

module.exports.help = {
  aliases: [],
	name: 'gift',
	description: 'Gifting items to users',
	usage: config.prefix + 'gift /item/ ~amount~ @user',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 15000,
};