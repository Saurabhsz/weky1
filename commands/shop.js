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
                        .addField(`<:laptop:814147340947554314> **Laptop** -> \`4,000\``,`This item is used to play on it, not doing many things,it just give some coins`)
                        .addField(`<:spacescript:814122006437167134> **Space Script** -> \`100,000\``,` Using this item will give you a space on the bank that is literally a shild on robbers,\ngiving you around 1000-15000 space per script`)
                        .addField(`**🌝 Weky's Moon** -> \`2,000,000\``,`This item is used to flex on the kids who can\`t get it`)
                        .addField(`**<:ripoff:815192242331451423> Weky's Rip Off** -> \`12,000,000\``,`This item is used to flex on the kids who can\`t get it`)
                        .addField(`**<:plastichand:816373822784667719> Plastic Hand** -> \`15,000\``,`With this magical hand that is made from plastic you can easy fish by using \`fish\``)
                        .setFooter(`Run ..item (item) for more info.`)
                        message.channel.send(embed)
        
    }
if(useArgs[0] === 'laptop'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Laptop`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/795647180995559434/815180330846781440/lmo.png`)
    .addField(`${message.author.username} Owns: ${data.Laptop}\n`,
               `Cost: \`4,000\`\n
                Sell: \`1,000\`\n
               ID: \`laptop\`\n\n
               Description: This item is used to play on it, not doing many things,it just give some coins`)
                     
    .setTimestamp()
    message.channel.send(embed)

}
if(useArgs[0] === 'script' || useArgs[0] === 'space'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Space Script`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/811222144997916692/814122580441038858/1f4dc.png`)
    .addField(`${message.author.username} Owns: ${data.banknote}\n`,
                     `Cost: \`100,000\`\n
                     Sell: \`5,000\`\n
                     ID: \`spacescript\`\n\n
                     Description: Using this item will give you a space on the bank that is literally a shild on robbers,\ngiving you around 1000-15000 space per script`)
    .setTimestamp() 
    message.channel.send(embed)
}
if(useArgs[0] === 'moon' || useArgs[0] === 'wekymoon'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Weky's Moon`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/795647180995559434/815180567783931904/moon.png`)

    .addField(`${message.author.username} Owns: ${data.wekymoon}\n`,
                     `Cost: \`2,000,000\`\n
                     Sell: \`NON SELLABLE\`\n
                     ID: \`wekymoon\`\n\n
                     Description: This item is used to flex on the kids who can\`t get it`)
    .setTimestamp()
    message.channel.send(embed)

}
if(useArgs[0] === 'ripoff' || useArgs[0] === 'wekyrip' || useArgs[0] === 'wekyoff'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Weky's Rip Off`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/815192821539405834/rip-pixel-art-bit-79618441-removebg-preview_1.png`)
  .addField(`${message.author.username} Owns: ${data.wekyripoff}\n`,
             `Cost: \`12,000,000\`\n
             Sell: \`NON SELLABLE\`\n
             ID: \`wekyrip\`\n\n
             Description: This item is used to flex on the kids who can\`t get it`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'fi' || useArgs[0] === 'fis' || useArgs[0] === 'fish'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Fish`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/816367894715170926/fish.png`)
  .addField(`${message.author.username} Owns: ${data.fish}\n`,
             `Cost: \`NON BUYABLE\`\n
             Sell: \`250\`\n
             ID: \`fish\`\n\n
             Description: You get these fishy fishes by fishing with your Plastic Hand lol? lol!`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'rarefi' || useArgs[0] === 'rareis' || useArgs[0] === 'rarefish'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Rare Fish`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/816367989111652352/rare_fish.png`)
  .addField(`${message.author.username} Owns: ${data.fishrare}\n`,
             `Cost: \`NON BUYABLE\`\n
             Sell: \`500\`\n
             ID: \`rarefish\`\n\n
             Description: You get these fishy fishes by fishing with your Plastic Hand lol? lol!`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'hand' || useArgs[0] === 'plastichand' || useArgs[0] === 'handplastic' || useArgs[0] === 'plastic'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Plastic Hand`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/816373722290061342/plastic_hand_1.png`)
  .addField(`${message.author.username} Owns: ${data.fishing}\n`,
             `Cost: \`15,000\`\n
             Sell: \`1,500\`\n
             ID: \`hand\`\n\n
             Description: With this magical hand that is made from plastic you can easy fish by using \`fish\``)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'gotcha' || useArgs[0] === 'gotchabox'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Gotcha Box`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/816989970727698432/we.png`)
  .addField(`${message.author.username} Owns: ${data.Lootbox}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`NON SELLABLE\`\n
             ID: \`gotcha\`\n\n
             Description: Basically a lootbox, but a special one, you can get a lot of things from it and the special Silver Moon item.`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'silver' || useArgs[0] === 'silvermoon'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Silver Moon`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/816983702227517450/lol.png`)
  .addField(`${message.author.username} Owns: ${data.silvermoon}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`NON SELLABLE\`\n
             ID: \`silver\`\n\n
             Description: This item isn't made to do something, just to be here.`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
}
})

}

module.exports.config = {
    name: "shop",
    description: "see the items!",
    usage: "..shop",
    accessableby: "Members",
    aliases: ["store", "item"]
}