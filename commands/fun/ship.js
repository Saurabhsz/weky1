            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            const { MessageEmbed } = require("discord.js")

    const shipTarget1 = (args[0])
    const shipTarget2 = (args[1])

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

function ship() {
    const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
    const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}%`;
    return str;
}
            };
            
            module.exports.help = {
                aliases: ['ship'],
                  name: 'loverate',
                  description: 'Shipping users.',
                  usage: config.prefix + 'ship @user @user',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
            
