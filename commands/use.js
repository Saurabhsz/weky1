const Money = require("../schemas/Money")
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let buyArray = message.content.split(" ");
    let useArgs = buyArray.slice(1);

    if(useArgs[0] === 'script' || useArgs[0] === 'space' ) {
        const muni = Math.floor(Math.random() * 15000) + 1000;

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
                    const thesame = data.banknote == 0;
                    if(thesame) {return message.channel.send(`You dont have any Space Scripts :/`);} else {
                        data.space += muni;
                        data.banknote -= 1;
                        data.save();;
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.descriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used 1 Space Script and got **${muni} bank space**, gg lmao.`)
                        message.channel.send(embed)
                    }
                } else {
                    if(num > data.banknote) {return message.channel.send(`You dont have that many Space Scripts :/`);} else {
                        data.space += muni*num;
                        data.banknote -= num;
                        data.save();
                        const embed = new Discord.MessageEmbed()
                        .setAuthor(message.author.username+`#`+message.author.descriminator, message.member.user.displayAvatarURL())
                        .setDescription(`You used ${num} Space Script and got **${muni*num} bank space**, gg lmao.`)
                        message.channel.send(embed)
                }
            }
                

               
            }
        })
    }

    if(!useArgs[0]) {
        
        message.channel.send(`What you want to use? like bruh`);
    }


}

module.exports.config = {
    name: "use",
    description: "buy a item!",
    usage: "/use (item)",
    accessableby: "Members",
    aliases: []
}