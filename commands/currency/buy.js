const Discord = require("discord.js");
const { numberDependencies } = require("mathjs");
const inventory = require("../../schemas/inventory")
const items = require("../../shopItems")
module.exports = {
    name: "buy",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..buy (item) {amount}',
    cooldown: 6, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const itemToBuy = args[0].toLowerCase()
    var num = parseFloat(args[1])
if(!args[0]) return message.channel.send("Please specify the item you want to buy!")
const validItem = !!items.find(
    (val) => val.item.toLowerCase() === itemToBuy
                  || !!items.find(
    (val) => val.aliases.includes(itemToBuy)
                  )
);
if(!validItem) return message.channel.send(`This item is not a real item :rolling_eyes:`)
const itemPrice = items.find((val) => val.aliases.includes(itemToBuy)).price || items.find((val) => (val.item.toLowerCase()) === itemToBuy).price
const itemIcon = items.find((val) => val.aliases.includes(itemToBuy)).emoji || items.find((val) => (val.item.toLowerCase()) === itemToBuy).emoji
const itemName = items.find((val) => val.aliases.includes(itemToBuy)) || items.find((val) => val.item.toLowerCase() === itemToBuy)
const validName = items.find((val) => val.aliases.includes(itemToBuy)).realItem || items.find((val) => val.item.toLowerCase() === itemToBuy).realItem
const userBalance = await bot.bal(message.author.id);
if(!num){
if(userBalance < itemPrice) return message.reply(`Sorry bro, you need ${itemPrice-userBalance} more coins to buy a ${itemIcon + ' ' + itemName}`)
const params = {
    User: message.author.id
}
inventory.findOne(params, async(err, data) => {
    if(data) {
const hasItem = Object.keys(data).includes(validName);
if(!hasItem){
    data[validName] = 1;
    bot.rmv(message.author.id, itemPrice)
} else {
    data[validName]++
    bot.rmv(message.author.id, itemPrice)
} 
await inventory.findOneAndUpdate(params, data)
    } else {
        bot.createProfile(message.author.id)
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
    inventory.findOne(params, async(err, data) => {
        if(data) {
    const hasItem = Object.keys(data).includes(validName);
    if(!hasItem){
        data[validName] = num;
        bot.rmv(message.author.id, itemPrice*num)
    } else {
        data[validName] += num
        bot.rmv(message.author.id, itemPrice*num)
    } 
    await inventory.findOneAndUpdate(params, data)
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
}