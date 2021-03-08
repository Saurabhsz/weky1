const Discord = require('discord.js');
module.exports = {
  name: "panda",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..panda',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomPanda().then(panda => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐼`)
    .setImage(panda)
    message.channel.send(embed)
})
}
}