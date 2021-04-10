const Discord = require('discord.js')
const items = require("../../shopItems")
module.exports = {
    name: "sell",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..sell (item) {amount}',
    cooldown: 6, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const inventory = require("../../schemas/inventory")
        inventory.findOne({ User: message.author.id }, async (err, data) => {
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
                if(data[validName] == 0) {return message.reply(`You dont have ${num} ${validName} bruh`)}else{
                    bot.removeItem(message.author.id, validName, 1)
                    bot.add(message.author.id, sell, message)
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                    .setDescription(`You sold ${itemIcon} 1 ${validName} for **${sell}** coins.`)
                    message.channel.send(embed)
            }}
            if(!args[1]) return message.channel.send(`Please use this format:\n\`..sell amount <item>\``)

if(data[validName] < num) {return message.reply(`You dont have ${num} ${validName} bruh`)}else{
bot.removeItem(message.author.id, validName, num)
bot.add(message.author.id, num*sell, message)
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
.setDescription(`You sold ${itemIcon} ${num} ${validName} for **${sell*num}** coins.`)
message.channel.send(embed)
}}})}}