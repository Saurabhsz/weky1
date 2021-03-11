const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "cringe",
  aliases: ["howcringe", `cringerate`],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..cringe',
  cooldown: 3, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("CRINGE MACHINE")
        .setDescription(`You are ${rate}% cringe <:lol:695581441471545374>`)
        .setTimestamp()

        message.channel.send(embed)
      }
    }