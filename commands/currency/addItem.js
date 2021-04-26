
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const inventory = require("../../schemas/inventory")
const items = require("../../shopItems")
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[2]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(2).join(" ") || x.user.username === args[2])
        if(!args[0]) return message.reply(`Well add smth bruh`)
        const itemToBuy = args[0].toLowerCase()
    var num = parseFloat(args[1])
if(!args[0]) return message.channel.send("Please specify the item you want to add!")
const validItem = !!items.find(
    (val) => val.aliases.includes(itemToBuy)
);
if(!validItem) return message.channel.send(`This item is not a real item :rolling_eyes:`)
const itemPrice = items.find((val) => val.aliases.includes(itemToBuy)).price
const itemIcon = items.find((val) => val.aliases.includes(itemToBuy)).emoji
const itemName = items.find((val) => val.aliases.includes(itemToBuy))
const validName = items.find((val) => val.aliases.includes(itemToBuy)).realItem
if(!num){
const params = {
    User: member.id
}
inventory.findOne(params, async(err, data) => {
    if(data) {
const hasItem = Object.keys(data).includes(validName);
if(!hasItem){
    data[validName] += 1;
} else {
    data[validName]++
} 
await inventory.findOneAndUpdate(params, data)
    } else {
        client.createProfile(member.id)
        message.channel.send(`Thanks for starting using our currency sytem! :)`)
    }
    client.channels.cache.get("830003681638350859").send(new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .setDescription(`Added ${itemIcon} 1 ${validName} to ${member}`)
    .setColor(`RANDOM`)
)
})
} else if(num){
    const params = {
        User: member.id
    }
    inventory.findOne(params, async(err, data) => {
        if(data) {
    const hasItem = Object.keys(data).includes(validName);
    if(!hasItem){
        data[validName] += num;
    } else {
        data[validName] += num
    } 
    await inventory.findOneAndUpdate(params, data)
        } else {
          client.createProfile(member.id)
          message.channel.send(`Thanks for starting using our currency sytem! :)`)
        }
        client.channels.cache.get("830003681638350859").send( new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Added ${itemIcon} ${num} ${validName} to ${member}`)
        .setColor(`RANDOM`)
    )
    });
} else if(num.isNaN){
    return message.channel.send(`You can't add ${num} ${itemToBuy} BRUH`)
}
};

module.exports.help = {
	aliases: ['ai'],
	name: 'additem',
	description: 'Adding items to users',
	usage: config.prefix + 'additem /item/ ~amount~ @user',
};

module.exports.config = {
	args: false,
	restricted: true,
	category: 'currency',
	disable: false,
	cooldown: 1000,
};