const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "use",
  aliases: [],
  dmOnly: false,
  guildOnly: true,
  usage: '..use',
  cooldown: 4,
  cooldowny: 1,
  guarded: true,
  permissions: ["NONE"],
  async execute(bot, message, args) {
    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);
    if(useArgs[0] === 'script' || useArgs[0] === 'space' ) {
        const muni = Math.floor(Math.random() * 15000) + 1000;
        var num = parseFloat(args[1])
                if(!num){
                    if(bot.item(message.author.id, "SpaceScript", 1) === false){
                       return message.channel.send(`You dont have that item, sorry buddy.`)
                    } else {
                        bot.removeItem(message.author.id, "SpaceScript", 1)
                        bot.addSpace(message.author.id, muni)
                    }
                        message.channel.send(new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used <:spacescript:814122006437167134> 1 Space Script and got **${muni} bank space**, gg lmao.`)
       )
                } else {
                    if(bot.item(message.author.id, "SpaceScript", num) === false){
                       return message.channel.send(`You dont have that many item, sorry buddy.`)
                    } else {
                        bot.removeItem(message.author.id, "SpaceScript", num)
                        bot.addSpace(message.author.id, muni*num)
                    }
                    message.channel.send(new Discord.MessageEmbed()
                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                    .setDescription(`You used <:spacescript:814122006437167134> ${num} Space Script and got **${muni*num} bank space**, gg lmao.`)
   )}}
    if(useArgs[0] === 'gotcha' || useArgs[0] === 'gotchabox' ) {
        if(bot.item(message.author.id, "GotchaBox", 1) === false){
            return message.channel.send(`You dont have that item, sorry buddy.`)
         } else {
            const random = Math.floor(Math.random() * 100) + 1
            const randomC = Math.floor(Math.random() * 20000) + 6000
            const ar = [
                "fishing",
                "laptop",
                "banknote"
            ]
            const br = Math.floor(Math.random() * ar.length)
        const l = Math.floor(Math.random() * 4) + 1
            if(random < 2){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`1 Silver Moon\`\nOMFG NO WAY<:silver_moon:816983800260067338>`)
                bot.addItem(message.author.id, "SilverMoon", 1)
                bot.removeItem(message.author.id, "GotchaBox", 1)
              } else if(random < 5){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC}\`\n\`1 Weky's Moon\``)
                bot.add(message.author.id, randomC)
                bot.addItem(message.author.id, "WekyMoon", 1)
                bot.removeItem(message.author.id, "GotchaBox", 1)
              } else if(random < 30){
                  if(br === 0){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Plastic Hand\``)
                bot.add(message.author.id, randomC)
                bot.addItem(message.author.id, "PlasticHand", l)
                bot.removeItem(message.author.id, "GotchaBox", 1)
            } else if(br === 1){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Laptops\``)
                    bot.add(message.author.id, randomC)
                    bot.addItem(message.author.id, "SpaceScript", l)
                    bot.removeItem(message.author.id, "Laptop", 1)
                } else if(br === 2){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Space Scripts\``)
                    bot.add(message.author.id, randomC)
                    bot.addItem(message.author.id, "SpaceScript", l)
                    bot.removeItem(message.author.id, "GotchaBox", 1)
           }
            } else if(random < 36){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\``)
                bot.add(message.author.id, randomC)
                bot.removeItem(message.author.id, "GotchaBox", 1)
            } else if(random < 80){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
                bot.add(message.author.id, 500)
                bot.removeItem(message.author.id, "GotchaBox", 1)
                      } else if(random < 101){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
                    bot.add(message.author.id, 500)
                    bot.removeItem(message.author.id, "GotchaBox", 1)
                      }
        }
                }
    if(useArgs[0] === 'bread' || useArgs[0] === 'bd' ) {
        if(bot.item(message.author.id, "Bread", 1) === false){
            return message.channel.send(`You dont have that item, sorry buddy.`)
         } else {
                        bot.removeItem(message.author.id, "Bread", 1)
                        bot.addItem(message.author.id, "BunEffect", 1)
                        message.reply(`You used a <:bready:820948539823226901> Bread to get the bun tentation, now your mind can think faster giving you 50% multiplier 50 seconds.`)
                        setTimeout(function() {  bot.removeItem(message.author.id, "BunEffect", 1)}, 50000)
                    }}
                    if(useArgs[0] === 'energy' || useArgs[0] === 'drink'  || useArgs[0] === 'energydrink') {
if(bot.item(message.author.id, "EnergyDrink", 1) === false){
return message.channel.send(`You dont have that item, sorry buddy.`)
 } else {
bot.removeItem(message.author.id, "EnergyDrink", 1)
 bot.addItem(message.author.id, "EnergyBolt", 1)
message.reply(`You used a <:energydrink:826100589426769990> Energy Drink to move fast brrr, now you can catch robbers >:) for 6h`)
setTimeout(function() {  bot.removeItem(message.author.id, "EnergyBolt", 1)}, 21600000)
                                    }}
if(useArgs[0] === 'ripoff' || useArgs[0] === 'wekyripoff' || useArgs[0] === 'wekyrip'|| useArgs[0] === 'rip') {
if(bot.item(message.author.id, "WekyRipOff", 1) === falselse){
return message.channel.send(`You dont have that item, sorry buddy.`)
} else {
message.reply(`${message.author} flex on y'all with their weky rip off :muscle::rage:`)
}}     
    if(!useArgs[0]) {
message.channel.send(`What you want to use? like bruh`);
    }
}
}