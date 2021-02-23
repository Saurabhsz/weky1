const Money = require("../../schemas/Money")
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);

    if(!useArgs[0] || useArgs[0] === '1') {
        const embed = new Discord.MessageEmbed()
                        .addField(`💻 **Laptop** -> \`4000\``,`This item is used to play on it, not doing many things,it just give some coins`)
                                         .addField(`👾 **Space Script** -> \`10000\``,` Using this item will give you a space on the bank that is literally a shild on robbers,\ngiving you around 1000-15000 space per script`)
                        message.channel.send(embed)
        
    }


}

module.exports.config = {
    name: "shop",
    description: "see the items!",
    usage: "/shop",
    accessableby: "Members",
    aliases: ["store", "item"]
}