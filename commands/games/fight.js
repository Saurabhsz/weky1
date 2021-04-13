
module.exports = {
  name: "fight",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..fight',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {  
    const challenger = message.author;
    const oppenent = message.mentions.users.first();
    if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky-npm')
const x = new fight({
    client: bot,
    message: message,
    acceptMessage: 'Click to fight with ' + message.author,
    challenger: message.author,
    opponent: message.mentions.users.first()
})
x.start()
  }
}