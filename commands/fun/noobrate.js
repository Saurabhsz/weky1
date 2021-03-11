const { MessageEmbed } = require("discord.js")

module.exports.config = {
  name: "hownoob",
  aliases: ["noobrate"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..hownoob',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

        let rate = (Math.floor(Math.random() * Math.floor(100)));

        let user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("NOOB MACHINE")
        .setDescription(`You are ${rate}% noob 🇳 🇴 🇴 🇧`)
        .setTimestamp()

        message.channel.send(embed)
      }

          }