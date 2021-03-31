const Discord = require('discord.js');
const { rmdir } = require('fs');
module.exports = {
    name: "hunt",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..hunt',
    cooldown: 45, //seconds(s),
    cooldowny: 35,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
            const inventory = require("../../schemas/inventory")
            inventory.findOne({ User: message.author.id }, async (err, data) => {
            if(0 >= data.Sniper) {
        return message.reply(`You dont have a sniper lmao`);
        } else {
           const random = Math.floor(Math.random() * 100) + 1
           const rm = Math.floor(Math.random() * 3)+1
           if(random < 5){
            if(0 >= data.LifeShield){
                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself`)
bot.rmv(message.author.id, await bot.bal(message.author.id))
                               } else {
                                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself\nBut your <:life:820648609741668392> Life Shield saved you.`)
data.LifeShield -= 1
data.save()
                               }
           }else if(random < 20){
               const n = Math.floor(Math.random() * 3)
               if(n == 0){
message.reply(`You didnt caught anything but atleast you found a 1 Laptop`)
data.Laptop += 1
data.save()
               } else if(n == 1){
                message.reply(`You didnt caught anything but atleast you found a <:spacescript:814122006437167134> 1 Space Script`)
                data.SpaceScript += 1
                data.save()
               } else if(n == 2){
                message.reply(`You didnt caught anything but atleast you found a <:life:820648609741668392> 1 Life Shield`)
data.LifeShield += 1
data.save()
               } else if(n == 3){
                message.reply(`You didnt caught anything but atleast you found a <:Sniper:818044125580492800> 1 Sniper`)
data.Sniper += 1
data.save()
               }
        } else if(random < 30){
    message.reply(`You went hunting and caught :bear: 1 bear`)
    data.Bear += 1
    data.save()
        } else if(random < 40){
            message.reply(`You went hunting and caught :eagle: ${rm} eagles`)
            data.Eagle += rm
            data.save()
               
           } else if(random < 70){
            message.reply(`You went hunting and caught :tiger: ${rm} tigers`)
            data.Tiger += rm
            data.save()
           } else if(random < 80){
               message.reply(`You went hunting and caught 🦊 ${rm} foxes`)
           data.Fox += rm
           data.save()
           } else if(random < 101){
            message.reply(`You went hunting but didnt caught anything :rolling_eyes:`)
           }}})}}
