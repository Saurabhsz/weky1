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
if(num > bot.item(message.author.id, validName)) {console.log(`c`)}else{
bot.addItem(member.id, validName, num)
bot.removeItem(message.author.id, validName, num)
message.reply(message.author.username + ` gave ` + member.user.tag + ` ` + itemIcon + ` ` + num + ` ` + validName)
}}}