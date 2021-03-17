

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "magik",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..magik',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const fetch = require('node-fetch')
        if (message.mentions.users.size) {
            let member = message.mentions.users.first()
            if (member) {
              let URL = (member.avatarURL({ format: 'png', dynamic: false, size: 1024 }))
              let POWER = args.slice(0).join(" ")
      if(!POWER){
          return message.channel.send(`Please specify the intensity of the image magik effect(1-10)`)
      }
              fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${URL}&intensity=${POWER}&raw=1`)
                .then(res => res.json())
                .then(data => {
                    let embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setImage(data.message)
                    .setTitle(`Click here for link`)
                    .setURL(data.message)
                    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
                    .setTimestamp()
                  message.channel.send(embed)
      
                })
      
            } else {
              message.channel.send("Sorry none found with that name")
            }
      
      
          } else {
            let imageURL = (message.author.avatarURL({ format: 'png', dynamic: false, size: 1024 }))
            let poweruser = args.slice(0).join(" ")
            if(!poweruser){
                return message.channel.send(`Please specify the intensity of the image magik effect(1-10)`)
            }
            fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imageURL}&intensity=${poweruser}&raw=1`)
              .then(res => res.json())
              .then(data => {
                let embed = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setImage(data.message)
                  .setTitle(`Click here for link`)
                  .setURL(data.message)
                  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
                  .setTimestamp()
                message.channel.send(embed)
      
              })
          }
}
}