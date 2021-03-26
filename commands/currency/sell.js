const items = require("../../shopItems")
module.exports = {
    name: "gift",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..gift (item) {amount}',
    cooldown: 6, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
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
        const itemToBuy = args[1].toLowerCase()
            var num = parseFloat(args[0])
            if(!num) {
                if(bot.item(message.author.id, validName) < 0) {return message.reply(`You dont have ${num} ${realItem} bruh`)}else{
                    bot.removeItem(message.author.id, validName, 1)
                    bot.add(message.author.id, sell)
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                    .setDescription(`You sold ${itemIcon} 1 ${validName} for **${sell}** coins.`)
                    message.channel.send(embed) 
            }}
            if(!args[1]) return message.channel.send(`Please use this format:\n\`..sell amount <item>\``)

if(bot.item(message.author.id, validName) < num) {return message.reply(`You dont have ${num} ${realItem} bruh`)}else{
bot.removeItem(message.author.id, validName, num)
bot.add(message.author.id, num*sell)
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
.setDescription(`You sold ${itemIcon} ${num} ${validName} for **${sell*num}** coins.`)
message.channel.send(embed)
}}}}