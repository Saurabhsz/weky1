const Discord = require('discord.js')
module.exports = {
    name: "fish",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..fish',
    cooldown: 45, //seconds(s)
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
            if(0 >= data.fishing) {
        return message.channel.send(`U dont have a Plastic Hand what a poor`);
        } else {
            let random = Math.floor(Math.random() * 3)+1
            const repp = [
                `You got <:fish:816367967733547038> ${random} fishes by fishing with your Plastic Hand, very cool.`,
                `You got <:fish:816367967733547038> ${random} fishes by fishing with your Plastic Hand`,
                `You got <:fish:816367967733547038> ${random} fishes by fishing with your Plastic Hand, noice`,
                `You got <:fish:816367967733547038> ${random} fishes by fishing with your Plastic Hand, for literally nothing`,
                `You got <:fish:816367967733547038> ${random} fishes, but your <:plastichand:816373822784667719> Plastic Hand broke :/`,
                `You died because a fish ate your eye, and lost all, idk bro you seems sus but atleast you still have the <:plastichand:816373822784667719> Plastic Hand`,
                `You got <:fish:816367967733547038> ${random} fishes after nothing`,
                `You didnt caught anything, noob Wekier`,
                `You didnt caught anything, noob`,
                `You didnt caught anything, noob`,
                `You didnt caught anything, noob`,
                `You didnt caught anything, noob`,
                `You didnt caught anything, noob`,
                `A big gg dude, you got <:rare_fish:816368038110035999> 1 Rare Fish`
    
            ]
           var xxxx = Math.floor(Math.random() * repp.length);
           const answerspos = repp[xxxx]
           if(xxxx == 0){ data.fish += random;}
           if(xxxx == 1){ data.fish += random;}
           if(xxxx == 2){ data.fish += random;}
           if(xxxx == 3){ data.fish += random;}
           if(xxxx == 4){ data.fish += random; data.fishing -= 1}
           if(xxxx == 5){ data.Wallet -= data.Wallet;}
           if(xxxx == 6){ data.fish += random}
           if(xxxx == 7){ return}
           if(xxxx == 8){ return}
           if(xxxx == 9){ return}
           if(xxxx == 10){ return}
           if(xxxx == 11){ return}
           if(xxxx == 12){ return}
           if(xxxx == 13){ data.fishrare += 1}

               message.reply(`${answerspos}`)
               data.save();
            }
           
        }
    })
}
}