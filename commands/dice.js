const Discord = require('discord.js');
const { reDependencies } = require('mathjs');
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 10 more seconds`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`10s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    var num = parseFloat(args[1])
    if (num.isNaN) return message.channel.send("Thats not a valid number");
    const Money = require('../schemas/Money')
Money.findOne({
  id: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: message.author.id
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
    let result = (Math.floor(Math.random() * Math.floor(6) + 1));

  let member = message.author
  
  var num = parseFloat(args[1])
  if (num.isNaN) return message.channel.send("Thats not a valid number");
  if(!num) return message.channel.send("Thats not a valid number");
  if(num > 6) return message.channel.send("Thats not a valid number");
  if(num === 0) return message.channel.send("Thats not a valid number");
  let ra = Math.floor(Math.random() * 501) + 300;
  if(num === result){
      const dicerollEmbed = new Discord.MessageEmbed()
      .setTitle(`I rolled a **${result}**`)
      .setFooter(`${member.username}`)
      .setTimestamp();
  if (result === 1) {
    dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404787750109234/15i3bBsz_bMcGQ-UgDMCzQA.png")
    dicerollEmbed.setDescription(`You got **${ra}** coins`)
    dicerollEmbed.setColor(`GREEN`)
    data.Wallet += ra
    data.save()
    message.channel.send(dicerollEmbed)

  } else if ( result === 2) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404837175918593/1dqZhjZbsbEBDXzKQPAagXw.png")
      dicerollEmbed.setDescription(`You got **${ra}** coins`)
      dicerollEmbed.setColor(`GREEN`)
      data.Wallet += ra
      data.save()
      message.channel.send(dicerollEmbed)

  } else if (result === 3) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404895669157891/1DrPdeWaJON0XbtmiEZc3jw.png")
      dicerollEmbed.setDescription(`You got **${ra}** coins`)
      dicerollEmbed.setColor(`GREEN`)
      data.Wallet += ra
      data.save()
      message.channel.send(dicerollEmbed)

  } else if ( result === 4) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404984089411594/15w7bpE0KdwXc21zUQoOtOw.png")
      dicerollEmbed.setDescription(`You got **${ra}** coins`)
      dicerollEmbed.setColor(`GREEN`)
      data.Wallet += ra
      data.save()
      message.channel.send(dicerollEmbed)

  } else if (result === 5) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816405032613183518/1UYR8l1h7AI4MNtJWAugyjg.png")
      dicerollEmbed.setDescription(`You got **${ra}** coins`)
      dicerollEmbed.setColor(`GREEN`)
      data.Wallet += ra
      data.save()
      message.channel.send(dicerollEmbed)

  } else if (result === 6) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816405080273846292/115_KIo9vPHULoA98NYT9jQ.png")
      dicerollEmbed.setDescription(`You got **${ra}** coins`)
      dicerollEmbed.setColor(`GREEN`)
      data.Wallet += ra
      data.save()
      message.channel.send(dicerollEmbed)

  }
  } else{
      const dicerollEmbed = new Discord.MessageEmbed()
      .setTitle(`I rolled a **${result}**`)
      .setFooter(`${member.username}`)
      .setTimestamp();
  if (result === 1) {
    dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404787750109234/15i3bBsz_bMcGQ-UgDMCzQA.png")
    dicerollEmbed.setDescription(`You lost`)
    dicerollEmbed.setColor(`RED`)
    message.channel.send(dicerollEmbed)

  } else if (result === 2) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404837175918593/1dqZhjZbsbEBDXzKQPAagXw.png")
      dicerollEmbed.setDescription(`You lost`)
      dicerollEmbed.setColor(`RED`)
      message.channel.send(dicerollEmbed)

  } else if (result === 3) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404895669157891/1DrPdeWaJON0XbtmiEZc3jw.png")
      dicerollEmbed.setDescription(`You lost`)
      dicerollEmbed.setColor(`RED`)
      message.channel.send(dicerollEmbed)

  } else if (result === 4) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816404984089411594/15w7bpE0KdwXc21zUQoOtOw.png")
      dicerollEmbed.setDescription(`You lost`)
      dicerollEmbed.setColor(`RED`)
      message.channel.send(dicerollEmbed)

  } else if (result === 5) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816405032613183518/1UYR8l1h7AI4MNtJWAugyjg.png")
      dicerollEmbed.setDescription(`You lost`)
      dicerollEmbed.setColor(`RED`)
      message.channel.send(dicerollEmbed)

  } else if (result === 6) {
      dicerollEmbed.setThumbnail("https://cdn.discordapp.com/attachments/772628353421017118/816405080273846292/115_KIo9vPHULoA98NYT9jQ.png")
      dicerollEmbed.setDescription(`You lost`)
      dicerollEmbed.setColor(`RED`)
      message.channel.send(dicerollEmbed)

  }
}
}
});
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 10000);

}
    
module.exports.config = {
    name: "diceroll",
    description: "diceroll | Roll a die.",
    aliases: ["dice", "roll", "dr"]
}