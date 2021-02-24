const Money = require("../schemas/Money")
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

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
                    if(4000 > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} laptops, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 4000;
                        data.Laptop += 1;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`💻 You sucessfully bought **1 Laptop**`)
                        message.channel.send(embed)
                    }
                } else {
                    if(4000*num > data.Wallet) {return message.channel.send(`You dont have money to buy ${num} laptops, make sure that you have the money in wallet`);} else {
                        data.Wallet -= 4000*num;
                        data.Laptop += num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`💻 You sucessfully bought **${num} Laptop**`)
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

    if(!buyArgs[0]) {
        
        message.channel.send(`Ye ye weky here what you want to buy, /shop for the list :rolling_eyes:`);
    }


}

module.exports.config = {
    name: "buy",
    description: "buy a item!",
    usage: "/buy (item)",
    accessableby: "Members",
    aliases: []
}