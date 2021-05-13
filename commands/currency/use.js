
                       /* eslint-disable no-unused-vars */
                       const Discord = require('discord.js');
                       const config = require('../../util/config.json');
                       
                       module.exports.run = async (client, message, args, utils, data) => {
                       const { MessageEmbed } = require("discord.js")
    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);
    const inventory = require("../../schemas/inventory")
inventory.findOne({ User: message.author.id }, async (err, ata) => {
    if(useArgs[0] === 'script' || useArgs[0] === 'space' ) {
        const muni = Math.floor(Math.random() * 15000) + 1000;
        var num = parseFloat(args[1])
                if(!num){
                    if(0 >= ata.SpaceScript){
                       return message.channel.send(`You dont have that item, sorry buddy.`)
                    } else {
                        client.removeItem(message.author.id, "SpaceScript", 1)
                        client.addSpace(message.author.id, muni)
                    }
                        message.channel.send(new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used <:spacescript:814122006437167134> 1 Space Script and got **${muni} bank space**, gg lmao.`)
       )
                } else {
                    if(num > ata.SpaceScript){
                       return message.channel.send(`You dont have that many item, sorry buddy.`)
                    } else {
                        client.removeItem(message.author.id, "SpaceScript", num)
                        client.addSpace(message.author.id, muni*num)
                    }
                    message.channel.send(new Discord.MessageEmbed()
                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                    .setDescription(`You used <:spacescript:814122006437167134> ${num} Space Script and got **${muni*num} bank space**, gg lmao.`)
   )}}
    if(useArgs[0] === 'common' || useArgs[0] === 'commonbox' ) {
        if(0 >= ata.CommonBox){
            return message.channel.send(`You dont have that item, sorry buddy.`)
         } else {
            const random = Math.floor(Math.random() * 100) + 1
            const randomC = Math.floor(Math.random() * 1000) + 1
            const ar = [
                "fishing",
                "laptop",
                "banknote",
                "common",
                "booster",
                "bread",
                "energy",
            ]
            const br = Math.floor(Math.random() * ar.length)
        const l = Math.floor(Math.random() * 8) + 1
if(random < 5){
                message.channel.send(`**${message.author} used a Common Box**\n\`${randomC}\`\n\`1 Slice Of Tomato\``)
                client.add(message.author.id, randomC, message)
                client.addItem(message.author.id, "WekyMoon", 1)
                client.removeItem(message.author.id, "CommonBox", 1)
              } else if(random < 30){
                  if(br === 0){
                message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Plastic Hand\``)
                 client.add(message.author.id, randomC, message)
                client.addItem(message.author.id, "PlasticHand", l)
                client.removeItem(message.author.id, "CommonBox", 1)
            } else if(br === 1){
                    message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Laptops\``)
                    client.add(message.author.id, randomC, message)
                    client.addItem(message.author.id, "Laptop", l)
                    client.removeItem(message.author.id, "CommonBox", 1)
                } else if(br === 2){
                    message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Space Scripts\``)
                    client.add(message.author.id, randomC, message)
                    client.addItem(message.author.id, "SpaceScript", l)
                    client.removeItem(message.author.id, "CommonBox", 1)
              } else if(br === 3){
                      message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Common Box\` :joy: unlucky`)
                      client.add(message.author.id, randomC, message)
                      client.addItem(message.author.id, "CommonBox", l)
                      client.removeItem(message.author.id, "CommonBox", 1)
                  } else if(br === 4){
                      message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Booster\``)
                      client.add(message.author.id, randomC, message)
                      client.addItem(message.author.id, "Booster", l)
                      client.removeItem(message.author.id, "CommonBox", 1)
                  } else if(br === 5){
                    message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Bread\``)
                    client.add(message.author.id, randomC, message)
                    client.addItem(message.author.id, "Bread", l)
                    client.removeItem(message.author.id, "CommonBox", 1)
                } else if(br === 6){
                    message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\`\n\`${l} Energy Drink\``)
                    client.add(message.author.id, randomC, message)
                    client.addItem(message.author.id, "EnergyDrink", l)
                    client.removeItem(message.author.id, "CommonBox", 1)
                }                    }else if(random < 101){
                    message.channel.send(`**${message.author} used a Common Box**\n\`${randomC} coins\``)
                    client.add(message.author.id, randomC, message)
                    c;ient.removeItem(message.author.id, "CommonBox", 1)
                }

         }
                    }
                if(useArgs[0] === 'gotcha' || useArgs[0] === 'gotchabox' ) {
                    if(0 >= ata.GotchaBox){
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
                            client.addItem(message.author.id, "SilverMoon", 1)
                            client.removeItem(message.author.id, "GotchaBox", 1)
                          } else if(random < 5){
                            message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC}\`\n\`1 Weky's Moon\``)
                            client.add(message.author.id, randomC, message)
                            client.addItem(message.author.id, "WekyMoon", 1)
                            client.removeItem(message.author.id, "GotchaBox", 1)
                          } else if(random < 30){
                              if(br === 0){
                            message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Plastic Hand\``)
                            client.add(message.author.id, randomC, message)
                            client.addItem(message.author.id, "PlasticHand", l)
                            client.removeItem(message.author.id, "GotchaBox", 1)
                        } else if(br === 1){
                            message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Laptops\``)
                            client.add(message.author.id, randomC, message)
                            client.addItem(message.author.id, "Laptop", l)
                            client.removeItem(message.author.id, "CommonBox", 1)
                            } else if(br === 2){
                                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Space Scripts\``)
                                client.add(message.author.id, randomC, message)
                                client.addItem(message.author.id, "SpaceScript", l)
                                client.removeItem(message.author.id, "GotchaBox", 1)
                       }
                        } else if(random < 36){
                            message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\``)
                            client.add(message.author.id, randomC, message)
                            client.removeItem(message.author.id, "GotchaBox", 1)
                        } else if(random < 80){
                            message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
                            client.add(message.author.id, 500, message)
                            client.removeItem(message.author.id, "GotchaBox", 1)
                                  } else if(random < 101){
                                message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
                                client.add(message.author.id, 500, message)
                                client.removeItem(message.author.id, "GotchaBox", 1)
                                  }
                    }
                            }
    if(useArgs[0] === 'bread' || useArgs[0] === 'bd' ) {
        if(0 >= ata.Bread){
            return message.channel.send(`You dont have that item, sorry buddy.`)
         } else {
                        client.removeItem(message.author.id, "Bread", 1)
                        client.addItem(message.author.id, "BunEffect", 1)
                        message.reply(`You used a <:bready:820948539823226901> Bread to get the bun tentation, now your mind can think faster giving you 50% multiplier 50 seconds.`)
                        setTimeout(function() {  client.removeItem(message.author.id, "BunEffect", 1)}, 50000)
                    }}
                    if(useArgs[0] === 'energy' || useArgs[0] === 'drink'  || useArgs[0] === 'energydrink') {
if(0 >= ata.EnergyDrink){
return message.channel.send(`You dont have that item, sorry buddy.`)
 } else {
client.removeItem(message.author.id, "EnergyDrink", 1)
client.addItem(message.author.id, "EnergyBolt", 1)
message.reply(`You used a <:energydrink:826100589426769990> Energy Drink to move fast brrr, now you can catch robbers >:) for 6h`)
setTimeout(function() {  client.removeItem(message.author.id, "EnergyBolt", 1)}, 21600000)
                                    }}
if(useArgs[0] === 'ripoff' || useArgs[0] === 'wekyripoff' || useArgs[0] === 'wekyrip'|| useArgs[0] === 'rip') {
if(0 >= ata.WekyRipOff){
return message.channel.send(`You dont have that item, sorry buddy.`)
} else {
message.reply(`${message.author} flex on y'all with ${ata.WekyRipOff} weky rip off :muscle::rage:`)
}}
if(useArgs[0] === 'wekyarmor' || useArgs[0] === 'armor') {
    if(0 >= ata.WekyArmor){
    return message.channel.send(`You dont have that item, sorry buddy.`)
    } else {
    message.reply(`No one can beat with ${message.author} and their ${ata.WekyArmor} armors :sword:`)
    }}
    if(useArgs[0] === 'booster') {
        if(0 >= ata.Booster){
        return message.channel.send(`You dont have that item, sorry buddy.`)
         } else {
        client.removeItem(message.author.id, "Booster", 1)
         client.addItem(message.author.id, "BoosterEffect", 1)
        message.reply(`You used a <a:booster:828168509112188938> booster, your next money-gain command will give you 10% more!`)
                                            }}
})
                       };
                       
                       module.exports.help = {
                           aliases: [],
                             name: 'use',
                             description: 'Use a item.',
                             usage: config.prefix + 'use /item/',
                         };
                       
                       module.exports.config = {
                           args: false,
                           restricted: false,
                           category: 'currency',
                           disable: false,
                           cooldown: 5000,
                       }