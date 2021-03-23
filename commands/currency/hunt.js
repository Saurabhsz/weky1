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
    const Money = require('../../schemas/Money')
    Money.findOne({
        id: message.author.id
    }, (err, data) => {
        if(err) console.log(err);
        if(!data){
        newD = new Money({
            id: message.author.id
        })
        newD.save();
        } else {
            if(0 >= data.gun) {
        return message.reply(`You dont have a sniper lmao`);
        } else {
           const random = Math.floor(Math.random() * 100) + 1
           const rm = Math.floor(Math.random() * 3)+1
           if(random < 5){
            if(0 >= data.life){
                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself`)
                data.Wallet -= data.Wallet
                data.save()
                               } else {
                                message.reply(`You saw a bear coming, but you was lazy to shot on it so you shooted yourself\nBut your <:life:820648609741668392> Life Shield saved you.`)
                                data.life -= 1
                               }
           }else if(random < 20){
               const n = Math.floor(Math.random() * 3)
               if(n == 0){
message.reply(`You didnt caught anything but atleast you found a 1 Laptop`)
data.Laptop += 1
data.save()
               } else if(n == 1){
                message.reply(`You didnt caught anything but atleast you found a <:spacescript:814122006437167134> 1 Space Script`)
                data.banknote += 1
                data.save()
               } else if(n == 2){
                message.reply(`You didnt caught anything but atleast you found a <:life:820648609741668392> 1 Life Shield`)
data.life += 1
data.save()
               } else if(n == 3){
                message.reply(`You didnt caught anything but atleast you found a <:Sniper:818044125580492800> 1 Sniper`)
data.sniper += 1
data.save()
               }
        } else if(random < 30){
    message.reply(`You went hunting and caught :bear: 1 bear`)
    data.bear += 1
    data.save()
        } else if(random < 40){
            message.reply(`You went hunting and caught :eagle: ${rm} eagles`)
            data.eagle += rm
            data.save()
               
           } else if(random < 70){
            message.reply(`You went hunting and caught :tiger: ${rm} tigers`)
            data.tiger += rm
            data.save()
           } else if(random < 80){
               message.reply(`You went hunting and caught 🦊 ${rm} foxes`)
           data.fox += rm
           data.save()
           } else if(random < 101){
            message.reply(`You went hunting but didnt caught anything :rolling_eyes:`)
           }
            }
           
        }
    })
}
}
