const Discord = require('discord.js');
module.exports = {
  name: "cat",
  aliases: ["kitty"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..cat',
  cooldown: 3, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomCat().then(cat => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐱`)
    .setImage(cat)
    message.channel.send(embed)
})
}
}