
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const { numberDependencies } = require("mathjs");
const inventory = require("../../schemas/inventory")
const items = require("../../shopItems")
        if(!args[0]) return message.reply(`Well buy smth bruh`)
        const itemToBuy = args[0].toLowerCase()
    var num = parseFloat(args[1])
if(!args[0]) return message.channel.send("Please specify the item you want to buy!")
const validItem = !!items.find(
    (val) => val.aliases.includes(itemToBuy)
);
if(!validItem) return message.channel.send(`This item is not a real item :rolling_eyes:`)
const itemPrice = items.find((val) => val.aliases.includes(itemToBuy)).price
const itemIcon = items.find((val) => val.aliases.includes(itemToBuy)).emoji
const itemName = items.find((val) => val.aliases.includes(itemToBuy))
const validName = items.find((val) => val.aliases.includes(itemToBuy)).realItem
const buyable = items.find((val) => val.aliases.includes(itemToBuy)).buyable
if(buyable == false)  {message.reply(`${itemIcon + ' ' + validName} is not buyable`)}else {
const userBalance = await client.bal(message.author.id);
if(!num){
if(userBalance < itemPrice) return message.reply(`Sorry bro, you need ${itemPrice-userBalance} more coins to buy a ${itemIcon + ' ' + validName}`)
const params = {
    User: message.author.id
}
inventory.findOne(params, async(err, ata) => {
    if(ata) {
const hasItem = Object.keys(ata).includes(validName);
if(!hasItem){
    ata[validName] += 1;
    client.rmv(message.author.id, itemPrice)
} else {
    ata[validName]++
    client.rmv(message.author.id, itemPrice)
} 
await inventory.findOneAndUpdate(params, ata)
    } else {
        client.createProfile(message.author.id)
        message.channel.send(`Thanks for starting using our currency sytem! :)`)
    }
    message.reply( new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .setDescription(`Successfully bought ${itemIcon} 1 ${validName} with ${itemPrice} coins`)
    .setColor(`RANDOM`)
)
})
} else if(num){
    if(userBalance < itemPrice*num) return message.reply(`Sorry bro, you need ${itemPrice*num-userBalance} more coins to buy ${num} ${itemIcon + ' ' + itemName}`)
    const params = {
        User: message.author.id
    }
    inventory.findOne(params, async(err, ata) => {
        if(ata) {
    const hasItem = Object.keys(ata).includes(validName);
    if(!hasItem){
        ata[validName] += num;
        client.rmv(message.author.id, itemPrice*num)
    } else {
        ata[validName] += num
        client.rmv(message.author.id, itemPrice*num)
    } 
    await inventory.findOneAndUpdate(params,ata)
        } else {
return message.channel.send(`You didnt even did \`..start\` bruh, there is no profile called ${message.author.username}`)
        }
        message.reply( new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Successfully bought ${itemIcon} ${num} ${validName} with ${itemPrice*num} coins`)
        .setColor(`RANDOM`)
    )
    });
} else if(num.isNaN){
    return message.channel.send(`You can't buy ${num} ${itemToBuy} BRUH`)
}
}
};

module.exports.help = {
	aliases: [],
	name: 'buy',
	description: 'Buying items',
	usage: config.prefix + 'buy /item/ ~amount~',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 5000,
};