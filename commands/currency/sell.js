const Money = require("../../schemas/Money")
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "sell",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..sell',
  cooldown: 8, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {


    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);

    if(useArgs[0] === 'script' || useArgs[0] === 'space' ) {
        var num = parseFloat(args[1])

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
                    const thesame = data.banknote == 0;
                    if(thesame) {return message.channel.send(`You dont have any Space Scripts :/`);} else {
                        data.Wallet += 5000;
                        data.banknote -= 1;
                        data.save();;
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sold <:spacescript:814122006437167134> 1 Space Script for **5000** coins.`)
                        message.channel.send(embed)
                    }
                } else {
                    if(num > data.banknote) {return message.channel.send(`You dont have that many Space Scripts :/`);} else {
                        data.Wallet += 5000*num
                        data.banknote -= num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You sold <:spacescript:814122006437167134> ${num} Space Scripts and got **${5000*num}** coins`)
                        message.channel.send(embed)
                }
            }

            }
        
            })   
    }
    if(useArgs[0] === 'laptop' || useArgs[0] === 'lap') {
            var num = parseFloat(args[1])
    
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
                        const thesame = data.Laptop == 0;
                        if(thesame) {return message.channel.send(`You dont have any Rare Fish`);} else {
                            data.Wallet += 1000;
                            data.Laptop -= 1;
                            data.save();;
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                            .setDescription(`You sold <:laptop:814147340947554314> 1 Laptop for **1000** coins.`)
                            message.channel.send(embed)
                        }
                    } else {
                        if(num > data.Laptop) {return message.channel.send(`You dont have that many Fishes`);} else {
                            data.Wallet += 1000*num
                            data.Laptop -= num;
                            data.save();
                            const embed = new Discord.MessageEmbed()
                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                            .setDescription(`You sold <:laptop:814147340947554314> ${num} Laptops for **${1000*num}** coins.`)
                            message.channel.send(embed)
                        }
                    }
        
                    }
                
                    })   
            }
        if(useArgs[0] === 'wekymoon') {
            var num = parseFloat(args[1])
    
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
message.channel.send(`You cannot sell this item.`)
        
                    }
                
                    })   
            }
            if(useArgs[0] === 'plastichand' || useArgs[0] === 'handplastic' || useArgs[0] === 'hand' || useArgs[0] === 'plastic') {
                var num = parseFloat(args[1])
        
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
                            const thesame = data.fishing == 0;
                            if(thesame) {return message.channel.send(`You dont have any Plastic Hand :/`);} else {
                                data.Wallet += 1500;
                                data.fishing -= 1;
                                data.save();;
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                .setDescription(`You sold <:plastichand:816373822784667719> 1 Plastic Hand for **1500** coins.`)
                                message.channel.send(embed)
                            }
                        } else {
                            if(num > data.wekymoon) {return message.channel.send(`You dont have that many Plastic Hands :/`);} else {
                                data.Wallet += 1500*num
                                data.fishing -= num;
                                data.save();
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                .setDescription(`You sold <:plastichand:816373822784667719> ${num} Plastic Hands **${1500*num}** coins.`)
                                message.channel.send(embed)
                            }
                        }
            
                        }
                    
                        })   
                }
                if(useArgs[0] === 'wekyripoff' || useArgs[0] === 'wekyrip' || useArgs[0] === 'ripoff') {
                    var num = parseFloat(args[1])
            
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
                            
                            message.channel.send(`You cannot sell this item.`)
                            }
                        
                            })   
                    }
                    if(useArgs[0] === 'fi' || useArgs[0] === 'fis' || useArgs[0] === 'fish') {
                        var num = parseFloat(args[1])
                
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
                                    const thesame = data.fish == 0;
                                    if(thesame) {return message.channel.send(`You dont have any Rare Fish`);} else {
                                        data.Wallet += 250;
                                        data.fish -= 1;
                                        data.save();;
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                        .setDescription(`You sold <:fish:816367967733547038> 1 Fish for **250** coins.`)
                                        message.channel.send(embed)
                                    }
                                } else {
                                    if(num > data.fish) {return message.channel.send(`You dont have that many Fishes`);} else {
                                        data.Wallet += 250*num
                                        data.fish -= num;
                                        data.save();
                                        const embed = new Discord.MessageEmbed()
                                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                        .setDescription(`You sold <:fish:816367967733547038> ${num} Fishes for **${250*num}** coins.`)
                                        message.channel.send(embed)
                                    }
                                }
                    
                                }
                            
                                })   
                        }
                        if(useArgs[0] === 'fishrare' || useArgs[0] === 'rarefi' || useArgs[0] === 'rarefish') {
                            var num = parseFloat(args[1])
                    
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
                                        const thesame = data.fishrare == 0;
                                        if(thesame) {return message.channel.send(`You dont have any Rare Fish`);} else {
                                            data.Wallet += 500;
                                            data.fishrare -= 1;
                                            data.save();;
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                            .setDescription(`You sold <:fish:816367967733547038> 1 Rare Fish for **500** coins.`)
                                            message.channel.send(embed)
                                        }
                                    } else {
                                        if(num > data.fishrare) {return message.channel.send(`You dont have that many Rare Fishes`);} else {
                                            data.Wallet += 500*num
                                            data.fishrare -= num;
                                            data.save();
                                            const embed = new Discord.MessageEmbed()
                                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                            .setDescription(`You sold <:fish:816367967733547038> ${num} Rare Fishes for **${500*num}** coins.`)
                                            message.channel.send(embed)
                                        }
                                    }
                        
                                    }
                                
                                    })   
                            }
                            if(useArgs[0] === 'fox' || useArgs[0] === 'fo') {
                                var num = parseFloat(args[1])
                        
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
                                            const thesame = data.fox == 0;
                                            if(thesame) {return message.channel.send(`You dont have any Foxes :/`);} else {
                                                data.Wallet += 50;
                                                data.fox -= 1;
                                                data.save();;
                                                const embed = new Discord.MessageEmbed()
                                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                .setDescription(`You sold :fox: 1 Fox **50** coins.`)
                                                message.channel.send(embed)
                                            }
                                        } else {
                                            if(num > data.fox) {return message.channel.send(`You dont have that many Foxes :/`);} else {
                                                data.Wallet += 50*num
                                                data.fox -= num;
                                                data.save();
                                                const embed = new Discord.MessageEmbed()
                                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                .setDescription(`You sold :fox: ${num} Foxes **${50*num}** coins.`)
                                                message.channel.send(embed)
                                            }
                                        }
                            
                                        }
                                    
                                        })   
                                }
                                if(useArgs[0] === 'tiger' || useArgs[0] === 'ti' || useArgs[0] === 'tig' || useArgs[0] === 'tige') {
                                    var num = parseFloat(args[1])
                            
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
                                                const thesame = data.tiger == 0;
                                                if(thesame) {return message.channel.send(`You dont have any Tigers :/`);} else {
                                                    data.Wallet += 200;
                                                    data.tiger -= 1;
                                                    data.save();;
                                                    const embed = new Discord.MessageEmbed()
                                                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                    .setDescription(`You sold :tiger: 1 Tiger for **200** coins.`)
                                                    message.channel.send(embed)
                                                }
                                            } else {
                                                if(num > data.tiger) {return message.channel.send(`You dont have that many Tigers :/`);} else {
                                                    data.Wallet += 200*num
                                                    data.tiger -= num;
                                                    data.save();
                                                    const embed = new Discord.MessageEmbed()
                                                    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                    .setDescription(`You sold :tiger: ${num} Tigers **${200*num}** coins.`)
                                                    message.channel.send(embed)
                                                }
                                            }
                                
                                            }
                                        
                                            })   
                                    }
                                    if(useArgs[0] === 'eagle' || useArgs[0] === 'ea' || useArgs[0] === 'eag' || useArgs[0] === 'eagl') {
                                        var num = parseFloat(args[1])
                                
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
                                                    const thesame = data.eagle == 0;
                                                    if(thesame) {return message.channel.send(`You dont have any Eagles :/`);} else {
                                                        data.Wallet += 500;
                                                        data.eagle -= 1;
                                                        data.save();;
                                                        const embed = new Discord.MessageEmbed()
                                                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                        .setDescription(`You sold :eagle: 1 Eagle for **500** coins.`)
                                                        message.channel.send(embed)
                                                    }
                                                } else {
                                                    if(num > data.eagle) {return message.channel.send(`You dont have that many Eagles :/`);} else {
                                                        data.Wallet += 500*num
                                                        data.eagle -= num;
                                                        data.save();
                                                        const embed = new Discord.MessageEmbed()
                                                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                        .setDescription(`You sold :eagle: ${num} Eagles **${500*num}** coins.`)
                                                        message.channel.send(embed)
                                                    }
                                                }
                                    
                                                }
                                            
                                                })   
                                        }
                                        if(useArgs[0] === 'bear' || useArgs[0] === 'be' || useArgs[0] === 'bea' || useArgs[0] === 'bears') {
                                            var num = parseFloat(args[1])
                                    
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
                                                        const thesame = data.bear == 0;
                                                        if(thesame) {return message.channel.send(`You dont have any Bears :/`);} else {
                                                            data.Wallet += 1200;
                                                            data.bear -= 1;
                                                            data.save();
                                                            const embed = new Discord.MessageEmbed()
                                                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                            .setDescription(`You sold :bear: 1 Bear for **1200** coins.`)
                                                            message.channel.send(embed)
                                                        }
                                                    } else {
                                                        if(num > data.bear) {return message.channel.send(`You dont have that many Bears :/`);} else {
                                                            data.Wallet += 1200*num
                                                            data.bear -= num;
                                                            data.save();
                                                            const embed = new Discord.MessageEmbed()
                                                            .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                            .setDescription(`You sold :bear: ${num} Bears **${1200*num}** coins.`)
                                                            message.channel.send(embed)
                                                        }
                                                    }
                                        
                                                    }
                                                
                                                    })   
                                            }
                                            if(useArgs[0] === 'sn' || useArgs[0] === 'sni' || useArgs[0] === 'snip' || useArgs[0] === 'sniper') {
                                                var num = parseFloat(args[1])
                                        
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
                                                            const thesame = data.gun == 0;
                                                            if(thesame) {return message.channel.send(`You dont have any Snipers :/`);} else {
                                                                data.Wallet += 2000;
                                                                data.gun -= 1;
                                                                data.save();
                                                                const embed = new Discord.MessageEmbed()
                                                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                                .setDescription(`You sold <:Sniper:818044125580492800> 1 Sniper for **2000** coins.`)
                                                                message.channel.send(embed)
                                                            }
                                                        } else {
                                                            if(num > data.gun) {return message.channel.send(`You dont have that many Snipers :/`);} else {
                                                                data.Wallet += 2000*num
                                                                data.gun -= num;
                                                                data.save();
                                                                const embed = new Discord.MessageEmbed()
                                                                .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                                                                .setDescription(`You sold <:Sniper:818044125580492800> ${num} Snipers **${2000*num}** coins.`)
                                                                message.channel.send(embed)
                                                            }
                                                        }
                                            
                                                        }
                                                    
                                                        })   
                                                }
                        if(!useArgs[0]) {
        
        message.channel.send(`What you want to sell? Use ..inv to see what you have.`);
    }


}
}