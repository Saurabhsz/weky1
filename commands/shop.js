const Money = require("../schemas/Money")
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Money = require('../schemas/Money')
Money.findOne({
  id: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: message.author.id
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);

    if(!useArgs[0] || useArgs[0] === '1') {
        const embed = new Discord.MessageEmbed()
                        .addField(`💻 **Laptop** -> \`4,000\``,`This item is used to play on it, not doing many things,it just give some coins`)
                        .addField(`<:spacescript:814122006437167134> **Space Script** -> \`100,000\``,` Using this item will give you a space on the bank that is literally a shild on robbers,\ngiving you around 1000-15000 space per script`)
                        .addField(`**🌕 Weky's Moon** -> \`2,000,000\``,`This item is used to flex on the kids who can\`t get it`)
                        message.channel.send(embed)
        
    }
if(useArgs[0] === 'laptop'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Laptop`)
    .setDescription(`${message.author} Owns: ${data.Laptop}\n,
               Cost: \`4,000\`\n
               ID: \`laptop\`\n\n
                     This item is used to play on it, not doing many things,it just give some coins`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/811222144997916692/814122580441038858/1f4dc.png`)
    .setTimestamp()
    message.channel.send(embed)

}
if(useArgs[0] === 'script' || useArgs[0] === 'space'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Space Script`)
    .setDescription(`${message.author} Owns: ${data.banknote}\n,
                     Cost: \`100,000\`\n
                     ID: \`spacescript\`\n\n
                     Using this item will give you a space on the bank that is literally a shild on robbers,\ngiving you around 1000-15000 space per script`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/811222144997916692/814129669623382016/bb69d1f4be3e217021a5d317825df452-removebg-preview.png`)
    .setTimestamp() 
    message.channel.send(embed)
}
if(useArgs[0] === 'moon' || useArgs[0] === 'wekymoon'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Weky's Moon`)
    .setDescription(`${message.author} Owns: ${data.banknote}\n,
                     Cost: \`100,000\`\n
                     ID: \`wekymoon\`\n\n
                     This item is used to flex on the kids who can\`t get it`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/811222144997916692/814131488265469962/full-moon-with-face-emoji-by-twitter-removebg-preview.png`)
    .setTimestamp()
    message.channel.send(embed)

}
}
})

}

module.exports.config = {
    name: "shop",
    description: "see the items!",
    usage: "/shop",
    accessableby: "Members",
    aliases: ["store", "item"]
}