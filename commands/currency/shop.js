const Money = require("../../schemas/inventory")
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "shop",
  aliases: ["item"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..shop',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

Money.findOne({
  User: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      User: message.author.id
    });
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
                        .addField(`**<:Sniper:818044125580492800> Sniper** -> \`20,000\``,`A item, a new command, with this item u can go to hunting`)
                        .addField(`**<:life:820648609741668392> Life Shield** -> \`14,000\``,`Some coins for a life sounds good.`)
                        .addField(`**<:energydrink:826100589426769990> Energy Drink** -> \`20,000\``,`With this item you move faster and see the robber, means 40% shield on robbers >:)))`)
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
    .addField(`${message.author.username} Owns: ${data.SpaceScript}\n`,
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

    .addField(`${message.author.username} Owns: ${data.WekyMoon}\n`,
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
  .addField(`${message.author.username} Owns: ${data.WekyRipOff}\n`,
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
  .addField(`${message.author.username} Owns: ${data.Fish}\n`,
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
  .addField(`${message.author.username} Owns: ${data.RareFish}\n`,
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
  .addField(`${message.author.username} Owns: ${data.PlasticHand}\n`,
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
  .addField(`${message.author.username} Owns: ${data.GotchaBox}\n`,
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
  .addField(`${message.author.username} Owns: ${data.SilverMoon}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`NON SELLABLE\`\n
             ID: \`silver\`\n\n
             Description: This item isn't made to do something, just to be here.`)
                   
  .setTimestamp()
  message.channel.send(embed)
}
if(useArgs[0] === 'sniper'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Sniper`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/795394146143043584/818043754539384832/Sniper_1.png`)
  .addField(`${message.author.username} Owns: ${data.Sniper}\n`,
             `Cost: \`15,000\`\n
              Sell: \`1,500\`\n
             ID: \`sniper\`\n\n
             Description: With this item you can use the command called \`hunt\` to get animals`)
                   
  .setTimestamp()
  message.channel.send(embed)
}
if(useArgs[0] === 'fox'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Fox`)
  .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/71/fox-face_1f98a.png`)
  .addField(`${message.author.username} Owns:${data.Fox}}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`50\`\n
             ID: \`laptop\`\n\n
             Description: This item can just be sold, wow`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'tiger'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Tiger`)
  .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/tiger-face_1f42f.png`)
  .addField(`${message.author.username} Owns: ${data.Tiger}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`200\`\n
             ID: \`tiger\`\n\n
             Description: This item can just be sold, wow`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'eagle'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Eagle`)
  .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/eagle_1f985.png`)
  .addField(`${message.author.username} Owns: ${data.Eagle}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`500\`\n
             ID: \`eagle\`\n\n
             Description: This item can just be sold, wow`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'bear'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Bear`)
  .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/bear_1f43b.png`)
  .addField(`${message.author.username} Owns: ${data.Bear}\n`,
             `Cost: \`NON BUYABLE\`\n
              Sell: \`1,200\`\n
             ID: \`bear\`\n\n
             Description: This item can just be sold, wow`)
                   
  .setTimestamp()
  message.channel.send(embed)

}
if(useArgs[0] === 'leg' || useArgs[0] === 'legendary' || useArgs[0] === 'legendaryfish'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Legendary Fish`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/820642337272234014/legendarz_fish.png`)
  .addField(`${message.author.username} Owns: ${data.LegendaryFish}\n`,
                   `Cost: \`NON BUYABLE\`\n
                   Sell: \`15,000\`\n
                   ID: \`legendary\`\n\n
                   Description: This item can just be sold, wow`)
  .setTimestamp() 
  message.channel.send(embed)
}
if(useArgs[0] === 'life' || useArgs[0] === 'shield' || useArgs[0] === 'lifeshield'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Life Shield`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/820648557388234772/unknown__2_-removebg-preview_1.png`)
  .addField(`${message.author.username} Owns: ${data.LifeShield}\n`,
                   `Cost: \`14,000\`\n
                   Sell: \`1,400\`\n
                   ID: \`life\`\n\n
                   Description: When you die, this magical item saves your life, without losing any coins.`)
  .setTimestamp() 
  message.channel.send(embed)
}
if(useArgs[0] === 'bread' || useArgs[0] === 'bd'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Bread`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/797153662195466312/820948443823865907/unknown__3_-removebg-preview_1.png`)
  .addField(`${message.author.username} Owns: ${data.Bread}\n`,
                   `Cost: \`15,000\`\n
                   Sell: \`NON SELLABLE\`\n
                   ID: \`bread\`\n\n
                   Description: This item can be used, and then you have 50% multiplier for 50s, rare item OWO`)
  .setTimestamp() 
  message.channel.send(embed)
}
if(useArgs[0] === 'energydrink' || useArgs[0] === 'energy' || useArgs[0] === 'drink'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Energy Drink`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/811222075053572106/826100381968760832/2pzzxk_1.png`)
  .addField(`${message.author.username} Owns: ${data.EnergyDrink}\n`,
                   `Cost: \`20,000\`\n
                   Sell: \`2,000\`\n
                   ID: \`bread\`\n\n
                   Description: With this item you move faster and see the robber, means 40% shield on robbers >:)))`)
  .setTimestamp() 
  message.channel.send(embed)
}
}
})

}
}