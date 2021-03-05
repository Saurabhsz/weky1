const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomPanda().then(panda => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐼`)
    .setImage(panda)
    message.channel.send(embed)
})
}
module.exports.config = {
    name: "panda",
    aliases: []
}