const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 45 more seconds`)
    .setDescription(`😡 Dont you dare to frikin tryna break me, please wait \`45s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    const Money = require('../schemas/Money')
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
    let random = Math.floor(Math.random() * 3) +1
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
               if(xxxx == 0 && xxxx == 1 && xxxx == 2 && xxxx == 3 && xxxx == 6){ data.fish += random
                data.save();}
               if(xxxx == 4){ data.fish += random
                              data.fishing -= 1
                              data.save();}
               if(xxxx == 5){ data.Wallet -= data.Wallet
                              data.save();}
               if(xxxx == 7 && xxxx == 8 && xxxx == 9 && xxxx == 10 && xxxx == 11 && xxxx == 12){ return}
                if(xxxx == 13) { data.fishrare += 1 }
               message.reply(`${answerspos}`)
            }
           
        }
    })
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 45000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
}

module.exports.config = {
    name: "fish",
    aliases: []
}