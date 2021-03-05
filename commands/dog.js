const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomDog().then(dog => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐶`)
    .setImage(dog)
    message.channel.send(embed)
})
}
module.exports.config = {
    name: "dog",
    aliases: ["puppy", "doggo"]
}