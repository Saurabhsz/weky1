const Discord = require('discord.js');
module.exports = {
  name: "dog",
  aliases: ["puppy"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..dog',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomDog().then(dog => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐶`)
    .setImage(dog)
    message.channel.send(embed)
})
}
}