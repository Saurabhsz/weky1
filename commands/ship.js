const block = "⬛";
const heart = "💖";
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const shipTarget1 = (args[1])
    const shipTarget2 = (args[2])

        // Input Checking
          const noInput12 = new Discord.MessageEmbed()
            .setDescription('Error! Please specify 2 args for this comamnd')
            .setColor('RED')
          if (!shipTarget1) return message.channel.send(noInput12)

          const noInput21 = new Discord.MessageEmbed()
            .setDescription('Error! Please specify 2 args for this command!')
            .setColor('RED')
          if (!shipTarget2) return message.channel.send(noInput21)

          // Executing
          const shipEmbed = new Discord.MessageEmbed()
            .setTitle('💗 | MatchMaking | 💗')
            .setDescription(`
            🔻 | ${shipTarget1} \n🔺 | ${shipTarget2}
            `)
            .setColor('d1c8c4')
            .addField('MatchMaking Result', (`
              Their love-score is ${Math.floor(Math.random() * 100)}%! 💘
            `))
            .setFooter('Ship Command', message.guild.iconURL())
            message.channel.send(shipEmbed)
      }

module.exports.config = {
    name: "ship",
    description: "ship a user",
    usage: "/ship <user1> <user2>",
    accessableby: "Members",
    aliases: []
}

function ship() {
    const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
    const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}%`;
    return str;
}