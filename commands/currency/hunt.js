const Discord = require('discord.js')
module.exports.config = {
    name: "hunt",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..hunt',
    cooldown: 45, //seconds(s)
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
            let random = Math.floor(Math.random() * 3)+1
            const repp = [
                `You went hunting and caught 🦊 ${random} foxes`,
                `You went hunting and caught 🦊 ${random} foxes`,
                `You went hunting and caught 🦊 ${random} foxes`,
                `You went hunting and caught 🦊 ${random} foxes`,
                `You went hunting and caught 🦊 ${random} foxes`,
                `You went hunting and caught :tiger: ${random} tigers`,
                `You went hunting and caught :tiger: ${random} tigers`,
                `You went hunting and caught :tiger: ${random} tigers`,
                `You went hunting and caught :tiger: ${random} tigers`,
                `You went hunting and caught :eagle: ${random} eagles`,
                `You went hunting and caught :eagle: ${random} eagles`,
                `You went hunting and caught :eagle: ${random} eagles`,
                `You went hunting and caught :bear: 1 bear`,
                `You went hunting but didnt caught anything :rolling_eyes:`,
                `You went hunting but didnt caught anything :rolling_eyes:`,
                `You went hunting but didnt caught anything :rolling_eyes:`,
    
            ]
           var xxxx = Math.floor(Math.random() * repp.length);
           const answerspos = repp[xxxx]
           if(xxxx == 0){ data.fox += random;}
           if(xxxx == 1){ data.fox += random;}
           if(xxxx == 2){ data.fox += random;}
           if(xxxx == 3){ data.fox += random;}
           if(xxxx == 4){ data.fox += random}
           if(xxxx == 5){ data.tiger += random;}
           if(xxxx == 6){ data.tiger += random}
           if(xxxx == 7){data.tiger += random }
           if(xxxx == 8){ data.tiger += random}
           if(xxxx == 9){ data.eagle += random}
           if(xxxx == 10){data.eagle += random}
           if(xxxx == 11){ data.eagle += random}
           if(xxxx == 12){ data.bear += 1}



               message.reply(`${answerspos}`)
               data.save();
            }
           
        }
    })
}
}
