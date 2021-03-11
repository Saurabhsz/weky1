const Money = require("../../schemas/Money")
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports.config = {
  name: "use",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..use',
  cooldown: 4, //seconds(s)
  cooldowny: 1,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {


    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);

    if(useArgs[0] === 'script' || useArgs[0] === 'space' ) {
        const muni = Math.floor(Math.random() * 15000) + 1000;

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
                        data.space += muni;
                        data.banknote -= 1;
                        data.save();;
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used <:spacescript:814122006437167134> 1 Space Script and got **${muni} bank space**, gg lmao.`)
                        message.channel.send(embed)
                    }
                } else {
                    if(num > data.banknote) {return message.channel.send(`You dont have that many Space Scripts :/`);} else {
                        data.space += muni*num;
                        data.banknote -= num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used <:spacescript:814122006437167134> ${num} Space Scripts and got **${muni*num} bank space**, gg lmao.`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }
    if(useArgs[0] === 'gotcha' || useArgs[0] === 'gotchabox' ) {
        const Money = require('../../schemas/Money')
        Money.findOne({
          id: message.author.id
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            newD = new Money({
              id: message.author.id
            });
            newD.save();
            let user = message.guild.members.cache.get(message.author.id);
            user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
          } else {
            if(0 >= data.Lootbox) {
                return message.channel.send(`You dont have any Gotcha Boxes, sorry dude!`);
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
                data.silvermoon += 1
                data.Lootbox -= 1
                data.save()
              } else if(random < 5){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC}\`\n\`1 Weky's Moon\``)
                data.Wallet += randomC
                data.wekymoon += 1
                data.Lootbox -= 1
                data.save()
              } else if(random < 30){
                  if(br === 0){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Plastic Hand\``)
                data.Wallet += randomC    
                data.fishing += l
                  data.Lootbox -= 1
                  data.save()
            } else if(br === 1){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Laptops\``)
                    data.Wallet += randomC
                    data.Laptop += l
                    data.Lootbox -= 1
                    data.save()
                } else if(br === 2){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\`\n\`${l} Space Scripts\``)
                    data.Wallet += randomC
                    data.banknote += l
                    data.Lootbox -= 1
                    data.save()
                  }
                
            } else if(random < 36){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`${randomC} coins\``)
            data.Wallet += randomC
            data.Lootbox -= 1
            data.save()
            } else if(random < 80){
                message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
            data.Wallet += 500
            data.Lootbox -= 1
            data.save()
                      } else if(random < 101){
                    message.channel.send(`**${message.author} used a Gotcha Box**\n\`500 coins\``)
                    data.Wallet += 500
                    data.Lootbox -= 1
            data.save()
                      }
                }
            }
                });
    }
    if(!useArgs[0]) {
        
        message.channel.send(`What you want to use? like bruh`);
    }


}
}