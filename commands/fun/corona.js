const Discord = require("discord.js")
module.exports.config = {
  name: "corona",
  aliases: ["virus"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..corona',
  cooldown: 3, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    message.channel
    .send({embed: {description: "Starting sanatization process :mask:", color: "RANDOM", timestamp: new Date()}})
    .then((msg) => {
      setTimeout(() => {
        msg.edit({embed: {description: "Disinfecting the channel 🧼🧴", color: "RANDOM", timestamp: new Date()}});
      }, 3000);
      setTimeout(() => {
        msg.edit({embed: {description: "Cleaning pfps 🧼🧴", color: "RANDOM", timestamp: new Date()}});
      }, 6000);
      setTimeout(() => {
        msg.edit({embed: {description: "Sanatizing words 🧼📝", color: "RANDOM", timestamp: new Date()}});
      }, 9000);
      setTimeout(() => {
        msg.edit({embed: {description: "Killing all germs 🦠🔫", color: "RANDOM", timestamp: new Date()}});
      }, 12000);
      setTimeout(() => {
        msg.edit({embed: {description: "This channel is sanatized! \nHave a nice day", color: "RANDOM", timestamp: new Date()}});
      }, 15000);
    });
}
}