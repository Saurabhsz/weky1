const Discord = require("discord.js");
const { numberDependencies } = require("mathjs");
const inventory = require("../../schemas/inventory")
const items = require("../../shopItems")
module.exports = {
    name: "additem",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..addItem',
    cooldown: 6, //seconds(s)
    cooldown: 3,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
      if(message.author.id === "778518819055861761" || message.author.id === "700988024770789376" || message.author.id === "619498919763640330"){
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
const userBalance = await bot.bal(member.id);
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
        bot.createProfile(member.id)
        message.channel.send(`Thanks for starting using our currency sytem! :)`)
    }
    bot.channels.cache.get("830003681638350859").send(new Discord.MessageEmbed()
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
          bot.createProfile(member.id)
          message.channel.send(`Thanks for starting using our currency sytem! :)`)
        }
        bot.channels.cache.get("830003681638350859").send( new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Added ${itemIcon} ${num} ${validName} to ${member}`)
        .setColor(`RANDOM`)
    )
    });
} else if(num.isNaN){
    return message.channel.send(`You can't add ${num} ${itemToBuy} BRUH`)
}
      }else { return }
}
}