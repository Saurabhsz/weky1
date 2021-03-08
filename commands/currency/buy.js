const Money = require("../../schemas/Money")
const Discord = require("discord.js");
module.exports = {
    name: "buy",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..buy',
    cooldown: 6, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    let buyArray = message.content.split(" ");
    let buyArgs = buyArray.slice(1);

    if(buyArgs[0] === 'laptop') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(4000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 laptop, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 4000;
                        data.Laptop += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:laptop:814147340947554314> **1 Laptop**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(4000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} laptops, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 4000*num;
                        data.Laptop += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:laptop:814147340947554314> **${num} Laptop**`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }
    if(buyArgs[0] === 'script' || buyArgs[0] === 'space') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(100000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 script, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 100000;
                        data.banknote += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:spacescript:814122006437167134> **1 Space Script**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(100000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} scripts, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 100000*num;
                        data.banknote += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:spacescript:814122006437167134> **${num} Space Scripts**`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }
    if(buyArgs[0] === 'moon' || buyArgs[0] === 'wekymoon') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(2000000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 Weky's Moon, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 2000000;
                        data.wekymoon += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought 🌝 **1 Weky's Moon**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(2000000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} Weky's Moons, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 2000000*num;
                        data.wekymoon += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought 🌝 **${num} Weky's Moons**`)
                        message.channel.send(embed)
                }
            }


               
            }
            
            
        })
    }
    if(buyArgs[0] === 'sniper') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(20000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 Sniper, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 20000;
                        data.gun += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:Sniper:818044125580492800> **1 Sniper**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(20000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} Snipers, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 20000*num;
                        data.gun += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:Sniper:818044125580492800> **${num} Snipers**`)
                        message.channel.send(embed)
                }
            }


               
            }
            
            
        })
    }
    if(buyArgs[0] === 'wekyrip' || buyArgs[0] === 'wekyripoff') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(12000000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 Weky's Rip Off, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 12000000;
                        data.wekyripoff += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:ripoff:815192242331451423> **1 Weky's Rip Off**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(12000000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} scripts, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 12000000*num;
                        data.wekyripoff += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:ripoff:815192242331451423> **${num} Weky's Rip Off**`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }
    if(buyArgs[0] === 'plastic' || buyArgs[0] === 'plastichand' || buyArgs[0] === 'phand' || buyArgs[0] === 'hand') {
        var num = parseFloat(args[2])

        Money.findOne({
            id: message.author.id
        },
         (err, data) => {
            if(err) console.log(err);
            if(!data){
            const newD = new Money({
                id: message.author.id
            })
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
            } else {
                if(!num){
                    if(15000 > data.Wallet) {return message.channel.send(`You dont have money to buy 1 Plastic Hand, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 15000;
                        data.fishing += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:plastichand:816373822784667719> **1 Plastic Hand**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(15000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} Plastic Hands, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 15000*num;
                        data.fishing += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sucessfully bought <:plastichand:816373822784667719> **${num} Platic Hands**`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }
    if(!buyArgs[0]) {
        
        message.channel.send(`Ye ye weky here what you want to buy, ..shop for the list :rolling_eyes:`);
    }


}
}